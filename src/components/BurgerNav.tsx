
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu';


function BurgerNav(): JSX.Element {

   

    return ReactDOM.createPortal(
        <>
        <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/california">California</a>
            <a id="contact" className="menu-item" href="/vermont">Vermont</a>
        </Menu>
        </>,
        document.getElementById('portalBurgerNav')!

    )
    

}   

export default BurgerNav;

