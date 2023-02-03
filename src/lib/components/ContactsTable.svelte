<script>
  // @ts-nocheck
  import { enhance, applyAction } from "$app/forms";
  export let contacts;
</script>

<div class="overflow-x-auto w-full">
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Email</th>

        <th />
      </tr>
    </thead>
    <!-- Table body -->
    <tbody>
      {#each contacts as contact (contact.id)}
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">{contact.name}</div>
              </div>
            </div>
          </td>

          <td
            >{contact.job}
            <br />
            <span class="badge badge-ghost badge-sm">{contact.company}</span>
          </td>
          <td>
            {contact.email}
          </td>
          <th>
            <form method="POST" action="?/delete" use:enhance>
              <input type="hidden" name="id" id="" value={contact.id} />
              <button type="submit" class="btn btn-square btn-outline "
                ><span class="hover:text-white text-xl">❌</span>

                <!-- <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12" /></svg> -->
              </button>
            </form>
          </th>
        </tr>
      {/each}
    </tbody>
    <!-- Table foot -->
    <tfoot>
      <tr>
        <th />
        <th>Name</th>
        <th>Job</th>
        <th>Email</th>

        <th />
      </tr>
    </tfoot>
  </table>
</div>
