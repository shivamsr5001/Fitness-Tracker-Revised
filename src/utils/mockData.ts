
interface StepData {
  name: string;
  value: number;
}

interface CalorieData {
  name: string;
  value: number;
}

interface HeartRateData {
  name: string;
  value: number;
}

interface ChartData {
  steps: {
    data: StepData[];
  };
  calories: {
    data: CalorieData[];
  };
  heartRate: {
    data: HeartRateData[];
  };
}

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

interface ActivityData {
  summary: {
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
  };
  chartData: ChartData;
  goals: Goal[];
}

// Generate daily data
const generateDailyData = (): ActivityData => {
  // Mock summary data
  const summary = {
    steps: {
      value: Math.floor(Math.random() * 5000) + 4000, // 4000-9000 steps
      goal: 10000,
    },
    calories: {
      value: Math.floor(Math.random() * 300) + 200, // 200-500 calories
      goal: 500,
    },
    heartRate: {
      value: Math.floor(Math.random() * 25) + 65, // 65-90 bpm
      min: Math.floor(Math.random() * 10) + 55, // 55-65 bpm
      max: Math.floor(Math.random() * 35) + 90, // 90-125 bpm
    },
    activeMinutes: {
      value: Math.floor(Math.random() * 30) + 20, // 20-50 minutes
      goal: 60,
    },
  };

  // Mock chart data
  const hours = Array.from({ length: 24 }, (_, i) => i);
  
  const stepData: StepData[] = hours.map((hour) => ({
    name: `${hour}:00`,
    value: hour >= 7 && hour <= 22 
      ? Math.floor(Math.random() * 800) + 200 
      : Math.floor(Math.random() * 100),
  }));

  const calorieData: CalorieData[] = hours.map((hour) => ({
    name: `${hour}:00`,
    value: hour >= 7 && hour <= 22 
      ? Math.floor(Math.random() * 40) + 10 
      : Math.floor(Math.random() * 5),
  }));

  const heartRateData: HeartRateData[] = hours.map((hour) => ({
    name: `${hour}:00`,
    value: hour >= 7 && hour <= 22 
      ? Math.floor(Math.random() * 25) + 65 
      : Math.floor(Math.random() * 10) + 55,
  }));

  // Mock goals
  const goals: Goal[] = [
    {
      id: "1",
      name: "Daily Steps",
      target: 10000,
      current: summary.steps.value,
      unit: "steps",
      icon: "👣",
      category: "activity",
      color: "#2196F3",
    },
    {
      id: "2",
      name: "Calories Burned",
      target: 500,
      current: summary.calories.value,
      unit: "kcal",
      icon: "🔥",
      category: "nutrition",
      color: "#F97316",
    },
    {
      id: "3",
      name: "Active Minutes",
      target: 60,
      current: summary.activeMinutes.value,
      unit: "min",
      icon: "⏱️",
      category: "activity",
      color: "#8B5CF6",
    },
    {
      id: "4",
      name: "Water Intake",
      target: 8,
      current: Math.floor(Math.random() * 6) + 2, // 2-8 glasses
      unit: "glasses",
      icon: "💧",
      category: "nutrition",
      color: "#0EA5E9",
    },
    {
      id: "5",
      name: "Sleep Duration",
      target: 8,
      current: Math.floor(Math.random() * 3) + 5, // 5-8 hours
      unit: "hours",
      icon: "😴",
      category: "wellness",
      color: "#8B5CF6",
    },
  ];

  return {
    summary,
    chartData: {
      steps: {
        data: stepData,
      },
      calories: {
        data: calorieData,
      },
      heartRate: {
        data: heartRateData,
      },
    },
    goals,
  };
};

