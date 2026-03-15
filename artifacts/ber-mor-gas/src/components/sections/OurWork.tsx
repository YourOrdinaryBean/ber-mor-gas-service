import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export function OurWork() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/30">
              <img
                src={`${import.meta.env.BASE_URL}images/work-ac-service.png`}
                alt="Ber-Mor Gas Service technician servicing an air conditioning unit"
                className="w-full h-[480px] object-cover object-center"
              />
            </div>
            {/* Red accent bar */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-xl -z-10 opacity-70" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold text-sm mb-5">
              <Wrench className="w-4 h-4" />
              Real Work. Real Results.
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Hands-On Expertise You Can See
            </h2>

            <div className="space-y-4 text-lg text-neutral-300 mb-8">
              <p>
                Every job we take on gets our full attention. Here you can see one of our technicians running a full diagnostic on an air conditioning system — checking refrigerant levels, electrical connections, and system pressures to ensure everything is operating at peak efficiency.
              </p>
              <p>
                This is the standard of care we bring to every home in Rome, NY and the surrounding area. No shortcuts. No guesswork. Just honest, professional service done right the first time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "AC Service & Repair", detail: "Full diagnostics & tune-ups" },
                { label: "Heating Systems", detail: "Installation & maintenance" },
                { label: "Water Heaters", detail: "Sales & installation" },
                { label: "Duct Cleaning", detail: "Improved air quality" },
              ].map((item) => (
                <div key={item.label} className="bg-neutral-800 rounded-xl p-4 border border-neutral-700">
                  <p className="font-bold text-white text-sm">{item.label}</p>
                  <p className="text-neutral-400 text-xs mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
