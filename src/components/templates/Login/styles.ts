import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Spline Sans', sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  background: transparent;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 1000px;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  .content_text {
    display: flex;
    flex-direction: column;
    gap: 44px;
    justify-self: center;
  }

  h1 {
    font-weight: bold;
    font-family: 'Spline Sans Mono', monospace;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;
