
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  steps: z.string().transform(Number).pipe(
    z.number().min(0).max(100000)
  ),
  calories: z.string().transform(Number).pipe(
    z.number().min(0).max(10000)
  ),
  activeMinutes: z.string().transform(Number).pipe(
    z.number().min(0).max(1440)
  ),
});

type FormData = z.infer<typeof formSchema>;

interface ManualInputFormProps {
  onSubmit: (data: {
    steps: number;
    calories: number;
    activeMinutes: number;
  }) => void;
  onCancel: () => void;
  currentValues: {
    steps: number;
    calories: number;
    activeMinutes: number;
  };
}

export function ManualInputForm({ onSubmit, onCancel, currentValues }: ManualInputFormProps) {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      steps: String(currentValues.steps),
      calories: String(currentValues.calories),
      activeMinutes: String(currentValues.activeMinutes),
    },
  });

  const handleSubmit = (data: FormData) => {
    // Convert string values to numbers before passing to onSubmit
    onSubmit({
      steps: Number(data.steps),
      calories: Number(data.calories),
      activeMinutes: Number(data.activeMinutes),
    });
    
    toast({
      title: "Data updated",
      description: "Your fitness data has been updated successfully.",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="steps"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Steps</FormLabel>
              <FormControl>
                <Input type="number" min="0" max="100000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="calories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Calories</FormLabel>
              <FormControl>
                <Input type="number" min="0" max="10000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="activeMinutes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Active Minutes</FormLabel>
              <FormControl>
                <Input type="number" min="0" max="1440" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-3">
          <Button variant="outline" type="button" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </Form>
  );
}
