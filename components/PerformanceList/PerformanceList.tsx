'use client'
import { Bilet, Pokaz, Spektakli, Zal } from '@prisma/client';

interface Performance {
  id: number;
  data: Date;
  time: string;
  spektakli: Spektakli & { bilet: Bilet[] };
  zal: Zal;
}

interface Props {
  performances: Performance[];
}

const PerformanceList: React.FC<Props> = ({ performances }) => (
  <ul>
    {performances.map((Pokaz) => (
      <li key={Pokaz.id}>
        <time dateTime={Pokaz.data.toISOString()}>
          {Pokaz.data.toLocaleDateString()} at {Pokaz.time}
        </time>
        <p>{Pokaz.spektakli.name}</p>
        <p>{Pokaz.zal.name}</p>
      </li>
    ))}
  </ul>
);

export default PerformanceList;