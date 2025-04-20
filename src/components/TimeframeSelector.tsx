
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeframeSelectorProps {
  timeframe: string;
  onTimeframeChange: (timeframe: "daily" | "weekly" | "monthly") => void;
}

const TimeframeSelector = ({ timeframe, onTimeframeChange }: TimeframeSelectorProps) => {
  return (
    <div className="inline-flex items-center rounded-md border shadow-sm p-1 bg-white">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onTimeframeChange("daily")}
        className={cn(
          "rounded px-3 py-1 text-sm",
          timeframe === "daily" 
            ? "bg-primary text-white hover:bg-primary hover:text-white"
            : "hover:bg-muted"
        )}
      >
        Day
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onTimeframeChange("weekly")}
        className={cn(
          "rounded px-3 py-1 text-sm",
          timeframe === "weekly" 
            ? "bg-primary text-white hover:bg-primary hover:text-white"
            : "hover:bg-muted"
        )}
      >
        Week
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onTimeframeChange("monthly")}
        className={cn(
          "rounded px-3 py-1 text-sm",
          timeframe === "monthly" 
            ? "bg-primary text-white hover:bg-primary hover:text-white"
            : "hover:bg-muted"
        )}
      >
        Month
      </Button>
    </div>
  );
};

export default TimeframeSelector;
