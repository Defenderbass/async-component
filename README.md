# 📑 AsyncComponent

```jsx harmony
import asyncComponent from 'async-component';

const AsyncComponent = asyncComponent(() => 
    import('./AsyncComponent')
        .then(module => module.default))
        
        
const App = (props) =>
    <AsyncComponent {...props}/>;
```

Say ["Thank you, developer! 👍👍👍👍"](https://www.paypal.me/igorkatsuba)