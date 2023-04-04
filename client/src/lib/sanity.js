// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "6aau0jm5",
  dataset: "production",
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: "2021-10-21", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.REACT_APP_SANITY_SECRET_TOKEN, // Only if you want to update content with the client
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export async function getCategories() {
  const categories = await client.fetch(`*[_type == "category"]`);
  return categories;
}

export async function getPlans() {
  const plans = await client.fetch(`*[_type == "plan"]`);
  return plans;
}
export async function getTestimonials() {
  const testimonial = await client.fetch(`*[_type == "testimonial"]`);
  return testimonial;
}

export async function createUserProfile(user) {
  const checkUserProfileQuery = `*[_type=='user' && email=='${user?.email}']`;
  const userProfile = await client.fetch(checkUserProfileQuery);
  console.log(userProfile[0])
  
  if (userProfile.length === 1) {
    localStorage.setItem("userSanity", JSON.stringify(userProfile[0].email));
  } else {
    const doc = {
      _type: "user",
      name: user.displayName,
      email: user.email,
      batch: {
        _ref: "9687c393-338a-4d0c-8929-5f66e85180ac",
        _type: "reference",
      },
      userType: {
        _ref: "cf698aee-62c6-4fd3-b219-d2b54c824234",
        _type: "reference",
      },
    };

    client.create(doc).then((res) => {
      console.log(`User was created, document ID is ${res._id}`);
      localStorage.setItem("userSanity", res[0]);
    });
  }
}
