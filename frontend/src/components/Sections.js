import React from 'react';
import { Box, Typography, Paper, Link } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export function AboutSection({ colors, onGoToServices, onGoToWorkWithUs }) {
  React.useEffect(() => {
    const id = 'sora-font';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap';
      document.head.appendChild(link);
    }
  }, []);
  return (
    <>
    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', height: '100%', alignItems: 'stretch', pt: 3 }}>
      <Box sx={{ px: 2, py: 3 }}>
        <Typography
          sx={{
            fontFamily: 'Sora, Funnel Sans, Arial, Helvetica, sans-serif',
            fontWeight: 600,
            color: colors.blue,
            lineHeight: 1,
            fontSize: { xs: '1.6rem', md: '3rem' },
            whiteSpace: 'nowrap',
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
      <Box sx={{ position: 'relative', width: '100%', flexGrow: 1, minHeight: '40vh', maxHeight: '50vh', overflow: 'hidden' }}>
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
      <Box sx={{ px: 2, py: 3 }}>
        <Typography
          sx={{
            fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif',
            fontWeight: 400,
            color: colors.darkGray,
            lineHeight: 1.4,
            fontSize: { xs: '1rem', md: '1.2rem' },
            mt: { xs: 2.5, md: 3 },
          }}
        >
          Are you a small organization or individual in need of assistance with your website or other software needs? Underdog Software is here to provide you with...
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', m: 0, mt: { xs: 2.5, md: 3 }, p: 0 }}>
          <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <TaskAltIcon sx={{ color: colors.blue, mr: 1 }} />
            <Typography sx={{ fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif' }}>
              Custom website rebuilds
            </Typography>
          </Box>
          <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <TaskAltIcon sx={{ color: colors.blue, mr: 1 }} />
            <Typography sx={{ fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif' }}>
              Web accessibility audits and updates
            </Typography>
          </Box>
          <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <TaskAltIcon sx={{ color: colors.blue, mr: 1 }} />
            <Typography sx={{ fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif' }}>
              By-the-hour technical consulting
            </Typography>
          </Box>
          <Box component="li" sx={{ display: 'flex', alignItems: 'center' }}>
            <TaskAltIcon sx={{ color: colors.blue, mr: 1 }} />
            <Typography sx={{ fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif' }}>
              ...all from an expert you can trust
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif',
            fontWeight: 400,
            color: colors.darkGray,
            lineHeight: 1.4,
            fontSize: { xs: '1rem', md: '1.1rem' },
            mt: { xs: 2.5, md: 3 },
          }}
        >
          Unsure if Underdog is right for you? Check out our{' '}
          <Link component="button" onClick={onGoToServices} color="primary" underline="hover">
            Services & Pricing
          </Link>{' '}
          for examples of the kind of work we do.
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif',
            fontWeight: 400,
            color: colors.darkGray,
            lineHeight: 1.4,
            fontSize: { xs: '1rem', md: '1.1rem' },
            mt: { xs: 2, md: 2.5 },
          }}
        >
          Ready to dive in? Schedule a free, no-commitment consultation{' '}
          <Link component="button" onClick={onGoToWorkWithUs} color="primary" underline="hover">
            here
          </Link>
          .
        </Typography>
      </Box>
    </Box>
    <Box sx={{ display: { xs: 'none', md: 'flex' }, height: '100%', alignItems: 'stretch' }}>
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
            fontFamily: 'Sora, Funnel Sans, Arial, Helvetica, sans-serif',
            fontWeight: 600,
            color: colors.blue,
            lineHeight: 1,
            fontSize: { xs: '1.6rem', md: '3rem' },
            whiteSpace: 'nowrap',
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
        <Typography
          sx={{
            fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif',
            fontWeight: 400,
            color: colors.darkGray,
            lineHeight: 1.4,
            fontSize: { xs: '1rem', md: '1.2rem' },
            mt: { xs: 2.5, md: 3 },
          }}
        >
          Are you a small organization or individual in need of assistance with your website or other software needs? Underdog Software is here to provide you with...
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', m: 0, mt: { xs: 2.5, md: 3 }, p: 0 }}>
          <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <TaskAltIcon sx={{ color: colors.blue, mr: 1 }} />
            <Typography sx={{ fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif' }}>
              Custom website rebuilds
            </Typography>
          </Box>
          <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <TaskAltIcon sx={{ color: colors.blue, mr: 1 }} />
            <Typography sx={{ fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif' }}>
              Web accessibility audits and updates
            </Typography>
          </Box>
          <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <TaskAltIcon sx={{ color: colors.blue, mr: 1 }} />
            <Typography sx={{ fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif' }}>
              By-the-hour technical consulting
            </Typography>
          </Box>
          <Box component="li" sx={{ display: 'flex', alignItems: 'center' }}>
            <TaskAltIcon sx={{ color: colors.blue, mr: 1 }} />
            <Typography sx={{ fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif' }}>
              ...all from an expert you can trust
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif',
            fontWeight: 400,
            color: colors.darkGray,
            lineHeight: 1.4,
            fontSize: { xs: '1rem', md: '1.1rem' },
            mt: { xs: 2.5, md: 3 },
          }}
        >
          Unsure if Underdog is right for you? Check out our{' '}
          <Link component="button" onClick={onGoToServices} color="primary" underline="hover">
            Services & Pricing
          </Link>{' '}
          for examples of the kind of work we do.
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Funnel Sans, Arial, Helvetica, sans-serif',
            fontWeight: 400,
            color: colors.darkGray,
            lineHeight: 1.4,
            fontSize: { xs: '1rem', md: '1.1rem' },
            mt: { xs: 2, md: 2.5 },
          }}
        >
          Ready to dive in? Schedule a free, no-commitment consultation{' '}
          <Link component="button" onClick={onGoToWorkWithUs} color="primary" underline="hover">
            here
          </Link>
          .
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
    </>
  );
}

export function ServicesPricingSection({ colors }) {
  return (
    <Paper elevation={3} sx={{ p: 3, mt: 2, bgcolor: colors.mint }}>
      <Typography variant="h4">Services & Pricing</Typography>
      <Typography sx={{ mt: 2 }}>
        We offer custom software development, technical consulting, and MVP prototyping at competitive rates.
      </Typography>
    </Paper>
  );
}

export function WorkWithUsSection({ colors }) {
  return (
    <Paper elevation={3} sx={{ p: 3, mt: 2, bgcolor: colors.mint }}>
      <Typography variant="h4">Work with Us</Typography>
      <Typography sx={{ mt: 2 }}>
        Work with us.
      </Typography>
    </Paper>
  );
}
