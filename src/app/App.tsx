import { SectionCard } from './components/SectionCard';
import { ExperienceItem } from './components/ExperienceItem';
import { EducationItem } from './components/EducationItem';
import { CertificationItem } from './components/CertificationItem';
import { ProjectItem } from './components/ProjectItem';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

export default function App() {
  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-[#88c070] via-[#76b060] to-[#6ba368] py-8 px-4"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(139, 69, 19, 0.05) 20px, rgba(139, 69, 19, 0.05) 21px),
          repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(139, 69, 19, 0.05) 20px, rgba(139, 69, 19, 0.05) 21px)
        `
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header / Personal Info */}
        <div className="mb-8">
          <div 
            className="bg-gradient-to-r from-[#4a2c2a] to-[#6b4423] p-6 rounded-lg border-4 border-[#8B4513] shadow-lg"
            style={{
              boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.2)'
            }}
          >
            <h1 
              className="text-white text-center mb-4"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '24px', lineHeight: '1.6' }}
            >
              YOUR NAME
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Your City, Country</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* About Me / Summary */}
        <SectionCard title="About" icon="🌻">
          <div className="bg-white/50 p-4 rounded border-2 border-[#8B4513]/30">
            <p className="text-[#4a2c2a]">
              Passionate developer with expertise in building scalable web applications. 
              I love creating intuitive user experiences and solving complex problems. 
              When I'm not coding, you can find me farming in Stardew Valley!
            </p>
          </div>
        </SectionCard>

        {/* Work Experience */}
        <SectionCard title="Experience" icon="⚒️">
          <ExperienceItem
            position="Senior Full Stack Developer"
            company="Tech Company Inc."
            date="2022 - Present"
            responsibilities={[
              "Lead development of customer-facing web applications",
              "Architect and implement RESTful APIs using Node.js",
              "Mentor junior developers and conduct code reviews",
              "Reduced page load times by 40% through optimization"
            ]}
          />
          <ExperienceItem
            position="Frontend Developer"
            company="Digital Agency Co."
            date="2020 - 2022"
            responsibilities={[
              "Built responsive websites using React and TypeScript",
              "Collaborated with design team to implement pixel-perfect UIs",
              "Improved accessibility compliance to WCAG 2.1 standards"
            ]}
          />
          <ExperienceItem
            position="Junior Developer"
            company="Startup Studio"
            date="2018 - 2020"
            responsibilities={[
              "Developed features for mobile-first web applications",
              "Maintained and updated legacy codebases",
              "Participated in agile development processes"
            ]}
          />
        </SectionCard>

        {/* Education */}
        <SectionCard title="Education" icon="📚">
          <EducationItem
            degree="Bachelor of Science in Computer Science"
            institution="University Name"
            date="2014 - 2018"
          />
          <EducationItem
            degree="Associate Degree in Web Development"
            institution="Community College"
            date="2012 - 2014"
          />
        </SectionCard>

        {/* Certifications */}
        <SectionCard title="Certificates" icon="🏆">
          <CertificationItem
            name="AWS Certified Solutions Architect"
            issuer="Amazon Web Services"
            date="2023"
          />
          <CertificationItem
            name="Google Cloud Professional Developer"
            issuer="Google Cloud"
            date="2022"
          />
          <CertificationItem
            name="React Advanced Certification"
            issuer="Meta"
            date="2021"
          />
        </SectionCard>

        {/* Side Projects */}
        <SectionCard title="Side Projects" icon="🎮">
          <ProjectItem
            name="Task Manager Pro"
            description="A full-stack task management application with real-time collaboration features"
            link="https://task-manager.vercel.app"
            tech={["React", "Node.js", "MongoDB", "Socket.io"]}
          />
          <ProjectItem
            name="Weather Dashboard"
            description="Beautiful weather visualization dashboard with 7-day forecasts"
            link="https://weather-dash.vercel.app"
            tech={["Next.js", "TypeScript", "Tailwind", "API"]}
          />
          <ProjectItem
            name="Portfolio Generator"
            description="Open-source tool to generate customizable developer portfolios"
            link="https://portfolio-gen.vercel.app"
            tech={["React", "Vite", "CSS"]}
          />
        </SectionCard>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p 
            className="text-[#4a2c2a] text-xs"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            Made with 💚 inspired by Stardew Valley
          </p>
        </div>
      </div>
    </div>
  );
}
