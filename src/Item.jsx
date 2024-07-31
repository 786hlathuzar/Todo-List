import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
  Typography,
  TextField,
} from "@mui/material";
import {
  Edit as EditIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

export default function Item({
  value,
  handleToggle,
  handleSaveClick,
  isedit,
  handleEditClick,
  handleCancelClick,
  handleChange,
  remove,
}) {
  const theme = useTheme();

  return (
    <ListItem key={value.id}>
      {isedit.id !== value.id ? (
        <ListItemIcon>
          <Checkbox
            onClick={() => handleToggle(value.id)}
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
      ) : null}

      {isedit && isedit.id === value.id ? (
        <>
          <TextField value={isedit.text} onChange={handleChange} fullWidth />
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => handleSaveClick(value.id)}
              color="success"
            >
              <CheckIcon />
            </IconButton>
            <IconButton onClick={() => handleCancelClick(value.id)}>
              <CloseIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      ) : (
        <>
          <ListItemText
            secondary={
              <Typography
                sx={{
                  color: value.done ? grey[500] : theme.palette.text.primary,
                  "&.Mui-checked": {
                    color: value.done ? grey[500] : theme.palette.text.primary,
                  },
                }}
              >
                {value.name}
              </Typography>
            }
          />

          <ListItemSecondaryAction>
            {!value.done ? (
              <IconButton
                onClick={() => handleEditClick(value.id)}
                color="success"
              >
                <EditIcon />
              </IconButton>
            ) : null}
            <IconButton onClick={() => remove(value.id)} color="error">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
