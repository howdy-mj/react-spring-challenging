/** @jsx jsx */
import { useState, useRef, useEffect } from 'react';
import { jsx, css } from "@emotion/core";
import Video from "./video/honeykki.mp4";
import img from "./potato.png";
import { useSpring, useTrail, animated, useChain } from "react-spring";

const App = () => {
  const [firstPage, setfirstPage] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => setfirstPage(!firstPage), 2000);
  //   return () => clearInterval(interval);
  // }, [firstPage]);

  // 첫번째 페이지
  // title
  const firstTitleTopRef = useRef();
  const firstTitleTop = useSpring({
    from: { transform: 'translate(0, -10px'},
    to: { transform: 'translate(0, 0px'},
    ref: firstTitleTopRef,
  })
  const firstTitleBottomRef = useRef();
  const firstTitleBottom = useSpring({
    from: { transform: 'translate(0, -10px', visibility : "hidden"},
    to: { transform: 'translate(0, 0px', visibility : "visible"},
    ref: firstTitleBottomRef,
  })
  // arrow
  const arrowProps = useSpring({
    from: { transform: "translate(0, 10px)" }, 
    to: async next => { 
      while(1) {
        await next({transform: "translate(0, 0px)"});
        await next({transform: "translate(0, 10px)"})
      }
    },
  })

  // 두번째 페이지
  // rollingup 초록배경, 모서리
  const {h, bw, bs} = useSpring({
    from: { h: 430, bw: 0, bs: "none"},
    to: async next => { 
      await next ({h: 400})
      await next ({bw: 50, bs: "solid"})
    },
  })
  
  // 제목
  const secondTitleTopRef = useRef();
  const secondTitleTop = useSpring({
    from: { transform: 'translate(0, -10px)', visibility : "hidden"},
    to: { transform: 'translate(0, 0px)', visibility : "visible"},
    ref: secondTitleTopRef,
  })
  const secondTitleBottomRef = useRef();
  const secondTitleBottom = useSpring({
    from: { transform: 'translate(0, -10px)', visibility : "hidden"},
    to: { transform: 'translate(0, 0px)', visibility : "visible"},
    ref: secondTitleBottomRef,
  })
  // =
  const secondEqualRef = useRef();
  const secondEqual = useSpring({
    from: { transform: 'translate(0, -10px)', visibility : "hidden"},
    to: { transform: 'translate(0, 0px)', visibility : "visible"},
    ref: secondEqualRef,
  })
  // 메뉴
  const secondTextFirstRef = useRef();
  const secondTextFirst = useSpring({
    from: { transform: 'translate(0, -10px)', visibility : "hidden"},
    to: { transform: 'translate(0, 0px)', visibility : "visible"},
    ref: secondTextFirstRef,
  })
  const secondTextSecondRef = useRef();
  const secondTextSecond = useSpring({
    from: { transform: 'translate(0, -10px)', visibility : "hidden"},
    to: { transform: 'translate(0, 0px)', visibility : "visible"},
    ref: secondTextSecondRef,
  })
  const secondTextThirdRef = useRef();
  const secondTextThird = useSpring({
    from: { transform: 'translate(0, -10px)', visibility : "hidden"},
    to: { transform: 'translate(0, 0px)', visibility : "visible"},
    ref: secondTextThirdRef,
  })
  const secondTextForthRef = useRef();
  const secondTextForth = useSpring({
    from: { transform: 'translate(0, -10px)', visibility : "hidden"},
    to: { transform: 'translate(0, 0px)', visibility : "visible"},
    ref: secondTextForthRef,
  })

  useChain([firstTitleTopRef, firstTitleBottomRef, secondTitleTopRef, secondTitleBottomRef, secondEqualRef, secondTextFirstRef, secondTextSecondRef, secondTextThirdRef, secondTextForthRef ])


  return (
    <div css={wrap}>
        <div css={card}>
          <div css={title}>
            <animated.div style={firstTitleTop}>Honeykki</animated.div>
            <animated.div style={firstTitleBottom}>먹방 일기</animated.div>
          </div>
          <div css={videoCon}>
            <video css={video} autostart="true" autoPlay src={Video} type="video/mp4" />
            <span css={videoCorner}></span>
          </div>
          <div css={arrow}>
            <animated.i className="fas fa-arrow-up" style={arrowProps}></animated.i>
          </div>
        </div>

        <div css={cardLight}>
          <animated.div css={cardLightWrap} style={{height: h.interpolate( h => `${h}px`)}}>
          <animated.span 
            css={corner} 
            style={{
              borderWidth: bw.interpolate( bw => `${bw}px ${bw}px 0 0` ), 
              borderStyle: bs.interpolate( bs => `${bs}`)
            }}
          >
          </animated.span>
          <div css={left}>
            <div style={{paddingTop: "50px", paddingLeft: "20px"}}>
              <div style={{fontSize: "24px"}}>
                <animated.div style={secondTitleTop}>오늘의</animated.div>
                <animated.div style={secondTitleBottom}>메뉴</animated.div>
              </div>
              <animated.div style={secondEqual}>
                <i className="fas fa-equals" style={{color: "white", fontSize: "8px"}} />
              </animated.div>
              <div style={{fontSize: "12px"}}>
                <animated.div style={secondTextFirst}>햄버거</animated.div>
                <animated.div style={secondTextSecond}>피자</animated.div>
                <animated.div style={secondTextThird}>샐러드</animated.div>
                <animated.div style={secondTextForth}>밀크티</animated.div>
              </div>
            </div>
          </div>
          <img src={img} alt="" css={imgCss} />
          </animated.div>
        </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  text-align: center;
  // display: flex;
`;
const card = css`
  margin: 100px auto;
  width: 300px;
  height: 500px;
  background-color: green;
  position: relative;
  fill: green;
`;

const title = css`
  position: absolute;
  top: 70px;
  left: 105px;
  color: darkgray;
  font-size: 20px;
  font-weight: 700;
  z-index: 99;
  p {
    margin: 0;
  }
`;

const videoCon = css`
  padding-top: 100px;
  position: relative;
  width: 250px;
  margin: 0 auto;
`;

const video = css`
  width: 180px;
`;

const videoCorner = css`
  position: absolute;
  border-style:solid;
  bottom: 3px;
  right: 35px;
  border-width: 50px 50px 0 0;
  border-color: yellowgreen green green green;
`;

const arrow = css`
  padding-top: 20px;
  color: white;
`;

const corner = css`
  position: absolute;
  
  bottom:0;
  right: 0;
  /* border-width: 50px 50px 0 0; */
  border-color: yellowgreen lightgreen lightgreen lightgreen;
`;

const cardLight = css`
margin: 100px auto;
  width: 300px;
  height: 500px;
  position: relative;
  fill: green;
  background-color: lightgreen;
`;

const cardLightWrap = css`
  height: 400px;
  width: 90%;
  margin: 0 auto;
  background-color: green;
  position: relative;
`;

const left = css`
  text-align: left;
  color: white;
`;

const imgCss = css`
  height: 200px;
  position: absolute;
  bottom: 20px;
  left: 30px;
`;


export default App;