// EDIT CONTENT HERE:
// Most website text, images, sponsors, timeline items, and GoFundMe figures are managed in this file.
// Keep quotes, commas, and brackets in place when changing content.
const teamMembers = [
  { name: "Samhith Alluri", role: "Project Manager", image: "" },
  { name: "Jai Roda", role: "Digital Operations", image: "" },
  { name: "Ryan Vaidya", role: "Chief Engineer", image: "" },
  { name: "Rutvij Patel", role: "Chief Manufacturer", image: "" },
  { name: "Hashir Husain", role: "Logistics Manager", image: "" }
];

const goFundMeCampaign = {
  url: "https://www.gofundme.com/f/2026-stem-racing-world-finals-help-typhoon-reach-singapore",
  title: "Help Typhoon reach Singapore",
  // Update these figures manually from the GoFundMe page when needed.
  raised: 4737,
  goal: 5000,
  donations: 67,
  overallCampaignCost: 70000,
  lastChecked: "7 July 2026"
};

// When adding sponsors, keep a comma between each sponsor object.
// Example: { name: "Sponsor", logo: "assets/sponsors/logo.svg", website: "https://example.com" },
const sponsors = [
  {
    tier: "Major Partners",
    size: "hero",
    logos: [
 //     { name: "STEM Racing Australia", logo: "assets/sponsors/STEM Racing TM_Location_Logo_RGB_Australia.svg", website: "https://www.rea.org.au" },
      { name: "Re-Engineering Foundation", logo: "assets/sponsors/REALONG.svg", website: "https://www.rea.org.au" },
      { name: "Alamanda K-9 College", logo: "assets/sponsors/alamanda.svg", website: "https://www.alamandacollege.vic.edu.au/" },
      { name: "Homestead Senior Secondary College", logo: "assets/sponsors/hssc.svg", website: "https://www.homesteadssc.vic.edu.au/" }
    ]
  },
  {
    tier: "Principal Partners",
    size: "featured",
    logos: [
  //    { name: "Department of Education", logo: "", website: "https://www.vic.gov.au/department-education" },
    ]
  },
  {
    tier: "Team Partners",
    size: "featured",
    logos: [
  //    { name: "Leap Australia", logo: "", website: "https://www.leapaust.com.au/" },
 //     { name: "Ansys", logo: "assets/sponsors/ansys-logo-yellow-skew-black-text.svg", website: "https://www.ansys.com" }
    ]
  },
  {
    tier: "Associate Partners",
    size: "support",
    logos: [
//      { name: "Kwik Kopy Hoppers Crossing", logo: "", website: "https://kwikkopy.com.au/location/vic/hoppers-crossing" }
    ]
  },
  {
    tier: "Team Sponsors",
    size: "support",
    logos: [
 //     { name: "Clickup", logo: "", website: "https://www.clickup.com/" },
 //     { name: "ANCA CNC Machines", logo: "", website: "https://www.anca.com/" },
  //    { name: "Noone", logo: "", website: "https://www.noone.com.au/" },
  //    { name: "S-Trend", logo: "", website: "https://www.s-trend.com.au/" }
  //    { name: "Trotec", logo: "", website: "https://www.troteclaser.com/en-au/" }
    ]
  }
];

