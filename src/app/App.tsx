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
              GENESIS N. GREGORIO
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>genesis.nav19@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(+63) 927 8080 0496</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Nueva Ecija 3128, PH</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a 
                href="https://github.com/waveeeh" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
              <a 
                href="linkedin.com/in/genesis-gregorio/" 
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
              Tech-driven IT graduate with a background in Web Systems Technology and hands-on experience in data encoding, digital documentation, and system support. Skilled in maintaining accurate records, managing structured data, and supporting system operations to ensure efficiency and data integrity. Adaptable, detail-oriented, and proactive, with the ability to navigate administrative and technical tasks while delivering consistent, reliable results in fast-paced environments
            </p>
          </div>
        </SectionCard>

        {/* Work Experience */}
        <SectionCard title="Experience" icon="⚒️">
          <ExperienceItem
            position="IT Management Information Systems (MIS) - Data Entry Specialist "
            company="Bahay - Pamahalaan Lalawigan ng Nueva Ecija"
            date="July 2025 - Jan 2026"
            responsibilities={[
              "Maintained internal databases and records with a strong focus on data integrity, confidentiality, and accuracy for daily administrative operations.",
              "Assisted in managing MIS platforms by encoding production records and generating employee IDs, ensuring timely and error-free data processing.",
              "Processed and organized large volumes of paperwork and encoding tasks using Google Sheets, Microsoft Excel, and internal systems, consistently completing assignments ahead of deadlines.",
              "Collaborated with internal departments to streamline documentation workflows, helping improve operational efficiency and system reliability.",
              "Prepared and updated administrative records and reports to support smooth coordination between teams and office operations.",
              "Provided technical and administrative support to ensure smooth daily operations of information systems."
            ]}
          />
        </SectionCard>

        {/* Education */}
        <SectionCard title="Education" icon="📚">
          <EducationItem
            degree="Bachelor of Science in Information Technology"
            institution="Nueva Ecija University of Science and Technology"
            date="2021 - 2025"
            place="Academic Distinction"
          />
          <EducationItem
            degree="(STEM) Science, Technology, Engineering, and Mathematics"
            institution="i-Achievers Academy"
            date="2019 - 2021"
            place="With Highest Honors"
          />
        </SectionCard>

        {/* Certifications */}
        <SectionCard title="Certificates" icon="🏆">
          <CertificationItem
            name="EF Standard English Test"
            issuer="EF SET Certificate"
            date="May 2026"  
            verifyLink="https://cert.efset.org/G6W5ry" 
          />
          <CertificationItem
            name="International Research Conference on Information Technology Education"
            issuer="IRCITE - PSITE Region"
            date="2024"
          />
          <CertificationItem
            name="DICT-DLS003 Microsoft Productivity Tools"
            issuer="ILCDB - DICT LMS"
            date="October 2024"
          />
          <CertificationItem
            name="Information Technology Specialist in HTML & CSS"
            issuer="CERTIPORT"
            date="November 2024"
            verifyLink="https://verify.certiport.com" 
            credentialId="dQwE-DwVk"
          />
        </SectionCard>

        {/* Side Projects */}
        <SectionCard title="Side Projects" icon="🎮">
          <ProjectItem
            name="Valentine's Photobooth"
            description="The app captures photos using your device's camera, arranges them into a classic photo-strip layout, and then—when the strip is generated—displays 'Happy Valentine's Day' as a surprise overlay or caption. It’s a modern, digital twist on a vintage photo booth, built with love and a few lines of code."
            link="https://valentine-photobooth-z2k8-git-main-genengs-projects.vercel.app/"
            tech={["React", "Vite", "Tailwind", "JSON", "npm"]}
          />
          <ProjectItem
            name="Home Proj. Photobooth"
            description=" It’s a general‑purpose photobooth – friends can play with filters, choose layouts, and even support you via a QR donation. Fun and flexible."
            link="https://homeproj-photobooth.vercel.app/"
            tech={["React", "Vite", "Tailwind", "JSON", "npm"]}
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
