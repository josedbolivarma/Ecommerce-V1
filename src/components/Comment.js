import React from 'react'

//Material UI
import { makeStyles } from '@material-ui/core'
import { TypographyStyled } from '../styled/styledComponents';

const Comment = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.comment__boxFlex}>
            <img className={classes.comment__avatar} src='https://foros.proyectomila.net/uploads/avatars/avatar_3099.jpg?dateline=1594534017' alt='Avatar Profile'/>
            <TypographyStyled>Amazon Customer</TypographyStyled>
        </div>

        <div className={classes.comment__box}>
            <TypographyStyled>
            Customer Reviews help customers to learn more about the product and decide whether it is the right product for them.
Customer Reviews should give customers genuine product feedback from fellow shoppers. We have a zero tolerance policy for any review designed to mislead or manipulate customers.
            </TypographyStyled>
        </div>

        <div className={classes.comment__box}>
            <TypographyStyled>
            You can submit reviews for items listed on Amazon. We encourage you to share your opinions, both favorable and unfavorable.
            </TypographyStyled>
            <TypographyStyled>
                A 45 personas les resultó útil
            </TypographyStyled>
            <TypographyStyled>
                Informar de un abuso
            </TypographyStyled>
        </div>

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        marginBottom: theme.spacing(6)
    },
    comment__avatar: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
    },
    comment__boxFlex: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1)
    },
    comment__box: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(.6)
    }
}))

export default Comment