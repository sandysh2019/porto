import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Palette, Code2, Heart } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/ft.santzx', label: 'Instagram' },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <footer
      className={`relative py-16 ${
        resolvedTheme === 'dark'
          ? 'bg-slate-950 border-t border-white/5'
          : 'bg-white border-t border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.a
              href="#home"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600">
                <div className="flex items-center -space-x-1">
                  <Palette className="w-4 h-4 text-white" />
                  <Code2 className="w-4 h-4 text-white" />
                </div>
              </div>
              <span
                className={`font-bold text-lg ${
                  resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                Santhosh<span className="text-primary-500"> V</span>
              </span>
            </motion.a>
            <p
              className={`max-w-sm mb-6 ${
                resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Crafting stunning visual identities and building high-performance
              web applications for businesses that want to stand out.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      resolvedTheme === 'dark'
                        ? 'bg-white/10 text-slate-400 hover:bg-white/20 hover:text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`font-semibold mb-4 ${
                resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      resolvedTheme === 'dark'
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/admin"
                  className={`text-sm transition-colors ${
                    resolvedTheme === 'dark'
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className={`font-semibold mb-4 ${
                resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Get in Touch
            </h4>
            <ul
              className={`space-y-3 text-sm ${
                resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <li>santhoshwe2007@gmail.com</li>
              <li>+91 99947 23048</li>
              <li>Chennai, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            resolvedTheme === 'dark' ? 'border-white/10' : 'border-slate-200'
          }`}
        >
          <p
            className={`text-sm ${
              resolvedTheme === 'dark' ? 'text-slate-500' : 'text-slate-500'
            }`}
          >
            © 2026 Santhosh. All rights reserved.
          </p>
          <p
            className={`text-sm flex items-center gap-1 ${
              resolvedTheme === 'dark' ? 'text-slate-500' : 'text-slate-500'
            }`}
          >
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India By Sandy.
          </p>
        </div>
      </div>
    </footer>
  );
}
