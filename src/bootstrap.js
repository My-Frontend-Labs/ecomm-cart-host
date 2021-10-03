import { random } from 'faker';

export const mount = (el) => {
    const cartText = `
        <div>You have ${random.number()} items in your cart!</div>
    `;
    
    el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    el && mount(el);
}
