import { theme } from '@/themes';
import {
  faAngleDown,
  faHome,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';

export default function MainNavBar() {
  return (
    <>
      <Grid container direction={'row'} spacing={3} alignItems={'center'}>
        <Grid item xs>
          <IconButton size="small">
            <FontAwesomeIcon
              icon={faHome}
              color={theme.palette.primary.contrastText}
            />
          </IconButton>
        </Grid>
        <Grid
          container
          item
          xs={6}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Button color="primary" variant="contained" disableElevation>
            <Typography fontWeight={'bold'} mr={5}>
              All Report
            </Typography>
            <FontAwesomeIcon icon={faAngleDown} />
          </Button>
        </Grid>

        <Grid container item xs justifyContent={'flex-end'}>
          <IconButton size="small">
            <FontAwesomeIcon
              icon={faSliders}
              color={theme.palette.primary.contrastText}
            />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
