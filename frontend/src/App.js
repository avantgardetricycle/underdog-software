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

// New color palette assignments
const colors = {
  paleBlue: '#D1E9F0',    // accent background/stripes
  teal: '#79B4B7',        // primary accent/menu indicator
  snow: '#F2F9F9',        // main background/off-white
  forest: '#41634A',      // primary text, menu, headings
  mint: '#A8CABA',        // paper, secondary bg, borders
};

const theme = createTheme({
  palette: {
    primary: { main: colors.teal },           // Main accent color (menu/tabs/active)
    secondary: { main: colors.forest },       // Headings, selected, dark accent
    background: {
      default: colors.snow,                   // Page bg
      paper: colors.mint,                     // Card/paper bg
    },
    text: {
      primary: colors.forest,
      secondary: colors.teal,
    },
  },
  typography: {
    allVariants: { color: colors.forest },
  },
});

const sections = [
  {
    label: 'Services & Pricing',
    component: (
      <Paper elevation={3} sx={{ p: 3, mt: 2, bgcolor: colors.mint }}>
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
      <Paper elevation={3} sx={{ p: 3, mt: 2, bgcolor: colors.mint }}>
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
      <Paper elevation={3} sx={{ p: 3, mt: 2, bgcolor: colors.mint }}>
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
      <Paper elevation={3} sx={{ p: 3, mt: 2, bgcolor: colors.mint }}>
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
      <Box sx={{ flexGrow: 1, minHeight: '100vh', background: colors.snow }}>
        {/* AppBar with logo at left, menu at right */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            background: colors.paleBlue,
            boxShadow: 'none',
            color: colors.forest,
            py: 1,
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: 120, px: { xs: 2, md: 4 } }}>
            {/* Large left-aligned logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={process.env.PUBLIC_URL + '/underdog_logo.png'}
                alt="Underdog Logo"
                style={{
                  height: 276,
                  width: 'auto',
                  marginRight: 30,
                  background: 'transparent',
                  borderRadius: 12,
                  padding: 0,
                }}
              />
            </Box>
            {/* Right-justified menu */}
            <Tabs
              value={tabIdx}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="inherit"
              sx={{ minHeight: 48 }}
            >
              {sections.map((section) => (
                <Tab
                  label={section.label}
                  key={section.label}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    minWidth: 160,
                    color: colors.forest,
                    '&.Mui-selected': {
                      color: colors.teal,
                    },
                  }}
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
            bgcolor: colors.snow,
            color: colors.forest,
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
