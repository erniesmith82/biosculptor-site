<script>
  import { onMount } from 'svelte';

  let carouselScroll;
  let currentSlide = 0;

  const slides = [
    { src: '/thermoforming.png', title: 'Thermoforming', desc: 'Precision-formed plastics for orthotic applications.' },
    { src: '/fab.jpg', title: 'Central Fabrication', desc: 'Made-to-spec designs for clinics and labs.' },
    { src: '/Prototyping.png', title: 'Prototyping and Custom Fabrications', desc: 'Precision prototyping with 3D printing, milling, and forming.' },
    { src: '/kinderband02.png', title: 'kinderBAND™ Cranial Remodeling System', desc: 'Precise, gentle, and effective care for infants.' },
  ];

  function scrollLeft(ref) {
    if (!ref) return;
    const cardWidth = ref.querySelector('div')?.offsetWidth || 300;
    ref.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }

  function scrollRight(ref) {
    if (!ref) return;
    const cardWidth = ref.querySelector('div')?.offsetWidth || 300;
    const maxScrollLeft = ref.scrollWidth - ref.clientWidth;
    if (ref.scrollLeft >= maxScrollLeft - 10) {
      ref.scrollTo({ left: 0, behavior: 'smooth' });
      currentSlide = 0;
    } else {
      ref.scrollBy({ left: cardWidth, behavior: 'smooth' });
      currentSlide = Math.min(currentSlide + 1, slides.length - 1);
    }
  }

  function scrollToSlide(index) {
    if (!carouselScroll) return;
    const cardWidth = carouselScroll.clientWidth;
    carouselScroll.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    currentSlide = index;
  }

  function updateCurrentSlide() {
    if (!carouselScroll) return;
    const cardWidth = carouselScroll.clientWidth;
    currentSlide = Math.round(carouselScroll.scrollLeft / cardWidth);
  }

  // Autoplay every 5 seconds
  onMount(() => {
    const interval = setInterval(() => {
      scrollRight(carouselScroll);
    }, 5000);

    return () => clearInterval(interval);
  });
</script>

<!-- Carousel Section -->
<section class="px-4 py-10 bg-gray-200">
  <div class="w-full sm:w-[75vw] mx-auto overflow-hidden relative">
    <!-- Left Arrow -->
    <button on:click={() => scrollLeft(carouselScroll)} class="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 shadow-md text-white">◀</button>

    <!-- Slide Container -->
    <div
      bind:this={carouselScroll}
      class="flex snap-x snap-mandatory scroll-smooth overflow-x-auto no-scrollbar"
      on:scroll={updateCurrentSlide}
    >
      {#each slides as item, i}
        <div class="min-w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-soft rounded-lg shadow-md snap-start shrink-0 overflow-hidden relative mx-auto">
  <img src={item.src} alt={item.title} class="absolute inset-0 w-full h-full object-cover" />
  <div class="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
  <div class="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 text-white">
    <h3 class="text-base sm:text-2xl lg:text-4xl font-bold mb-2 leading-snug break-words">{item.title}</h3>
    <p class="text-sm sm:text-base lg:text-lg">{item.desc}</p>
  </div>
</div>
      {/each}
    </div>

    <!-- Right Arrow -->
    <button on:click={() => scrollRight(carouselScroll)} class="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 shadow-md text-white">▶</button>

    <!-- Pagination Dots -->
    <div class="flex justify-center mt-4 space-x-2">
      {#each slides as _, index}
        <button
          class={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-accent' : 'bg-soft'} transition`}
          on:click={() => scrollToSlide(index)}
        />
      {/each}
    </div>
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
        <h3 class="text-xl font-semibold text-accent mb-2">Central Fabrication</h3>
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
    <a href="/contact" class="inline-block bg-accent hover:bg-orangeTint text-white px-6 py-3 rounded transition duration-300">Contact Us</a>
  </div>
</section>