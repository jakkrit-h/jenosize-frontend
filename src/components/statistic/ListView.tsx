import { theme } from '@/themes';
import { faker } from '@faker-js/faker';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Box, Card, Grid, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
interface IData {
  name: string;
  job: string;
  city: string;
  country: string;
  counter: number;
}
interface IProps {
  icon: IconProp;
  prefix: string;
}

export default function StatisticListView({ icon, prefix }: IProps) {
  const data: IData[] = useMemo(() => {
    const result: IData[] = [];
    for (let i = 0; i < 7; i++) {
      result.push({
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        job: faker.person.jobType(),
        city: faker.location.city(),
        country: faker.location.country(),
        counter: Math.floor(Math.random() * 100),
      });
    }
    return result;
  }, []);
  return (
    <>
      <Grid container spacing={1} py={2}>
        {data.map((d, i) => {
          return (
            <Grid container item key={i} spacing={1} alignItems={'center'}>
              <Grid item xs="auto">
                <Avatar sx={{ width: 20, height: 20, background: '#28273E' }}>
                  <Typography variant="caption">{i + 1}</Typography>
                </Avatar>
              </Grid>

              <Grid item xs>
                <Card sx={{ p: 1 }}>
                  <Grid container>
                    <Grid
                      container
                      item
                      xs={9}
                      spacing={1}
                      alignItems={'center'}
                    >
                      <Grid item xs="auto">
                        <Avatar sx={{ width: 30, height: 30 }}></Avatar>
                      </Grid>
                      <Grid container item xs>
                        <Grid item xs={12}>
                          <Stack
                            direction={'row'}
                            alignItems={'center'}
                            spacing={1}
                          >
                            <Typography variant="caption" fontWeight={'bold'}>
                              {d.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              color={(theme) => theme.palette.grey[500]}
                            >
                              {d.job}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid container item xs={12}>
                          <Typography
                            variant="caption"
                            color={(theme) => theme.palette.grey[500]}
                          >
                            <FontAwesomeIcon
                              icon={faBuilding}
                            ></FontAwesomeIcon>{' '}
                            {d.city} {d.country}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={3}
                      alignItems={'center'}
                      borderLeft={(theme) =>
                        `2px solid ${theme.palette.grey[300]}`
                      }
                    >
                      <Box>
                        <Stack direction={'row'} alignItems={'center'} px={2}>
                          <Typography
                            variant="caption"
                            fontWeight={'bold'}
                            color={(theme) => theme.palette.grey[500]}
                          >
                            <FontAwesomeIcon
                              icon={icon}
                              color={theme.palette.primary.main}
                            />{' '}
                            {d.counter} {prefix}
                          </Typography>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
