import { useRef, useState } from "react";
import Header from "./Header";
import {
  Box,
  List,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Divider,
} from "@mui/material";
import Item from "./Item";
import { Add as AddIcon } from "@mui/icons-material";

export default function Home() {
  const [item, setItem] = useState([
    { id: 1, name: "Taking medicine", done: false },
  ]);
  const [isedit, setIsEdit] = useState({ id: null, text: "" });
  const inputRef = useRef();

  const add = (name) => {
    const id = item[item.length - 1]?.id + 1 || 1;
    setItem([...item, { id: id, name: name, done: false }]);
  };

  const handleToggle = (value) => {
    setItem(
      item.map((e) => {
        if (e.id === value) e.done = !e.done;
        return e;
      })
    );
  };

  const handleEditClick = (id) => {
    setIsEdit({ id: id, text: item.find((e) => e.id === id).name });
  };

  const handleSaveClick = (id) => {
    setItem(item.map((e) => (e.id === id ? { ...e, name: isedit.text } : e)));
    setIsEdit({ id: null, text: "" });
  };

  const handleCancelClick = () => {
    setIsEdit({ id: null, text: "" });
  };

  const handleChange = (e) => {
    setIsEdit({ ...isedit, text: e.target.value });
  };

  const remove = (value) => {
    const items = item.filter((e) => e.id !== value);
    setItem(items);
  };

  return (
    <>
      <Header />
      <Box sx={{ mx: "auto", maxWidth: 600, mt: "2%" }}>
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
          <OutlinedInput
            fullWidth
            inputRef={inputRef}
            endAdornment={
              <InputAdornment position="end">
                <IconButton type="submit">
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </form>
        <Box>
          {item
            .filter((e) => !e.done)
            .map((value) => (
              <List key={value.id} sx={{ bgcolor: "background.paper" }}>
                <Item
                  value={value}
                  handleToggle={handleToggle}
                  isedit={isedit}
                  handleSaveClick={handleSaveClick}
                  handleCancelClick={handleCancelClick}
                  handleEditClick={handleEditClick}
                  handleChange={handleChange}
                  remove={remove}
                />
              </List>
            ))}
          <Divider />
          {item
            .filter((e) => e.done)
            .map((value) => (
              <List key={value.id} sx={{ bgcolor: "background.paper" }}>
                <Item
                  value={value}
                  handleToggle={handleToggle}
                  remove={remove}
                  isedit={isedit}
                  handleSaveClick={handleSaveClick}
                  handleCancelClick={handleCancelClick}
                  handleEditClick={handleEditClick}
                  handleChange={handleChange}
                />
              </List>
            ))}
        </Box>
      </Box>
    </>
  );
}
