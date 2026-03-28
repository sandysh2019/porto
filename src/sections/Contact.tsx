import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  const { resolvedTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Store in localStorage for admin panel
    const messages = JSON.parse(localStorage.getItem('contact-messages') || '[]');
    messages.push({
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem('contact-messages', JSON.stringify(messages));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const whatsappMessage = encodeURIComponent(
    "Hi! I visited your portfolio and I'm interested in discussing a project with you."
  );
  const whatsappLink = `https://wa.me/919994723048?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className={`relative py-24 overflow-hidden ${
        resolvedTheme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 ${
            resolvedTheme === 'dark' ? 'bg-primary-500/30' : 'bg-primary-500/20'
          }`}
        />
        <div
          className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20 ${
            resolvedTheme === 'dark' ? 'bg-purple-500/30' : 'bg-purple-500/20'
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
            <Mail className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Get in Touch
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              <div
                className={`p-6 rounded-2xl ${
                  resolvedTheme === 'dark'
                    ? 'bg-slate-800/50 border border-white/10'
                    : 'bg-white border border-slate-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-600 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className={`text-sm ${
                        resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      Email
                    </p>
                    <p
                      className={`font-semibold ${
                        resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      santhoshwe2007@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`p-6 rounded-2xl ${
                  resolvedTheme === 'dark'
                    ? 'bg-slate-800/50 border border-white/10'
                    : 'bg-white border border-slate-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className={`text-sm ${
                        resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      Phone
                    </p>
                    <p
                      className={`font-semibold ${
                        resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      +91 99947 23048
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`p-6 rounded-2xl ${
                  resolvedTheme === 'dark'
                    ? 'bg-slate-800/50 border border-white/10'
                    : 'bg-white border border-slate-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className={`text-sm ${
                        resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      Location
                    </p>
                    <p
                      className={`font-semibold ${
                        resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Chennai, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`block p-6 rounded-2xl transition-all duration-300 ${
                resolvedTheme === 'dark'
                  ? 'bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 hover:border-green-500/50'
                  : 'bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:border-green-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/25">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <p
                    className={`font-semibold ${
                      resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Chat on WhatsApp
                  </p>
                  <p
                    className={`text-sm ${
                      resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Quick response guaranteed
                  </p>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div
              className={`p-8 rounded-3xl ${
                resolvedTheme === 'dark'
                  ? 'bg-slate-800/50 border border-white/10'
                  : 'bg-white border border-slate-200'
              } backdrop-blur-xl`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4
                    className={`text-xl font-bold mb-2 ${
                      resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Message Sent!
                  </h4>
                  <p
                    className={`${
                      resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className={
                          resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                        }
                      >
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Santhosh"
                        required
                        className={`${
                          resolvedTheme === 'dark'
                            ? 'bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500'
                            : 'bg-slate-50'
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className={
                          resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                        }
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="santhosh@example.com"
                        required
                        className={`${
                          resolvedTheme === 'dark'
                            ? 'bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500'
                            : 'bg-slate-50'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className={
                        resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                      }
                    >
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className={`${
                        resolvedTheme === 'dark'
                          ? 'bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500'
                          : 'bg-slate-50'
                      }`}
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white py-6 text-lg rounded-xl shadow-lg shadow-primary-500/25"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
