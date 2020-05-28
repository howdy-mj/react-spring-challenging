/** @jsx jsx */
import { useRef } from 'react';
import { jsx, css } from "@emotion/core";
import Video from "./video/macbookAir.mp4";
import { useSpring, animated, useChain } from "react-spring";

const App = () => {
  const videoRef = useRef();
  const titleProps = useSpring({ from: {opacity: 0}, to: {opacity: 1}})
  const arrowProps = useSpring({from: {opacity: 0}, to: {opacity: 1}, delay: 2000})
  
  const imgRef = useRef();

  useChain([videoRef, imgRef]);

  return (
    <div css={wrap}>
      <div css={card}>
        <animated.div css={title} style={titleProps}>
          <p>MacBook</p><p>Air 2020</p>
        </animated.div>
        <div css={videoCon}>
          <video css={video} autostart autoPlay src={Video} type="video/mp4" />
          <span css={videoCorner}></span>
        </div>
        <div css={arrow}>
          <animated.i class="fas fa-arrow-up" style={arrowProps}></animated.i>
        </div>

        {/* <span css={corner}></span> */}
        {/* <i class="fas fa-equals" style={{color: "white"}}></i> */}
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
  font-weight: 700;
  position: absolute;
  top: 70px;
  left: 120px;
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
  width: 250px;
`;

const videoCorner = css`
  position: absolute;
  border-style:solid;
  bottom: 3px;
  right: 0;
  border-width: 50px 50px 0 0;
  border-color: yellowgreen green green green;
`;


const arrow = css`
  padding-top: 50px;
  color: white;
`;

const corner = css`
  position: absolute;
  border-style:solid;
  bottom:0;
  right: 0;
  border-width: 50px 50px 0 0;
  border-color: yellowgreen white white white;
`;





export default App;
