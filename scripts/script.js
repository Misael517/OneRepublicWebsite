
let menuIcon = document.querySelector('.navIcon')
let mobileNav = document.querySelector('.mobileNav')


// Open and close the mobile menu
menuIcon.addEventListener('click', (e) => {

    if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
        mobileNav.style.display = 'flex';
    } else {
        mobileNav.style.display = 'none';
    }

    e.stopPropagation();
})


document.body.addEventListener('click', (e) => {
    if (mobileNav.style.display === 'flex' && !mobileNav.contains(e.target)) {
        mobileNav.style.display = 'none';
    }
});






// select button
let languages = document.getElementById('languages');

// Nav - text
const navText = document.querySelectorAll('.navText');

// Hero section - text
const heroText = document.querySelectorAll('.heroText');

// Features section - text
const featuresText = document.querySelectorAll('.featuresText');

// Features section - text
const rolesText = document.querySelectorAll('.rolesText');

// Business section - text
const businessText = document.querySelectorAll('.businessText');

// Vehicles section - text
const vehiclesText = document.querySelectorAll('.vehiclesText');

// Missions section - text
const missionsText = document.querySelectorAll('.missionsText');

// Instagram section - text
const instagramText = document.querySelectorAll('.instagramText');

// Footer section - text
const footerText = document.querySelectorAll('.footerText');



// Translator
languages.addEventListener('change', (e) => {
    localStorage.setItem("selectedLanguage", e.target.value);

    changeLanguage(e)
})


