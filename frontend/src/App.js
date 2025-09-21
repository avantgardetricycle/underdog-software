import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  Container,
  Paper,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const colors = {
  themeBlue: '#2596be',
  themeYellow: '#eeb437',
  themeGreen: '#899c3e',
  themeBlack: '#1e363e',
  themeOffWhite: '#fcf8d5',
};

const theme = createTheme({
  palette: {
    primary: { main: colors.themeBlue },
    secondary: { main: colors.themeYellow },
    background: {
      default: colors.themeOffWhite,
      paper: '#fff',
    },
    text: {
      primary: colors.themeBlack,
      secondary: colors.themeGreen,
    },
  },
  typography: {
    allVariants: { color: colors.themeBlack },
  },
});

const sections = [
  {
    label: 'Services & Pricing',
    component: (
      <Paper elevation={2} sx={{ p: 3, mt: 2 }}>
        <Typography variant="h4">Services & Pricing</Typography>
        <Typography sx={{ mt: 2 }}>
          We offer custom software development, technical consulting, and MVP prototyping at competitive rates.
        </Typography>
      </Paper>
    ),
  },
  {
    label: 'Testimonials',
    component: (
      <Paper elevation={2} sx={{ p: 3, mt: 2 }}>
        <Typography variant="h4">Testimonials</Typography>
        <Typography sx={{ mt: 2 }}>
          "Underdog Software delivered beyond our expectations!" – Happy Client
        </Typography>
      </Paper>
    ),
  },
  {
    label: 'Demos',
    component: (
      <Paper elevation={2} sx={{ p: 3, mt: 2 }}>
        <Typography variant="h4">Demos</Typography>
        <Typography sx={{ mt: 2 }}>
          Demo projects and case studies coming soon.
        </Typography>
      </Paper>
    ),
  },
  {
    label: 'Contact Us',
    component: (
      <Paper elevation={2} sx={{ p: 3, mt: 2 }}>
        <Typography variant="h4">Contact Us</Typography>
        <Typography sx={{ mt: 2 }}>
          Email: contact@underdogsoftware.com<br />
          Phone: (123) 456-7890
        </Typography>
      </Paper>
    ),
  },
];

function App() {
  const [tabIdx, setTabIdx] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIdx(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, minHeight: '100vh', background: colors.themeOffWhite }}>
        {/* Stripes & Logo Section */}
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              position: 'relative',
              pb: 6,
            }}
          >
            {/* Stripes backgrounds */}
            <Box sx={{ width: '100%', height: 56, bgcolor: colors.themeBlue }} />
            <Box sx={{ width: '100%', height: 56, bgcolor: colors.themeGreen }} />
            <Box
              sx={{
                width: '100%',
                height: 56,
                bgcolor: colors.themeYellow,
                mb: '-84px',
              }}
            />
            {/* Logo (overlapping all stripes, now left-justified, larger, transparent bg) */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 2,
                pt: 3,
                pl: { xs: 2, sm: 4, md: 7 },
              }}
            >
              <img
                src={process.env.PUBLIC_URL + '/underdog_logo.png'}
                alt="Underdog Logo"
                style={{
                  height: 276, // 50% larger than 184
                  width: 'auto',
                  borderRadius: 12,
                  boxShadow: '0 4px 32px rgba(30,54,62,.08)',
                  background: 'transparent',
                  padding: 8,
                }}
              />
            </Box>
          </Box>
        </Box>
        {/* AppBar and Menu */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            background: 'transparent',
            boxShadow: 'none',
            color: colors.themeBlack,
          }}
        >
          <Toolbar sx={{ justifyContent: 'flex-end', px: { xs: 0, md: 4 } }}>
            <Tabs
              value={tabIdx}
              onChange={handleTabChange}
              indicatorColor="secondary"
              textColor="inherit"
              sx={{ minHeight: 48 }}
            >
              {sections.map((section) => (
                <Tab
                  label={section.label}
                  key={section.label}
                  sx={{ textTransform: 'none', fontWeight: 600, minWidth: 160 }}
                />
              ))}
            </Tabs>
          </Toolbar>
        </AppBar>
        {/* Main Content Section */}
        <Container
          maxWidth="md"
          sx={{
            mt: 4,
            mb: 6,
            bgcolor: colors.themeOffWhite,
            color: colors.themeBlack,
            minHeight: '400px',
            borderRadius: 3,
          }}
        >
          {sections[tabIdx].component}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
