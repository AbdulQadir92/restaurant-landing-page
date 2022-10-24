import styled from 'styled-components';


export const StyledFooter = styled.footer`
    & > div {
        display: grid;
        grid-template-columns: 2fr 2fr 1fr;

        background-color: ${({ theme }) => theme.footer.bg};
        padding: 50px 5%;
    }

    & h3 {
        font-size: 22px;
        font-weight: lighter;
        margin-bottom: 20px;
        color: ${({ theme }) => theme.colors.mainColor};
    }

    @media screen and (max-width: 768px) {
        & > div {
            grid-template-columns: 1fr;
            grid-row-gap: 30px;
        }

        & h3 {
            font-size: 20px;
        }
    }
`

export const AboutUs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
        color: ${({ theme }) => theme.colors.lightTextSec};
        font-size: var(--font-sm);
        line-height: 1.6;
    }

    @media screen and (max-width: 768px) {
        & > p {
            text-align: center;
        }
    }
`

export const OpeningHours = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > ul {
        list-style-type: none;
    }

    & li {
        color: ${({ theme }) => theme.colors.lightTextSec};
        font-size: var(--font-sm);
        margin-bottom: 10px;
    }
`
export const QuickLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > ul {
        list-style-type: none;
    }

    & li {
        margin-bottom: 10px;
    }

    & a {
        color: ${({ theme }) => theme.colors.lightTextSec};
        font-size: var(--font-sm);
        text-decoration: none;
    }
`

export const FooterBottom = styled.p`
    background-color: ${({ theme }) => theme.footer.bottomBg} !important;
    color: ${({ theme }) => theme.colors.lightTextSec};
    font-size: var(--font-sm);
    padding: 30px;
    text-align: center;
`