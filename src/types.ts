export type PlanType = 'Starter' | 'Professional' | 'Business' | 'General Enquiry';

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  avatarInitials: string;
  companyName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DashboardTask {
  id: string;
  title: string;
  project: string;
  assignee: {
    name: string;
    initials: string;
    color: string;
  };
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'In Progress' | 'Completed' | 'Pending';
}

export interface ProjectSummary {
  id: string;
  name: string;
  category: string;
  progress: number;
  tasksCount: number;
  completedTasks: number;
  color: string;
  members: string[];
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  companyName: string;
  plan: PlanType;
  message: string;
}
