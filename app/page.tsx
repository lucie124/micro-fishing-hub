import HeroSection from '@/components/HeroSection'
import FeaturedSection from '@/components/FeaturedSection'
import AboutSection from '@/components/AboutSection'
import StatsSection from '@/components/StatsSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Content */}
      <FeaturedSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Stats Section */}
      <StatsSection />
    </div>
  )
} 