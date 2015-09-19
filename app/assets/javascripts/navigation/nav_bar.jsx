NavBarDefinition = {};

NavBarDefinition.displayName = 'NavBar';

NavBarDefinition.render = function () {
  return (
    <div id="nav-bar">
      < NavMenuButton title="Home" route="/#" className="home-nav-button" />
      < NavMenuButton title="Blog" className="blog-button" menu={ <TestNavMenu/> } />
      < NavMenuButton title="Photography" className="photo-button" menu={ <TestNavMenu/> } />
      < NavMenuButton title="Writing" className="writing-button" menu={ <TestNavMenu/> } />
      < NavMenuButton title="Fitness" className="fitness-button" menu={ <TestNavMenu/> } />
    </div>
  );
};

NavBar = React.createClass(NavBarDefinition);
