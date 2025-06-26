'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { urlShortener } from '@/lib/url-shortener';
import { storage } from '@/lib/storage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Home, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function RedirectPage() {
  const params = useParams();
  const shortcode = params.shortcode as string;
  const [isRedirecting, setIsRedirecting] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [originalUrl, setOriginalUrl] = useState('');

  useEffect(() => {
    if (!shortcode) return;

    // First check localStorage
    const storedUrls = storage.getUrls();
    const storedUrl = storedUrls.find(url => url.shortCode === shortcode);
    
    if (storedUrl) {
      setOriginalUrl(storedUrl.originalUrl);
      storage.updateClicks(shortcode);
      
      // Add a small delay for better UX
      setTimeout(() => {
        window.location.href = storedUrl.originalUrl;
      }, 1500);
    } else {
      // Check server-side storage as fallback
      const serverUrl = urlShortener.getUrl(shortcode);
      
      if (serverUrl) {
        setOriginalUrl(serverUrl.originalUrl);
        urlShortener.incrementClicks(shortcode);
        
        setTimeout(() => {
          window.location.href = serverUrl.originalUrl;
        }, 1500);
      } else {
        setIsRedirecting(false);
        setNotFound(true);
      }
    }
  }, [shortcode]);

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-xl max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Link Not Found</h1>
              <p className="text-white/70">
                The shortened URL you're looking for doesn't exist or has expired.
              </p>
            </div>
            
            <div className="space-y-3">
              <Link href="/" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Home className="w-4 h-4 mr-2" />
                  Go to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-xl max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Redirecting...</h1>
            <p className="text-white/70 mb-4">
              You're being redirected to your destination.
            </p>
            {originalUrl && (
              <p className="text-sm text-white/50 break-all bg-white/10 p-2 rounded">
                {originalUrl}
              </p>
            )}
          </div>
          
          <div className="space-y-3">
            {originalUrl && (
              <Button
                onClick={() => window.location.href = originalUrl}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Go Now
              </Button>
            )}
            
            <Link href="/" className="block">
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}