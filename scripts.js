// Typewriter effect logic
document.addEventListener("DOMContentLoaded", function () {
    const textToType = "Russell de Roeper";
    const typewriterElement = document.querySelector("#typewriter");
    let i = 0;
    const speed = 100;

    function typeWriter() {
        if (i < textToType.length) {
            typewriterElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    if (typewriterElement) {
        typewriterElement.innerHTML = "";
        setTimeout(typeWriter, 500);
    }

    // Obfuscate email
    const emailStr = "russell.roeper" + "@" + "gmail.com";
    const emailDisplay = document.getElementById("email");
    const emailLink = document.getElementById("email-link");

    if (emailDisplay) {
        emailDisplay.textContent = "Email";
    }
    if (emailLink) {
        emailLink.href = "mailto:" + emailStr;
    }

    // Set current year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Scroll reveal animations using Intersection Observer
    const sections = document.querySelectorAll('.fade-in-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Active Navigation Link Highlighting
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });

    // Leaf Interaction (Click and Hover)
    document.addEventListener('mousemove', (e) => {
        const leaves = document.querySelectorAll('.leaf-interactive');
        let hoveringLeaf = false;

        leaves.forEach(leaf => {
            const rect = leaf.getBoundingClientRect();
            const padding = 15;
            if (e.clientX >= rect.left - padding && e.clientX <= rect.right + padding &&
                e.clientY >= rect.top - padding && e.clientY <= rect.bottom + padding) {
                hoveringLeaf = true;
            }
        });

        if (hoveringLeaf) {
            document.body.classList.add('leaf-hover');
        } else {
            document.body.classList.remove('leaf-hover');
        }
    });

    document.addEventListener('click', (e) => {
        const leaves = document.querySelectorAll('.leaf-interactive');
        leaves.forEach(leaf => {
            const rect = leaf.getBoundingClientRect();
            const padding = 15;
            if (e.clientX >= rect.left - padding && e.clientX <= rect.right + padding &&
                e.clientY >= rect.top - padding && e.clientY <= rect.bottom + padding) {

                leaf.classList.add('clicked');

                if (leaf.dataset.clickTimeout) {
                    clearTimeout(parseInt(leaf.dataset.clickTimeout));
                }

                const timeoutId = setTimeout(() => {
                    leaf.classList.remove('clicked');
                }, 600);

                leaf.dataset.clickTimeout = timeoutId.toString();
            }
        });
    });
});
