FooterDescription = {};

FooterDescription.render = function () {
  return (
    <span id="footer">
      <span className="footer-text">
        check me out on <a className="footer_link" rel="noopener" target="_blank" href="https://www.github.com/hannahstwinter">GitHub</a> or
          <a className="footer_link" rel="noopener" target="_blank" href="https://www.linkedin.com/in/hannahstwinter"> LinkedIn</a>
      </span>
    </span>
  );
};

Footer = React.createClass(FooterDescription);
