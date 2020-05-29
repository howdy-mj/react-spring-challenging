/** @jsx jsx */
import { useState, useRef,  } from 'react';
import { jsx, css } from "@emotion/core";
import Video from "./video/honeykki.mp4";
import img from "./potato.png";
import { useSpring, useTrail, animated, useChain } from "react-spring";


const App = () => {

  const firstRef = useRef();

  const titles = ["HoneyKki", "먹방 일기"];
  const config = { mass: 5, tension: 2000, friction: 200 };
  const titleTrail = useTrail(titles.length, {
    config,
    x: 0,
    from: { x: -10 },
    ref: firstRef,
  })

  const arrowProps = useSpring({
    from: { transform: "translate(0, 10px)" }, 
    to: async next => { 
      while(1) {
        await next({transform: "translate(0, 0px)"});
        await next({transform: "translate(0, 10px)"})
      }
    },
  })

  const secondRef = useRef();

  const {h, bw, bs} = useSpring({
    from: { h: 430, bw: 0, bs: "none"},
    to: async next => { 
      await next ({h: 400})
      await next ({bw: 50, bs: "solid"})
    },
    ref: secondRef,
  })

  const secondText = [
    "오늘의", "메뉴", 
    <div style={{
      backgroundColor: "purple", 
      height: "30px", 
      width: "30px", 
      borderRadius: "20px",
      textAlign: "center"
      }}>
      <i class="fas fa-equals" style={{color: "white", fontSize: "8px"}} />
    </div>, 
    "첫번째 줄", "두번째 줄", "세번째 줄", "네번째 줄"
  ];
  const secondTextTrail = useTrail(secondText.length, {
    config,
    x: 20,
    from: { x: 30 },
  })


  useChain([firstRef, secondRef]);

  return (
    <div css={wrap}>
      <div css={card}>
        <div css={title}>
        {titleTrail.map( ({x, ...rest }, index) => (
          <animated.div
            key={titles[index]}
            style={{...rest, transform: x.interpolate(x => `translate(0, ${x}px)`)}}
          >
            <animated.div>{titles[index]}</animated.div>
          </animated.div>
        ) )}
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
        <div>
          <div css={left}>
            {secondTextTrail.map( ({x, ...rest }, index) => (
              <animated.div
                key={secondText[index]}
                style={{...rest, transform: x.interpolate(x => `translate(0, ${x}px)`)}}
              >
                <animated.div css={subtitle}>{secondText[index]}</animated.div>
              </animated.div>
            ))}
            </div>
        </div>
        <img src={img} alt="" css={imgCss} />
        </animated.div>
      </div>
    </div>
  );
}

const cardLightWrap = css`
  height: 400px;
  width: 90%;
  margin: 0 auto;
  background-color: green;
  position: relative;
`;

const subtitle = css`
  color: white;
`;

const subscri = css`
  color: white;
  font-size: 12px;
`;

const left = css`text-align: left`;

const imgCss = css`
  height: 200px;
  position: absolute;
  bottom: 20px;
  left: 30px;
`;

const wrap = css`
  width: 100%;
  text-align: center;
  display: flex;
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


export default App;