function changeLanguage(e) {
    let selectedLanguage = localStorage.getItem('selectedLanguage');


    // Spanish translation
    if (selectedLanguage === "español") {

        languages.options[1].setAttribute('selected', true)

        console.log(languages.options[1])

        // navbar
        navText.forEach((text) => {
            const lowerTextContent = text.textContent.trim().toLowerCase();

            if (lowerTextContent === 'server') {
                text.textContent = 'Servidor';

            } else if (lowerTextContent === 'norms') {
                text.textContent = 'Normativas';

            } else if (lowerTextContent === 'store') {
                text.textContent = 'Tienda';
            }
        });

        // Hero section
        heroText.forEach((text) => {
            const lowerHeroContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerHeroContent.includes('available')) {
                text.textContent = 'One republic server ya disponible'

            } else if (lowerHeroContent.includes('thrilling')) {
                text.textContent = `Vive una gran aventura en uno de los mejores 
                servers de FiveM en la República Dominicana`

            } else if (lowerHeroContent.includes('join')) {
                text.textContent = 'Ir a discord'
            }
        })

        // Features section
        featuresText.forEach((text) => {
            const lowerFeaturesContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerFeaturesContent.includes('new clothes')) {
                text.textContent = 'Nuevas prendas'
            }

            else if (lowerFeaturesContent.includes('buy houses')) {
                text.textContent = 'Compra casas'
            }

            else if (lowerFeaturesContent.includes('vip content')) {
                text.textContent = 'Contenido VIP'
            }

            else if (lowerFeaturesContent.includes('lasting')) {
                text.textContent = 'Viste tu personaje con vestimentas unicas y crea una gran impresion en la ciudad'

            } else if (lowerFeaturesContent.includes('purchasing')) {
                text.textContent = `Asegura tus objetos, autos, y otros bienes comprando 
                la casa de tu sueños en One Republic`

            } else if (lowerFeaturesContent.includes('gaing')) {
                text.textContent = 'Hazte miembro VIP ahora y gana acceso a todos los beneficios VIP exclusivos del servidor'
            }
        })

        // Roles section
        rolesText.forEach((text) => {
            const lowerFeaturesContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerFeaturesContent.includes('favorite')) {
                text.textContent = 'Elige tu rol favorito'
            }

            else if (lowerFeaturesContent.includes('immerse')) {
                text.textContent = 'Sumergete en One Republic server escogiendo uno de los roles principales en la ciudad'
            }

            else if (lowerFeaturesContent.includes('gang')) {
                text.textContent = 'Banda'
            }

            else if (lowerFeaturesContent.includes('police')) {
                text.textContent = 'Policia'

            } else if (lowerFeaturesContent.includes('mafia')) {
                text.textContent = `Mafia`

            } else if (lowerFeaturesContent.includes('gaing')) {
                text.textContent = 'Hazte miembro VIP ahora y gana acceso a todos los beneficios VIP exclusivos de el servidor'
            }
        })

        // Business section
        businessText.forEach((text) => {
            const lowerBusinessContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerBusinessContent.includes('manage')) {
                text.textContent = 'Maneja tu propio negocio'

            } else if (lowerBusinessContent.includes('entrepreneurial')) {
                text.textContent = `Entra en el mundo empresarial adquiriendo tu propio negocio y contruye tu imperio`

            } else if (lowerBusinessContent.includes('learn')) {
                text.textContent = 'Ver mas'
            }
        })

        // Vehicles section
        vehiclesText.forEach((text) => {
            const lowerVehiclesContent = text.textContent.trim().toLowerCase();
            if (lowerVehiclesContent.includes('custom')) {
                text.textContent = 'Vehiculos tuneados';

            } else if (lowerVehiclesContent.includes('enhance')) {
                text.textContent = 'Disfruta de tu rol conduciendo autos increibles al rededor de la ciudad';
            }
        });

        // Missions section
        missionsText.forEach((text) => {
            const lowerMissionsContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerMissionsContent.includes('everyone')) {
                text.textContent = 'Nuevas Misiones para todos'

            } else if (lowerMissionsContent.includes('explore')) {
                text.textContent = `Explora la ciudad y disfruta el juego con nuevas misiones disponibles alrededor del mapa`

            } else if (lowerMissionsContent.includes('learn more')) {
                text.textContent = 'Ver mas'
            }
        })

        // Instagram section
        instagramText.forEach((text) => {
            const lowerInstContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerInstContent.includes('follow us now')) {
                text.textContent = 'Siguenos en Instagram'

            } else if (lowerInstContent.includes('updated')) {
                text.textContent = `Interesado en ver mas? siguenos para que estes al tanto sobre cualquier evento en la ciudad!`

            } else if (lowerInstContent.includes('instagram')) {
                text.textContent = 'Instagram'
            }
        })

        // Footer section
        footerText.forEach((text) => {
            const lowerFooterContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerFooterContent.includes('browse')) {
                text.textContent = 'Navegacion'

            } else if (lowerFooterContent.includes('server')) {
                text.textContent = `Servidor`

            } else if (lowerFooterContent.includes('norms')) {
                text.textContent = 'Normativas'

            } else if (lowerFooterContent.includes('store')) {
                text.textContent = 'Tienda'

            } else if (lowerFooterContent.includes('services')) {
                text.textContent = 'Servicios'

            } else if (lowerFooterContent.includes('vip membership')) {
                text.textContent = 'Membresia VIP'

            } else if (lowerFooterContent.includes('businesses')) {
                text.textContent = 'Negocios'

            } else if (lowerFooterContent.includes('vehicles')) {
                text.textContent = 'Vehiculos'

            } else if (lowerFooterContent.includes('support')) {
                text.textContent = 'Soporte'

            } else if (lowerFooterContent.includes('instagram')) {
                text.textContent = 'Instagram'

            } else if (lowerFooterContent.includes('discord')) {
                text.textContent = 'Discord'
            }
        })

        // English translation
    } else if (selectedLanguage === "english") {

        languages.options[0].setAttribute('selected', true)

        navText.forEach((text) => {
            const lowerTextContent = text.textContent.trim().toLowerCase();
            if (lowerTextContent.includes('servidor')) {
                text.textContent = 'Server';

            } else if (lowerTextContent.includes('normativas')) {
                text.textContent = 'Norms';

            } else if (lowerTextContent.includes('tienda')) {
                text.textContent = 'Store';
            }
        });

        // Hero section
        heroText.forEach((text) => {
            const lowerHeroContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerHeroContent.includes('disponible')) {
                text.textContent = 'one republic server now available'

            } else if (lowerHeroContent.includes('aventura')) {
                text.textContent = `Experience a thrilling adventure in one of the 
                best FiveM servers in Dominican Republic`

            } else if (lowerHeroContent.includes('ir')) {
                text.textContent = 'Join discord'
            }
        })

        // Features section
        featuresText.forEach((text) => {
            const lowerFeaturesContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerFeaturesContent.includes('nuevas prendas')) {
                text.textContent = 'New clothes'
            }

            else if (lowerFeaturesContent.includes('compra casas')) {
                text.textContent = 'Buy houses'
            }

            else if (lowerFeaturesContent.includes('contenido vip')) {
                text.textContent = 'VIP Content'
            }

            else if (lowerFeaturesContent.includes('vestimentas')) {
                text.textContent = 'Dress your character with unique clothes and make a lasting impression in the city'

            } else if (lowerFeaturesContent.includes('sueños')) {
                text.textContent = `Secure your items, cars, and other assets by purchasing your dream house in One Republic`

            }
        })

        // Roles section
        rolesText.forEach((text) => {
            const lowerFeaturesContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerFeaturesContent.includes('favorito')) {
                text.textContent = 'Select your favorite role'
            }

            else if (lowerFeaturesContent.includes('sumergete')) {
                text.textContent = 'Immerse yourself in One Republic selecting one of the main starting roles in the city'
            }

            else if (lowerFeaturesContent.includes('banda')) {
                text.textContent = 'gang'
            }

            else if (lowerFeaturesContent.includes('policia')) {
                text.textContent = 'Police'

            } else if (lowerFeaturesContent.includes('mafia')) {
                text.textContent = `Mafia`
            }
        })

        // Business section
        businessText.forEach((text) => {
            const lowerBusinessContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerBusinessContent.includes('maneja')) {
                text.textContent = 'Manage your own business'

            } else if (lowerBusinessContent.includes('empresarial')) {
                text.textContent = `Dive into the entrepreneurial world by buying a business and build your own empire`

            } else if (lowerBusinessContent.includes('ver')) {
                text.textContent = 'Learn more'
            }
        })

        // Vehicles section
        vehiclesText.forEach((text) => {
            const lowerVehiclesContent = text.textContent.trim().toLowerCase();
            if (lowerVehiclesContent.includes('custom')) {
                text.textContent = 'Vehiculos tuneados';

            } else if (lowerVehiclesContent.includes('enhance')) {
                text.textContent = 'Disfruta de tu rol conduciendo autos increibles al rededor de la ciudad';
            }
        });

        // Vehicles section
        vehiclesText.forEach((text) => {
            const lowerVehiclesContent = text.textContent.trim().toLowerCase();
            if (lowerVehiclesContent.includes('tuneados')) {
                text.textContent = 'Custom vehicles';

            } else if (lowerVehiclesContent.includes('disfruta')) {
                text.textContent = 'Enhance your role play experience by driving amazing cars around the city';
            }
        });

        // Missions section
        missionsText.forEach((text) => {
            const lowerMissionsContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerMissionsContent.includes('todos')) {
                text.textContent = 'New missions for everyone'

            } else if (lowerMissionsContent.includes('explora')) {
                text.textContent = `Explore the city and immerse yourself with a brand new set of missions that everybody can enjoy`

            } else if (lowerMissionsContent.includes('ver mas')) {
                text.textContent = 'Learn more'
            }
        })

        // Instagram section
        instagramText.forEach((text) => {
            const lowerInstContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerInstContent.includes('siguenos en instagram')) {
                text.textContent = 'Follow us now'

            } else if (lowerInstContent.includes('interesado')) {
                text.textContent = `Do you want to know more? follow us to stay updated about any incoming event in the city!`

            } else if (lowerInstContent.includes('instagram')) {
                text.textContent = 'Instagram'
            }
        })

        // Footer section
        footerText.forEach((text) => {
            const lowerFooterContent = text.textContent.trim().toLocaleLowerCase();

            if (lowerFooterContent.includes('navegacion')) {
                text.textContent = 'Browse'

            } else if (lowerFooterContent.includes('servidor')) {
                text.textContent = `Server`

            } else if (lowerFooterContent.includes('normativas')) {
                text.textContent = 'Norms'

            } else if (lowerFooterContent.includes('tienda')) {
                text.textContent = 'Store'

            } else if (lowerFooterContent.includes('servicios')) {
                text.textContent = 'Services'

            } else if (lowerFooterContent.includes('membresia vip')) {
                text.textContent = 'VIP membership'

            } else if (lowerFooterContent.includes('negocios')) {
                text.textContent = 'Businesses'

            } else if (lowerFooterContent.includes('vehiculos')) {
                text.textContent = 'Vehicles'

            } else if (lowerFooterContent.includes('soporte')) {
                text.textContent = 'Support'

            } else if (lowerFooterContent.includes('instagram')) {
                text.textContent = 'Instagram'

            } else if (lowerFooterContent.includes('discord')) {
                text.textContent = 'Discord'
            }
        })

    }
}

