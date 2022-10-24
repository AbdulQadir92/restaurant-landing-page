import styled from 'styled-components';


export const InfoSection = styled.section`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    border-top: 1px solid ${({ theme }) => theme.colors.mainBorder};
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainBorder};

    margin-bottom: 30px;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    span {
        color: ${({ theme }) => theme.colors.mainColor};
        font-size: 25px;
        margin-bottom: 10px;
    }

    p {
        color: ${({ theme }) => theme.colors.darkTextSec};
        font-size: var(--font-lg);
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        span {
            font-size: 23px;
        }
    }

    @media screen and (max-width: 576px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        grid-row-gap: 30px;

        span {
            font-size: 21px;
            margin-bottom: 5px;
        }
    }
`