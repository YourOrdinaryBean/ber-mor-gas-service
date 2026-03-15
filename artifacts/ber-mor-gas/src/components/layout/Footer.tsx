import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              Ber-Mor Gas Service
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted home comfort experts in Rome, NY. Specializing in heating, air conditioning, duct cleaning, and water heaters.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm hover:text-white transition-colors">Heating Contractors</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors">Air Conditioning</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors">Duct Cleaning</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors">Water Heaters</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground shrink-0 mt-0.5" />
                <span className="text-sm">6752 Rome-Westmoreland Rd<br />Rome, NY 13440</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground shrink-0" />
                <a href="tel:3153394812" className="text-sm hover:text-white transition-colors">(315) 339-4812</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-white">Hours</h4>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary-foreground shrink-0 mt-0.5" />
              <div className="text-sm space-y-1">
                <p>Available for 24/7 Emergency Services</p>
                <p className="text-slate-400">Call anytime for urgent heating or cooling issues.</p>
              </div>
            </div>
          </div>
          
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Ber-Mor Gas Service. All rights reserved.</p>
          <p>Licensed & Insured HVAC Contractors</p>
        </div>
      </div>
    </footer>
  );
}
