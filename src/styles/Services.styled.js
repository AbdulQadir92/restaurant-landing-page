import styled from 'styled-components';


export const ServicesSection = styled.section`
    background-color: ${({ theme }) => theme.colors.lightBg};

    & > h1 {
        color: ${({ theme }) => theme.colors.mainColor};
        font-size: var(--heading-md);
        margin-bottom: var(--heading-mb-lg);
    }
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 30px;

    @media screen and (max-width: 992px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

export const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.lightBg};

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 15px;
    }

    h2 {
        font-size: var(--heading-xsm);
        color: ${({ theme }) => theme.colors.darkText};
    }

    span {
        color: ${({ theme }) => theme.colors.mainColor};
        font-size: 30px;
    }

    & > p {
        text-align: justify;
        color: ${({ theme }) => theme.colors.darkTextSec};
        font-size: var(--font-md);
    }
`