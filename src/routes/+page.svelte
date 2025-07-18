<script>
  import '../app.css';
</script>

<div class="min-h-screen bg-white text-[#2B2B2B]">

  <!-- Navbar -->
  <nav class="bg-white border-b border-gray-200">
    <div class="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
      <a href="#" class="flex items-center space-x-3">
        <img src="/BiosculptorLogo.png" class="h-10" alt="BioSculptor Logo" />
      </a>
      <button data-collapse-toggle="navbar-multi-level" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-multi-level" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul class="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 bg-white border border-gray-100 md:border-none rounded-lg">
          <li><a href="#" class="block py-2 px-3 text-orange-600 hover:text-[#FED7AA]">Home</a></li>
          <li><a href="#" class="block py-2 px-3 hover:text-orange-500">Services</a></li>
          <li><a href="#" class="block py-2 px-3 hover:text-orange-500">Pricing</a></li>
          <li><a href="#" class="block py-2 px-3 hover:text-orange-500">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="text-center py-20 px-4 bg-white">
    <div class="max-w-4xl mx-auto">
     <!-- Full-Width Auto-Scrolling Carousel -->
<div class="relative w-full overflow-hidden h-[300px] md:h-[500px]">
  <div class="flex w-[400%] animate-carousel">
    <img src="/Ortho.jpg" alt="Ortho" class="w-full h-full object-cover" />
    <img src="/vacuumforming-card.jpg" alt="Vacuum Forming" class="w-full h-full object-cover" />
    <img src="/hand.jpg" alt="Hand" class="w-full h-full object-cover" />
    <img src="/fab.jpg" alt="Fab" class="w-full h-full object-cover" />
  </div>
</div>


      <h1 class="text-4xl font-bold mb-4">Innovative Orthotic & Prosthetic Solutions</h1>
      <p class="text-lg mb-6">Empowering motion, improving lives — one solution at a time.</p>
      <button class="bg-orange-500 hover:bg-[#FED7AA] text-white px-6 py-3 rounded transition duration-300">Get Started</button>
    </div>
  </section>

  <!-- Section 1 -->
  <section class="bg-[#E5E7EB] py-16">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-semibold mb-4">Why Choose BioSculptor?</h2>
      <p class="mb-6">Decades of experience, cutting-edge fabrication, and a team that truly cares.</p>
      <div class="grid md:grid-cols-3 gap-8 mt-8">
        <div>
          <h3 class="text-xl font-bold text-orange-500 mb-2">Custom Fabrication</h3>
          <p>Precision-fit orthotics and prosthetics tailored to every patient.</p>
        </div>
        <div>
          <h3 class="text-xl font-bold text-orange-500 mb-2">Advanced Materials</h3>
          <p>We use lightweight, durable, and medical-grade materials for every build.</p>
        </div>
        <div>
          <h3 class="text-xl font-bold text-orange-500 mb-2">Trusted by Professionals</h3>
          <p>Clinics and hospitals across the country trust our innovation.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2 -->
  <section class="bg-white py-16">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-semibold mb-4">Ready to Transform Mobility?</h2>
      <p class="mb-6">Let’s collaborate and build the future of patient care together.</p>
      <a href="#" class="inline-block bg-orange-500 hover:bg-[#FED7AA] text-white px-6 py-3 rounded transition duration-300">Contact Us</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#1F2937] text-white py-6">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <p class="text-sm">&copy; {new Date().getFullYear()} BioSculptor. All rights reserved.</p>
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="hover:text-orange-400">Privacy</a>
        <a href="#" class="hover:text-orange-400">Terms</a>
        <a href="#" class="hover:text-orange-400">Support</a>
      </div>
    </div>
  </footer>

</div>
