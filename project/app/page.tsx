import React from "react";
import UrlShortenerForm from "@/components/url-shortener-form";
import Footer from "@/components/footer";
import "@/app/privacypolicy/page";
import { Link2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <Link2 className="h-12 w-12 text-blue-400" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Shorten URLs with
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Style
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Smarter Links, Simplified. Customize, Track, and Manage
          </p>

          <UrlShortenerForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
