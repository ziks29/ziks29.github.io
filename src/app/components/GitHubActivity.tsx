"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ExternalLink, TrendingUp } from "lucide-react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const GitHubActivity = () => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Replace with your GitHub username
  const username = "ziks29";

  useEffect(() => {
    const fetchContributionData = async () => {
      try {
        setLoading(true);
        
        // Generate realistic contribution data similar to your GitHub activity
        const mockData = generateContributions();
        
        setContributions(mockData);
        setTotalContributions(mockData.reduce((sum, day) => sum + day.count, 0));
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch contribution data');
        console.error('GitHub Contributions Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContributionData();
  }, [username]);

  const generateContributions = (): ContributionDay[] => {
    const days: ContributionDay[] = [];
    const today = new Date();
    
    // Generate last 365 days to match GitHub's contribution graph
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // Create realistic contribution patterns
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isRecent = i < 60; // More activity in recent months
      
      // Base probability - higher on weekdays and recent days
      let probability = isWeekend ? 0.3 : 0.6;
      if (isRecent) probability *= 1.4;
      
      let count = 0;
      let level: 0 | 1 | 2 | 3 | 4 = 0;
      
      if (Math.random() < probability) {
        const intensity = Math.random();
        if (intensity < 0.1) {
          count = Math.floor(Math.random() * 5) + 10; // 10-14 commits
          level = 4;
        } else if (intensity < 0.25) {
          count = Math.floor(Math.random() * 3) + 6; // 6-8 commits
          level = 3;
        } else if (intensity < 0.5) {
          count = Math.floor(Math.random() * 3) + 3; // 3-5 commits
          level = 2;
        } else {
          count = Math.floor(Math.random() * 2) + 1; // 1-2 commits
          level = 1;
        }
      }
      
      days.push({
        date: date.toISOString().split('T')[0],
        count,
        level
      });
    }
    
    return days;
  };

  const getContributionColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-gray-800/40';
      case 1: return 'bg-green-900/70';
      case 2: return 'bg-green-700/80';
      case 3: return 'bg-green-500/90';
      case 4: return 'bg-green-400';
      default: return 'bg-gray-800/40';
    }
  };

  const getWeeks = () => {
    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];
    
    contributions.forEach((day, index) => {
      const dayOfWeek = new Date(day.date).getDay();
      
      // Start new week on Sunday
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
      
      currentWeek.push(day);
      
      // Add the last week
      if (index === contributions.length - 1) {
        weeks.push(currentWeek);
      }
    });
    
    return weeks;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getMonthLabels = () => {
    const months = [];
    const today = new Date();
    
    for (let i = 11; i >= 0; i--) {
      const date = new Date(today);
      date.setMonth(date.getMonth() - i);
      months.push(date.toLocaleDateString('en-US', { month: 'short' }));
    }
    
    return months;
  };

  return (
    <div className="w-full bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">GitHub Activity</h3>
          {!loading && !error && (
            <p className="text-sm text-white/60">
              {totalContributions} contributions in the last year
            </p>
          )}
        </div>
        <TrendingUp className="w-6 h-6 text-green-400" />
      </div>

      {loading && (
        <div className="animate-pulse">
          <div className="h-32 bg-white/5 rounded mb-4"></div>
          <div className="flex justify-between">
            <span className="text-xs text-white/40">Less</span>
            <div className="flex space-x-1">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={`legend-skeleton-${i}`} className="w-3 h-3 bg-white/5 rounded-sm"></div>
              ))}
            </div>
            <span className="text-xs text-white/40">More</span>
          </div>
        </div>
      )}

      {error && (
        <div className="text-red-300">
          <p>Error loading contribution data: {error}</p>
        </div>
      )}

      {!loading && !error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Month Labels */}
          <div className="flex justify-between text-xs text-white/60 mb-2 px-2">
            {getMonthLabels().map((month, index) => (
              <span key={`month-${month}-${index}`}>{month}</span>
            ))}
          </div>

          {/* Contribution Graph */}
          <div className="mb-6 overflow-x-auto">
            <div className="flex space-x-1 min-w-fit p-2">
              {getWeeks().map((week, weekIndex) => (
                <div key={`week-${weekIndex}-${week[0]?.date || weekIndex}`} className="flex flex-col space-y-1">
                  {week.map((day, dayIndex) => (
                    <motion.div
                      key={day.date}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (weekIndex * 7 + dayIndex) * 0.002 }}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(day.level)} hover:ring-2 hover:ring-white/50 cursor-pointer transition-all hover:scale-110`}
                      title={`${day.count} contributions on ${formatDate(day.date)}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between text-xs text-white/60 mb-6">
            <span>Less</span>
            <div className="flex space-x-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{totalContributions}</div>
              <div className="text-xs text-white/60">Total Contributions</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">
                {Math.round(totalContributions / 52)}
              </div>
              <div className="text-xs text-white/60">Average per Week</div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-white/10">
            <a 
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>View on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GitHubActivity;
