'use client';
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faArrowDownLong,
  faChartSimple,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import customLocale from 'dayjs/plugin/customParseFormat';
import { useEffect, useState } from 'react';

dayjs.extend(weekOfYear);
dayjs.extend(customLocale);
export enum DATE_SLIDER_PERIOD {
  DATE = 'DATE',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
}
export enum DATE_SLIDER_DISPLAY_TYPE {
  CHART = 'CHART',
  LIST = 'LIST',
}
export interface IDateSliderResult {
  date: Date[];
  period: DATE_SLIDER_PERIOD;
  displayType: DATE_SLIDER_DISPLAY_TYPE;
}
interface IProps {
  onChange: (result: IDateSliderResult) => void;
}
const localeCustom = { weekStart: 1 };
const isCurrentWeek = dayjs().locale('custom', localeCustom).week();
export default function DateSlider({ onChange }: IProps) {
  const [week, setWeek] = useState<number>(isCurrentWeek);
  const [daysOfWeek, setDaysOfWeek] = useState<Date[]>([]);
  const [period, setPeriod] = useState<number>(0);
  const [displayType, setDisplayType] = useState<DATE_SLIDER_DISPLAY_TYPE>(
    DATE_SLIDER_DISPLAY_TYPE.CHART
  );
  const [selectedDate, setSelectedDate] = useState<Date>(dayjs().toDate());
  const genDaysOfWeek = () => {
    const startDate = dayjs(selectedDate)
      .locale('custom', localeCustom)
      .week(week)
      .startOf('weeks');

    const response = [];
    for (let i = 0; i < 7; i++) {
      const date = startDate.add(i, 'day');

      response.push(date.toDate());
    }
    return response;
  };
  useEffect(() => {
    const days = genDaysOfWeek();

    setDaysOfWeek(days);
  }, [selectedDate, period, week]);
  useEffect(() => {
    const localPeriod = Object.values(DATE_SLIDER_PERIOD)[period];
    const result: IDateSliderResult = {
      date:
        localPeriod === DATE_SLIDER_PERIOD.WEEK
          ? genDaysOfWeek()
          : [selectedDate],
      period: localPeriod,
      displayType: displayType,
    };
    onChange(result);
  }, [selectedDate, period, displayType]);

  return (
    <>
      <Box boxShadow={3}>
        <Container sx={{ py: 2 }}>
          <Stack direction={'row'} spacing={2}>
            <Tabs
              sx={{
                borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}`,
                padding: 0,
                minHeight: '20px',
                flex: 1,
              }}
              value={period}
              onChange={(event, value) => setPeriod(value)}
            >
              <Tab label="Daily" sx={{ flex: 1 }} />
              <Tab label="Weekly" sx={{ flex: 1 }} />
              <Tab label="Monthly" sx={{ flex: 1 }} />
            </Tabs>

            <IconButton
              size="small"
              color={
                displayType === DATE_SLIDER_DISPLAY_TYPE.CHART
                  ? 'primary'
                  : 'default'
              }
              onClick={() => setDisplayType(DATE_SLIDER_DISPLAY_TYPE.CHART)}
            >
              <FontAwesomeIcon icon={faChartSimple} />
            </IconButton>
            <IconButton
              size="small"
              color={
                displayType === DATE_SLIDER_DISPLAY_TYPE.LIST
                  ? 'primary'
                  : 'default'
              }
              onClick={() => setDisplayType(DATE_SLIDER_DISPLAY_TYPE.LIST)}
            >
              <FontAwesomeIcon icon={faList} />
            </IconButton>
          </Stack>
        </Container>

        <Grid container>
          <Grid item xs="auto" alignSelf={'flex-end'}>
            <IconButton
              sx={{ color: (theme) => theme.palette.grey[300] }}
              onClick={() => setWeek(week - 1)}
            >
              <FontAwesomeIcon icon={faAngleLeft} size="sm" />
            </IconButton>
          </Grid>
          {daysOfWeek.map((d, index) => {
            const date = dayjs(d);
            const isSameSelectedDate = date.isSame(selectedDate, 'date');
            const isCurrentDate = date.isSame(dayjs(), 'date');
            const isFuture = date.isAfter(dayjs(), 'date');
            return (
              <Grid
                container
                item
                xs
                direction={'column'}
                justifyContent={'center'}
                key={index}
              >
                <Grid item alignSelf={'center'}>
                  <IconButton size="small">
                    <Typography fontWeight={'bold'} variant="caption">
                      {dayjs(date.toISOString()).format('dd').charAt(0)}
                    </Typography>
                  </IconButton>
                </Grid>
                <Grid item alignSelf={'center'}>
                  <IconButton
                    size="small"
                    onClick={() => {
                      setSelectedDate(date.toDate());
                    }}
                    disabled={isFuture}
                  >
                    <Avatar
                      sx={{
                        width: '24px',
                        height: '24px',
                        background: (theme) =>
                          isSameSelectedDate
                            ? theme.palette.primary.main
                            : 'none',
                        color: (theme) =>
                          isSameSelectedDate
                            ? theme.palette.primary.contrastText
                            : isFuture
                            ? theme.palette.grey[400]
                            : theme.palette.text.secondary,
                        border: (theme) =>
                          isCurrentDate
                            ? `1px solid ${theme.palette.primary.main}`
                            : 'none',
                      }}
                    >
                      <Typography fontWeight={'bold'} variant="caption">
                        {date.format('DD')}
                      </Typography>
                    </Avatar>
                  </IconButton>
                </Grid>
              </Grid>
            );
          })}
          <Grid item xs="auto" alignSelf={'flex-end'}>
            <IconButton
              sx={{ color: (theme) => theme.palette.grey[300] }}
              onClick={() => setWeek(week + 1)}
            >
              <FontAwesomeIcon icon={faAngleRight} size="sm" />
            </IconButton>
          </Grid>
          <Grid item xs="auto" alignSelf={'flex-end'}>
            <Button
              onClick={() => {
                setSelectedDate(dayjs().toDate());
                setWeek(isCurrentWeek);
              }}
            >
              <Typography variant="caption">
                <FontAwesomeIcon icon={faArrowDownLong}></FontAwesomeIcon>Today
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <IconButton
          size="small"
          sx={{
            top: '13px',
            marginInline: 'auto',
            display: 'flex',
            boxShadow: 3,
            background: '#fff !important',
            border: (theme) => `1px solid ${theme.palette.grey[300]}`,
          }}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </IconButton>
      </Box>
    </>
  );
}
