import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Target, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Your Financial Self,
              <span className="block bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
                Alive
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your relationship with money through intelligent insights, 
              beautiful visualization, and personalized financial guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="lg" className="animate-scale-in">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
              <Button variant="outline-light" size="lg" className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <BarChart3 className="w-5 h-5 mr-2" />
                See Demo
              </Button>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Smart Tracking</h3>
              <p className="text-primary-foreground/70">Automatic categorization and intelligent spending insights</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Goal Setting</h3>
              <p className="text-primary-foreground/70">Personalized financial goals with progress tracking</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Analytics</h3>
              <p className="text-primary-foreground/70">Beautiful visualizations and predictive insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;