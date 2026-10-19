import { Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material';

type Props = {
  activity: Activity;
  selectActivity: (id: string) => void;
};

export default function ActivityCard({ activity, selectActivity }: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        {/* Mantén el código que ya tenías dentro de CardContent (título, fecha, etc.) */}
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
        <Chip label={activity.category} variant="outlined" />
        <Button 
          onClick={() => selectActivity(activity.id)} 
          size="medium" 
          variant="contained"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}