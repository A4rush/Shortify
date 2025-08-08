// project/app/about/page.tsx
import React from "react";
import Footer from "@/components/footer";
import {
  Link2,
  Zap,
  Shield,
  BarChart3,
  AlertTriangle,
  User,
  GitFork,
  Settings,
  LucideSettings,
  Heart,
  Star,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* About Section */}
      <div className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <User className="h-12 w-12 text-blue-400" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Shortify
            </span>
          </h1>

          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Shortify is a modern URL shortener that makes sharing long links
            fast, clean, and hassle free. Customize, track, and manage your
            links with ease all in one sleek, user friendly platform.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose LinkShort?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
              <div className="flex justify-center mb-4">
                <Zap className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Lightning Fast
              </h3>
              <p className="text-white/70">
                Shorten URLs in the blink of an eye. No lag, no waiting, just
                instant, efficient results that save you time with our optimized
                algorithm.
              </p>
            </div>

            <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
              <div className="flex justify-center mb-4">
                <AlertTriangle className="h-12 w-12 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Minimal, Ad-Free Experience{" "}
              </h3>
              <p className="text-white/70">
                We keep it clean and simple. No annoying pop-ups or redirects
                just smooth link shortening.
              </p>
            </div>

            <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Secure and Safe
              </h3>
              <p className="text-white/70">
                Your links are safe and secure. We use industry best practices
                to ensure your data is protected.
              </p>
            </div>

            <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
              <a href="https://github.com/A4rush/shortify">
                {" "}
                <div className="flex justify-center mb-4">
                  <GitFork className="h-12 w-12 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Open Source
                </h3>
              </a>
              <p className="text-white/70">
                Shortify is open source and always improving. Built
                transparently for the community.
              </p>
            </div>

            <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
              <div className="flex justify-center mb-4">
                <BarChart3 className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Real Time Analytics
              </h3>
              <p className="text-white/70">
                Track click counts and monitor your link performance in real
                time with easy to use dashboards. Know excatly how your links
                perform.
              </p>
            </div>

            <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
              <a href="https://github.com/A4rush/shortify">
                {" "}
                <div className="flex justify-center mb-4">
                  <Star className="h-12 w-12 text-yellow-400" />
                </div>{" "}
                <h3 className="text-xl font-semibold text-white mb-3">
                  Contribute to Shortify
                </h3>
              </a>
              <p className="text-white/70">
                Support Shortify by starring it on GitHub, reporting bugs,
                suggesting features, improving the code, or helping with the
                docs every bit helps!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
