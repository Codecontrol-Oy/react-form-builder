import React, { Component } from 'react';
import ComponentHeader from './component-header';
import ComponentLabel from './component-label';

function WrappedComponentLabel({questionNumber, ...props}) {

}
class CustomElement extends Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
    this.questionNumber = props.questionNumber
  }

  render() {
    const { bare } = this.props.data;
    const props = {};
    props.name = this.props.data.field_name;
    props.defaultValue = this.props.defaultValue;

    if (this.props.mutable && this.props.data.forwardRef) {
      props.ref = this.inputField;
    }

    if (this.props.read_only) {
      props.disabled = 'disabled';
    }

    // Return if component is invalid.
    if (!this.props.data.component) return null;
    const Element = this.props.data.component;

    let baseClasses = 'SortableItem rfb-item';
    if (this.props.data.pageBreakBefore) { baseClasses += ' alwaysbreak'; }

    return (
      <div className={baseClasses}>
        <ComponentHeader {...this.props} />
        { bare ?
          <Element questionNumber={this.props.questionNumber} data={this.props.data} {...this.props.data.props} {...props} /> :
          <div className="form-group">
            <ComponentLabel className="form-label" labelWithNumber={`${this.props.questionNumber}. ${this.props.data.props.label}`} {...this.props} />
            <Element data={this.props.data} {...this.props.data.props} {...props} />
          </div>
        }
      </div>
    );
  }
}

CustomElement.propTypes = {};

export default CustomElement;
