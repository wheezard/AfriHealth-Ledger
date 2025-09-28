import React from 'react';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Database, Key, Coins, Users, Zap, CheckCircle, Wallet } from 'lucide-react';
import { BlockchainBackground } from '@/components/ui/blockchain-bg';
import { useNavigate } from 'react-router-dom';
import ContactUs from "./home/contactUs";
// import { useWallet } from '@/contexts/WalletContext';

export const LandingPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Records",
      description: "Your medical data is encrypted and stored securely on the Hedera blockchain, ensuring privacy and protection."
    },
    {
      icon: Key,
      title: "Consent Management",
      description: "Control who can access your health data with granular consent controls and access tokens."
    },
    {
      icon: Database,
      title: "Transparent Billing",
      description: "All healthcare billing is transparent and immutable, providing clear audit trails."
    },
    {
      icon: Users,
      title: "Provider Network",
      description: "Connect with verified healthcare providers in our decentralized network."
    }
  ];

  const stats = [
    { label: "Active Consents", value: "12,345" },
    { label: "Healthcare Providers", value: "1,200+" },
    { label: "Secure Transactions", value: "500K+" },
    { label: "Data Points Protected", value: "2.5M+" }
  ];

  const navigate = useNavigate()
  return (
    <div className="min-h-screen relative">
      <BlockchainBackground />

      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hedera-glow">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">Lumi Health</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 animate-bounce-subtle" variant="secondary">
            Powered by Hedera Blockchain
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            <span className="text-foreground">Decentralized</span><br />
            <span className="text-primary">Healthcare,</span><br />
            <span className="text-foreground">Reimagined</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Lumi Health empowers you with control over your health data, providing a secure,
            transparent blockchain platform for healthcare management and billing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="text-lg px-8 py-6 hedera-glow" onClick={() => {
              navigate("/dashboard")
            }}>
              <Wallet className="mr-2 h-5 w-5" />
              Launch App
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="medical-card text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}


      <section className="relative z-10 py-5 overflow-hidden my-2 w-full justify-center items-center">
        <div className=" mx-auto relative">
          <motion.div
            className="flex gap-6 py-3"
            animate={{ x: ["0%", "-100%","0%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...stats, ...stats].map((stat, index) => (
              <Card
                key={index}
                className="medical-card text-center min-w-[200px] flex-shrink-0"
              >
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm w-full">
            <span className="text-2xl font-semibold text-muted-foreground">
              Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on Hedera's fast, secure, and sustainable blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="medical-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">About Us</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <CheckCircle className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Secure by Design</h3>
              <p className="text-muted-foreground">
                Revolutionary healthcare by putting patients in control of their data,
                leveraging blockchain to create a future where healthcare is transparent,
                accessible, and patient-centric.
              </p>
            </div>

            <div className="space-y-4">
              <Shield className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Privacy First</h3>
              <p className="text-muted-foreground">
                Your health data remains private and under your control,
                with cryptographic protection and granular consent management.
              </p>
            </div>

            <div className="space-y-4">
              <Coins className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Transparent Economics</h3>
              <p className="text-muted-foreground">
                All transactions and billing are transparent and auditable
                on the Hedera blockchain, eliminating hidden costs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
      <footer className="relative z-10 bg-muted/20 py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Lumi Health</span>
          </div>

          <p className="text-muted-foreground mb-4">
            Decentralized healthcare platform powered by Hedera blockchain technology
          </p>

          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};