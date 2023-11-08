import {
  PersonAddAlt1Rounded,
  ApartmentRounded,
  GridViewOutlined,
  WorkHistory,
  PaymentsRounded,
  AccountBalanceRounded,
} from "@mui/icons-material";
const connection =
  "mongodb+srv://negokamgaing:<password>@app-rent-mern.hzderzk.mongodb.net/?retryWrites=true&w=majority";
export const categories = [
  { name: "Dashboard", icon: <GridViewOutlined />, link: "/" },
  { name: "Locataires", icon: <PersonAddAlt1Rounded />, link: "/locataires" },
  { name: "Versement", icon: <AccountBalanceRounded />, link: "/" },
  // { name: "Batiments", icon: <ApartmentRounded />, link: "/" },
  { name: "Depenses", icon: <PaymentsRounded />, link: "/" },
  { name: "Historiques", icon: <WorkHistory />, link: "/" },
];
