import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { contactSchema, type ContactForm, useContact } from "@/hooks/use-contact";
import { cn } from "@/lib/utils";

export function Contact() {
  const { submitContact, isPending, isSuccess, error, reset } = useContact();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    await submitContact(data);
    if (isSuccess) {
      resetForm();
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Request Your Free Estimate
          </h3>
          <p className="text-muted-foreground text-lg">
            Fill out the form below or call us directly. We're ready to help with all your heating, cooling, and water heater needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Contact Info Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-primary rounded-3xl p-8 lg:p-10 text-white shadow-xl shadow-primary/20"
          >
            <h4 className="text-2xl font-display font-bold mb-8">Contact Information</h4>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-red-200 text-sm font-medium mb-1">Call Us 24/7</p>
                  <a href="tel:3153394812" className="text-xl font-bold hover:text-red-100 transition-colors">
                    (315) 339-4812
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-red-200 text-sm font-medium mb-1">Our Location</p>
                  <p className="text-lg font-medium">
                    6752 Rome-Westmoreland Rd<br />
                    Rome, NY 13440
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Form Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-display font-bold text-foreground mb-4">Message Sent!</h4>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you for reaching out to Ber-Mor Gas Service. We will get back to you shortly.
                </p>
                <button
                  onClick={() => { reset(); resetForm(); }}
                  className="px-6 py-3 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-secondary/80 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {error && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm font-medium">
                    {error}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Full Name</label>
                    <input 
                      {...register("name")}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:outline-none focus:ring-4 transition-all",
                        errors.name ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-primary focus:ring-primary/20"
                      )}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Phone Number</label>
                    <input 
                      {...register("phone")}
                      type="tel"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:outline-none focus:ring-4 transition-all",
                        errors.phone ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-primary focus:ring-primary/20"
                      )}
                      placeholder="(315) 555-0123"
                    />
                    {errors.phone && <p className="text-red-500 text-xs font-medium">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email Address</label>
                    <input 
                      {...register("email")}
                      type="email"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:outline-none focus:ring-4 transition-all",
                        errors.email ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-primary focus:ring-primary/20"
                      )}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Service Needed</label>
                    <select 
                      {...register("service")}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:outline-none focus:ring-4 transition-all appearance-none",
                        errors.service ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-primary focus:ring-primary/20"
                      )}
                    >
                      <option value="">Select a service...</option>
                      <option value="Heating">Heating Repair / Install</option>
                      <option value="AC">Air Conditioning</option>
                      <option value="Duct">Duct Cleaning</option>
                      <option value="WaterHeater">Water Heater</option>
                      <option value="Other">Other / General Inquiry</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs font-medium">{errors.service.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Message</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:outline-none focus:ring-4 transition-all resize-none",
                      errors.message ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-primary focus:ring-primary/20"
                    )}
                    placeholder="Tell us a bit about what you need help with..."
                  />
                  {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:bg-accent hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Request"
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
