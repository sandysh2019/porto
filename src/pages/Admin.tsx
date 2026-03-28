import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  Lock,
  Unlock,
  Plus,
  Edit2,
  Trash2,
  X,
  Save,
  Image as ImageIcon,
  LayoutGrid,
  MessageSquare,
  LogOut,
  ArrowLeft,
  Home,
} from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { Project } from '@/types';

const defaultCredentials = {
  username: 'ss2026',
  password: 'santhoshwe2007',
};

const emptyProject: Omit<Project, 'id' | 'createdAt'> = {
  title: '',
  description: '',
  category: 'design',
  imageUrl: '',
  link: '',
  technologies: [],
};

export function Admin() {
  const { resolvedTheme } = useTheme();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'projects' | 'messages'>('projects');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState(emptyProject);
  const [techInput, setTechInput] = useState('');

  useEffect(() => {
    // Load projects from localStorage
    const storedProjects = localStorage.getItem('portfolio-projects');
    if (storedProjects) {
      try {
        setProjects(JSON.parse(storedProjects));
      } catch (e) {
        console.error('Failed to parse projects:', e);
      }
    }

    // Load messages from localStorage
    const storedMessages = localStorage.getItem('contact-messages');
    if (storedMessages) {
      try {
        setMessages(JSON.parse(storedMessages));
      } catch (e) {
        console.error('Failed to parse messages:', e);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      credentials.username === defaultCredentials.username &&
      credentials.password === defaultCredentials.password
    ) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: '', password: '' });
    navigate('/');
  };

  const saveProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem('portfolio-projects', JSON.stringify(newProjects));
  };

  const handleAddProject = () => {
    setEditingProject(null);
    setFormData(emptyProject);
    setTechInput('');
    setIsModalOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      category: project.category,
      imageUrl: project.imageUrl,
      link: project.link || '',
      technologies: project.technologies,
    });
    setTechInput(project.technologies.join(', '));
    setIsModalOpen(true);
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const newProjects = projects.filter((p) => p.id !== id);
      saveProjects(newProjects);
    }
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();

    const technologies = techInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t);

    if (editingProject) {
      // Update existing
      const newProjects = projects.map((p) =>
        p.id === editingProject.id
          ? { ...p, ...formData, technologies }
          : p
      );
      saveProjects(newProjects);
    } else {
      // Create new
      const newProject: Project = {
        ...formData,
        id: Date.now().toString(),
        technologies,
        createdAt: new Date().toISOString(),
      };
      saveProjects([...projects, newProject]);
    }

    setIsModalOpen(false);
    setEditingProject(null);
    setFormData(emptyProject);
    setTechInput('');
  };

  const handleDeleteMessage = (id: number) => {
    if (confirm('Are you sure you want to delete this message?')) {
      const newMessages = messages.filter((m) => m.id !== id);
      setMessages(newMessages);
      localStorage.setItem('contact-messages', JSON.stringify(newMessages));
    }
  };

  // Login View
  if (!isAuthenticated) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          resolvedTheme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 ${
              resolvedTheme === 'dark' ? 'bg-primary-500/30' : 'bg-primary-500/20'
            }`}
          />
        </div>

        {/* Back to Home Link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-6 left-6 z-10"
        >
          <Link
            to="/"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
              resolvedTheme === 'dark'
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 shadow-lg'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Website
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-md px-4"
        >
          <div
            className={`p-8 rounded-3xl ${
              resolvedTheme === 'dark'
                ? 'bg-slate-800/80 border border-white/10'
                : 'bg-white border border-slate-200'
            } backdrop-blur-xl`}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2
                className={`text-2xl font-bold ${
                  resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                Admin Login
              </h2>
              <p
                className={`text-sm mt-2 ${
                  resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Enter credentials to access the admin panel
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label
                  className={
                    resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }
                >
                  Username
                </Label>
                <Input
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                  }
                  placeholder="admin"
                  className={`mt-1 ${
                    resolvedTheme === 'dark'
                      ? 'bg-slate-900/50 border-white/10 text-white'
                      : 'bg-slate-50'
                  }`}
                />
              </div>
              <div>
                <Label
                  className={
                    resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }
                >
                  Password
                </Label>
                <Input
                  type="password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  placeholder="••••••••"
                  className={`mt-1 ${
                    resolvedTheme === 'dark'
                      ? 'bg-slate-900/50 border-white/10 text-white'
                      : 'bg-slate-50'
                  }`}
                />
              </div>

              {loginError && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm text-center"
                >
                  {loginError}
                </motion.p>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white py-6"
              >
                <Unlock className="w-5 h-5 mr-2" />
                Login
              </Button>
            </form>

            <p
              className={`text-xs text-center mt-6 ${
                resolvedTheme === 'dark' ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              ONLY FOR ADMINISTRATORS. DO NOT SHARE YOUR CREDENTIALS WITH ANYONE.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div
      className={`min-h-screen ${
        resolvedTheme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10 ${
            resolvedTheme === 'dark' ? 'bg-primary-500/30' : 'bg-primary-500/20'
          }`}
        />
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 border-b ${
          resolvedTheme === 'dark'
            ? 'bg-slate-900/80 backdrop-blur-xl border-white/10'
            : 'bg-white/80 backdrop-blur-xl border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  resolvedTheme === 'dark'
                    ? 'text-slate-300 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
              <div className="w-px h-6 bg-border" />
              <h1
                className={`text-xl font-bold ${
                  resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                Admin <span className="gradient-text">Panel</span>
              </h1>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className={
                resolvedTheme === 'dark'
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-slate-300'
              }
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-2 mb-8"
        >
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'projects'
                ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white'
                : resolvedTheme === 'dark'
                ? 'bg-white/10 text-slate-300 hover:bg-white/20'
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'messages'
                ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white'
                : resolvedTheme === 'dark'
                ? 'bg-white/10 text-slate-300 hover:bg-white/20'
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Messages ({messages.length})
          </button>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'projects' ? (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Add Button */}
              <div className="mb-6">
                <Button
                  onClick={handleAddProject}
                  className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </div>

              {/* Projects Grid */}
              {projects.length === 0 ? (
                <div
                  className={`text-center py-16 rounded-2xl ${
                    resolvedTheme === 'dark'
                      ? 'bg-slate-800/50 border border-white/10'
                      : 'bg-white border border-slate-200'
                  }`}
                >
                  <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p
                    className={`${
                      resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    No projects yet. Add your first project!
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`group rounded-2xl overflow-hidden ${
                        resolvedTheme === 'dark'
                          ? 'bg-slate-800/50 border border-white/10'
                          : 'bg-white border border-slate-200'
                      }`}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleEditProject(project)}
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(project.id)}
                            className="w-10 h-10 rounded-full bg-red-500/80 flex items-center justify-center text-white hover:bg-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3
                          className={`font-semibold mb-1 ${
                            resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`text-sm line-clamp-2 ${
                            resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className={`text-xs px-2 py-1 rounded-full ${
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
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="messages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {messages.length === 0 ? (
                <div
                  className={`text-center py-16 rounded-2xl ${
                    resolvedTheme === 'dark'
                      ? 'bg-slate-800/50 border border-white/10'
                      : 'bg-white border border-slate-200'
                  }`}
                >
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p
                    className={`${
                      resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    No messages yet.
                  </p>
                </div>
              ) : (
                messages.map((message) => (
                  <motion.div
                    key={message.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`p-6 rounded-2xl ${
                      resolvedTheme === 'dark'
                        ? 'bg-slate-800/50 border border-white/10'
                        : 'bg-white border border-slate-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4
                          className={`font-semibold ${
                            resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {message.name}
                        </h4>
                        <p
                          className={`text-sm ${
                            resolvedTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          {message.email}
                        </p>
                        <p
                          className={`mt-3 ${
                            resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          {message.message}
                        </p>
                        <p
                          className={`text-xs mt-3 ${
                            resolvedTheme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                          }`}
                        >
                          {new Date(message.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeleteMessage(message.id)}
                        className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 hover:bg-red-500/30"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Add/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className={`max-w-2xl max-h-[90vh] overflow-y-auto ${
            resolvedTheme === 'dark'
              ? 'bg-slate-800 border-white/10'
              : 'bg-white'
          }`}
        >
          <DialogHeader>
            <DialogTitle
              className={resolvedTheme === 'dark' ? 'text-white' : 'text-slate-900'}
            >
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSaveProject} className="space-y-6 mt-4">
            <div>
              <Label
                className={resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'}
              >
                Project Title
              </Label>
              <Input
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Enter project title"
                required
                className={`mt-1 ${
                  resolvedTheme === 'dark'
                    ? 'bg-slate-900/50 border-white/10 text-white'
                    : 'bg-slate-50'
                }`}
              />
            </div>

            <div>
              <Label
                className={resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'}
              >
                Description
              </Label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Enter project description"
                required
                rows={3}
                className={`mt-1 ${
                  resolvedTheme === 'dark'
                    ? 'bg-slate-900/50 border-white/10 text-white'
                    : 'bg-slate-50'
                }`}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label
                  className={
                    resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }
                >
                  Category
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value: any) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger
                    className={`mt-1 ${
                      resolvedTheme === 'dark'
                        ? 'bg-slate-900/50 border-white/10 text-white'
                        : 'bg-slate-50'
                    }`}
                  >
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="both">Design + Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  className={
                    resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }
                >
                  Project Link (optional)
                </Label>
                <Input
                  value={formData.link}
                  onChange={(e) =>
                    setFormData({ ...formData, link: e.target.value })
                  }
                  placeholder="https://..."
                  className={`mt-1 ${
                    resolvedTheme === 'dark'
                      ? 'bg-slate-900/50 border-white/10 text-white'
                      : 'bg-slate-50'
                  }`}
                />
              </div>
            </div>

            <div>
              <Label
                className={resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'}
              >
                Image URL
              </Label>
              <Input
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                placeholder="https://images.unsplash.com/..."
                required
                className={`mt-1 ${
                  resolvedTheme === 'dark'
                    ? 'bg-slate-900/50 border-white/10 text-white'
                    : 'bg-slate-50'
                }`}
              />
              {formData.imageUrl && (
                <div className="mt-3 aspect-video rounded-lg overflow-hidden">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://via.placeholder.com/400x300?text=Invalid+Image+URL';
                    }}
                  />
                </div>
              )}
            </div>

            <div>
              <Label
                className={resolvedTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'}
              >
                Technologies (comma-separated)
              </Label>
              <Input
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                placeholder="React, TypeScript, Tailwind CSS"
                className={`mt-1 ${
                  resolvedTheme === 'dark'
                    ? 'bg-slate-900/50 border-white/10 text-white'
                    : 'bg-slate-50'
                }`}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className={
                  resolvedTheme === 'dark'
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : ''
                }
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                {editingProject ? 'Update Project' : 'Save Project'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
