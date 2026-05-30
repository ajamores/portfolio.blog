// public/js/theme.js
var initThemeToggle = () => {
  const btn = document.getElementById("sunMoon");
  if (!btn) return;
  const isDarkOnLoad = document.documentElement.classList.contains("dark");
  btn.innerHTML = isDarkOnLoad ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
  lucide.createIcons();
  btn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
    btn.innerHTML = isDark ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
    lucide.createIcons();
  });
};
if (localStorage.theme === "dark" || !("theme" in localStorage)) {
  document.documentElement.classList.add("dark");
}

// public/js/data/exp.js
var experiences = [
  {
    id: 1,
    type: "work",
    title: "Founder & Web Developer (Freelance)",
    company: "Escarpment Web Design",
    date: "05/2026 - Present",
    summary: "taking the leap into freelance, building websites and local SEO solutions for small businesses in Hamilton",
    bullets: [
      "currently building escarpmentwebdesign.com",
      "targeting local restaurants, gyms, trades, and professionals with outdated or missing web presence",
      "focused on clean fast sites with real Google visibility"
    ],
    side: "left"
  },
  {
    id: 2,
    type: "work",
    title: "Software Developer (Co-Op)",
    company: "Procor Limited",
    date: "04/2025 \u2013 08/2025",
    summary: "shipped backend features for a fleet management application scheduling 30k+ railway tank cars",
    bullets: [
      "built and tested REST API endpoints consumed by an internal iPad scheduling app",
      "got thrown into a production Java codebase and figured it out",
      "presented end-of-term project to engineering stakeholders across Canadian and US offices"
    ],
    side: "right"
  },
  {
    id: 3,
    type: "work",
    title: "QA Analyst (Co-Op)",
    company: "Procor Limited",
    date: "01/2024 \u2013 04/2025",
    summary: "made sure things worked before they went live, phased rollouts and all",
    bullets: [
      "wrote automated API tests in Groovy so humans didn't have to",
      "broke things professionally so users wouldn't have to",
      "helped migrate legacy ETL pipelines to Apache Kafka for real-time event streaming",
      "built proper onboarding docs in Confluence so the next co-ops didn't have to learn from Udemy videos like I did"
    ],
    side: "left"
  },
  {
    id: 4,
    type: "work",
    title: "Personal Banker",
    company: "Bank of Montreal",
    date: "01/2017 \u2013 06/2022",
    summary: "helped real people navigate real financial decisions for five years",
    bullets: [
      "helped people make sense of their finances one appointment at a time",
      "five years of keeping calm when the queue was not",
      "consistently met sales targets while keeping the human side of banking intact"
    ],
    side: "right"
  },
  {
    id: 4,
    type: "education",
    title: "Graduated \u2014 Mohawk College",
    company: "Mohawk College",
    date: "12/2025",
    summary: "completed a long journey and came out the other side",
    bullets: [
      "got the paper to prove it",
      "made some amazing friends along the way"
    ],
    side: "left"
  },
  {
    id: 5,
    type: "education",
    title: "Applied Research Project \u2014 AI WWII Aircraft Detection",
    company: "Mohawk College",
    date: "2025",
    summary: "spent two semesters teaching a computer to recognize WWII aircraft for the Canadian Warplane Heritage Museum",
    bullets: [
      "scraped and annotated over 1000 images by hand so the model actually knew what it was looking at",
      "ended up with roughly 20% better accuracy than where we started",
      "got a field trip to the museum and  saw in person some of the planes I had been staring at on a screen for months"
    ],
    side: "right"
  },
  {
    id: 6,
    type: "education",
    title: "Software Engineering Project \u2014 Intrfac3",
    company: "Mohawk College",
    date: "2024",
    summary: "built a dashboard for a startup using React and the Instagram API",
    bullets: [
      "first real taste of React in a client-facing project",
      "integrated Instagram API to pull and display analytics data",
      "set up webhooks to listen for real-time Instagram account updates"
    ],
    side: "left"
  },
  {
    id: 7,
    type: "education",
    title: "Microsoft Azure Fundamentals",
    company: "Microsoft",
    date: "2023",
    summary: "earned cloud certification covering core Azure concepts and services",
    bullets: [
      "school paid for it, no complaints"
    ],
    side: "right"
  },
  {
    id: 8,
    type: "education",
    title: "Joined Cybersecurity Club",
    company: "Mohawk College",
    date: "2023",
    summary: "got into the world of ethical hacking and security challenges",
    bullets: [
      "played around with Kali Linux",
      "captured a flag in a CTF competition"
    ],
    side: "left"
  },
  {
    id: 9,
    type: "education",
    title: "The Beginning",
    company: "Mohawk College",
    date: "Sept 2022",
    summary: "officially started the software development journey",
    bullets: [
      "I wanted a change in my life and I dove in head first",
      "chose Mohawk specifically for the co-op program as I knew I needed real experience"
    ],
    side: "right"
  },
  {
    id: 10,
    type: "hobbies",
    title: "Learned Salsa & Bachata",
    company: "",
    date: "Summer 2025",
    summary: "picked up two latin dances and discovered Salsa on Bayfront",
    bullets: [
      "saw how alive Salsa on Bayfront gets on a summer night",
      "learned something totally out of my character and enjoyed every bit of it",
      "my high school self would be shocked"
    ],
    side: "left"
  },
  {
    id: 11,
    type: "hobbies",
    title: "Ran Around the Bay \u2014 30km",
    company: "",
    date: "March 2024",
    summary: "ran 30km around Hamilton Bay and survived (barely)",
    bullets: [
      "felt great for the first 22km",
      "limped the rest of the way in agony",
      "gained a newfound respect for Terry Fox"
    ],
    side: "right"
  },
  {
    id: 12,
    type: "hobbies",
    title: "Bell x Hackworks Hackathon",
    company: "Bell",
    date: "Oct 2023",
    summary: "built a password manager with Next.js in 48 hours to tackle cybersecurity awareness",
    bullets: [
      "first time using Next.js, learned it on the fly under pressure",
      'tackled a real problem: "123456" is still the most common password in 2023',
      "went with my goofy friends, didn't win but had a great time"
    ],
    side: "left"
  },
  {
    id: 13,
    type: "hobbies",
    title: "First Trip Back to the Philippines",
    company: "",
    date: "Summer 2022",
    summary: "went back home and breathed the air I breathed when I was born",
    bullets: [
      "surfed in Siargao",
      "swam with whale sharks in Cebu",
      "saw how my parents grew up and gained a whole new perspective on life"
    ],
    side: "right"
  }
];

