import { theme } from '@/themes';
import { faAngleLeft, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, IconButton, Typography } from '@mui/material';

export default function OkrNavBar() {
  return (
    <Grid container direction={'row'} spacing={3} alignItems={'center'}>
      <Grid item xs>
        <Button color="primary" variant="contained" disableElevation>
          <FontAwesomeIcon icon={faAngleLeft} style={{ marginInline: 5 }} />{' '}
          Back
        </Button>
      </Grid>
      <Grid
        container
        item
        xs={6}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography fontWeight={'bold'}>OKRs Report</Typography>
      </Grid>

      <Grid container item xs justifyContent={'flex-end'}>
        <IconButton size="small">
          <FontAwesomeIcon
            icon={faEllipsis}
            color={theme.palette.primary.contrastText}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
}
