import UrlShortenerForm from '@/components/url-shortener-form';
import { Link2, Zap, Shield, BarChart3 } from 'lucide-react';

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
              {' '}Style
            </span>
          </h1>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Transform your long URLs into short, memorable links. Track clicks, 
            manage your links, and share with confidence.
          </p>
          
          <UrlShortenerForm />
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
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-white/70">
                Generate shortened URLs instantly with our optimized algorithm.
              </p>
            </div>
            
            <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
              <div className="flex justify-center mb-4">
                <BarChart3 className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Analytics</h3>
              <p className="text-white/70">
                Track click counts and monitor your link performance in real-time.
              </p>
            </div>
            
            <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure</h3>
              <p className="text-white/70">
                Your links are safe and secure with our reliable infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}