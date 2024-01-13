import { Dialog, Typography } from "@mui/material";

interface IProps{
    open:boolean;
}
export default function LoadingDialog({open}:IProps){
    return  <Dialog open={open} maxWidth="md" fullWidth>
    <Typography
      variant="h3"
      mx={5}
      my={15}
      textAlign={'center'}
      fontWeight={'bold'}
    >
      Loading ....
    </Typography>
    </Dialog>
}