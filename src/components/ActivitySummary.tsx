import { Footprints, Flame, Heart, Clock, Edit2 } from "lucide-react";
import CircularProgress from "./CircularProgress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ManualInputForm } from "./ManualInputForm";
import { useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

interface ActivityData {
  steps: {
    value: number;
    goal: number;
  };
  calories: {
    value: number;
    goal: number;
  };
  heartRate: {
    value: number;
    min: number;
    max: number;
  };
  activeMinutes: {
    value: number;
    goal: number;
  };
}

interface ActivitySummaryProps {
  data: ActivityData;
}

const ActivitySummary = ({ data }: ActivitySummaryProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [manualData, setManualData] = useLocalStorage("manual_fitness_data", {
    steps: data.steps.value,
    calories: data.calories.value,
    activeMinutes: data.activeMinutes.value,
  });

  const handleManualUpdate = (newData: {
    steps: number;
    calories: number;
    activeMinutes: number;
  }) => {
    setManualData(newData);
    setIsDialogOpen(false);
  };

  const currentValues = {
    steps: manualData.steps,
    calories: manualData.calories,
    activeMinutes: manualData.activeMinutes,
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Activity Summary</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Edit2 className="h-4 w-4" />
              Update Manually
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update Fitness Data</DialogTitle>
            </DialogHeader>
            <ManualInputForm
              onSubmit={handleManualUpdate}
              onCancel={() => setIsDialogOpen(false)}
              currentValues={currentValues}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Steps Card */}
        <Card className="card-shadow card-hover">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Steps</h3>
              <div className="p-2 rounded-full bg-blue-100">
                <Footprints className="h-5 w-5 text-primary" />
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <CircularProgress 
                value={manualData.steps} 
                max={data.steps.goal} 
                color="hsl(var(--primary))"
                label={manualData.steps.toLocaleString()}
                sublabel={`Goal: ${data.steps.goal.toLocaleString()}`}
              />
              <div className="mt-2 text-sm text-muted-foreground">
                {Math.round((manualData.steps / data.steps.goal) * 100)}% of daily goal
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Calories Card */}
        <Card className="card-shadow card-hover">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Calories</h3>
              <div className="p-2 rounded-full bg-orange-100">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <CircularProgress 
                value={manualData.calories} 
                max={data.calories.goal} 
                color="rgb(249, 115, 22)"
                label={manualData.calories.toLocaleString()}
                sublabel="kcal burned"
              />
              <div className="mt-2 text-sm text-muted-foreground">
                {Math.round((manualData.calories / data.calories.goal) * 100)}% of daily goal
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Heart Rate Card */}
        <Card className="card-shadow card-hover">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Heart Rate</h3>
              <div className="p-2 rounded-full bg-red-100">
                <Heart className="h-5 w-5 text-red-500" />
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <CircularProgress 
                value={data.heartRate.value} 
                max={200} 
                color="rgb(239, 68, 68)"
                label={`${data.heartRate.value}`}
                sublabel="bpm average"
              />
              <div className="mt-2 text-sm text-muted-foreground">
                Range: {data.heartRate.min} - {data.heartRate.max} bpm
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Active Minutes Card */}
        <Card className="card-shadow card-hover">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Active Minutes</h3>
              <div className="p-2 rounded-full bg-violet-100">
                <Clock className="h-5 w-5 text-violet-500" />
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <CircularProgress 
                value={manualData.activeMinutes} 
                max={data.activeMinutes.goal} 
                color="rgb(139, 92, 246)"
                label={`${manualData.activeMinutes}`}
                sublabel="minutes"
              />
              <div className="mt-2 text-sm text-muted-foreground">
                {Math.round((manualData.activeMinutes / data.activeMinutes.goal) * 100)}% of daily goal
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ActivitySummary;
