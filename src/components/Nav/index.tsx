import { SignInButton } from '../core/SignInButton';
import * as S from './styles';

export function Nav() {
  return (
    <S.Container>
      <S.Content>
        <h3>Sports</h3>
        <SignInButton />
      </S.Content>
    </S.Container>
  );
}
