import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, PenLine, Paintbrush2, Gamepad2, Coffee, Monitor, Laptop, Menu, X } from "lucide-react";

export default function App() {
  const [activePage, setActivePage] = useState('landing');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine if we're on mobile based on window width
  const isMobile = windowWidth < 768;

  const portfolioData = {
    name: "Bernalyn M. Benedicto",
    shortBio: "A Third Year BSIT Student, Student Developer & Full Stack Enthusiast",
    fullBio: "I'm a passionate third-year IT student developer studying at the University of Abra. I enjoy coding even if it drives me a little crazy sometimes! I love turning my ideas into reality, and I have experience working with web applications using React, Tailwind CSS, modern JavaScript, and more. I also enjoy exploring the world of web development and I'm always eager to learn new things to keep improving my skills.",
    email: "benedictobernalyn52@gmail.com",
    phone: "+63 970 833 5852",
    location: "Subagan, Licuan-Baay, Abra",
    facebook: "https://web.facebook.com/bernalinnnn",
    projects: [
      {
        title: "To-do-list Web App",
        description: "This is a simple and responsive task management app built with React and Tailwind CSS. Users can add, update, delete, and move tasks between Ongoing and Completed sections. The interface features a soft purple gradient and modern UI styling with smooth interactions.",
        link: "https://to-do-client1-t2k0.onrender.com"
      }
    ],
    activities: [
      {
        title: "Calculator",
        description: "This is a calculator application developed with vanilla JavaScript, offering a responsive design and functionality for standard arithmetic operations.",
        link: "Activities/Calculator/index.html"
      },
      {
        title: "Loop",
        description: "This is a simple web application that allows users to input a number and instantly view its calculated sum, factorial, and the separated lists of odd and even numbers within its range, built with JavaScript loops.",
        link: "Activities/LOOP/index.html"
      },
      {
        title: "Employee Management System",
        description: "This activity showcases an employee management system built with JavaScript. Leveraging arrays and objects, it enables users to add new employees and view their details in a dynamic table.",
        link: "Activities/ARRAY_OBJECTS/index.html"
      }
    ],
    achievements: [
      {
        title: "Certificate of Participation",
        caption: "Finished an Online Course about Introduction to Modern AI",
        image: "/Achievements/ai.png"
      },
      {
        title: "Certificate of Participation",
        caption: "Finished an Online Course about JavaScript Essential 1",
        image: "/Achievements/js.png"
      },
      {
        title: "Certificate of Participation",
        caption: "Finished an Online Course about Introduction to Data Science",
        image: "/Achievements/ds.png"
      },
      {
        title: "Certificate of Participation",
        caption: "Participated in a Webinar about Data Analytics for Smarter Decision-Making",
        image: "/Achievements/dict.png"
      }
    ],
    socials: [
      { platform: "GitHub", url: "https://github.com/bernalinnnnnnnnn", username: "bernalinnnnnnnnn", icon: "fab fa-github" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/bernalyn-benedicto-1b35a2347/", username: "Bernalyn Benedicto", icon: "fab fa-linkedin" },
      { platform: "Instagram", url: "https://instagram.com/bernalinnnn", username: "bernalinnnn", icon: "fab fa-instagram" },
      { platform: "Facebook", url: "https://web.facebook.com/bernalinnnn", username: "Bernalyn Benedicto", icon: "fab fa-facebook" },
      { platform: "Email", url: "mailto:benedictobernalyn52@gmail.com", username: "benedictobernalyn52@gmail.com", icon: "fas fa-envelope" },
      { platform: "Phone", url: "tel:+639708335852", username: "+63 970 833 5852", icon: "fas fa-phone" },
      { platform: "Location", url: "https://maps.google.com/?q=Subagan Licuan Baay", username: "Subagan, Licuan-Baay, Abra", icon: "fas fa-map-marker-alt" }
    ]
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  // Cloud-shaped button component
  const CloudButton = ({ onClick, children, isActive }) => (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 mb-3 w-full transition duration-300 overflow-hidden group ${isActive ? 'text-white' : 'text-purple-800 hover:text-white'}`}
    >
      <span className={`absolute inset-0 w-full h-full transition duration-300 ease-out 
        ${isActive
          ? 'bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800'
          : 'bg-purple-100 group-hover:bg-gradient-to-br group-hover:from-purple-400 group-hover:via-purple-600 group-hover:to-purple-800'
        }`}
        style={{
          borderRadius: '60% 40% 50% 50% / 60% 40% 60% 40%',
          boxShadow: isActive ? '0 10px 15px -3px rgba(139, 92, 246, 0.3)' : 'none'
        }}
      ></span>
      <span className="relative font-medium">{children}</span>
    </button>
  );

  // Get To Know Me More Button - Cloud-shaped with gradient
  const GetToKnowMeButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className="relative px-8 py-4 mt-6 mb-3 transition duration-300 overflow-hidden group text-purple-800 hover:text-white"
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out 
        bg-purple-100 group-hover:bg-gradient-to-br group-hover:from-purple-400 group-hover:via-purple-600 group-hover:to-purple-800"
        style={{
          borderRadius: '60% 40% 50% 50% / 60% 40% 60% 40%',
        }}
      ></span>
      <span className="relative font-medium">Get To Know Me More</span>
    </button>
  );

  const Landing = () => (
    <motion.div {...fadeInUp} className="fixed inset-0 w-full h-full"
      style={{
        background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #ddd6fe 100%)',
        boxShadow: 'inset 0 0 100px rgba(139, 92, 246, 0.2)'
      }}>
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border-4 border-purple-400"
          style={{
            boxShadow: '0 0 30px rgba(167, 139, 250, 0.5)'
          }}>
          <img src="/images/berna2.jpg" alt={portfolioData.name} className="w-full h-full object-cover" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2"
          style={{
            background: 'linear-gradient(to right, #9333ea, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
          {portfolioData.name}
        </h1>
        <p className="text-base md:text-lg text-purple-600 mb-8">{portfolioData.shortBio}</p>

        {/* Instead of showing all navigation buttons, just show the Get To Know Me More button */}
        <GetToKnowMeButton onClick={() => setActivePage('about')} />
      </div>
    </motion.div>
  );

  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-purple-600 text-white shadow-lg"
    >
      {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );

  const Sidebar = () => {
    const sidebarClasses = isMobile
      ? `fixed inset-0 z-40 bg-gradient-to-b from-purple-50 to-purple-100 shadow-lg pt-16 px-4 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`
      : 'w-64 fixed left-0 top-0 h-full pt-6 px-4 bg-gradient-to-b from-purple-50 to-purple-100 shadow-lg z-40';

    return (
      <div className={sidebarClasses}
        style={{
          boxShadow: '4px 0 15px rgba(139, 92, 246, 0.1)'
        }}>
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 border-2 border-purple-400"
            style={{
              boxShadow: '0 0 15px rgba(167, 139, 250, 0.4)'
            }}>
            <img src="/images/berna2.jpg" alt={portfolioData.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-purple-700 text-center">{portfolioData.name}</h2>
          <p className="text-xs md:text-sm text-purple-600 text-center mt-1 mb-6">{portfolioData.shortBio.split(",")[0]}</p>
        </div>

        <div className="space-y-2">
          <CloudButton onClick={() => {
            setActivePage('landing');
            if (isMobile) setIsMobileMenuOpen(false);
          }} isActive={activePage === 'landing'}>
            Home
          </CloudButton>
          <CloudButton onClick={() => {
            setActivePage('about');
            if (isMobile) setIsMobileMenuOpen(false);
          }} isActive={activePage === 'about'}>
            About Me
          </CloudButton>
          <CloudButton onClick={() => {
            setActivePage('projects');
            if (isMobile) setIsMobileMenuOpen(false);
          }} isActive={activePage === 'projects'}>
            Made & Achieved
          </CloudButton>
          <CloudButton onClick={() => {
            setActivePage('socials');
            if (isMobile) setIsMobileMenuOpen(false);
          }} isActive={activePage === 'socials'}>
            Socials
          </CloudButton>
        </div>
      </div>
    );
  };

  const AboutMeContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg"
        style={{
          background: 'linear-gradient(to bottom right, #ffffff, #f5f3ff)',
          boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.2)'
        }}>
        <h2 className="text-xl md:text-2xl font-bold mb-6"
          style={{
            background: 'linear-gradient(to right, #9333ea, #7e22ce)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
          About Me
        </h2>
        <p className="text-gray-700 mb-8">{portfolioData.fullBio}</p>

        <h3 className="text-lg md:text-xl font-semibold text-purple-700 mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "UI/UX Design", "Responsive Design"].map((skill, index) => (
            <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium"
              style={{ boxShadow: '0 2px 4px rgba(139, 92, 246, 0.1)' }}>
              {skill}
            </span>
          ))}
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-purple-700 mb-4">Hobbies</h3>
        <div className="space-y-4 md:space-y-6">
          <div className="p-3 md:p-5 rounded-xl" style={{ background: 'rgba(237, 233, 254, 0.5)' }}>
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <BookOpen className="text-purple-700 w-4 h-4 md:w-5 md:h-5" />
              <h4 className="font-medium text-purple-800 text-base md:text-lg">Reading Books & Writing Stories</h4>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              I really enjoy reading books and writing stories. It's how I express my thoughts and imagination through the art of storytelling.
            </p>
          </div>

          <div className="p-3 md:p-5 rounded-xl" style={{ background: 'rgba(237, 233, 254, 0.5)' }}>
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <Paintbrush2 className="text-purple-700 w-4 h-4 md:w-5 md:h-5" />
              <h4 className="font-medium text-purple-800 text-base md:text-lg">Drawing & Painting</h4>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              I also love drawing and painting, especially on rainy days—I find it very calming and relaxing.
            </p>
          </div>

          <div className="p-3 md:p-5 rounded-xl" style={{ background: 'rgba(237, 233, 254, 0.5)' }}>
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <Gamepad2 className="text-purple-700 w-4 h-4 md:w-5 md:h-5" />
              <h4 className="font-medium text-purple-800 text-base md:text-lg">Online Games</h4>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              Playing online games like Mobile Legends and Call of Duty has become a hobby too. I usually play when I'm bored or when my friends invite me to join.
            </p>
          </div>

          <div className="p-3 md:p-5 rounded-xl" style={{ background: 'rgba(237, 233, 254, 0.5)' }}>
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <Coffee className="text-purple-700 w-4 h-4 md:w-5 md:h-5" />
              <h4 className="font-medium text-purple-800 text-base md:text-lg">Exploring Cafes</h4>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              Discovering new coffee spots inspires me and gives me a relaxing space to reflect, plan, or simply enjoy a good latte.
            </p>
          </div>

          <div className="p-3 md:p-5 rounded-xl" style={{ background: 'rgba(237, 233, 254, 0.5)' }}>
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <Monitor className="text-purple-700 w-4 h-4 md:w-5 md:h-5" />
              <h4 className="font-medium text-purple-800 text-base md:text-lg">Watching Design & Tech Videos</h4>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              Whether it's a new UI trend or a clever CSS trick, I love staying updated and inspired by the web dev community online.
            </p>
          </div>

          <div className="p-3 md:p-5 rounded-xl" style={{ background: 'rgba(237, 233, 254, 0.5)' }}>
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <Laptop className="text-purple-700 w-4 h-4 md:w-5 md:h-5" />
              <h4 className="font-medium text-purple-800 text-base md:text-lg">Learning New Skills</h4>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              I'm always exploring new tools, frameworks, and techniques to grow as a developer and improve the way I build things.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const ProjectsContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg"
        style={{
          background: 'linear-gradient(to bottom right, #ffffff, #f5f3ff)',
          boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.2)'
        }}>
        <h2 className="text-xl md:text-2xl font-bold mb-6"
          style={{
            background: 'linear-gradient(to right, #9333ea, #7e22ce)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
          Projects
        </h2>
        <div className="grid gap-4 md:gap-6 mb-8 md:mb-10">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-4 md:p-6 rounded-xl"
              style={{
                background: 'linear-gradient(145deg, #ede9fe, #ddd6fe)',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.15)'
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(139, 92, 246, 0.25)' }}
            >
              <h3 className="text-base md:text-lg font-medium text-purple-800 mb-2 md:mb-3">{project.title}</h3>
              <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-purple-600 text-white text-xs md:text-sm font-medium transition-all hover:bg-purple-700 hover:shadow-lg"
                >
                  View Project
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <h2 className="text-xl md:text-2xl font-bold mb-6"
          style={{
            background: 'linear-gradient(to right, #9333ea, #7e22ce)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
          Activities
        </h2>
        <div className="grid gap-4 md:gap-6 mb-8 md:mb-10">
          {portfolioData.activities.map((activity, index) => (
            <motion.div
              key={index}
              className="p-4 md:p-6 rounded-xl"
              style={{
                background: 'linear-gradient(145deg, #f5f3ff, #ede9fe)',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.1)'
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(139, 92, 246, 0.2)' }}
            >
              <h3 className="text-base md:text-lg font-medium text-purple-800 mb-2 md:mb-3">{activity.title}</h3>
              <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">{activity.description}</p>
              {activity.link && (
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-purple-500 text-white text-xs md:text-sm font-medium transition-all hover:bg-purple-600 hover:shadow-lg"
                >
                  View Activity
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-purple-800 mb-4">Achievements</h2>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-purple-100 shadow-sm hover:shadow-md transition"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-auto object-contain bg-gray-50"
              />
              <div className="p-3 md:p-4">
                <h3 className="text-base md:text-lg font-medium text-purple-800 mb-1">{achievement.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{achievement.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const SocialsContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg"
        style={{
          background: 'linear-gradient(to bottom right, #ffffff, #f5f3ff)',
          boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.2)'
        }}>
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center"
          style={{
            background: 'linear-gradient(to right, #9333ea, #7e22ce)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
          Connect With Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
          {portfolioData.socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 md:p-4 rounded-xl transition-all"
              style={{
                background: 'linear-gradient(145deg, #f5f3ff, #ede9fe)',
                boxShadow: '0 4px 6px rgba(139, 92, 246, 0.1)'
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 15px rgba(139, 92, 246, 0.2)',
                background: 'linear-gradient(145deg, #ede9fe, #ddd6fe)'
              }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 md:mr-4"
                style={{
                  background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
                  boxShadow: '0 4px 8px rgba(139, 92, 246, 0.3)'
                }}>
                <i className={`${social.icon} text-white text-sm md:text-lg`}></i>
              </div>
              <div>
                <h3 className="font-medium text-purple-800 text-sm md:text-base">{social.platform}</h3>
                <p className="text-purple-600 text-xs md:text-sm">{social.username}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-6 md:mt-10 p-4 md:p-8 rounded-xl text-center"
          style={{
            background: 'linear-gradient(135deg, #f3e8ff, #ede9fe)',
            boxShadow: 'inset 0 2px 10px rgba(139, 92, 246, 0.2)'
          }}>
          <h3 className="font-bold text-purple-800 text-lg md:text-xl mb-3 md:mb-4">Send Me a Message</h3>
          <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">Interested in working together? Feel free to reach out via email or any of my social platforms. Gracias!</p>
        </div>
      </div>
    </motion.div>
  );

  const MainContent = () => {
    switch (activePage) {
      case 'about':
        return <AboutMeContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'socials':
        return <SocialsContent />;
      default:
        return <Landing />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800"
      style={{
        background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #ddd6fe 100%)',
        backgroundAttachment: 'fixed'
      }}>
      {/* Show mobile menu button only on non-landing pages */}
      {activePage !== 'landing' && isMobile && <MobileMenuButton />}

      {/* Sidebar (desktop or mobile) */}
      {activePage !== 'landing' && <Sidebar />}

      {/* Main content with responsive padding */}
      <main className={`transition-all duration-300 ease-in-out ${activePage !== 'landing' ? (isMobile ? 'pt-16' : 'md:ml-64') : ''}`}>
        <div className="container mx-auto px-4 py-4 md:py-8">
          <AnimatePresence mode="wait">
            <MainContent key={activePage} />
          </AnimatePresence>
        </div>
      </main>

      {/* Semi-transparent overlay when mobile menu is open */}
      {isMobile && isMobileMenuOpen && activePage !== 'landing' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Import Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
}