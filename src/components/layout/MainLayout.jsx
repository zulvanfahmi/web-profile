import { useEffect, useRef, useState } from "react";
import Contact from "../../pages/Contact";
import Project from "../../pages/Project";
import NeonCursorGlow from "../animations/NeonCursorGlow";
import { FaArrowUp } from "react-icons/fa";
import CertificatePage from "../../pages/CertificatePage";
import WorkExperiencePage from "../../pages/WorkExperiencePage";
import AboutMePage from "../../pages/AboutMePage";
import { useEffectOnce, useLocalStorage } from "react-use";
import SwitcherThemeMode from "../ui/SwitcherThemeMode";
import { IoIosArrowUp } from "react-icons/io";
import { IconContext } from "react-icons";
import Lenis from "lenis";

export default function MainLayout() {
  // lenis - for smooth scroll

  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
      duration: 0.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  // back to top feature
  const [visible, setVisible] = useState(false);
  const SCROLL_THRESHOLD = 500;

  function scrollToTop() {
    lenisRef.current?.scrollTo(0);
  }

  function handleScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // navbar for handphone
  const pageSections = [
    {
      idPage: "aboutMeSection",
      text: "About Me",
    },
    {
      idPage: "workExperienceSection",
      text: "Work Experience",
    },
    {
      idPage: "certificateSection",
      text: "Certificate",
    },
    {
      idPage: "projectSection",
      text: "Project",
    },
    {
      idPage: "contactSection",
      text: "Contact",
    },
  ];

  const [activeSection, setActiveSection] = useState("no value");

  const OBSERVER_OPTIONS = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.2,
  };

  const [isBottomNavbarOpen, setIsBottomNavbarOpen] = useState(false);

  const styleActiveSection = "[&>a>span]:!w-20";
  const styleInactiveSection = isBottomNavbarOpen ? "" : "hidden";

  useEffectOnce(() => {
    const sections = pageSections.map((pageSection) => pageSection.idPage);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, OBSERVER_OPTIONS);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // toggle theme
  const [theme, setTheme] = useLocalStorage("theme", "");

  useEffectOnce(() => {
    if (theme === "") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  const switcherTheme = (
    <SwitcherThemeMode theme={theme} toggleTheme={toggleTheme} />
  );

  return (
    <div className="selection:bg-fuchsia-300 selection:text-fuchsia-900">
      <div className="sm:mx-24 m-4 flex flex-col">
        <AboutMePage
          otherComponent={switcherTheme}
          pageSections={pageSections}
          idPage={pageSections[0].idPage}
          lenis={lenisRef}
        />
        <WorkExperiencePage idPage={pageSections[1].idPage} />
        <div className="mb-4" />
        <CertificatePage idPage={pageSections[2].idPage} />
        <div className="mb-20" />
        <Project idPage={pageSections[3].idPage} lenis={lenisRef} />
        <div className="mb-20" />
        <Contact idPage={pageSections[4].idPage} />
      </div>

      <div className="bg-sky-900 dark:bg-zinc-800 border-t-2 border-sky-800 dark:border-zinc-700 sticky py-4 bottom-0 sm:hidden text-white">
        <div
          className={`flex flex-row ${isBottomNavbarOpen ? "items-start" : "items-center"} mx-4 gap-4`}
        >
          <ul className="grow flex flex-col gap-1">
            {pageSections.map((pageSection, index) => (
              <li
                key={index}
                className={`my-0.5 tracking-wider ${pageSection.idPage === activeSection ? styleActiveSection : styleInactiveSection}`}
              >
                <a
                  href={`#${pageSection.idPage}`}
                  className="flex items-center space-x-2"
                >
                  <span className="inline-block h-0.5 w-4 bg-white transition-all"></span>
                  &nbsp;{pageSection.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsBottomNavbarOpen(!isBottomNavbarOpen)}
              className="transition duration-500 ease-in-out"
            >
              <IconContext.Provider
                value={{
                  className: `text-3xl transition-transform duration-600 ${isBottomNavbarOpen ? "rotate-180" : "rotate-0"}`,
                }}
              >
                <IoIosArrowUp />
              </IconContext.Provider>
            </button>
            <div className="scale-70">{switcherTheme}</div>
          </div>
        </div>
      </div>

      <div className="bg-sky-900 dark:bg-zinc-800 flex justify-center">
        <p className="pb-4 pt-2 sm:py-4 text-sm text-white text-center leading-6">
          ©2025 Zulvan Fahmi &bull; Turning ideas into glowing little creations
          🌌✨
        </p>
      </div>

      <div
        className={`fixed bottom-2.5 right-5 ${visible ? "hidden sm:block" : "hidden"}`}
      >
        <button
          onClick={scrollToTop}
          className="rounded-full backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl p-2 text-white text-xs cursor-pointer hover:scale-103 hover:bg-white/15 transition"
        >
          <span className="flex flex-row items-center">
            <FaArrowUp />
            &nbsp;Back to Top
          </span>
        </button>
      </div>

      <NeonCursorGlow />

      {/* 
            
            Some UI components in this project were originally created by talented 
            developers and shared publicly on Uiverse.io. 
            I have slightly modified some of them to better fit the context and design 
            of this website. All credits go to the original creators:
            
            - Send Button — adamgiebl (https://uiverse.io/adamgiebl/smart-moth-68)
            - Theme Switcher — RiccardoRapelli (https://uiverse.io/RiccardoRapelli/jolly-chicken-91)
            - Infinite Carousel — ashwin_5681 (https://uiverse.io/ashwin_5681/tough-baboon-50)
            - Neon Lamp Fire — andrew_manzyk (https://uiverse.io/andrew-manzyk/young-walrus-64)

            These components are publicly available and permitted for reuse 
            under the terms provided on Uiverse.io.
            
            */}
    </div>
  );
}
