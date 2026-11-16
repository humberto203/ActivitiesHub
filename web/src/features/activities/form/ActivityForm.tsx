import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { useActivities } from '../../../lib/hooks/useActivities'

export default function ActivityForm() {
  const { updateActivity, createActivity } = useActivities()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data: { [key: string]: FormDataEntryValue } = {}
    formData.forEach((value, key) => {
      data[key] = value
    })
    console.log(data)

    // Lógica temporal o adaptada para rutas
    await createActivity.mutateAsync(data as unknown as Activity)
  }

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create activity
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <TextField name="title" label="Title" />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={3}
        />
        <TextField
          name="category"
          label="Category"
        />
        <TextField
          name="date"
          label="Date"
          type="date"
          defaultValue={new Date().toISOString().split('T')[0]}
        />
        <TextField name="city" label="City" />
        <TextField name="venue" label="Venue" />
        <Box sx={{ display: 'flex', justifyContent: 'end', gap: 3 }}>
          <Button color="inherit">
            Cancel
          </Button>
          <Button
            type="submit"
            color="success"
            variant="contained"
            loading={updateActivity.isPending || createActivity.isPending}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}