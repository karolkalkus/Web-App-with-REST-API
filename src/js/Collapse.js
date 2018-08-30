import React from "react";
import PropTypes from "prop-types";

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
      height: this.refs.inner.clientHeight
    });
  }

  render() {
    const { title, children } = this.props;
    const { isExpanded, height } = this.state;
    const currentHeight = isExpanded ? height : 0;
    return (
      <div>
        <div className={`panel ${isExpanded ? "is-expanded" : ""}`}>
          <div className="panel-heading">
            <h2 className="title" onClick={e => this.handleToggle(e)}>
              <i className="fas fa-angle-double-right" />
              {title}
              <i className="fas fa-angle-double-left" />
            </h2>
          </div>
          <div
            className="panel-collapse"
            style={{ height: currentHeight + "px" }}
          >
            <div className="panel-body" ref="inner">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Collapse.propTypes = {
  title: PropTypes.string
};
export default Collapse;
