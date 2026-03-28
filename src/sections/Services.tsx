import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette,
  Code2,
  Sparkles,
  Check,
  Zap,
  ShoppingCart,
  LayoutDashboard,
  Plug,
  MessageSquare,
  Smartphone,
  Bot,
} from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const serviceCategories = [
  {
    id: 'design',
    title: 'Graphic Design',
    icon: Palette,
    description: 'Visual identity and brand recall solutions',
    color: 'from-pink-500 to-rose-600',
    packages: [
      {
        name: 'Identity Starter',
        price: '₹4,999 – ₹7,500',
        description: 'Perfect for startups and small businesses',
        features: [
          'Logo design (3 concepts)',
          'Basic Brand Guide',
          'Business Card design',
          '2 revision rounds',
          'Source files included',
        ],
      },
      {
        name: 'Brand Pro',
        price: '₹18,000 – ₹28,000',
        description: 'Comprehensive brand identity package',
        features: [
          'Full Stationery Kit',
          'Social Media Templates (10)',
          'Complete Brand Book',
          'Email Signature design',
          'Unlimited revisions',
          'Priority support',
        ],
        popular: true,
      },
      {
        name: 'The Creative Suite',
        price: '₹45,000 – ₹85,000',
        description: 'Enterprise-level brand overhaul',
        features: [
          'Complete Brand Overhaul',
          'Marketing Assets (Decks, Flyers)',
          'UI Kit for digital products',
          'Brand Strategy consultation',
          'Ongoing design support',
          'Dedicated account manager',
        ],
      },
    ],
  },
  {
    id: 'development',
    title: 'Full Stack Development',
    icon: Code2,
    description: 'Performance, SEO, and robust architecture',
    color: 'from-primary-500 to-cyan-600',
    packages: [
      {
        name: 'MVP / Portfolio',
        price: '₹12,000 – ₹18,000',
        description: 'Get online quickly with a professional site',
        features: [
          'Single-page App (React/Next.js)',
          'Fully Responsive design',
          'Contact Form integration',
          'Basic SEO setup',
          '2 weeks delivery',
          '1 month support',
        ],
      },
      {
        name: 'Business Hub',
        price: '₹35,000 – ₹65,000',
        description: 'Multi-page dynamic website with CMS',
        features: [
          'Multi-page Dynamic Site',
          'CMS (Sanity/Payload/Local)',
          'Blog functionality',
          'Advanced SEO setup',
          'Performance optimization',
          '3 months support',
        ],
        popular: true,
      },
      {
        name: 'SaaS / E-commerce',
        price: '₹1,20,000 – ₹2,50,000',
        description: 'Full-scale platform development',
        features: [
          'Full-scale Platform',
          'User Authentication',
          'Inventory Management',
          'Database Architecture',
          'Admin Dashboards',
          '6 months support',
        ],
      },
    ],
  },
];

const customFeatures = [
  {
    icon: ShoppingCart,
    title: 'Payment Gateway Integration',
    price: '₹5,000+',
    description: 'Stripe, Razorpay, Subscription billing',
  },
  {
    icon: LayoutDashboard,
    title: 'Custom User Dashboard',
    price: '₹15,000+',
    description: 'Personalized data visualization & analytics',
  },
  {
    icon: Plug,
    title: 'Third-Party API Integration',
    price: '₹12,000 – ₹30,000',
    description: 'CRM, Maps, WhatsApp API, Social Media',
  },
  {
    icon: MessageSquare,
    title: 'Real-time Capabilities',
    price: '₹35,000+',
    description: 'Chatbots, Live Notifications via WebSockets',
  },
  {
    icon: Smartphone,
    title: 'Advanced PWA Setup',
    price: '₹20,000+',
    description: 'Offline access and mobile-installable app',
  },
  {
    icon: Bot,
    title: 'Custom AI Chatbot',
    price: '₹50,000+',
    description: 'LLM-powered bot trained on your business data (RAG architecture).',
  },
];

export function Services() {
  const { resolvedTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('design');

  const activeCategory = serviceCategories.find((c) => c.id === activeTab);

  return (
    <section
      id="services"
      className={`relative py-24 overflow-hidden ${
        resolvedTheme === 'dark' ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20 ${
            resolvedTheme === 'dark' ? 'bg-primary-500/30' : 'bg-primary-500/20'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-primary-500/10">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Services & Pricing
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Tailored solutions for mid-sized startups and established MSMEs in
            the Indian market.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === category.id
                    ? resolvedTheme === 'dark'
                      ? 'bg-white/10 border-2 border-primary-500/50'
                      : 'bg-white border-2 border-primary-500/50 shadow-xl'
                    : resolvedTheme === 'dark'
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                    : 'bg-slate-50 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left hidden sm:block">
                  <p
                    className={`font-semibold ${
                      activeTab === category.id
                        ? resolvedTheme === 'dark'
                          ? 'text-white'
                          : 'text-slate-900'
                        : resolvedTheme === 'dark'
                        ? 'text-slate-300'
                        : 'text-slate-600'
                    }`}
                  >
                    {category.title}
                  </p>
                  <p
                    className={`text-xs ${
                      resolvedTheme === 'dark' ? 'text-slate-500' : 'text-slate-500'
                    }`}
                  >
                    {category.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mb-20"
          >
            {activeCategory?.packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`relative h-full overflow-hidden transition-all duration-500 ${
                    pkg.popular
                      ? 'scale-105 shadow-2xl'
                      : 'hover:shadow-xl'
                  } ${
                    resolvedTheme === 'dark'
                      ? 'bg-slate-800/50 border-white/10'
                      : 'bg-white/80 border-slate-200'
                  } backdrop-blur-xl`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-600 to-purple-600 text-white text-center py-1.5 text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className={`${pkg.popular ? 'pt-10' : ''}`}>
                    <h3
                      className={`text-xl font-bold ${
                        resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {pkg.description}
                    </p>
                    <div className="mt-4">
                      <span
                        className={`text-3xl font-bold bg-gradient-to-r ${activeCategory.color} bg-clip-text text-transparent`}
                      >
                        {pkg.price}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-start gap-3 text-sm ${
                            resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6 block"
                    >
                      <Button
                        className={`w-full ${
                          pkg.popular
                            ? 'bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white'
                            : resolvedTheme === 'dark'
                            ? 'bg-white/10 text-white hover:bg-white/20'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        Get Started
                      </Button>
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Custom Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-purple-500/10">
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              Custom Features
            </span>
          </div>
          <h3
            className={`text-2xl sm:text-3xl font-bold mb-2 ${
              resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            The <span className="gradient-text">Technical Edge</span>
          </h3>
          <p
            className={`text-base ${
              resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Add these powerful features to any package
          </p>
        </motion.div>

        {/* Custom Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {customFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`p-5 rounded-2xl transition-all duration-300 ${
                  resolvedTheme === 'dark'
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                    : 'bg-slate-50 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold mb-1 ${
                        resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className={`text-sm mb-2 ${
                        resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {feature.description}
                    </p>
                    <Badge
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    >
                      {feature.price}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
