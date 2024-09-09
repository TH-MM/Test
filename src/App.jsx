import React, { useState } from 'react';
import { Button, Stack,} from '@mui/material';
import DataTable from './dataTable';
import RenameForm from './components/renameForm/renameForm';

// cf8adb84-1745-44a7-9579-08dccff0be01
// da398447-5804-4901-957a-08dccff0be01

function App() {
  const[id , setId] = useState('cf8adb84-1745-44a7-9579-08dccff0be01')

  return (
    <>
      <Stack spacing={1} direction="row">
        <Button variant="text" 
        sx={{borderBottom: '1px solid blue' , borderRadius: 0}}
        onClick={() => setId("cf8adb84-1745-44a7-9579-08dccff0be01")}
        >STANDARD</Button>
        <Button variant="text"
        sx={{borderBottom: '1px solid blue' , borderRadius: 0}}
        onClick={() => setId("da398447-5804-4901-957a-08dccff0be01")}
        >ONLY RENOVATION</Button>
      </Stack>
      <DataTable id={id} />
    </>)
}

export default App;
