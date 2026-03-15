import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const points = [
    "Locally owned and operated in Rome, NY",
    "Fully licensed and insured technicians",
    "Upfront, honest pricing with no hidden fees",
    "Commitment to 100% customer satisfaction"
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img 
                src={`${import.meta.env.BASE_URL}images/building.png`}
                alt="Ber-Mor Gas Service - Our Location in Rome, NY" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-50 rounded-full -z-10 border border-slate-100"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/5 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Dedicated to Your Comfort Since Day One
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                With years of experience serving Rome, NY and the surrounding areas, Ber-Mor Gas Service has built a rock-solid reputation for excellence, reliability, and honest pricing.
              </p>
              <p>
                Our team of certified technicians is dedicated to keeping your home comfortable year-round. Whether you need an emergency repair in the dead of winter or a complete system upgrade in the heat of summer, we bring expertise and integrity to every single job.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-500 mb-2">Need immediate assistance?</p>
              <a 
                href="tel:3153394812" 
                className="inline-block text-2xl font-display font-bold text-primary hover:text-accent transition-colors"
              >
                (315) 339-4812
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
