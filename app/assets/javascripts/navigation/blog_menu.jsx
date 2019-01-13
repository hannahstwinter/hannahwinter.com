BlogMenuDescription = {};

BlogMenuDescription.displayName = 'BlogMenu';

BlogMenuDescription.render = function () {
  var menuItems;

  menuItems = [
    <NavElement title="Coding Tips" route="/coding_tips" />
  ];

  return (
    <NavMenu items={ menuItems } />
  );
};

BlogMenu = React.createClass(BlogMenuDescription);
