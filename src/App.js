/** @jsx jsx */
import { useState, useRef, useEffect } from 'react';
import { jsx, css } from "@emotion/core";
import Video from "./video/honeykki.mp4";
import img from "./potato.png";
import { useSpring, useTrail, animated, useChain } from "react-spring";

const App = () => {
  const [firstPage, setFirstPage] = useState(true);
  // const interval = useRef(0)
  // useEffect(() => {
  //   interval.current = setInterval( () => { 
  //     setFirstPage(firstPage => !firstPage) 
  //   }, 4000);
  //   console.log('current firstPage: ', firstPage)
  //   return () => {clearInterval(interval.current)};
  // }, [interval.current]);
  // console.log(interval.current)

  // let a = 'a';
  // useEffect(() => {
  //   const id = setInterval( () => console.log(a), 1000);
  //   return () => { clearInterval(id) };
  // }, [])

  // 첫번째 페이지
  // title
  const firstTitleTopRef = useRef();
  const firstTitleTop = useSpring({
    from: { transform: 'translate(0, -10px'},
    to: { transform: 'translate(0, 0px'},
    config: { duration: 300 },
    ref: firstTitleTopRef,
  })
  const firstTitleBottomRef = useRef();
  const firstTitleBottom = useSpring({
    from: { transform: 'translate(0, -10px', visibility : "hidden"},
    to: { transform: 'translate(0, 0px', visibility : "visible"},
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
  // 메뉴
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

  useChain([
    firstTitleTopRef, 
    firstTitleBottomRef, 
    rollingRef, 
    secondTitleTopRef, 
    secondTitleBottomRef, 
    secondEqualRef, 
    secondTextRef 
  ])

  return (
    <div css={wrap}>
 
        <div>
        {/* 첫번째 */}
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
        </div>

        <div>
        {/* 두번째 */}
        <div css={cardLight}>
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
        </div>
        </div>
    </div>
  );
}

const arrowDiv = css`
  height: 30px;
  width: 30px;
  background-color: gray;
  text-align: center;
  border-radius: 20px;
  margin: 15px 0;
`;

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