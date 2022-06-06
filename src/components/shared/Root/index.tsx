import * as React from 'react';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  margin: '0 auto',
  [theme.breakpoints.down('xxs')]: {
    maxWidth: 0
  },
  [theme.breakpoints.up('xxs')]: {
    maxWidth: theme.breakpoints.values['xxs']
  },
  [theme.breakpoints.up('xs')]: {
    maxWidth: theme.breakpoints.values['xs']
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: theme.breakpoints.values['sm']
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: theme.breakpoints.values['md']
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: theme.breakpoints.values['lg']
  }
}));

export default Root;
