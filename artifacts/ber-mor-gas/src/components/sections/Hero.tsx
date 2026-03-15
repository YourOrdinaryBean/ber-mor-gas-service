import { motion } from "framer-motion";
import { ShieldCheck, Phone, ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-white overflow-hidden pb-16 pt-8 md:pt-16 lg:pb-24 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-primary font-semibold text-sm mb-6">
              <ShieldCheck className="w-4 h-4" />
              Licensed & Insured HVAC Experts
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-foreground leading-[1.1] mb-6">
              Your Trusted <span className="text-primary relative whitespace-nowrap">Home Comfort<span className="absolute -bottom-2 left-0 w-full h-2 bg-accent/20 -z-10 rounded-full"></span></span> Experts in Rome, NY
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Professional heating, air conditioning, duct cleaning, and water heater services. Fast, reliable, and local family-owned business dedicated to keeping your home comfortable year-round.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:3153394812"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/25 hover:bg-accent hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call (315) 339-4812
              </a>
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-bold text-lg hover:bg-secondary/80 hover:-translate-y-1 transition-all duration-300"
              >
                Request Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                24/7 Emergency Service
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Free Estimates
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10" />
            <img 
              src={`${import.meta.env.BASE_URL}images/hero-hvac.png`}
              alt="Professional HVAC Unit Installation" 
              className="w-full h-full object-cover"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
                <span className="font-bold text-lg">A+</span>
              </div>
              <div>
                <p className="font-bold text-foreground">Top Rated Service</p>
                <p className="text-sm text-muted-foreground">Trusted by Rome, NY homeowners</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
