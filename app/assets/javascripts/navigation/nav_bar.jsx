NavBarDescription = {};

NavBarDescription.displayName = 'NavBar';

NavBarDescription.getInitialState = function () {
  return {
    visibleMenuId: null
  }
};

NavBarDescription.render = function () {
  return (
    <div id="nav-bar">
      <NavMenuButton title="HW" route="/#" className="home-nav" />
      <NavMenuButton title="Resume" route="/resume" className="resume-nav" />
      <NavMenuButton title="Blog" className="blog" menu={ <BlogMenu /> } menuId={ 0 } visibleMenuId={ this.state.visibleMenuId } setVisibleMenuItem={ this.setVisibleMenuItem } />
      <NavMenuButton title="Projects" className="projects" menu={ <ProjectMenu /> } menuId={ 1 } visibleMenuId={ this.state.visibleMenuId } setVisibleMenuItem={ this.setVisibleMenuItem } />
      <NavMenuButton title="Art" className="art" menu={ <ArtMenu /> } menuId={ 2 } visibleMenuId={ this.state.visibleMenuId } setVisibleMenuItem={ this.setVisibleMenuItem } />
    </div>
  );
};

NavBarDescription.setVisibleMenuItem = function (id) {
  this.setState({ visibleMenuId: id });
};

NavBar = React.createClass(NavBarDescription);
