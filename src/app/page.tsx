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
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section with Navigation */}
      <CyberpunkHeroWithNav />
      
      {/* Introduction Section */}
      <Introduction />
      
      {/* Services Section */}
      <ServiceGrid />
      
      {/* Tools & Technologies Section */}
      <ToolGrid />
      
      {/* Education Section */}
      <Education />
      
      {/* Online Courses Section */}
      <OnlineCourses />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
