ArtMenuDescription = {};

ArtMenuDescription.displayName = 'ArtMenu';

ArtMenuDescription.render = function () {
  var menuItems;

  menuItems = [
    <NavElement title="Photography" route="/photo" />,
    <NavElement title="Sculptures, Drawings, etc." route="/sculpture_plus" />,
    <NavElement title="Writing" route="/writing" />
  ];

  return (
    <NavMenu items={ menuItems } />
  );
};

ArtMenu = React.createClass(ArtMenuDescription);
