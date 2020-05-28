/** @jsx jsx */
// import React from 'react';
import { jsx, css } from "@emotion/core";
import Video from "./video/samulnori.mp4";
import { useSpring, animated, useChain } from "react-spring";

const App = () => {
  return (
    <div css={wrap}>
      <div css={card}>
        <div css={title}>
          <p>김덕수</p><p>사물놀이</p>
        </div>
        <div css={videoCon}>
          <video css={video} autostart autoPlay src={Video} type="video/mp4" />
          <span css={videoCorner}></span>
        </div>
        <div css={arrow}>
          <i class="fas fa-arrow-up" style={{color: "white"}}></i>
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
  color: white;
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
  bottom:0;
  right: 0;
  border-width: 50px 50px 0 0;
  border-color: yellowgreen green green green;
`;


const arrow = css`
  padding-top: 50px;
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
