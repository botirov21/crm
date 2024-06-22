import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Full Name', minWidth: 170 },
  { id: 'number', label: 'Phone Number', minWidth: 100 },
  {
    id: 'groups',
    label: 'Groups',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'percent',
    label: 'Percent',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
 
];

function createData(name, number, groups, percent) {
  return { name, number, groups, percent};
}

const rows = [
  createData('Umida',"99999999", "Elementry","50%"),
  createData('Teshaboy',"99999999", "Elementry","50%"),
  createData('Bo`ri',"99999999", "Elementry","50%"),
  createData('Amir',"99999999", "Elementry","50%"),
  createData('Temur',"99999999", "Elementry","50%"),
  createData('Gulom',"99999999", "Elementry","50%"),
  createData('Kim',"99999999", "Elementry","50%"),
  createData('chen',"99999999", "Elementry","50%"),
  createData('In',"99999999", "Elementry","50%"),
  createData('Putin',"99999999", "Elementry","50%"),
  createData('Makron',"99999999", "Elementry","50%"),
  createData('Biden',"99999999", "Elementry","50%"),
  createData('Nikola',"99999999", "Elementry","50%"),
  createData('Ivan',"99999999", "Elementry","50%"),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100vw', maxWidth:"970px", overflow: 'hidden', borderRadius:"20px" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" sx={{background:"#FAFAFB", color:"#A098D5"}}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,background:"#FAFAFB", color:"#A098D5" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell style={{fontSize:"14px   ", color:"#2C2669"}} key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
