import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code2, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

export function Hero() {
  const { resolvedTheme } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div
          className={`absolute inset-0 opacity-[0.03] ${
            resolvedTheme === 'dark' ? 'text-white' : 'text-black'
          }`}
          style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background:
                resolvedTheme === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.05)',
              backdropFilter: 'blur(10px)',
              border:
                resolvedTheme === 'dark'
                  ? '1px solid rgba(255, 255, 255, 0.1)'
                  : '1px solid rgba(0, 0, 0, 0.1)',
            }}
          >
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span
              className={`text-sm font-medium ${
                resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Available for Projects in 2026
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span
              className={
                resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
              }
            >
              Graphic Designer
            </span>
            <br />
            <span className="inline-flex items-center gap-3 sm:gap-4 mt-2">
              <span className="gradient-text">+</span>
              <span className="gradient-text">Full Stack Developer</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 ${
              resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            I craft stunning visual identities and build high-performance web
            applications. The perfect dual-threat for your next big idea.
          </motion.p>

          {/* Dual Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-6 mb-10"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl ${
                resolvedTheme === 'dark'
                  ? 'bg-white/10 border border-white/20'
                  : 'bg-white border border-slate-200'
              } shadow-lg`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p
                  className={`text-xs font-medium ${
                    resolvedTheme === 'dark'
                      ? 'text-slate-400'
                      : 'text-slate-500'
                  }`}
                >
                  Design
                </p>
                <p
                  className={`text-sm font-semibold ${
                    resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Visual Identity
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl ${
                resolvedTheme === 'dark'
                  ? 'bg-white/10 border border-white/20'
                  : 'bg-white border border-slate-200'
              } shadow-lg`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p
                  className={`text-xs font-medium ${
                    resolvedTheme === 'dark'
                      ? 'text-slate-400'
                      : 'text-slate-500'
                  }`}
                >
                  Development
                </p>
                <p
                  className={`text-sm font-semibold ${
                    resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Full Stack
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary-500/25"
              >
                View My Work
              </Button>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className={`px-8 py-6 text-lg rounded-xl ${
                  resolvedTheme === 'dark'
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Get in Touch
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`flex flex-col items-center gap-2 ${
            resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
