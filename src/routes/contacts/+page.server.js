// @ts-nocheck
import { fail, redirect } from "@sveltejs/kit";
let contacts = [
  {
    id: 1,
    name: "John Smith",
    email: "john@smith.com",
    company: "MS",
    job: "Software Engineer",
    isActive: true,
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@doe.com",
    company: "Apple",
    job: "Accontant ",
    isActive: true,
  },
];

export const load = () => {
  return { contacts };
};

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    // console.log(formData);
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const job = formData.get("job");
    const id = Date.now() + Math.random().toString(36);

    // form validation
    if (name.length < 2) {
      return fail(400, {
        error: true,
        message: "Name must be at least two characters long!",
        name,
        email,
        company,
        job,
      });
    }

    const contact = {
      name,
      email,
      company,
      job,
      id,
    };

    contacts = [...contacts, contact]; // or contacts.push(contact)

    throw redirect("303", "/");
  },
  // delete action
  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");

    // delete with id, using array filter
    contacts = contacts.filter((contact) => contact.id != id);

    return {
      success: true,
    };
  },
};
