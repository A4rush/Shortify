'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link2, MousePointer, Calendar } from 'lucide-react';

interface StatsCardProps {
  totalUrls: number;
  totalClicks: number;
  todayUrls: number;
}

export default function StatsCard({ totalUrls, totalClicks, todayUrls }: StatsCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white/80">Total Links</CardTitle>
          <Link2 className="h-4 w-4 text-blue-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{totalUrls}</div>
          <p className="text-xs text-white/60">Links shortened</p>
        </CardContent>
      </Card>
      
      <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white/80">Total Clicks</CardTitle>
          <MousePointer className="h-4 w-4 text-green-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{totalClicks}</div>
          <p className="text-xs text-white/60">Total visits</p>
        </CardContent>
      </Card>
      
      <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white/80">Today</CardTitle>
          <Calendar className="h-4 w-4 text-purple-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{todayUrls}</div>
          <p className="text-xs text-white/60">Links created today</p>
        </CardContent>
      </Card>
    </div>
  );
}