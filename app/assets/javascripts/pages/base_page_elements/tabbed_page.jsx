TabbedPageDescription = {};

TabbedPageDescription.displayName = 'TabbedPage';

TabbedPageDescription.propTypes = {
  items: React.PropTypes.string.isRequired
};

TabbedPageDescription.getInitialState = function () {
  return {
    selectedItemIndex: 0 // first item
  }
};

TabbedPageDescription.render = function () {
  var sharedProps;

  // items = [ { title, content }, { title, content } ]

  sharedProps = {
    items: this.props.items,
    selectedItemIndex: this.state.selectedItemIndex
  };

  return (
    <div>
      <TabBar { ...sharedProps } />
      <TabbedPageContent { ...sharedProps } />
      TabbedPage
    </div>
  );
};

TabbedPage = React.createClass(TabbedPageDescription);
