import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import agent from '../api/agent'

export const useActivities = (id?: string) => {
  const queryClient = useQueryClient()

  const { data: activities, isPending } = useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await agent.get<Activity[]>('/events')
      return response.data
    },
  })

  const { data: activity, isLoading: isLoadingActivity } = useQuery({
    queryKey: ['activities', id],
    queryFn: async () => {
      const response = await agent.get<Activity>(`/events/${id}`)
      return response.data
    },
    enabled: !!id, // Solo se ejecuta si existe un id válido
  })

  const updateActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      await agent.put('/events', activity)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['activities'],
      })
    },
  })

  const createActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      const response = await agent.post('/events', activity)
      return response.data
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['activities'],
      })
    },
  })

  const deleteActivity = useMutation({
    mutationFn: async (stringId: string) => {
      await agent.delete(`/events/${stringId}`)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['activities'],
      })
    },
  })

  return {
    activities,
    isPending,
    updateActivity,
    createActivity,
    deleteActivity,
    activity,
    isLoadingActivity,
  }
}