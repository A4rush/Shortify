//components/Footer.tsx
import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";
import "@/app/privacypolicy/page";
import "@/app/termsofservice/page";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 bg-gradient-to-b from-slate-900/50 to-black border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-0xl mx-auto px-0 py-0 sm:px-0 lg:px-0">
        <img src="/guts.png" alt="Do You Have Guts" />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-purple-900/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-white/40 text-sm">
                © {currentYear} <a href="https://github.com/A4rush">A4rush</a>.
                All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacypolicy"
                className="text-white/60 hover:text-white transition-colors duration-200 flex items-center"
              >
                <Shield className="h-4 w-4 mr-1" />
                Privacy Policy
              </Link>
              <Link
                href="/termsofservice"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookiepolicy"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
