import React from "react";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BsFillPlusCircleFill } from "react-icons/bs";
import AddUser from "./Forms/AddUser";

const rows = [
  {
    id: 1,
    num: "1A",
    name: "Daphne",
    tel: "659177264",
    date: "12-10-2023",
    months: "12330",
    debts: "12330",
    comments: "attention",
  },
  {
    id: 2,
    num: "1A",
    name: "Daphne",
    tel: "659177264",
    date: "12-10-2023",
    months: "12330",
    debts: "12330",
    comments: "attention",
  },
  {
    id: 3,
    num: "1A",
    name: "Daphne",
    tel: "659177264",
    date: "12-10-2023",
    months: "12330",
    debts: "12330",
    comments: "attention",
  },
  {
    id: 4,
    num: "1A",
    name: "Daphne",
    tel: "659177264",
    date: "12-10-2023",
    months: "12330",
    debts: "12330",
    comments: "attention",
  },
  {
    id: 5,
    num: "1A",
    name: "Daphne",
    tel: "659177264",
    date: "12-10-2023",
    months: "12330",
    debts: "12330",
    comments: "attention",
  },
  {
    id: 6,
    num: "1A",
    name: "Daphne",
    tel: "659177264",
    date: "12-10-2023",
    months: "12330",
    debts: "12330",
    comments: "attention",
  },
  {
    id: 7,
    num: "1A",
    name: "Daphne",
    tel: "659177264",
    date: "12-10-2023",
    months: "12330",
    debts: "12330",
    comments: "attention",
  },
  {
    id: 8,
    num: "1A",
    name: "Daphne",
    tel: "659177264",
    date: "12-10-2023",
    months: "12330",
    debts: "12330",
    comments: "attention",
  },
  {
    id: 9,
    num: "1A",
    name: "Daphne",
    tel: "659177264",
    date: "12-10-2023",
    months: "12330",
    debts: "12330",
    comments: "attention",
  },
  {
    id: 9,
    num: "1A",
    name: "Daphne",
    tel: "659177264",
    date: "12-10-2023",
    months: "12330",
    debts: "12330",
    comments: "attention",
  },
  {
    id: 10,
    num: "1A",
    name: "Daphne",
    tel: "659177264",
    date: "12-10-2023",
    months: "12330",
    debts: "12330",
    comments: "attention",
  },
];

const columns = [
  { field: "num", headerName: "N° chambres", width: 150 },
  { field: "name", headerName: "Noms", width: 150 },
  { field: "tel", headerName: "Telephone", width: 150 },
  { field: "date", headerName: "Date entrée", width: 150 },
  { field: "months", headerName: "Nombre de mois écoulés", width: 150 },
  { field: "debts", headerName: "Dettes", width: 150 },
  { field: "comments", headerName: "Commentaires", width: 150 },
];

const ListeChambres = () => {
  return (
    <div className="lists">
      <TransitionsModal />
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          autoHeight
          pageSizeOptions={[8]}
        />
      </Box>
    </div>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        width: "fit-content",
        m: 1,
      }}
    >
      <Button
        color="primary"
        disabled={false}
        size="large"
        component="label"
        variant="contained"
        startIcon={<BsFillPlusCircleFill />}
        onClick={handleOpen}
      >
        Ajouter un utilisateur
      </Button>
      {/* <Button onClick={handleOpen} sx={{ p: 1.5 }}>
        <BsFillPlusCircleFill />
        Ajouter utilisateur
      </Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <AddUser />
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default ListeChambres;
