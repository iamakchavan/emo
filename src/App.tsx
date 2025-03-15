import React from 'react';
import { ArrowRight, Car, Bike, Briefcase, Battery, Shield, MapPin, Users, Zap, Clock, Trophy, Award, TrendingUp, Truck, Cpu, Warehouse, Box, AlignRight, X, ChevronDown, Quote, Instagram, Linkedin, Mail, Phone, MapPinned } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from './components/ui/navigation-menu';
import { InteractiveGridPattern } from './components/ui/interactive-grid-pattern';
import { XLogo } from './components/ui/x-logo';
import { AnimatedSection } from './components/ui/animated-section';
import { AnimatedCounter } from './components/ui/animated-counter';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ComingSoon } from './components/ui/coming-soon';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import emoLogo from './components/ui/em.png';

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
    <Router>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 md:h-20 items-center">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <img src={emoLogo} alt="EMO Logo" className="h-10 md:h-14 w-auto object-contain my-2 md:my-3" />
              </div>
              <div className="hidden md:flex space-x-1">
                <Link to="/" className="group relative px-4 py-2 text-gray-600 font-magnetik transition-all duration-300 hover:text-green-600 hover:scale-105">
                  <span>Home</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-green-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="font-magnetik hover:scale-105 transition-transform duration-300">Services</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 [&>li]:animate-in [&>li]:fade-in-0 [&>li]:zoom-in-95 [&>li]:duration-200">
                          <li className="flex items-center gap-6 p-2 hover:bg-green-50 rounded-md cursor-pointer transition-colors group">
                            <Truck className="w-5 h-5 text-green-600" />
                            <div>
                              <div className="font-medium font-magnetik transition-colors group-hover:text-green-600">Land Transport</div>
                              <p className="text-sm text-gray-500 transition-colors group-hover:text-green-500 font-magnetik">Eco-friendly last-mile delivery solutions</p>
                            </div>
                          </li>
                          <li style={{ animationDelay: '75ms' }} className="flex items-center gap-6 p-2 hover:bg-green-50 rounded-md cursor-pointer transition-colors group">
                            <Cpu className="w-5 h-5 text-green-600" />
                            <div>
                              <div className="font-medium font-magnetik transition-colors group-hover:text-green-600">Systems & Technologies</div>
                              <p className="text-sm text-gray-500 transition-colors group-hover:text-green-500 font-magnetik">Advanced fleet management systems</p>
                            </div>
                          </li>
                          <li style={{ animationDelay: '150ms' }} className="flex items-center gap-6 p-2 hover:bg-green-50 rounded-md cursor-pointer transition-colors group">
                            <Warehouse className="w-5 h-5 text-green-600" />
                            <div>
                              <div className="font-medium font-magnetik transition-colors group-hover:text-green-600">Smart Warehouse</div>
                              <p className="text-sm text-gray-500 transition-colors group-hover:text-green-500 font-magnetik">Automated storage and handling solutions</p>
                            </div>
                          </li>
                          <li style={{ animationDelay: '225ms' }} className="flex items-center gap-6 p-2 hover:bg-green-50 rounded-md cursor-pointer transition-colors group">
                            <Box className="w-5 h-5 text-green-600" />
                            <div>
                              <div className="font-medium font-magnetik transition-colors group-hover:text-green-600">Drayage</div>
                              <p className="text-sm text-gray-500 transition-colors group-hover:text-green-500 font-magnetik">Container and port logistics services</p>
                            </div>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <Link to="/industry" className="group relative px-4 py-2 text-gray-600 font-magnetik transition-all duration-300 hover:text-green-600 hover:scale-105">
                  <span>Industry</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-green-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
                <Link to="/blog" className="group relative px-4 py-2 text-gray-600 font-magnetik transition-all duration-300 hover:text-green-600 hover:scale-105">
                  <span>Blog</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-green-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
                <Link to="/about" className="group relative px-4 py-2 text-gray-600 font-magnetik transition-all duration-300 hover:text-green-600 hover:scale-105">
                  <span>About</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-green-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
                <Link to="/contact" className="group relative px-4 py-2 text-gray-600 font-magnetik transition-all duration-300 hover:text-green-600 hover:scale-105">
                  <span>Contact</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-green-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
                <Link to="/career" className="group relative px-4 py-2 text-gray-600 font-magnetik transition-all duration-300 hover:text-green-600 hover:scale-105">
                  <span>Career</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-green-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                className="md:hidden p-2 hover:bg-green-50 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <AlignRight className="w-5 h-5 text-gray-600" />
              </button>
              <button className="hidden md:inline-flex px-5 py-2.5 bg-green-600 text-white font-magnetik rounded-full hover:bg-green-700 transition-all hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 items-center group">
                Book Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 md:hidden z-[100] ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-500" 
             style={{ opacity: isMobileMenuOpen ? 1 : 0 }}
             onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={`absolute right-0 top-0 h-full w-[300px] bg-white/95 backdrop-blur-sm shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] z-[101] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center">
              <img src={emoLogo} alt="EMO Logo" className="h-9 w-auto object-contain my-1" />
            </div>
            <button 
              className="p-2 hover:bg-black/5 rounded-full transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="overflow-y-auto h-[calc(100%-5rem)]">
            <div className="p-6 space-y-1">
              <div className="space-y-1">
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between py-4 text-gray-600 font-magnetik hover:text-green-600 transition-all duration-300 group"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''} group-hover:text-green-600`} />
                </button>
                <div className={`space-y-1 pl-4 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${servicesOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex items-center gap-3 py-3 text-gray-500 font-magnetik hover:text-green-600 transition-all duration-300 group">
                    <Truck className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">Land Transport</div>
                      <p className="text-sm text-gray-400">Eco-friendly last-mile delivery solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2 text-gray-500 font-magnetik hover:text-green-600 transition-colors">
                    <Cpu className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">Systems & Technologies</div>
                      <p className="text-sm text-gray-400">Advanced fleet management systems</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2 text-gray-500 font-magnetik hover:text-green-600 transition-colors">
                    <Warehouse className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">Smart Warehouse</div>
                      <p className="text-sm text-gray-400">Automated storage and handling solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2 text-gray-500 font-magnetik hover:text-green-600 transition-colors">
                    <Box className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">Drayage</div>
                      <p className="text-sm text-gray-400">Container and port logistics services</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/industry" className="block py-4 text-gray-600 font-magnetik hover:text-green-600 transition-all duration-300">Industry</Link>
              <Link to="/blog" className="block py-4 text-gray-600 font-magnetik hover:text-green-600 transition-all duration-300">Blog</Link>
              <Link to="/about" className="block py-4 text-gray-600 font-magnetik hover:text-green-600 transition-all duration-300">About</Link>
              <Link to="/contact" className="block py-4 text-gray-600 font-magnetik hover:text-green-600 transition-all duration-300">Contact</Link>
              <Link to="/career" className="block py-4 text-gray-600 font-magnetik hover:text-green-600 transition-all duration-300">Career</Link>
              <div className="pt-8 mt-8 border-t border-gray-100">
                <button className="w-full px-6 py-3 bg-green-600 text-white font-magnetik rounded-full hover:bg-green-700 transition-colors flex items-center justify-center group">
                  Book Now
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={
      <main>
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center bg-[#1a2942]">
          <div className="absolute inset-0">
            <InteractiveGridPattern
              className="[mask-image:radial-gradient(70%_70%_at_center,white,transparent)] absolute inset-0 w-full h-full min-h-screen"
              squares={[48, 24]}
              squaresClassName="stroke-green-500/30 [&:hover]:fill-green-400/20"
            />
            <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(100%_100%_at_50%_0%,rgba(255,255,255,0.15)_0%,rgba(34,197,94,0.1)_50%,transparent_100%)]"></div>
          </div>

          <div className="relative w-full">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-12"
            >
              <motion.h1 
                variants={fadeInUpVariant}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white font-magnetik leading-[1.2] sm:leading-[1.1] tracking-tight"
              >
                Drive Into the Future with EMO Logistics
              </motion.h1>
              <motion.p 
                variants={fadeInUpVariant}
                className="text-lg sm:text-xl text-gray-200 font-magnetik max-w-2xl mx-auto leading-relaxed"
              >
                Experience sustainable transportation with our fleet of electric vehicles. Zero emissions, maximum convenience.
              </motion.p>
              <motion.button 
                variants={fadeInUpVariant}
                className="group px-8 py-4 bg-green-500 text-white rounded-full text-lg font-magnetik hover:bg-green-400 transition-all hover:shadow-xl hover:shadow-green-500/25 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Vehicle Types Section */}
        <div id="vehicles" className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4 font-magnetik">Our Fleet</h2>
              <p className="text-xl text-gray-600 font-magnetik">Choose your perfect electric ride</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-12">
              <AnimatedSection className="text-center" delay={0.2}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-magnetik">Electric Cars</h3>
                <p className="text-gray-600 font-magnetik">Premium electric vehicles for comfortable city travel</p>
              </AnimatedSection>
              <AnimatedSection className="text-center" delay={0.4}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bike className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-magnetik">E-Bikes</h3>
                <p className="text-gray-600 font-magnetik">Smart electric bikes for quick urban commutes</p>
              </AnimatedSection>
              <AnimatedSection className="text-center" delay={0.6}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-magnetik">E-Scooters</h3>
                <p className="text-gray-600 font-magnetik">Agile electric scooters for last-mile connectivity</p>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#1a2942] py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(34,197,94,0.03))]"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4 font-magnetik tracking-tight">Our Impact</h2>
              <p className="text-xl text-gray-300 font-magnetik">Making a difference in sustainable mobility</p>
            </AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <AnimatedSection className="text-center" delay={0.2}>
                <div className="text-4xl sm:text-5xl font-bold text-white font-magnetik mb-2">
                  <AnimatedCounter value={50} suffix="K+" />
                </div>
                <p className="text-gray-400 font-magnetik text-sm">Active Users</p>
              </AnimatedSection>
              <AnimatedSection className="text-center" delay={0.3}>
                <div className="text-4xl sm:text-5xl font-bold text-white font-magnetik mb-2">
                  <AnimatedCounter value={3.2} suffix="M" />
                </div>
                <p className="text-gray-400 font-magnetik text-sm">Km Traveled</p>
              </AnimatedSection>
              <AnimatedSection className="text-center" delay={0.4}>
                <div className="text-4xl sm:text-5xl font-bold text-white font-magnetik mb-2">
                  <AnimatedCounter value={840} suffix="T" />
                </div>
                <p className="text-gray-400 font-magnetik text-sm">CO₂ Saved</p>
              </AnimatedSection>
              <AnimatedSection className="text-center" delay={0.5}>
                <div className="text-4xl sm:text-5xl font-bold text-white font-magnetik mb-2">
                  <AnimatedCounter value={98} suffix="%" />
                </div>
                <p className="text-gray-400 font-magnetik text-sm">User Satisfaction</p>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4 font-magnetik">Backed by the Best</h2>
              <p className="text-xl text-gray-600 font-magnetik">Recognition and support from industry leaders</p>
            </AnimatedSection>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <AnimatedSection className="bg-gray-50 p-8 rounded-3xl" delay={0.2}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 font-magnetik flex items-center">
                  <Trophy className="w-8 h-8 text-green-600 mr-3" />
                  Awards & Recognition
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-green-600 mr-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 font-magnetik">Mobility Startup of the Year 2024</h4>
                      <p className="text-gray-600 font-magnetik">TechCrunch Disrupt</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-green-600 mr-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 font-magnetik">Best Green Tech Innovation</h4>
                      <p className="text-gray-600 font-magnetik">European Startup Awards</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-green-600 mr-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 font-magnetik">Climate Action Tech Pioneer</h4>
                      <p className="text-gray-600 font-magnetik">World Economic Forum</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection className="bg-gray-50 p-8 rounded-3xl" delay={0.4}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-magnetik flex items-center">
                  <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                  Backed By
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl text-center">
                    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80" alt="Green Tech Fund" className="w-full h-12 object-contain mb-4" />
                    <p className="font-bold text-gray-900 font-magnetik">Green Tech Fund</p>
                    <p className="text-sm text-gray-600 font-magnetik">Lead Investor</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl text-center">
                    <img src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&q=80" alt="Future Mobility" className="w-full h-12 object-contain mb-4" />
                    <p className="font-bold text-gray-900 font-magnetik">Future Mobility</p>
                    <p className="text-sm text-gray-600 font-magnetik">Strategic Partner</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl text-center">
                    <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80" alt="Eco Ventures" className="w-full h-12 object-contain mb-4" />
                    <p className="font-bold text-gray-900 font-magnetik">Eco Ventures</p>
                    <p className="text-sm text-gray-600 font-magnetik">Series A Lead</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl text-center">
                    <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80" alt="Tech Stars" className="w-full h-12 object-contain mb-4" />
                    <p className="font-bold text-gray-900 font-magnetik">Tech Stars</p>
                    <p className="text-sm text-gray-600 font-magnetik">Accelerator</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <AnimatedSection className="text-center" delay={0.6}>
              <div className="inline-flex items-center space-x-2 text-green-600 font-magnetik hover:text-green-700 transition-colors cursor-pointer">
                <span>Learn more about our journey</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Benefits Section */}
        <div id="about" className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4 font-magnetik">Why Choose EMO</h2>
              <p className="text-xl text-gray-600 font-magnetik">Leading the charge in sustainable transportation</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <Battery className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 font-magnetik">100% Electric</h3>
                <p className="text-gray-600 font-magnetik">Zero emissions, pure electric power for a cleaner future</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <Shield className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 font-magnetik">Safe & Secure</h3>
                <p className="text-gray-600 font-magnetik">Advanced safety features and regular maintenance</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <Clock className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 font-magnetik">24/7 Available</h3>
                <p className="text-gray-600 font-magnetik">Round-the-clock access to our mobility solutions</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <Users className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 font-magnetik">Community</h3>
                <p className="text-gray-600 font-magnetik">Join a growing community of eco-conscious riders</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-[#1a2942] py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(34,197,94,0.03))]" />
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(100%_100%_at_50%_0%,rgba(255,255,255,0.12)_0%,rgba(34,197,94,0.08)_50%,transparent_100%)]"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-white mb-4 font-magnetik tracking-tight">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 font-magnetik">Real experiences from our community</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <Quote className="w-8 h-8 text-green-400 mb-6" />
                <p className="text-gray-300 font-magnetik mb-8 leading-relaxed">
                  "EMO Logistics has revolutionized our supply chain. Their electric delivery fleet ensures our products reach customers sustainably and on time. The real-time tracking system gives us complete visibility."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?auto=format&fit=crop&q=80&w=100&h=100"
                    alt="Priya M."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="text-white font-magnetik">Priya M.</p>
                    <p className="text-gray-400 text-sm font-magnetik">E-commerce Manager</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <Quote className="w-8 h-8 text-green-400 mb-6" />
                <p className="text-gray-300 font-magnetik mb-8 leading-relaxed">
                  "Partnering with EMO Logistics was a game-changer for our warehouse operations. Their smart logistics solutions and eco-friendly vehicles have cut our delivery times by 40% while reducing our carbon footprint."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1506634064465-7dab4de896ed?auto=format&fit=crop&q=80&w=100&h=100"
                    alt="Rajesh K."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="text-white font-magnetik">Rajesh K.</p>
                    <p className="text-gray-400 text-sm font-magnetik">Operations Director</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20, rotateY: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <Quote className="w-8 h-8 text-green-400 mb-6" />
                <p className="text-gray-300 font-magnetik mb-8 leading-relaxed">
                  "EMO's last-mile delivery service has transformed how we handle urban deliveries. Their electric fleet navigates city traffic efficiently, and their customer support is outstanding. A reliable partner for our logistics needs."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100&h=100"
                    alt="Anjali S."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="text-white font-magnetik">Anjali S.</p>
                    <p className="text-gray-400 text-sm font-magnetik">Logistics Manager</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Locations Section */}
        <div id="locations" className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4 font-magnetik">Available Cities</h2>
              <p className="text-xl text-gray-600 font-magnetik">Find EMO in these locations</p>
              <p className="text-lg text-green-600 font-magnetik mt-2">Coming to more cities soon</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80" alt="Bangalore" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <p className="text-2xl text-white font-magnetik">Bangalore</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" alt="EMO Electric Vehicle HQ" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <p className="text-2xl text-white font-magnetik">Vijayapura</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80" alt="Mumbai" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <p className="text-2xl text-white font-magnetik">Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#1a2942] relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <InteractiveGridPattern
              className="[mask-image:radial-gradient(70%_70%_at_center,white,transparent)] absolute inset-0 w-full h-full min-h-[100%] opacity-40"
              squares={[32, 16]}
              squaresClassName="stroke-green-500/20 [&:hover]:fill-green-400/10"
            />
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(100%_100%_at_50%_0%,rgba(255,255,255,0.12)_0%,rgba(34,197,94,0.08)_50%,transparent_100%)]"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-magnetik tracking-tight">Ready to Go Electric?</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-magnetik">
              Join thousands of satisfied customers who have made the switch to sustainable mobility with EMO.
            </p>
            <button className="group px-8 py-4 bg-green-500 text-white rounded-full text-lg font-magnetik hover:bg-green-400 transition-all hover:shadow-xl hover:shadow-green-500/25 inline-flex items-center">
              Download EMO App
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#1a2942] text-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-gray-700/50">
              {/* Company Info */}
              <div>
                <div className="flex items-center mb-8">
                  <img src={emoLogo} alt="EMO Logo" className="h-24 w-auto object-contain py-2" />
                </div>
                <p className="text-gray-400 font-magnetik mb-8 leading-relaxed">
                  Revolutionizing urban mobility with sustainable electric transportation solutions.
                </p>
                <div className="flex items-center space-x-4">
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-green-500 text-gray-400 hover:text-white transition-all duration-300 border border-gray-700/50 hover:border-green-500">
                    <XLogo className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-green-500 text-gray-400 hover:text-white transition-all duration-300 border border-gray-700/50 hover:border-green-500">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-green-500 text-gray-400 hover:text-white transition-all duration-300 border border-gray-700/50 hover:border-green-500">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-bold text-white font-magnetik uppercase tracking-wider mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li><a href="#about" className="text-gray-400 font-magnetik hover:text-green-400 transition-colors duration-300">About Us</a></li>
                  <li><a href="#vehicles" className="text-gray-400 font-magnetik hover:text-green-400 transition-colors duration-300">Our Fleet</a></li>
                  <li><a href="#locations" className="text-gray-400 font-magnetik hover:text-green-400 transition-colors duration-300">Locations</a></li>
                  <li><a href="#blog" className="text-gray-400 font-magnetik hover:text-green-400 transition-colors duration-300">Blog</a></li>
                  <li><a href="#career" className="text-gray-400 font-magnetik hover:text-green-400 transition-colors duration-300">Careers</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-sm font-bold text-white font-magnetik uppercase tracking-wider mb-6">Support</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 font-magnetik hover:text-green-400 transition-colors duration-300">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 font-magnetik hover:text-green-400 transition-colors duration-300">Safety Guidelines</a></li>
                  <li><a href="#" className="text-gray-400 font-magnetik hover:text-green-400 transition-colors duration-300">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 font-magnetik hover:text-green-400 transition-colors duration-300">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 font-magnetik hover:text-green-400 transition-colors duration-300">Contact Support</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-bold text-white font-magnetik uppercase tracking-wider mb-6">Contact Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-400 font-magnetik group">
                    <MapPinned className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-1 group-hover:text-green-300 transition-colors duration-300" />
                    <span>
                      HQ: 123 Station Road, Dhanayak Nagar, Vijayapura 586101, Karnataka, India
                    </span>
                  </li>
                  <li className="flex items-center text-gray-400 font-magnetik group">
                    <Phone className="w-5 h-5 mr-3 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                    <span>+91 90085 00690</span>
                  </li>
                  <li className="flex items-center text-gray-400 font-magnetik group">
                    <Mail className="w-5 h-5 mr-3 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                    <span>support@emologistics.in</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="text-center md:text-left text-gray-500 font-magnetik text-sm flex items-center justify-center md:justify-start">
                  <span>© {new Date().getFullYear()}</span>
                  <img src={emoLogo} alt="EMO Logo" className="h-7 w-auto object-contain mx-2" />
                  <span>All rights reserved.</span>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-8">
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm font-magnetik">Terms</a>
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm font-magnetik">Privacy</a>
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm font-magnetik">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
          </main>
        } />
        <Route path="/industry" element={<ComingSoon title="Industry" description="Revolutionizing the future of logistics with sustainable solutions" />} />
        <Route path="/blog" element={<ComingSoon title="EMO Blog" description="Stories and insights from the future of mobility" />} />
        <Route path="/about" element={<ComingSoon title="About EMO" description="Building a greener tomorrow, one ride at a time" />} />
        <Route path="/contact" element={<ComingSoon title="Get in Touch" description="We'd love to hear from you" />} />
        <Route path="/career" element={<ComingSoon title="Join Our Team" description="Help us shape the future of sustainable logistics" />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;