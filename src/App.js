/** @jsx jsx */
import { useRef } from 'react';
import { jsx, css } from "@emotion/core";
import Video from "./video/honeykki.mp4";
import img from "./potato.png";
import { useSpring, animated, useChain } from "react-spring";

const App = () => {

  // 첫번째 페이지
  // title
  const firstTitleTopRef = useRef();
  const firstTitleTop = useSpring({
    from: { transform: 'translate(0, -10px)'},
    to: { transform: 'translate(0, 0px)'},
    config: { duration: 300 },
    ref: firstTitleTopRef,
  })
  const firstTitleBottomRef = useRef();
  const firstTitleBottom = useSpring({
    from: { transform: 'translate(0, -10px)'},
    to: { transform: 'translate(0, 0px)'},
    config: { duration: 300 },
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
    config: { duration: 400 },
  })

  // 두번째 페이지
  // rollingup 초록배경, 모서리
  const rollingRef = useRef();
  const {h, bw, bs} = useSpring({
    from: { h: 430, bw: 0, bs: "none"},
    to: async next => { 
      await next ({h: 400})
      await next ({bw: 50, bs: "solid"})
    },
    config: { duration: 300 },
    ref: rollingRef,
  })
  
  // 제목
  const secondTitleTopRef = useRef();
  const secondTitleTop = useSpring({
    from: { transform: 'translate(0, -10px)', visibility : "hidden"},
    to: { transform: 'translate(0, 0px)', visibility : "visible"},
    config: { duration: 200 },
    ref: secondTitleTopRef,
  })
  const secondTitleBottomRef = useRef();
  const secondTitleBottom = useSpring({
    from: { transform: 'translate(0, -10px)', visibility : "hidden"},
    to: { transform: 'translate(0, 0px)', visibility : "visible"},
    config: { duration: 200 },
    ref: secondTitleBottomRef,
  })
  // =, 메뉴 첫번째
  const secondEqualRef = useRef();
  const { div, v, r, tf, } = useSpring({
    from: { div: 0, v: "hidden", r: -30, tf: -10, },
    to: async next => {
      await next ({ div: 30 })
      await next ({ v: "visible", r: 0, tf: 0 })
    },
    config: { duration: 300 },
    ref: secondEqualRef,
  })
  // 메뉴 두번째 ~
  const secondTextRef = useRef();
  const { t2, v2, t3, v3, t4, v4 } = useSpring({
    from: { t2: -10, v2: "hidden", t3: -10, v3: "hidden", t4: -10, v4: "hidden" },
    to: async next => {
      await next ({ t2: 0, v2: "visible"})
      await next ({ t3: 0, v3: "visible"})
      await next ({ t4: 0, v4: "visible"})
    },
    config: { duration: 100 },
    ref: secondTextRef,
  })

  // 첫번째 페이지에서 두번째 페이지로 넘어가기
  const changeToSecondPageRef = useRef();
  const { sfo, sso } = useSpring({
    from: { sfo: "visible", sso: "hidden"},
    to: {sfo: "hidden", sso: "visible"},
    delay: 3500,
    ref: changeToSecondPageRef,
  })

  // 두번째 페이지에서 첫번째 페이지로 넘어가기..
  const changeToFirstPageRef = useRef();
  const { ffo, fso } = useSpring({
    from: { ffo: "hidden", fso: "visible"},
    to: { ffo: "visible", fso: "hidden"},
    delay: 3500,
    ref: changeToFirstPageRef,
  })

  useChain([
    firstTitleTopRef, 
    firstTitleBottomRef, 
    changeToSecondPageRef,
    rollingRef, 
    secondTitleTopRef, 
    secondTitleBottomRef, 
    secondEqualRef, 
    secondTextRef,
    changeToFirstPageRef,
  ])

  return (
    <div css={wrap}>
      {/* 첫번째 */}
      <div css={pageContainer}>
        <animated.div 
          css={card} 
          style={{
            visibility: sfo.interpolate( sfo => `${sfo}`),
          }}
        >
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
        </animated.div>
      </div>
      {/* 두번째 */}
      <div css={pageContainer}>
        <animated.div 
            css={cardLight}
            style={{visibility: sso.interpolate( sso => `${sso}`)}}
          >
            <animated.div css={cardLightWrap} style={{height: h.interpolate( h => `${h}px`)}}>
            <animated.span 
              css={corner} 
              style={{
                borderWidth: bw.interpolate( bw => `${bw}px ${bw}px 0 0` ), 
                borderStyle: bs.interpolate( bs => `${bs}`),
              }}
            >
            </animated.span>
            <div css={left}>
              <div style={{paddingTop: "50px", paddingLeft: "20px"}}>
                <div style={{fontSize: "24px"}}>
                  <animated.div style={secondTitleTop}>오늘의</animated.div>
                  <animated.div style={secondTitleBottom}>메뉴</animated.div>
                </div>
                <animated.div 
                  css={arrowDiv} 
                  style={{ 
                    height: div.interpolate ( div => `${div}px`),
                    width: div.interpolate ( div => `${div}px`),
                  }}
                >
                  <animated.i 
                    className="fas fa-equals" 
                    style={{
                      color: "white", 
                      fontSize: "8px",
                      visibility: v.interpolate(v => `${v}`),
                      transform: r.interpolate(r => `rotate(${r}deg)`)
                    }} 
                  />
                </animated.div>
                <div style={{fontSize: "12px"}}>
                  <animated.div 
                    style={{
                      transform: tf.interpolate(tf => `translate(0, ${tf}px)`),
                      visibility: v.interpolate(v => `${v}`),
                    }}
                  >햄버거</animated.div>
                  <animated.div 
                    style={{
                      transform: t2.interpolate(t2 => `translate(0, ${t2}px)`),
                      visibility: v2.interpolate(v2 => `${v2}`),
                    }}
                  >피자</animated.div>
                  <animated.div 
                    style={{
                      transform: t3.interpolate(t3 => `translate(0, ${t3}px)`),
                      visibility: v3.interpolate(v3 => `${v3}`),
                    }}
                  >샐러드</animated.div>
                  <animated.div 
                    style={{
                      transform: t4.interpolate(t4 => `translate(0, ${t4}px)`),
                      visibility: v4.interpolate(v4 => `${v4}`),
                    }}
                  >밀크티</animated.div>
                </div>

                </div>
            </div>
            <img src={img} alt="" css={imgCss} />
            </animated.div>
          </animated.div>
        </div>
    </div>
  );
}


const pageContainer = css`
  position: absolute;
  top: 20%;
  left: 40%;
`;

const card = css`
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

const wrap = css`
  width: 100%;
  text-align: center;
  // display: flex;
  margin: 100px auto;
  
`;

const cardLight = css`
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

const corner = css`
  position: absolute;
  bottom:0;
  right: 0;
  border-color: yellowgreen lightgreen lightgreen lightgreen;
`;

const left = css`
  text-align: left;
  color: white;
`;

const arrowDiv = css`
  height: 30px;
  width: 30px;
  background-color: gray;
  text-align: center;
  border-radius: 20px;
  margin: 15px 0;
`;

const arrow = css`
  padding-top: 20px;
  color: white;
`;

const imgCss = css`
  height: 200px;
  position: absolute;
  bottom: 20px;
  left: 30px;
`;


export default App;