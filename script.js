// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect (minimal)
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
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

// Observe all sections for fade-in effect
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Download resume function
function downloadResume() {
    const resumeContent = `TOMÁS DE LAS CASAS
Software Engineer
Tenerife, Spain

CONTACT
LinkedIn: https://www.linkedin.com/in/tomas-casas-engel/
GitHub: https://github.com/otoumas
Email: contact@example.com

SUMMARY
Full-stack software engineer with 12+ years of experience across AI, blockchain, 
e-commerce, and fintech. I create robust backend systems and DevOps solutions 
that solve real-world problems.

EXPERIENCE

Senior Software Engineer (2018 - Present)
• Leading backend development and DevOps initiatives across multiple domains
• Architecting scalable systems and mentoring development teams
• Technologies: Python, FastAPI, AWS, Docker, Terraform

Full-Stack Developer (2015 - 2018)
• Developed end-to-end solutions for fintech and transportation industries
• Built robust APIs and responsive frontend applications
• Technologies: Java, SpringBoot, JavaScript, React, PostgreSQL

Software Developer (2012 - 2015)
• Built web applications and learned software engineering fundamentals
• Gained experience in various programming languages and development practices
• Technologies: JavaScript, PHP, MySQL, HTML/CSS

TECHNICAL SKILLS

Languages: Python, TypeScript, JavaScript, Java, Kotlin, Go, Rust
Frameworks: FastAPI, SpringBoot, React, Node.js, Docker, Terraform
Cloud: AWS, Azure, Google Cloud, Kubernetes, Ansible, CI/CD

NOTABLE PROJECTS

• Bimbaylola.com - AI-powered search engine with ML algorithms
• Horizen Zen Block Explorer - Blockchain explorer for Horizen network
• E-commerce Platform - Scalable microservices solution

EXPERTISE
• Backend system architecture and development
• DevOps and cloud infrastructure
• AI/ML integration and vector databases
• Blockchain and cryptocurrency systems
• Cross-industry domain knowledge`;

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

// Add subtle hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add active navigation highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#666';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#000';
        }
    });
});