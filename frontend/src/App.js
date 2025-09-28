import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Tabs,
  Tab,
  Container,
  ThemeProvider,
  createTheme,
  Slide,
  useScrollTrigger,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { AboutSection, ServicesPricingSection, WorkWithUsSection } from './components/Sections';
import MenuIcon from '@mui/icons-material/Menu';

// New color palette assignments
const colors = {
  paleBlue: '#D1E9F0',    // accent background/stripes
  teal: '#79B4B7',        // primary accent/menu indicator
  snow: '#F2F9F9',        // main background/off-white
  forest: '#41634A',      // primary text, menu, headings
  mint: '#A8CABA',        // paper, secondary bg, borders
  darkGray: '#2F2F2F',    // primary dark text
  blue: '#3f80a5',        // additional brand blue
};

const theme = createTheme({
  palette: {
    primary: { main: colors.blue },           // Main accent color (menu/tabs/active)
    secondary: { main: colors.forest },       // Headings, selected, dark accent
    info: { main: colors.blue },              // Additional brand blue
    background: {
      default: colors.snow,                   // Page bg
      paper: colors.mint,                     // Card/paper bg
    },
    text: {
      primary: colors.darkGray,
      secondary: colors.blue,
    },
  },
  typography: {
    fontFamily: ['Funnel Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
    allVariants: { color: colors.darkGray },
  },
});


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
  const themeM = useTheme();
  const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleSelectMenu = (index) => { setTabIdx(index); setAnchorElNav(null); };

  const sectionData = [
    {
      label: 'About',
      component: (
        <AboutSection colors={colors} onGoToServices={() => setTabIdx(1)} onGoToWorkWithUs={() => setTabIdx(2)} />
      ),
    },
    {
      label: 'Services & Pricing',
      component: (
        <ServicesPricingSection colors={colors} />
      ),
    },
    {
      label: 'Work with Us',
      component: (
        <WorkWithUsSection colors={colors} />
      ),
    },
  ];

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
            {/* Right-justified menu: hamburger on mobile, tabs on desktop */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {isMobile ? (
                <>
                  <IconButton
                    size="large"
                    aria-label="open navigation menu"
                    aria-controls="nav-menu"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="nav-menu"
                    anchorEl={anchorElNav}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  >
                    {sectionData.map((section, index) => (
                      <MenuItem key={section.label} onClick={() => handleSelectMenu(index)}>
                        {section.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
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
                        border: section.label === 'Work with Us' ? `1px solid ${colors.blue}` : 'none',
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
              )}
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
            height: { xs: 'auto', md: 'calc(100vh - 120px)' },
            borderRadius: 3,
            fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif',
            position: 'relative',
            overflow: { xs: 'visible', md: 'hidden' },
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
            <Box sx={{ position: { xs: 'relative', md: 'absolute' }, top: 0, left: 0, width: '100%', height: { xs: 'auto', md: '100%' } }}>
              {sectionData[tabIdx].component}
            </Box>
          </Slide>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
