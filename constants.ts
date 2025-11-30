
import { NavItem, NewsItem, StatItem, EventItem, CampusItem, NoticeItem, DepartmentItem, MapLocation, LeadershipProfile, TimelineEvent, AdmissionProgram, FacultyProfile, DepartmentDetails } from './types';

// OFFICIAL TOP BAR LINKS (Real External Portals)
export const TOP_BAR_LINKS = [
    { label: 'JAC Delhi', href: 'https://jacdelhi.admissions.nic.in/' },
    { label: 'Results', href: 'http://www.exam.dtu.ac.in/' }, 
    { label: 'ERP', href: 'https://cumsdtu.in/' },
    { label: 'Webmail', href: 'https://webmail.dtu.ac.in/' },
    { label: 'Central Library', href: 'http://library.dtu.ac.in/' }
];

// NAVIGATION ITEMS (Internal SPA Routing + Deep Links)
export const NAV_ITEMS: NavItem[] = [
  { 
    label: 'About', 
    href: '/about',
    subItems: [
      { label: 'History & Heritage', href: '/about#history' },
      { label: 'Vision & Mission', href: '/about#vision' },
      { label: 'Vice Chancellor\'s Message', href: '/about#leadership' },
      { label: 'Annual Reports', href: 'http://dtu.ac.in/Web/AnnualReports/' }, 
      { label: 'IQAC', href: 'http://dtu.ac.in/Web/IQAC/' }
    ]
  },
  { 
    label: 'Administration', 
    href: '/admin',
    subItems: [
        { label: 'Vice Chancellor', href: '/about#leadership' },
        { label: 'Board of Management', href: '/admin#board' },
        { label: 'University Court', href: '/admin#court' },
        { label: 'Registrar', href: '/admin#officials' },
        { label: 'Deans', href: '/admin#deans' }
    ]
  },
  { 
    label: 'Academics', 
    href: '/academics',
    subItems: [
        { label: 'Departments', href: '/departments' },
        { label: 'Ordinances', href: 'http://dtu.ac.in/Web/Academics/ordinances.php' },
        { label: 'Academic Calendar', href: '/academics#resources' },
        { label: 'Time Table', href: '/academics#resources' },
        { label: 'Faculty Directory', href: '/faculty' }
    ]
  },
  { 
    label: 'Admissions', 
    href: '/admissions',
    subItems: [
        { label: 'B.Tech (JAC Delhi)', href: 'https://jacdelhi.admissions.nic.in/' },
        { label: 'M.Tech (GATE)', href: 'http://dtu.ac.in/Web/Admission/mtech.php' },
        { label: 'MBA', href: 'http://dtu.ac.in/Web/Admission/mba.php' },
        { label: 'PhD', href: 'http://dtu.ac.in/Web/Admission/phd.php' }
    ]
  },
  {
      label: 'Research',
      href: '/research',
      subItems: [
          { label: 'Research Projects', href: '/research' },
          { label: 'IIP Cell', href: 'http://dtu.ac.in/Web/Research/iip.php' },
          { label: 'Incubation Foundation', href: 'http://dtuif.dtu.ac.in/' }
      ]
  },
  { 
    label: 'Student Life', 
    href: '/campus',
    subItems: [
        { label: 'Hostels', href: '/campus#map' },
        { label: 'Placements', href: 'http://tnp.dtu.ac.in/' },
        { label: 'Societies', href: '/campus' },
        { label: 'Sports', href: 'http://dtu.ac.in/Web/Facilities/Sports/' }
    ]
  }
];

// OFFICIAL FOOTER LINKS
export const FOOTER_LINKS = {
    academics: [
        { title: 'B.Tech Admissions (JAC)', href: 'https://jacdelhi.admissions.nic.in/' },
        { title: 'M.Tech Admissions', href: 'http://dtu.ac.in/Web/Admission/mtech.php' },
        { title: 'PhD Admissions', href: 'http://dtu.ac.in/Web/Admission/phd.php' },
        { title: 'Academic Calendar', href: 'http://dtu.ac.in/Web/Academics/calendar.php' },
        { title: 'Exam Results Portal', href: 'http://exam.dtu.ac.in/' },
        { title: 'Departments Catalog', href: '/departments' }
    ],
    quick: [
        { title: 'Training & Placements', href: 'http://tnp.dtu.ac.in/' },
        { title: 'DTU Alumni Association', href: 'http://dtualumni.org/' },
        { title: 'Central Library', href: 'http://library.dtu.ac.in/' },
        { title: 'Tenders & Notices', href: 'http://dtu.ac.in/Web/Tenders/' },
        { title: 'Right to Information (RTI)', href: 'http://dtu.ac.in/Web/RTI/' },
        { title: 'Guest House Booking', href: 'http://dtu.ac.in/Web/Facilities/GuestHouse/' },
        { title: 'Staff ERP Login', href: 'https://cims.dtu.ac.in/' }
    ],
    related: [
        { title: 'Govt. of NCT of Delhi', href: 'https://delhi.gov.in/' },
        { title: 'Ministry of Education', href: 'https://www.education.gov.in/' },
        { title: 'AICTE India', href: 'https://www.aicte-india.org/' },
        { title: 'UGC', href: 'https://www.ugc.ac.in/' },
        { title: 'NPTEL Courses', href: 'https://nptel.ac.in/' },
        { title: 'Digital India', href: 'https://www.digitalindia.gov.in/' }
    ]
};

