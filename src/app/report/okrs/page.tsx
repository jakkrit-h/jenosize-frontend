'use client';

import { theme } from '@/themes';
import { faker } from '@faker-js/faker';
import { faClock, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import {
  faAngleRight,
  faCalendar,
  faGift,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, Grid, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { alpha } from '@mui/material/styles';
import OkrsReportCommentCard, {
  IOkrsReportCommentCardProps,
} from '@/components/report/okrs/CommentCard';
import { useMemo } from 'react';
interface IData {
  title: string;
  content: string;
}

// const images: string[] = [
//   faker.image.url(),
//   faker.image.url(),
//   faker.image.url(),
// ];

export default function OkrsReportPage() {
  const comments: IOkrsReportCommentCardProps[] = useMemo(
    () => [
      {
        name: `Blaze Frami`,
        comment: `Sto deinde decipio cursim ulterius claustrum socius quisquam textilis.
Tunc vilicus vetus sortitus ullus sustineo vix.
Curia confero desolo capillus certe vicissitudo vergo adamo at.
Defaeco vita corporis denuo texo conturbo color architecto umerus.
Ventus decipio tamen cognomen neque.`,
        job: 'Agent',
      },
      {
        name: `Sonya Wintheiser
`,
        comment: `Vulgus adaugeo turba. Compono dicta quis cogito peior vinculum audeo censura tersus cruciamentum. Confero arbustum volutabrum provident nobis comptus spiritus similique similique aperio.`,
        job: 'Technician',
      },
      {
        name: `Jaden Hessel`,
        comment: `Curtus aduro xiphias. Sono coniecto corrupti. Brevis atavus thymum abundans bonus aestus ab cupiditas ubi vorago.`,
        job: 'Coordinator',
      },
    ],
    []
  );
  const data: IData[] = useMemo(
    () => [
      {
        title: 'content 1',
        content:
          'Minima appono cultellus caput utor ventus. Audax sustineo via tantum solium templum adversus. Versus sortitus molestias appono stipes contabesco textor.',
      },
      {
        title: 'content 2',
        content:
          'Minima appono cultellus caput utor ventus. Audax sustineo via tantum solium templum adversus. Versus sortitus molestias appono stipes contabesco textor.',
      },
      {
        title: 'content 3',
        content:
          'Minima appono cultellus caput utor ventus. Audax sustineo via tantum solium templum adversus. Versus sortitus molestias appono stipes contabesco textor.',
      },
    ],
    []
  );
  return (
    <>
      <Grid container xs={12} md={6} mx="auto">
        {/* CONTENT */}
        <Grid container item px={3} spacing={3}>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs="auto">
              <Avatar />
            </Grid>
            <Grid container item xs>
              <Grid container item xs={8}>
                <Grid item xs={12}>
                  <Typography fontWeight={'bold'}>
                    Caterina Kertzmann
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">Director Analyst</Typography>
                </Grid>
              </Grid>
              <Grid container item xs={4} textAlign={'end'}>
                <Grid item xs={12}>
                  <Typography
                    variant="caption"
                    color={(theme) => theme.palette.grey[500]}
                  >
                    <FontAwesomeIcon icon={faCalendar} />{' '}
                    {dayjs().format('DD/MM/YYYY')}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="caption"
                    color={(theme) => theme.palette.grey[500]}
                  >
                    <FontAwesomeIcon icon={faClock} /> {dayjs().format('HH:MM')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {data.map((d, i) => {
            return (
              <Grid container item xs={12} key={i}>
                <Grid item xs={12}>
                  <Typography color={(theme) => theme.palette.grey[500]}>
                    {d.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>{d.content}</Typography>
                </Grid>
              </Grid>
            );
          })}

          <Grid container item xs={12} spacing={1}>
            <Grid item xs={12}>
              <Typography color={(theme) => theme.palette.grey[500]}>
                Image
              </Typography>
            </Grid>
            <Grid container item xs={12} spacing={1}>
              <Grid item>
                <img
                  src={'https://loremflickr.com/640/480?lock=5783137908948992'}
                  width="100"
                />
              </Grid>
              <Grid item>
                <img
                  src={'https://loremflickr.com/640/480?lock=5783137908948992'}
                  width="100"
                />
              </Grid>
              <Grid item>
                <img
                  src={'https://loremflickr.com/640/480?lock=5783137908948992'}
                  width="100"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={12}>
              <Typography color={(theme) => theme.palette.grey[500]}>
                Attach File
              </Typography>
            </Grid>
            <Grid container item xs={12} spacing={1}>
              <Button color="primary">
                <FontAwesomeIcon
                  icon={faPaperclip}
                  color={theme.palette.grey[500]}
                />
                <Typography color={'primary'} mx={1}>
                  oof_kimono_ah.pdf
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* COMMENT BUTTON */}
        <Grid container item mt={2}>
          <Grid
            item
            container
            sx={{
              background: alpha(theme.palette.primary.light, 0.2),
              color: theme.palette.grey[500],
            }}
            textAlign={'end'}
            pr={2}
          >
            <Grid item xs>
              <Button>
                <Typography
                  sx={{
                    color: theme.palette.grey[400],

                    px: 1,
                  }}
                  variant="subtitle2"
                >
                  Read (12)
                </Typography>
              </Button>
            </Grid>
            <Grid item xs>
              <Button sx={{ color: theme.palette.grey[400] }}>
                <Typography
                  sx={{
                    color: theme.palette.grey[400],
                    borderInline: `2px solid ${theme.palette.grey[400]}`,
                    px: 1,
                  }}
                  variant="subtitle2"
                >
                  Unread (12)
                </Typography>
              </Button>
            </Grid>
            <Grid item xs justifyContent={'center'} container>
              <Button
                sx={{
                  color: theme.palette.grey[400],
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.grey[400],
                  }}
                  variant="subtitle2"
                >
                  Likes (12)
                </Typography>
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button>
                <Typography>
                  View <FontAwesomeIcon icon={faAngleRight} />
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            p={3}
            spacing={3}
            justifyContent={'center'}
            borderBottom={(theme) => `1px solid ${theme.palette.grey[300]}`}
          >
            <Grid item xs>
              <Button
                variant="outlined"
                fullWidth
                sx={{ borderRadius: '50px' }}
              >
                <Stack direction={'row'} spacing={1}>
                  <FontAwesomeIcon icon={faGift} />
                  <Typography>Give Point</Typography>
                </Stack>
              </Button>
            </Grid>
            <Grid item xs>
              <Button
                variant="outlined"
                fullWidth
                sx={{ borderRadius: '50px' }}
              >
                <Stack direction={'row'} spacing={1}>
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <Typography>Like</Typography>
                </Stack>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* COMMENTS */}
        <Grid container item py={3} rowSpacing={3}>
          {comments.map((comment, index) => {
            return (
              <Grid
                item
                xs={12}
                sx={{
                  borderBottom: (theme) =>
                    `${comments.length - 1 === index ? `0px` : `1px`} solid ${
                      theme.palette.grey[300]
                    }`,
                }}
                key={index}
                mx={3}
              >
                <OkrsReportCommentCard
                  name={comment.name}
                  job={comment.job}
                  comment={comment.comment}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}
