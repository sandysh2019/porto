import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { ExternalLink, Eye, Layers } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/types';

// Sample projects data
const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Brand Identity for TechStart',
    description: 'Complete brand overhaul including logo, color palette, and brand guidelines for a fintech startup.',
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
    link: '#',
    technologies: ['Figma', 'Illustrator', 'Brand Strategy'],
    createdAt: '2026-01-15',
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
    category: 'development',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    link: '#',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    createdAt: '2026-02-01',
  },
  {
    id: '3',
    title: 'Health & Wellness App',
    description: 'Mobile-first web application with real-time tracking, personalized dashboards, and social features.',
    category: 'both',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    link: '#',
    technologies: ['React', 'Node.js', 'MongoDB', 'Figma'],
    createdAt: '2026-01-20',
  },
  {
    id: '4',
    title: 'Restaurant Branding',
    description: 'Visual identity design for an upscale restaurant chain including menu design, signage, and packaging.',
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    link: '#',
    technologies: ['Photoshop', 'InDesign', 'Brand Design'],
    createdAt: '2025-12-10',
  },
  {
    id: '5',
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization, user management, and custom reporting.',
    category: 'development',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    link: '#',
    technologies: ['React', 'D3.js', 'Firebase', 'TypeScript'],
    createdAt: '2026-02-15',
  },
  {
    id: '6',
    title: 'Creative Agency Website',
    description: 'Full website redesign with custom animations, CMS integration, and performance optimization.',
    category: 'both',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    link: '#',
    technologies: ['Next.js', 'Framer Motion', 'Sanity CMS', 'Figma'],
    createdAt: '2026-01-05',
  },
  {
    id: '7',
    title: 'Mobile Banking UI',
    description: 'Complete UI/UX design for a mobile banking application with focus on accessibility and ease of use.',
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    link: '#',
    technologies: ['Figma', 'Prototyping', 'User Research'],
    createdAt: '2025-11-20',
  },
  {
    id: '8',
    title: 'AI Content Platform',
    description: 'AI-powered content generation platform with custom models, user dashboards, and subscription management.',
    category: 'development',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    link: '#',
    technologies: ['Python', 'React', 'OpenAI', 'AWS'],
    createdAt: '2026-02-20',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'design', label: 'Design' },
  { id: 'development', label: 'Development' },
  { id: 'both', label: 'Design + Dev' },
];

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

export function Projects() {
  const { resolvedTheme } = useTheme();
  const [projects, setProjects] = useState<Project[]>(sampleProjects);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    // Load projects from localStorage if available
    const stored = localStorage.getItem('portfolio-projects');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.length > 0) {
          setProjects(parsed);
        }
      } catch (e) {
        console.error('Failed to parse projects:', e);
      }
    }
  }, []);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className={`relative py-24 ${
        resolvedTheme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 ${
            resolvedTheme === 'dark' ? 'bg-primary-500/20' : 'bg-primary-500/10'
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 ${
            resolvedTheme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-500/10'
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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-primary-500/10">
            <Layers className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Portfolio
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            A curated selection of my latest work in design and development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/25'
                  : resolvedTheme === 'dark'
                  ? 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Masonry
              breakpointCols={breakpointColumns}
              className="masonry-grid"
              columnClassName="masonry-grid-column"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div
                    className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                      resolvedTheme === 'dark'
                        ? 'bg-slate-800/50 border border-white/10'
                        : 'bg-white border border-slate-200'
                    }`}
                    style={{
                      boxShadow:
                        hoveredProject === project.id
                          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {/* Image Container - Natural aspect ratio */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Overlay on Hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex items-end justify-between p-6"
                      >
                        <div className="flex gap-2">
                          <motion.a
                            href={project.link}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30"
                          >
                            <Eye className="w-5 h-5" />
                          </motion.a>
                          <motion.a
                            href={project.link}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        </div>
                      </motion.div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge
                          className="backdrop-blur-md bg-black/50 text-white border-white/20"
                        >
                          {project.category === 'both'
                            ? 'Design + Dev'
                            : project.category === 'design'
                            ? 'Design'
                            : 'Development'}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-sm mb-4 line-clamp-2 ${
                          resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs px-2.5 py-1 rounded-full ${
                              resolvedTheme === 'dark'
                                ? 'bg-white/10 text-slate-300'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