// FACULTY DATA WITH BIO & PROFILES
export const FACULTY_DATA: FacultyProfile[] = [
    {
        id: 1,
        name: "Prof. Rajni Jindal",
        title: "Professor & Head",
        department: "Computer Science & Engineering",
        email: "rajnijindal@dtu.ac.in",
        imageUrl: "https://ui-avatars.com/api/?name=Rajni+Jindal&background=random",
        researchInterests: ["Data Mining", "Machine Learning", "Database Systems"],
        bio: "With over 30 years of teaching and research experience, Prof. Jindal has made significant contributions to the field of Data Mining and DBMS. She has supervised numerous PhD scholars and led several funded research projects.",
        profileLink: "http://dtu.ac.in/Web/Departments/CSE/faculty/rajnijindal.php"
    },
    {
        id: 2,
        name: "Prof. O.P. Verma",
        title: "Professor",
        department: "Electronics & Communication",
        email: "opverma@dtu.ac.in",
        imageUrl: "https://ui-avatars.com/api/?name=OP+Verma&background=random",
        researchInterests: ["Signal Processing", "Image Processing", "Soft Computing"],
        bio: "Prof. Verma specializes in Intelligent Systems and Signal Processing. His work has been published in over 100 international journals. He serves on the editorial boards of several prestigious journals.",
        profileLink: "http://dtu.ac.in/Web/Departments/ECE/faculty/opverma.php"
    },
    {
        id: 3,
        name: "Prof. R.S. Mishra",
        title: "Professor",
        department: "Mechanical Engineering",
        email: "rsmishra@dtu.ac.in",
        imageUrl: "https://ui-avatars.com/api/?name=RS+Mishra&background=random",
        researchInterests: ["Thermal Engineering", "Refrigeration", "Solar Energy"],
        bio: "An expert in Thermal Engineering, Prof. Mishra has developed innovative solar energy cooling systems. He is actively involved in renewable energy research and curriculum development.",
        profileLink: "#"
    },
    {
        id: 4,
        name: "Prof. Ruchika Malhotra",
        title: "Associate Professor",
        department: "Software Engineering",
        email: "ruchikamalhotra@dtu.ac.in",
        imageUrl: "https://ui-avatars.com/api/?name=Ruchika+Malhotra&background=random",
        researchInterests: ["Empirical Software Engg", "Software Quality", "Predictive Modeling"],
        bio: "Prof. Malhotra is a renowned researcher in Empirical Software Engineering. She has authored books on software testing and quality assurance and received multiple best paper awards.",
        profileLink: "#"
    },
    {
        id: 5,
        name: "Prof. Amit Mookerjee",
        title: "Professor & Head",
        department: "Delhi School of Management",
        email: "amitmookerjee@dtu.ac.in",
        imageUrl: "https://ui-avatars.com/api/?name=Amit+Mookerjee&background=random",
        researchInterests: ["Marketing Management", "Consumer Behavior", "Strategy"],
        bio: "Prof. Mookerjee brings extensive industry and academic experience. His research focuses on consumer psychology and strategic marketing in emerging markets.",
        profileLink: "#"
    },
    {
        id: 6,
        name: "Prof. A. Trivedi",
        title: "Professor",
        department: "Civil Engineering",
        email: "atrivedi@dtu.ac.in",
        imageUrl: "https://ui-avatars.com/api/?name=A+Trivedi&background=random",
        researchInterests: ["Geotechnical Engineering", "Rock Mechanics", "Tunneling"],
        bio: "Prof. Trivedi is an authority on Geotechnical Engineering. He has consulted on major infrastructure projects including metro rail and tunnel construction.",
        profileLink: "#"
    },
    {
        id: 7,
        name: "Dr. Yasha Hasija",
        title: "Associate Professor",
        department: "Biotechnology",
        email: "yashahasija@dtu.ac.in",
        imageUrl: "https://ui-avatars.com/api/?name=Yasha+Hasija&background=random",
        researchInterests: ["Genome Informatics", "Systems Biology", "Personalized Medicine"],
        bio: "Dr. Hasija's research bridges biology and computer science. She works on genome sequencing data analysis to develop personalized medical solutions.",
        profileLink: "#"
    },
    {
        id: 8,
        name: "Prof. Suresh Kumar",
        title: "Professor",
        department: "Applied Chemistry",
        email: "sureshkumar@dtu.ac.in",
        imageUrl: "https://ui-avatars.com/api/?name=Suresh+Kumar&background=random",
        researchInterests: ["Polymer Chemistry", "Nanocomposites", "Green Chemistry"],
        bio: "Prof. Kumar focuses on the development of eco-friendly polymer composites. His work in green chemistry aims to reduce industrial plastic waste.",
        profileLink: "#"
    }
];

