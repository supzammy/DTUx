
export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  summary: string;
}

export interface NoticeItem {
  id: number;
  title: string;
  date: string;
  isNew?: boolean;
  link: string;
  category: 'General' | 'Student' | 'Faculty' | 'Tender';
}

export interface StatItem {
  value: string;
  label: string;
}

export interface EventItem {
  id: number;
  day: string;
  month: string;
  title: string;
  location: string;
  category?: string; // Added for search indexing
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface CampusItem {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  galleryImages?: string[];
  locationId?: number; // Links to MapLocation.id
}

export interface DepartmentItem {
  name: string;
  code: string;
}

// New Interface for Detailed Backend Data
export interface DepartmentDetails {
  code: string;
  name: string;
  head: string;
  email: string;
  stats: {
    students: number;
    faculty: number;
    publications: number;
  };
  programs: {
    level: 'Undergraduate' | 'Postgraduate' | 'Doctoral' | 'Elective';
    degree: string;
    courses: string[];
  }[];
  researchAreas: string[];
}

export interface MapLocation {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  top: string;  // CSS percentage
  left: string; // CSS percentage
  googleMapsUrl: string;
}

export interface LeadershipProfile {
  name: string;
  designation: string;
  imageUrl: string;
  bio?: string;
  email?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface AdmissionProgram {
  degree: string;
  exam: string;
  description: string;
  link: string;
  icon?: string;
}

export interface FacultyProfile {
  id: number;
  name: string;
  title: string;
  department: string;
  email: string;
  imageUrl: string;
  researchInterests: string[];
  bio?: string;
  profileLink?: string;
}
