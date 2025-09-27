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
  Slide,
  useScrollTrigger,
} from '@mui/material';

// New color palette assignments
const colors = {
  paleBlue: '#D1E9F0',    // accent background/stripes
  teal: '#79B4B7',        // primary accent/menu indicator
  snow: '#F2F9F9',        // main background/off-white
  forest: '#41634A',      // primary text, menu, headings
  mint: '#A8CABA',        // paper, secondary bg, borders
  darkGray: '#2F2F2F',    // primary dark text
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
      primary: colors.darkGray,
      secondary: colors.teal,
    },
  },
  typography: {
    fontFamily: ['Funnel Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
    allVariants: { color: colors.darkGray },
  },
});

const sectionData = [
  {
    label: 'About',
    component: (
      <Box sx={{ display: 'flex', height: '100%', alignItems: 'stretch' }}>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: { xs: 2, md: 4 },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif',
              fontWeight: 800,
              color: colors.darkGray,
              lineHeight: 1,
              fontSize: { xs: '2.2rem', md: '4rem' },
            }}
          >
            Technical expertise
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif',
              fontWeight: 400,
              color: colors.darkGray,
              lineHeight: 1.1,
              fontSize: { xs: '1.6rem', md: '2.4rem' },
            }}
          >
            for the little guy
          </Typography>
        </Box>
        <Box sx={{ flex: 1, position: 'relative', height: '100%', overflow: 'hidden' }}>
          <img
            src={process.env.PUBLIC_URL + '/computer_help.png'}
            alt="Computer help"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'top right',
                                        }}
          />
        </Box>
      </Box>
    ),
  },
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
    label: 'Work with Us',
    component: (
      <Paper elevation={3} sx={{ p: 3, mt: 2, bgcolor: colors.mint }}>
        <Typography variant="h4">Work with Us</Typography>
        <Typography sx={{ mt: 2 }}>
          Work with us.
        </Typography>
      </Paper>
    ),
  },
];

function App() {
  const [tabIdx, setTabIdx] = React.useState(0);
  const [prevTabIdx, setPrevTabIdx] = React.useState(0);
  const [slideIn, setSlideIn] = React.useState(true);

  const handleTabChange = (event, newValue) => {
    if (newValue !== tabIdx) {
      setSlideIn(false); // trigger exit
      setTimeout(() => {
        setPrevTabIdx(tabIdx); // for direction decision (optional, here for extensibility)
        setTabIdx(newValue);
        setSlideIn(true); // trigger entry for new section
      }, 180); // must be < Slide's timeout, to avoid overlap
    }
  };

  // Swipe direction: left if increasing index, right otherwise
  const direction = tabIdx > prevTabIdx ? 'left' : 'right';
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, minHeight: '100vh', background: colors.snow }}>
        {/* AppBar with logo at left, menu at right */}
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: colors.snow,
            boxShadow: 'none',
            color: colors.darkGray,
            py: 1,
            borderBottom: scrolled ? `1px solid ${colors.mint}` : 'transparent',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: 120, px: { xs: 2, md: 4 } }}>
            {/* Logo with company name and tagline to the right */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', minWidth: 0, pr: 3 }}>
              {/* Logo */}
              <img
                src={process.env.PUBLIC_URL + '/underdog_logo.png'}
                alt="Underdog Logo"
                style={{
                  height: 138,
                  width: 'auto',
                  background: 'transparent',
                  borderRadius: 12,
                  padding: 0,
                  display: 'block',
                  marginRight: 18,
                }}
              />
            </Box>
            {/* Right-justified menu and Let's Chat button */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Tabs
                value={tabIdx}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="inherit"
                sx={{ minHeight: 48, '& .MuiTabs-indicator': { display: 'none' } }}
              >
                {sectionData.map((section) => (
                  <Tab
                    label={section.label}
                    key={section.label}
                    sx={{
                      textTransform: 'none',
                      fontWeight: 400, // regular weight
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      minWidth: 120,
                      color: colors.darkGray,
                      fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif',
                      border: section.label === 'Work with Us' ? `1px solid ${colors.teal}` : 'none',
                      borderRadius: section.label === 'Work with Us' ? '9999px' : 0,
                      px: section.label === 'Work with Us' ? 2 : undefined,
                      py: section.label === 'Work with Us' ? 0.5 : undefined,
                      '&.Mui-selected': {
                        color: colors.darkGray,
                      },
                    }}
                  />
                ))}
              </Tabs>
            </Box>
          </Toolbar>
        </AppBar>
        {/* Main Content Section with swipe transition */}
        <Container
          maxWidth={false} disableGutters
          sx={{
            mt: '120px',
            mb: 0,
            bgcolor: colors.snow,
            color: colors.darkGray,
            height: 'calc(100vh - 120px)',
            borderRadius: 3,
            fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Slide
            in={slideIn}
            direction={direction}
            timeout={{ enter: 350, exit: 180 }}
            mountOnEnter
            unmountOnExit
            appear
            key={tabIdx}
          >
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              {sectionData[tabIdx].component}
            </Box>
          </Slide>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