export const VC_MESSAGE_FULL = `
"Education is not merely the acquisition of knowledge; it is the honing of the mind to think critically and innovatively. At Delhi Technological University, we are committed to fostering an ecosystem where dignity of labour is upheld, and technical excellence serves humanity.

Our journey from Delhi Polytechnic to DCE and now DTU has been one of resilience and nation-building. As we march towards the future, our focus remains on sustainable technologies, interdisciplinary research, and creating global leaders who carry the torch of 'DelTech' with pride and integrity."
`;

export const MISSION_POINTS = [
    "To establish a centre of excellence in emerging areas of science and technology.",
    "To foster a culture of research and innovation for global competitiveness.",
    "To produce technically competent and socially responsible human resources.",
    "To promote sustainable development and inclusive growth through education."
];

export const DEANS_LIST = [
    { name: "Prof. Ruchi Das", role: "Dean (Academic-UG)" },
    { name: "Prof. S. Indu", role: "Dean (Student Welfare)" },
    { name: "Prof. Rajeshwari Pandey", role: "Dean (Academic-PG)" },
    { name: "Prof. Raju Kumar", role: "Dean (Alumni Affairs)" },
    { name: "Prof. Pravir Kumar", role: "Dean (International Affairs)" },
    { name: "Prof. Amit Mookerjee", role: "Dean (Outreach & Extension)" },
];