// Generate weekly data
const generateWeeklyData = (): ActivityData => {
  // Simplified weekly data generation
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  // Mock summary data with higher values for weekly
  const summary = {
    steps: {
      value: Math.floor(Math.random() * 20000) + 30000, // 30000-50000 steps
      goal: 70000,
    },
    calories: {
      value: Math.floor(Math.random() * 1500) + 1500, // 1500-3000 calories
      goal: 3500,
    },
    heartRate: {
      value: Math.floor(Math.random() * 25) + 65, // 65-90 bpm
      min: Math.floor(Math.random() * 10) + 55, // 55-65 bpm
      max: Math.floor(Math.random() * 35) + 90, // 90-125 bpm
    },
    activeMinutes: {
      value: Math.floor(Math.random() * 150) + 150, // 150-300 minutes
      goal: 420,
    },
  };

  // Weekly chart data
  const stepData: StepData[] = days.map((day) => ({
    name: day,
    value: Math.floor(Math.random() * 5000) + 4000, // 4000-9000 steps per day
  }));

  const calorieData: CalorieData[] = days.map((day) => ({
    name: day,
    value: Math.floor(Math.random() * 300) + 200, // 200-500 calories per day
  }));

  const heartRateData: HeartRateData[] = days.map((day) => ({
    name: day,
    value: Math.floor(Math.random() * 25) + 65, // 65-90 bpm average per day
  }));

  // Adjust goals for weekly context
  const goals: Goal[] = [
    {
      id: "1",
      name: "Weekly Steps",
      target: 70000,
      current: summary.steps.value,
      unit: "steps",
      icon: "👣",
      category: "activity",
      color: "#2196F3",
    },
    {
      id: "2",
      name: "Calories Burned",
      target: 3500,
      current: summary.calories.value,
      unit: "kcal",
      icon: "🔥",
      category: "nutrition",
      color: "#F97316",
    },
    {
      id: "3",
      name: "Active Minutes",
      target: 420,
      current: summary.activeMinutes.value,
      unit: "min",
      icon: "⏱️",
      category: "activity",
      color: "#8B5CF6",
    },
    {
      id: "4",
      name: "Workout Sessions",
      target: 5,
      current: Math.floor(Math.random() * 4) + 1, // 1-5 workouts
      unit: "sessions",
      icon: "💪",
      category: "activity",
      color: "#10B981",
    },
    {
      id: "5",
      name: "Water Intake",
      target: 56,
      current: Math.floor(Math.random() * 16) + 40, // 40-56 glasses
      unit: "glasses",
      icon: "💧",
      category: "nutrition",
      color: "#0EA5E9",
    },
  ];

  return {
    summary,
    chartData: {
      steps: {
        data: stepData,
      },
      calories: {
        data: calorieData,
      },
      heartRate: {
        data: heartRateData,
      },
    },
    goals,
  };
};

// Generate monthly data
const generateMonthlyData = (): ActivityData => {
  // Simplified monthly data generation
  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];
  
  // Mock summary data with higher values for monthly
  const summary = {
    steps: {
      value: Math.floor(Math.random() * 80000) + 120000, // 120000-200000 steps
      goal: 300000,
    },
    calories: {
      value: Math.floor(Math.random() * 6000) + 6000, // 6000-12000 calories
      goal: 15000,
    },
    heartRate: {
      value: Math.floor(Math.random() * 25) + 65, // 65-90 bpm
      min: Math.floor(Math.random() * 10) + 55, // 55-65 bpm
      max: Math.floor(Math.random() * 35) + 90, // 90-125 bpm
    },
    activeMinutes: {
      value: Math.floor(Math.random() * 600) + 600, // 600-1200 minutes
      goal: 1800,
    },
  };

  // Monthly chart data
  const stepData: StepData[] = weeks.map((week) => ({
    name: week,
    value: Math.floor(Math.random() * 20000) + 30000, // 30000-50000 steps per week
  }));

  const calorieData: CalorieData[] = weeks.map((week) => ({
    name: week,
    value: Math.floor(Math.random() * 1500) + 1500, // 1500-3000 calories per week
  }));

  const heartRateData: HeartRateData[] = weeks.map((week) => ({
    name: week,
    value: Math.floor(Math.random() * 25) + 65, // 65-90 bpm average per week
  }));

  // Adjust goals for monthly context
  const goals: Goal[] = [
    {
      id: "1",
      name: "Monthly Steps",
      target: 300000,
      current: summary.steps.value,
      unit: "steps",
      icon: "👣",
      category: "activity",
      color: "#2196F3",
    },
    {
      id: "2",
      name: "Calories Burned",
      target: 15000,
      current: summary.calories.value,
      unit: "kcal",
      icon: "🔥",
      category: "nutrition",
      color: "#F97316",
    },
    {
      id: "3",
      name: "Active Minutes",
      target: 1800,
      current: summary.activeMinutes.value,
      unit: "min",
      icon: "⏱️",
      category: "activity",
      color: "#8B5CF6",
    },
    {
      id: "4",
      name: "Workout Sessions",
      target: 20,
      current: Math.floor(Math.random() * 10) + 10, // 10-20 workouts
      unit: "sessions",
      icon: "💪",
      category: "activity",
      color: "#10B981",
    },
    {
      id: "5",
      name: "Weight Goal",
      target: 100,
      current: Math.floor(Math.random() * 30) + 70, // 70-100% progress
      unit: "%",
      icon: "⚖️",
      category: "wellness",
      color: "#EC4899",
    },
  ];

  return {
    summary,
    chartData: {
      steps: {
        data: stepData,
      },
      calories: {
        data: calorieData,
      },
      heartRate: {
        data: heartRateData,
      },
    },
    goals,
  };
};

// Function to get data based on timeframe
export const getMockData = (timeframe: string): ActivityData => {
  // Check local storage first
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem(`fitness_${timeframe}`);
    if (storedData) {
      try {
        return JSON.parse(storedData);
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    }
  }

  // Generate new data if not in local storage
  let data: ActivityData;
  
  switch (timeframe) {
    case "weekly":
      data = generateWeeklyData();
      break;
    case "monthly":
      data = generateMonthlyData();
      break;
    case "daily":
    default:
      data = generateDailyData();
      break;
  }
  
  // Store in local storage
  if (typeof window !== "undefined") {
    localStorage.setItem(`fitness_${timeframe}`, JSON.stringify(data));
  }
  
  return data;
};
