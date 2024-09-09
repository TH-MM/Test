import { TableCell, TableHead, TableRow } from "@mui/material";

const Header = ({RenData}) => {
  return (
    <TableHead >
    <TableRow>
      <TableCell sx={{ fontWeight: 'bold', width: '180px' }} >Area</TableCell>
      <TableRow>
        {RenData.headers.map((header, index) => (
          <TableCell key={index} sx={{ fontWeight: 'bold', width: '180px' }} >{header}</TableCell>
        ))}
        <TableCell sx={{ fontWeight: 'bold', width: '100px' }} >Verdi</TableCell>
      </TableRow>
    </TableRow>
  </TableHead>
  );
};

export default Header;