
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, TrendingUp, Check, X } from "lucide-react";

interface Goal {
  id: string;
  name: string;
  target: number;
  current: number;
  unit: string;
  icon: string;
  category: string;
  color: string;
}

interface GoalTrackingProps {
  goals: Goal[];
}

const GoalTracking = ({ goals }: GoalTrackingProps) => {
  return (
    <Card className="card-shadow h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            Goals
          </CardTitle>
          <TrendingUp className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {goals.map((goal) => {
            const progressPercent = Math.min(100, Math.round((goal.current / goal.target) * 100));
            const isComplete = goal.current >= goal.target;
            
            // Custom progress color based on completion percentage
            let progressColor = "bg-gray-200";
            if (progressPercent < 50) {
              progressColor = "bg-amber-500";
            } else if (progressPercent < 100) {
              progressColor = "bg-green-500";
            } else {
              progressColor = "bg-accent";
            }
            
            return (
              <div key={goal.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${goal.color}20` }}>
                      <span className="text-xs" style={{ color: goal.color }}>{goal.icon}</span>
                    </div>
                    <span className="text-sm font-medium">{goal.name}</span>
                  </div>
                  <div className="flex items-center">
                    {isComplete ? (
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                    ) : null}
                    <span className="text-sm font-semibold">
                      {goal.current.toLocaleString()}/{goal.target.toLocaleString()} {goal.unit}
                    </span>
                  </div>
                </div>
                <Progress value={progressPercent} className={progressColor} />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalTracking;
