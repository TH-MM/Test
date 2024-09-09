import { Box, TableCell, Typography } from "@mui/material";
import { useState } from "react";
import Menu_ from "../menu/menu";

const AriaCell = ({ row , id , RenData }) => {

    return (
        <TableCell  sx={{ p: "3px", width: '180px', height: '100%' }}>
            <Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between' , alignItems: 'start'}}>
                <Typography sx={{ mb: 2, fontWeight: "bold", color: "gray", fontSize: "14px" }}>
                    {RenData?.name}
                </Typography>
                <Menu_ id={id} />
            </Box>
            <Box>
                <Typography sx={{ mb: 2, fontWeight: "bold", color: "gray", fontSize: "14px" }}>
                    {row?.distributionKey?.name}
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ fontWeight: "bold", color: "gray", fontSize: "14px", display: 'flex', gap: "2px", alignItems: "center" }}>
                    <Box sx={{ width: "15px", height: "15px", backgroundColor: row?.distributionKey?.distributions[0]?.color, borderRadius: "50%" }} ></Box>
                    {row?.distributionKey?.distributions[0]?.name}
                </Typography>
                <Typography sx={{ color: "black", fontSize: "14px" }}>
                    {row?.distributionKey?.distributions[0]?.percentage}%
                </Typography>
            </Box>
            </Box>
        </TableCell>
    )

}
export default AriaCell;