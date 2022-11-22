import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css'
import "../assets/plugins/bootstrap/css/bootstrap.min.css"
import "../assets/css/main.css"
import "../assets/css/theme1.css"
import "../assets/css/custom.css"
import '@fortawesome/fontawesome-free/css/all.css'

const App = ({ Component, pageProps }) => {

    useEffect(() => {
        document.body.className = 'font-opensans offcanvas-active';
    });

    return <Component {...pageProps} />
}

export default App
