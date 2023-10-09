import { configureStore } from '@reduxjs/toolkit'
import { taskApi } from '../services/TaskService'

export const store = configureStore({
	reducer: {
		[taskApi.reducerPath]: taskApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(taskApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
