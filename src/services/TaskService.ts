import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ITask } from '../models/ITask'

export const taskApi = createApi({
	reducerPath: 'taskApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000',
	}),
	tagTypes: ['Task'],
	endpoints: builder => ({
		fetchAllTasks: builder.query<ITask[], number>({
			query: (limit: number = 5) => ({
				url: '/tasks',
				params: {
					_limit: limit,
				},
			}),
			providesTags: result => ['Task'],
		}),

		createTask: builder.mutation<ITask, ITask>({
			query: task => ({
				url: '/tasks',
				method: 'POST',
				body: task,
			}),
			invalidatesTags: ['Task'],
		}),
		deleteTask: builder.mutation<ITask, ITask>({
			query: task => ({
				url: `/tasks/${task.id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Task'],
		}),
		updateTask: builder.mutation<ITask, ITask>({
			query: task => ({
				url: `/tasks/${task.id}`,
				method: 'PUT',
				body: task,
			}),
			invalidatesTags: ['Task'],
		}),
	}),
})
