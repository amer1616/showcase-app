<script>
  // @ts-nocheck
  import ContactsTable from "$lib/components/ContactsTable.svelte";
  import Alert from "$lib/components/Alert.svelte";

  import { applyAction, enhance } from "$app/forms";
  export let data;
  export let form;
  console.log(form);
</script>

<h1>Contacts</h1>
<form
  method="POST"
  action="?/create"
  class="flex flex-col w-full my-4"
  use:enhance={({ form, data, action }) => {
    console.log(form, "form"); // form elements
    console.log(data, "data"); // formData sent
    console.log(action, "action"); // action applied

    return async ({ result, update }) => {
      // after form submission to server
      // reset form
      if (result.type === "success") {
        form.reset();
      }
      if (result.type === "invalid") {
        await applyAction(result);
      }
      update();
    };
  }}
>
  <div class="form-control max-w-xs">
    <!-- <label class="label">
    <span class="label-text">Your Name</span>
  </label> -->
    <label class="input-group input-group-vertical">
      <span>Name</span>
      <input
        type="text"
        name="name"
        value={form?.name ?? ""}
        placeholder="your name"
        class="input input-bordered mb-4"
      />
    </label>
  </div>
  <div class="form-control max-w-xs">
    <label class="input-group input-group-vertical">
      <span>Email</span>
      <input
        type="email"
        name="email"
        value={form?.email ?? ""}
        placeholder="yourmail@mail.com"
        class="input input-bordered mb-4"
      />
    </label>
  </div>
  <div class="form-control max-w-xs">
    <label class="input-group input-group-vertical">
      <span>Company</span>
      <input
        type="text"
        name="company"
        value={form?.company ?? ""}
        placeholder="your company"
        class="input input-bordered mb-4"
      />
    </label>
  </div>
  <div class="form-control max-w-xs">
    <label class="input-group input-group-vertical">
      <span>Job</span>
      <input
        type="text"
        name="job"
        value={form?.job ?? ""}
        placeholder="your job"
        class="input input-bordered"
      />
    </label>
  </div>
  <button class="mt-4 btn btn-primary w-full max-w-xs">Add Contact</button>
  {#if form?.error}
    <Alert message={form.message} />
  {/if}
</form>
<div class="divider" />

<ContactsTable contacts={data?.contacts} />
