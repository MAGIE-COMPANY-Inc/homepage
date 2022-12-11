import { useState } from "react";
import { whiskys, whiskys2, cocktails, cocktails2 } from "../../constants/data";
import { MenuItem } from "../../components/Menuitem/MenuItem";
import images from "../../constants/images";
import "./Menu.css";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const [show, setShow] = useState(false);

  const showViewMore = () => {
    setShow(!show);
  };
  const { t } = useTranslation();

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">Drink Menu</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Whisky</p>
          <div className="app__specialMenu_menu_items">
            {whiskys.map((whisky, index) => (
              <MenuItem
                key={whisky.title + index}
                title={whisky.title}
                price={whisky.price}
                tags={t(`menu.${whisky.title}`)}
              />
            ))}
          </div>
          <div
            className={`app__specialMenu_menu_items ${
              show ? "txt-show" : "txt-hide"
            }`}
          >
            {whiskys2.map((whisky, index) => (
              <MenuItem
                key={whisky.title + index}
                title={whisky.title}
                price={whisky.price}
                tags={t(`menu.${whisky.title}`)}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="メニュー画像" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
          <div
            className={`app__specialMenu_menu_items ${
              show ? "txt-show" : "txt-hide"
            }`}
          >
            {cocktails2.map((whisky, index) => (
              <MenuItem
                key={whisky.title + index}
                title={whisky.title}
                price={whisky.price}
                tags={whisky.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button" onClick={showViewMore}>
          {show ? "View less" : "View more"}
        </button>
      </div>
    </div>
  );
};

export default Menu;
