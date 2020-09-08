import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";

interface iOwnProps {
  currentUser: any;
}

class Header extends React.Component<iOwnProps> {
  constructor(props: iOwnProps) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;

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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
