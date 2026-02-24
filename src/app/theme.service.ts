import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'portfolio.themeMode';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  getInitialMode(): ThemeMode {
    const saved = this.safeReadStorage();
    if (saved === 'light' || saved === 'dark') return saved;

    try {
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
      return prefersDark ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  }

  setMode(mode: ThemeMode): void {
    const body = this.document.body;
    body.classList.toggle('light-theme', mode === 'light');
    body.classList.toggle('dark-theme', mode === 'dark');
    this.safeWriteStorage(mode);
  }

  private safeReadStorage(): string | null {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  private safeWriteStorage(mode: ThemeMode): void {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // ignore
    }
  }
}