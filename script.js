// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // DOM Elements
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const contactForm = document.getElementById('contactForm');
    const planModal = document.getElementById('planModal');
    const closeModal = document.getElementById('closeModal');
    const modalBuyBtn = document.getElementById('modalBuyBtn');
    const modalContactBtn = document.getElementById('modalContactBtn');
    const viewPlanDetailsBtns = document.querySelectorAll('.view-plan-details');
    const buyPlanBtns = document.querySelectorAll('.buy-plan');
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Gallery Elements
    const galleryModal = document.getElementById('galleryModal');
    const closeGalleryModal = document.getElementById('closeGalleryModal');
    const galleryPrevBtn = document.querySelector('.gallery-prev');
    const galleryNextBtn = document.querySelector('.gallery-next');
    const mainGalleryImage = document.getElementById('mainGalleryImage');
    const galleryThumbnails = document.getElementById('galleryThumbnails');
    const galleryProjectTitle = document.getElementById('galleryProjectTitle');
    const galleryProjectName = document.getElementById('galleryProjectName');
    const galleryProjectDescription = document.getElementById('galleryProjectDescription');
    const galleryProjectLocation = document.getElementById('galleryProjectLocation');
    const galleryProjectYear = document.getElementById('galleryProjectYear');
    const galleryProjectCategory = document.getElementById('galleryProjectCategory');
    const galleryProjectStatus = document.getElementById('galleryProjectStatus');
    const currentImageSpan = document.getElementById('currentImage');
    const totalImagesSpan = document.getElementById('totalImages');
    
    // Plan Details Data
    const planDetails = {
        1: {
            title: "Modern Bungalow",
            price: "KES 85,000",
            size: "180 sqm",
            bedrooms: "3",
            bathrooms: "2.5",
            description: "This modern bungalow design combines contemporary aesthetics with functional living spaces. Perfect for urban and suburban settings.",
            features: [
                "Open plan living and dining area",
                "Modern kitchen with breakfast bar",
                "Master suite with walk-in closet",
                "Covered patio for outdoor entertainment",
                "Double garage",
                "Energy-efficient design"
            ]
        },
        2: {
            title: "Contemporary Villa",
            price: "KES 120,000",
            size: "280 sqm",
            bedrooms: "4",
            bathrooms: "3.5",
            description: "A luxurious contemporary villa design featuring spacious rooms, modern amenities, and elegant finishes.",
            features: [
                "Grand entrance foyer",
                "Formal living and dining rooms",
                "Gourmet kitchen with island",
                "Home office/study",
                "Swimming pool area",
                "Landscaped gardens"
            ]
        },
        3: {
            title: "Urban Townhouse",
            price: "KES 95,000",
            size: "220 sqm",
            bedrooms: "3",
            bathrooms: "3",
            description: "Perfect for urban living, this townhouse design maximizes space in a compact footprint without compromising on style.",
            features: [
                "Three-story design",
                "Rooftop terrace",
                "Compact garden space",
                "Built-in storage solutions",
                "Modern facade",
                "Secure parking"
            ]
        }
    };

    // Project Gallery Data
    const projectGalleries = {
        1: {
            title: "PROPOSED KITENGELA 002 PROJECT",
            description: "A modern residential complex featuring contemporary architectural design with sustainable elements. The project includes multiple housing units designed for urban living with green spaces and community amenities.",
            location: "Kitengela, Kajiado",
            year: "2024",
            status: "Proposed",
            category: "Residential Complex",
            images: [
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154340-043788447eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        2: {
            title: "ONGOING KISUMU PROJECT",
            description: "A comprehensive mixed-use development project currently under construction. Features commercial spaces on ground floors with residential apartments above, incorporating lake-view designs and modern amenities.",
            location: "Kisumu City, Nyanza Region",
            year: "2023-2024",
            status: "Ongoing (65% Complete)",
            category: "Mixed-Use Development",
            images: [
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1503387769-00a112127ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        3: {
            title: "PROPOSED 5 BEDROOM MANSIONETTE AT RONGAI",
            description: "A luxury mansionette design featuring spacious living areas, modern finishes, and premium amenities. The design incorporates indoor-outdoor living concepts with a private garden and entertainment areas.",
            location: "Rongai, Nairobi County",
            year: "2024",
            status: "Proposed",
            category: "Luxury Residence",
            images: [
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        4: {
            title: "PROPOSED KISII PROJECT 4 BEDROOM",
            description: "A contemporary 4-bedroom family home designed for comfortable living with modern amenities. Features include open-plan living spaces, energy-efficient design, and traditional architectural elements adapted for modern lifestyles.",
            location: "Kisii Town, Kisii County",
            year: "2024",
            status: "Proposed",
            category: "Family Home",
            images: [
                "https://images.unsplash.com/photo-1600585154340-043788447eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        5: {
            title: "5 Bedroom Bungalow - Kajiado County",
            description: "A luxurious 5-bedroom bungalow featuring modern architecture, spacious living areas, and premium finishes. Situated in the scenic Kajiado countryside with panoramic views and eco-friendly features.",
            location: "Kajiado County",
            year: "2023",
            status: "Completed",
            category: "Luxury Residence",
            images: [
                "https://images.unsplash.com/photo-1600585154340-043788447eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        6: {
            title: "Controlled Development - 3 Bedroom Bungalow",
            description: "A controlled development project featuring sustainable construction practices and modern 3-bedroom bungalow designs for urban living, incorporating energy-efficient systems.",
            location: "Nairobi",
            year: "2023-2024",
            status: "Ongoing",
            category: "Residential Development",
            images: [
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154340-043788447eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        7: {
            title: "ELDORET BUNGALOW",
            description: "A beautiful bungalow in Eldoret featuring traditional architectural elements combined with modern amenities, designed for family comfort with spacious living areas and landscaped gardens.",
            location: "Eldoret Town",
            year: "2022",
            status: "Completed",
            category: "Family Home",
            images: [
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154340-043788447eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        8: {
            title: "KAKAMEGA PROPOSED PROJECT",
            description: "Proposed residential development in Kakamega featuring modern apartment units with community amenities, green spaces, and sustainable design elements for urban living.",
            location: "Kakamega Town",
            year: "2024",
            status: "Proposed",
            category: "Residential Complex",
            images: [
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154340-043788447eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        9: {
            title: "Kenyatta Road Project - Handed Over",
            description: "A successful townhouse development project that has been completed and handed over to the client. Features modern urban living spaces with shared amenities and security features.",
            location: "Kenyatta Road, Nairobi",
            year: "2023",
            status: "Completed",
            category: "Town Houses",
            images: [
                "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154340-043788447eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        10: {
            title: "Kikuyu Finished Project",
            description: "A completed family residence in Kikuyu featuring contemporary design, spacious interiors, and landscaped outdoor areas with modern amenities for comfortable family living.",
            location: "Kikuyu, Kiambu",
            year: "2022",
            status: "Completed",
            category: "Family Residence",
            images: [
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154340-043788447eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        11: {
            title: "ONGOING KAREN PROJECT",
            description: "An ongoing luxury villa project in the prestigious Karen neighborhood, featuring high-end finishes, extensive landscaped gardens, and premium amenities for luxurious living.",
            location: "Karen, Nairobi",
            year: "2023-2024",
            status: "Ongoing (70% Complete)",
            category: "Luxury Villa",
            images: [
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154340-043788447eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        12: {
            title: "ONGOING RUIRU PROJECT",
            description: "A modern apartment complex development in Ruiru, featuring multiple units with contemporary designs, shared amenities, and sustainable construction practices.",
            location: "Ruiru, Kiambu",
            year: "2023-2024",
            status: "Ongoing (60% Complete)",
            category: "Apartment Complex",
            images: [
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154340-043788447eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        13: {
            title: "PROPOSED KITENGELA PROJECT",
            description: "A proposed mixed-use development in the growing Kitengela area, combining residential units with commercial spaces for integrated community development.",
            location: "Kitengela, Kajiado",
            year: "2024",
            status: "Proposed",
            category: "Mixed Development",
            images: [
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154340-043788447eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        14: {
            title: "SIAYA BUNGALOW",
            description: "A comfortable family bungalow in Siaya County featuring traditional Luo architectural influences with modern construction techniques and amenities for extended family living.",
            location: "Siaya County",
            year: "2023",
            status: "Completed",
            category: "Family Residence",
            images: [
                "https://images.unsplash.com/photo-1600585154340-043788447eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        },
        15: {
            title: "VIHIGA BUNGALOW",
            description: "A proposed bungalow design for Vihiga County, incorporating local building traditions with modern amenities, energy-efficient features, and sustainable construction methods.",
            location: "Vihiga County",
            year: "2024",
            status: "Proposed",
            category: "Residential Design",
            images: [
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154340-043788447eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ]
        }
    };

    // Initialize all functionality
    initializeWebsite();

    function initializeWebsite() {
        // Mobile Menu Toggle
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                navLinks.classList.toggle('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
                }
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navLinks && navLinks.classList.contains('active')) {
                if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    navLinks.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) {
                        icon.className = 'fas fa-bars';
                    }
                }
            }
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
                if (mobileMenuBtn) {
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) {
                        icon.className = 'fas fa-bars';
                    }
                }
            });
        });

        // Scroll animation for fade-in elements
        const checkFade = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        };

        // Initialize fade check on load and scroll
        window.addEventListener('load', checkFade);
        window.addEventListener('scroll', checkFade);

        // Plan Details Modal Functionality
        if (viewPlanDetailsBtns.length > 0) {
            viewPlanDetailsBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const planId = this.getAttribute('data-plan');
                    const plan = planDetails[planId];
                    
                    if (plan) {
                        document.getElementById('modalPlanTitle').textContent = plan.title;
                        
                        let featuresHTML = '';
                        plan.features.forEach(feature => {
                            featuresHTML += `<li>${feature}</li>`;
                        });
                        
                        const modalContent = `
                            <div class="plan-details">
                                <div class="plan-detail">
                                    <span>Price:</span>
                                    <span class="plan-price">${plan.price}</span>
                                </div>
                                <div class="plan-detail">
                                    <span>Size:</span>
                                    <span>${plan.size}</span>
                                </div>
                                <div class="plan-detail">
                                    <span>Bedrooms:</span>
                                    <span>${plan.bedrooms}</span>
                                </div>
                                <div class="plan-detail">
                                    <span>Bathrooms:</span>
                                    <span>${plan.bathrooms}</span>
                                </div>
                            </div>
                            <p>${plan.description}</p>
                            <h4>Key Features:</h4>
                            <ul class="service-features">
                                ${featuresHTML}
                            </ul>
                        `;
                        
                        document.getElementById('modalPlanContent').innerHTML = modalContent;
                        
                        // Set up modal buttons
                        if (modalBuyBtn) {
                            modalBuyBtn.onclick = function() {
                                window.location.href = `https://wa.me/254117533147?text=Hello%20Marly%20Consortium,%20I%20would%20like%20to%20purchase%20the%20${encodeURIComponent(plan.title)}%20plan`;
                            };
                        }
                        
                        if (modalContactBtn) {
                            modalContactBtn.onclick = function() {
                                window.location.href = `https://wa.me/254117533147?text=Hello%20Marly%20Consortium,%20I%20would%20like%20to%20discuss%20customizing%20the%20${encodeURIComponent(plan.title)}%20plan`;
                            };
                        }
                        
                        if (planModal) {
                            planModal.style.display = 'flex';
                            document.body.style.overflow = 'hidden';
                        }
                    }
                });
            });
        }

        // Buy Plan Directly
        if (buyPlanBtns.length > 0) {
            buyPlanBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const planId = this.getAttribute('data-plan');
                    const plan = planDetails[planId];
                    
                    if (plan) {
                        window.location.href = `https://wa.me/254117533147?text=Hello%20Marly%20Consortium,%20I%20would%20like%20to%20purchase%20the%20${encodeURIComponent(plan.title)}%20plan%20for%20${encodeURIComponent(plan.price)}`;
                    }
                });
            });
        }

        // Close Plan Modal
        if (closeModal) {
            closeModal.addEventListener('click', closePlanModal);
        }

        function closePlanModal() {
            if (planModal) {
                planModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }

        // Close plan modal when clicking outside
        window.addEventListener('click', function(e) {
            if (planModal && e.target === planModal) {
                closePlanModal();
            }
        });

        // Contact Form Submission
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                const service = document.getElementById('service').value;
                const message = document.getElementById('message').value;
                
                // Simple validation
                if (!name || !email || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // Show success message
                alert(`Thank you ${name}! Your message has been sent. We will contact you at ${email} or ${phone} within 24 hours.`);
                contactForm.reset();
            });
        }

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY > 100) {
                    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
                    header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                } else {
                    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                }
            }
        });

        // Stats Animation - FIXED
        initializeStatsAnimation();
        
        // Project Gallery - FIXED
        initializeProjectGallery();
        
        // Portfolio Filter
        initializePortfolioFilter();
        
        // Update active navigation link on scroll
        updateActiveNavLink();
        window.addEventListener('scroll', updateActiveNavLink);
    }

    // Stats Animation Function - COMPLETELY REWRITTEN
    function initializeStatsAnimation() {
        const statNumbers = document.querySelectorAll('.stat-number');
        const statsContainer = document.querySelector('.stats-container');
        
        if (!statNumbers.length || !statsContainer) {
            console.log('Stats elements not found');
            return;
        }
        
        console.log('Found', statNumbers.length, 'stats to animate');
        
        // Force initial values
        statNumbers.forEach(stat => {
            const target = stat.getAttribute('data-target');
            if (target) {
                stat.textContent = '0+';
            }
        });
        
        let animated = false;
        
        function animateCounter() {
            if (animated) {
                console.log('Stats already animated');
                return;
            }
            
            console.log('Starting stats animation');
            
            statNumbers.forEach(stat => {
                const targetStr = stat.getAttribute('data-target');
                const target = parseInt(targetStr);
                
                // Validate target
                if (isNaN(target) || target <= 0) {
                    console.error('Invalid target value:', targetStr);
                    stat.textContent = '0+';
                    return;
                }
                
                const duration = 1500; // 1.5 seconds
                const stepTime = 30; // Update every 30ms
                const steps = duration / stepTime;
                const increment = target / steps;
                let current = 0;
                let step = 0;
                
                const timer = setInterval(() => {
                    step++;
                    current += increment;
                    
                    if (step >= steps) {
                        current = target;
                        clearInterval(timer);
                        console.log('Stat finished:', target);
                    }
                    
                    stat.textContent = Math.floor(current) + '+';
                }, stepTime);
            });
            
            statsContainer.classList.add('animated');
            animated = true;
        }
        
        // Check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Check on scroll
        function checkScroll() {
            if (isInViewport(statsContainer) || window.scrollY < 300) {
                animateCounter();
                window.removeEventListener('scroll', checkScroll);
            }
        }
        
        // Check immediately
        setTimeout(checkScroll, 100);
        
        // Check on scroll
        window.addEventListener('scroll', checkScroll);
        
        // Force animation after 1 second if not triggered
        setTimeout(function() {
            if (!animated) {
                console.log('Forcing stats animation');
                animateCounter();
            }
        }, 2000);
    }

    // Project Gallery Functionality - COMPLETELY REWRITTEN
    function initializeProjectGallery() {
        console.log('Initializing project gallery');
        
        const galleryModal = document.getElementById('galleryModal');
        
        if (!galleryModal) {
            console.error('Gallery modal not found - check HTML for id="galleryModal"');
            return;
        }
        
        // Get all view gallery buttons
        const viewGalleryBtns = document.querySelectorAll('.view-gallery-btn');
        
        if (viewGalleryBtns.length === 0) {
            console.error('No view gallery buttons found - check for class="view-gallery-btn" in HTML');
            return;
        }
        
        console.log('Found', viewGalleryBtns.length, 'gallery buttons');
        
        // Get gallery elements
        const closeGalleryModal = document.getElementById('closeGalleryModal');
        const galleryPrevBtn = document.querySelector('.gallery-prev');
        const galleryNextBtn = document.querySelector('.gallery-next');
        const mainGalleryImage = document.getElementById('mainGalleryImage');
        const galleryThumbnails = document.getElementById('galleryThumbnails');
        const galleryProjectTitle = document.getElementById('galleryProjectTitle');
        const galleryProjectName = document.getElementById('galleryProjectName');
        const galleryProjectDescription = document.getElementById('galleryProjectDescription');
        const galleryProjectLocation = document.getElementById('galleryProjectLocation');
        const galleryProjectYear = document.getElementById('galleryProjectYear');
        const galleryProjectCategory = document.getElementById('galleryProjectCategory');
        const galleryProjectStatus = document.getElementById('galleryProjectStatus');
        const currentImageSpan = document.getElementById('currentImage');
        const totalImagesSpan = document.getElementById('totalImages');
        
        let currentGallery = null;
        let currentImageIndex = 0;

        // Add click event to each button
        viewGalleryBtns.forEach((btn, index) => {
            console.log('Adding click event to button', index);
            
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const projectId = this.getAttribute('data-project');
                console.log('Gallery button clicked for project ID:', projectId);
                
                if (!projectId) {
                    console.error('No project ID found on button');
                    alert('Project ID not found');
                    return;
                }
                
                // Get gallery data
                const galleryData = projectGalleries[projectId];
                
                if (!galleryData) {
                    console.error('No gallery data for project ID:', projectId);
                    console.log('Available project IDs:', Object.keys(projectGalleries));
                    alert('Gallery images not available for this project');
                    return;
                }
                
                console.log('Opening gallery for:', galleryData.title);
                
                // Set current gallery
                currentGallery = galleryData;
                currentImageIndex = 0;
                
                // Update title
                if (galleryProjectTitle) {
                    galleryProjectTitle.textContent = galleryData.title + ' - Gallery';
                }
                
                // Update project info
                if (galleryProjectName) galleryProjectName.textContent = galleryData.title;
                if (galleryProjectDescription) galleryProjectDescription.textContent = galleryData.description;
                if (galleryProjectLocation) galleryProjectLocation.textContent = galleryData.location;
                if (galleryProjectYear) galleryProjectYear.textContent = galleryData.year;
                if (galleryProjectCategory) galleryProjectCategory.textContent = galleryData.category;
                if (galleryProjectStatus) galleryProjectStatus.textContent = galleryData.status;
                if (totalImagesSpan) totalImagesSpan.textContent = galleryData.images.length;
                
                // Set main image
                if (mainGalleryImage) {
                    mainGalleryImage.src = galleryData.images[0];
                    mainGalleryImage.alt = galleryData.title;
                }
                
                if (currentImageSpan) currentImageSpan.textContent = '1';
                
                // Create thumbnails
                if (galleryThumbnails) {
                    galleryThumbnails.innerHTML = '';
                    
                    galleryData.images.forEach((image, idx) => {
                        const thumbnail = document.createElement('div');
                        thumbnail.className = 'thumbnail' + (idx === 0 ? ' active' : '');
                        thumbnail.innerHTML = '<img src="' + image + '" alt="Thumbnail ' + (idx + 1) + '">';
                        
                        thumbnail.addEventListener('click', function() {
                            if (currentGallery) {
                                currentImageIndex = idx;
                                if (mainGalleryImage) mainGalleryImage.src = currentGallery.images[idx];
                                if (currentImageSpan) currentImageSpan.textContent = (idx + 1).toString();
                                
                                // Update active thumbnail
                                const allThumbs = document.querySelectorAll('.thumbnail');
                                allThumbs.forEach((thumb, i) => {
                                    if (i === idx) {
                                        thumb.classList.add('active');
                                    } else {
                                        thumb.classList.remove('active');
                                    }
                                });
                            }
                        });
                        
                        galleryThumbnails.appendChild(thumbnail);
                    });
                }
                
                // Show modal
                galleryModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        // Previous button
        if (galleryPrevBtn) {
            galleryPrevBtn.addEventListener('click', function() {
                if (!currentGallery || !currentGallery.images) return;
                
                let newIndex = currentImageIndex - 1;
                if (newIndex < 0) newIndex = currentGallery.images.length - 1;
                
                currentImageIndex = newIndex;
                
                if (mainGalleryImage) mainGalleryImage.src = currentGallery.images[newIndex];
                if (currentImageSpan) currentImageSpan.textContent = (newIndex + 1).toString();
                
                // Update active thumbnail
                const thumbnails = document.querySelectorAll('.thumbnail');
                thumbnails.forEach((thumb, i) => {
                    if (i === newIndex) {
                        thumb.classList.add('active');
                    } else {
                        thumb.classList.remove('active');
                    }
                });
            });
        }

        // Next button
        if (galleryNextBtn) {
            galleryNextBtn.addEventListener('click', function() {
                if (!currentGallery || !currentGallery.images) return;
                
                let newIndex = currentImageIndex + 1;
                if (newIndex >= currentGallery.images.length) newIndex = 0;
                
                currentImageIndex = newIndex;
                
                if (mainGalleryImage) mainGalleryImage.src = currentGallery.images[newIndex];
                if (currentImageSpan) currentImageSpan.textContent = (newIndex + 1).toString();
                
                // Update active thumbnail
                const thumbnails = document.querySelectorAll('.thumbnail');
                thumbnails.forEach((thumb, i) => {
                    if (i === newIndex) {
                        thumb.classList.add('active');
                    } else {
                        thumb.classList.remove('active');
                    }
                });
            });
        }

        // Close button
        if (closeGalleryModal) {
            closeGalleryModal.addEventListener('click', function() {
                galleryModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                currentGallery = null;
            });
        }

        // Click outside to close
        window.addEventListener('click', function(e) {
            if (e.target === galleryModal) {
                galleryModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                currentGallery = null;
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (galleryModal.style.display !== 'flex') return;
            
            if (e.key === 'Escape') {
                galleryModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                currentGallery = null;
            } else if (e.key === 'ArrowLeft') {
                if (galleryPrevBtn) galleryPrevBtn.click();
            } else if (e.key === 'ArrowRight') {
                if (galleryNextBtn) galleryNextBtn.click();
            }
        });
    }

    // Portfolio Filter Functionality
    function initializePortfolioFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        if (filterBtns.length === 0 || projectCards.length === 0) return;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (filterValue === 'all') {
                        card.style.display = 'flex';
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else if (filterValue === 'completed' && cardCategory && cardCategory.includes('completed')) {
                        card.style.display = 'flex';
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else if (filterValue === 'ongoing' && cardCategory && cardCategory.includes('ongoing')) {
                        card.style.display = 'flex';
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else if (filterValue === 'proposed' && cardCategory && cardCategory.includes('proposed')) {
                        card.style.display = 'flex';
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else if (filterValue === 'residential' && cardCategory && cardCategory.includes('residential')) {
                        card.style.display = 'flex';
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Update active navigation link on scroll
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Debug function to check elements
    window.debugWebsite = function() {
        console.log('=== WEBSITE DEBUG ===');
        console.log('Stats found:', document.querySelectorAll('.stat-number').length);
        console.log('Gallery buttons found:', document.querySelectorAll('.view-gallery-btn').length);
        console.log('Gallery modal exists:', !!document.getElementById('galleryModal'));
        console.log('Project cards found:', document.querySelectorAll('.project-card').length);
        console.log('Available gallery IDs:', Object.keys(projectGalleries));
        
        // Check if buttons have data-project attributes
        document.querySelectorAll('.view-gallery-btn').forEach((btn, i) => {
            console.log('Button', i, 'data-project:', btn.getAttribute('data-project'));
        });
    };
    
    // Run debug after 2 seconds
    setTimeout(function() {
        if (typeof window.debugWebsite === 'function') {
            window.debugWebsite();
        }
    }, 2000);
});