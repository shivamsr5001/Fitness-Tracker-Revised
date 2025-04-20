
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Update the date at midnight
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getDate() !== currentDate.getDate()) {
        setCurrentDate(now);
      }
    }, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, [currentDate]);

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-semibold text-sm">S</span>
          </div>
          <h1 className="text-xl font-bold">Stride</h1>
        </div>
        
        <div className="hidden md:block text-sm font-medium">
          {format(currentDate, "EEEE, MMMM d, yyyy")}
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
