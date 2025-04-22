import {toast} from "react-toastify";

const getBooklist = () => {
  const storedList = localStorage.getItem("booklist");
  return storedList ? JSON.parse(storedList) : [];
};

const addToBooklist = (id) => {
  const storedList = getBooklist();

  if (storedList.includes(id)) {
    toast.error("Appoinment Already Booked!", {
      theme: "colored",
      autoClose: "2000",
    });
    return;
  }
  if (!storedList.includes(id)) {
    storedList.push(id);
    localStorage.setItem("booklist", JSON.stringify(storedList));
    toast.success("Appoinment Booked!!", {
      autoClose: "2000",
    });
  }
};
const removeFromBooklist = (id) => {
  const storedList = getBooklist();
  const newList = storedList.filter((storedId) => storedId !== id.toString());
  localStorage.setItem("booklist", JSON.stringify(newList));
  toast.error("Cancelled Appoinment!", {
    theme: "colored",
    autoClose: "2000",
  });
};
export {getBooklist, addToBooklist, removeFromBooklist};
