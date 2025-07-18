<script>
  import '../app.css';
  let menuOpen = false;
  let servicesOpen = false;
  let carouselScroll;

  function scrollLeft(ref) {
    if (!ref) return;
    const cardWidth = ref.querySelector('div')?.offsetWidth || 300;

    if (ref.scrollLeft <= 0) {
      // Jump to the end
      ref.scrollTo({ left: ref.scrollWidth, behavior: 'auto' });
    } else {
      ref.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  }

 function scrollRight(ref) {
  if (!ref) return;
  const cardWidth = ref.querySelector('div')?.offsetWidth || 300;

  const maxScrollLeft = ref.scrollWidth - ref.clientWidth;

  // Add a small buffer to ensure it reaches the last card before resetting
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
  <div class="max-w-7xl mx-auto flex items-center justify-between px-6 h-40">
    <!-- Logo -->
    <div class="flex items-center -ml-40">
      <img src="/BiosculptorLogo.png" alt="BioSculptor Logo" class="h-20 w-auto" />
    </div>

    <!-- Mobile Toggle -->
    <div class="md:hidden">
      <button
        on:click={() => (menuOpen = !menuOpen)}
        class="text-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded p-1"
      >
        <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Desktop Nav -->
    <ul class="hidden md:flex space-x-8 text-primary font-medium text-xl items-center relative">
      <li><a href="#" class="hover:text-accent">Home</a></li>
      <li class="relative">
        <button
          on:click={() => (servicesOpen = !servicesOpen)}
          class="hover:text-accent flex items-center focus:outline-none"
        >
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

  <!-- Mobile Nav remains unchanged -->
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

<!--Carousel Section -->
<section class="px-4 py-10 bg-white">
  <div class="w-full overflow-hidden relative">
    <!-- Left Scroll Button -->
    <button
      on:click={() => scrollLeft(carouselScroll)}
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full"
    >
      ◀
    </button>

    <!-- Carousel -->
   <div
  bind:this={carouselScroll}
  class="flex snap-x snap-mandatory scroll-smooth overflow-x-auto no-scrollbar"
>

      <!-- Cards here remain unchanged -->
      <div class="min-w-full h-[600px] bg-soft rounded-lg shadow-md snap-start shrink-0 overflow-hidden relative mx-auto">
        <img src="/vacuumforming-card.jpg" alt="Vacuum Forming" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        <div class="relative z-10 h-full flex flex-col justify-end p-6 text-white">
          <h3 class="text-2xl font-bold mb-2">Vacuum Forming</h3>
          <p>Precision-formed plastics for orthotic applications.</p>
        </div>
      </div>
      <div class="min-w-full h-[600px] bg-soft rounded-lg shadow-md snap-start shrink-0 overflow-hidden relative mx-auto">
        <img src="/fab.jpg" alt="Fabrication" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        <div class="relative z-10 h-full flex flex-col justify-end p-6 text-white">
          <h3 class="text-2xl font-bold mb-2">Custom Fabrication</h3>
          <p>Made-to-spec designs for clinics and labs.</p>

        </div>
      </div>
        <div class="min-w-full h-[600px] bg-soft rounded-lg shadow-md snap-start shrink-0 overflow-hidden relative mx-auto">
        <img src="/Ortho.jpg" alt="Orthotic Device" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        <div class="relative z-10 h-full flex flex-col justify-end p-6 text-white">
          <h3 class="text-2xl font-bold mb-2">Lower Limb Orthotics</h3>
          <p>Support and stabilization for mobility needs.</p>

        </div>
      </div>
        <div class="min-w-full h-[600px] bg-soft rounded-lg shadow-md snap-start shrink-0 overflow-hidden relative mx-auto">
        <img src="/hand.jpg" alt="Hand Orthotic" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        <div class="relative z-10 h-full flex flex-col justify-end p-6 text-white">
          <h3 class="text-2xl font-bold mb-2">Upper Limb Orthotics</h3>
          <p>Functional assistance for hand and arm movement.</p>

        </div>
      </div>  
        
    

    <!-- Right Scroll Button -->
    <button
      on:click={() => scrollRight(carouselScroll)}
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full"
    >
      ▶
    </button>
  </div>
</section>


  <!-- Hero -->
  <section class="bg-white text-center py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-4">Innovative Orthotic & Prosthetic Solutions</h1>
      <p class="text-lg mb-6">Empowering motion, improving lives — one solution at a time.</p>
      <button class="bg-accent hover:bg-orangeTint text-white px-6 py-3 rounded transition duration-300">Get Started</button>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-deep text-white py-6">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <p class="text-sm">&copy; {new Date().getFullYear()} BioSculptor. All rights reserved.</p>
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="hover:text-orangeTint">Privacy</a>
        <a href="#" class="hover:text-orangeTint">Terms</a>
        <a href="#" class="hover:text-orangeTint">Support</a>
      </div>
    </div>
  </footer>
</div>
