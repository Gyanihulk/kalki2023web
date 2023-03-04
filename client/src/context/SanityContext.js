import React, {
  useContext,
  createContext,
  useState,
  children,
  useEffect,
} from "react";
import { getCategories, getPlans, getTestimonials } from "../lib/sanity";

const Context = createContext();

export const SanityContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [plans, setPlans] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    async function setup() {
      const fetchedCategories = await getCategories();
      const fetchedPlans = await getPlans();
      const fetchedTestimonials = await getTestimonials();
      if (fetchedCategories.length !== categories.length) {
        setCategories((oldCategories) => [
          ...oldCategories,
          ...fetchedCategories,
        ]);
      }
      if (fetchedPlans.length !== plans.length) {
        setPlans((oldPlans) => [...oldPlans, ...fetchedPlans]);
      }
      if (fetchedTestimonials.length !== testimonials.length) {
        setTestimonials((oldTestimonials) => [
          ...oldTestimonials,
          ...fetchedTestimonials,
        ]);
      }
    }
    setup();
  }, []);

  return (
    <Context.Provider value={{ categories, plans, testimonials }}>
      {children}
    </Context.Provider>
  );
};

export const useSanityContext = () => useContext(Context);
