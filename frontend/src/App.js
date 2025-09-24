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
    fontFamily: ['Funnel Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
    allVariants: { color: colors.forest },
  },
});

const sectionData = [
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
            {/* Logo with company name and tagline to the right */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', minWidth: 0, pr: 3 }}>
              {/* Logo */}
              <img
                src={process.env.PUBLIC_URL + '/underdog_logo_no_words.png'}
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
              {/* Company name and byline stacked */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.9rem' },
                    letterSpacing: '.04em',
                    color: colors.forest,
                    lineHeight: 1.07,
                    fontFamily: 'Sigmar, Arial, Helvetica, sans-serif',
                    mb: '-2px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  UNDERDOG SOFTWARE
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: '1.18rem', md: '1.5rem' },
                    color: colors.teal,
                    letterSpacing: '.02em',
                    fontStyle: 'italic',
                    lineHeight: 1.27,
                    mt: 0.5,
                    pl: '2px',
                  }}
                >
                  Technical expertise for the little guy
                </Typography>
              </Box>
            </Box>
            {/* Right-justified menu and Let's Chat button */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Tabs
                value={tabIdx}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="inherit"
                sx={{ minHeight: 48 }}
              >
                {sectionData.map((section) => (
                  <Tab
                    label={section.label}
                    key={section.label}
                    sx={{
                      textTransform: 'none',
                      fontWeight: 400, // regular weight
                      minWidth: 160,
                      color: colors.forest,
                      fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif',
                      '&.Mui-selected': {
                        color: colors.forest,
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
          maxWidth="md"
          sx={{
            mt: 4,
            mb: 6,
            bgcolor: colors.snow,
            color: colors.forest,
            minHeight: '400px',
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
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
              {sectionData[tabIdx].component}
            </Box>
          </Slide>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
