// ========================================
// FAQ Accordion Toggle
// ========================================
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const allFaqItems = document.querySelectorAll('.faq-item');

    // Close all other FAQ items
    allFaqItems.forEach(item => {
        if (item !== faqItem) {
            const otherButton = item.querySelector('.faq-question');
            const otherAnswer = item.querySelector('.faq-answer');
            otherButton.classList.remove('active');
            otherAnswer.classList.remove('active');
        }
    });

    // Toggle current FAQ item
    button.classList.toggle('active');
    answer.classList.toggle('active');
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#" or "#kakao" or "#contact" (these would need actual implementations)
            if (href === '#' || href === '#kakao' || href === '#contact') {
                e.preventDefault();
                // Here you would add your actual contact form or Kakao integration
                alert('카카오톡 상담 링크 또는 문의 폼을 여기에 연결해주세요.');
                return;
            }

            // For other anchors, smooth scroll
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ========================================
// Floating CTA Button Show/Hide on Scroll
// ========================================
let lastScrollTop = 0;
const floatingCTA = document.querySelector('.floating-cta');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show floating CTA after scrolling down 300px
    if (scrollTop > 300) {
        floatingCTA.style.opacity = '1';
        floatingCTA.style.pointerEvents = 'auto';
    } else {
        floatingCTA.style.opacity = '0';
        floatingCTA.style.pointerEvents = 'none';
    }

    lastScrollTop = scrollTop;
});

// Initial state for floating CTA
if (floatingCTA) {
    floatingCTA.style.opacity = '0';
    floatingCTA.style.pointerEvents = 'none';
    floatingCTA.style.transition = 'opacity 0.3s ease';
}

// ========================================
// Intersection Observer for Fade-in Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.card, .step-item, .ba-item, .faq-item');
    animateElements.forEach(el => observer.observe(el));
});

// ========================================
// Note: Kakao Talk Integration
// ========================================
/*
To integrate actual Kakao Talk functionality, you would need to:

1. Register your app at https://developers.kakao.com/
2. Add Kakao JavaScript SDK to your HTML:
   <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
3. Initialize Kakao SDK with your API key:
   Kakao.init('YOUR_API_KEY');
4. Replace the alert() in the click handler with actual Kakao functions

Example Kakao Channel Chat:
function openKakaoChat() {
    Kakao.Channel.chat({
        channelPublicId: '_yourChannelId'
    });
}

Or use Kakao Share API to share your page.
*/
