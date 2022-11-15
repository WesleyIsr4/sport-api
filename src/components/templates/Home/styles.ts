import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);
`;

export const cardLeage = styled.div`
  width: 1120px;
  padding: 1rem;
  overflow: auto;
  margin-top: 40px;

  .card-list {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;

    h3 {
      color: #fff;
    }

    .card {
      margin-top: 24px;
      flex-shrink: 0;
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      overflow-y: hidden;
      gap: 24px;
      border-radius: 20px;
      margin-left: 10px;
      margin-right: 10px;

      img {
        width: 100%;
        border-radius: 8px;
      }
    }
  }
`;
