'use client';
import { faker } from '@faker-js/faker';
import { faComment, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BorderBottom } from '@mui/icons-material';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
export interface IOkrsReportCommentCardProps {
  name: string;
  job: string;

  comment: string;
}
export default function OkrsReportCommentCard({
  name,
  job,
  comment,
}: IOkrsReportCommentCardProps) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs="auto">
            <Avatar />
          </Grid>
          <Grid container item xs>
            <Grid item xs={12}>
              <Typography fontWeight={'bold'} variant="subtitle2">
                {name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">{job}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">{comment}</Typography>
        </Grid>
        <Grid container item xs={12} alignItems={'center'}>
          <Grid container item xs spacing={2}>
            <Grid item xs={'auto'}>
              <Typography
                variant="caption"
                fontWeight={'bold'}
                color={(theme) => theme.palette.grey[500]}
              >
                2 days ago
              </Typography>
            </Grid>
            <Grid item xs={'auto'}>
              <Typography
                variant="caption"
                fontWeight={'bold'}
                color={(theme) => theme.palette.primary.main}
              >
                3 People Likes
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={'auto'}>
            <Grid item xs={'auto'}>
              <Button>
                <FontAwesomeIcon icon={faComment} />
                <Typography
                  variant="caption"
                  fontWeight={'bold'}
                  color={(theme) => theme.palette.primary.main}
                  mx={1}
                >
                  Reply
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={'auto'}>
              <Button>
                <FontAwesomeIcon icon={faThumbsUp} />
                <Typography
                  variant="caption"
                  fontWeight={'bold'}
                  color={(theme) => theme.palette.primary.main}
                  mx={1}
                >
                  Like
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