// public/js/components/expCard.js
function renderExpCard(exp) {
  const bullets = exp.bullets.map((b, i) => `
    <li class="flex items-start gap-2 text-xs sm:text-sm xl:text-md" style="animation-delay: ${i * 60}ms">
        <span class="w-1.5 h-1.5 rounded-full bg-ctp-peach mt-2 shrink-0"></span>
        <p>${b}</p>
    </li>
    `).join("");
  return `
    <div class="exp relative ${exp.id >= 2 ? "mt-5" : ""} bg-sky-500/60 dark:bg-ctp-mantle p-7 rounded-2xl border border-ctp-peach/50 shadow-[0_0_15px_rgba(250,179,135,0.2)] ${exp.side === "left" ? "md:mr-10" : "md:ml-10"}">
     <div class="absolute -left-8.25 top-8 w-3 h-3 rounded-full mt-15 bg-ctp-peach md:hidden"></div>   
    <div class="flex gap-2 sm:gap-12 items-start">
        <div class="flex-1">
          <h3 class="text-md md:text-md lg:text-xl xl:text-2xl font-bold mb-1">${exp.title}</h3>
          <p class="text-sm sm::text-md xl:text-lg font-semibold text-sky-200 dark:text-ctp-peach">${exp.company === "" ? "" : "@"} ${exp.company}</p>
          <span class=" text-sky-200 dark:text-ctp-peach text-sm md:text-lg">${exp.date}</span>
          <p class="mt-4 text-sm lg:text-sm xl:text-md">${exp.summary}</p>
          <div class="info hidden mt-5">
            <hr class="mb-4">
            <ul id=class="space-y-3 mt-4">${bullets}</ul>
          </div>
        </div>
        <button class="more-btn transition-transform duration-300 shrink-0  cursor-pointer" aria-label="view more details on ${exp.title}}">
          <i data-lucide="chevron-down" class=" w-7 h-7"></i>
        </button>
      </div>
    </div>
  `;
}

