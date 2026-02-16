// ========== DARK MODE TOGGLE ==========
function initTheme() {
	// Check for saved theme preference or default to light mode
	const savedTheme = localStorage.getItem('theme') || 'light';
	document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const newTheme = currentTheme === 'light' ? 'dark' : 'light';
	
	document.documentElement.setAttribute('data-theme', newTheme);
	localStorage.setItem('theme', newTheme);
	
	// Add rotation animation
	const toggle = document.querySelector('.theme-toggle');
	if (toggle) {
		toggle.style.transform = 'rotate(360deg) scale(1.2)';
		setTimeout(() => {
			toggle.style.transform = '';
		}, 300);
	}
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, observerOptions);

	// Observe all elements with animation classes
	document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
		observer.observe(el);
	});
}

// ========== STICKY NAV SHADOW ==========
function initStickyNav() {
	const nav = document.querySelector('nav');
	if (!nav) return;

	window.addEventListener('scroll', () => {
		const isCompact = window.pageYOffset > 100;
		nav.classList.toggle('nav--compact', isCompact);
		nav.style.boxShadow = isCompact
			? '0 6px 20px rgba(0, 0, 0, 0.2)'
			: '0 4px 12px rgba(0, 0, 0, 0.1)';
	});
}

// ========== NAV ACTIVE STATE (SCROLLSPY) ==========
function initScrollSpy() {
	const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
	if (!navLinks.length) return;

	const sections = navLinks
		.map(link => document.querySelector(link.getAttribute('href')))
		.filter(Boolean);

	const setActiveLink = (id) => {
		navLinks.forEach(link => {
			const isActive = link.getAttribute('href') === `#${id}`;
			link.classList.toggle('active', isActive);
		});
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				setActiveLink(entry.target.id);
			}
		});
	}, {
		root: null,
		threshold: 0,
		rootMargin: '-30% 0px -60% 0px'
	});

	sections.forEach(section => observer.observe(section));

	if (sections[0]) {
		setActiveLink(sections[0].id);
	}
}

// ========== CAROUSEL ==========
function initCarousels() {
	document.querySelectorAll('.carousel').forEach((carousel) => {
		const track = carousel.querySelector('.carousel-track');
		const prevBtn = carousel.querySelector('.carousel-button.prev');
		const nextBtn = carousel.querySelector('.carousel-button.next');

		if (!track || !prevBtn || !nextBtn) return;

		// Create infinite carousel by cloning items
		const items = Array.from(track.querySelectorAll('.carousel-item'));
		const firstClones = items.slice(0, 1).map(item => item.cloneNode(true));
		const lastClones = items.slice(-1).map(item => item.cloneNode(true));
		
		firstClones.forEach(clone => track.appendChild(clone));
		track.insertBefore(lastClones[0], track.firstChild);

		const getScrollAmount = () => {
			const item = track.querySelector('.carousel-item');
			if (!item) return 280;
			const itemWidth = item.getBoundingClientRect().width;
			const gap = parseFloat(getComputedStyle(track).gap || 0);
			return itemWidth + gap;
		};

		const handleInfiniteScroll = () => {
			const itemSize = getScrollAmount();
			const scrollLeft = track.scrollLeft;
			const maxScroll = track.scrollWidth - track.clientWidth;

			// If scrolled to the end, jump to start
			if (scrollLeft >= maxScroll - itemSize * 0.5) {
				track.scrollLeft = itemSize;
			}
			// If scrolled to the beginning, jump to end
			else if (scrollLeft <= itemSize * 0.5) {
				track.scrollLeft = maxScroll - itemSize * 2;
			}
		};

		prevBtn.addEventListener('click', () => {
			track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
		});

		nextBtn.addEventListener('click', () => {
			track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
		});

		track.addEventListener('scroll', handleInfiniteScroll);

		let isPointerDown = false;
		let startX = 0;
		let startScrollLeft = 0;
		let dragged = false;
		const dragThreshold = 6;

		const handlePointerDown = (event) => {
			if (event.button !== undefined && event.button !== 0) return;
			dragged = false;
			if (event.target.closest('a, button')) return;
			isPointerDown = true;
			startX = event.clientX;
			startScrollLeft = track.scrollLeft;
		};

		const handlePointerMove = (event) => {
			if (!isPointerDown) return;
			const deltaX = event.clientX - startX;
			if (Math.abs(deltaX) > dragThreshold) {
				dragged = true;
				track.classList.add('is-dragging');
			}
			if (dragged) {
				track.scrollLeft = startScrollLeft - deltaX;
			}
		};

		const handlePointerUp = () => {
			if (!isPointerDown) return;
			isPointerDown = false;
			track.classList.remove('is-dragging');
		};

		track.addEventListener('pointerdown', handlePointerDown);
		track.addEventListener('pointermove', handlePointerMove);
		track.addEventListener('pointerup', handlePointerUp);
		track.addEventListener('pointerleave', handlePointerUp);
		track.addEventListener('pointercancel', handlePointerUp);

		track.addEventListener('click', (event) => {
			if (!dragged) return;
			event.preventDefault();
			event.stopPropagation();
			dragged = false;
		});

		// Initialize scroll position
		track.scrollLeft = getScrollAmount();
	});
}

