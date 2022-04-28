import styled from 'styled-components';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
`