// public/js/data/proj.js
var projects = [
  {
    id: 1,
    title: "Personal Blog & Content Management System",
    description: "A full-stack blog platform I built from scratch to write about what I'm building, learning, and anything else on my mind.",
    tech: ["JavaScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind"],
    bullets: [
      "JWT auth with httpOnly cookies and rate limiting",
      "Editor.js rich text editor with custom blocks",
      "MVC architecture with clean separation of concerns",
      "Custom admin dashboard for creating and managing posts"
    ],
    image: "/images/blogpic.webp",
    video: "/images/blogvid.webm",
    alt: "Home page of blog",
    github: "https://github.com/ajamores/portfolio.blog",
    live: "/blog",
    side: "left"
  },
  {
    id: 2,
    title: "Stock Diary App",
    description: "Full stack investment tracking application. Record your stock purchases and watch your portfolio performance through various graphs.",
    tech: ["Python", "Flask", "JavaScript", "MySQL", "Bootstrap", "Chart.js"],
    bullets: [
      "live stock data pulled and visualized with Chart.js",
      "full CRUD for recording and managing stock purchases",
      "deployed on PythonAnywhere"
    ],
    image: "/images/stockdiarypic.webp",
    video: "images/stockdiaryvid.webm",
    alt: "Home page of blog,",
    github: "https://github.com/ajamores/stockdiary",
    live: "https://stockdiaryapp.pythonanywhere.com/",
    side: "right"
  },
  {
    id: 3,
    title: "WWII Aircraft Identification",
    description: "An applied research project in partnership with the Canadian Warplane Heritage Museum. Built a computer vision pipeline to identify WWII aircraft using YOLOv11.",
    tech: ["Python", "YOLOv11", "AI", "Computer Vision", "Machine Learning"],
    bullets: [
      "Ran an experiment testing the model on unseen Halifax Bomber plane footage, successfully identifying the aircraft using our trained dataset",
      "Built and managed the training dataset using a specialized annotation tool \u2014 labeling every plane for over 1000+ images",
      "Achieved roughly 20% gains in mAP50, precision and recall over two semesters work"
    ],
    image: "/images/plane1.webp",
    video: "images/aircraftvid.webm",
    alt: "Home page of blog,",
    github: "https://github.com/coopscoop/AircraftIdentification",
    live: null,
    side: "left"
  }
];

