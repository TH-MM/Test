import React from 'react';
import { useQuery } from 'react-query';
import { Api } from './api/api';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import AriaCell from './components/areasCell/areaCell';
import Header from './components/header/header';
import TableCell_ from './components/tableCell/tableCell';
import CostumTableCell from './components/tableCell/costumedTableCell';


const DataTable = ({ id }) => {

  const { data: RenData, isLoading, error } = useQuery({
    queryKey: ['RenData', id],
    queryFn: () => Api.getData(id)
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <TableContainer sx={{ borderRadius: 3 }} >
      <Table sx={{ minWidth: 650, tableLayout: 'fixed' }} aria-label="simple table">

        <Header RenData={RenData} />

        <TableBody>
          {RenData.data.map((row, index) => (
            <TableRow key={index}>
              <AriaCell row={row} RenData={RenData} id={id}/>
              {
                row.nodes.map((node, index) => (
                  <TableRow sx={index === row.nodes.length - 1 ? { marginBottom: '5px' } : {}} key={index}>
                    {node.value && <TableCell_ node={node} key={index} />}
                    {node.secondColumn && <TableCell sx={{ fontWeight: "bold", color: "gray", width: '180px' }}>{node.secondColumn}</TableCell>}
                    {node.nodes.length > 0 && (
                      <>
                        {node.nodes[0].value && <TableCell_ node={node.nodes[0]} key={index} />}
                        {node.nodes[0].secondColumn && <TableCell sx={{ fontWeight: "bold", color: "gray", width: '180px' }}>{node.nodes[0].secondColumn}</TableCell>}
                      </>
                    )}
                    {node.nodes[0].nodes.map((node, index) => (
                      <>
                        {node.value && <TableCell sx={{ fontWeight: "bold", color: "gray", width: '180px' }} key={index} >{node.value}</TableCell>}
                        {node.secondColumn && <TableCell sx={{ fontWeight: "bold", color: "gray", width: '180px' }} >{node.secondColumn}</TableCell>}
                        <CostumTableCell node={node}  />
                      </>
                    ))}
                    <TableCell sx={{ fontWeight: "bold", color: "gray", fontSize: "14px", width: '100px' }}>
                      Kr {node.initialValue}
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
