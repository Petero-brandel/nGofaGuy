import {
  ClipboardList,
  GraduationCap,
  Clock,
  Wallet,
  Check,
  ShoppingBag,
  Wrench,
  Palette,
  Package,
} from "lucide-react";

export const STEPS = [
  {
    id: 1,
    title: "Task Details",
    subtitle: "What do you need done?",
    icon: ClipboardList,
  },
  {
    id: 2,
    title: "Skills Required",
    subtitle: "What skills are needed?",
    icon: GraduationCap,
  },
  {
    id: 3,
    title: "Timeline & Location",
    subtitle: "When and where?",
    icon: Clock,
  },
  {
    id: 4,
    title: "Payment",
    subtitle: "How much will you pay?",
    icon: Wallet,
  },
  {
    id: 5,
    title: "Review & Post",
    subtitle: "Confirm your task",
    icon: Check,
  },
];

export const TASK_CATEGORIES = [
  {
    id: "errands",
    label: "Errands & Delivery",
    icon: ShoppingBag,
    needsSkills: false,
  },
  {
    id: "academic",
    label: "Academic Help",
    icon: GraduationCap,
    needsSkills: true,
  },
  { id: "tech", label: "Tech Services", icon: Wrench, needsSkills: true },
  { id: "creative", label: "Creative Work", icon: Palette, needsSkills: true },
  { id: "general", label: "General Tasks", icon: Package, needsSkills: false },
];

export const SUGGESTIONS = [
  "Pick up groceries",
  "Deliver package",
  "Queue for registration",
  "Tutoring session",
  "Note-taking",
  "Laptop repair",
  "Graphic design",
  "Social media post",
];

export const SKILLS = [
  "Mathematics",
  "Programming",
  "Writing",
  "Design",
  "Photography",
  "Video Editing",
  "Data Entry",
  "Translation",
  "Research",
  "Presentation",
  "Excel",
  "Social Media",
];

export const TIPS = [
  "Be clear about what you need done",
  "Mention when and where on campus",
  "State your budget upfront",
  "Add any special requirements",
];

export interface FormData {
  description: string;
  category: string;
  selectedSuggestions: string[];
  skills: string[];
  urgency: string;
  duration: string;
  location: string;
  budgetAmount: string;
}
