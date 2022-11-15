import styled from 'styled-components';

export const Button = styled.button`
  background: rgba(0, 0, 0, 0.2);
  border: 0px;
  font-size: 16px;
  padding: 12px 30px;
  border-radius: 14px;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 280px;
  backdrop-filter: blur(20px);
  font-weight: 600;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  pointer-events: auto;

  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;

  transition: 0.2s;
  :hover {
    border: 1px solid rgba(255, 255, 255, 0.8);
  }
`;
