import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <StorefrontIcon className="header_logoImage" fontSize="large" />
        <h2 className="header_logoItem">eShop</h2>
      </div>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchOutlinedIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign in</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <div className="nav_item">
          <ShoppingBasketIcon className="nav_itemBasket" />
          <span className="nav_itemLineTwo nav_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
