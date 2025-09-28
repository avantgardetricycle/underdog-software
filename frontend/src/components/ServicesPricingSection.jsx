import React from 'react';
import { Paper, Typography } from '@mui/material';

export default function ServicesPricingSection({ colors }) {
  return (
    <Paper elevation={3} sx={{ p: 3, mt: 2, bgcolor: colors.mint }}>
      <Typography variant="h4">Services & Pricing</Typography>
      <Typography sx={{ mt: 2 }}>
        We offer custom software development, technical consulting, and MVP prototyping at competitive rates.
      </Typography>
    </Paper>
  );
}
