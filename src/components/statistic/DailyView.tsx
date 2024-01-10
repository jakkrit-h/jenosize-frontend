'use client';
import {
  faArrowUpFromBracket,
  faGift,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, IconButton } from '@mui/material';
import InfoBox from './InfoBox';
import {
  faComment,
  faGem,
  faThumbsUp,
} from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const maxRandom = 1000;
interface IData {
  title: string;
  subtitle: string;
  icon: IconProp;
  number: number;
}
const defaultData: IData[] = [
  {
    title: 'Like',
    subtitle: 'Likes',
    icon: faThumbsUp,
    number: 0,
  },
  {
    title: 'Comment',
    subtitle: 'Comments',
    icon: faComment,
    number: 0,
  },
  {
    title: 'Point',
    subtitle: 'Points',
    icon: faGift,
    number: 0,
  },
  {
    title: 'Diamond',
    subtitle: 'Diamonds',
    icon: faGem,
    number: 0,
  },
];
export default function StatisticDailyView() {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    setData(
      defaultData.map((d) => {
        d.number = Math.floor(Math.random() * maxRandom);
        return d;
      })
    );
  }, []);
  return (
    <>
      {data && (
        <Grid container spacing={2}>
          {data.map((d, i) => {
            return (
              <Grid item xs={6} md={4} lg={3} key={i}>
                <InfoBox
                  icon={d.icon}
                  title={d.title}
                  number={d.number}
                  subTitle={d.subtitle}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}
