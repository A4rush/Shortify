'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Link2, BarChart3, Home } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="backdrop-blur-sm bg-white/10 border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Link2 className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">LinkShort</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button
                variant={pathname === '/' ? 'default' : 'ghost'}
                size="sm"
                className={pathname === '/' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'text-white hover:bg-white/10'
                }
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            
            <Link href="/dashboard">
              <Button
                variant={pathname === '/dashboard' ? 'default' : 'ghost'}
                size="sm"
                className={pathname === '/dashboard' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'text-white hover:bg-white/10'
                }
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}