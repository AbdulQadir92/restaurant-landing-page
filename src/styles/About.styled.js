import styled from 'styled-components';


export const AboutSection = styled.section`
    background-color: ${({ theme }) => theme.colors.lightBg};

    h1 {
        color: ${({ theme }) => theme.colors.mainColor};
        font-size: var(--heading-md);
        margin-bottom: var(--heading-mb-lg);
    }

    & > div {
        display: flex;
    }

    @media screen and (max-width: 992px) {
        & > div {
            flex-direction: column;
        }
    }
`

export const LeftColumn = styled.div`
    width: 50%;
    padding-right: 30px;

    img {
        width: 100%;
        height: 450px;
    }

    @media screen and (max-width: 992px) {
        & {
            width: 100%;
            padding-right: 0;
        }
    }

    @media screen and (max-width: 768px) {
        img {
            height: 400px;
        }
    }

    @media screen and (max-width: 576px) {
        img {
            height: 300px;
        }
    }
`

export const RightComlumn = styled.div`
    width: 60%;
    padding: 30px;

    & > h2 {
        font-size: var(--heading-sm);
        margin-bottom: var(--heading-mb-md);
        color: ${({ theme }) => theme.colors.darkText};
        text-align: center;
    }

    p {
        font-size: var(--font-lg);
        margin-bottom: 15px;
        color: ${({ theme }) => theme.colors.darkTextSec};
        line-height: 1.6;
    }

    @media screen and (max-width: 992px) {
        & {
            width: 100%;
        }
    }
`

