import { Box } from '@mui/system'
import React from 'react'
import loading from './loading.gif'

export default function Spinner() {

    return (
        <Box sx={{ textAlign: 'center', my: 3 }}>
            <Box component='img' src={loading} alt='loading' />
        </Box>
    )

}