
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ActivitySummary from "@/components/ActivitySummary";
import GoalTracking from "@/components/GoalTracking";
import ActivityChart from "@/components/ActivityChart";
import TimeframeSelector from "@/components/TimeframeSelector";
import { getMockData } from "@/utils/mockData";

type Timeframe = "daily" | "weekly" | "monthly";

const Index = () => {
  const [timeframe, setTimeframe] = useState<Timeframe>("daily");
  const [data, setData] = useState(getMockData("daily"));

  useEffect(() => {
    // Update data when timeframe changes
    setData(getMockData(timeframe));
  }, [timeframe]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6 md:px-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
            <TimeframeSelector 
              timeframe={timeframe} 
              onTimeframeChange={setTimeframe} 
            />
          </div>
          
          <ActivitySummary data={data.summary} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ActivityChart data={data.chartData} timeframe={timeframe} />
            </div>
            <div>
              <GoalTracking goals={data.goals} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
