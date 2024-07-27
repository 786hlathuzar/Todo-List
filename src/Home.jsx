import { useRef, useState } from "react";
import Header from "./Header";

export default function Home() {
  const [item, setItem] = useState([]);
  const inputRef = useRef();

  const add = (name) => {
    setItem([...item, name]);
  };
  return (
    <>
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = inputRef.current.value;
          if (!name) return false;

          add(name);
          inputRef.current.value = "";
          inputRef.current.focus();
        }}
      >
        <input type="text" />
      </form>
      <div>
        {item.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <button>Add</button>
    </>
  );
}
