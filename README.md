# AsyncComponent

[![Greenkeeper badge](https://badges.greenkeeper.io/Defenderbass/async-component.svg)](https://greenkeeper.io/)

```jsx harmony
import asyncComponent from 'async-component';

const AsyncComponent = asyncComponent(() => 
    import('./AsyncComponent')
        .then(module => module.default))
        
        
const App = (props) =>
    <AsyncComponent {...props}/>;
```

Say ["Thank you, developer!"](https://www.paypal.me/igorkatsuba)