// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Download resume function
function downloadResume() {
    // Create a simple resume content
    const resumeContent = `
TOMÁS DE LAS CASAS
Software Engineer
Tenerife, Spain

CONTACT
LinkedIn: https://www.linkedin.com/in/tomas-casas-engel/
GitHub: https://github.com/otoumas

EXPERIENCE
12+ years in Software Engineering
Specializing in Backend Systems and DevOps

TECHNICAL SKILLS
Languages: Python, TypeScript, JavaScript, Java, Kotlin, Go, Rust, Bash
Frameworks: FastAPI, SpringBoot, Dropwizard, Flask, Node.js, React/Redux, Electron, OClif
DevOps: Docker, Terraform, Ansible, AWS, Azure, GCloud, Linode
Domains: AI, Blockchain, E-commerce, Transportation, Finance

NOTABLE PROJECTS
• Bimbaylola.com - AI-powered search engine
• Horizen Zen Block Explorer - Blockchain explorer for Horizen network

EXPERTISE
• Backend system architecture and development
• DevOps and cloud infrastructure
• Frontend and mobile application development
• Cross-industry domain knowledge
        `;

    const blob = new Blob([resumeContent], {type: 'text/plain'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Tomas_de_las_Casas_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Add some interactive effects
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });

    tag.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});