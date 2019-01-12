NavBarDefinition = {};

NavBarDefinition.displayName = 'NavBar';

NavBarDefinition.render = function () {
  return (
    <div id="nav-bar">
      <NavMenuButton title="Home" route="/#" className="home-nav-button" />
      <NavMenuButton title="Resume" route="/resume" className="resume-nav-button" />
      <NavMenuButton title="Blog" route="/blog" className="blog-button" menu={ <BlogMenu /> } />
      <NavMenuButton title="Art" route="/art" className="art-button" menu={ <ArtMenu /> } />
    </div>
  );
};

NavBar = React.createClass(NavBarDefinition);
