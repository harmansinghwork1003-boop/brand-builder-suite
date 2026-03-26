import { Shield, Award, Clock } from "lucide-react";

const items = [
  { icon: Shield, text: "100% Secure & Confidential" },
  { icon: Award, text: "Trusted by 50+ Businesses" },
  { icon: Clock, text: "On-Time Delivery Guaranteed" },
];

const TrustBar = () => (
  <div className="bg-primary/10 border-b border-primary/10">
    <div className="container flex items-center justify-center gap-6 sm:gap-10 py-2 overflow-x-auto">
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-2 text-xs font-medium text-foreground whitespace-nowrap">
          <item.icon size={14} className="text-primary shrink-0" />
          {item.text}
        </div>
      ))}
    </div>
  </div>
);

export default TrustBar;
