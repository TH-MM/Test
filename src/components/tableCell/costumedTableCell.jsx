import { Box, Collapse, IconButton, TableCell, Typography } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const CostumTableCell = ({ node }) => {
    const [expandedRow, setExpandedRow] = useState(null);

    const handleToggleExpand = (rowId) => {
        setExpandedRow(expandedRow === rowId ? null : rowId);
    };
    
    return (
        <TableCell sx={{ fontWeight: "bold", color: "gray", width: '180px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: "bold", color: "gray", fontSize: "14px" }}  >
                    {node.nodes[0].value}
                </Typography>
                {node.nodes[1] && <IconButton onClick={() => handleToggleExpand(node.nodes[0].id)}>
                    {expandedRow === node.nodes[0].id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>}
            </Box>
            <Collapse in={expandedRow === node.nodes[0].id}>
                <Box p={1} pl={0}>
                    {node.nodes.map((node_) => (
                        <Typography sx={{ fontWeight: "bold", color: "gray", fontSize: "14px" }}  >
                            {node_.value != node.nodes[0].value && node_.value}
                        </Typography>
                    ))}

                </Box>
            </Collapse>
        </TableCell>
    )
}

export default CostumTableCell;