import { DotSpinner } from '@uiball/loaders'
import { FC, useState } from 'react'
import { ITask } from '../../models/ITask'
import { taskApi } from '../../services/TaskService'
import AddTaskBlock from '../AddTaskBlock'
import TaskItem from '../TaskItem'
import TasksEmpty from '../TasksEmpty'
import styles from './TaskContainer.module.scss'

const TaskContainer: FC = () => {
	const { data: tasks, error, isLoading } = taskApi.useFetchAllTasksQuery(10)
	const [deleteTask, {}] = taskApi.useDeleteTaskMutation()
	const [isOpen, setIsOpen] = useState(false)

	const handleRemove = (task: ITask) => {
		deleteTask(task)
	}

	return (
		<div className={styles.taskContainer}>
			{isOpen ? (
				<AddTaskBlock setIsOpen={setIsOpen} />
			) : (
				<div className={styles.addTaskButton} onClick={() => setIsOpen(true)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
					>
						<path
							d='M8 0.5C8.24864 0.5 8.4871 0.598772 8.66291 0.774588C8.83873 0.950403 8.9375 1.18886 8.9375 1.4375V7.0625H14.5625C14.8111 7.0625 15.0496 7.16127 15.2254 7.33709C15.4012 7.5129 15.5 7.75136 15.5 8C15.5 8.24864 15.4012 8.4871 15.2254 8.66291C15.0496 8.83873 14.8111 8.9375 14.5625 8.9375H8.9375V14.5625C8.9375 14.8111 8.83873 15.0496 8.66291 15.2254C8.4871 15.4012 8.24864 15.5 8 15.5C7.75136 15.5 7.5129 15.4012 7.33709 15.2254C7.16127 15.0496 7.0625 14.8111 7.0625 14.5625V8.9375H1.4375C1.18886 8.9375 0.950403 8.83873 0.774588 8.66291C0.598772 8.4871 0.5 8.24864 0.5 8C0.5 7.75136 0.598772 7.5129 0.774588 7.33709C0.950403 7.16127 1.18886 7.0625 1.4375 7.0625H7.0625V1.4375C7.0625 1.18886 7.16127 0.950403 7.33709 0.774588C7.5129 0.598772 7.75136 0.5 8 0.5Z'
							fill='#FF0D0D'
						/>
					</svg>
					<span>Добавить задачу</span>
				</div>
			)}

			{isLoading && (
				<div className={styles.loader}>
					<DotSpinner size={60} speed={0.9} color='#a3a3a3' />
				</div>
			)}
			{error && <h1>Извините, анлак!</h1>}

			{tasks && tasks.length > 0
				? tasks.map(task => (
						<TaskItem task={task} remove={handleRemove} key={task.id} />
				  ))
				: !error && <TasksEmpty />}
		</div>
	)
}

export default TaskContainer
