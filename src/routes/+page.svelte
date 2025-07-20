<script>
  import '../app.css';
  let menuOpen = false;
  let servicesOpen = false;
  let carouselScroll;

  function scrollLeft(ref) {
    if (!ref) return;
    const cardWidth = ref.querySelector('div')?.offsetWidth || 300;

    if (ref.scrollLeft <= 0) {
      ref.scrollTo({ left: ref.scrollWidth, behavior: 'auto' });
    } else {
      ref.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  }

  function scrollRight(ref) {
    if (!ref) return;
    const cardWidth = ref.querySelector('div')?.offsetWidth || 300;
    const maxScrollLeft = ref.scrollWidth - ref.clientWidth;

    if (ref.scrollLeft >= maxScrollLeft - 10) {
      ref.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      ref.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  }
</script>

<div class="min-h-screen bg-base text-primary font-sans">
  <!-- Navbar -->
  <nav class="bg-white border-b border-soft sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-24 sm:h-40">
      <div class="flex items-center sm:-ml-40">
        <img src="/BiosculptorLogo.png" alt="BioSculptor Logo" class="h-16 sm:h-20 w-auto" />
      </div>
      <div class="md:hidden">
        <button on:click={() => (menuOpen = !menuOpen)} class="text-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded p-1">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <ul class="hidden md:flex space-x-10 text-primary font-medium text-xl items-center relative">
        <li><a href="#" class="hover:text-accent">Home</a></li>
        <li class="relative">
          <button on:click={() => (servicesOpen = !servicesOpen)} class="hover:text-accent flex items-center focus:outline-none">
            Services
            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {#if servicesOpen}
            <ul class="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
              <li><a href="#" class="block px-4 py-2 hover:bg-soft">Fabrication</a></li>
              <li><a href="#" class="block px-4 py-2 hover:bg-soft">Foam Blanks</a></li>
              <li><a href="#" class="block px-4 py-2 hover:bg-soft">CAD/CAM</a></li>
              <li><a href="#" class="block px-4 py-2 hover:bg-soft">Kinderband™</a></li>
            </ul>
          {/if}
        </li>
        <li><a href="#" class="hover:text-accent">Pricing</a></li>
        <li><a href="#" class="hover:text-accent">Contact</a></li>
      </ul>
    </div>
    {#if menuOpen}
      <ul class="md:hidden px-6 pb-4 space-y-3 text-primary font-medium bg-white border-t border-soft text-lg">
        <li><a href="#" class="block py-2 hover:text-accent">Home</a></li>
        <li>
          <button on:click={() => (servicesOpen = !servicesOpen)} class="w-full text-left py-2 hover:text-accent flex items-center justify-between">
            Services
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {#if servicesOpen}
            <ul class="pl-4 mt-1 space-y-1">
              <li><a href="#" class="block py-1 hover:text-accent">Fabrication</a></li>
              <li><a href="#" class="block py-1 hover:text-accent">Foam Blanks</a></li>
              <li><a href="#" class="block py-1 hover:text-accent">CAD/CAM</a></li>
              <li><a href="#" class="block py-1 hover:text-accent">Kinderband™</a></li>
            </ul>
          {/if}
        </li>
        <li><a href="#" class="block py-2 hover:text-accent">Pricing</a></li>
        <li><a href="#" class="block py-2 hover:text-accent">Contact</a></li>
      </ul>
    {/if}
  </nav>

  <!-- Carousel Section -->
  <section class="px-4 py-10 bg-white">
    <div class="w-full sm:w-[75vw] mx-auto overflow-hidden relative">
      <button on:click={() => scrollLeft(carouselScroll)} class="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full">◀</button>
      <div bind:this={carouselScroll} class="flex snap-x snap-mandatory scroll-smooth overflow-x-auto no-scrollbar">
        {#each [
          { src: '/vacuumforming-card.jpg', title: 'Vacuum Forming', desc: 'Precision-formed plastics for orthotic applications.' },
          { src: '/fab.jpg', title: 'Custom Fabrication', desc: 'Made-to-spec designs for clinics and labs.' },
          { src: '/Ortho.jpg', title: 'Lower Limb Prosthetics', desc: 'Support and stabilization for mobility needs.' },
          { src: '/hand.jpg', title: 'Upper Limb Prosthetics', desc: 'Functional assistance for hand and arm movement.' },
        ] as item}
        <div class="min-w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-soft rounded-lg shadow-md snap-start shrink-0 overflow-hidden relative mx-auto">
          <img src={item.src} alt={item.title} class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
          <div class="relative z-10 h-full flex flex-col justify-end p-6 text-white">
            <h3 class="text-3xl sm:text-6xl font-bold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
        {/each}
      </div>
      <button on:click={() => scrollRight(carouselScroll)} class="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full">▶</button>
    </div>
  </section>

  <!-- Hero Section -->
  <section class="bg-white text-center py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-4">Innovative Orthotic & Prosthetic Solutions</h1>
      <p class="text-lg mb-6">Empowering motion, improving lives — one solution at a time.</p>
      <button class="bg-accent hover:bg-orangeTint text-white px-6 py-3 rounded transition duration-300">Get Started</button>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="bg-soft py-16 px-4 text-center">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-4">Why Choose BioSculptor?</h2>
      <p class="text-lg text-primary mb-8">Decades of experience, precision technology, and a team dedicated to mobility solutions.</p>
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-semibold text-accent mb-2">Custom Fabrication</h3>
          <p>Precision-fit orthotics and prosthetics tailored to each patient’s needs.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-accent mb-2">Advanced Materials</h3>
          <p>We use lightweight, medical-grade, and durable materials in every build.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-accent mb-2">Trusted by Professionals</h3>
          <p>Clinics and hospitals nationwide rely on our high-performance designs.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="bg-white py-16 px-4 text-center">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-8">What Our Clients Say</h2>
      <div class="grid md:grid-cols-3 gap-6 text-left">
        <div class="bg-soft p-6 rounded-lg shadow">
          <p>"BioSculptor’s devices are second to none. Their turnaround time and quality are unmatched."</p>
          <span class="block mt-4 font-bold text-primary">— OrthoLab Miami</span>
        </div>
        <div class="bg-soft p-6 rounded-lg shadow">
          <p>"The team is professional and always delivers exactly what we need. Highly recommend."</p>
          <span class="block mt-4 font-bold text-primary">— Precision O&P</span>
        </div>
        <div class="bg-soft p-6 rounded-lg shadow">
          <p>"Our patients love the fit and finish of the orthotics. These guys know what they’re doing."</p>
          <span class="block mt-4 font-bold text-primary">— Advanced Rehab Group</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="bg-soft py-20 text-center px-4">
    <div class="max-w-xl mx-auto">
      <h2 class="text-3xl font-bold mb-4">Ready to Build Something Together?</h2>
      <p class="text-lg mb-6">Let’s create solutions that move with purpose and precision.</p>
      <a href="#" class="inline-block bg-accent hover:bg-orangeTint text-white px-6 py-3 rounded transition duration-300">Contact Us</a>
    </div>
  </section>

  <!-- Footer -->
<footer class="bg-deep text-white">
  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href="/" class="flex items-center">
          <img src="/BiosculptorLogo.png" class="h-8 me-3" alt="BioSculptor Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap">BioSculptor</span>
        </a>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase">Resources</h2>
          <ul class="text-soft font-medium">
            <li class="mb-4">
              <a href="https://flowbite.com/" class="hover:text-orangeTint">Flowbite</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" class="hover:text-orangeTint">Tailwind CSS</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase">Follow us</h2>
          <ul class="text-soft font-medium">
            <li class="mb-4">
              <a href="https://github.com/erniesmith82" class="hover:text-orangeTint">GitHub</a>
            </li>
            <li>
              <a href="#" class="hover:text-orangeTint">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase">Legal</h2>
          <ul class="text-soft font-medium">
            <li class="mb-4">
              <a href="#" class="hover:text-orangeTint">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:text-orangeTint">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-soft sm:mx-auto lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-soft sm:text-center">© {new Date().getFullYear()} <a href="/" class="hover:text-orangeTint">BioSculptor™</a>. All rights reserved.</span>
      <div class="flex mt-4 sm:justify-center sm:mt-0 space-x-6">
        <a href="#" class="text-soft hover:text-orangeTint" aria-label="Facebook">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 0-11.63 9.87v-6.99H7.9v-2.88h2.47V9.41c0-2.44 1.46-3.8 3.69-3.8 1.07 0 2.19.2 2.19.2v2.41h-1.23c-1.21 0-1.58.75-1.58 1.51v1.81h2.69l-.43 2.88h-2.26v6.99A10 10 0 0 0 22 12Z"/>
          </svg>
        </a>
        <a href="#" class="text-soft hover:text-orangeTint" aria-label="Twitter">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19.633 7.997c.013.179.013.358.013.537 0 5.468-4.162 11.774-11.774 11.774-2.34 0-4.517-.683-6.348-1.864.337.04.661.053 1.012.053 1.946 0 3.735-.66 5.154-1.774-1.82-.034-3.35-1.234-3.88-2.885.255.04.51.066.779.066.374 0 .748-.053 1.096-.146-1.898-.382-3.322-2.058-3.322-4.07v-.053c.561.31 1.19.5 1.873.525a4.11 4.11 0 0 1-1.832-3.42c0-.765.204-1.47.561-2.082a11.603 11.603 0 0 0 8.412 4.265 4.636 4.636 0 0 1-.102-.938c0-2.286 1.855-4.14 4.14-4.14 1.19 0 2.268.5 3.024 1.303a8.236 8.236 0 0 0 2.623-.996 4.12 4.12 0 0 1-1.814 2.274 8.275 8.275 0 0 0 2.375-.623 8.865 8.865 0 0 1-2.07 2.13Z"/>
          </svg>
        </a>
        <a href="#" class="text-soft hover:text-orangeTint" aria-label="GitHub">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.05-1.61-4.05-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.83 2.79 1.3 3.47.99.11-.77.41-1.3.75-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.51.12-3.14 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.63.25 2.84.13 3.14.78.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.93.42.36.79 1.08.79 2.18v3.23c0 .32.22.7.83.58A12 12 0 0 0 12 0Z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

</div>
