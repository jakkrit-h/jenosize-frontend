'use client';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
type PlayerType = 1 | 2;
type ResultType = 1 | 2 | 0;
const defaultValue: (PlayerType | null)[] = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
//
export default function GameXoPage() {
  const [slot, setSlot] = useState<(PlayerType | null)[]>(defaultValue);
  const [player, setPlayer] = useState<PlayerType>(1);
  const [endGame, setEndGame] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [result, setResult] = useState<ResultType>(0);
  const onSet = (index: number) => {
    setPlayer(player === 1 ? 2 : 1);
    const temp: (PlayerType | null)[] = [...slot];
    temp[index] = player;
    setSlot(temp);
  };
  const checkResult = () => {
    const checkList = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let res: ResultType = 0;
    for (let round = 0; round < checkList.length; round++) {
      const checker = checkList[round];
      const values = [slot[checker[0]], slot[checker[1]], slot[checker[2]]];
      const key = values[0];
      if (values.every((v) => v === key) && key) {
        res = key;
        break;
      }
    }
    console.log('🚀🚀🚀', res);
    if (res !== 0 || !slot.includes(null)) {
      setEndGame(true);
      setResult(res);
      setOpenDialog(true);
    }
  };
  const reset = () => {
    setEndGame(false);
    setSlot(defaultValue);
    setResult(0);
    // จงใจไม่ Reset Player Turn
  };
  useEffect(() => {
    checkResult();
  }, slot);
  return (
    <>
      <Container maxWidth="md" sx={{ my: 5 }}>
        <Grid container height={'20vh'}>
          <Grid item container py={3}>
            <Grid item xs={12} md="auto">
              <Button
                variant="contained"
                color="inherit"
                disabled={!endGame}
                onClick={() => {
                  reset();
                }}
              >
                Reset
              </Button>
            </Grid>
            <Grid item xs={12} md></Grid>
          </Grid>
          {slot.map((s, i) => {
            return (
              <Grid
                key={i}
                sx={{
                  height: '100%',
                  background: (theme) =>
                    `${endGame ? theme.palette.grey[200] : 'none'}`,
                }}
                item
                xs={4}
                borderBottom={`${i < 6 ? 2 : 0}px solid #000`}
                borderRight={`${(i + 1) % 3 !== 0 ? 2 : 0}px solid #000`}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                onClick={() => {
                  !s && !endGame ? onSet(i) : null;
                }}
              >
                {s && (
                  <FontAwesomeIcon
                    icon={s === 1 ? faTimes : faCircle}
                    size="10x"
                    color={s === 1 ? '#cc6c84' : '#6eb7cf'}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Dialog
        open={openDialog}
        onClose={() => {
          setOpenDialog(false);
        }}
        maxWidth="md"
        fullWidth
      >
        <Typography
          variant="h3"
          mx={5}
          my={15}
          textAlign={'center'}
          fontWeight={'bold'}
        >
          {result === 0 ? (
            <>
              <Stack
                direction="row"
                spacing={2}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  size="1x"
                  color={'#cc6c84'}
                  style={{ marginBlock: 10 }}
                />

                <p> Draw</p>
                <FontAwesomeIcon
                  icon={faCircle}
                  size="1x"
                  color={'#6eb7cf'}
                  style={{ marginBlock: 10 }}
                />
              </Stack>
            </>
          ) : (
            <Stack
              direction="row"
              spacing={2}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <p> Player</p>
              <FontAwesomeIcon
                icon={result === 1 ? faTimes : faCircle}
                size="1x"
                color={result === 1 ? '#cc6c84' : '#6eb7cf'}
                style={{ marginBlock: 10 }}
              />
              <p> Win</p>
            </Stack>
          )}
        </Typography>
      </Dialog>
    </>
  );
}