// ========== ADD ANIMATION CLASSES TO ELEMENTS ==========
function addAnimationClasses() {
	// Add fade-in to project cards
	document.querySelectorAll('.project-card').forEach((card, index) => {
		card.classList.add('fade-in');
		card.style.transitionDelay = `${index * 0.1}s`;
	});

	// Add slide-in to posts
	document.querySelectorAll('.post').forEach((post, index) => {
		post.classList.add('slide-in-left');
		post.style.transitionDelay = `${index * 0.15}s`;
	});

	// Add fade-in to contact items
	document.querySelectorAll('.contact-item').forEach((item, index) => {
		item.classList.add('fade-in');
		item.style.transitionDelay = `${index * 0.1}s`;
	});

	// Add fade-in to sections
	document.querySelectorAll('main section').forEach((section, index) => {
		if (!section.classList.contains('posts-section')) {
			section.classList.add('fade-in');
			section.style.transitionDelay = `${index * 0.1}s`;
		}
	});
}

// ========== BUTTON RIPPLE EFFECT ==========
function initButtonRipple() {
	document.querySelectorAll('.btn-curriculum, .btn-see-more, .btn-github, .btn-back').forEach(button => {
		button.addEventListener('click', function(e) {
			const ripple = document.createElement('span');
			const rect = this.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = e.clientX - rect.left - size / 2;
			const y = e.clientY - rect.top - size / 2;
			
			ripple.style.width = ripple.style.height = size + 'px';
			ripple.style.left = x + 'px';
			ripple.style.top = y + 'px';
			ripple.classList.add('ripple');
			
			this.appendChild(ripple);
			
			setTimeout(() => ripple.remove(), 600);
		});
	});
}

// ========== TOOLS DRAWER ==========
function initToolsDrawer() {
	const drawer = document.querySelector('.tools-drawer');
	if (!drawer) return;

	const toggle = drawer.querySelector('.tools-toggle');
	const panel = drawer.querySelector('.tools-panel');
	if (!toggle || !panel) return;

	const setOpenState = (isOpen) => {
		drawer.classList.toggle('open', isOpen);
		toggle.setAttribute('aria-expanded', String(isOpen));
		panel.setAttribute('aria-hidden', String(!isOpen));
	};

	setOpenState(false);

	// Open on hover of the toggle button
	toggle.addEventListener('mouseenter', () => setOpenState(true));

	// Close only when leaving the entire drawer (button + panel)
	drawer.addEventListener('mouseleave', () => setOpenState(false));

	drawer.addEventListener('focusin', () => setOpenState(true));
	drawer.addEventListener('focusout', () => setOpenState(false));

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			setOpenState(false);
		}
	});

	// Language selector
	const langBtns = drawer.querySelectorAll('.lang-btn');
	const currentLang = localStorage.getItem('site-language') || 'pt';

	// Set initial language
	if (typeof translatePage !== 'undefined') {
		translatePage(currentLang);
	}

	langBtns.forEach((btn) => {
		const lang = btn.getAttribute('data-lang');

		// Set active button based on saved language
		if (lang === currentLang) {
			btn.classList.add('lang-btn-active');
		}

		btn.addEventListener('click', () => {
			// Remove active class from all buttons
			langBtns.forEach((b) => b.classList.remove('lang-btn-active'));

			// Add active class to clicked button
			btn.classList.add('lang-btn-active');

			// Save language preference
			localStorage.setItem('site-language', lang);

			// Apply translation
			if (typeof translatePage !== 'undefined') {
				translatePage(lang);
			}

			// Trigger language change event (for future internationalization)
			const event = new CustomEvent('languageChange', { detail: { language: lang } });
			document.dispatchEvent(event);

			console.log(`Language changed to: ${lang}`);
		});
	});
}

// Add ripple CSS dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
	button, .btn-curriculum, .btn-see-more, .btn-github, .btn-back {
		position: relative;
		overflow: hidden;
	}
	
	.ripple {
		position: absolute;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.6);
		transform: scale(0);
		animation: ripple-animation 0.6s ease-out;
		pointer-events: none;
	}
	
	@keyframes ripple-animation {
		to {
			transform: scale(4);
			opacity: 0;
		}
	}
`;
document.head.appendChild(rippleStyle);

// ========== INITIALIZE EVERYTHING ==========
document.addEventListener('DOMContentLoaded', () => {
	initTheme();
	addAnimationClasses();
	initScrollAnimations();
	initStickyNav();
	initButtonRipple();
	initCarousels();
	initScrollSpy();
	initToolsDrawer();
	
	// Initialize language on page load
	const savedLang = localStorage.getItem('site-language') || 'pt';
	if (typeof translatePage !== 'undefined') {
		translatePage(savedLang);
	}
	
	// Add event listener to theme toggle button
	const themeToggle = document.querySelector('.theme-toggle');
	if (themeToggle) {
		themeToggle.addEventListener('click', toggleTheme);
	}
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
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
