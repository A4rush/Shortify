"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StatsCard from "@/components/stats-card";
import { storage } from "@/lib/storage";
import { ShortenedUrl } from "@/lib/url-shortener";
import { Copy, ExternalLink, Trash2, Check } from "lucide-react";
import Footer from "@/components/footer";

export default function Dashboard() {
  const [urls, setUrls] = useState<ShortenedUrl[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setUrls(storage.getUrls());
  }, []);

  const totalClicks = urls.reduce((sum, url) => sum + url.clicks, 0);
  const todayUrls = urls.filter((url) => {
    const today = new Date().toDateString();
    const urlDate = new Date(url.createdAt).toDateString();
    return today === urlDate;
  }).length;

  const copyToClipboard = async (shortCode: string, id: string) => {
    const shortUrl = `${window.location.origin}/${shortCode}`;

    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = shortUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const deleteUrl = (shortCode: string) => {
    storage.deleteUrl(shortCode);
    setUrls(storage.getUrls());
  };

  const visitOriginal = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-white/70">
              Manage and track your shortened URLs
            </p>
          </div>

          <StatsCard
            totalUrls={urls.length}
            totalClicks={totalClicks}
            todayUrls={todayUrls}
          />

          {urls.length === 0 ? (
            <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-xl">
              <CardContent className="p-12 text-center">
                <div className="text-white/60 mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No URLs yet</h3>
                  <p>Start by shortening your first URL on the home page.</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">
                  Your Shortened URLs
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {urls.map((url) => (
                    <div
                      key={url.id}
                      className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="font-medium text-white font-mono text-sm">
                              /{url.shortCode}
                            </div>
                            <Badge
                              variant="secondary"
                              className="bg-blue-600/20 text-blue-400 border-blue-600/30"
                            >
                              {url.clicks} clicks
                            </Badge>
                          </div>
                          <div className="text-white/70 text-sm truncate mb-1">
                            {url.originalUrl}
                          </div>
                          <div className="text-white/50 text-xs">
                            Created{" "}
                            {new Date(url.createdAt).toLocaleDateString()}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            onClick={() =>
                              copyToClipboard(url.shortCode, url.id)
                            }
                            className="bg-green-600 hover:bg-green-700"
                          >
                            {copiedId === url.id ? (
                              <>
                                <Check className="w-4 h-4 mr-1" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4 mr-1" />
                                Copy
                              </>
                            )}
                          </Button>

                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => visitOriginal(url.originalUrl)}
                            className="bg-transparent border border-white text-white hover:bg-white hover:text-black px-4 py-1 rounded transition"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Visit
                          </Button>

                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deleteUrl(url.shortCode)}
                            className="border-red-400/30 text-red-400 hover:bg-red-500/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