export const DEPARTMENT_DATABASE: Record<string, DepartmentDetails> = {
    'CSE': {
        code: 'CSE',
        name: 'Computer Science & Engineering',
        head: 'Prof. Rajni Jindal',
        email: 'hod.cse@dtu.ac.in',
        stats: { students: 1200, faculty: 45, publications: 520 },
        researchAreas: ['Artificial Intelligence', 'Data Mining', 'Network Security', 'Computer Vision'],
        programs: [
            { level: 'Undergraduate', degree: 'B.Tech', courses: ['Computer Science & Engineering', 'Mathematics & Computing'] },
            { level: 'Postgraduate', degree: 'M.Tech', courses: ['Computer Science & Engineering', 'Software Engineering', 'AI'] },
            { level: 'Doctoral', degree: 'PhD', courses: ['Research in AI/ML', 'Big Data Analytics', 'Cyber Security'] }
        ]
    },
    'IT': {
         code: 'IT',
         name: 'Information Technology',
         head: 'Prof. Dinesh K. Vishwakarma',
         email: 'hod.it@dtu.ac.in',
         stats: { students: 600, faculty: 20, publications: 250 },
         researchAreas: ['Cloud Computing', 'IoT', 'Information Security'],
         programs: [
             { level: 'Undergraduate', degree: 'B.Tech', courses: ['Information Technology'] },
             { level: 'Postgraduate', degree: 'M.Tech', courses: ['Information Systems'] },
             { level: 'Doctoral', degree: 'PhD', courses: ['Research in IT'] }
         ]
    },
    'SE': {
        code: 'SE',
        name: 'Software Engineering',
        head: 'Prof. Ruchika Malhotra',
        email: 'hod.se@dtu.ac.in',
        stats: { students: 400, faculty: 18, publications: 180 },
        researchAreas: ['Empirical Software Engg', 'Software Quality', 'Predictive Modeling'],
        programs: [
            { level: 'Undergraduate', degree: 'B.Tech', courses: ['Software Engineering'] },
            { level: 'Postgraduate', degree: 'M.Tech', courses: ['Software Engineering'] },
            { level: 'Doctoral', degree: 'PhD', courses: ['Software Testing', 'Metrics'] }
        ]
    },
    'ECE': {
        code: 'ECE',
        name: 'Electronics & Communication',
        head: 'Prof. O.P. Verma',
        email: 'hod.ece@dtu.ac.in',
        stats: { students: 1100, faculty: 38, publications: 480 },
        researchAreas: ['VLSI Design', 'Signal Processing', 'Optical Communication', 'Antenna Design'],
        programs: [
             { level: 'Undergraduate', degree: 'B.Tech', courses: ['Electronics & Communication Engg.'] },
             { level: 'Postgraduate', degree: 'M.Tech', courses: ['VLSI Design', 'Signal Processing', 'Microwave & Optical Comm.'] },
             { level: 'Doctoral', degree: 'PhD', courses: ['Research in VLSI', 'RF Engineering'] }
        ]
    },
    'EE': {
         code: 'EE',
         name: 'Electrical Engineering',
         head: 'Prof. Madhusudan Singh',
         email: 'hod.ee@dtu.ac.in',
         stats: { students: 900, faculty: 35, publications: 410 },
         researchAreas: ['Power Systems', 'Control Systems', 'Renewable Energy', 'Smart Grids'],
         programs: [
             { level: 'Undergraduate', degree: 'B.Tech', courses: ['Electrical Engineering'] },
             { level: 'Postgraduate', degree: 'M.Tech', courses: ['Power Systems', 'Control & Instrumentation'] },
             { level: 'Doctoral', degree: 'PhD', courses: ['Smart Grid Tech', 'Power Electronics'] }
         ]
    },
    'ME': {
        code: 'ME',
        name: 'Mechanical Engineering',
        head: 'Prof. R.S. Mishra',
        email: 'hod.me@dtu.ac.in',
        stats: { students: 1400, faculty: 50, publications: 600 },
        researchAreas: ['Thermal Engineering', 'Robotics', 'Industrial Engineering', 'Automotive Engg'],
        programs: [
            { level: 'Undergraduate', degree: 'B.Tech', courses: ['Mechanical Engineering', 'Production & Industrial Engineering', 'Automotive Engineering'] },
             { level: 'Postgraduate', degree: 'M.Tech', courses: ['Thermal Engineering', 'Production Engineering', 'Industrial Design'] },
            { level: 'Doctoral', degree: 'PhD', courses: ['Research in Robotics', 'Sustainable Energy'] }
        ]
    },
    'CE': {
         code: 'CE',
         name: 'Civil Engineering',
         head: 'Prof. A. Trivedi',
         email: 'hod.ce@dtu.ac.in',
         stats: { students: 800, faculty: 28, publications: 320 },
         researchAreas: ['Structural Engg', 'Geotechnical Engg', 'Water Resources'],
         programs: [
             { level: 'Undergraduate', degree: 'B.Tech', courses: ['Civil Engineering'] },
             { level: 'Postgraduate', degree: 'M.Tech', courses: ['Structural Engineering', 'Geotechnical Engineering'] },
             { level: 'Doctoral', degree: 'PhD', courses: ['Sustainable Construction', 'Earthquake Engg'] }
         ]
    },
    'AM': {
        code: 'AM',
        name: 'Applied Mathematics',
        head: 'Prof. Sangita Kansal',
        email: 'hod.maths@dtu.ac.in',
        stats: { students: 200, faculty: 15, publications: 300 },
        researchAreas: ['Optimization', 'Numerical Analysis', 'Algebra', 'Information Theory'],
        programs: [
            { level: 'Undergraduate', degree: 'B.Tech', courses: ['Mathematics & Computing'] },
            { level: 'Doctoral', degree: 'PhD', courses: ['Pure Mathematics', 'Applied Mathematics'] }
        ]
    },
    'AP': {
        code: 'AP',
        name: 'Applied Physics',
        head: 'Prof. Suresh C. Sharma',
        email: 'hod.physics@dtu.ac.in',
        stats: { students: 250, faculty: 20, publications: 450 },
        researchAreas: ['Material Science', 'Plasma Physics', 'Nanotechnology', 'Fiber Optics'],
        programs: [
            { level: 'Undergraduate', degree: 'B.Tech', courses: ['Engineering Physics'] },
            { level: 'Postgraduate', degree: 'M.Tech', courses: ['Nano Science and Technology', 'Nuclear Science and Engineering'] },
            { level: 'Doctoral', degree: 'PhD', courses: ['Applied Physics'] }
        ]
    },
    'AC': {
        code: 'AC',
        name: 'Applied Chemistry',
        head: 'Prof. Archana Rani',
        email: 'hod.chem@dtu.ac.in',
        stats: { students: 150, faculty: 12, publications: 350 },
        researchAreas: ['Polymer Chemistry', 'Green Chemistry', 'Nanocomposites'],
        programs: [
            { level: 'Undergraduate', degree: 'B.Tech', courses: ['Chemical Engineering'] },
            { level: 'Postgraduate', degree: 'M.Tech', courses: ['Polymer Technology'] },
             { level: 'Doctoral', degree: 'PhD', courses: ['Applied Chemistry'] }
        ]
    },
    'BT': {
        code: 'BT',
        name: 'Biotechnology',
        head: 'Prof. Jai Gopal Sharma',
        email: 'hod.biotech@dtu.ac.in',
        stats: { students: 300, faculty: 14, publications: 280 },
        researchAreas: ['Genomics', 'Bioinformatics', 'Environmental Biotechnology'],
        programs: [
            { level: 'Undergraduate', degree: 'B.Tech', courses: ['Biotechnology'] },
            { level: 'Postgraduate', degree: 'M.Tech', courses: ['Bioinformatics'] },
            { level: 'Doctoral', degree: 'PhD', courses: ['Biotechnology'] }
        ]
    },
    'ENE': {
        code: 'ENE',
        name: 'Environmental Engineering',
        head: 'Prof. S.K. Singh',
        email: 'hod.ene@dtu.ac.in',
        stats: { students: 200, faculty: 10, publications: 220 },
        researchAreas: ['Water Treatment', 'Air Pollution Control', 'Waste Management'],
        programs: [
            { level: 'Undergraduate', degree: 'B.Tech', courses: ['Environmental Engineering'] },
            { level: 'Postgraduate', degree: 'M.Tech', courses: ['Environmental Engineering'] },
            { level: 'Doctoral', degree: 'PhD', courses: ['Environmental Science'] }
        ]
    },
    'DSM': {
        code: 'DSM',
        name: 'Delhi School of Management',
        head: 'Prof. Amit Mookerjee',
        email: 'head.dsm@dtu.ac.in',
        stats: { students: 300, faculty: 15, publications: 120 },
        researchAreas: ['Marketing', 'Finance', 'HR', 'Supply Chain'],
        programs: [
             { level: 'Postgraduate', degree: 'MBA', courses: ['MBA (General)', 'MBA (Business Analytics)', 'MBA (Family Business)'] },
            { level: 'Doctoral', degree: 'PhD', courses: ['Management'] }
        ]
    },
    'USME': {
        code: 'USME',
        name: 'University School of Management & Entrepreneurship',
        head: 'Prof. Amit Mookerjee',
        email: 'head.usme@dtu.ac.in',
        stats: { students: 400, faculty: 12, publications: 90 },
        researchAreas: ['Entrepreneurship', 'Innovation Management', 'Economics'],
        programs: [
            { level: 'Undergraduate', degree: 'BBA', courses: ['Bachelor of Business Administration'] },
            { level: 'Undergraduate', degree: 'BA (Hons)', courses: ['Economics'] },
            { level: 'Postgraduate', degree: 'MBA', courses: ['MBA (Innovation, Entrepreneurship and Venture Development)'] }
        ]
    },
    'DOD': {
        code: 'DOD',
        name: 'Department of Design',
        head: 'Prof. Ranganath M. Singari',
        email: 'head.design@dtu.ac.in',
        stats: { students: 250, faculty: 10, publications: 50 },
        researchAreas: ['Product Design', 'Visual Communication', 'UI/UX'],
        programs: [
            { level: 'Undergraduate', degree: 'B.Des', courses: ['Bachelor of Design'] },
            { level: 'Postgraduate', degree: 'M.Des', courses: ['Master of Design'] }
        ]
    },
    'HUM': {
        code: 'HUM',
        name: 'Humanities',
        head: 'Prof. Seema Singh',
        email: 'hod.humanities@dtu.ac.in',
        stats: { students: 100, faculty: 8, publications: 150 },
        researchAreas: ['Economics', 'English Literature', 'Psychology'],
        programs: [
            { level: 'Doctoral', degree: 'PhD', courses: ['Economics', 'English'] },
            { level: 'Elective', degree: 'Electives', courses: ['Communication Skills', 'Economics for Engineers'] }
        ]
    },
    'PTE': {
        code: 'PTE',
        name: 'Physical Education',
        head: 'Director Phy. Ed.',
        email: 'director.sports@dtu.ac.in',
        stats: { students: 0, faculty: 5, publications: 10 },
        researchAreas: ['Sports Science', 'Yoga'],
        programs: [
             { level: 'Elective', degree: 'Sports', courses: ['Physical Education', 'Sports Management'] }
        ]
    }
};

