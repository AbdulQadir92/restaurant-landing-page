import styled from 'styled-components';

export const HomeSection = styled.section`
    position: relative;

    width: 100%;
    height: 100vh; 

    & > img {
        position: absolute;
        inset: 0;

        width: 100%;
        height: 100%;
    }


    @media screen and (max-width: 992px) {
        & {
            height: 60vh;
        } 
    }

    @media screen and (max-width: 768px) {
        & {
            height: 50vh;
        } 
    }

    @media screen and (max-width: 576px) {
        & {
            height: 40vh;
        } 
    }
`

export const HomeShadow = styled.div`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.home.shadow};
    width: 100%;
    height: 100vh;
    padding: inherit;


    @media screen and (max-width: 992px) {
        & {
            height: 60vh;
        }
    }

    @media screen and (max-width: 768px) {
        & {
            height: 50vh;
        }
    }

    @media screen and (max-width: 576px) {
        & {
            height: 40vh;
        } 
    }
`

export const Content = styled.div`
    width: 100%;
    color: ${({ theme }) => theme.home.lightText};
    text-align: center;

    
    h1 {
        font-size: var(--heading-lg);
        margin-bottom: 15px;
    } 

    p {
        font-size: var(--font-lg);
    }
`