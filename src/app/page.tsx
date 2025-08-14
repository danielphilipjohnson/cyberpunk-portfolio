import CyberpunkHeroWithNav from '@/components/home/CyberpunkHeroWithNav';
import Introduction from '@/components/home/Introduction';
import ServiceGrid from '@/components/home/ServiceGrid';
import ToolGrid from '@/components/home/ToolGrid';
import Education from '@/components/home/Education';
import OnlineCourses from '@/components/home/OnlineCourses';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Navigation - Dark with grid */}
      <div className="bg-gray-900">
        <CyberpunkHeroWithNav />
      </div>
      
      {/* Introduction Section - Dark with grid */}
      <div className="bg-gray-900">
        <Introduction />
      </div>
      
      {/* Services Section - Slightly lighter, solid */}
      <div className="bg-gray-800">
        <ServiceGrid />
      </div>
      
      {/* Tools & Technologies Section - Back to dark with grid */}
      <div className="bg-gray-900">
        <ToolGrid />
      </div>
      
      {/* Education Section - Lighter, solid */}
      <div className="bg-gray-800">
        <Education />
      </div>
      
      {/* Online Courses Section - Dark with grid */}
      <div className="bg-gray-900">
        <OnlineCourses />
      </div>
      
      {/* Contact Section - Lighter, solid */}
      <div className="bg-gray-800">
        <Contact />
      </div>
      
      {/* Footer - Darkest */}
      <div className="bg-gray-950">
        <Footer />
      </div>
    </main>
  );
}
