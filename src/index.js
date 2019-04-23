import React, {Component, Fragment}from 'react';
import ReactDOM from 'react-dom';
import {PlotContainer,PlotSubContainer} from "./lib";

function Left(props) {
  let {height,width} = props;
  return (
    <div style={{width,height,backgroundImage:"linear-gradient(to right,red,white,white)",opacity:0.3}}>
    </div>
  );
}

function Right(props) {
  let {height,width} = props;
  return (
    <div style={{width,height,backgroundImage:"linear-gradient(to right,white,white,green)",opacity:0.3}}>
    </div>
  );
}

function Top(props) {
  let {height,width} = props;
  return (
    <div style={{width,height,backgroundImage:"linear-gradient(blue,white,white)",opacity:0.3}}>
    </div>
  );
}

function Bottom(props) {
  let {height,width} = props;
  return (
    <div style={{width,height,backgroundImage:"linear-gradient(white,white,yellow)",opacity:0.3}}>
    </div>
  );
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {leftWidth: 100,
                  plotWidth: 1000,
                  rightWidth: 100,
                  topHeight: 50,
                  plotHeight: 400,
                  bottomHeight: 50,
                  };
  }

  render(){
    let { leftWidth, plotWidth, rightWidth,
          topHeight, plotHeight, bottomHeight} = this.state;
    return (
      <Fragment>
        <div>
          leftWidth:
          <input  type="range" min={0} max={200} value={leftWidth}
                  onChange={(x)=>this.setState({leftWidth:Number.parseFloat(x.target.value)})}
                  />
        </div>
        <div>
          plotWidth:
          <input  type="range" min={500} max={1400} value={plotWidth}
                  onChange={(x)=>this.setState({plotWidth:Number.parseFloat(x.target.value)})}
                  />
        </div>
        <div>
          rightWidth:
          <input  type="range" min={0} max={200} value={rightWidth}
                  onChange={(x)=>this.setState({rightWidth:Number.parseFloat(x.target.value)})}
                  />
        </div>
        <div>
          topHeight:
          <input  type="range" min={0} max={200} value={topHeight}
                  onChange={(x)=>this.setState({topHeight:Number.parseFloat(x.target.value)})}
                  />
        </div>
        <div>
          plotHeight:
          <input  type="range" min={100} max={500} value={plotHeight}
                  onChange={(x)=>this.setState({plotHeight:Number.parseFloat(x.target.value)})}
                  />
        </div>
        <div>
          bottomHeight:
          <input  type="range" min={0} max={200} value={bottomHeight}
                  onChange={(x)=>this.setState({bottomHeight:Number.parseFloat(x.target.value)})}
                  />
        </div>
        {/*===========================*/}
        <PlotContainer  leftWidth={leftWidth}
                        plotWidth={plotWidth}
                        rightWidth={rightWidth}
                        topHeight={topHeight}
                        plotHeight={plotHeight}
                        bottomHeight={bottomHeight}
                        >
          <PlotSubContainer>
            <Left width={leftWidth} height={topHeight}/>
            <Right width={leftWidth} height={topHeight}/>
            <Top width={leftWidth} height={topHeight}/>
            <Bottom width={leftWidth} height={topHeight}/>
          </PlotSubContainer>
          <PlotSubContainer>
            <Left width={plotWidth} height={topHeight}/>
            <Right width={plotWidth} height={topHeight}/>
            <Top width={plotWidth} height={topHeight}/>
            <Bottom width={plotWidth} height={topHeight}/>
          </PlotSubContainer>
          <PlotSubContainer>
            <Left width={rightWidth} height={topHeight}/>
            <Right width={rightWidth} height={topHeight}/>
            <Top width={rightWidth} height={topHeight}/>
            <Bottom width={rightWidth} height={topHeight}/>
          </PlotSubContainer>
          {/*===========================*/}
          <PlotSubContainer>
            <Left width={leftWidth} height={plotHeight}/>
            <Right width={leftWidth} height={plotHeight}/>
            <Top width={leftWidth} height={plotHeight}/>
            <Bottom width={leftWidth} height={plotHeight}/>
          </PlotSubContainer>
          <PlotSubContainer>
            <Left width={plotWidth} height={plotHeight}/>
            <Right width={plotWidth} height={plotHeight}/>
            <Top width={plotWidth} height={plotHeight}/>
            <Bottom width={plotWidth} height={plotHeight}/>
          </PlotSubContainer>
          <PlotSubContainer>
            <Left width={rightWidth} height={plotHeight}/>
            <Right width={rightWidth} height={plotHeight}/>
            <Top width={rightWidth} height={plotHeight}/>
            <Bottom width={rightWidth} height={plotHeight}/>
          </PlotSubContainer>
          {/*===========================*/}
          <PlotSubContainer>
            <Left width={leftWidth} height={bottomHeight}/>
            <Right width={leftWidth} height={bottomHeight}/>
            <Top width={leftWidth} height={bottomHeight}/>
            <Bottom width={leftWidth} height={bottomHeight}/>
          </PlotSubContainer>
          <PlotSubContainer>
            <Left width={plotWidth} height={bottomHeight}/>
            <Right width={plotWidth} height={bottomHeight}/>
            <Top width={plotWidth} height={bottomHeight}/>
            <Bottom width={plotWidth} height={bottomHeight}/>
          </PlotSubContainer>
          <PlotSubContainer>
            <Left width={rightWidth} height={bottomHeight}/>
            <Right width={rightWidth} height={bottomHeight}/>
            <Top width={rightWidth} height={bottomHeight}/>
            <Bottom width={rightWidth} height={bottomHeight}/>
          </PlotSubContainer>
        </PlotContainer>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
