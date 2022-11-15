import { SignInButton } from '@/components/core/SignInButton';

import * as S from './styles';

export function LoginTemplate() {
  return (
    <S.Wrapper>
      <S.Content>
        <div className="content_text">
          <h1>Collaborate with sports</h1>
          <SignInButton />
        </div>
      </S.Content>
    </S.Wrapper>
  );
}
