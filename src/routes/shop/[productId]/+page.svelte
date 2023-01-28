<script>
  export let data;
  console.log(data);

  const { product } = data;
</script>

<div class="flex justify-center items-center">
  <div class="card  sm:w-4/5 w-full shadow-xl bg-base-100 my-3 pb-2">
    <div class="card-body">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p class="badge badge-accent badge-md">{product.price.toFixed(2)}</p>
    </div>
  </div>
</div>
