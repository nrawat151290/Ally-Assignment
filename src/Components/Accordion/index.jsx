import React, { PureComponent } from 'react';

class Accordion extends PureComponent {
  state = {
    
  }
  render() {
    const { styleModifier = "", dataAttrs = {} } = this.props;
    const classes = `accordion${styleModifier || ""}`
    return (
      <div className={classes} {...dataAttrs}>

      </div>
    )
  }
}

export default Accordion;