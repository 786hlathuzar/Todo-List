import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

export default function Item({ value, handleToggle }) {
  return (
    <ListItem
      key={value.id}
      secondaryAction={
        <>
          {!value.done ? (
            <IconButton>
              <EditIcon color="success" />
            </IconButton>
          ) : null}
          <IconButton>
            <DeleteIcon color="error" />
          </IconButton>
        </>
      }
      disablePadding
    >
      <ListItemButton onClick={() => handleToggle(value.id)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={value.done}
            inputProps={{ "aria-labelledby": value.id }}
            sx={{
              color: value.done ? grey[500] : "default",
              "&.Mui-checked": {
                color: value.done ? grey[500] : "default",
              },
            }}
          />
        </ListItemIcon>

        <ListItemText
          primary={
            <Typography
              sx={{
                color: value.done ? grey[500] : "default",
                "&.Mui-checked": {
                  color: value.done ? grey[500] : "default",
                },
              }}
            >
              {value.name}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
