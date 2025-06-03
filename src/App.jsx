import React, { useEffect } from 'react'


function App() {
    useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'CreateTodoBot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-auth-url', 'https://widget-test-seven.vercel.app/');
    script.setAttribute('data-request-access', 'write');
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [])
  return <div id="telegram-login-container"></div>
}

export default App
