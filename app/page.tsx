"use client";

import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Heart, Quote, MapPin, Play, Star, Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Fredoka, Nunito } from "next/font/google";
import { useState } from "react";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", bounce: 0.4 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div 
      animate={{ y: [0, -30, 0], x: [0, 15, 0], rotate: [0, 15, 0] }} 
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 left-[5%] w-32 h-32 bg-amber-300/30 rounded-[3rem] rounded-tr-md blur-2xl" 
    />
    <motion.div 
      animate={{ y: [0, 40, 0], x: [0, -20, 0], rotate: [0, -20, 0] }} 
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute top-40 right-[10%] w-48 h-48 bg-teal-300/30 rounded-full blur-2xl" 
    />
    <motion.div 
      animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }} 
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-[10%] left-[20%] w-40 h-40 bg-rose-300/30 rounded-[2rem] rounded-bl-xl blur-2xl" 
    />
    <motion.div 
      animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }} 
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      className="absolute top-[60%] right-[15%] w-24 h-24 bg-yellow-300/40 rounded-full blur-xl" 
    />
  </div>
);

const WaveDivider = ({ className, fillClass }: { className?: string, fillClass: string }) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-none z-10 ${className}`}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={fillClass}></path>
    </svg>
  </div>
);

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-[#FFF9F2] text-slate-800 ${nunito.className} selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden`}>
      {/* Sticky Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9F2]/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-teal-600 cursor-pointer"
          >
            <span className={`text-2xl md:text-3xl font-bold ${fredoka.className} tracking-tight`}>Nur Ilmi</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-8 text-base font-bold ${fredoka.className} text-slate-600`}>
            <motion.a whileHover={{ y: -2, color: "#14b8a6" }} href="#about" className="transition-colors hover:text-teal-500">Tentang</motion.a>
            <motion.a whileHover={{ y: -2, color: "#14b8a6" }} href="#program" className="transition-colors hover:text-teal-500">Program</motion.a>
            <motion.a whileHover={{ y: -2, color: "#14b8a6" }} href="#video" className="transition-colors hover:text-teal-500">Video</motion.a>
            <motion.div whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
              <Button className={`bg-teal-500 hover:bg-teal-600 text-white rounded-2xl rounded-bl-sm ${fredoka.className} font-bold text-base shadow-md hover:shadow-lg transition-all px-6 py-5`} asChild>
                <a href="#kontak">Sapa Kami!</a>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-teal-600 p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-[#FFF9F2] border-b border-orange-100 shadow-xl py-4 px-6 flex flex-col gap-2 origin-top"
            >
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className={`text-lg font-bold ${fredoka.className} text-slate-600 hover:text-teal-500 py-3 border-b border-orange-100/50`}>Tentang</a>
              <a href="#program" onClick={() => setIsMobileMenuOpen(false)} className={`text-lg font-bold ${fredoka.className} text-slate-600 hover:text-teal-500 py-3 border-b border-orange-100/50`}>Program</a>
              <a href="#video" onClick={() => setIsMobileMenuOpen(false)} className={`text-lg font-bold ${fredoka.className} text-slate-600 hover:text-teal-500 py-3 border-b border-orange-100/50`}>Video</a>
              <Button className={`w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl rounded-bl-sm ${fredoka.className} font-bold text-lg shadow-md transition-all py-6`} asChild>
                <a href="#kontak" onClick={() => setIsMobileMenuOpen(false)}>Sapa Kami!</a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-visible bg-[#FFF9F2] pt-20 pb-32 lg:pt-28 lg:pb-48">
          <FloatingShapes />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <motion.div 
                className="flex-1 space-y-8 text-center md:text-left"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-5 py-2.5 rounded-full font-bold text-sm shadow-sm border border-amber-200"
                >
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  PAUD Swadaya Cimenyan
                </motion.div>
                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${fredoka.className} text-slate-800 leading-[1.15]`}>
                  Membangun Karakter <span className="text-teal-500 relative inline-block">
                    Kemandirian
                    <svg className="absolute w-[110%] h-3 -bottom-1 -left-[5%] text-amber-400" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="transparent"/></svg>
                  </span> Anak Sejak Dini
                </h1>
                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
                  {siteData.hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                    <Button size="lg" className={`w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white rounded-3xl rounded-tr-md px-8 py-7 text-xl ${fredoka.className} font-bold shadow-lg shadow-teal-200/50`} asChild>
                      <a href="#video">{siteData.hero.primaryCta}</a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className={`w-full sm:w-auto border-2 border-amber-300 bg-[#FFF9F2] text-amber-700 hover:bg-amber-100/50 hover:border-amber-400 rounded-3xl rounded-bl-md px-8 py-7 text-xl ${fredoka.className} font-bold shadow-sm`} asChild>
                      <a href="#kontak">{siteData.hero.secondaryCta}</a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex-1 w-full max-w-md mx-auto relative mt-10 md:mt-0"
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.5, delay: 0.2 }}
              >
                {/* Organic Image Container */}
                <motion.div 
                  whileHover={{ rotate: 2, scale: 1.02 }}
                  transition={{ type: "spring", bounce: 0.4 }}
                  className="aspect-[4/5] bg-teal-50 rounded-[4rem] rounded-tl-[8rem] rounded-br-[6rem] border-[12px] border-white shadow-2xl relative overflow-hidden flex items-center justify-center group"
                >
                  {/* Actual Photo */}
                  <img 
                    src="https://asset.kompas.com/crops/MN5CBfvX-inP2vrCdwDVZFi1QZ8=/0x0:999x666/750x500/data/photo/2024/04/26/662b63663d494.jpg" 
                    alt="Anak-anak belajar dan bermain" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-amber-300/10 mix-blend-multiply"></div>
                  
                  {/* Decorative Elements on Image */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-300 rounded-full blur-2xl opacity-60"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-300 rounded-full blur-2xl opacity-50"></div>
                  
                  <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, type: "spring" }}
                    className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-[2rem] rounded-bl-md shadow-xl border border-teal-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-rose-100 p-3 rounded-2xl rounded-tr-sm rotate-3">
                        <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
                      </div>
                      <div>
                        <p className={`text-lg font-bold ${fredoka.className} text-slate-800`}>Bermain & Belajar</p>
                        <p className="text-sm font-bold text-slate-500">Lingkungan penuh kasih sayang</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Section (Overlapping Hero) */}
        <section id="video" className="relative z-20 bg-teal-50/80 pb-24 pt-32 -mt-16 rounded-t-[3rem] md:rounded-t-[5rem] scroll-mt-24">
          <WaveDivider className="top-0 rotate-180 -mt-[39px] md:-mt-[79px]" fillClass="fill-teal-50/80" />
          
          <div className="container mx-auto px-4 md:px-6 max-w-5xl relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center space-y-12"
            >
              <div className="inline-block">
                <h2 className={`text-4xl md:text-5xl font-bold ${fredoka.className} text-teal-900 mb-3`}>{siteData.video.headline}</h2>
                <div className="h-2 w-24 bg-amber-400 rounded-full mx-auto"></div>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="relative aspect-video bg-amber-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(20,184,166,0.3)] border-8 md:border-[12px] border-white"
              >
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/GzUvL-Hed0U?si=qz0KjTNy5xVo5MQn" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </motion.div>

              <blockquote className="max-w-3xl mx-auto space-y-6 pt-8 relative">
                <Quote className="absolute -top-4 -left-2 md:-left-8 w-16 h-16 text-teal-200 rotate-180 -z-10" />
                <p className={`text-2xl md:text-3xl font-bold ${fredoka.className} text-slate-700 leading-snug`}>
                  "{siteData.video.quote}"
                </p>
                <footer className={`text-teal-600 font-bold ${fredoka.className} text-xl flex items-center justify-center gap-3`}>
                  <div className="w-10 h-[3px] bg-amber-400 rounded-full"></div>
                  {siteData.video.quoteAuthor}
                  <div className="w-10 h-[3px] bg-amber-400 rounded-full"></div>
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-amber-50 relative scroll-mt-24">
          <WaveDivider className="top-0 rotate-180 -mt-[39px] md:-mt-[79px]" fillClass="fill-amber-50" />
          
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white p-10 md:p-16 rounded-[3rem] rounded-tr-[5rem] rounded-bl-[4rem] shadow-xl shadow-amber-200/40 border border-amber-100 relative"
            >
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-amber-400 p-5 rounded-[2rem] rounded-br-md shadow-lg"
              >
                <Heart className="w-10 h-10 text-white fill-white" />
              </motion.div>
              <h2 className={`text-4xl md:text-5xl font-bold ${fredoka.className} text-slate-800 mb-8 mt-6`}>{siteData.about.headline}</h2>
              <p className="text-lg md:text-xl text-slate-600 font-bold leading-relaxed">
                {siteData.about.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="program" className="py-24 bg-[#FFF9F2] relative scroll-mt-24">
           <WaveDivider className="top-0 rotate-180 -mt-[39px] md:-mt-[79px]" fillClass="fill-[#FFF9F2]" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className={`text-4xl md:text-5xl font-bold ${fredoka.className} text-slate-800 mb-4`}>Program Kami</h2>
              <p className="text-xl text-slate-600 font-bold max-w-2xl mx-auto">Pendekatan holistik untuk perkembangan anak di usia emas mereka.</p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {siteData.programs.map((program, i) => {
                let Icon = Users;
                let colorClass = "bg-rose-100 text-rose-500 border-rose-200";
                let bgClass = "bg-rose-50/80 hover:bg-rose-100";
                let radiusClass = "rounded-[3rem] rounded-tr-[5rem]";
                
                if (program.id === "karakter") {
                  Icon = Heart;
                  colorClass = "bg-amber-100 text-amber-500 border-amber-200";
                  bgClass = "bg-amber-50/80 hover:bg-amber-100";
                  radiusClass = "rounded-[3rem] rounded-tl-[5rem] md:translate-y-8";
                }
                if (program.id === "literasi") {
                  Icon = BookOpen;
                  colorClass = "bg-teal-100 text-teal-600 border-teal-200";
                  bgClass = "bg-teal-50/80 hover:bg-teal-100";
                  radiusClass = "rounded-[3rem] rounded-bl-[5rem]";
                }

                return (
                  <motion.div key={program.id} variants={fadeInUp} whileHover={{ scale: 1.05, y: -10, rotate: i === 1 ? -1 : 1 }}>
                    <Card className={`h-full border border-white shadow-lg shadow-slate-200/50 transition-all duration-300 ${bgClass} ${radiusClass} overflow-hidden relative`}>
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                      <CardContent className="p-8 md:p-10 text-center space-y-6 relative z-10">
                        <div className={`mx-auto w-24 h-24 ${colorClass} border-4 rounded-[2rem] rounded-br-lg flex items-center justify-center mb-8 shadow-sm rotate-3 bg-white`}>
                          <Icon className="w-12 h-12" />
                        </div>
                        <h3 className={`text-2xl md:text-3xl font-bold ${fredoka.className} text-slate-800`}>{program.title}</h3>
                        <p className="text-slate-600 font-bold leading-relaxed">
                          {program.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-teal-100/50 relative rounded-t-[4rem] md:rounded-t-[6rem] mt-10 md:mt-20 z-20 shadow-[0_-20px_50px_-12px_rgba(20,184,166,0.15)]">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className={`text-4xl md:text-5xl font-bold ${fredoka.className} text-teal-950 mb-4`}>Kata Mereka</h2>
              <div className="h-2 w-20 bg-rose-400 rounded-full mx-auto"></div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {siteData.testimonials.map((testimonial, i) => (
                <motion.div key={testimonial.id} variants={fadeInUp} whileHover={{ scale: 1.03, rotate: i === 0 ? -1 : 1 }}>
                  <Card className={`h-full border-[6px] border-white shadow-xl shadow-teal-200/40 bg-[#FFF9F2] ${i % 2 === 0 ? 'rounded-[3rem] rounded-br-2xl' : 'rounded-[3rem] rounded-bl-2xl'}`}>
                    <CardContent className="p-8 md:p-10 relative">
                      <Quote className="absolute top-6 right-8 w-20 h-20 text-teal-100 rotate-180" />
                      <p className="text-slate-700 italic font-bold relative z-10 text-lg md:text-xl leading-relaxed mb-8">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-5">
                        <div className={`w-16 h-16 ${i === 0 ? 'bg-amber-300' : 'bg-rose-300'} rounded-2xl rounded-tr-sm flex items-center justify-center text-white font-bold ${fredoka.className} text-2xl shadow-md rotate-3`}>
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className={`font-bold ${fredoka.className} text-xl text-slate-800`}>{testimonial.name}</span>
                          <span className="text-teal-600 font-bold text-sm bg-teal-100 px-3 py-1 rounded-full w-max mt-1">{testimonial.role}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer & Contact */}
      <footer id="kontak" className="bg-teal-900 text-teal-50 pt-32 pb-10 relative scroll-mt-24">
        <WaveDivider className="top-0 rotate-180 -mt-[39px] md:-mt-[79px]" fillClass="fill-teal-900" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-amber-400 mb-6 bg-teal-800/80 p-5 rounded-3xl rounded-tl-sm inline-flex shadow-inner">
                <span className={`text-3xl font-bold ${fredoka.className} text-white`}>Nur Ilmi</span>
              </div>
              <p className="text-teal-100/90 font-bold leading-relaxed max-w-xs text-lg">
                Membangun generasi cerdas, mandiri, dan berakhlak mulia sejak usia dini.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className={`text-2xl font-bold ${fredoka.className} text-white mb-6 flex items-center gap-3`}>
                <div className="bg-amber-400 p-2 rounded-xl rounded-br-sm rotate-6">
                  <MapPin className="w-5 h-5 text-teal-900" />
                </div>
                Alamat
              </h4>
              <div className="text-teal-100/90 font-bold text-lg">
                <p>{siteData.contact.address}</p>
              </div>
              {/* Maps Embed */}
              <motion.div whileHover={{ scale: 1.02 }} className="w-full h-48 bg-teal-800/50 rounded-3xl border-4 border-white overflow-hidden shadow-lg relative group">
                <iframe 
                  src="https://maps.google.com/maps?q=Institut%20Teknologi%20Nasional%20Bandung&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, pointerEvents: 'none' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi Institut Teknologi Nasional Bandung"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
                {/* Clickable Overlay */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Institut+Teknologi+Nasional+Bandung" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 bg-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-teal-900/40 transition-all duration-300"
                  aria-label="Buka di Google Maps"
                >
                  <div className="bg-amber-400 text-teal-950 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <MapPin className="w-4 h-4" /> Buka di Maps
                  </div>
                </a>
              </motion.div>
            </div>

            <div className="space-y-6">
              <h4 className={`text-2xl font-bold ${fredoka.className} text-white mb-6`}>Sapa Kami! 👋</h4>
              <p className="text-teal-100/90 font-bold mb-6 text-lg">
                Punya pertanyaan tentang program kami? Jangan ragu untuk chat dengan kami.
              </p>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button className={`w-full bg-amber-400 hover:bg-amber-500 text-teal-950 font-bold ${fredoka.className} text-xl rounded-3xl rounded-tr-md py-8 shadow-xl shadow-amber-400/20`} asChild>
                  <a href={siteData.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                    {siteData.contact.whatsappText}
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="pt-8 border-t-2 border-teal-800/50 text-center text-teal-300/80 font-bold text-lg flex flex-col md:flex-row items-center justify-center gap-2">
            <p>&copy; {new Date().getFullYear()} Rumah Belajar Nur Ilmi.</p>
            <p className="hidden md:block">•</p>
            <p>{siteData.contact.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
