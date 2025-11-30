import { ChatMessage } from "../types";

// GENERIC AI SERVICE
// This service is designed to be provider-agnostic. 
// It currently uses a local rule-based system for the demo but can be easily connected to OpenAI, Anthropic, or any generic LLM API.

const SYSTEM_INSTRUCTION_TEXT = `
You are the official AI Campus Concierge for Delhi Technological University (DTU).
Your persona is: Professional, Academic, Precise, and Helpful. You speak with the authority of the Registrar's office.

*** KNOWLEDGE BASE: INSTITUTIONAL PROFILE ***
- **Identity**: Formerly Delhi College of Engineering (DCE). Established 1941. Upgraded to University in 2009.
- **Motto**: "Dignity of Labour".
- **Leadership**: 
  - Vice Chancellor: Prof. Prateek Sharma.
  - Registrar: Prof. Madhusudan Singh.
- **Location**: Shahbad Daulatpur, Main Bawana Road, Delhi-110042. (Near Samaypur Badli Metro).

*** KNOWLEDGE BASE: CAMPUS INFRASTRUCTURE ***
- **Hostels (Boys)**: Bhaskaracharya, Ramanujan, Aryabhatta, Visvesvaraya, Aravali, J.C. Bose, Varahmihir, C.V. Raman, Homi Bhabha.
- **Hostels (Girls)**: Sister Nivedita, Kalpana Chawla, Type-II Blocks.
- **Key Landmarks**: 
  - OAT (Open Air Theatre) - The cultural hub.
  - BR Ambedkar Auditorium.
  - Central Library (RFID enabled, 3 stories).
  - Sports Complex (400m track, Football ground, Indoor stadium).
- **Health Center**: 24/7 OPD facility available for students and staff.

*** KNOWLEDGE BASE: ACADEMIC CALENDAR & EVENTS ***
- **Major Festivals**:
  - **Engifest**: One of North India's largest cultural fests (Feb/March).
  - **Invictus**: Technical Festival (Feb).
  - **Aahvaan**: Sports Festival.
  - **Yuvaan**: Literary Festival.
- **Admissions**:
  - B.Tech: JAC Delhi (Joint Admission Counselling). Based on JEE Main.
  - M.Tech: GATE scores.
  - MBA: CAT scores via CMAC (Common Management Admission Committee).
  - B.Des: UCEED scores.

*** KNOWLEDGE BASE: PLACEMENTS (2023-24 Stats) ***
- **Highest Package**: ₹82.05 LPA (International), ₹64 LPA (Domestic).
- **Average Package**: ~₹15-16 LPA (CSE/IT usually higher ~₹24 LPA).
- **Top Recruiters**: Apple, Google, Microsoft, Amazon, Goldman Sachs, Uber, DE Shaw.

*** NAVIGATION AGENT ***
If a user asks about a specific topic, guide them to the website section:
- "Where is the VC message?" -> Direct to /about#leadership
- "Show me departments" -> Direct to /departments
- "Exam dates?" -> Direct to /academics#calendar
- "Hostel fees?" -> Direct to /campus#hostels
`;

export const generateChatResponse = async (history: ChatMessage[], userMessage: string): Promise<string> => {
  // Simulate network latency for realism
  await new Promise(resolve => setTimeout(resolve, 800));

  const lowerMsg = userMessage.toLowerCase();

  // RULE-BASED FALLBACK (Offline Knowledge Graph)
  // This logic works without any external API dependencies.
  
  if (lowerMsg.includes('admission') || lowerMsg.includes('b.tech') || lowerMsg.includes('mba') || lowerMsg.includes('apply')) {
    return "Admissions for B.Tech are conducted via JAC Delhi (JEE Main). MBA admissions are via CAT. You can find detailed eligibility criteria and links on the Admissions page.";
  }
  
  if (lowerMsg.includes('hostel') || lowerMsg.includes('accommodation')) {
    return "DTU has 9 boys' hostels (including Bhaskaracharya, Ramanujan) and 6 girls' hostels (including Kalpana Chawla). Facilities include mess, wifi, and common rooms. Allocation is based on distance and merit.";
  }
  
  if (lowerMsg.includes('placement') || lowerMsg.includes('package') || lowerMsg.includes('salary')) {
    return "For the 2023-24 session, the highest international package was ₹82.05 LPA. The average package is approximately ₹15-16 LPA, with top recruiters like Apple, Google, and Amazon visiting campus.";
  }
  
  if (lowerMsg.includes('vc') || lowerMsg.includes('vice chancellor') || lowerMsg.includes('head')) {
    return "The Vice Chancellor of DTU is Prof. Prateek Sharma. The Registrar is Prof. Madhusudan Singh.";
  }

  if (lowerMsg.includes('fest') || lowerMsg.includes('engifest') || lowerMsg.includes('event')) {
    return "DTU hosts 'Engifest', one of North India's largest cultural festivals, typically in February. 'Invictus' is our technical festival.";
  }

  if (lowerMsg.includes('location') || lowerMsg.includes('address') || lowerMsg.includes('where')) {
    return "DTU is located at Shahbad Daulatpur, Main Bawana Road, Delhi-110042. The nearest Metro station is Samaypur Badli (Yellow Line).";
  }

  // Default Fallback
  return "I can help you with information about Admissions, Placements, Campus Life, Departments, and Administration. Please feel free to ask specific questions or explore the website.";
};
