ProjectMenuDescription = {};

ProjectMenuDescription.displayName = 'ProjectMenu';

ProjectMenuDescription.render = function () {
  var menuItems;

  menuItems = [
    <NavElement title="Resourceful" route="/resourceful" />
  ];

  return (
    <NavMenu items={ menuItems } />
  );
};

ProjectMenu = React.createClass(ProjectMenuDescription);
