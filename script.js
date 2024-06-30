    document.addEventListener('DOMContentLoaded', () => {
        const character = document.getElementById('character');
        const sections = document.querySelectorAll('section');
        const offsets = Array.from(sections).map(section => section.offsetTop);

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = 0; i < offsets.length; i++) {
                if (scrollPosition >= offsets[i] && (i === offsets.length - 1 || scrollPosition < offsets[i + 1])) {
                    character.style.top = `${sections[i].offsetTop + sections[i].clientHeight / 2 - 50}px`;
                    break;
                }
            }
        });
    });