// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Changelog", href: "/changelog" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Avtomat Kalashnikova",
    href: "ak",
    items: [
      { title: "AK1 - Password Spray", href: "/password-spray" },
      { title: "AK2 - Golden Ticket", href: "/golden-ticket" },
    ],
  },
  {
    title: "LIYA",
    href: "liya",
    items: [
      { title: "Subdomain Enumeration: Subfinder + Httpx", href: "/subdomain-enumeration" },
      { title: "Port Scanning: Nmap + Masscan", href: "/port-scanning" },
      { title: "Screenshots: Eyewitness + Aquatone", href: "/screenshots" },
      { title: "Content Discovery: Dirsearch + Seclists", href: "/content-discovery" },
      { title: "Link Extraction: Waybackurls + Gau", href: "/link-extraction" },
      { title: "Directory Fuzzing: Gobuster + Rockyou.txt", href: "/directory-fuzzing" },
      { title: "Parameter Fuzzing: FFUF + ParamMiner", href: "/parameter-fuzzing" },
    ],    
  },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
