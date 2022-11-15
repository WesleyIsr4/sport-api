import styled from 'styled-components';

export const Container = styled.header``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  margin: 20px 30px 0 100px;
  padding: 0;
  pointer-events: auto;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  h3 {
    color: #fff;
  }
`;
