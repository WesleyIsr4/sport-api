import { Sizes } from '@/utils/sizes';
import styled, { css } from 'styled-components';

const modifiers = {
  sizes: {
    xs: () => css`
      width: 24px;
      height: 24px;
    `,
    sm: () => css`
      width: 32px;
      height: 32px;
    `,
    md: () => css`
      width: 40px;
      height: 40px;
    `,
    lg: () => css`
      width: 48px;
      height: 48px;
    `,
    xl: () => css`
      width: 56px;
      height: 56px;
    `,
  },
};

export const Avatar = styled.img<{ size: Sizes }>`
  border-radius: 8px;

  ${({ size = 'md' }) => modifiers.sizes[size]};
`;
