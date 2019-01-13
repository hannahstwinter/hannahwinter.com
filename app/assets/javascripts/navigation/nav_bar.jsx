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
      <NavMenuButton title="Home" route="/#" className="home-nav-button" />
      <NavMenuButton title="Resume" route="/resume" className="resume-nav-button" />
      <NavMenuButton title="Blog" className="blog-button" menu={ <BlogMenu /> } menuId={ 0 } visibleMenuId={ this.state.visibleMenuId } setVisibleMenuItem={ this.setVisibleMenuItem } />
      <NavMenuButton title="Art" className="art-button" menu={ <ArtMenu /> } menuId={ 1 } visibleMenuId={ this.state.visibleMenuId } setVisibleMenuItem={ this.setVisibleMenuItem } />
    </div>
  );
};

NavBarDescription.setVisibleMenuItem = function (id) {
  this.setState({ visibleMenuId: id });
};

NavBar = React.createClass(NavBarDescription);
