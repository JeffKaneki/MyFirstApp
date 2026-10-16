console.log("✅ script.js loaded successfully");

function displayWelcome() {
    const userName = "Jefferson Daniel";
    console.log("Welcome message displayed");
    window.alert(`Welcome to ${userName}'s Portfolio!\n\nI'm a BSIT student aspiring to become a game developer.\n\nFeel free to explore my portfolio!`);
}

function updateHeading() {
    const heading = document.querySelector('.home h1');
    if (heading) {
        const originalText = heading.innerHTML;
        console.log("Original heading text:", originalText);
        heading.innerHTML = '<span style="color: orange;">Welcome!</span> Jefferson<span class="dan">Daniel.</span>';
        console.log("Heading updated to welcome message");
    }
}

function applyTheme(theme) {
    console.log("Applying theme:", theme);
    const body = document.body;
    body.classList.toggle('light-theme', theme === 'light');
    body.classList.toggle('dark-theme', theme !== 'light');
    
    if (theme === 'light') {
        body.style.backgroundColor = '#f0f0f0';
        body.style.color = '#333';
        
        const header = document.querySelector('header');
        if (header) {
            header.style.backgroundColor = '#e0e0e0';
        }
        
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            heading.style.color = '#333';
        });
        
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.style.color = '#333';
        });
        
        const listItems = document.querySelectorAll('li');
        listItems.forEach(li => {
            li.style.color = '#333';
        });
        
        const sections = document.querySelectorAll('.home, .about, .skills, .contact, .projects');
        sections.forEach(section => {
            section.style.backgroundColor = '#ffffff';
            section.style.color = '#333';
            section.style.border = '1px solid #ccc';
        });
        
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.backgroundColor = '#ffffff';
            card.style.color = '#333';
            card.style.border = '2px solid #ff9500';
        });
        
        const cardHeadings = document.querySelectorAll('.card h4');
        cardHeadings.forEach(h4 => {
            h4.style.color = '#ff9500';
        });
        
        const footer = document.querySelector('footer');
        if (footer) {
            footer.style.backgroundColor = '#e0e0e0';
            footer.style.color = '#333';
        }
        
        localStorage.setItem('theme', 'light');
        console.log("✅ Light theme applied");
    } else {
        body.style.backgroundColor = '#000000';
        body.style.color = '#ffffff';
        
        const header = document.querySelector('header');
        if (header) {
            header.style.backgroundColor = 'rgb(37, 37, 37)';
        }
        
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            heading.style.color = '#ffffff';
        });
        
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.style.color = '#ffffff';
        });
        
        const listItems = document.querySelectorAll('li');
        listItems.forEach(li => {
            li.style.color = '#ffffff';
        });
        
        const sections = document.querySelectorAll('.home, .about, .skills, .contact, .projects');
        sections.forEach(section => {
            section.style.backgroundColor = 'rgb(51, 51, 51)';
            section.style.color = '#ffffff';
            section.style.border = 'none';
        });
        
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.backgroundColor = 'rgb(51, 51, 51)';
            card.style.color = '#ffffff';
            card.style.border = 'none';
        });
        
        const cardHeadings = document.querySelectorAll('.card h4');
        cardHeadings.forEach(h4 => {
            h4.style.color = '#ff9500';
        });
        
        const footer = document.querySelector('footer');
        if (footer) {
            footer.style.backgroundColor = 'rgb(37, 37, 37)';
            footer.style.color = '#ffffff';
        }
        
        localStorage.setItem('theme', 'dark');
        console.log("✅ Dark theme applied");
    }
}

function toggleTheme() {
    console.log("Toggle theme button clicked");
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

function displayPersonalInfo() {
    console.log("Display personal info button clicked");
    const personalInfo = {
        name: "Jefferson T. Daniel",
        course: "Bachelor of Science in Information Technology (BSIT)",
        school: "Holy Child Central Colleges Inc.",
        location: "Zone 3 Carnation St., Surallah, South Cotabato",
        phone: "09056437339",
        email: "jeffkaneki121@gmail.com",
        facebook: "Jefferson T. Daniel",
        dream: "Game Developer (First Person Shooter games)"
    };
    
    let infoMessage = "📋 PERSONAL INFORMATION\n\n";
    for (const [key, value] of Object.entries(personalInfo)) {
        infoMessage += `${key.toUpperCase()}: ${value}\n`;
    }
    
    console.log("Personal Info Object:", personalInfo);
    window.alert(infoMessage);
}

function modifyElementStyles() {
    console.log("Modifying element styles");
    
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        aboutSection.style.fontSize = '16px';
        aboutSection.style.color = '#ffcc00';
        aboutSection.style.borderRadius = '15px';
        aboutSection.style.padding = '20px';
        aboutSection.style.transition = 'all 0.3s ease';
        console.log("About section styles modified");
    }
    
    const skillsList = document.querySelector('.skills ul');
    if (skillsList) {
        skillsList.style.fontSize = '18px';
        skillsList.style.fontWeight = 'bold';
        console.log("Skills list styles modified");
    }
}

function getElementById(id) {
    console.log(`Getting element with ID: ${id}`);
    return document.getElementById(id);
}

function changeElementStyle(selector, styleObj) {
    console.log(`Changing styles for selector: ${selector}`, styleObj);
    const element = document.querySelector(selector);
    if (element) {
        Object.assign(element.style, styleObj);
        console.log("✅ Styles applied successfully");
        return true;
    }
    console.error("❌ Element not found:", selector);
    return false;
}

function addClickEvent(selector, callback) {
    console.log(`Adding click event to: ${selector}`);
    const element = document.querySelector(selector);
    if (element) {
        element.addEventListener('click', callback);
        console.log("✅ Event listener added");
        return true;
    }
    console.error("❌ Element not found:", selector);
    return false;
}

function openLinkInNewTab(url) {
    if (!url) {
        console.warn('No project link provided for this card.');
        return;
    }
    window.open(url, '_blank', 'noopener');
}

function setupProjectCards() {
    const cards = document.querySelectorAll('.card[data-link]');
    cards.forEach(card => {
        const url = card.dataset.link;
        card.addEventListener('click', () => openLinkInNewTab(url));
        card.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openLinkInNewTab(url);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 DOM fully loaded and parsed");
    console.log("Initializing portfolio features...");
    
    displayWelcome();
    
    updateHeading();
    
    modifyElementStyles();
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
    console.log("Saved theme loaded:", savedTheme);
    
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
        console.log("✅ Theme toggle button ready");
    }
    
    const infoBtn = document.getElementById('personalInfoBtn');
    if (infoBtn) {
        infoBtn.addEventListener('click', displayPersonalInfo);
        console.log("✅ Personal info button ready");
    }

    setupProjectCards();
    console.log("✅ Project cards click handlers ready");
    
    console.log("🎉 All portfolio features initialized successfully!");
});

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    console.log("Page scroll position:", scrollPosition);
});

console.log("All navigation links found:");
document.querySelectorAll('a').forEach((link, index) => {
    console.log(`Link ${index + 1}:`, link.href, link.textContent);
});

window.addEventListener('load', function() {
    console.log("✅ All resources (images, stylesheets, etc.) loaded");
    console.log("📊 Page Load Time:", new Date().getTime());
    console.log("🎊 Portfolio is ready for interaction!");
});
