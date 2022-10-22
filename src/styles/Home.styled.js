import styled from 'styled-components';


export const StyledHome = styled.section`
    position: relative;

    background-image: url('http://localhost:3000/images/home/home.jpg');
    background-size: 100% 108%;
    background-position: bottom;
    width: 100%;
    height: 100vh;


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
    color: ${({ theme }) => theme.colors.textLight};
    text-align: center;

    
    h1 {
        font-size: var(--home-heading-font);
        margin-bottom: var(--heading-mb);
    } 

    p {
        font-size: var(--font-lg);
    }
`