import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Import = (props) => {
  // fill out this component
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(-1);
  const ITEM_HEIGHT = 48;

  const handleClick = (idx) => (event) => {
    setAnchorEl(event.currentTarget);
    setCurrentIndex(idx);
  };

  const handleClose = () => {
    if (currentIndex >= 0) {
      props.deleteMake(currentIndex);
    }
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="lg" className="car-container">
      <Button
        variant="contained"
        className="import"
        color="primary"
        onClick={props.fetchMakes}
      >
        Import
      </Button>
      <h2>COUNT: {props.makes.length}</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">
                {make.MakeId}
              </TableCell>
              <TableCell>{make.MakeName}</TableCell>
              <TableCell>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick(idx)}
                >
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </Container>
  );
};

export default Import;
