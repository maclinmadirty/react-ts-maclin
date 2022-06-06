import React from 'react';

import './styles.scss';

import boybandanaImg from '../../assets/images/boybandanaart2.png';

import Root from '../shared/Root';

import { Grid, Typography, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const theme = useTheme();

  return (
    <div className="footer-root">
      <Root className="footer-container">
        <img className="footer-image-divider" alt="boybandana" src={boybandanaImg} />
        <div className="footer-content">TEST</div>
        <Grid className="footer-end" container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              [theme.breakpoints.down('md')]: {
                justifyContent: 'center'
              }
            }}
          >
            <Typography
              mr={1}
              variant="subtitle2"
              sx={{
                fontSize: '18px',
                marginRight: '4px',
                color: 'rgba(0, 0, 0, 0.54);'
              }}
            >
              ©
            </Typography>
            <Typography
              mr={1}
              variant="subtitle2"
              sx={{
                fontSize: '18px',
                paddingBottom: '4px',
                color: 'rgba(0, 0, 0, 0.54);'
              }}
            >
              2022
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: 'rgba(0, 0, 0, 0.54);',
                wordWrap: 'break-word'
              }}
            >
              Vince Maclin Pacheco. All rights reserved.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              [theme.breakpoints.down('md')]: {
                justifyContent: 'center'
              }
            }}
          >
            <Typography
              variant="subtitle2"
              mr={2}
              sx={{
                color: 'rgba(0, 0, 0, 0.54);'
              }}
            >
              Connect with me:
            </Typography>
            <IconButton aria-label="delete">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
        {/* <div className="footer-end">TEST</div> */}
      </Root>
    </div>
  );
};

export default Footer;
