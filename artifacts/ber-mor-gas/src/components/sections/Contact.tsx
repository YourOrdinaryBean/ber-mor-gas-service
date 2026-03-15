import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Ready to Help — Just Give Us a Call
          </h3>
          <p className="text-muted-foreground text-lg">
            Reach out by phone and we'll take care of the rest. We're available 24/7 for all your heating, cooling, and water heater needs.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto bg-primary rounded-3xl p-10 text-white shadow-xl shadow-primary/20"
        >
          <h4 className="text-2xl font-display font-bold mb-8">Contact Information</h4>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-red-200 text-sm font-medium mb-1">Call Us 24/7</p>
                <a href="tel:3153394812" className="text-2xl font-bold hover:text-red-100 transition-colors">
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

          <a
            href="tel:3153394812"
            className="mt-10 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white text-primary font-bold text-lg hover:bg-red-50 transition-colors shadow-md"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </motion.div>

      </div>
    </section>
  );
}
