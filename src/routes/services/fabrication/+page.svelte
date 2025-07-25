<script>
  let expandedSection = null;

  function toggleSection(id) {
    expandedSection = expandedSection === id ? null : id;
  }
</script>

<style>
  .section-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 1000px;
    margin: auto;
  }

  .section-tile {
    height: 300px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #e5e7eb;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 1rem;
    transition: transform 0.3s ease;
  }

  .section-tile:hover {
    transform: scale(1.03);
  }

  .expanded-section {
    position: relative;
    background-color: white;
    z-index: 10;
    overflow-y: auto;
    padding: 3rem 2rem;
    min-height: 80vh;
    text-align: center;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
    color: #999;
  }

  .placeholder-box {
    background: #ddd;
    height: 300px;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    text-align: center;
  }
</style>

<section class="min-h-screen bg-white text-primary px-4 py-20">
  {#if expandedSection === null}
    <div class="section-grid">
      <div class="section-tile" on:click={() => toggleSection('thermoforming')}>Thermoforming</div>
      <div class="section-tile" on:click={() => toggleSection('prototyping')}>Prototyping</div>
      <div class="section-tile" on:click={() => toggleSection('cadcam')}>CAD/CAM Milling</div>
      <div class="section-tile" on:click={() => toggleSection('custom')}>Custom Fabrication</div>
    </div>
  {/if}

  {#if expandedSection === 'thermoforming'}
    <div class="expanded-section">
      <div class="close-button" on:click={() => (expandedSection = null)}>&times;</div>
      <h2 class="text-4xl font-bold mb-4">Thermoforming at Scale</h2>
      <p class="mb-6">
        We offer industrial-level vacuum and drape forming with high precision and speed—ideal for high-volume orthotic and prosthetic applications.
      </p>
      <div class="placeholder-box">[Thermoforming photo/video]</div>
      <p class="mt-6 text-gray-600">
        Our thermoforming process accommodates mass production without compromising on material integrity or fit. From orthotic shells to large batch runs of clinical-grade parts, we meet exacting standards using calibrated heating, forming, and trimming systems.
      </p>
    </div>
  {/if}

  {#if expandedSection === 'prototyping'}
    <div class="expanded-section">
      <div class="close-button" on:click={() => (expandedSection = null)}>&times;</div>
      <h2 class="text-4xl font-bold mb-4">Precision Prototyping</h2>
      <p class="mb-6">
        From idea to reality—our lab includes 3D printing, CNC milling, and foam carving for rapid iteration and development.
      </p>
      <div class="placeholder-box">[Prototyping lab]</div>
      <p class="mt-6 text-gray-600">
        Whether you're fine-tuning a medical device or exploring a new design, our prototyping capabilities allow you to test form, function, and fit in days—not weeks. Our iterative approach ensures smarter revisions and faster approvals.
      </p>
    </div>
  {/if}

  {#if expandedSection === 'cadcam'}
    <div class="expanded-section">
      <div class="close-button" on:click={() => (expandedSection = null)}>&times;</div>
      <h2 class="text-4xl font-bold mb-4">CAD/CAM Milling</h2>
      <p class="mb-6">
        Digital workflows using CAD/CAM ensure precise, repeatable output for complex shapes and toolpaths in foam or plastic.
      </p>
      <div class="placeholder-box">[Milling system/renderings]</div>
      <p class="mt-6 text-gray-600">
        By integrating CAD software with multi-axis CNC mills, we produce advanced orthotic and prosthetic forms from digital designs. This method guarantees accuracy, repeatability, and traceability for regulated applications.
      </p>
    </div>
  {/if}

  {#if expandedSection === 'custom'}
    <div class="expanded-section">
      <div class="close-button" on:click={() => (expandedSection = null)}>&times;</div>
      <h2 class="text-4xl font-bold mb-4">Custom Fabrication</h2>
      <p class="mb-6">
        Need something unique? We build from scratch to spec, whether it’s one-off prototypes or scaled production runs.
      </p>
      <div class="placeholder-box">[Gallery or timelapse]</div>
      <p class="mt-6 text-gray-600">
        Our team handles complex builds across materials and methods—whether integrating hybrid components, multi-layered fabrication, or user-specific ergonomics. If it doesn’t exist yet, we’ll help you create it.
      </p>
    </div>
  {/if}
</section>
