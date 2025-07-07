document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = 0;
    heroContent.style.transform = 'translateY(30px)';
    setTimeout(() => {
        heroContent.style.transition = 'all 1s ease';
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateY(0)';
    }, 200);
});


document.addEventListener("DOMContentLoaded", () => {
    const aboutCards = document.querySelectorAll(".about-card");

    function checkScroll() {
        aboutCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // Toggle Menu
    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent click from closing menu
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            navLinks.classList.remove("active");
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove("active");
        }
    });
});


        async function loadEvents() {
            const eventCardsContainer = document.getElementById('eventCards');
            eventCardsContainer.innerHTML = '<p>Loading events...</p>';

            try {
                const querySnapshot = await getDocs(collection(db, "events"));
                eventCardsContainer.innerHTML = '';

                querySnapshot.forEach((doc) => {
                    const event = doc.data();
                    // Use a wrapper div for the image to help with styling
                    const eventCard = `
                        <div class="event-card">
                            <div class="event-card-img-wrapper">
                                <img src="${event.imageUrl}" alt="${event.title}" onload="this.style.height=(this.naturalHeight>this.naturalWidth?'300px':'180px');this.style.width=(this.naturalHeight>this.naturalWidth?'auto':'100%');this.style.objectFit='cover';">
                            </div>
                            <div class="event-card-body">
                                <h3 class="event-card-title">${event.title || ''}</h3>
                                <p class="event-card-date">${event.date || ''}</p>
                                <p class="event-card-description">${event.description || ''}</p>
                            </div>
                        </div>
                    `;
                    eventCardsContainer.innerHTML += eventCard;
                });

                if (querySnapshot.empty) {
                    eventCardsContainer.innerHTML = "<p>No events yet. Check back later!</p>";
                }

            } catch (error) {
                console.error("Error loading events:", error);
                eventCardsContainer.innerHTML = "<p>⚠️ Failed to load events. Please try again later.</p>";
            }
        }

        document.addEventListener("DOMContentLoaded", loadEvents);

        // Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId.length > 1 && document.querySelector(targetId)) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});

