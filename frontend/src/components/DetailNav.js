import React from 'react';
import './DetailNav.css';

const DetailNav = ({ active }) => {
  const items = [
    ["info", "Info"],
    ["schema", "Schema"],
  ]

  return (
    <nav className="DetailNav">
      {items.map(([slug, label]) => 
        <a href="#" className={"DetailNav__Button "+(active === slug ? 'DetailNav__Button--Active' : '')}>{label}</a>
      )}
    </nav>
  );
}

export default DetailNav;
