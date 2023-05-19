import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function SortDropdown({ sortingType, onSortingChange }) {
  return (
    <div>
      {" "}
      <FormControl size="small" sx={sortStyle}>
        <InputLabel id="sorting-type-label">Sorting Type</InputLabel>
        <Select
          labelId="sorting-type-label"
          id="sorting-type-select"
          value={sortingType}
          onChange={onSortingChange}
        >
          <MenuItem value="ticket_date_new">
            by Ticket Date[Latest to oldest]
          </MenuItem>
          <MenuItem value="ticket_date_old">
            by Ticket Date[Oldest to latest]
          </MenuItem>

          <MenuItem value="created_at_new">
            by Created At[Latest to oldest]
          </MenuItem>
          <MenuItem value="created_at_old">
            by Created At[Oldest to latest]
          </MenuItem>

          <MenuItem value="alphabetical_a">by Alphabetically [A to Z]</MenuItem>
          <MenuItem value="alphabetical_z">by Alphabetically [Z to A]</MenuItem>

          {/* Add more sorting options if needed */}
        </Select>
      </FormControl>
    </div>
  );
}
const sortStyle = {
  width: "150px",
};
export default SortDropdown;
