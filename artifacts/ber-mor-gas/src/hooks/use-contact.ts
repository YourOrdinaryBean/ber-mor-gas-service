import { useState } from 'react';
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your request"),
});

export type ContactForm = z.infer<typeof contactSchema>;

export function useContact() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContact = async (data: ContactForm) => {
    setIsPending(true);
    setError(null);
    
    try {
      // Simulate network request for the static site
      await new Promise(resolve => setTimeout(resolve, 1200));
      setIsSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try calling us instead.");
    } finally {
      setIsPending(false);
    }
  };

  return {
    submitContact,
    isPending,
    isSuccess,
    error,
    reset: () => setIsSuccess(false)
  };
}
