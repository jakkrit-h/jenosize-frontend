'use client';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faAt, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid, IconButton, TextField } from '@mui/material';

export default function OkrFooter() {
  return (
    <Container maxWidth="lg">
      <Grid container alignItems={'center'} py={1} px={2} gap={2}>
        <Grid item>
          <IconButton>
            <FontAwesomeIcon icon={faImage} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <FontAwesomeIcon icon={faPaperclip} />
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton>
            <FontAwesomeIcon icon={faAt} />
          </IconButton>
        </Grid>

        <Grid item xs justifyContent={'flex-end'} display={'flex'}>
          <TextField label="Comment" />
        </Grid>
      </Grid>
    </Container>
  );
}
