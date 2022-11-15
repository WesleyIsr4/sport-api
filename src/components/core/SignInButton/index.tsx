import { useSession, signIn, signOut } from 'next-auth/react';
import { GithubLogo } from 'phosphor-react';
import * as S from './styles';

export function SignInButton() {
  const { data: session, status } = useSession();

  return status === 'authenticated' ? (
    <S.Button onClick={() => signOut()}>
      <GithubLogo size={32} color="#04d361" />
      {session.user.name}
    </S.Button>
  ) : (
    <S.Button onClick={() => signIn('github', { callbackUrl: '/home' })}>
      <GithubLogo size={32} color="#eba417" />
      Sign in with Github
    </S.Button>
  );
}
