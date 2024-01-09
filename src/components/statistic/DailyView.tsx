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

const maxRandom = 1000;
export default function StatisticDailyView() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4} lg={3}>
          <InfoBox
            icon={faThumbsUp}
            title={'Like'}
            number={Math.floor(Math.random() * maxRandom)}
            subTitle="Likes"
          />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <InfoBox
            icon={faComment}
            title={'Comment'}
            number={Math.floor(Math.random() * maxRandom)}
            subTitle="Comments"
          />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <InfoBox
            icon={faGift}
            title={'Point'}
            number={Math.floor(Math.random() * maxRandom)}
            subTitle="Point"
          />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <InfoBox
            icon={faGem}
            title={'Diamond'}
            number={Math.floor(Math.random() * maxRandom)}
            subTitle="Diamond"
          />
        </Grid>
      </Grid>
    </>
  );
}
