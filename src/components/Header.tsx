import { Button } from "@/components/ui/button";
import { Menu, TrendingUp, User, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Living Ledger</h1>
            <p className="text-sm text-muted-foreground hidden sm:block">Your Financial Self, Alive</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a href="#analytics" className="text-muted-foreground hover:text-foreground transition-colors">
            Analytics
          </a>
          <a href="#goals" className="text-muted-foreground hover:text-foreground transition-colors">
            Goals
          </a>
          <a href="#insights" className="text-muted-foreground hover:text-foreground transition-colors">
            Insights
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button variant="financial" size="sm">
            <User className="w-4 h-4 mr-2" />
            Account
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;