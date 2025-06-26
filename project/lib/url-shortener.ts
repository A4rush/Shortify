export interface ShortenedUrl {
  id: string;
  originalUrl: string;
  shortCode: string;
  clicks: number;
  createdAt: string;
}

class UrlShortener {
  private urls: Map<string, ShortenedUrl> = new Map();

  generateShortCode(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  shortenUrl(originalUrl: string): ShortenedUrl {
    // Ensure URL has protocol
    if (!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')) {
      originalUrl = 'https://' + originalUrl;
    }

    let shortCode = this.generateShortCode();
    
    // Ensure unique short code
    while (this.urls.has(shortCode)) {
      shortCode = this.generateShortCode();
    }

    const shortenedUrl: ShortenedUrl = {
      id: Date.now().toString(),
      originalUrl,
      shortCode,
      clicks: 0,
      createdAt: new Date().toISOString(),
    };

    this.urls.set(shortCode, shortenedUrl);
    return shortenedUrl;
  }

  getUrl(shortCode: string): ShortenedUrl | null {
    return this.urls.get(shortCode) || null;
  }

  incrementClicks(shortCode: string): void {
    const url = this.urls.get(shortCode);
    if (url) {
      url.clicks++;
      this.urls.set(shortCode, url);
    }
  }

  getAllUrls(): ShortenedUrl[] {
    return Array.from(this.urls.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  deleteUrl(shortCode: string): boolean {
    return this.urls.delete(shortCode);
  }
}

export const urlShortener = new UrlShortener();