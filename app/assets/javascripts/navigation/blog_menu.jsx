BlogMenuDescription = {};

BlogMenuDescription.displayName = 'BlogMenu';

BlogMenuDescription.render = function () {
  var menuItems;

  menuItems = [
    <NavElement title="Coding Tips" route="/codingTips" />,
    <NavElement title="Foo" route="/foo" />,
    <NavElement title="Bar" route="/bar" />
  ];

  return (
    <NavMenu items={ menuItems } />
  );
  //   <ul className="nav-menu">
  //     <li className="nav-menu-item">{ codingTipsNav }</li>
  //     <li className="nav-menu-item">{ fooNav }</li>
  //     <li className="nav-menu-item">{ barNav }</li>
  //   </ul>
  // );
};

BlogMenuDescription.navigateRoute_ = function (route) {
  location.href = route;
};

BlogMenu = React.createClass(BlogMenuDescription);
