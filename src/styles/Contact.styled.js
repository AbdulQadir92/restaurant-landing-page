import styled from "styled-components";


export const ContactSection = styled.section`
    background-color: ${({ theme }) => theme.colors.lightBg};

    & > h1 {
        color: ${({ theme }) => theme.colors.mainColor};
        font-size: var(--heading-md);
        margin-bottom: var(--heading-mb-lg);
    }

    & > div {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 30px;
    }

    @media screen and (max-width: 992px) {
        & > div {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
`

export const MapContainerDiv = styled.div`
    position: relative;
    height: 400px;

    @media screen and (max-width: 576px) {
        height: 300px;
    }
`