changeLanguage();






// Preload images:
const urls = [
    { id: "img1", url: "images/logo/logo.webp" },
    { id: "img2", url: "images/characters/franklin.webp" },
    { id: "img3", url: "images/characters/Gang.webp" },
    { id: "img4", url: "images/characters/Police.webp" },
    { id: "img5", url: "images/characters/Mafia.webp" },
    { id: "img6", url: "images/content/business.webp" },
    { id: "img7", url: "images/content/car1.webp" },
    { id: "img8", url: "images/content/car2.webp" },
    { id: "img9", url: "images/content/car3.webp" },
    { id: "img10", url: "images/content/missions.webp" },
    { id: "img11", url: "images/logo/sectionLogo.webp" },
    { id: "img12", url: "/images/backgrounds/heroBakcground.webp " },
    { id: "img13", url: "/images/backgrounds/3_Backgrounbd.webp" },
    { id: "img14", url: "/images/backgrounds/businesssBackground.webp" },
    { id: "img15", url: "/images/backgrounds/vehiclesBackground.webp" },
    { id: "img16", url: "/images/backgrounds/lastOneBakcground.webp" },
]


function preloadImgs(urls) {

    urls.forEach(imageUrls => {

        const img = new Image();
        img.src = imageUrls.url;
        img.style.display = "none"
        img.onload = function () {
            window.document.body.appendChild(img)
        }
    });
}

preloadImgs(urls);
