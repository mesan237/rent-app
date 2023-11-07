import {
  PersonAddAlt1Rounded,
  ApartmentRounded,
  GridViewOutlined,
  WorkHistory,
  PaymentsRounded,
  AccountBalanceRounded,
} from "@mui/icons-material";

export const categories = [
  { name: "Dashboard", icon: <GridViewOutlined /> },
  { name: "Locataires", icon: <PersonAddAlt1Rounded /> },
  { name: "Versement", icon: <AccountBalanceRounded /> },
  { name: "Batiments", icon: <ApartmentRounded /> },
  { name: "Depenses", icon: <PaymentsRounded /> },
  { name: "Historiques", icon: <WorkHistory /> },
];
