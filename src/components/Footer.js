import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core';
import { TypographyStyled } from '../styled/styledComponents';
import { Link } from 'react-router-dom';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.footer__container}>
            <div className={classes.footer__box}>
              <h4>Conocenos</h4>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
            </div>
            <div className={classes.footer__box}>
              <h4>Conocenos</h4>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
            </div>
            <div className={classes.footer__box}>
              <h4>Conocenos</h4>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
            </div>
            <div className={classes.footer__box}>
              <h4>Conocenos</h4>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
              <TypographyStyled>Trabaja en Amazon</TypographyStyled>
            </div>
        </div>
        <div className={classes.footer__logo}>
          <Link to='/'>
            <img className={classes.footer__logoImage} src='https://topeuniversity.com/wp-content/uploads/2021/12/amazon-gran.png' alt='Logo'/>
          </Link>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%', 
        padding: theme.spacing(6),
        backgroundColor: '#131921'
    },
    footer__container: {
      width: '90%',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    footer__box: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      '& h4': {
        color: '#F8F8F8',
        fontWeight: 500

      },
      '& p': {
        color: '#F8F8F8'
      }
    },
    footer__logo: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    footer__logoImage: {
      width: '200px'
    }
}));

export default Footer;