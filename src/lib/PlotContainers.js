import React, {Component} from "react";
import {memoize_one} from "memoize";
import PropTypes from "prop-types";
import "./PlotContainers.css";

class PlotContainer extends Component{
  render(){
    let { children,
          leftWidth,plotWidth,rightWidth,
          topHeight,plotHeight,bottomHeight} = this.props;
    let width = leftWidth + plotWidth + rightWidth;
    let height = topHeight + plotHeight + bottomHeight;
    let style = this.generateGridLayoutStyle( width,height,
                                              leftWidth,plotWidth,rightWidth,
                                              topHeight,plotHeight,bottomHeight);
    return (
      <div style={style} className="PlotContainers-positionRelative">
        {children}
      </div>
    )
  }
  
  generateGridLayoutStyle = memoize_one((width,height,
                          leftWidth,plotWidth,rightWidth,
                          topHeight,plotHeight,bottomHeight)=>{
    let style = { display:"grid",
                  height:height,
                  width:width,
                  gridGap:0,
                  gridTemplateColumns:`${leftWidth}px ${plotWidth}px ${rightWidth}px`,
                  gridTemplateRows:`${topHeight}px ${plotHeight}px ${bottomHeight}px`
                  };
    return style;
  })
}

PlotContainer.propTypes = {
  children: PropTypes.node.isRequired,
  leftWidth: PropTypes.number.isRequired,
  plotWidth: PropTypes.number.isRequired,
  rightWidth: PropTypes.number.isRequired,
  topHeight: PropTypes.number.isRequired,
  plotHeight: PropTypes.number.isRequired,
  bottomHeight: PropTypes.number.isRequired,
}

const PlotSubContainer = (props)=>{
  return (
    <div className="PlotContainers-positionRelative">
      { props.children ? 
        React.Children.map(props.children,(child)=>
          <div className="PlotContainers-positionAbsolute">
            {child}
          </div>) :
        null
        }
    </div>
  );
}

PlotSubContainer.propTypes = {
  children: PropTypes.node,
}

export {PlotContainer,PlotSubContainer};