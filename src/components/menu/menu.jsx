import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import RenameForm from '../renameForm/renameForm';
import { useMutation, useQueryClient } from 'react-query';
import { Api } from '../../api/api';
const options = [
    "Edit",
    "Delete",
];

const Menu_ = ({ id }) => {
    const queryClient = useQueryClient();
    const [anchorEl, setAnchorEl] = useState(null);
    const [display, setDisplay] = useState(false);

    const mutation = useMutation(Api.delete, {
        onSuccess: () => {
            queryClient.invalidateQueries(['data']);
        },
        onError: (error) => {
            console.error('Error deleting data:', error);
        }
    });

    const handleDelete = (id) => {
        mutation.mutate(id);
    };

    const toggleForm = () => {
        setDisplay(
            !display
        );
        handleClose();
    }

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        style: {
                            width: '20ch',
                        },
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Edit'} onClick={toggleForm}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
            {display && <RenameForm toggleForm={toggleForm} id={id} />}
        </>
    )
}
export default Menu_;