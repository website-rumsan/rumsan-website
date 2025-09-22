"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BarChart3, PieChart, LineChart, ArrowUpRight, ArrowDownRight, RefreshCw } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function AnalyticsPlatform() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [chartData, setChartData] = useState<number[]>([65, 59, 80, 81, 56, 55, 40])
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isVerySmall = useMediaQuery("(max-width: 500px)")

  // Simulate data refresh
  const refreshData = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setChartData(Array.from({ length: 7 }, () => Math.floor(Math.random() * 60) + 20))
      setIsRefreshing(false)
    }, 1000)
  }

  // Auto refresh data periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRefreshing) {
        refreshData()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isRefreshing])

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-3 md:p-6 h-full">
      <div className="flex justify-between items-center mb-3 md:mb-6">
        <div className="flex items-center gap-1 md:gap-2">
          <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
          <h3 className="font-medium text-xs sm:text-sm md:text-base">TechNova Analytics</h3>
        </div>
        <button
          onClick={refreshData}
          disabled={isRefreshing}
          className="flex items-center gap-1 text-[10px] md:text-xs text-gray-400 hover:text-white disabled:opacity-50"
        >
          <RefreshCw className={`h-2.5 w-2.5 md:h-3 md:w-3 ${isRefreshing ? "animate-spin" : ""}`} />
          {isVerySmall ? "" : "Refresh"}
        </button>
      </div>

      <div className="flex border-b border-gray-800 mb-3 md:mb-6 overflow-x-auto pb-1 -mx-1 px-1">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
            activeTab === "overview"
              ? "text-blue-400 border-blue-500"
              : "text-gray-400 border-transparent hover:text-gray-300"
          }`}
        >
          <BarChart3 className="h-3 w-3 md:h-4 md:w-4" />
          Overview
        </button>
        <button
          onClick={() => setActiveTab("performance")}
          className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
            activeTab === "performance"
              ? "text-blue-400 border-blue-500"
              : "text-gray-400 border-transparent hover:text-gray-300"
          }`}
        >
          <LineChart className="h-3 w-3 md:h-4 md:w-4" />
          {isVerySmall ? "Perf" : "Performance"}
        </button>
        <button
          onClick={() => setActiveTab("distribution")}
          className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
            activeTab === "distribution"
              ? "text-blue-400 border-blue-500"
              : "text-gray-400 border-transparent hover:text-gray-300"
          }`}
        >
          <PieChart className="h-3 w-3 md:h-4 md:w-4" />
          {isVerySmall ? "Dist" : "Distribution"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-4 mb-3 md:mb-6">
        <div className="bg-gray-800/50 p-2 md:p-3 rounded-lg">
          <div className="text-[8px] sm:text-xs text-gray-400 mb-0.5 md:mb-1 truncate">Total Users</div>
          <div className="flex justify-between items-end">
            <div className="text-xs sm:text-sm md:text-lg font-bold">{isVerySmall ? "24.5k" : "24,521"}</div>
            <div className="text-[8px] sm:text-xs flex items-center gap-0.5 md:gap-1 text-green-500">
              +12%
              <ArrowUpRight className="h-2 w-2 md:h-3 md:w-3" />
            </div>
          </div>
        </div>
        <div className="bg-gray-800/50 p-2 md:p-3 rounded-lg">
          <div className="text-[8px] sm:text-xs text-gray-400 mb-0.5 md:mb-1 truncate">Conv Rate</div>
          <div className="flex justify-between items-end">
            <div className="text-xs sm:text-sm md:text-lg font-bold">12.3%</div>
            <div className="text-[8px] sm:text-xs flex items-center gap-0.5 md:gap-1 text-green-500">
              +2%
              <ArrowUpRight className="h-2 w-2 md:h-3 md:w-3" />
            </div>
          </div>
        </div>
        <div className="bg-gray-800/50 p-2 md:p-3 rounded-lg">
          <div className="text-[8px] sm:text-xs text-gray-400 mb-0.5 md:mb-1 truncate">Avg Session</div>
          <div className="flex justify-between items-end">
            <div className="text-xs sm:text-sm md:text-lg font-bold">{isVerySmall ? "4m" : "4m 23s"}</div>
            <div className="text-[8px] sm:text-xs flex items-center gap-0.5 md:gap-1 text-red-500">
              -3%
              <ArrowDownRight className="h-2 w-2 md:h-3 md:w-3" />
            </div>
          </div>
        </div>
        <div className="bg-gray-800/50 p-2 md:p-3 rounded-lg">
          <div className="text-[8px] sm:text-xs text-gray-400 mb-0.5 md:mb-1 truncate">Bounce Rate</div>
          <div className="flex justify-between items-end">
            <div className="text-xs sm:text-sm md:text-lg font-bold">32.4%</div>
            <div className="text-[8px] sm:text-xs flex items-center gap-0.5 md:gap-1 text-green-500">
              -5%
              <ArrowUpRight className="h-2 w-2 md:h-3 md:w-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 p-2 md:p-4 rounded-lg mb-3 md:mb-6">
        <div className="flex justify-between items-center mb-2 md:mb-4">
          <h4 className="text-[10px] sm:text-xs md:text-sm font-medium">Weekly Trend</h4>
          {!isVerySmall && (
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-500"></div>
                <span className="text-[8px] md:text-xs text-gray-400">This Week</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-purple-500/50"></div>
                <span className="text-[8px] md:text-xs text-gray-400">Last Week</span>
              </div>
            </div>
          )}
        </div>

        <div className="h-[80px] md:h-[120px] flex items-end justify-between">
          {chartData.map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center group">
              <motion.div
                className="w-full max-w-[12px] md:max-w-[20px] bg-blue-500 rounded-sm cursor-pointer relative"
                initial={{ height: 0 }}
                animate={{ height: `${value}%` }}
                transition={{ duration: 0.5 }}
              >
                {!isVerySmall && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[8px] md:text-xs py-0.5 md:py-1 px-1 md:px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {value}%
                  </div>
                )}
              </motion.div>
              {!isVerySmall && (
                <div className="text-[6px] md:text-[8px] text-gray-500 mt-0.5 md:mt-1">
                  {index === 0 ? "M" : index === 1 ? "T" : index === 2 ? "W" : index === 3 ? "T" : index === 4 ? "F" : index === 5 ? "S" : "S"}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800/50 p-2 md:p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2 md:mb-3">
          <h4 className="text-[10px] sm:text-xs md:text-sm font-medium">Top Sources</h4>
          <span className="text-[8px] md:text-xs text-gray-400">Last 30d</span>
        </div>

        <div className="space-y-2 md:space-y-3">
          <div className="space-y-0.5 md:space-y-1">
            <div className="flex justify-between text-[8px] md:text-xs">
              <span>Direct</span>
              <span>42%</span>
            </div>
            <div className="h-1 md:h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: "42%" }}
                transition={{ duration: 0.5, delay: 0 }}
              />
            </div>
          </div>
          <div className="space-y-0.5 md:space-y-1">
            <div className="flex justify-between text-[8px] md:text-xs">
              <span>{isVerySmall ? "Search" : "Organic Search"}</span>
              <span>28%</span>
            </div>
            <div className="h-1 md:h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-purple-500"
                initial={{ width: 0 }}
                animate={{ width: "28%" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </div>
          </div>
          <div className="space-y-0.5 md:space-y-1">
            <div className="flex justify-between text-[8px] md:text-xs">
              <span>{isVerySmall ? "Social" : "Social Media"}</span>
              <span>18%</span>
            </div>
            <div className="h-1 md:h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: "18%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>
          </div>
          <div className="space-y-0.5 md:space-y-1">
            <div className="flex justify-between text-[8px] md:text-xs">
              <span>Referral</span>
              <span>12%</span>
            </div>
            <div className="h-1 md:h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-yellow-500"
                initial={{ width: 0 }}
                animate={{ width: "12%" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
