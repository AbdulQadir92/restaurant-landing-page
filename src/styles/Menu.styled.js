import styled from 'styled-components';


export const MenuSection = styled.section`
    background-color: ${({ theme }) => theme.colors.lightBg};

    & > h1 {
        color: ${({ theme }) => theme.colors.mainColor};
        font-size: var(--heading-md);
        margin-bottom: var(--heading-mb-lg);
    }
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 30px;

    @media screen and (max-width: 1200px) {
        & {
           grid-template-columns: repeat(1, minmax(0, 1fr));
        } 
    }
`

export const Card = styled.div`
    display: flex;
    /* justify-content: space-between; */

    border: 1px solid ${({ theme }) => theme.colors.mainBorder};
    background-color: ${({ theme }) => theme.colors.lightBg};

    @media screen and (max-width: 576px) {
        & {
            flex-direction: column;
        } 
    }
`

export const CardBody = styled.div`
    display: grid;
    
    padding: 15px;

    div {
        display: flex;
        justify-content: space-between;
    }

    h2 {
        font-size: var(--heading-xsm);
        color: ${({ theme }) => theme.colors.darkText};
    }

    p {
        color: ${({ theme }) => theme.colors.darkTextSec};
        font-size: var(--font-lg);
    }

    @media screen and (max-width: 1200px) {
        & {
            padding: 30px;
        } 
    }

    @media screen and (max-width: 768px) {
        & {
            padding: 15px;
        } 
    }

    @media screen and (max-width: 576px) {
        & {
            height: 150px;
        } 
    }
`

export const ImageContainer = styled.div`
    width: 400px;
    height: 170px;

    & > img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 576px) {
        & {
            width: 100%;
            height: 300px;
        }
    }
`