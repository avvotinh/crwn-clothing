import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./header.scss";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

interface iOwnProps {
  currentUser: any;
  hidden: boolean;
}

class Header extends React.Component<iOwnProps> {
  constructor(props: iOwnProps) {
    super(props);
  }

  render() {
    const { currentUser, hidden } = this.props;

    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/shop">
            CONTACT
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden },
}: any) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
