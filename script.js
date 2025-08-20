function celebrate() {
    for (let i = 0; i < 20; i++) {
        createFloatingElement();
    }

    const btn = document.querySelector('.btn');
    btn.textContent = 'Yay! 🎉';
    setTimeout(() => {
        btn.textContent = 'Celebrate Again!';
    }, 1000);
}

function createFloatingElement() {
    const types = ['circle', 'square', 'triangle'];
    const colors = ['#ff5e5e', '#5eff5e', '#5e5eff', '#ffff5e', '#ff5eff', '#5effff'];

    const element = document.createElement('div');
    const type = types[Math.floor(Math.random() * types.length)];
    const size = Math.random() * 20 + 10;

    element.style.position = 'fixed';
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.background = colors[Math.floor(Math.random() * colors.length)];
    element.style.left = `${Math.random() * 100}vw`;
    element.style.top = '100vh';
    element.style.borderRadius = type === 'circle' ? '50%' : '0';
    element.style.zIndex = '9999';
    element.style.pointerEvents = 'none';

    if (type === 'triangle') {
        element.style.width = '0';
        element.style.height = '0';
        element.style.background = 'transparent';
        element.style.borderLeft = `${size / 2}px solid transparent`;
        element.style.borderRight = `${size / 2}px solid transparent`;
        element.style.borderBottom = `${size}px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
        element.style.borderRadius = '0';
    }

    document.body.appendChild(element);

    const animation = element.animate([
        { transform: 'translateY(0)', opacity: 1 },
        { transform: `translateY(-${window.innerHeight + 200}px) translateX(${Math.random() * 200 - 100}px)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'cubic-bezier(0.1, 0.2, 0.3, 1)'
    });

    animation.onfinish = () => {
        element.remove();
    };
}

// Add initial floating elements
for (let i = 0; i < 10; i++) {
    setTimeout(createFloatingElement, i * 300);
}

// Flip card on mobile tap
document.querySelector('.card-container').addEventListener('click', function () {
    this.classList.toggle('flipped');
});
