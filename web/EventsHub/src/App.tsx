import { Fragment, useEffect, useState } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";

// Interfaz para definir el tipo de datos que viene de tu API
interface Activity {
  id: string;
  title: string;
}

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/v1/events')
      .then(response => setActivities(response.data));
  }, []);

  return (
    <Fragment>
      <Typography variant="h3">Events Hub</Typography>
      <List>
        {activities.map((activity: Activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}

export default App;