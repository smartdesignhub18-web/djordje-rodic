/* =========================================================
   Personalni Trener - PERSONALNI TRENER
   MAIN JS
========================================================= */


/* =========================================================
   TRANSFORMACIJE SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".transform-slider");

    const previousButton =
        document.querySelector(".transform-prev");

    const nextButton =
        document.querySelector(".transform-next");


    if (!slider || !previousButton || !nextButton) {
        return;
    }


    /* KOLIKO SE POMERA SLIDER */

    function getScrollAmount() {

        const card =
            slider.querySelector(".transform-card");

        if (!card) {
            return 300;
        }

        const gap = 20;

        return card.offsetWidth + gap;
    }


    /* SLEDEĆA */

    nextButton.addEventListener("click", () => {

        slider.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });

    });


    /* PRETHODNA */

    previousButton.addEventListener("click", () => {

        slider.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });

    });

});

/* =========================================================
   FAQ ACCORDION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const faqItems =
        document.querySelectorAll(".faq-item");


    faqItems.forEach((item) => {

        const button =
            item.querySelector(".faq-question");


        if (!button) {
            return;
        }


        button.addEventListener("click", () => {

            const isAlreadyOpen =
                item.classList.contains("active");


            /* ZATVORI SVE */

            faqItems.forEach((faqItem) => {

                faqItem.classList.remove("active");

            });


            /* AKO NIJE BIO OTVOREN,
               OTVORI KLIKNUTI */

            if (!isAlreadyOpen) {

                item.classList.add("active");

            }

        });

    });

});

/* =========================================================
   KONTAKT FORMA - PRIVREMENO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const contactForm =
        document.querySelector("#contact-form");

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

    });

});

/* =========================================================
   HEADER + MOBILE MENU
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const header =
        document.querySelector(".site-header");

    const menuButton =
        document.querySelector(".menu-toggle");

    const mobileMenuLinks =
        document.querySelectorAll(
            ".mobile-menu a"
        );


    if (!header) {
        return;
    }


    /* =====================================================
       STICKY HEADER
    ===================================================== */

    function updateHeader() {

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuButton) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                header.classList.toggle("menu-open");


            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );


            /*
                Dok je meni otvoren,
                sprečavamo skrolovanje stranice.
            */

            document.body.style.overflow =
                isOpen
                    ? "hidden"
                    : "";

        });

    }


    /* =====================================================
       ZATVORI MENI NAKON KLIKA
    ===================================================== */

    mobileMenuLinks.forEach((link) => {

        link.addEventListener("click", () => {

            header.classList.remove("menu-open");

            document.body.style.overflow = "";

            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    });


    /* =====================================================
       AKO PREĐEMO SA MOBILNOG NA DESKTOP
    ===================================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {

            header.classList.remove("menu-open");

            document.body.style.overflow = "";

            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    });

});

/* =========================================================
   SCROLL REVEAL ANIMACIJE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /*
        POMOĆNA FUNKCIJA

        Elementu dodajemo:
        - tip animacije
        - opciono kašnjenje
    */

    function prepareReveal(
        selector,
        animationClass = "reveal",
        stagger = false
    ) {

        const elements =
            document.querySelectorAll(selector);


        elements.forEach((element, index) => {

            element.classList.add(animationClass);


            /*
                Ako želimo da se više kartica
                pojavljuje jedna za drugom.
            */

            if (stagger) {

                const delay =
                    (index % 5) + 1;

                element.classList.add(
                    `reveal-delay-${delay}`
                );

            }

        });

    }


    /* =====================================================
       O MENI
    ===================================================== */

    prepareReveal(
        ".about-visual",
        "reveal-left"
    );

    prepareReveal(
        ".about-content",
        "reveal-right"
    );


    /* =====================================================
       TRANSFORMACIJE
    ===================================================== */

    prepareReveal(
        ".transformations-heading"
    );

    prepareReveal(
        ".transform-card",
        "reveal",
        true
    );


    /* =====================================================
       PROGRAMI
    ===================================================== */

    prepareReveal(
        ".programs-heading"
    );

    prepareReveal(
        ".program-card",
        "reveal",
        true
    );


    /* =====================================================
       KAKO FUNKCIONIŠE
    ===================================================== */

    prepareReveal(
        ".process-heading"
    );

    prepareReveal(
        ".process-step",
        "reveal",
        true
    );

    prepareReveal(
        ".process-cta",
        "reveal-scale"
    );


    /* =====================================================
       ISKUSTVA
    ===================================================== */

    prepareReveal(
        ".testimonials-heading"
    );

    prepareReveal(
        ".testimonial-main",
        "reveal-left"
    );

    prepareReveal(
        ".testimonials-side",
        "reveal-right"
    );

    prepareReveal(
        ".testimonials-trust",
        "reveal"
    );


    /* =====================================================
       FAQ
    ===================================================== */

    prepareReveal(
        ".faq-intro",
        "reveal-left"
    );

    prepareReveal(
        ".faq-list",
        "reveal-right"
    );


    /* =====================================================
       KONTAKT
    ===================================================== */

    prepareReveal(
        ".contact-content",
        "reveal-left"
    );

    prepareReveal(
        ".contact-form-wrapper",
        "reveal-right"
    );


    /* =====================================================
       FINAL CTA
    ===================================================== */

    prepareReveal(
        ".final-cta-container",
        "reveal-scale"
    );


    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right, .reveal-scale"
        );


    /*
        Ako browser ne podržava IntersectionObserver,
        samo prikaži sve elemente.
    */

    if (!("IntersectionObserver" in window)) {

        revealElements.forEach((element) => {

            element.classList.add("visible");

        });

        return;

    }


    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        "visible"
                    );


                    /*
                        Animacija se izvršava samo jednom.
                    */

                    observer.unobserve(
                        entry.target
                    );

                });

            },

            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -50px 0px"
            }

        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

});

