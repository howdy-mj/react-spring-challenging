/** @jsx jsx */
import { useState, useRef, useCallback, useEffect } from 'react';
import { jsx, css } from "@emotion/core";
import Video from "./video/honeykki.mp4";
import { useSpring, useTransition, animated } from "react-spring";
const App = () => {
  const ref = useRef([]);
  const [items, setItems] = useState([]);
  const context = useTransition(items, null, {
    from: { transform: "translate(0, -10px)"},
    enter: { transform: "translate(0, 0px)"}
  });
  const reset = useCallback( () => {
    ref.current.map(clearTimeout);
    ref.current = [];
    setItems([]);
    ref.current.push(setTimeout(() => setItems(["Honeykki"]), 500));
    ref.current.push(setTimeout(() => setItems(["Honeykki", "먹방 일기"]), 1000));
  }, [])
  useEffect (() => void reset(), [reset]);

  const move = true;
  const arrowProps = useSpring({
    from: { transform: move ? "translate(0, 10px)" : "" }, 
    to: { transform: move ? "translate(0, 0px)" : ""},
  })

  return (
    <div css={wrap}>
      <div css={card}>
        <div css={title}>
        {context.map(({ item, props, key }) => (
          <animated.div key={key} style={props} onLoad={reset}>{item}</animated.div>
        ))}
        </div>
        <div css={videoCon}>
          <video css={video} autostart="true" autoPlay src={Video} type="video/mp4" />
          <span css={videoCorner}></span>
        </div>
        <animated.div css={arrow} style={arrowProps}>
          <i className="fas fa-arrow-up"></i>
        </animated.div>
      </div>
    </div>
  );
}
const wrap = css`
  width: 100%;
  text-align: center;
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
// const corner = css`
//   position: absolute;
//   border-style:solid;
//   bottom:0;
//   right: 0;
//   border-width: 50px 50px 0 0;
//   border-color: yellowgreen white white white;
// `;
export default App;