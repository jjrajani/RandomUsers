import React, { Component } from "react";
import PropTypes from "prop-types";
import SortButton from "./SortButton";

export default class HeaderCell extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  _headerCell = React.createRef();
  _fixedCell = React.createRef();
  _resizeListener = null;
  _scrollListener = null;

  componentDidMount = () => {
    if (this.props.isFixed) {
      this.initListeners();
      this.setFixedHeaderWidth();
    }
  };

  componentWillUnmount = () => {
    if (this.props.isFixed) {
      window.removeEventListener("scroll", this._scrollListener, true);
      window.removeEventListener("resize", this._resizeListener, true);
    }
  };

  // TODO: add to base react component
  refSetter = (refCmpName, refCmp) => {
    this[refCmpName] = refCmp;
  };

  /*
  *  @param eventHolder {object} Ex: this._scrollListener
  *  @param event {string} Ex: 'scroll'
  *  @param cb {func} Ex: this.handleScroll
  */
  // TODO: move to base class? hoc? - make private?
  initListener = (eventHolder, event, cb) => {
    eventHolder = window.addEventListener(event, cb, true);
  };
  // TODO: move to base class? hoc? - make public?
  initListeners = () => {
    this.initListener(this._scrollListener, "scroll", this.handleScroll);
    this.initListener(this._scrollListener, "resize", this.handleResize);
  };

  setFixedHeaderWidth = e => {
    if (this._headerCell) {
      const headerRect = this._headerCell.getBoundingClientRect();
      const headerCellWidth = headerRect.right - headerRect.left;
      this._fixedCell.style.width = headerCellWidth + "px";
    }
  };

  handleScroll = e => {
    if (this._headerCell) {
      const { gridId } = this.props;
      const grid = document.getElementById(gridId);
      // set fixed cell top equal to grid scroll top to keep header cells appear stuck at visible part of grid
      this._fixedCell.style.top = grid.scrollTop + "px";
    }
  };

  handleResize = () => {
    // this.setFixedHeaderWidth();
  };

  fixedHeader = () => {
    const { hasSort, isFixed, label, onSortClick } = this.props;
    const sortable = this.props.sortable || false;
    const onClick = sortable ? onSortClick : () => {};
    const me = this;

    const className = ("header-cell " + (isFixed ? "fixed" : "")).trim();
    return (
      <th className={className} ref={this.refSetter.bind(this, "_headerCell")}>
        {label}
        <SortButton disabled={true} />
        <div className="fixed" ref={this.refSetter.bind(me, "_fixedCell")}>
          {label}
          <SortButton
            onClick={onClick}
            hasSort={hasSort}
            disabled={!sortable}
          />
        </div>
      </th>
    );
  };

  render() {
    const { hasSort, isFixed, label, onSortClick } = this.props;
    const sortable = this.props.sortable || false;
    const onClick = sortable ? onSortClick : () => {};

    return isFixed ? (
      this.fixedHeader()
    ) : (
      <th className="header-cell">
        {label}
        <SortButton onClick={onClick} hasSort={hasSort} disabled={!sortable} />
      </th>
    );
  }
}

HeaderCell.propTypes = {
  // PropTypes
  sortable: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onSortClick: PropTypes.func,
  hasSort: PropTypes.bool,
  isFixed: PropTypes.bool,
  gridId: PropTypes.string
};
