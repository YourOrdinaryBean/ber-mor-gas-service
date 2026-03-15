import { motion } from "framer-motion";
import { Flame, Snowflake, Wind, ThermometerSun, Droplets } from "lucide-react";

const services = [
  {
    title: "Heating Contractors",
    description: "Expert installation, reliable repairs, and comprehensive maintenance for all heating systems to keep you warm through the winter.",
    icon: Flame,
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    title: "Air Conditioning",
    description: "Keep your home cool with professional AC installation, emergency repair, and seasonal tune-ups for maximum efficiency.",
    icon: Snowflake,
    color: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    title: "Duct Cleaning",
    description: "Improve your indoor air quality and system efficiency with thorough, professional duct cleaning services.",
    icon: Wind,
    color: "text-teal-500",
    bgColor: "bg-teal-50"
  },
  {
    title: "Full HVAC Service",
    description: "Complete heating and cooling system replacement, advanced diagnostics, and whole-home energy-efficiency upgrades.",
    icon: ThermometerSun,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    title: "Water Heaters",
    description: "Sales, expert installation, and rapid repair for both traditional tank and modern tankless water heater systems.",
    icon: Droplets,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">What We Do</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Comprehensive Home Comfort Services
          </h3>
          <p className="text-muted-foreground text-lg">
            From emergency repairs to full system replacements, our expert technicians handle it all with precision and professionalism.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 font-display">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
