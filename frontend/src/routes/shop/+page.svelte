<script>
export let data;
const {products, users} = data;
// console.log(products);

</script>

<h1>Shop page</h1>
{#each products as product }

  <h2 class="text-2xl"><a href="/shop/{product.id}" data-sveltekit-preload-data>{product.title}</a></h2>
  <p>{product.description}</p>
{/each}

<pre>{users}</pre>