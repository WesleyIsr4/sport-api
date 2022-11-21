import { Nav } from '@/components/Nav';

import useFetch from '@/hooks/useFetch';
import * as S from './styles';

function CardLeague() {
  const { data, loading } = useFetch('leagues');

  return (
    <S.cardLeage>
      <div className="card-list">
        <h3>Leagues</h3>
        {!loading &&
          data?.response
            .filter((item) => item.league)
            .map((item) => (
              <div key={item.league.id} className="card">
                <picture>
                  <img src={item.league.logo} alt={item.league.name} />
                </picture>
              </div>
            ))}
      </div>
    </S.cardLeage>
  );
}

function CardTeam() {
  const { data, loading } = useFetch('teams/countries');

  return (
    <S.cardLeage>
      <div className="card-list">
        <h3>Teams</h3>
        {!loading &&
          data?.response.map((item) => (
            <div key={item.code} className="card">
              <picture>
                <img src={item?.flag} alt={item.name} />
              </picture>
            </div>
          ))}
      </div>
    </S.cardLeage>
  );
}

export function HomeTemplate() {
  return (
    <S.Container>
      <Nav />
      <CardLeague />
      <CardTeam />
    </S.Container>
  );
}
