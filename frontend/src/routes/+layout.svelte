<script>
  import "../app.postcss";
  import Header from "../lib/components/Header.svelte";
  import "./styles.css";
</script>

<div class="flex flex-col min-h-full">
  <Header />

  <main class="flex flex-1 flex-col w-full mx-auto p-2">
    <slot />
  </main>

  <footer class="flex flex-col justify-center items-center p-10">
    <p>
      visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
    </p>
  </footer>
</div>

<style>
  /*  
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
  */
</style>
