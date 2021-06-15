import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function MyApp() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setInterval(() => setShow(old => !old), 10000)
    }, [])

    if (show) {
        return <App fileUrl={new Date().getSeconds() < 30 ? '/files/pdftron_about.pdf' : '/files/pdfdoc-1-page.pdf'} />
    }

    return null
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
