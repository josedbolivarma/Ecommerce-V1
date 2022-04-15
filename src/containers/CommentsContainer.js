import React from 'react'
import Comment from '../components/Comment'

// Material UI
import { makeStyles } from '@material-ui/core'

const CommentsContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.root__container}>
        <Comment />
        <Comment />
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '4rem 0',
    },
    root__container: {
        width: '94%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
    }
}))

export default CommentsContainer