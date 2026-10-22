import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from '@mui/material'

type Props = {
  activity: Activity
  selectActivity: (id: string) => void
  deleteActivity: (id: string) => void
}

export default function ActivityCard({
  activity,
  selectActivity,
  deleteActivity,
}: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {activity.date}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="body2">
          {activity.city} / {activity.venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}
      >
        <Chip label={activity.category} variant="outlined" />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            onClick={() => deleteActivity(activity.id)}
            size="medium"
            variant="outlined"
            color="error"
          >
            Delete
          </Button>
          <Button
            onClick={() => selectActivity(activity.id)}
            size="medium"
            variant="contained"
          >
            View
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}
