// Website content data
const websiteContent = {
  hero: {
    title: 'Deals Genie by deallzap',
    tagline: 'Your Smart Shopping Companion on Telegram llllllllllllllllllllllllllllllllllll',
    ctaLink: 'https://t.me/TheDealsGenieBot',
    ctaText: 'Start Using Bot',
  },
  features: [
    {
      icon: '📌',
      title: 'Multi-platform Tracking',
      description: 'Track products across Amazon, Flipkart, Myntra, and Ajio',
    },
    {
      icon: '🧾',
      title: 'Smart Wishlist',
      description: 'Organize and manage your shopping wishlist',
    },
    {
      icon: '💰',
      title: 'Price Monitoring',
      description: 'Automatic real-time price tracking',
    },
    {
      icon: '📉',
      title: 'Price Alerts',
      description: 'Instant notifications when prices drop',
    },
    {
      icon: '📊',
      title: 'Price History',
      description: 'Visual price trends and history',
    },
    {
      icon: '🤖',
      title: 'AI Shopping Assistant',
      description: 'Gemini-powered smart recommendations',
    },
    {
      icon: '🧠',
      title: 'Auto Categorization',
      description: 'Smart product organization',
    },
    {
      icon: '🛡️',
      title: 'Spam Protection',
      description: 'Advanced abuse prevention',
    },
    {
      icon: '🔁',
      title: 'Reliable Service',
      description: 'Smart fallback mechanisms',
    },
  ],
  steps: [
    {
      number: 1,
      title: 'Paste Product Link',
      description: 'Share any supported product URL with the bot',
    },
    {
      number: 2,
      title: 'Track Prices',
      description: 'Get real-time price monitoring',
    },
    {
      number: 3,
      title: 'Receive Alerts',
      description: 'Get notified when prices drop',
    },
  ],
  about: {
    title: 'About Deals Genie',
    description:
      'Deals Genie is your intelligent shopping companion that combines advanced web scraping technology with Gemini AI to deliver the best shopping experience. Our secure and trusted platform helps you make informed purchasing decisions and never miss a deal.',
  },
  footer: {
    links: [
      {
        text: 'Join Our Telegram Channel',
        url: 'https://t.me/deallzap',
      },
      {
        text: 'Visit Website',
        url: 'https://deallzap.com',
      },
    ],
    credit: 'Made by ❤️ Deallzap',
  },
};

// Bot commands data
const botCommands = [
  {
    command: '/start',
    description: 'Start interacting with the bot',
    example: 'Type /start to begin using the bot',
  },
  {
    command: '/help',
    description: 'Get help on how to use the bot',
    example: 'Type /help to see all available commands and instructions',
  },
  {
    command: '/add',
    description: 'Add a product to your wishlist',
    example: 'Type /add followed by the product URL',
  },
  {
    command: '/wishlist',
    description: 'View your entire wishlist',
    example: 'Type /wishlist to see all saved items',
  },
  {
    command: '/check_prices',
    description: 'Manually check prices of all wishlist items',
    example: 'Type /check_prices to update all product prices',
  },
  {
    command: '/notifications',
    description: 'Toggle price drop alerts on or off',
    example: 'Type /notifications to enable/disable alerts',
  },
  {
    command: '/about',
    description: 'Learn more about the bot and its features',
    example: 'Type /about to see bot information',
  },
  {
    command: '/remove',
    description: 'Remove an item from your wishlist',
    example: 'Type /remove followed by the item number',
  },
  {
    command: '/clear',
    description: 'Clear your wishlist entirely',
    example: 'Type /clear to delete all items (requires confirmation)',
  },
  {
    command: '/assistant',
    description: 'Ask Gemini shopping assistant',
    example: 'Type /assistant "Suggest budget laptops under ₹30K"',
  },
];

// Create Hero Section
function createHeroSection() {
  const section = document.createElement('section');
  section.className = 'hero';

  section.innerHTML = `
    <div class="hero-content animate-fade-in">
      <h1>${websiteContent.hero.title}</h1>
      <p class="tagline">${websiteContent.hero.tagline}</p>
      <a href="${websiteContent.hero.ctaLink}" class="cta-button">${websiteContent.hero.ctaText}</a>
    </div>
  `;

  return section;
}

// Create Features Section
function createFeaturesSection() {
  const section = document.createElement('section');
  section.className = 'features';

  const featuresHTML = websiteContent.features
    .map(
      (feature) => `
    <div class="feature-card">
      <span class="feature-icon">${feature.icon}</span>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    </div>
  `
    )
    .join('');

  section.innerHTML = `
    <h2>Features</h2>
    <div class="features-grid">
      ${featuresHTML}
    </div>
  `;

  return section;
}

// Create Commands Section
function createCommandsSection() {
  const section = document.createElement('section');
  section.className = 'commands';

  const commandsHTML = botCommands
    .map(
      (cmd) => `
    <div class="command-item">
      <h3>${cmd.command}</h3>
      <p>${cmd.description}</p>
      <small>${cmd.example}</small>
    </div>
  `
    )
    .join('');

  section.innerHTML = `
    <h2>Bot Commands</h2>
    <div class="commands-grid" id="commands-container">
      ${commandsHTML}
    </div>
  `;

  return section;
}

// Create How It Works Section
function createHowItWorksSection() {
  const section = document.createElement('section');
  section.className = 'how-it-works';

  const stepsHTML = websiteContent.steps
    .map(
      (step) => `
    <div class="step">
      <div class="step-number">${step.number}</div>
      <h3>${step.title}</h3>
      <p>${step.description}</p>
    </div>
  `
    )
    .join('');

  section.innerHTML = `
    <h2>How It Works</h2>
    <div class="steps">
      ${stepsHTML}
    </div>
  `;

  return section;
}

// Create About Section
function createAboutSection() {
  const section = document.createElement('section');
  section.className = 'about';

  section.innerHTML = `
    <h2>${websiteContent.about.title}</h2>
    <p>${websiteContent.about.description}</p>
  `;

  return section;
}

// Create Footer
function createFooter() {
  const footer = document.createElement('footer');

  const linksHTML = websiteContent.footer.links
    .map((link) => `<a href="${link.url}">${link.text}</a>`)
    .join('');

  footer.innerHTML = `
    <div class="footer-links">
      ${linksHTML}
    </div>
    <p class="footer-text">${websiteContent.footer.credit}</p>
  `;

  return footer;
}

// Initialize website
function initializeWebsite() {
  const app = document.getElementById('app');

  // Add all sections
  app.appendChild(createHeroSection());
  app.appendChild(createFeaturesSection());
  app.appendChild(createCommandsSection());
  app.appendChild(createHowItWorksSection());
  app.appendChild(createAboutSection());
  app.appendChild(createFooter());

  // Initialize Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) scale(1)';
      }
    });
  }, observerOptions);

  // Add animations to elements
  document
    .querySelectorAll('.feature-card, .step, .command-item')
    .forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px) scale(0.95)';
      element.style.transition = 'all 0.5s ease-out';
      element.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(element);
    });

  // Add hover effects for feature cards
  document.querySelectorAll('.feature-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Add smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeWebsite);
