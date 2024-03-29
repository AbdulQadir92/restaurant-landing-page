import styled from "styled-components";


export const StyledNavbar = styled.nav`
    position: fixed;
    top: 0;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

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
        color: ${({ theme }) => theme.nav.lightText};
        font-weight: bold;
        font-size: 25px;
    }

    img {
        width: 60px;
        height: 60px;
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
    position: relative;

    display: flex;
    align-items: center;

    list-style-type: none;
    transition: 0.3s;

    & > span {
        position: absolute;
        top: 12px;
        right: 15px;

        color: ${({ theme }) => theme.colors.mainColor};
        font-size: 20px;
        cursor: pointer;
        display: none;
    }

    li:not(:last-child) {
        padding-right: 25px;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.nav.lightText};
        font-size: 14px;
    }    

    .active {
        color: ${({ theme }) => theme.colors.mainColor};
    }

    @media screen and (max-width: 768px) {
        position: absolute;
        top: 60px;
        z-index: 10;

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

        a {
            color: ${({ theme }) => theme.colors.lightText};
        } 
    }

    @media screen and (max-width: 576px) {
        width: 90%;
    }
`

export const ThemeIcons = styled.span`
    position: absolute;
    top: 18px;
    right: 20px;

    & > * {
        box-sizing: content-box;
        font-size: 15px;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;
    }

    & > #moon {
        background-color: ${(({ theme }) => theme.colors.lightBg)};
        color: ${(({ theme }) => theme.colors.darkText)};
    }
    
    & > #sun {
        background-color: ${(({ theme }) => theme.colors.darkBg)};
        color: ${(({ theme }) => theme.colors.lightText)};
    }

    @media screen and (max-width: 768px) {
        right: 18%;
    }
`