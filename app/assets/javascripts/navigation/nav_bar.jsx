NavBarDefinition = {};

NavBarDefinition.displayName = 'NavBar';

NavBarDefinition.render = function () {
  return (
    <div id="nav-bar">
      <NavMenuButton title="Home" route="/#" className="home-nav-button" />
      <NavMenuButton title="Resume" route="/resume" className="resume-nav-button" />
      <NavMenuButton title="Blog" route="/blog" className="blog-button" menu={ <BlogMenu /> } />
      <NavMenuButton title="Photography" route="/photo" className="photo-button" menu={ <PhotoMenu /> } />
      <NavMenuButton title="Writing" route="/writing" className="writing-button" menu={ <WritingMenu /> } />
    </div>
  );
};

NavBar = React.createClass(NavBarDefinition);
