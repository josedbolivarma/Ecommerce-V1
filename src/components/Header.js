import React, { useEffect, useState } from 'react'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useNavigate } from 'react-router-dom';
import { logoutAsync } from '../redux/actions/actionLogin';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';

//Material ui
import { makeStyles } from '@material-ui/core';
import Navbar from './Navbar';
import NavFilter from './NavFilter';

const Header = () => {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const { cart } = useSelector(store => store.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth().currentUser;
    setUser(auth);
  }, [])
  

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate('/login');
  }

  return (
  <div>
    <div className={classes.header__container}>
      <Link to='/'>
        <img 
        className={classes.logo}
        src='https://topeuniversity.com/wp-content/uploads/2021/12/amazon-gran.png'/>
      </Link>
        <div
        className={classes.header__search}
        >
            <input 
            className={classes.header__searchInput}
            type='text'
            />
            <SearchIcon
            className={classes.header__searchIcon}/>
        </div>
        <div
        className={classes.header__nav}
        >
          {/* /login */}
          <Link to='/login'>
          <div
          onClick={handleLogout} 
          className={classes.header__option}>
                <span
                className={classes.header__optionLineOne}
                >
                    Hello {!user ? 'Guest' : user.email}
                </span>
                <span
                className={classes.header__optionLineTwo}
                >
                    { user? 'Sign Out' : 'Sign In'}
                </span>
            </div>
          </Link>
          {/* /login */}
          <div className={classes.header__option}>
            <span
                className={classes.header__optionLineOne}
                >
                    Returns
                </span>
                <span
                className={classes.header__optionLineTwo}
                >
                    Orders
                </span>
            </div>
            <div className={classes.header__option}>
            <span
                className={classes.header__optionLineOne}
                >
                    Your
                </span>
                <span
                className={classes.header__optionLineTwo}
                >
                    Prime
                </span>
            </div>

              {/* /checkout */}
            <div className={classes.header__optionBasket}>
               <Link to='/checkout'>
                <ShoppingBasketIcon />
                <span
                className={classes.header__basketCount}
                >
                    {cart.length}
                </span>
                </Link>
            </div>
            {/* /checkout */}
        </div>
        <div>
        </div>
    </div>
    <Navbar />
    <NavFilter />
  </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  header__container: {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#131921',
  
  },
  logo: {
    width: '100px',
    objectFit: 'contain',
    margin: '0 20px',
    marginTop: theme.spacing(1)
  },
  header__search: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    borderRadius: '24px'
  },
  header__searchInput: {
    height: '12px',
    padding: '10px',
    border: 'none',
    width: '100%'
  },
  header__searchIcon: {
    padding: '5px',
    height: '22px !important',
    backgroundColor: '#cd9042'
  },
  header__nav: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  header__option: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
    marginRight: '10px',
    color: 'white'
  },
  header__optionLineOne: {
    fontSize: '10px'
  },
  header__optionLineTwo: {
    fontSize: '13px',
    fontWeight: '800'
  },
  header__optionBasket: {
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  },
  header__basketCount: {
    fontSize: '13px',
    fontWeight: '800',
    marginLeft: '10px',
    marginRight: '10px'
  }


}))

export default Header
