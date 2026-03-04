import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild
  ,
  ViewChildren,
  QueryList
} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

type Skill = {
  name: string;
  icon: string;
};

@Component({
  selector: 'app-experience-page',
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatProgressBarModule],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencePageComponent implements AfterViewInit, OnDestroy {
	@ViewChild('skillsTrack') private readonly skillsTrack?: ElementRef<HTMLElement>;
  @ViewChildren('skillSlide', { read: ElementRef }) private readonly skillSlides?: QueryList<ElementRef<HTMLElement>>;

  private rafId: number | null = null;
  private lastTimestamp: number | null = null;
  private isPointerDown = false;
  private isHoverPaused = false;
  private pointerStartX = 0;
  private startScrollLeft = 0;
  private loopSetWidth = 0;
  private loopBaseOffset = 0;
  private loopStart = 0;
  private slideStep = 0;
  private autoScrollLeft = 0;

  // Pixels per second. (Small on purpose; feels modern, not distracting.)
  private readonly autoScrollSpeed = 60;

  skillsProgress = 0; // 0..100 for MatProgressBar
  activeSkillIndex = 0;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  experienceHighlights: string[] = [
    'Deliver responsive, accessible front ends (Angular/TypeScript, React) with maintainable component structure.',
    'Design and integrate REST APIs across stacks (.NET/Express/Flask) with clear contracts, validation, and error handling.',
    'Implement secure authentication and authorization (JWT/OAuth/OpenID) and follow safe client/server patterns.',
    'Model relational data with integrity in mind (EF Core + SQL Server), including migrations and constraints.',
    'Improve reliability through testing, CI/CD, Docker, and environment-based configuration.',
    'Communicate trade-offs and ship iteratively—delivering smaller slices, gathering feedback, and polishing confidently.'
  ];

  skills: Skill[] = [
    { name: 'Angular', icon: '/skills/angular.svg' },
    { name: 'TypeScript', icon: '/skills/typescript.svg' },
    { name: 'RxJS', icon: '/skills/rxjs.svg' },
    { name: 'HTML', icon: '/skills/html5.svg' },
    { name: 'SCSS/CSS', icon: '/skills/css3.svg' },
    { name: '.NET / ASP.NET Core', icon: '/skills/dotnet.svg' },
    { name: 'Entity Framework Core', icon: '/skills/efcore.svg' },
    { name: 'SQL Server', icon: '/skills/sqlserver.svg' },
    { name: 'Node.js / Express', icon: '/skills/express.svg' },
    { name: 'Flask', icon: '/skills/flask.svg' },
    { name: 'Docker', icon: '/skills/docker.svg' },
    { name: 'GitHub Actions', icon: '/skills/githubactions.svg' },
    { name: 'Jest / Unit Testing', icon: '/skills/jest.svg' },
    { name: 'REST / Auth (OAuth, JWT)', icon: '/skills/jwt.svg' }
  ];

  // Render 3x to allow seamless looping without a visible jump.
  get skillsLoop(): Skill[] {
    return [...this.skills, ...this.skills, ...this.skills];
  }

  ngAfterViewInit(): void {
    // Defer until layout is stable so scrollWidth measurements are correct.
    requestAnimationFrame(() => {
      this.setupLoopingGeometry();
      this.updateSkillsProgress();
      this.updateActiveSkill();
      this.startAutoScroll();
    });
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  onSkillsScroll(): void {
    const track = this.skillsTrack?.nativeElement;
    if (track) this.autoScrollLeft = track.scrollLeft;
		this.updateActiveSkill();
    this.updateSkillsProgress();
  }

  pauseAutoScroll(paused: boolean): void {
    this.isHoverPaused = paused;
    this.lastTimestamp = null;
  }

  onSkillsPointerDown(event: PointerEvent): void {
    const track = this.skillsTrack?.nativeElement;
    if (!track) return;

		// On real touch devices, prefer native horizontal scrolling.
		// Our pointer-capture drag handling can prevent normal finger scrolling.
		if (event.pointerType === 'touch') return;

    this.isPointerDown = true;
    this.pointerStartX = event.clientX;
    this.startScrollLeft = track.scrollLeft;
    track.setPointerCapture(event.pointerId);
    this.lastTimestamp = null;
  }

  onSkillsPointerMove(event: PointerEvent): void {
    if (event.pointerType === 'touch') return;
    if (!this.isPointerDown) return;
    const track = this.skillsTrack?.nativeElement;
    if (!track) return;

    const deltaX = event.clientX - this.pointerStartX;
    track.scrollLeft = this.startScrollLeft - deltaX;
    this.autoScrollLeft = track.scrollLeft;
  }

  onSkillsPointerUp(event: PointerEvent): void {
    if (event.pointerType === 'touch') return;
    const track = this.skillsTrack?.nativeElement;
    this.isPointerDown = false;
    this.lastTimestamp = null;
    if (track) this.autoScrollLeft = track.scrollLeft;
    try {
      track?.releasePointerCapture(event.pointerId);
    } catch {
      // ignore
    }
  }

  scrollSkills(direction: -1 | 1): void {
    const track = this.skillsTrack?.nativeElement;
    if (!track) return;
    if (this.slideStep <= 0) this.setupLoopingGeometry();

    const step = this.slideStep || 280;

    // IMPORTANT: auto-scroll continuously writes scrollLeft via rAF.
    // If we use smooth scrolling here, the rAF loop will override it and
    // the arrows will look like they do nothing.
    this.autoScrollLeft = track.scrollLeft;
    this.autoScrollLeft += direction * step;

    // Keep position inside the loop range so arrows remain seamless.
    if (this.loopSetWidth > 0) {
      const end = this.loopStart + this.loopSetWidth;
      while (this.autoScrollLeft >= end) this.autoScrollLeft -= this.loopSetWidth;
      while (this.autoScrollLeft < this.loopStart) this.autoScrollLeft += this.loopSetWidth;
    }

    track.scrollLeft = this.autoScrollLeft;
    this.lastTimestamp = null;

		this.updateActiveSkill();
    this.updateSkillsProgress();
  }

  @HostListener('window:pointerup', ['$event'])
  @HostListener('window:pointercancel', ['$event'])
  onWindowPointerUp(event: PointerEvent): void {
    if (!this.isPointerDown) return;
    this.onSkillsPointerUp(event);
  }

  private startAutoScroll(): void {
    if (this.rafId != null) return;
    this.rafId = requestAnimationFrame((ts) => this.tick(ts));
  }

  private stopAutoScroll(): void {
    if (this.rafId == null) return;
    cancelAnimationFrame(this.rafId);
    this.rafId = null;
    this.lastTimestamp = null;
  }

  private tick(timestamp: number): void {
    this.rafId = requestAnimationFrame((ts) => this.tick(ts));
    const track = this.skillsTrack?.nativeElement;
    if (!track) return;
    if (this.isPointerDown || this.isHoverPaused) return;
    if (this.loopSetWidth <= 0) this.setupLoopingGeometry();

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    if (maxScrollLeft <= 1) return;

    if (this.lastTimestamp == null) {
      this.lastTimestamp = timestamp;
      return;
    }
    const dt = (timestamp - this.lastTimestamp) / 1000;
    this.lastTimestamp = timestamp;
    if (dt <= 0) return;

    // Accumulate sub-pixel motion (some browsers effectively quantize scrollLeft).
    this.autoScrollLeft += this.autoScrollSpeed * dt;

    // Seamless loop: keep scroll position within one full set starting at loopStart.
    if (this.loopSetWidth > 0) {
      const end = this.loopStart + this.loopSetWidth;
      if (this.autoScrollLeft >= end) {
        this.autoScrollLeft -= this.loopSetWidth;
      } else if (this.autoScrollLeft < this.loopStart) {
        this.autoScrollLeft += this.loopSetWidth;
      }
    }

    track.scrollLeft = this.autoScrollLeft;

		this.updateActiveSkill();
    this.updateSkillsProgress();
  }

  private setupLoopingGeometry(): void {
    const track = this.skillsTrack?.nativeElement;
    if (!track) return;
    // With 3 identical copies, one "set" is 1/3 of scrollWidth.
    this.loopSetWidth = track.scrollWidth / 3;
    this.loopBaseOffset = this.loopSetWidth; // middle copy

    const firstSlide = track.querySelector('.skillSlide') as HTMLElement | null;
    const slideWidth = firstSlide?.getBoundingClientRect().width ?? 0;
    const style = window.getComputedStyle(track);
    const gapRaw = style.columnGap || style.gap || '0px';
    const gap = Number.parseFloat(gapRaw) || 0;
    this.slideStep = slideWidth > 0 ? slideWidth + gap : 0;

    // Center the FIRST skill of the middle set.
    const centerOffset = slideWidth > 0 ? (track.clientWidth - slideWidth) / 2 : 0;
    this.loopStart = this.loopBaseOffset - centerOffset;

    // Start inside the middle copy so the centered first skill is the initial focus.
    track.scrollLeft = this.loopStart;
    this.autoScrollLeft = track.scrollLeft;
    this.lastTimestamp = null;
  }

  private updateSkillsProgress(): void {
    const track = this.skillsTrack?.nativeElement;
    if (!track) return;
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    if (maxScrollLeft <= 1) {
      this.skillsProgress = 0;
      this.cdr.markForCheck();
      return;
    }

    // Make the progress bar reflect the *active centered* skill.
    // This guarantees we hit 100% as soon as the last skill is shown/active.
    const count = this.skills.length;
    if (count <= 1) {
      this.skillsProgress = 0;
      this.cdr.markForCheck();
      return;
    }

    const logicalIndex = ((this.activeSkillIndex % count) + count) % count;
    this.skillsProgress = Math.max(0, Math.min(100, (logicalIndex / (count - 1)) * 100));
    this.cdr.markForCheck();
  }

  private updateActiveSkill(): void {
    const track = this.skillsTrack?.nativeElement;
    const slides = this.skillSlides;
    if (!track || !slides || slides.length === 0) return;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;

    let bestIndex = 0;
    let bestDistance = Number.POSITIVE_INFINITY;
    slides.forEach((slideRef, index) => {
      const rect = slideRef.nativeElement.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const distance = Math.abs(center - trackCenter);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });

    if (bestIndex !== this.activeSkillIndex) {
      this.activeSkillIndex = bestIndex;
      this.cdr.markForCheck();
    }
  }
}