// public/js/components/projCard.js
function renderProjCard(proj) {
  const title = `<h3 class="text-2xl md:text-3xl text-sky-500 dark:text-ctp-peach text-center sm:text-left">${proj.title}</h3>`;
  const description = `<p class="text-xs sm:text-base mb-3 text-sky-800 dark:text-slate-100">${proj.description}</p>`;
  const tech = `
    <ul class="tech-tags flex gap-2 flex-wrap mt-2 justify-center sm:justify-start">
      ${proj.tech.map((t) => `<li>${t}</li>`).join("")}
    </ul>
  `;
  const learnMore = `
    <div class="learn-more text-md sm:text-lg mt-2 cursor-pointer w-fit inline-flex items-center gap-2 text-sky-500 dark:text-ctp-peach font-semibold border-b border-sky-700/40 dark:border-ctp-peach/40 pb-0.5  hover:border-sky-900 dark:hover:border-ctp-peach hover:gap-3 transition-all duration-200">
      Learn More
      <i data-lucide="arrow-down" class="w-4 h-4"></i>
    </div>
  `;
  const bullets = proj.bullets.map((b) => `
    <li class="flex items-start gap-2" >
      <span class="w-1.5 h-1.5 rounded-full bg-sky-900 dark:bg-ctp-peach mt-2 shrink-0"></span>
      <p class="dark:text-white text-sky-900 text-xs sm:text-base ">${b}</p>
    </li>
  `).join("");
  const liveBtn = proj.live ? `
    <a href="${proj.live}" target="_blank">
      <button class="flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer
        bg-sky-100 border border-sky-300 text-sky-700 
        dark:bg-ctp-peach/15 dark:border-ctp-peach/40 dark:text-ctp-peach 
        text-sm font-semibold 
        hover:bg-sky-200 hover:border-sky-400
        dark:hover:bg-ctp-peach/25 dark:hover:border-ctp-peach 
        transition-all duration-200">
        <i data-lucide="external-link" class="w-4 h-4"></i>
        Live
      </button>
    </a>
  ` : "";
  const projDetails = `
    <div class="proj-details  mt-4 p-5 bg-sky-50 dark:bg-ctp-mantle/70 rounded-xl border border-sky-200 dark:border-ctp-peach/20">
      ${description}
      <h4 class="text-sky-600 dark:text-ctp-peach font-semibold text-md sm:text-lg mb-2">Key Features</h4>
      <ul id="tech-tags" class="space-y-2 text-sm">
        ${bullets}
      </ul>
      <div class="proj-links mt-6 flex gap-3">
        <a href="${proj.github}" target="_blank">
          <button class="flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer
            border border-sky-300 text-sky-700
            dark:border-ctp-peach/40 dark:text-ctp-peach 
            text-sm font-semibold 
            hover:bg-sky-100 hover:border-sky-400
            dark:hover:bg-ctp-peach/10 dark:hover:border-ctp-peach 
            transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Github
          </button>
        </a>
        ${liveBtn}
      </div>
    </div>
  `;
  const projInfo = `
    <div class="proj-info flex flex-col gap-4 items-center md:items-start
      order-1
      ${proj.side === "left" ? "md:order-1" : "md:order-2"}
    ">
    ${title}
    ${tech}
    ${learnMore}
    ${projDetails}
  </div>
`;
  const image2 = `
  <div class="proj-pic group transition-transform duration-700 ease-in-out ${proj.side === "left" ? "md:order-2" : "md:order-1"} order-2 cursor-pointer">
    <div class="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-sky-200/20 dark:ring-ctp-peach/20">

      <img
        width="1000"
        height="600"
        src="${proj.image}"
        alt="${proj.alt}"
        class="proj-img w-full h-full object-cover transition-opacity duration-500"
        decoding="async"
        loading="lazy"
      />

      <div class="play-overlay absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black/20 opacity-0 group-hover:opacity-100">
        <div class="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/40">
          <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>

      <video
        class="proj-video absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
        muted
        loop
        playsinline
        preload="none"
      >
        <source src="${proj.video}" type="video/webm" />
      </video>

    </div>
  </div>
`;
  return `
    <div class="
      proj group py-2 lg:py-10 mt-10 md:mt-12
      px-0 md:px-17
      grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20
      items-center cursor-pointer
      transition-all duration-300 ease-out
      hover:shadow-2xl rounded-2xl p-6 hover:-translate-y-2 
    ">
    ${projInfo}
    ${image2}
  </div>
`;
}

// public/js/api.js
var getAllPublishedBLogPosts = async () => {
  const res = await fetch(`/api/blog`);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error("Error fetching published blog posts");
    console.error("getAllPublishedBlogPosts failed:", res.status, body);
  }
  const data = await res.json();
  return data;
};

