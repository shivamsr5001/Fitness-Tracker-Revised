
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart,
} from "recharts";

interface ChartData {
  steps: {
    data: Array<{
      name: string;
      value: number;
    }>;
  };
  calories: {
    data: Array<{
      name: string;
      value: number;
    }>;
  };
  heartRate: {
    data: Array<{
      name: string;
      value: number;
    }>;
  };
}

interface ActivityChartProps {
  data: ChartData;
  timeframe: string;
}

const ActivityChart = ({ data, timeframe }: ActivityChartProps) => {
  const [activeChart, setActiveChart] = useState("steps");
  
  const getChartTitle = () => {
    switch (activeChart) {
      case "steps":
        return "Steps Over Time";
      case "calories":
        return "Calories Burned";
      case "heartRate":
        return "Heart Rate Trends";
      default:
        return "Activity Trends";
    }
  };
  
  const getChartUnit = () => {
    switch (activeChart) {
      case "steps":
        return "steps";
      case "calories":
        return "kcal";
      case "heartRate":
        return "bpm";
      default:
        return "";
    }
  };

  return (
    <Card className="card-shadow h-full">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle className="text-lg font-semibold">{getChartTitle()}</CardTitle>
          <Tabs 
            value={activeChart} 
            onValueChange={setActiveChart}
            className="w-full sm:w-auto"
          >
            <TabsList className="grid grid-cols-3 w-full sm:w-auto">
              <TabsTrigger value="steps">Steps</TabsTrigger>
              <TabsTrigger value="calories">Calories</TabsTrigger>
              <TabsTrigger value="heartRate">Heart Rate</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            {activeChart === "steps" ? (
              <BarChart data={data.steps.data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} steps`, 'Steps']} />
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            ) : activeChart === "calories" ? (
              <AreaChart data={data.calories.data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} kcal`, 'Calories']} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="rgb(249, 115, 22)" 
                  fill="rgba(249, 115, 22, 0.2)" 
                />
              </AreaChart>
            ) : (
              <LineChart data={data.heartRate.data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} bpm`, 'Heart Rate']} />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="rgb(239, 68, 68)" 
                  strokeWidth={2}
                  dot={{ stroke: 'rgb(239, 68, 68)', fill: 'white', strokeWidth: 2, r: 4 }}
                  activeDot={{ fill: 'rgb(239, 68, 68)', stroke: 'white', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
