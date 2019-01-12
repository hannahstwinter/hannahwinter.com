PhotoMenuDescription = {};

PhotoMenuDescription.displayName = 'PhotoMenu';

PhotoMenuDescription.render = function () {
  var menuItems;

  menuItems = [
    <NavElement title="Abstract" route="/abstract" />,
    <NavElement title="Artsy Shirt" route="/artsyShirt" />,
    <NavElement title="Other Shirt" route="/otherShirt" />
  ];

  return (
    <NavMenu items={ menuItems } />
  );

  // return (
  //   <ul className="nav-menu">
  //     <li className="nav-menu-item">{ abstractNav }</li>
  //     <li className="nav-menu-item">{ artsyShirtNav }</li>
  //     <li className="nav-menu-item">{ otherShirtNav }</li>
  //   </ul>
  // );
};

PhotoMenuDescription.navigateRoute_ = function (route) {
  location.href = route;
};

PhotoMenu = React.createClass(PhotoMenuDescription);
