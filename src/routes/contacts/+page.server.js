// @ts-nocheck
import { fail, redirect } from "@sveltejs/kit";
import {
  getContacts,
  addContact,
  deleteContact,
  clearAllContacts,
} from "$lib/server/database";

import { z } from "zod";
import { zfd } from "zod-form-data";

// form validation using zod library
const contactSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name shoud have at least 3 characters" })
    .max(64, { message: "Name must be less than 64 characters" })
    .trim(),
  email: z.string({ required_error: "Email is required" }).min(2).email(),
  company: z
    .string({ required_error: "Company is required" })
    .min(3, { message: "Company should have at least 3 characters" })
    .trim(),
  job: z.string({ required_error: "Job is required" }).min(2).trim(),
});

// helper function to make input delay before sending
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const load = () => {
  const contacts = getContacts();
  return { contacts };
};

export const actions = {
  create: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    // console.log(formData);
    // const name = formData.get("name");
    // const email = formData.get("email");
    // const company = formData.get("company");
    // const job = formData.get("job");

    // form validation manually
    // if (name.length < 2) {
    //   return fail(400, {
    //     error: true,
    //     message: "Name must be at least two characters long!",
    //     name,
    //     email,
    //     company,
    //     job,
    //   });
    // }
    await delay(1000);

    //invoke result error using try catch
    try {
      const result = contactSchema.parse(formData); // validate form fields w/ parse()

      console.log("success");
      console.log(result);
    } catch (err) {
      const data = {
        formData,
        errors: err.flatten().fieldErrors,
      };
      console.log(data);
      return data;
    }
    addContact(formData);

    throw redirect("303", "/contacts"); // redirect to contatcs page if there'e error

    // //invoke result error using fail api
    // if (!result.success) {
    //   const data = {
    //     data: Object.fromEntries(formData),
    //     errors: result.error.flatten().fieldErrors,
    //   };
    //   console.log(data);

    //   fail(400, data);
    // }

    // const contact = {
    //   name,
    //   email,
    //   company,
    //   job,
    // };

    // return {
    //   success: true,
    // };
  },

  // delete action
  delete: async ({ request }) => {
    const formData = await request.formData();
    const contatctId = formData.get("id");

    // console.log(contatctId);
    // delete with id, using array filter
    deleteContact(contatctId);

    return {
      success: true,
    };
  },
  // clear all contacts in the form
  clearAll: () => {
    clearAllContacts();
  },
};
