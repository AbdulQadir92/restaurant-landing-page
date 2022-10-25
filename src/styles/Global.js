import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`

    // Global
    :root {
        --font-lg: 16px;
        --font-md: 15px;
        --font-sm: 14px;

        --heading-lg: 40px;
        --heading-md: 35px;
        --heading-sm: 30px;
        --heading-xsm: 25px;
        --card-heading: 18px;

        --heading-mb-lg: 30px;
        --heading-mb-md: 25px;
    }

    // Components
    :root {
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    #app > section {
        padding: 55px 5%;
    }

    nav {
        padding: 0 5%;
    }

    /* UI Elements */
    input, textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid ${({ theme }) => theme.colors.lightTextSec};
        background-color: ${({ theme }) => theme.colors.lightBg};
        color: ${({ theme }) => theme.colors.darkText};
        font-size: var(--font-md);
    }

    input:focus, textarea:focus {
        border: 1px solid transparent;
        outline: 1px solid ${({ theme }) => theme.colors.mainColor};
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(238, 76, 43, 0.6);
    }

    ::placeholder {
        font-size: var(--font-sm);
    }

    button, input[type=button] {
        background-color: ${({ theme }) => theme.colors.mainColor};
        color: ${({ theme }) => theme.button.lightText};
        border: 2px solid ${({ theme }) => theme.colors.mainColor};
        padding: 10px;
        font-size: var(--font-md);
        cursor: pointer;
        transition: .3s;
    }

    button:hover, input[type=button]:hover {
        background-color: ${({ theme }) => theme.colors.lightBg};
        color: ${({ theme }) => theme.button.darkText};
    }

    /* Media Queries */
    @media (min-width: 1400px) {
        #app > section {
            padding: 50px 10%;
        }

        nav {
            padding: 0 10%;
        }
    }

    @media (min-width: 1700px) {
        #app > section {
            padding: 50px 15%;
        }

        nav {
            padding: 0 15%;
        }
    }

    @media (max-width: 992px) {

        // Global
        :root {
            --font-lg: 15px;
            --font-md: 14px;
            --font-sm: 13px;

            --heading-lg: 35px;
            --heading-md: 30px;
            --heading-sm: 25px;
            --heading-xsm: 22px;
            --card-heading: 16px;

            --heading-mb: 25px;
        }

        #app > section {
            padding: 50px 10%;
        }

        nav {
            padding: 0 10%;
        }

        input, textarea {
            padding: 7px;
        }

        button, input[type=button] {
            padding: 7px;
        }
    }

    @media (max-width: 768px) {

        // Global
        :root {
            --font-lg: 14px;
            --font-md: 13px;
            --font-sm: 12px;

            --heading-lg: 30px;
            --heading-md: 25px;
            --heading-sm: 22px;
            --heading-xsm: 19px;

            --heading-mb: 20px;
        }

        input, textarea {
            padding: 6px;
        }

        button, input[type=button] {
            padding: 6px;
        }
    }

    @media (max-width: 576px) {
        // Global
        :root {
            --heading-lg: 25px;
        }

        #app > section {
            padding: 50px 5%;
        }

        nav {
            padding: 0 5%;
        }
    }
`

export default GlobalStyles