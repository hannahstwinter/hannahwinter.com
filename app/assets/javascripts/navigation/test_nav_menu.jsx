TestNavMenuDescription = {};

TestNavMenuDescription.displayName = 'TestNavMenu';

TestNavMenuDescription.render = function () {
  var git, ruby, javascript;

  git = < NavElement title="Git" route="/git" />;
  ruby = < NavElement title="Ruby" route="/ruby" />;
  javascript = < NavElement title="Javascript" route="/javascript" />;

  return (
    <ul className="nav-menu">
      <li className="nav-menu-item">{ git }</li>
      <li className="nav-menu-item">{ ruby }</li>
      <li className="nav-menu-item">{ javascript }</li>
    </ul>
  );
};

TestNavMenuDescription.navigateRoute_ = function (route) {
  location.href = route;
};

TestNavMenu = React.createClass(TestNavMenuDescription);