export const LEADERSHIP_TEAM: LeadershipProfile[] = [
    {
        name: "Prof. Prateek Sharma",
        designation: "Vice Chancellor",
        imageUrl: "https://www.dtu.ac.in/Web/Administration/VC/vc_prateek.jpg",
        bio: "A visionary academician dedicated to transforming DTU into a world-class research university. His focus remains on sustainable development and technological innovation.",
        email: "vc@dtu.ac.in"
    },
    {
        name: "Prof. Madhusudan Singh",
        designation: "Registrar",
        imageUrl: "https://ui-avatars.com/api/?name=Madhusudan+Singh&background=8C1515&color=fff&size=200", 
        email: "registrar@dtu.ac.in"
    },
    {
        name: "Prof. S. Indu",
        designation: "Dean (Student Welfare)",
        imageUrl: "https://ui-avatars.com/api/?name=S+Indu&background=2e2d29&color=fff&size=200",
        email: "deansw@dtu.ac.in"
    },
    {
        name: "Prof. Ruchi Das",
        designation: "Dean (Academic-UG)",
        imageUrl: "https://ui-avatars.com/api/?name=Ruchi+Das&background=2e2d29&color=fff&size=200",
        email: "deanacademic@dtu.ac.in"
    }
];

export const HISTORY_TIMELINE: TimelineEvent[] = [
    { year: "1941", title: "Establishment", description: "Established as Delhi Polytechnic to cater to the industrial needs of India." },
    { year: "1952", title: "Affiliation", description: "Affiliated with the University of Delhi." },
    { year: "1963", title: "Renamed DCE", description: "Renamed as Delhi College of Engineering (DCE)." },
    { year: "2009", title: "University Status", description: "Upgraded to a state university and renamed Delhi Technological University (DTU)." },
    { year: "2018", title: "East Campus", description: "Establishment of University School of Management & Entrepreneurship (USME) in East Delhi." }
];

