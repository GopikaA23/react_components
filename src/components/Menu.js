import React, { useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import _ from "lodash";
import "./Menu.css";

const Menu = ({ options }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="menu">
      <div className="menu-title" onClick={handleMenuClick}>
        Menu
      </div>
      {showMenu && <MenuItem position="bottom" list={options} />}
    </div>
  );
};

const MenuItem = ({ position, list }) => {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <div className={`${position}`}>
      {_.map(list, (item, ind) => {
        const shouldOpen = item.title === isOpen;
        return (
          <>
            <SubMenuItem
              key={ind}
              item={item}
              isOpen={shouldOpen}
              onClick={() => setIsOpen(item.title)}
            />
            {item.items?.length > 0 && (
              <VscTriangleRight
                className="sym"
                onClick={() => setIsOpen(item.title)}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

const SubMenuItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="items" onClick={onClick}>
      {item.title}
      <div>
        {item.items?.length > 0 && isOpen && (
          <MenuItem position="right" list={item.items} />
        )}
      </div>
    </div>
  );
};

export default Menu;
