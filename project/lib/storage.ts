import { ShortenedUrl } from './url-shortener';

const STORAGE_KEY = 'shortened-urls';

export const storage = {
  getUrls(): ShortenedUrl[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  saveUrl(url: ShortenedUrl): void {
    if (typeof window === 'undefined') return;
    
    try {
      const urls = this.getUrls();
      const existing = urls.findIndex(u => u.shortCode === url.shortCode);
      
      if (existing >= 0) {
        urls[existing] = url;
      } else {
        urls.unshift(url);
      }
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
    } catch (error) {
      console.error('Failed to save URL:', error);
    }
  },

  updateClicks(shortCode: string): void {
    if (typeof window === 'undefined') return;
    
    try {
      const urls = this.getUrls();
      const urlIndex = urls.findIndex(u => u.shortCode === shortCode);
      
      if (urlIndex >= 0) {
        urls[urlIndex].clicks++;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
      }
    } catch (error) {
      console.error('Failed to update clicks:', error);
    }
  },

  deleteUrl(shortCode: string): void {
    if (typeof window === 'undefined') return;
    
    try {
      const urls = this.getUrls();
      const filtered = urls.filter(u => u.shortCode !== shortCode);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    } catch (error) {
      console.error('Failed to delete URL:', error);
    }
  }
};