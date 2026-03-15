import { motion } from "framer-motion";
import { ShieldCheck, Clock, CircleDollarSign, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Rest easy knowing your home is in the hands of fully certified, insured professionals."
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "HVAC emergencies don't wait for business hours, and neither do we. We're here when you need us."
  },
  {
    icon: CircleDollarSign,
    title: "Free Estimates",
    description: "No surprises. We provide clear, transparent, and free estimates before any work begins."
  },
  {
    icon: HeartHandshake,
    title: "Local Family Business",
    description: "We treat our customers like neighbors, because that's exactly what you are."
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" style={{ backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-red-200 font-bold tracking-wider uppercase text-sm mb-3">The Ber-Mor Difference</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Why Homeowners Choose Us
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-display">
                  {reason.title}
                </h4>
                <p className="text-red-100 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
