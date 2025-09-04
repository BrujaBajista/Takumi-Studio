export default class Carousel3D {
    constructor(selector, radius = 300, defaultVelocity = 0.1) {
        this.carousel = document.querySelector(selector);
        this.inner = this.carousel.querySelector('.carousel-gav-inner');
        this.figures = this.inner.querySelectorAll('figure');
        this.total = this.figures.length;

        this.rotationY = 0;
        this.velocity = defaultVelocity;
        this.targetVelocity = this.velocity;
        this.lastMouseX = 0;
        this.isDragging = false;
        this.isHovering = false;

        this.initPositions(radius);
        this.bindEvents();
        this.setupCardClicks();
        this.animate();
    }

    initPositions(radius) {
        this.figures.forEach((fig, i) => {
            const angle = (360 / this.total) * i;
            fig.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        });
    }

    bindEvents() {
        this.carousel.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.lastMouseX = e.clientX;
            this.carousel.classList.add('dragging');
            e.preventDefault();
        });

        window.addEventListener('mouseup', () => {
            this.isDragging = false;
            this.carousel.classList.remove('dragging');
        });

        this.carousel.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            const deltaX = e.clientX - this.lastMouseX;
            this.targetVelocity = deltaX * 0.1;
            this.lastMouseX = e.clientX;
        });

        this.carousel.addEventListener('mouseenter', () => {
            this.isHovering = true;
        });

        this.carousel.addEventListener('mouseleave', () => {
            this.isHovering = false;
        });
    }

    animate() {
        if (!this.isDragging && !this.isHovering) {
            this.velocity += (this.velocity > 0 ? -0.01 : 0.01);
            if (Math.abs(this.velocity) < 0.1) this.velocity = this.velocity > 0 ? 0.1 : -0.1;
        } else if (this.isHovering && !this.isDragging) {
            this.velocity += (0 - this.velocity) * 0.1;
        } else {
            this.velocity += (this.targetVelocity - this.velocity) * 0.1;
        }

        this.rotationY += this.velocity;
        this.inner.style.transform = `rotateY(${this.rotationY}deg)`;
        requestAnimationFrame(this.animate.bind(this));
    }

    setupCardClicks() {
        this.figures.forEach((fig, index) => {
            fig.addEventListener('click', () => {
                console.log(`Tarjeta ${index + 1} clickeada 🚀`);
                // 👉 acá podés disparar un modal, abrir info, etc.
            });
        });
    }
}
