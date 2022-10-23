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
        padding: 50px 5%;
    }

    nav {
        padding: 0 5%;
    }


    /* Media Queries */
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

         // Components
         :root {
            
        }

        #app > section {
            padding: 50px 10%;
        }

        nav {
            padding: 0 10%;
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

        // Components
        :root {
            
        }
    }

    @media (max-width: 576px) {
         // Components
        :root {
            --home-heading-font: 25px;
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