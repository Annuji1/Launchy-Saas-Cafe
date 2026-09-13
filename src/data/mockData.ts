import { FeatureItem, PricingPlan, StepItem, TestimonialItem, FAQItem, DashboardTask, ProjectSummary } from '../types';

export const HERO_TRUST_METRICS = [
  { value: '10K+', label: 'Active Users', highlight: 'Worldwide' },
  { value: '25K+', label: 'Projects Managed', highlight: 'Delivered On-Time' },
  { value: '99.9%', label: 'Platform Uptime', highlight: 'Enterprise SLA' },
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'f1',
    title: 'Smart Dashboard',
    iconName: 'LayoutDashboard',
    description: 'Get a complete overview of your projects, deadlines, tasks, and team activity in one organized workspace.',
    badge: 'Real-Time Sync',
  },
  {
    id: 'f2',
    title: 'Task Management',
    iconName: 'CheckSquare',
    description: 'Create, assign, prioritize, and track tasks so everyone knows what needs to happen next.',
    badge: 'Kanban & List',
  },
  {
    id: 'f3',
    title: 'Team Collaboration',
    iconName: 'Users',
    description: 'Keep conversations, responsibilities, and project updates connected so your team can work together smoothly.',
    badge: 'Live Presence',
  },
  {
    id: 'f4',
    title: 'Analytics',
    iconName: 'BarChart3',
    description: 'Understand project performance with useful insights, progress indicators, and visual reports.',
    badge: 'Velocity Metrics',
  },
  {
    id: 'f5',
    title: 'Smart Notifications',
    iconName: 'BellRing',
    description: 'Stay informed with timely updates, reminders, and activity notifications that keep your workflow moving.',
    badge: 'Instant Alerts',
  },
  {
    id: 'f6',
    title: 'Secure Workspace',
    iconName: 'ShieldCheck',
    description: 'Organize your work in a structured workspace designed with privacy and secure access in mind.',
    badge: 'Bank-Grade Security',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Create',
    description: 'Set up your workspace, create projects, and organize your goals in minutes.',
    iconName: 'FolderPlus',
    details: ['1-click workspace setup', 'Custom templates & milestones', 'Centralized goal tracking'],
  },
  {
    number: '02',
    title: 'Collaborate',
    description: 'Invite your team, assign tasks, share updates, and keep everyone aligned.',
    iconName: 'UserCheck',
    details: ['Role-based team permissions', 'Integrated task commenting', 'Threaded document notes'],
  },
  {
    number: '03',
    title: 'Grow',
    description: 'Track performance, discover insights, and improve the way your team works.',
    iconName: 'TrendingUp',
    details: ['Sprint velocity analytics', 'Burn-down visual charts', 'Exportable milestone summaries'],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 499,
    yearlyPrice: 4990,
    description: 'Essential workflow tools for freelancers and early-stage small teams.',
    ctaText: 'Choose Starter',
    features: [
      '3 Projects',
      'Basic Dashboard',
      'Task Management',
      'Email Support',
      'Community Access',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    monthlyPrice: 999,
    yearlyPrice: 9990,
    popular: true,
    description: 'Best for growing startups and fast-moving product teams that need scale.',
    ctaText: 'Choose Professional',
    features: [
      'Unlimited Projects',
      'Advanced Dashboard',
      'Team Collaboration',
      'Analytics',
      'Priority Support',
      'Automated Reminders',
      'Custom Status Workflows',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    monthlyPrice: 1999,
    yearlyPrice: 19990,
    description: 'Complete operational power, custom security, and dedicated guidance.',
    ctaText: 'Choose Business',
    features: [
      'Everything in Professional',
      'Advanced Analytics',
      'Unlimited Team Members',
      'Premium Support (24/7)',
      'Custom Workspace',
      'Audit Logs & SLA Guarantee',
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Aisha Khan',
    role: 'Startup Founder',
    companyName: 'Nexora Labs',
    rating: 5,
    avatarInitials: 'AK',
    quote: 'Launchly gives our team a clear view of every project and helps us stay focused on what matters.',
  },
  {
    id: 't2',
    name: 'Rahul Mehta',
    role: 'Product Manager',
    companyName: 'Hyperflow Tech',
    rating: 5,
    avatarInitials: 'RM',
    quote: 'Managing tasks and tracking progress feels much easier when everything is organized in one workspace.',
  },
  {
    id: 't3',
    name: 'Sara Thomas',
    role: 'Marketing Lead',
    companyName: 'Aura Growth',
    rating: 5,
    avatarInitials: 'ST',
    quote: 'The simple interface and team collaboration tools make it easier to keep our campaigns moving.',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq1',
    question: 'What is Launchly?',
    answer: 'Launchly is a fictional project management platform concept that helps teams organize projects, manage tasks, collaborate, and monitor progress from one workspace.',
  },
  {
    id: 'faq2',
    question: 'Is there a free trial?',
    answer: 'The Launchly demo presents a Start Free experience. A real free-trial period would need to be configured when the platform is connected to a backend and billing system.',
  },
  {
    id: 'faq3',
    question: 'Can I invite my team?',
    answer: 'The Professional and Business plans are designed to support team collaboration. In this front-end demo, team invitations are represented as interface concepts rather than real account actions.',
  },
  {
    id: 'faq4',
    question: 'Can I cancel anytime?',
    answer: 'A real subscription cancellation policy would depend on the actual Launchly service terms. This demo can display a cancellation-friendly experience, but it does not process subscriptions.',
  },
];

export const SAMPLE_PROJECTS: ProjectSummary[] = [
  {
    id: 'p1',
    name: 'Mobile App Redesign v3',
    category: 'Product & Design',
    progress: 84,
    tasksCount: 24,
    completedTasks: 20,
    color: '#4F7CFF',
    members: ['AK', 'RM', 'ST'],
  },
  {
    id: 'p2',
    name: 'Cloud Infrastructure Upgrade',
    category: 'DevOps & Sec',
    progress: 65,
    tasksCount: 18,
    completedTasks: 12,
    color: '#8B5CF6',
    members: ['DR', 'ST'],
  },
  {
    id: 'p3',
    name: 'Q3 Growth Marketing Sprint',
    category: 'Marketing',
    progress: 92,
    tasksCount: 15,
    completedTasks: 14,
    color: '#10B981',
    members: ['ST', 'AK', 'JL'],
  },
];

export const SAMPLE_TASKS: DashboardTask[] = [
  {
    id: 'task-1',
    title: 'Finalize Figma design tokens & UI kit',
    project: 'Mobile App Redesign v3',
    assignee: { name: 'Aisha Khan', initials: 'AK', color: '#4F7CFF' },
    dueDate: 'Tomorrow',
    priority: 'High',
    status: 'In Progress',
  },
  {
    id: 'task-2',
    title: 'Deploy microservice auth migration',
    project: 'Cloud Infrastructure Upgrade',
    assignee: { name: 'Rahul Mehta', initials: 'RM', color: '#8B5CF6' },
    dueDate: 'Sep 18',
    priority: 'High',
    status: 'In Progress',
  },
  {
    id: 'task-3',
    title: 'Publish customer onboarding handbook',
    project: 'Q3 Growth Marketing Sprint',
    assignee: { name: 'Sara Thomas', initials: 'ST', color: '#10B981' },
    dueDate: 'Sep 21',
    priority: 'Medium',
    status: 'Completed',
  },
  {
    id: 'task-4',
    title: 'Audit database latency & read replicas',
    project: 'Cloud Infrastructure Upgrade',
    assignee: { name: 'Alex Miller', initials: 'AM', color: '#F59E0B' },
    dueDate: 'Sep 25',
    priority: 'Medium',
    status: 'Pending',
  },
  {
    id: 'task-5',
    title: 'Prepare product launch email sequence',
    project: 'Q3 Growth Marketing Sprint',
    assignee: { name: 'Sara Thomas', initials: 'ST', color: '#10B981' },
    dueDate: 'Sep 28',
    priority: 'Low',
    status: 'Completed',
  },
];
