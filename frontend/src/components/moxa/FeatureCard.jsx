import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// tone: "purple" | "blue" | "green" | "orange" | "pink"
function FeatureCard({ icon: Icon, tone = "purple", title, text, to }) {
  return (
    <div className="fcard">
      <div className={`ficon tone-${tone}`}>
        <Icon size={30} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link to={to} className={`learn tone-text-${tone}`}>
        Learn More <ArrowRight size={15} />
      </Link>
    </div>
  );
}

export default FeatureCard;