/* =========================================================
   KALKULATOR KALORIJA
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.querySelector("#calorie-form");

    if (!form) {
        return;
    }


    const genderOptions =
        document.querySelectorAll(".gender-option");

    const goalOptions =
        document.querySelectorAll(".goal-option");


    /* =====================================================
       AKTIVNI POL
    ===================================================== */

    genderOptions.forEach((option) => {

        option.addEventListener("click", () => {

            genderOptions.forEach((item) => {

                item.classList.remove("active");

            });

            option.classList.add("active");

        });

    });


    /* =====================================================
       AKTIVNI CILJ
    ===================================================== */

    goalOptions.forEach((option) => {

        option.addEventListener("click", () => {

            goalOptions.forEach((item) => {

                item.classList.remove("active");

            });

            option.classList.add("active");

        });

    });


    /* =====================================================
       RAČUNANJE
    ===================================================== */

    form.addEventListener("submit", (event) => {

        event.preventDefault();


        const gender =
            document.querySelector(
                'input[name="gender"]:checked'
            ).value;


        const goal =
            document.querySelector(
                'input[name="goal"]:checked'
            ).value;


        const age =
            Number(
                document.querySelector("#calc-age").value
            );


        const height =
            Number(
                document.querySelector("#calc-height").value
            );


        const weight =
            Number(
                document.querySelector("#calc-weight").value
            );


        const activity =
            Number(
                document.querySelector("#calc-activity").value
            );


        /* =================================================
           BMR - MIFFLIN ST JEOR
        ================================================= */

        let bmr;


        if (gender === "male") {

            bmr =
                (10 * weight) +
                (6.25 * height) -
                (5 * age) +
                5;

        } else {

            bmr =
                (10 * weight) +
                (6.25 * height) -
                (5 * age) -
                161;

        }


        /* =================================================
           TDEE
        ================================================= */

        const tdee =
            bmr * activity;


        /* =================================================
           CILJ
        ================================================= */

        let targetCalories;

        let goalText;


        if (goal === "loss") {

            targetCalories =
                tdee * 0.85;

            goalText =
                "Umeren kalorijski deficit prema tvom procenjenom nivou održavanja.";

        }


        else if (goal === "gain") {

            targetCalories =
                tdee * 1.10;

            goalText =
                "Umeren kalorijski suficit za postepeno povećanje telesne mase.";

        }


        else {

            targetCalories =
                tdee;

            goalText =
                "Procenjeni unos za održavanje trenutne telesne težine.";

        }


        /* =================================================
           ZAOKRUŽIVANJE
        ================================================= */

        const roundedBMR =
            Math.round(bmr);

        const roundedTDEE =
            Math.round(tdee);

        const roundedTarget =
            Math.round(targetCalories);


        /* =================================================
           RASPON
        ================================================= */

        const lowerRange =
            Math.round(targetCalories * 0.95);

        const upperRange =
            Math.round(targetCalories * 1.05);


        /* =================================================
           MAKROI

           Protein:
           približno 1.8 g / kg

           Masti:
           približno 25% kalorija

           UH:
           ostatak kalorija
        ================================================= */

        const protein =
            Math.round(weight * 1.8);


        const proteinCalories =
            protein * 4;


        const fat =
            Math.round(
                (targetCalories * 0.25) / 9
            );


        const fatCalories =
            fat * 9;


        let carbCalories =
            targetCalories -
            proteinCalories -
            fatCalories;


        if (carbCalories < 0) {

            carbCalories = 0;

        }


        const carbs =
            Math.round(
                carbCalories / 4
            );


        /* =================================================
           PRIKAZ
        ================================================= */

        document.querySelector(
            "#bmr-result"
        ).textContent =
            roundedBMR.toLocaleString("sr-RS");


        document.querySelector(
            "#tdee-result"
        ).textContent =
            roundedTDEE.toLocaleString("sr-RS");


        document.querySelector(
            "#target-calories"
        ).textContent =
            roundedTarget.toLocaleString("sr-RS");


        document.querySelector(
            "#calorie-range-result"
        ).textContent =
            `${lowerRange.toLocaleString("sr-RS")} – ${upperRange.toLocaleString("sr-RS")} kcal`;


        document.querySelector(
            "#protein-result"
        ).textContent =
            `${protein} g`;


        document.querySelector(
            "#carbs-result"
        ).textContent =
            `${carbs} g`;


        document.querySelector(
            "#fat-result"
        ).textContent =
            `${fat} g`;


        document.querySelector(
            "#result-goal-text"
        ).textContent =
            goalText;


        /* =================================================
           SAKRIJ PLACEHOLDER
        ================================================= */

        const placeholder =
            document.querySelector(
                "#result-placeholder"
            );


        const results =
            document.querySelector(
                "#calculator-results"
            );


        placeholder.style.display =
            "none";


        results.classList.add(
            "show"
        );

    });

});


