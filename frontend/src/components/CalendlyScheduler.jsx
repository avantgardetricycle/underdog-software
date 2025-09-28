import React from 'react';
import { Box } from '@mui/material';
import { InlineWidget } from 'react-calendly';

/**
 * CalendlyScheduler (react-calendly)
 * Props:
 *  - url (string, required): Calendly scheduling link, e.g. https://calendly.com/your-handle/intro-call
 *  - height (responsive value, optional): container min-height. Defaults to { xs: 820, md: 780 }.
 *  - pageSettings (object, optional): Calendly page settings (primaryColor, hideEventTypeDetails, etc.)
 *  - prefill (object, optional): Prefill details (name, email, customAnswers)
 *  - utm (object, optional): UTM tracking values
 */
export default function CalendlyScheduler({
  url,
  height = { xs: 820, md: 780 },
  pageSettings,
  prefill,
  utm,
}) {
  if (!url) return null;

  const defaultPageSettings = {
    primaryColor: '#3f80a5',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
  };

  return (
    <Box sx={{ width: '100%', minHeight: height, borderRadius: 2, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
      <InlineWidget
        url={url}
        styles={{ height: '100%', width: '100%' }}
        pageSettings={{ ...defaultPageSettings, ...(pageSettings || {}) }}
        prefill={prefill}
        utm={utm}
      />
    </Box>
  );
}
