<script>
  let menuOpen = false;
  let servicesOpen = false;
</script>

<div class="min-h-screen flex flex-col bg-base text-primary font-sans">
  <!-- Navbar -->
  <nav class="bg-white border-b border-soft sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20">
      <div class="flex items-center">
        <img src="/BiosculptorLogo.png" alt="BioSculptor Logo" class="h-12 sm:h-20 w-auto" />
      </div>
      <div class="md:hidden">
        <button on:click={() => (menuOpen = !menuOpen)} class="text-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded p-1">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <ul class="hidden md:flex space-x-10 text-primary font-medium text-xl items-center relative">
        <li>
          <a href="https://kinderband.net/" class="hover:text-accent">
            <img src="/kinderband-logo_header.png" alt="kinderband logo" class="h-7 sm:h-8 w-auto" />
          </a>
        </li>
        <li>
          <a href="https://maramed.com/" class="hover:text-accent">
            <img src="/maramed-logo.png" alt="maramed logo" class="h-8 sm:h-10 w-auto" />
          </a>
        </li>
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
            </ul>
          {/if}
        </li>
        <li><a href="http://noplaster.com/default.aspx" class="hover:text-accent">NoPlaster</a></li>
        <li><a href="/contact" class="hover:text-accent">Contact</a></li>
      </ul>
    </div>

    {#if menuOpen}
      <ul class="md:hidden px-6 pb-4 space-y-3 text-primary font-medium bg-white border-t border-soft text-lg">
        <li><a href="https://kinderband.net/" class="block py-2 hover:text-accent">Kinderband™</a></li>
        <li><a href="https://maramed.com/" class="block py-2 hover:text-accent">Maramed™</a></li>
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
            </ul>
          {/if}
        </li>
        <li><a href="http://noplaster.com/" class="block py-2 hover:text-accent">No Plaster</a></li>
        <li><a href="/contact" class="block py-2 hover:text-accent">Contact</a></li>
      </ul>
    {/if}
  </nav>

  <!-- Page content -->
  <main class="flex-grow">
    <slot />
  </main>

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
      </div>
    </div>
  </footer>
</div>
