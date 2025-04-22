import React from "react";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      question: "What is useState and how does it work in React?",
      answer:
        "useState is a React Hook that gives array. This array has two elements. One the current state value and a function to update it. When the update function is called, React re-renders the component with the new state.",
    },
    {
      id: 2,
      question: "What is the purpose of useEffect in React?",
      answer:
        "useEffect is a React hook that generally does two things. First useEffect control lifecycle, Secondly it controls side effects (side effect means which works not react responsibility like: data fetching, manual Dom-manipulation etc ).  It runs after the component renders on the dependency array.",
    },
    {
      id: 3,
      question: "What is a custom hook in React and when should you use one?",
      answer:
        "A custom hook is a reusable function that starts with the word 'use' and may call other hooks. It's used to extract and share logic between components. It should use custom hooks when multiple components share the same logic.",
    },
    {
      id: 4,
      question:
        "Difference between controlled and uncontrolled components. Which one is better?",
      answer:
        "Controlled components are form elements whose values are managed by React's state. This means that the form data is handled by the React component. Uncontrolled components are form elements that manage their own state internally. It's use the DOM to handle form data, often accessed via ref(reference) instead of React State. Controlled components are generally better because it provide better control over the form data.",
    },
    {
      id: 5,
      question: "Tell us something about useFormStatus() in React?",
      answer:
        "useFormStatus is a React Hook that provides the status of the form submission . It returns true/false when pending: true → form is submitting, when pending: false → form is done. And Show a spinner when form submitted . It can be show error messages.",
    },
  ];

  return (
    <>
      <h1 className="text-center text-3xl font-extrabold mt-5">Blogs</h1>
      <div className=" space-y-5 py-12">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </>
  );
};

export default Blogs;
