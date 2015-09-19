FooterDefinition = {};

FooterDefinition.render = function () {
  return (
    <span id="footer">
      <span className="footer-text">
        check me out on <a target="_blank" href="https://www.github.com/hannahstwinter">GitHub</a> or
          <a target="_blank" href="https://www.linkedin.com/in/hannahstwinter"> LinkedIn</a>
      </span>
    </span>
  );
};

Footer = React.createClass(FooterDefinition);
