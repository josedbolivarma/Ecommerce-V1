import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* TYPOGRAPHYS */
export const LinkRedirect = styled(Link)`
    color: blue;
    font-size: .8rem;
    text-decoration: none;
`;

export const MarkPrice = styled.p`
    color: red;
    font-size: 1.2rem;
    font-weight: 400;
`;

export const TypographyStyled = styled(Typography)`
    color: #111;
    font-size: .8rem;
`;

// Buttons

export const SignInButton = styled.button`
background: #f0c14b;
borderRadius: 2px,
width: 100%;
height: 30px;
marginTop: 10px;
`;

export const SignUpButton = styled.button`
background: #f0c14c;
borderRadius: 2px,
width: 100%;
height: 30px;
marginTop: 10px;
`;