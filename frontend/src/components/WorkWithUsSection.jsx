import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import CalendlyScheduler from './CalendlyScheduler.jsx';

export default function WorkWithUsSection({ colors }) {
  return (
    <Paper elevation={3} sx={{ p: 3, mt: 2, bgcolor: colors.mint }}>
      <Typography variant="h4">Work with Us</Typography>
      <Typography sx={{ mt: 2 }}>
        Work with us.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <CalendlyScheduler url="https://calendly.com/goodworkssoftware/30min" />
      </Box>
    </Paper>
  );
}
