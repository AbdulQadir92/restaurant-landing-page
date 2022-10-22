import styled from "styled-components";


export const StyledNavbar = styled.nav`
    position: fixed;
    top: 0;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* background-color: ${({ theme }) => theme.nav.bg}; */
    background-color: transparent;
    width: 100%;
    height: 60px;

    @media screen and (max-width: 768px) {
        & {
            flex-direction: column;
            justify-content: flex-start;
        } 
    }
`

export const BrandMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 60px;

    @media screen and (max-width: 768px) {
        & {
            width: 100%;
        } 
    }
`

export const Brand = styled.div`
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.lightText};
        font-weight: bold;
        font-size: 25px;
    }
`

export const MenuIcon = styled.div`
    & > * {
        color: ${({ theme }) => theme.colors.mainColor};
        cursor: pointer;
        font-size: 25px;
        display: none;
    }

    @media screen and (max-width: 768px) {
        & > * {
            display: block;
        } 
    }
`

export const NavUl = styled.ul`
    display: flex;
    align-items: center;

    list-style-type: none;
    transition: 0.3s;

    li:not(:last-child) {
        padding-right: 25px;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.lightText};
        font-size: 14px;
    }    

    .active {
        color: ${({ theme }) => theme.colors.mainColor};
    }

    @media screen and (max-width: 768px) {
        position: absolute;
        top: 60px;

        flex-direction: column;
        justify-content: center;

        width: 80%;
        height: 0;
        background-color: ${({ theme }) => theme.colors.darkBg};
    

        li {
            display: none;
        }

        li:not(:last-child) {
            padding-right: 0;
            margin-bottom: 15px;
        }
    }

    @media screen and (max-width: 576px) {
        width: 90%;
    }
`
