import MainBodyTitle from "./MainBodyTitle";
import MainBodyAboutCard from "./MainBodyAboutCard";
import whatIDoData from "../data/whatIDoData";

export default function MainBodyWhatIDo() {
  return (
    <section aria-labelledby="what-i-do-title">
      <MainBodyTitle title="What I Do" />
      <div className="text-gray-400 text-lg">
        <p className="mt-4 mb-8">
          Delivering measurable impact through technical expertise, automation, and strategic leadership 
          across enterprise-scale educational technology operations.
        </p>
        
        {/* Enhanced grid layout with better spacing */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          role="list"
          aria-label="Professional expertise areas"
        >
          {whatIDoData.map((data, i) => (
            <div
              key={i}
              className={`transform transition-all duration-300 hover:scale-105 ${
                i < 2 ? 'lg:mb-4' : ''
              }`}
              role="listitem"
            >
              <MainBodyAboutCard
                Icon={data.Icon}
                title={data.title}
                description={data.description}
                tailwindColor={data.tailwindColor}
              />
            </div>
          ))}
        </div>
        
        {/* Impact Summary */}
        <div className="mt-12 bg-gray-800 rounded-xl p-6 border border-gray-600">
          <h3 className="text-white text-xl font-bold mb-4 text-center">Key Impact Metrics</h3>
          <div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center"
            role="list"
            aria-label="Performance metrics and achievements"
          >
            <div className="bg-gray-900 rounded-lg p-4" role="listitem">
              <div className="text-2xl font-bold text-blue-400" aria-label="15,000 plus automated accounts">15K+</div>
              <div className="text-gray-400 text-sm">Automated Accounts</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4" role="listitem">
              <div className="text-2xl font-bold text-green-400" aria-label="5,000 plus team tickets annually">5K+</div>
              <div className="text-gray-400 text-sm">Team Tickets Annually</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4" role="listitem">
              <div className="text-2xl font-bold text-cyan-400" aria-label="99.5 percent on time SLA">99.5%</div>
              <div className="text-gray-400 text-sm">On Time SLA</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4" role="listitem">
              <div className="text-2xl font-bold text-purple-400" aria-label="97 percent plus satisfaction rate">97%+</div>
              <div className="text-gray-400 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
