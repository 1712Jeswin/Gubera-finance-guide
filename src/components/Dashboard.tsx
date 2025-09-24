import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, CreditCard, Target, PiggyBank, ArrowUpRight, ArrowDownRight } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Balance",
      value: "$24,580.32",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      gradient: "bg-gradient-success"
    },
    {
      title: "Monthly Spending",
      value: "$3,247.90",
      change: "-8.2%",
      trend: "down",
      icon: CreditCard,
      gradient: "bg-gradient-primary"
    },
    {
      title: "Savings Goal",
      value: "68%",
      change: "+15.3%",
      trend: "up",
      icon: Target,
      gradient: "bg-gradient-accent"
    },
    {
      title: "Investments",
      value: "$12,840.50",
      change: "+23.1%",
      trend: "up",
      icon: PiggyBank,
      gradient: "bg-gradient-hero"
    }
  ];

  const recentTransactions = [
    { name: "Grocery Store", amount: "-$89.32", category: "Food", date: "Today" },
    { name: "Salary Deposit", amount: "+$4,200.00", category: "Income", date: "2 days ago" },
    { name: "Netflix Subscription", amount: "-$15.99", category: "Entertainment", date: "3 days ago" },
    { name: "Coffee Shop", amount: "-$12.50", category: "Food", date: "3 days ago" },
    { name: "Investment Return", amount: "+$156.80", category: "Investment", date: "1 week ago" }
  ];

  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Financial Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a complete overview of your financial health at a glance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={stat.title} className="animate-scale-in shadow-md hover:shadow-financial transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`w-10 h-10 ${stat.gradient} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="flex items-center space-x-1">
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4 text-success" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-destructive" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-success' : 'text-destructive'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Transactions and Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Transactions */}
          <Card className="animate-fade-in shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Recent Transactions
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{transaction.name}</p>
                      <p className="text-sm text-muted-foreground">{transaction.category} • {transaction.date}</p>
                    </div>
                    <span className={`font-semibold ${
                      transaction.amount.startsWith('+') ? 'text-success' : 'text-foreground'
                    }`}>
                      {transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Spending Chart Placeholder */}
          <Card className="animate-fade-in shadow-md" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle>Monthly Spending Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-card rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive chart coming soon</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Beautiful visualizations of your spending patterns
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;