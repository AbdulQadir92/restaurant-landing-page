import styled from 'styled-components';


export const SpecialDishesSection = styled.section`
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

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid ${({ theme }) => theme.colors.mainBorder};
    background-color: ${({ theme }) => theme.colors.lightBg};

    @media screen and (max-width: 1200px) {
        flex-direction: row;

        justify-content: space-between;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px;

    & > div {
        display: flex;
        justify-content: space-between;

        margin-bottom: 10px;
    }

    h2 {
        font-size: var(--heading-xsm);
        color: ${({ theme }) => theme.colors.darkText};
    }

    p {
        color: ${({ theme }) => theme.colors.darkTextSec};
        font-size: var(--font-md);
    }

    @media screen and (max-width: 1200px) {
        width: 100%;

        justify-content: center;
    }
`

export const ImageDiv = styled.div`
    height: 300px;

    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1200px) {
        width: 500px;
    }

    @media screen and (max-width: 992px) {
        height: 250px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 400px;
    }

    @media screen and (max-width: 576px) {
        height: 300px;
    }
`