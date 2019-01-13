NavBarDescription = {};

NavBarDescription.displayName = 'NavBar';

NavBarDescription.getInitialState = function () {
  return {
    visibleMenu: null
  }
};

NavBarDescription.render = function () {
  var sharedMenuProps;

  sharedMenuProps = {
    visibleMenu: this.state.visibleMenu,
    setVisibleMenuItem: this.setVisibleMenuItem
  };

  return (
    <div id="nav-bar">
      <NavMenuButton title="HW" className="home" route="/#" />
      <NavMenuButton title="Resume" className="resume" route="/resume" />
      <NavMenuButton title="Blog" className="blog" menu={ <BlogMenu /> } { ...sharedMenuProps } />
      <NavMenuButton title="Projects" className="projects" menu={ <ProjectMenu /> } { ...sharedMenuProps } />
      <NavMenuButton title="Art" className="art" menu={ <ArtMenu /> } { ...sharedMenuProps } />
    </div>
  );
};

NavBarDescription.setVisibleMenuItem = function (title) {
  this.setState({ visibleMenu: title });
};

NavBar = React.createClass(NavBarDescription);