export const ADMISSION_PROGRAMS: AdmissionProgram[] = [
    {
        degree: "B.Tech",
        exam: "JAC Delhi",
        description: "Admission to 15+ engineering disciplines based on JEE Main Rank. Counseling conducted by Joint Admission Counselling (JAC) Delhi.",
        link: "https://jacdelhi.admissions.nic.in/",
        icon: "Cpu"
    },
    {
        degree: "M.Tech",
        exam: "GATE",
        description: "Full-time and part-time programs for GATE qualified candidates in various specializations.",
        link: "http://dtu.ac.in/Web/Admission/mtech.php",
        icon: "Zap"
    },
    {
        degree: "MBA",
        exam: "CAT",
        description: "Two-year program at Delhi School of Management (DSM) and USME, focusing on leadership and business analytics.",
        link: "http://dtu.ac.in/Web/Admission/mba.php",
        icon: "Briefcase"
    },
    {
        degree: "Design (B.Des)",
        exam: "UCEED",
        description: "4-year undergraduate program in Interaction Design, Product Design, and Visual Communication.",
        link: "http://dtu.ac.in/Web/Admission/bdes.php",
        icon: "PenTool"
    }
];

export const DEPARTMENTS: DepartmentItem[] = [
    { name: 'Computer Science & Engineering', code: 'CSE' },
    { name: 'Information Technology', code: 'IT' },
    { name: 'Electronics & Communication', code: 'ECE' },
    { name: 'Electrical Engineering', code: 'EE' },
    { name: 'Mechanical Engineering', code: 'ME' },
    { name: 'Civil Engineering', code: 'CE' },
    { name: 'Software Engineering', code: 'SE' },
    { name: 'Applied Mathematics', code: 'AM' },
    { name: 'Applied Physics', code: 'AP' },
    { name: 'Applied Chemistry', code: 'AC' },
    { name: 'Biotechnology', code: 'BT' },
    { name: 'Environmental Engineering', code: 'ENE' },
    { name: 'Delhi School of Management', code: 'DSM' },
    { name: 'University School of Management', code: 'USME' },
    { name: 'Design', code: 'DOD' },
    { name: 'Humanities', code: 'HUM' },
    { name: 'Physical Education', code: 'PTE' }
];


