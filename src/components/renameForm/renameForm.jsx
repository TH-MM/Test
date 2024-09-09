import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { Api } from '../../api/api';

const RenameForm = ({ id, toggleForm }) => {
    const queryClient = useQueryClient();
    const [newName, setNewName] = useState('');

    const mutation = useMutation({
        mutationFn: (updatedData) => Api.rename(id, updatedData),
        onSuccess: () => {
            queryClient.invalidateQueries(['data', id]);
            alert('Data updated successfully!');
        },
        onError: (error) => {
            console.error('Error updating Data:', error);
            alert('Error updating Data');
        },
    });

    const handleRename = (e) => {
        e.preventDefault()

        mutation.mutate(newName);
    };

    return (
        < Box
            sx={{
                position: "absolute",
                top: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: '99%',
                height: '90vh',
                zIndex: 1
            }}>
            <Box
                onClick={toggleForm}
                sx={{
                    position: "fixed",
                    opacity: "0.5",
                    width: '100%',
                    height: '150vh',
                    backgroundColor: "black",
                    zIndex: 1
                }}
            ></Box>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: '300px',
                    margin: '0 auto',
                    mt: 5,
                    padding: "30px",
                    backgroundColor: "white",
                    zIndex: 1,
                    borderRadius: 2
                }}
            >
                <TextField
                    label="Name"
                    variant="outlined"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    required
                />
                <Button variant="contained" onClick={handleRename} disabled={mutation.isLoading}>
                    {mutation.isLoading ? 'Renaming...' : 'Rename'}
                </Button>
            </Box>
        </Box>
    );

}

export default RenameForm;