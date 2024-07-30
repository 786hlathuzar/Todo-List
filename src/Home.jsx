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
  const [item, setItem] = useState([{ id: 1, name: "apple", done: false }]);
  const inputRef = useRef();

  const add = (name) => {
    const id = item[item.length - 1].id + 1;
    setItem([...item, { id: id, name: name, done: false }]);
  };

  const handleToggle = (value) => {
    setItem(
      item.map((e) => {
        if (e.id == value) e.done = !e.done;
        return e;
      })
    );
  };
  return (
    <>
      <Header />
      <Box sx={{ mx: "auto", maxWidth: 600 }}>
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
            .map((value) => {
              return (
                <List key={value.id} sx={{ bgcolor: "background.paper" }}>
                  <Item value={value} handleToggle={handleToggle} />
                </List>
              );
            })}
          <Divider />
          {item
            .filter((e) => e.done)
            .map((value) => {
              return (
                <>
                  <List key={value.id} sx={{ bgcolor: "background.paper" }}>
                    <Item value={value} handleToggle={handleToggle} />
                  </List>
                </>
              );
            })}
        </Box>
      </Box>
    </>
  );
}