const timelineItems = [
  {
    competition: "2024 F1 in Schools Victorian State Finals",
    date: "2024",
    location: "Wyndham Tech School, VIC",
    awards: [
      "1st Place Overall Professional Class",
      "1st Place Overall Junior Professional Class",
      "Best Team Portfolio",
      "Best Engineered Car",
      "Best Manufactured Car",
      "Best Team Graphic Design",
      "Racing: 5th Net Lap, 7th Gross Lap, 6th Grand Prix"
    ],
    image: "assets/f1 photo insta.png"
  },
  {
    competition: "2025 STEM Racing Australian National Finals",
    date: "2025",
    location: "St Bede's College, VIC",
    awards: [
      "6th Place Overall Professional Class",
      "Best Team Trade Display",
      "Racing: 8th Net Lap, 13th Gross Lap, 7th Grand Prix"
    ],
    image: "assets/128A7700.jpg"
  },
  {
    competition: "2025 STEM Racing Victorian National Finals",
    date: "2025",
    location: "Wyndham Tech School, VIC",
    awards: [
      "1st Place Overall Professional Class",
      "1st Place Overall Junior Professional Class",
      "Fastest Lap",
      "Best Grand Prix",
      "Best Engineered",
      "Best Team Portfolio",
      "Best Team Marketing",
      "Best Graphic Design",
      "Best Team Trade Display",
      "Students' Choice",
      "Knockout Racing Semi-Finalists",
      "Racing: 1st Net Lap, 2nd Gross Lap, 1st Grand Prix"
    ],
    image: "assets/158A0058.jpg"
  },
  {
    competition: "2026 STEM Racing Australian National Finals",
    date: "2026",
    location: "St Bede's College, VIC",
    awards: [
      "4th Place Overall Professional Class",
      "Best Reaction Time",
      "Best Engineering CAD",
      "Knockout Racing Semi-Finalists",
      "Racing: 2nd Net Lap, 1st Gross Lap, 2nd Grand Prix"
    ],
    image: "assets/National Finals 26.JPG"
  },
  {
    competition: "2026 STEM Racing World Finals",
    date: "3-8 October 2026",
    location: "Resorts World Sentosa, Singapore",
    awards: [
      "Typhoon will represent Australia against more than 100 teams from 67 countries"
    ],
    image: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const blogPosts = [
  {
    id: "world-finals",
    title: "Typhoon Qualifies for the 2026 World Finals",
    date: "October 2026",
    category: "Racing",
    snippet: "Typhoon will represent Australia at Resorts World Sentosa, Singapore, from 3 to 8 October 2026.",
    image: "assets/Cover.46.png",
    body: [
      "Typhoon has earned a place at the 2026 STEM Racing World Finals, supported by Formula 1, at Resorts World Sentosa in Singapore.",
      "For Typhoon, qualification means representing Alamanda K-9 College, Homestead Senior Secondary College, Point Cook, and Australia in the same week as the Singapore Formula 1 Grand Prix."
    ]
  },
  {
    id: "what-is-stem-racing",
    title: "What STEM Racing Really Measures",
    date: "2026 Campaign",
    category: "Engineering",
    snippet: "The miniature car is only one part of a competition built around engineering, enterprise, and communication.",
    image: "assets/Cover.46.png",
    body: [
      "STEM Racing is a global Formula 1-supported competition where students design, manufacture, test, and race miniature Formula 1-style cars. Teams must also manage budgets, sponsorship, branding, portfolios, pit displays, and verbal presentations.",
      "The car may complete the track in little more than one second, but that second represents months or years of research, testing, documentation, manufacturing, and teamwork."
    ]
  },
  {
    id: "national-finals",
    title: "Fourth in Australia, Fastest Gross Lap",
    date: "2026 National Finals",
    category: "Racing",
    snippet: "At the 2026 Australian National Finals, Typhoon placed 4th overall and won Best Reaction Time and Best Engineering CAD.",
    image: "assets/Cover.46.png",
    body: [
      "Typhoon finished 4th overall in the Professional Class at the 2026 STEM Racing Australian National Finals at St Bede's College in Mentone.",
      "The team also received Best Reaction Time and Best Engineering CAD, reached the knockout racing semi-finals, and placed 1st in Gross Lap, 2nd in Net Lap, and 2nd in Grand Prix racing."
    ]
  },
  {
    id: "public-school-collaboration",
    title: "Two Public Schools, One Team",
    date: "2026 Campaign",
    category: "Partnerships",
    snippet: "Typhoon combines students from Alamanda K-9 College and Homestead Senior Secondary College in Point Cook.",
    image: "assets/Cover.46.png",
    body: [
      "Typhoon is a collaboration between two public school communities in Melbourne's west: Alamanda K-9 College and Homestead Senior Secondary College.",
      "The partnership gives students a broader platform to develop engineering, manufacturing, digital operations, logistics, presentation, and enterprise skills while competing internationally."
    ]
  }
];

const pages = {
  home: renderHome,
  about: renderAbout,
  journey: renderJourney,
  // blog: renderBlog,
  partners: renderPartners
};

const app = document.querySelector("#app");
const navLinks = document.querySelector("#navLinks");
const menuButton = document.querySelector("#menuButton");
const modal = document.querySelector("#articleModal");
const modalContent = document.querySelector("#modalContent");
let countdownTimer;

const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.body.addEventListener("click", (event) => {
  const route = event.target.closest(".route-link");
  if (!route) return;
  navLinks.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
});

window.addEventListener("hashchange", renderRoute);
document.addEventListener("click", handleBlogClicks);
document.addEventListener("click", handleModalClose);

function currentRoute() {
  return window.location.hash.replace("#", "") || "home";
}

function renderRoute() {
  const route = currentRoute();
  const renderer = pages[route] || pages.home;
  clearInterval(countdownTimer);
  app.innerHTML = renderer();
  window.scrollTo({ top: 0, behavior: "auto" });
  updateActiveNav(route);
  observeRevealElements();
  initCountdown();
  initGoFundMe();
}

function updateActiveNav(route) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${route}`);
  });
}

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function initCountdown() {
  const countdown = document.querySelector("#worldFinalsCountdown");
  if (!countdown) return;

  const targetDate = new Date("2026-10-03T00:00:00+08:00").getTime();
  const units = {
    days: countdown.querySelector("[data-countdown-days]"),
    hours: countdown.querySelector("[data-countdown-hours]"),
    minutes: countdown.querySelector("[data-countdown-minutes]"),
    seconds: countdown.querySelector("[data-countdown-seconds]")
  };

  const update = () => {
    const remaining = Math.max(0, targetDate - Date.now());
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    units.days.textContent = String(days);
    units.hours.textContent = String(hours).padStart(2, "0");
    units.minutes.textContent = String(minutes).padStart(2, "0");
    units.seconds.textContent = String(seconds).padStart(2, "0");
  };

  update();
  countdownTimer = setInterval(update, 1000);
}

function formatMoney(value) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0
  }).format(value);
}

function updateGoFundMeCards(stats) {
  const percent = Math.min(100, Math.round((stats.raised / stats.goal) * 100));

  document.querySelectorAll("[data-gofundme-card]").forEach((card) => {
    card.querySelector("[data-gofundme-raised]").textContent = formatMoney(stats.raised);
    card.querySelector("[data-gofundme-goal]").textContent = formatMoney(stats.goal);
    card.querySelector("[data-gofundme-donations]").textContent = `${stats.donations} donations`;
    card.querySelector("[data-gofundme-percent]").textContent = `${percent}% raised`;
    card.querySelector("[data-gofundme-progress]").style.width = `${percent}%`;
    card.querySelector("[data-gofundme-status]").textContent = `Last updated on ${stats.lastChecked}`;
  });
}

function initGoFundMe() {
  const cards = document.querySelectorAll("[data-gofundme-card]");
  if (!cards.length) return;
  updateGoFundMeCards(goFundMeCampaign);
}

function renderGoFundMeSection() {
  return `
    <section class="gofundme-section">
      <div class="gofundme-card reveal" data-gofundme-card>
        <div>
          <p class="eyebrow">World Finals GoFundMe</p>
          <h2>${goFundMeCampaign.title}</h2>
          <p>
            Donations through GoFundMe support our wider target of ${formatMoney(goFundMeCampaign.overallCampaignCost)} for our World Finals campaign, helping with travel, accommodation, competition logistics, and team materials for Singapore.
          </p>
          <a class="primary-button" href="${goFundMeCampaign.url}">Donate on GoFundMe</a>
        </div>
        <div class="gofundme-meter">
          <div class="gofundme-total">
            <strong data-gofundme-raised>${formatMoney(goFundMeCampaign.raised)}</strong>
            <span>raised out of <b data-gofundme-goal>${formatMoney(goFundMeCampaign.goal)}</b></span>
          </div>
          <div class="gofundme-progress" aria-hidden="true">
            <span data-gofundme-progress style="width: ${Math.round((goFundMeCampaign.raised / goFundMeCampaign.goal) * 100)}%"></span>
          </div>
          <div class="gofundme-meta">
            <span data-gofundme-donations>${goFundMeCampaign.donations} donations</span>
            <span data-gofundme-percent>${Math.round((goFundMeCampaign.raised / goFundMeCampaign.goal) * 100)}% funded</span>
          </div>
          <p class="gofundme-status" data-gofundme-status>GoFundMe figures last checked on ${goFundMeCampaign.lastChecked}</p>
        </div>
      </div>
    </section>
  `;
}

function renderHome() {
  return `
    <section class="hero-section page-shell">
      <div class="hero-media">
        <img src="assets/Cover.46.png" />
      </div>
      <div class="hero-overlay"></div>
      <div class="relative z-10 mx-auto flex min-h-[94vh] max-w-7xl items-end px-6 pb-16 pt-32">
        <div class="max-w-5xl">
          <p class="kicker reveal">Welcome to the official website of</p>
          <h1 class="mt-5 max-w-5xl text-6xl font-black uppercase leading-[0.86] tracking-normal sm:text-8xl lg:text-[9.5rem]">
            Typhoon.
          </h1>
          <p class="mt-6 max-w-3xl text-xl font-semibold leading-8 text-white/78">
            From Melbourne to Singapore: Representing Australia at the 2026 STEM Racing World Finals.
          </p>
          <div class="mt-9 flex flex-wrap items-center gap-4">
            <a href="#journey" class="route-link primary-button">Our Story</a>
            <a href="#partners" class="route-link secondary-button">GoFundMe</a>
          </div>
        </div>
      </div>
    </section>

    <section class="proof-strip">
      <div class="mx-auto grid max-w-7xl gap-px px-6 sm:grid-cols-2 lg:grid-cols-4">
        ${[
          ["World Finals", "Singapore, 3-8 October 2026"],
          ["4th in Australia", "2026 National Finals"],
          ["2nd fastest in Australia", "1.081s"],
          ["1st in Victoria", "2024 & 2025 State Finals"]
        ].map(([stat, detail]) => `
          <div class="proof-item reveal">
            <strong>${stat}</strong>
            <span>${detail}</span>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="countdown-section">
      <div id="worldFinalsCountdown" class="countdown-panel reveal" aria-label="Countdown to the 2026 STEM Racing World Finals">
        <div>
          <p class="eyebrow">World Finals Countdown</p>
          <h2>Lights out and away in</h2>
          <p>Resorts World Sentosa, Singapore | 3-8 October 2026</p>
        </div>
        <div class="countdown-grid">
          <span><strong data-countdown-days>0</strong><small>Days</small></span>
          <span><strong data-countdown-hours>00</strong><small>Hours</small></span>
          <span><strong data-countdown-minutes>00</strong><small>Minutes</small></span>
          <span><strong data-countdown-seconds>00</strong><small>Seconds</small></span>
        </div>
      </div>
    </section>

    ${renderGoFundMeSection()}

    <section class="editorial-section">
      <div class="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div class="editorial-copy reveal">
          <p class="eyebrow">Who are we?</p>
          <h2>Five students<br>Three years<br>One goal</h2>
          <p>
            Typhoon is a five-student collaboration between Alamanda K-9 College and Homestead Senior Secondary College. Over the past three years, we have grown through state and national competitions, and we are now reaching the global stage to represent Australia.
          </p>
        </div>
        <div class="feature-image reveal">
          <img src="assets/National Finals 26 copy 2.JPG" alt="Typhoon racing campaign artwork" />
        </div>
      </div>
    </section>

    <section class="editorial-section light-section">
      <div class="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div class="feature-image reveal">
          <img src="assets/National Finals 26 copy.JPG" alt="Typhoon car and branding artwork" />
        </div>
        <div class="editorial-copy reveal">
          <p class="eyebrow">What is STEM Racing?</p>
          <h2>Student entrepreneurship at its finest.</h2>
          <p>
           STEM Racing is a global challenge where miniature race cars become full-scale learning. Teams design, manufacture, and race miniature Formula 1-style cars, but success is judged across far more than speed. Engineering, testing, project management, portfolios, enterprise, branding, finance, presentations, and regulations all contribute to the final result, making the competition a complete test of innovation, professionalism, and student-led entrepreneurship.
          </p>
          <a href="#about" class="route-link text-link">Read more about the team</a>
        </div>
      </div>
    </section>

    <section class="social-band">
      <div class="mx-auto max-w-7xl px-6 text-center">
        <p class="eyebrow reveal">Follow our socials</p>
        <h2 class="reveal">Follow the campaign</h2>
        <div class="mt-7 flex flex-wrap justify-center gap-3 reveal">
          <a class="social-pill" href="https://instagram.com/typhoonracing.aus"><span>Instagram</span><small>@typhoonracing.aus</small></a>
          <a class="social-pill" href="https://linkedin.com/company/typhoonracing"><span>LinkedIn</span><small>Typhoon - STEM Racing Team</small></a>
        </div>
      </div>
    </section>

    ${renderSponsorSection()}
  `;
}

function renderSponsors() {
  return sponsors
    .filter((tier) => tier.logos.length > 0)
    .map((tier) => `
    <section class="sponsor-wall reveal">
      <h3>${tier.tier}</h3>
      <div class="sponsor-logo-wall ${tier.size}">
        ${tier.logos.map((sponsor) => `
          <a class="sponsor-logo-card" href="${sponsor.website || "#"}" aria-label="${sponsor.name}">
            ${sponsor.logo ? `<img src="${sponsor.logo}" alt="${sponsor.name} logo" onerror="this.classList.add('is-missing')" />` : ""}
            <span>${sponsor.name}</span>
          </a>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function renderSponsorSection() {
  return `
    <section class="sponsor-wall-section">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-12 text-center reveal">
          <p class="eyebrow">Thank you to all our</p>
          <h2>Partners</h2>
        </div>
        ${renderSponsors()}
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
${pageIntro("About Us", "Five students<br>Four competitions<br>Three years<br>Two schools<br>One team")}
    <section class="section-pad pt-8">
      <div class="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-5">
        ${teamMembers.map((member) => `
          <article class="profile-card reveal">
            ${member.image ? `<img src="${member.image}" alt="${member.name}" />` : `<div class="profile-initials" aria-hidden="true">${getInitials(member.name)}</div>`}
            <div class="profile-body">
              <h2>${member.name}</h2>
              <p>${member.role}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="school-section">
      <div class="mx-auto max-w-7xl px-6">
        <div class="reveal">
          <p class="kicker">Collaboration</p>
          <h2 class="section-title">Two schools<br>One team</h2>
          <p class="mt-5 max-w-3xl text-base leading-8 text-white/65">
            Typhoon is a collaborative team with four students from Homestead Senior Secondary College and one student from Alamanda K-9 College.
          </p>
        </div>
        <div class="school-wide-photo reveal">
            <img src="assets/National Finals 26 copy 3.JPG" alt="Group picture from the 2026 STEM Racing Australian National Finals" />
        </div>
        <div class="school-card-grid">
          <article class="school-card reveal">
            <h2>Alamanda K-9 College</h2>
            <p>Alamanda K-9 College is a leading K-9 school in Melbourne's west. Alamanda is a long-standing competitor in STEM Racing, notably being crowned the 2023 F1 in Schools Development Class Champion and competing at the 2023 F1 in Schools World Finals.</p>
            <span>86-100 Alamanda Boulevard, Point Cook VIC 3030, Australia</span>
          </article>
          <article class="school-card reveal">
            <h2>Homestead Senior Secondary College</h2>
            <p>Homestead Senior Secondary College is a Years 10-12 senior high school in Melbourne's west. Homestead joined STEM Racing in 2026 when four of Typhoon's members graduated from Alamanda and transitioned to Homestead.</p>
            <span>9 Coaching Parade, Point Cook VIC 3030, Australia</span>
          </article>
        </div>
      </div>
    </section>
    ${renderSponsorSection()}
  `;
}

function renderJourney() {
  return `
    ${pageIntro("Our Story", "From Victorian champions to the World Finals.", "Typhoon has progressed through two Victorian State and two Australian National competitions to earn a place representing Australia at the 2026 STEM Racing World Finals in Singapore.", "story-intro")}
    <section class="section-pad pt-8">
      <div class="timeline mx-auto max-w-5xl px-6">
        ${timelineItems.map((item) => `
          <article class="timeline-item reveal">
            <div class="timeline-node"></div>
            <div class="timeline-card">
              <img src="${item.image}" alt="${item.competition}" />
              <div class="p-6">
                <p class="text-xs font-bold uppercase tracking-[0.22em] text-electric">${item.date} · ${item.location}</p>
                <h2 class="mt-3 text-2xl font-black">${item.competition}</h2>
                <div class="award-list">
                  ${item.awards.map((award) => `<p>${award}</p>`).join("")}
                </div>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    ${renderSponsorSection()}
  `;
}

function renderBlog() {
  return `
    ${pageIntro("Latest News", "Stories from the workshop, track, and world finals campaign.", "Open any article to view the full post. New posts can be added by duplicating one object in the blogPosts array.")}
    <section class="section-pad pt-8">
      <div class="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4">
        ${blogPosts.map((post) => `
          <button class="blog-card reveal" type="button" data-post-id="${post.id}">
            <img src="${post.image}" alt="${post.title}" />
            <span>${post.category}</span>
            <h2>${post.title}</h2>
            <p class="date">${post.date}</p>
            <p>${post.snippet}</p>
          </button>
        `).join("")}
      </div>
    </section>
    ${renderSponsorSection()}
  `;
}

function renderPartners() {
  return `
    ${pageIntro("Support Us", "Help Typhoon reach Singapore.", "Support can come through donations, sponsorship, in-kind services, mentoring, or helping us connect with people who can back the campaign.")}
    ${renderGoFundMeSection()}
    <section class="support-photo-section">
      <div class="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-3">
        ${[
          ["assets/158A0054.jpg", "National Finals campaign"],
          ["assets/128A7667.jpg", "Best Team Trade Display"],
          ["assets/National Finals 26 copy 4.JPG", "Knockout Finals Group Stage"]
        ].map(([src, alt]) => `
          <div class="support-photo-slot reveal">
            <img src="${src}" alt="${alt}" />
          </div>
        `).join("")}
      </div>
    </section>
    <section class="section-pad pt-8">
      <div class="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="reveal">
          <div class="pitch-card">
            <p class="eyebrow">Sponsorship</p>
            <h2>Why partner with Typhoon?</h2>
            <div class="mt-6 grid gap-4">
              ${[
                ["Public Schools in Melbourne's West", "Support students from public schools in Melbourne's western suburbs as they represent Australia and compete against the best schools from across the globe."],
                ["Australia's STEM Future", "Invest in the next generation of Australian engineers, innovators, and future industry leaders."],
                ["Formula 1 Connection and Global Scale", "Align with a global STEM competition directly connected to Formula 1, bringing together the world's brightest students."],
                ["Recognition", "Gain meaningful brand exposure across our uniforms, portfolios, trade display, website, social media, and international competition presence."]
              ].map(([title, text]) => `
                <div class="benefit-row">
                  <span></span>
                  <div>
                    <h3>${title}</h3>
                    <p>${text}</p>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
        <div class="contact-panel reveal">
          <form action="https://formsubmit.co/typhoon.racing.sponsorship.aus@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New Typhoon website enquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
            <label>Email<input type="email" name="email" placeholder="name@example.com" required /></label>
            <label>Subject<input type="text" name="subject" placeholder="What is your enquiry about?" required /></label>
            <label>Message<textarea rows="6" name="message" placeholder="Write your message here." required></textarea></label>
            <button class="primary-button w-full justify-center" type="submit">Send Enquiry</button>
          </form>
          <div class="mt-7 grid gap-2 text-sm text-white/60">
            <p><strong class="text-white">Email:</strong> typhoon.racing.sponsorship.aus@gmail.com</p>
            <p><strong class="text-white">Contact:</strong> Samhith Alluri</p>
            <p><strong class="text-white">Mobile:</strong> +61 424 322 444</p>
            <p><strong class="text-white">Location:</strong> Point Cook, Melbourne, Victoria</p>
          </div>
        </div>
      </div>
    </section>
    ${renderSponsorSection()}
  `;
}

function pageIntro(label, title, copy = "", className = "") {
  return `
    <section class="page-intro ${className}">
      <div class="mx-auto max-w-7xl px-6 pt-36">
        <p class="kicker reveal">${label}</p>
        <h1 class="mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">${title}</h1>
        ${copy ? `<p class="mt-6 max-w-2xl text-lg leading-8 text-white/68">${copy}</p>` : ""}
      </div>
    </section>
  `;
}

function handleBlogClicks(event) {
  const card = event.target.closest("[data-post-id]");
  if (!card) return;
  const post = blogPosts.find((item) => item.id === card.dataset.postId);
  if (!post) return;
  modalContent.innerHTML = `
    <img class="modal-image" src="${post.image}" alt="${post.title}" />
    <div class="p-6 sm:p-8">
      <p class="kicker">${post.category} · ${post.date}</p>
      <h2 id="modalTitle" class="mt-4 text-3xl font-black sm:text-5xl">${post.title}</h2>
      <div class="mt-6 space-y-5 text-base leading-8 text-white/68">
        ${post.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
    </div>
  `;
  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function handleModalClose(event) {
  if (!event.target.closest("[data-close-modal]")) return;
  modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

function observeRevealElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.16 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

renderRoute();
