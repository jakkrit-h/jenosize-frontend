'use client';
import DateSlider, {
  DATE_SLIDER_DISPLAY_TYPE,
  DATE_SLIDER_PERIOD,
  IDateSliderResult,
} from '@/components/shared/DateSlider';
import StatisticDailyView from '@/components/statistic/DailyView';
import StatisticGraphView, {
  IGraphData,
} from '@/components/statistic/GraphView';
import StatisticListView from '@/components/statistic/ListView';
import { store, useAppDispatch } from '@/store';
import { random } from '@/store/slices/appSlice';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faComment,
  faGem,
  faThumbsUp,
} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUpFromBracket,
  faGift,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { useCallback, useState } from 'react';
interface ITopic {
  title: string;
  icon: IconProp;
  prefix: string;
}
export default function StatisticPage() {
  const appDispatch = useAppDispatch();
  const topics: ITopic[] = [
    { title: 'Like', icon: faThumbsUp, prefix: 'People Likes' },
    { title: 'Comment', icon: faComment, prefix: 'Comments' },
    { title: 'Point', icon: faGift, prefix: 'Points' },
    { title: 'Diamond', icon: faGem, prefix: 'Diamonds' },
  ];
  const [selectedDate, setSelectedDate] = useState<IDateSliderResult>({
    date: [new Date()],
    displayType: DATE_SLIDER_DISPLAY_TYPE.CHART,
    period: DATE_SLIDER_PERIOD.DATE,
  });
  const [selectedTopic, setSelectedTopic] = useState<ITopic>(topics[0]);
  const genData = useCallback(() => {
    const data: IGraphData = { xAxis: [], yAxis: [] };
    if (selectedDate?.period === DATE_SLIDER_PERIOD.WEEK) {
      selectedDate?.date.map((date) => {
        data.xAxis.push(dayjs(date).format('DD'));
        data.yAxis.push(Math.floor(Math.random() * 1000));
      });
    } else {
      for (let i = 0; i < 12; i++) {
        data.xAxis.push(dayjs().set('month', i).format('MM'));
        data.yAxis.push(Math.floor(Math.random() * 1000));
      }
    }
    return data;
  }, [selectedDate]);
  return (
    <>
      <Grid container justifyContent={'center'} pb={3}>
        <Grid item xs={12} md={8}>
          <Box boxShadow={3} py={1}>
            <Stack direction={'row'}>
              <Button fullWidth color="inherit">
                Submission
              </Button>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Button fullWidth>Engagement</Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <DateSlider
            onChange={(result) => {
              setSelectedDate(result);
            }}
          />
        </Grid>
        <Grid item xs={12} md={8} px={{ xs: 2, md: 0 }}>
          <Grid container spacing={2} alignItems={'center'} my={2}>
            <Grid item xs={6} alignSelf={'end'}>
              {selectedDate && (
                <Typography
                  fontWeight={'bold'}
                  color={(theme) => theme.palette.grey[600]}
                  variant="subtitle2"
                >
                  {selectedDate?.period === DATE_SLIDER_PERIOD.WEEK
                    ? `${dayjs(selectedDate?.date[0]).format('DD')} - ${dayjs(
                        selectedDate?.date.slice(-1)[0]
                      ).format('DD MMMM YYYY')}`
                    : dayjs(selectedDate?.date[0]).format(
                        selectedDate?.period === DATE_SLIDER_PERIOD.DATE
                          ? 'DD MMMM YYYY'
                          : 'MMMM YYYY'
                      )}
                </Typography>
              )}
            </Grid>
            <Grid item xs={6} textAlign={'right'}>
              <IconButton color="primary" onClick={() => appDispatch(random())}>
                <FontAwesomeIcon icon={faArrowUpFromBracket} size="sm" />
              </IconButton>
            </Grid>
          </Grid>
          {selectedDate &&
          selectedDate?.period === DATE_SLIDER_PERIOD.DATE &&
          selectedDate.displayType === DATE_SLIDER_DISPLAY_TYPE.CHART ? (
            <>
              <StatisticDailyView />
            </>
          ) : (
            selectedDate && (
              <>
                <Stack direction={'row'} spacing={1}>
                  {topics.map((data, index) => {
                    return (
                      <Chip
                        key={index}
                        size="small"
                        label={
                          <Typography
                            color={
                              selectedTopic.title === data.title
                                ? 'white'
                                : 'primary'
                            }
                            variant="subtitle2"
                          >
                            <FontAwesomeIcon
                              icon={data.icon}
                              style={{ marginInline: 5 }}
                            />
                            {data.title}
                          </Typography>
                        }
                        variant={
                          selectedTopic.title === data.title
                            ? 'filled'
                            : 'outlined'
                        }
                        color="primary"
                        onClick={() =>
                          setSelectedTopic(
                            topics.find((t) => t.title === data.title) ??
                              topics[0]
                          )
                        }
                      />
                    );
                  })}
                </Stack>
                {selectedDate?.displayType ===
                DATE_SLIDER_DISPLAY_TYPE.CHART ? (
                  <StatisticGraphView data={genData()} />
                ) : (
                  <StatisticListView
                    icon={selectedTopic.icon}
                    prefix={selectedTopic.prefix}
                  />
                )}
              </>
            )
          )}
        </Grid>
      </Grid>
    </>
  );
}
