# DTU Reimagined
<img width="1433" height="747" alt="Screenshot 2025-12-01 at 2 39 56 AM" src="https://github.com/user-attachments/assets/6187eb04-19f4-49eb-8725-357c2bbac50c" />


A modern, professional website for Delhi Technological University featuring an elegant Ivy League-inspired design and AI-powered campus assistant.

![DTU Campus](public/images/dtu%20campus%20.jpg)

## 🎨 Design Philosophy

This project follows a sophisticated **Ivy League** aesthetic with strict design principles:

- **Color Palette**: Monochrome (Black/White/Gray) + DTU Red (#8C1515) accents only
- **Typography**: Source Serif 4 for headings, Inter for body text
- **Style**: Print editorial, stark minimalism, academic prestige
- **Layout**: Sharp corners, high contrast, professional spacing

## ✨ Features

- 🎓 **Comprehensive University Information**
  - About, Academics, Administration, Admissions
  - Faculty Directory with search
  - Department pages with detailed information
  - Campus life and facilities showcase

- 🤖 **AI Campus Assistant**
  - Intelligent chatbot with detailed DTU knowledge
  - Answers questions about hostels, admissions, placements
  - Professional "University Registrar" persona
  - Offline fallback mode available

- 📱 **Responsive Design**
  - Mobile-first approach
  - Optimized for all screen sizes
  - Touch-friendly navigation

- 🗺️ **Interactive Campus Map**
  - Clickable location pins
  - Building details and images
  - Real DTU campus imagery

- 🔗 **Deep Navigation**
  - Hash-based routing (#section links)
  - Smooth scroll to sections
  - Breadcrumb navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/supzammy/DTUx.git
cd DTUx

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## 🔧 Configuration

### Environment Variables (Optional)

Create a `.env.local` file for AI chat functionality:

```env
API_KEY=your_google_gemini_api_key
```

> **Note**: The AI assistant works offline without an API key using rule-based responses.

## 📁 Project Structure

```
DTUx/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation with mega menus
│   ├── Hero.tsx        # Landing section
│   ├── AboutSection.tsx
│   ├── Administration.tsx
│   ├── Admissions.tsx
│   ├── ChatWidget.tsx  # AI assistant
│   └── ...
├── services/           
│   ├── aiService.ts    # Offline AI logic
│   └── geminiService.ts # Google Gemini integration
├── public/
│   └── images/         # DTU campus photos & logos
├── constants.ts        # App data & content
├── types.ts           # TypeScript definitions
└── App.tsx            # Main application

```

## 🎯 Key Technologies

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (custom configuration)
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Charts**: Recharts
- **AI**: Google Gemini API (optional)

## 📊 Data Sources

All university data (hostels, departments, faculty, placements) is based on publicly available information from official DTU sources and has been structured for demonstration purposes.

## 🎓 University Information Included

- **9 Boys' Hostels**: Bhaskaracharya, Ramanujan, Varuna, etc.
- **3 Girls' Hostels**: Sister Nivedita, Kalpana Chawla, Type-II
- **17 Academic Departments**: CSE, ECE, ME, Civil, etc.
- **Leadership**: VC, Registrar, Deans
- **Events**: Engifest, Invictus, Yuvaan
- **Placements**: Statistics and top recruiters
- **Admissions**: B.Tech, M.Tech, MBA, B.Des pathways

## 🌐 Deployment

This project is optimized for deployment on:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages** (with router configuration)

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/supzammy/DTUx)

1. Push to GitHub
2. Import project in Vercel
3. Add `API_KEY` environment variable (optional)
4. Deploy

## 🤝 Contributing

This is a portfolio/demonstration project. Feel free to fork and customize for educational purposes.

## 📄 License

MIT License - feel free to use this project as inspiration for your own university website designs.

## 🙏 Acknowledgments

- Delhi Technological University for institutional data
- Google Fonts for typography
- Unsplash for placeholder images (where applicable)
- Lucide for icon set

## 📧 Contact

For questions or collaboration:
- GitHub: [@supzammy](https://github.com/supzammy)
- LinkedIn: [Zammy](https://www.linkedin.com/in/zammy/)

---

**Built with ❤️ as a modern redesign concept for DTU by Zaeem Ahmad Mansoori with the Hard work of 1 Week**
