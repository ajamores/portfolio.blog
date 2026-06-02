// node_modules/lucide/dist/esm/defaultAttributes.mjs
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

// node_modules/lucide/dist/esm/createElement.mjs
var createSVGElement = ([tag, attrs, children]) => {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.keys(attrs).forEach((name) => {
    element.setAttribute(name, String(attrs[name]));
  });
  if (children?.length) {
    children.forEach((child) => {
      const childElement = createSVGElement(child);
      element.appendChild(childElement);
    });
  }
  return element;
};
var createElement = (iconNode, customAttrs = {}) => {
  const tag = "svg";
  const attrs = {
    ...defaultAttributes,
    ...customAttrs
  };
  return createSVGElement([tag, attrs, iconNode]);
};

// node_modules/lucide/dist/esm/shared/src/utils/hasA11yProp.mjs
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

// node_modules/lucide/dist/esm/shared/src/utils/mergeClasses.mjs
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// node_modules/lucide/dist/esm/shared/src/utils/toCamelCase.mjs
var toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);

// node_modules/lucide/dist/esm/shared/src/utils/toPascalCase.mjs
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// node_modules/lucide/dist/esm/replaceElement.mjs
var getAttrs = (element) => Array.from(element.attributes).reduce((attrs, attr) => {
  attrs[attr.name] = attr.value;
  return attrs;
}, {});
var getClassNames = (attrs) => {
  if (typeof attrs === "string") return attrs;
  if (!attrs || !attrs.class) return "";
  if (attrs.class && typeof attrs.class === "string") {
    return attrs.class.split(" ");
  }
  if (attrs.class && Array.isArray(attrs.class)) {
    return attrs.class;
  }
  return "";
};
var replaceElement = (element, { nameAttr, icons, attrs }) => {
  const iconName = element.getAttribute(nameAttr);
  if (iconName == null) return;
  const ComponentName = toPascalCase(iconName);
  const iconNode = icons[ComponentName];
  if (!iconNode) {
    return console.warn(
      `${element.outerHTML} icon name was not found in the provided icons object.`
    );
  }
  const elementAttrs = getAttrs(element);
  const ariaProps = hasA11yProp(elementAttrs) ? {} : { "aria-hidden": "true" };
  const iconAttrs = {
    ...defaultAttributes,
    "data-lucide": iconName,
    ...ariaProps,
    ...attrs,
    ...elementAttrs
  };
  const elementClassNames = getClassNames(elementAttrs);
  const className = getClassNames(attrs);
  const classNames = mergeClasses(
    "lucide",
    `lucide-${iconName}`,
    ...elementClassNames,
    ...className
  );
  if (classNames) {
    Object.assign(iconAttrs, {
      class: classNames
    });
  }
  const svgElement = createElement(iconNode, iconAttrs);
  return element.parentNode?.replaceChild(svgElement, element);
};

// node_modules/lucide/dist/esm/icons/arrow-down.mjs
var ArrowDown = [
  ["path", { d: "M12 5v14" }],
  ["path", { d: "m19 12-7 7-7-7" }]
];

// node_modules/lucide/dist/esm/icons/arrow-left.mjs
var ArrowLeft = [
  ["path", { d: "m12 19-7-7 7-7" }],
  ["path", { d: "M19 12H5" }]
];

