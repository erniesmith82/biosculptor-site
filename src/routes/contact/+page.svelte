<script>
 
  let name = '';
  let email = '';
  let message = '';

  function handleSubmit() {
    console.log({ name, email, message });
    name = '';
    email = '';
    message = '';
  }
</script>

<div class="min-h-screen bg-base text-primary font-sans p-4 sm:p-8">
  <div class="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">

    <!-- Contact Info & Form -->
    <div class="p-6 sm:p-10">
      <h1 class="text-3xl font-bold mb-2 text-deep">Contact Us</h1>
      <p class="text-hard mb-6">Reach out to us for inquiries, support, or feedback. We're here to help.</p>

      <div class="space-y-6">
        <!-- Contact Info -->
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <span class="text-xl">📧</span>
            <div>
              <h3 class="font-semibold text-lg">Email</h3>
              <p class="text-hard">info@biosculptor.com</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-xl">📞</span>
            <div>
              <h3 class="font-semibold text-lg">Phone</h3>
              <p class="text-hard">(305) 823-8300</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-xl">📍</span>
            <div>
              <h3 class="font-semibold text-lg">Address</h3>
              <p class="text-hard">2480 W 82nd St #8, Hialeah, FL 33016</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Name</label>
            <input type="text" bind:value={name} class="w-full border border-soft rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" required />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Email</label>
            <input type="email" bind:value={email} class="w-full border border-soft rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" required />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Message</label>
            <textarea bind:value={message} rows="4" class="w-full border border-soft rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" required></textarea>
          </div>
          <button type="submit" class="bg-accent hover:bg-orangeTint text-white px-6 py-2 rounded transition">Send Message</button>
        </form>
      </div>
    </div>

    <!-- Image on the Right -->
    <div class="hidden md:block">
      <img src="/contact.png" alt="Contact Background" class="w-full h-full object-cover border-l-4 border-soft" />
    </div>
  </div>
</div>
