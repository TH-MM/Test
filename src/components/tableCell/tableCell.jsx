import { Box, Collapse, IconButton, TableCell, Typography } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const TableCell_ = ({node , key }) => {
    const [expandedRow, setExpandedRow] = useState(null);

    const handleToggleExpand = (rowId) => {
        setExpandedRow(expandedRow === rowId ? null : rowId);
    };
    return (
        <TableCell sx={{ fontWeight: "bold", color: "gray", width: '180px' }} key={key}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: "bold", color: "gray", fontSize: "14px" }}  >
                    {node.value}
                </Typography>
                {node.secondColumn && <IconButton onClick={() => handleToggleExpand(node.id)}>
                    {expandedRow === node.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>}
            </Box>
            <Collapse in={expandedRow === node.id}>
                <Box p={1} pl={0}>
                    <Typography sx={{ fontWeight: "bold", color: "gray", fontSize: "14px" }}  >
                        {node.secondColumn}
                    </Typography>
                </Box>
            </Collapse>
        </TableCell>
    )
}

export default TableCell_;