export const NOTICES: NoticeItem[] = [
    { id: 1, date: '15 DEC 2025', title: 'Schedule of End Term Examination Nov-Dec 2025', isNew: true, link: '#', category: 'Student' },
    { id: 2, date: '12 DEC 2025', title: 'Registration for 11th Convocation 2025', isNew: true, link: '#', category: 'General' },
    { id: 3, date: '10 DEC 2025', title: 'List of Selected Candidates for PhD Admission Phase II 2025', isNew: true, link: '#', category: 'Student' },
    { id: 4, date: '05 DEC 2025', title: 'Circular: Revised Academic Calendar for 1st Year B.Tech', isNew: false, link: '#', category: 'Student' },
    { id: 5, date: '28 NOV 2025', title: 'Inviting Tenders for Supply of Lab Equipment (ECE Dept)', isNew: false, link: '#', category: 'Tender' },
    { id: 6, date: '25 NOV 2025', title: 'Holiday List for Calendar Year 2026', isNew: false, link: '#', category: 'General' },
    { id: 7, date: '20 NOV 2025', title: 'Faculty Development Program on AI/ML', isNew: false, link: '#', category: 'Faculty' },
    { id: 8, date: '15 NOV 2025', title: 'Notice regarding payment of Annual Fees', isNew: false, link: '#', category: 'Student' },
    { id: 9, date: '10 NOV 2025', title: 'Quotation for printing of University Magazine', isNew: false, link: '#', category: 'Tender' },
    { id: 10, date: '05 NOV 2025', title: 'CAS Promotion Guidelines for Faculty Members', isNew: false, link: '#', category: 'Faculty' },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    category: 'Achievement',
    date: 'December 24, 2025',
    title: 'DTU Team wins 1st Prize at Smart India Hackathon 2025',
    summary: 'Our student team developed an AI-based solution for traffic management, securing the top spot nationally.',
    imageUrl: '/images/dtu campus 1.png',
  },
  {
    id: 2,
    category: 'Campus',
    date: 'December 20, 2025',
    title: 'Honble LG Delhi Inaugurates New Research Complex',
    summary: 'The new complex features smart labs with capacity for 2000+ researchers.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: 3,
    category: 'Research',
    date: 'December 15, 2025',
    title: 'Patent Granted for Bio-degradable Packaging Material',
    summary: 'Department of Polymer Science receives patent for their eco-friendly packaging innovation.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
  }
];

export const STATS: StatItem[] = [
  { value: '84', label: 'Years of Legacy' },
  { value: '15K+', label: 'Total Students' },
  { value: '164', label: 'Acres Campus' },
  { value: '350+', label: 'Companies Visiting' },
];

export const EVENTS: EventItem[] = [
  { id: 1, day: '28', month: 'OCT', title: 'International Conference on Sustainable Energy', location: 'Convention Center', category: 'Conference' },
  { id: 2, day: '02', month: 'NOV', title: 'Vigilance Awareness Week 2025', location: 'Admin Block', category: 'Event' },
  { id: 3, day: '15', month: 'NOV', title: 'Alumni Meet 2025: Golden Jubilee Batch', location: 'Main Auditorium', category: 'Alumni' },
];

export const RESEARCH_DATA = [
  { name: '2021', papers: 1500, citations: 5500 },
  { name: '2022', papers: 1800, citations: 7200 },
  { name: '2023', papers: 2200, citations: 9800 },
  { name: '2024', papers: 2600, citations: 12500 },
  { name: '2025', papers: 3100, citations: 15800 },
];