// public/js/components/navBar.js
var renderNavBar = () => {
  return `
        <header class="fixed top-0 left-0 right-0 py-4 shadow-1xl backdrop-blur-sm z-10 text-white ">
            <div class=" max-w-6xl mx-auto flex justify-between px-4 sm:px-6">
                <a href="/" class="group w-fit my-auto">
                    <h1
                        class=" nav-icon relative inline-block font-semibold text-xl sm:text-2xl tracking-wide 
                        text-sky-600 dark:text-ctp-peach
                        transition-all duration-300 ease-out
                        group-hover:tracking-widest
                        group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.55)]
                        dark:group-hover:drop-shadow-[0_0_14px_rgba(250,179,135,0.45)]">

                        Armand Amores

                        <span
                            class="absolute left-1/2 -translate-x-1/2 -bottom-1
                            h-0.5 w-0
                            bg-sky-600 dark:bg-ctp-peach
                            transition-all duration-300 ease-out
                            group-hover:w-full">
                        </span>
                    </h1>
                </a>
                <nav class="  nav-links gap-4 text-xl flex items-center text-sky-700 dark:text-white" id="navbar">
                    <a href="/" class="hidden md:flex">Home</a>
                    <a href="/#skills" class="hidden md:flex ">Skills</a>
                    <a href="/#experience" class="hidden md:flex ">Experience</a>
                    <a href="/#projects" class="hidden md:flex ">Projects</a>
                    
                    <button 
                        id="sunMoon"
                        aria-label="Toggle dark mode"
                        class="border rounded-4xl p-0.5 md:p-1 cursor-pointer">
                        <i data-lucide="sun" class="w-2 h-2 md:w-5 md:h-5"></i>
                    </button>

                    <button 
                        id="menuBtn"
                        aria-label="Open navigation menu"
                        class="block md:hidden cursor-pointer">
                        <i data-lucide="menu" ></i>
                    </button>

                    <a href="/blog" class="hidden md:flex ">Blog</a>
                    <a href="https://github.com/ajamores" class="hidden md:flex ">Github</a>
                    <a href="https://www.linkedin.com/in/armandamores/" class="hidden md:flex ">Linkedin</a>
                    <a href="https://www.youtube.com/@armandamores502" class="hidden md:flex ">Youtube</a>
                </nav>
            </div>
        </header>

        <!-- Mobile drawer -->
        <div id="mobileMenu"
            class="hidden md:hidden flex-col gap-4 px-6 pt-4 pb-6 text-lg text-black dark:text-white cursor-pointer font-semibold">
            <a href="/">Home</a>
            <a href="#/skills">Skills</a>
            <a href="/#experience" class="hidden md:flex ">Experience</a>
            <a href="/blog">Blog</a>
            <a href="https://github.com/ajamores">Github</a>
            <a href="https://www.linkedin.com/in/armandamores/">Linkedin</a>
            <a href="https://www.youtube.com/@armandamores502">Youtube</a>
        </div> 
    `;
};

