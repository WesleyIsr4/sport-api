import type * as T from './types';

import * as S from './styles';

export function Avatar({ size = 'md', avatar_url, alt }: T.Avatar) {
  return (
    <picture>
      <S.Avatar src={avatar_url} alt={alt} size={size} />
    </picture>
  );
}
