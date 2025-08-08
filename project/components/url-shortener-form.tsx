"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, ExternalLink, Check } from "lucide-react";
import { urlShortener, ShortenedUrl } from "@/lib/url-shortener";
import { storage } from "@/lib/storage";

export default function UrlShortenerForm() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState<ShortenedUrl | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const isValidUrl = (string: string) => {
    try {
      const url = string.startsWith("http")
        ? string
        : `https://shortify.${string}`;
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    if (!isValidUrl(url)) {
      setError("Please enter a valid URL");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulate network delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 800));

      const shortened = urlShortener.shortenUrl(url);
      storage.saveUrl(shortened);
      setShortenedUrl(shortened);
      setUrl("");
    } catch (err) {
      setError("Failed to shorten URL. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!shortenedUrl) return;

    const shortUrl = `${window.location.origin}/${shortenedUrl.shortCode}`;

    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = shortUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const visitOriginal = () => {
    if (shortenedUrl) {
      window.open(shortenedUrl.originalUrl, "_blank");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-xl">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Shortify your link here..."
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError("");
                }}
                className="h-12 text-lg bg-white/20 border-white/30 placeholder:text-white/60 text-white focus:border-white/50"
                disabled={isLoading}
              />
              {error && <p className="text-red-300 text-sm">{error}</p>}
            </div>

            <Button
              type="submit"
              disabled={isLoading || !url.trim()}
              className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Shortening...</span>
                </div>
              ) : (
                "Shorten URL"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {shortenedUrl && (
        <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-xl animate-in slide-in-from-bottom-4 duration-500">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Your shortened URL is ready!
                </h3>
                <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                  <p className="text-white/90 text-lg font-mono break-all">
                    {window.location.origin}/{shortenedUrl.shortCode}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={copyToClipboard}
                  className="flex-1 bg-green-600 hover:bg-green-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Link
                    </>
                  )}
                </Button>

                <Button
                  onClick={visitOriginal}
                  variant="outline"
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-black font-medium py-2 px-4 rounded transition"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Original
                </Button>
              </div>

              <div className="text-center text-white/60 text-sm">
                <p>Click tracking: {shortenedUrl.clicks} visits</p>
                <p>
                  Created:{" "}
                  {new Date(shortenedUrl.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
