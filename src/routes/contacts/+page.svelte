<script>
  // @ts-nocheck
  import ContactsTable from "$lib/components/ContactsTable.svelte";
  import Alert from "$lib/components/Alert.svelte";

  import { applyAction, enhance } from "$app/forms";
  export let data;
  export let form;
  let isAlertOpen = false;
  let loading = false;

  $: totalContacts = data.contacts.length;
</script>

<div class="flex flex-col justify-center items-center">
  <h1>Contacts</h1>
  <div class="badge badge-warning badge-lg mb-4">
    Total of Contacts: {totalContacts}
  </div>
  <form
    method="POST"
    action="?/create"
    class="p-8 bg-base-100 sm:w-1/2 shadow-xl rounded-lg"
    use:enhance={({ form, data, action, cancel }) => {
      // before form submission
      // console.log(form, "form"); // form elements
      // console.log(data, "data"); // formData sent
      // cancel() // cancel form before submission

      console.log(action, "action"); // action url applied
      loading = true;

      // after form submission to server
      return async ({ result, update }) => {
        // console.log(result);
        loading = false;

        // reset form
        if (result.type === "success") {
          form.reset();
        }
        if (result.type === "failure") {
          await applyAction(result);
        }
        await update();
      };
    }}
  >
    <div class="form-control mb-2">
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
          class="input input-bordered"
        />
      </label>
      {#if form?.errors?.name}
        <Alert message={form?.errors?.name[0]} />
      {/if}
    </div>
    <div class="form-control mb-2">
      <label class="input-group input-group-vertical">
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={form?.email ?? ""}
          placeholder="yourmail@mail.com"
          class="input input-bordered"
        />
      </label>
      {#if form?.errors?.email}
        <Alert message={form?.errors?.email[0]} />
      {/if}
    </div>
    <div class="form-control mb-2">
      <label class="input-group input-group-vertical">
        <span>Company</span>
        <input
          type="text"
          name="company"
          value={form?.company ?? ""}
          placeholder="your company"
          class="input input-bordered"
        />
      </label>
      {#if form?.errors?.company}
        <Alert message={form?.errors?.company[0]} />
      {/if}
    </div>
    <div class="form-control ">
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
      {#if form?.errors?.job}
        <Alert message={form?.errors?.job[0]} />
      {/if}
    </div>
    <button
      aria-busy={loading}
      class:loading
      type="submit"
      class="mt-4 btn btn-primary w-full"
    >
      {#if !loading}
        +Add Contact
      {/if}
    </button>

    <!-- invoke function without using form element by formaction -->
    <button formaction="?/clearAll" class="mt-4 btn btn-secondary w-full"
      >Clear All Contacts</button
    >
  </form>
</div>

<div class="divider mx-auto" />

<ContactsTable contacts={data?.contacts} />
<pre>{JSON.stringify(form, null, 3)}</pre>