// public/js/index.js
var nav = document.getElementById("nav-mount").innerHTML = renderNavBar();
initThemeToggle();
var menuBtn = document.getElementById("menuBtn");
var mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
  menuBtn.innerHTML = isOpen ? '<i data-lucide="menu"></i>' : '<i data-lucide="x"></i>';
  lucide.createIcons();
});
document.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--spotlight-x", `${e.clientX}px`);
  document.documentElement.style.setProperty("--spotlight-y", `${e.clientY}px`);
});
var image = document.getElementById("image");
var video = document.getElementById("hero-video");
var img = document.getElementById("hero-img");
video.load();
var isPlaying = false;
image.addEventListener("click", async () => {
  if (isPlaying) return;
  isPlaying = true;
  img.classList.add("opacity-0");
  video.currentTime = 0;
  try {
    await video.play();
  } catch (e) {
    isPlaying = false;
    img.classList.remove("opacity-0");
  }
});
video.addEventListener("ended", () => {
  img.classList.remove("opacity-0");
  isPlaying = false;
});
var sections = ["skills", "experience", "projects", "latest-blogs"];
sections.forEach((id) => {
  const section = document.getElementById(id);
  if (!section) return;
  const heading = section.querySelector(".skills-heading");
  const subheading = heading?.closest("div").nextElementSibling;
  if (heading) heading.style.opacity = "0";
  if (subheading) subheading.style.opacity = "0";
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (heading) {
          heading.style.animation = "none";
          heading.offsetHeight;
          heading.style.animation = "fadeUp 0.6s ease forwards 0.1s";
        }
        if (subheading) {
          subheading.style.animation = "none";
          subheading.offsetHeight;
          subheading.style.animation = "fadeUp 0.6s ease forwards 0.25s";
        }
      } else {
        if (heading) {
          heading.style.opacity = "0";
          heading.style.animation = "none";
        }
        if (subheading) {
          subheading.style.opacity = "0";
          subheading.style.animation = "none";
        }
      }
    });
  }, { threshold: 0.1 }).observe(section);
});
var expObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const btnContainer = document.getElementById("exp-btn-container");
      const expLayout = document.getElementById("exp-layout");
      btnContainer.style.animation = "none";
      btnContainer.offsetHeight;
      btnContainer.style.animation = "fadeUp 0.6s ease forwards 0.4s";
      expLayout.style.animation = "none";
      expLayout.offsetHeight;
      expLayout.style.animation = "fadeUp 0.6s ease forwards 0.55s";
    } else {
      document.getElementById("exp-btn-container").style.opacity = "0";
      document.getElementById("exp-layout").style.opacity = "0";
    }
  });
}, { threshold: 0.1 });
expObserver.observe(document.getElementById("experience"));
var heroItems = document.querySelectorAll("#hero-text > *");
var imageWrapper = document.getElementById("image-wrapper");
var resetHeroAnimations = () => {
  heroItems.forEach((el, i) => {
    el.style.animation = "none";
    el.style.opacity = "0";
  });
  imageWrapper.style.animation = "none";
  imageWrapper.style.opacity = "0";
};
var playHeroAnimations = () => {
  heroItems.forEach((el, i) => {
    el.style.animation = "none";
    el.offsetHeight;
    el.style.animation = `fadeUp 0.6s ease forwards ${0.1 + i * 0.15}s`;
  });
  imageWrapper.style.animation = "none";
  imageWrapper.offsetHeight;
  imageWrapper.style.animation = "fadeUp 0.8s ease forwards 0.4s";
};
var heroObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      playHeroAnimations();
    } else {
      resetHeroAnimations();
    }
  });
}, { threshold: 0.3 });
heroObserver.observe(document.getElementById("hero"));
document.querySelectorAll(".skill-list").forEach((list) => {
  const accent = list.dataset.accent;
  const shadow = list.dataset.shadow;
  list.style.setProperty("--accent", accent);
  list.style.setProperty("--shadow", shadow);
  list.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 100;
      const y = (e.clientY - rect.top) / rect.height * 100;
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
      const tiltX = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
      const tiltY = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      card.style.transform = `translateY(-4px) scale(1.06) perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
});
var skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll(".skill-group").forEach((group, i) => {
        setTimeout(() => {
          group.classList.remove("opacity-0");
          group.classList.add("animate-fade-up");
        }, i * 150);
        group.querySelectorAll(".skill-card").forEach((card, j) => {
          setTimeout(() => {
            card.classList.remove("opacity-0");
            card.classList.add("animate-pop-in");
          }, i * 150 + j * 70);
        });
      });
    } else {
      entry.target.querySelectorAll(".skill-group").forEach((group) => {
        group.classList.add("opacity-0");
        group.classList.remove("animate-fade-up");
      });
      entry.target.querySelectorAll(".skill-card").forEach((card) => {
        card.classList.add("opacity-0");
        card.classList.remove("animate-pop-in");
      });
    }
  });
}, { threshold: 0.2 });
skillsObserver.observe(document.getElementById("skills"));
var insertExp = (filteredExp2) => {
  layout.innerHTML = "";
  filteredExp2.forEach((exp2) => {
    const left = exp2.side === "left" ? renderExpCard(exp2) : "<div></div>";
    const right = exp2.side === "right" ? renderExpCard(exp2) : "<div></div>";
    layout.innerHTML += `
            ${left}
            <div class="hidden md:flex flex-col items-center justify-center ">
                <div class="w-0.5 bg-white dark:bg-ctp-peach/40 flex-1"></div>
                <div class="w-4 h-4 rounded-full bg-sky-500 dark:bg-ctp-peach shrink-0  "></div>
                <div class="w-0.5 bg-white dark:bg-ctp-peach/40 flex-1"></div>
            </div>
            ${right}
        `;
  });
  document.querySelectorAll(".info").forEach((i) => i.classList.add("hidden"));
  const exp = document.querySelectorAll(".exp");
  exp.forEach((card) => {
    const btn = card.querySelector(".more-btn");
    card.addEventListener("click", () => {
      const currentInfo = card.querySelector(".info");
      const isHidden = currentInfo.classList.contains("hidden");
      document.querySelectorAll(".info").forEach((i) => {
        i.classList.add("hidden");
        i.classList.remove("visible");
      });
      document.querySelectorAll(".more-btn").forEach((b) => b.style.transform = "");
      if (isHidden) {
        currentInfo.classList.remove("hidden");
        currentInfo.classList.add("visible");
        btn.style.transform = "rotate(180deg)";
      }
    });
  });
};
var layout = document.getElementById("exp-layout");
var expChoice = "work";
document.getElementById("exp-btns").firstElementChild.classList.add("active");
var filteredExp = experiences.filter((ex) => {
  return ex.type === expChoice;
});
insertExp(filteredExp);
document.querySelectorAll("#exp-btns button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#exp-btns button").forEach((btn2) => {
      btn2.classList.remove("active");
      btn2.classList.remove("bg-ctp-peach/20", "text-ctp-peach");
    });
    btn.classList.add("active");
    btn.classList.add("bg-ctp-peach/20", "text-ctp-peach");
    expChoice = btn.dataset.type;
    filteredExp = experiences.filter((ex) => {
      return ex.type === expChoice;
    });
    insertExp(filteredExp);
    lucide.createIcons();
  });
});
var container = document.getElementById("proj-container");
projects.forEach((proj) => {
  container.innerHTML += renderProjCard(proj);
});
lucide.createIcons();
document.querySelectorAll(".learn-more").forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.closest(".proj-info").querySelector(".proj-details");
    panel.classList.toggle("visible");
    const isVisible = panel.classList.contains("visible");
    btn.innerHTML = isVisible ? 'Hide Details <i data-lucide="arrow-up" class="w-4 h-4"></i>' : 'Learn More <i data-lucide="arrow-down" class="w-4 h-4"></i>';
    lucide.createIcons();
  });
});
var projObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const card = entry.target;
      const index = [...document.querySelectorAll("#proj-container > *")].indexOf(card);
      card.style.animation = "none";
      card.offsetHeight;
      const dir = index % 2 === 0 ? "fadeLeft" : "fadeRight";
      card.style.animation = `${dir} 0.6s ease forwards`;
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.animation = "none";
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll("#proj-container > *").forEach((card) => {
  card.style.opacity = "0";
  projObserver.observe(card);
});
var vidObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const video2 = entry.target.querySelector(".proj-video");
      if (video2) {
        video2.load();
        vidObserver.unobserve(entry.target);
      }
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll(".proj").forEach((proj) => vidObserver.observe(proj));
function stopAllVideos(except = null) {
  document.querySelectorAll(".proj").forEach((proj) => {
    if (proj === except) return;
    const video2 = proj.querySelector(".proj-video");
    const img2 = proj.querySelector(".proj-img");
    const overlay = proj.querySelector(".play-overlay");
    if (!video2) return;
    video2.pause();
    video2.currentTime = 0;
    video2.style.opacity = "0";
    img2.style.opacity = "1";
    overlay.style.opacity = "";
    proj.querySelector(".proj-pic").style.transform = "";
    proj._playing = false;
  });
}
document.querySelectorAll(".proj").forEach((proj) => {
  const video2 = proj.querySelector(".proj-video");
  const img2 = proj.querySelector(".proj-img");
  const overlay = proj.querySelector(".play-overlay");
  if (!video2) return;
  proj._playing = false;
  proj.querySelector(".proj-pic").addEventListener("click", () => {
    if (!proj._playing) {
      stopAllVideos(proj);
      img2.style.opacity = "0";
      overlay.style.opacity = "0";
      video2.style.opacity = "1";
      proj.querySelector(".proj-pic").style.transform = "scale(1.25)";
      video2.play().catch(() => {
      });
      proj._playing = true;
    } else {
      video2.pause();
      video2.currentTime = 0;
      video2.style.opacity = "0";
      img2.style.opacity = "1";
      overlay.style.opacity = "";
      proj.querySelector(".proj-pic").style.transform = "";
      proj._playing = false;
    }
  });
});
var postData = await getAllPublishedBLogPosts();
var posts = postData.data.posts;
var latest = posts.slice(0, 4);
var blogContainer = document.getElementById("blogs");
latest.forEach((element) => {
  let post = document.createElement("a");
  post.href = `/post/${element.slug}`;
  let postTitle = document.createElement("h2");
  const dateTime = document.createElement("div");
  let postDate = document.createElement("time");
  let ttr = document.createElement("span");
  let postExcerpt = document.createElement("p");
  let readMore = document.createElement("div");
  post.className = "homePost";
  postTitle.className = "homePostTitle";
  postDate.className = "homePostDate";
  dateTime.className = "homeDateTime";
  ttr.className = "ttr";
  postExcerpt.className = "homePostExcerpt";
  postTitle.textContent = element.title;
  const date = new Date(element.createdAt).toISOString().split("T")[0];
  postDate.textContent = date;
  postDate.dateTime = date;
  ttr.textContent = `${element.readingTime} min read`;
  const seperator = document.createElement("span").textContent = "\u2022";
  dateTime.append(postDate, seperator, ttr);
  postExcerpt.textContent = element.excerpt;
  readMore.innerHTML = '<span>Read More</span><span style="position:relative;z-index:1;"><i data-lucide="arrow-right"></i></span>';
  readMore.id = "homeReadBtn";
  readMore.className = "flex items-center gap-1";
  post.append(dateTime, postTitle, postExcerpt, readMore);
  blogContainer.append(post);
});
var blogObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const card = entry.target;
      const index = [...document.querySelectorAll("#blogs > *")].indexOf(card);
      card.style.animation = "none";
      card.offsetHeight;
      const dir = index % 2 === 0 ? "fadeLeft" : "fadeRight";
      card.style.animation = `${dir} 0.6s ease forwards`;
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.animation = "none";
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll("#blogs > *").forEach((post) => {
  post.style.opacity = "0";
  blogObserver.observe(post);
});
var viewAllBtn = document.querySelector("#latest-blogs .text-center.mt-10");
viewAllBtn.style.opacity = "0";
new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      viewAllBtn.style.animation = "none";
      viewAllBtn.offsetHeight;
      viewAllBtn.style.animation = "fadeUp 0.6s ease forwards 0.3s";
    } else {
      viewAllBtn.style.opacity = "0";
      viewAllBtn.style.animation = "none";
    }
  });
}, { threshold: 0.1 }).observe(viewAllBtn);
lucide.createIcons();
//# sourceMappingURL=index.bundle.js.map