export const CAMPUS_MAP_LOCATIONS: MapLocation[] = [
    {
        id: 1,
        title: "Administrative Block",
        category: "Administration",
        description: "The heart of DTU, housing the Vice Chancellor's office, administrative departments, and the main conference hall.",
        imageUrl: "https://picsum.photos/400/300?random=30",
        top: "45%",
        left: "48%",
        googleMapsUrl: "https://goo.gl/maps/placeholder"
    },
    {
        id: 2,
        title: "Central Library",
        category: "Academic",
        description: "A fully air-conditioned three-story building with a vast collection of books and digital resources.",
        imageUrl: "https://picsum.photos/400/300?random=31",
        top: "40%",
        left: "55%",
        googleMapsUrl: "https://goo.gl/maps/placeholder"
    },
    {
        id: 3,
        title: "Sports Complex",
        category: "Recreation",
        description: "Includes a football ground, 400m running track, cricket pitch, and indoor stadium.",
        imageUrl: "https://picsum.photos/400/300?random=32",
        top: "70%",
        left: "20%",
        googleMapsUrl: "https://goo.gl/maps/placeholder"
    },
    {
        id: 4,
        title: "OAT (Open Air Theatre)",
        category: "Events",
        description: "The vibrant cultural hub of the university where Engifest and other major events take place.",
        imageUrl: "https://picsum.photos/400/300?random=33",
        top: "55%",
        left: "40%",
        googleMapsUrl: "https://goo.gl/maps/placeholder"
    },
    {
        id: 5,
        title: "Hostel Blocks",
        category: "Residential",
        description: "Modern residential facilities for students with mess, common rooms, and internet access.",
        imageUrl: "https://picsum.photos/400/300?random=34",
        top: "25%",
        left: "75%",
        googleMapsUrl: "https://goo.gl/maps/placeholder"
    }
];

export const CAMPUS_ITEMS: CampusItem[] = [
    {
        id: 1,
        title: 'SR-DTU (Robotics Society)',
        category: 'Tech Team',
        description: 'Pioneering robotics research and development at DTU. Winners of multiple international competitions.',
        fullDescription: 'The Society of Robotics (SR-DTU) is one of the most active technical societies. They work on autonomous underwater vehicles (AUV), rovers, and humanoid robots. The team regularly participates in competitions like SIH, Robocon, and international challenges in the USA and Singapore.',
        imageUrl: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1887&auto=format&fit=crop',
        galleryImages: ['https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop', 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'],
        locationId: 5 
    },
    {
        id: 2,
        title: 'UAS-DTU',
        category: 'Tech Team',
        description: 'Unmanned Aerial Systems DTU designs and builds next-gen drones for surveillance and delivery.',
        fullDescription: 'UAS-DTU is a team of undergraduate students dedicated to the development of Unmanned Aerial Systems. They develop novel solutions for urban surveillance, disaster management, and payload delivery. Lockheed Martin has recognized their potential in various aerial challenges.',
        imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop',
        galleryImages: ['https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=1974&auto=format&fit=crop', 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=2070&auto=format&fit=crop'],
        locationId: 1
    },
    {
        id: 3,
        title: 'Sahitya',
        category: 'Cultural Society',
        description: 'The literary and debating society of DTU, organizing poetry slams, debates, and literature festivals.',
        fullDescription: 'Sahitya is the soul of literature at DTU. From organizing the annual literary fest "Yuvaan" to conducting regular open mic sessions, debates, and creative writing workshops, Sahitya fosters a culture of free expression and eloquence.',
        imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop',
        galleryImages: ['https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop', 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop'],
        locationId: 4
    },
    {
        id: 4,
        title: 'Engifest',
        category: 'Annual Fest',
        description: 'One of North India\'s largest cultural festivals, attracting massive footfall and celebrity performances.',
        fullDescription: 'Engifest is the annual cultural festival of DTU. It is a three-day extravaganza featuring pro-nights with Bollywood stars, EDM nights, fashion shows, and dance competitions. It draws a crowd of over 100,000 students from across the country.',
        imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
        galleryImages: ['https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop', 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1974&auto=format&fit=crop'],
        locationId: 4
    },
     {
        id: 5,
        title: 'Central Library',
        category: 'Facilities',
        description: 'A massive three-story library with access to thousands of digital journals, books, and reading rooms.',
        fullDescription: 'The Central Library is an architectural marvel and a knowledge hub. It is fully air-conditioned and automated using RFID technology. It houses over 200,000 books, thousands of e-journals, and a dedicated digital resource center.',
        imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop',
        galleryImages: ['https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop', 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2015&auto=format&fit=crop'],
        locationId: 2
    },
    {
        id: 6,
        title: 'Sports Complex',
        category: 'Facilities',
        description: 'A 450-seater indoor stadium, Olympic-sized track, and courts for tennis, basketball, and football.',
        fullDescription: 'DTU boasts world-class sports facilities including a lush green football ground, cricket pitch, synthetic tennis courts, and an indoor stadium for badminton and table tennis. The complex plays host to the annual sports meet "Aahvaan".',
        imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
        galleryImages: ['https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop', 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2058&auto=format&fit=crop'],
        locationId: 3
    }
];

export const GALLERY_IMAGES = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2566&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1607237138186-73a63db8527f?q=80&w=2070&auto=format&fit=crop',
];
