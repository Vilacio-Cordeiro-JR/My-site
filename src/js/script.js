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

// ========== SCROLL TO TOP BUTTON ==========
function initScrollToTop() {
	const scrollBtn = document.querySelector('.scroll-to-top');
	if (!scrollBtn) return;

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 300) {
			scrollBtn.classList.add('visible');
		} else {
			scrollBtn.classList.remove('visible');
		}
	});

	scrollBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
}

// ========== STICKY NAV SHADOW ==========
function initStickyNav() {
	const nav = document.querySelector('nav');
	if (!nav) return;

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 100) {
			nav.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
		} else {
			nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
		}
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
	initScrollToTop();
	initStickyNav();
	initButtonRipple();
	
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
