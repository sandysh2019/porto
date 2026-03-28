export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'design' | 'development' | 'both';
  imageUrl: string;
  link?: string;
  technologies: string[];
  createdAt: string;
}

export interface ServicePackage {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  packages: ServicePackage[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface AdminCredentials {
  username: string;
  password: string;
}