// node_modules/lucide/dist/esm/icons/arrow-right.mjs
var ArrowRight = [
  ["path", { d: "M5 12h14" }],
  ["path", { d: "m12 5 7 7-7 7" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up.mjs
var ArrowUp = [
  ["path", { d: "m5 12 7-7 7 7" }],
  ["path", { d: "M12 19V5" }]
];

// node_modules/lucide/dist/esm/icons/calendar.mjs
var Calendar = [
  ["path", { d: "M8 2v4" }],
  ["path", { d: "M16 2v4" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
  ["path", { d: "M3 10h18" }]
];

// node_modules/lucide/dist/esm/icons/chevron-down.mjs
var ChevronDown = [["path", { d: "m6 9 6 6 6-6" }]];

// node_modules/lucide/dist/esm/icons/clock.mjs
var Clock = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6l4 2" }]
];

// node_modules/lucide/dist/esm/icons/external-link.mjs
var ExternalLink = [
  ["path", { d: "M15 3h6v6" }],
  ["path", { d: "M10 14 21 3" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]
];

// node_modules/lucide/dist/esm/icons/map-pin.mjs
var MapPin = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/menu.mjs
var Menu = [
  ["path", { d: "M4 5h16" }],
  ["path", { d: "M4 12h16" }],
  ["path", { d: "M4 19h16" }]
];

// node_modules/lucide/dist/esm/icons/moon.mjs
var Moon = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/save.mjs
var Save = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }]
];

// node_modules/lucide/dist/esm/icons/sun.mjs
var Sun = [
  ["circle", { cx: "12", cy: "12", r: "4" }],
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M12 20v2" }],
  ["path", { d: "m4.93 4.93 1.41 1.41" }],
  ["path", { d: "m17.66 17.66 1.41 1.41" }],
  ["path", { d: "M2 12h2" }],
  ["path", { d: "M20 12h2" }],
  ["path", { d: "m6.34 17.66-1.41 1.41" }],
  ["path", { d: "m19.07 4.93-1.41 1.41" }]
];

// node_modules/lucide/dist/esm/icons/trash-2.mjs
var Trash2 = [
  ["path", { d: "M10 11v6" }],
  ["path", { d: "M14 11v6" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
  ["path", { d: "M3 6h18" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
];

// node_modules/lucide/dist/esm/icons/x.mjs
var X = [
  ["path", { d: "M18 6 6 18" }],
  ["path", { d: "m6 6 12 12" }]
];

// node_modules/lucide/dist/esm/lucide.mjs
var createIcons = ({
  icons = {},
  nameAttr = "data-lucide",
  attrs = {},
  root = document,
  inTemplates
} = {}) => {
  if (!Object.values(icons).length) {
    throw new Error(
      "Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`"
    );
  }
  if (typeof root === "undefined") {
    throw new Error("`createIcons()` only works in a browser environment.");
  }
  const elementsToReplace = Array.from(root.querySelectorAll(`[${nameAttr}]`));
  elementsToReplace.forEach((element) => replaceElement(element, { nameAttr, icons, attrs }));
  if (inTemplates) {
    const templates = Array.from(root.querySelectorAll("template"));
    templates.forEach(
      (template) => createIcons({
        icons,
        nameAttr,
        attrs,
        root: template.content,
        inTemplates
      })
    );
  }
  if (nameAttr === "data-lucide") {
    const deprecatedElements = root.querySelectorAll("[icon-name]");
    if (deprecatedElements.length > 0) {
      console.warn(
        "[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"
      );
      Array.from(deprecatedElements).forEach(
        (element) => replaceElement(element, { nameAttr: "icon-name", icons, attrs })
      );
    }
  }
};

// public/js/utils.js
var initIcons = () => createIcons({ icons: { Sun, Moon, Menu, X, MapPin, ArrowDown, ArrowUp, ArrowRight, ArrowLeft, ExternalLink, ChevronDown, Calendar, Clock, Save, Trash2 } });

// public/js/api.js
var getPublishedBlogPost = async (slug2) => {
  const res = await fetch(`/api/blog/${slug2}`);
  if (!res.ok) {
    throw new Error("Error fetching published blog post");
  }
  const data = await res.json();
  return data;
};

// public/js/theme.js
var initThemeToggle = () => {
  const btn = document.getElementById("sunMoon");
  if (!btn) return;
  const isDarkOnLoad = document.documentElement.classList.contains("dark");
  btn.innerHTML = isDarkOnLoad ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
  initIcons();
  btn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
    btn.innerHTML = isDark ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
    initIcons();
  });
};
if (localStorage.theme === "dark" || !("theme" in localStorage)) {
  document.documentElement.classList.add("dark");
}

// public/js/components/navBar.js
var renderNavBar = () => {
  return `
        <header class="fixed top-0 left-0 right-0 py-4 shadow-1xl backdrop-blur-sm z-10 text-white ">
            <div class=" max-w-6xl mx-auto flex justify-between px-4 sm:px-6">
                <a href="/" class="group w-fit my-auto">
                    <h1
                        class=" nav-icon relative inline-block font-semibold text-xl sm:text-2xl tracking-wide 
                        text-sky-500 dark:text-ctp-peach
                        transition-all duration-300 ease-out
                        group-hover:tracking-widest
                        group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.55)]
                        dark:group-hover:drop-shadow-[0_0_14px_rgba(250,179,135,0.45)]">

                        Armand Amores

                        <span
                            class="absolute left-1/2 -translate-x-1/2 -bottom-1
                            h-0.5 w-0
                            bg-sky-500 dark:bg-ctp-peach
                            transition-all duration-300 ease-out
                            group-hover:w-full">
                        </span>
                    </h1>
                </a>
                <nav class="  nav-links gap-4 text-xl flex items-center text-sky-600 dark:text-white" id="navbar">
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

// public/js/post.js
var nav = document.getElementById("nav-mount").innerHTML = renderNavBar();
initThemeToggle();
var slug = window.location.pathname.split("/")[2];
var blogPost = await getPublishedBlogPost(slug);
var post = blogPost.data.post;
console.log(post);
var metaDescription = document.querySelector('meta[name="description"]');
metaDescription.setAttribute(
  "content",
  post.excerpt || `${post.title} \u2014 a blog post by Armand Amores.`
);
document.title = `${post.title} | Armand Amores`;
var date = new Date(post.createdAt);
var dateISO = date.toISOString().split("T")[0];
var dateReadable = date.toLocaleDateString("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric"
});
var dateElement = document.createElement("time");
dateElement.dateTime = dateISO;
dateElement.textContent = dateReadable;
var seperator = document.createElement("span").textContent = "\u2022";
document.getElementById("date").append(dateElement, seperator);
var ttrElem = document.getElementById("ttr");
var ttr = document.createElement("p");
ttr.textContent = `${post.readingTime} min read`;
ttrElem.appendChild(ttr);
var title = document.createElement("h1");
title.textContent = post.title;
title.className = "post-title";
document.getElementById("title").append(title);
var excerpt = document.createElement("h2");
excerpt.textContent = post.excerpt;
document.getElementById("excerpt").appendChild(excerpt);
var tags = post.categories;
tags.forEach((elem) => {
  let tag = document.createElement("div");
  tag.textContent = elem.name;
  tag.className = "tag";
  document.getElementById("categories").appendChild(tag);
});
var container = document.querySelector("#content");
post.content.blocks.forEach((block) => {
  let element;
  switch (block.type) {
    case "header":
      element = document.createElement(`h${block.data.level}`);
      element.innerHTML = DOMPurify.sanitize(block.data.text);
      element.className = `post-heading post-heading--${block.data.level}`;
      break;
    case "paragraph":
      element = document.createElement("p");
      element.innerHTML = DOMPurify.sanitize(block.data.text);
      element.className = "post-paragraph";
      break;
    case "list":
      element = document.createElement(block.data.style === "ordered" ? "ol" : "ul");
      element.className = `post-list post-list--${block.data.style}`;
      block.data.items.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = DOMPurify.sanitize(item.content || item);
        li.className = "post-list__item";
        element.appendChild(li);
      });
      break;
    case "image":
      const figure = document.createElement("figure");
      figure.className = "post-image";
      console.log(block.data);
      element = document.createElement("img");
      element.loading = "lazy";
      element.src = block.data.url + "?w=800&q=75&auto=format";
      element.alt = block.data.caption || "";
      figure.appendChild(element);
      if (block.data.caption) {
        let caption = document.createElement("figcaption");
        caption.innerHTML = DOMPurify.sanitize(block.data.caption);
        figure.appendChild(caption);
      }
      element = figure;
      console.log(element);
      break;
    case "quote":
      element = document.createElement("blockquote");
      element.innerHTML = DOMPurify.sanitize(block.data.text);
      element.className = "post-quote";
      break;
    case "code":
      const pre = document.createElement("pre");
      pre.className = "post-code";
      element = document.createElement("code");
      element.textContent = block.data.code;
      element.className = "post-code__block";
      pre.appendChild(element);
      element = pre;
      break;
    default:
      console.warn(`Unhandled block type: ${block.type}`);
      return;
  }
  container.appendChild(element);
});
var endLine = document.createElement("hr");
container.appendChild(endLine);
var ending = document.createElement("div");
ending.className = "end";
var thanks = document.createElement("p");
thanks.textContent = "Thanks for reading!";
ending.appendChild(thanks);
var more = document.createElement("a");
more.href = "/blog";
more.textContent = "More blog posts";
ending.appendChild(more);
container.appendChild(ending);
var menuBtn = document.getElementById("menuBtn");
var mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
  menuBtn.innerHTML = isOpen ? '<i data-lucide="menu"></i>' : '<i data-lucide="x"></i>';
  initIcons();
});
initIcons();
/*! Bundled license information:

lucide/dist/esm/defaultAttributes.mjs:
lucide/dist/esm/createElement.mjs:
lucide/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide/dist/esm/replaceElement.mjs:
lucide/dist/esm/icons/arrow-down.mjs:
lucide/dist/esm/icons/arrow-left.mjs:
lucide/dist/esm/icons/arrow-right.mjs:
lucide/dist/esm/icons/arrow-up.mjs:
lucide/dist/esm/icons/calendar.mjs:
lucide/dist/esm/icons/chevron-down.mjs:
lucide/dist/esm/icons/clock.mjs:
lucide/dist/esm/icons/external-link.mjs:
lucide/dist/esm/icons/map-pin.mjs:
lucide/dist/esm/icons/menu.mjs:
lucide/dist/esm/icons/moon.mjs:
lucide/dist/esm/icons/save.mjs:
lucide/dist/esm/icons/sun.mjs:
lucide/dist/esm/icons/trash-2.mjs:
lucide/dist/esm/icons/x.mjs:
lucide/dist/esm/lucide.mjs:
  (**
   * @license lucide v1.17.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=post.bundle.js.map
