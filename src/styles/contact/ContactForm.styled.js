import styled from 'styled-components';


export const FormHolder = styled.div`
    width: 80%;
    margin: 0 auto;

    h2 {
        font-size: var(--heading-sm);
        color: ${({ theme }) => theme.colors.darkText};
        margin-bottom: var(--heading-mb-md);
        text-align: center;
    }

    @media screen and (max-width: 1200px) {
        width: 90%;
    }

    @media screen and (max-width: 992px) {
        width: 80%;
        margin-top: 30px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const Form = styled.form`
    & > div:not(:last-child) {
        margin-bottom: 20px;
    }

    & > div:last-child {
        text-align: right;
    }
`