import {Fragment, useContext} from 'react';
import {Outlet} from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import './navigation.styles';
import {UserContext} from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../contexts/cart.context";
import {
    LogoContainer,
    NavigationContainer,
    NavLink,
    NavLinksContainer
} from "./navigation.styles";

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext);
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer className='logo-container' to='/'>
                    <CrwnLogo className='logo'/>
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ?
                            (<NavLink as='span' to='' onClick={signOutUser}>SIGN OUT</NavLink>) :
                            (<NavLink to='/auth'>SIGN IN</NavLink>)
                    }
                    <CartIcon/>
                    {isCartOpen && <CartDropdown/>}
                </NavLinksContainer>
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
};

export default Navigation;
