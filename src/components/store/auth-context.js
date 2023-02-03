// Component를 작성하는 것이 아니기 때문에
// CamelCase 로 표시하지 않고, kebab-case 사용
import React, { useEffect, useState } from 'react';

// component를 만드는 것은 아니지만, component 객체를 저장하므로 Component 처럼 선언
const AuthContext = React.createContext({
  isLoggedIn: false,

  // IDE 자동 완성 기능 등 편의를 위해 dummy function을 넣을수도 있다.
  onLogout: () => { },
  onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }

  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }

  return (
    <AuthContext.Provider
      value={
        {
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
          onLogin: loginHandler,
        }
      }
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
