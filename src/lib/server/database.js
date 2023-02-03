// @ts-nocheck
let contacts = [
  {
    id: Date.now() + Math.random().toString(36),
    name: "John Smith",
    email: "john@smith.com",
    company: "MS",
    job: "Software Engineer",
    isActive: true,
  },
  // {
  //   id: 2,
  //   name: "John Doe",
  //   email: "john@doe.com",
  //   company: "Apple",
  //   job: "Accontant ",
  //   isActive: true,
  // },
];

// get all contacts
export function getContacts() {
  return contacts;
}

// add a new contact
export function addContact(contact) {
  const id = Date.now() + Math.random().toString(36);
  contacts.push({ id, ...contact });
  // contacts = [...contacts, contact];
}

// delete contact by id
export function deleteContact(id) {
  contacts = contacts.filter((contact) => contact.id !== id);
}

// clear all contacts
export function clearAllContacts() {
  contacts = [];
}