/* =========================================================
   SERTIFIKATI - BESKONACNI SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".certificates-slider");
    const track = document.querySelector(".certificates-track");

    if (!slider || !track) return;

    // Originalnih 6 sertifikata
    const originalCards = Array.from(
        track.querySelectorAll(".certificate-card")
    );

    if (originalCards.length === 0) return;


    /* =====================================================
       DUPLIRANJE KARTICA
    ===================================================== */

    // Dupliciramo svih 6 kartica da bi
    // animacija mogla neprekidno da se ponavlja.

    originalCards.forEach(function (card) {

        const clone = card.cloneNode(true);

        clone.setAttribute("aria-hidden", "true");

        track.appendChild(clone);

    });


    /* =====================================================
       PRILAGODJAVANJE SIRINI EKRANA
    ===================================================== */

    // Ako je ekran veoma sirok, dodajemo
    // dodatne kopije kako ne bi bilo praznina.

    function adjustSlider() {

        const originalWidth =
            originalCards.reduce(function (total, card) {
                return total + card.getBoundingClientRect().width;
            }, 0);

        const gap = parseFloat(
            window.getComputedStyle(track).gap
        ) || 0;

        const groupWidth =
            originalWidth + originalCards.length * gap;

track.style.setProperty(
    "--certificates-distance",
    groupWidth + "px"
);

        if (groupWidth <= 0) return;

        // Brisemo prethodne dodatne kopije
        track.querySelectorAll(".certificate-extra").forEach(
            function (card) {
                card.remove();
            }
        );

        // Dodajemo kopije samo kada je potrebno
        const minimumWidth = slider.clientWidth * 2;

        let currentWidth = track.scrollWidth;

        while (currentWidth < minimumWidth) {

            originalCards.forEach(function (card) {

                const clone = card.cloneNode(true);

                clone.classList.add("certificate-extra");
                clone.setAttribute("aria-hidden", "true");

                track.appendChild(clone);

            });

            currentWidth = track.scrollWidth;
        }

    }

    adjustSlider();

    window.addEventListener("resize", adjustSlider);

});
