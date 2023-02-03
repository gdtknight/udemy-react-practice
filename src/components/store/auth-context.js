// Component를 작성하는 것이 아니기 때문에
// CamelCase 로 표시하지 않고, kebab-case 사용
import React from 'react';

// component를 만드는 것은 아니지만, component 객체를 저장하므로 Component 처럼 선언
const AuthContext = React.createContext({
  isLoggedIn: false
});

export default AuthContext;
