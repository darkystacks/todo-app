import { FC, useState } from 'react'
import { ITask } from '../../models/ITask'
import ChangeTaskPopup from '../ChangeTaskPopup'
import styles from './TaskItem.module.scss'

interface TaskItemProps {
	task: ITask
	remove: (task: ITask) => void
}

const TaskItem: FC<TaskItemProps> = ({ task, remove }) => {
	const handleRemove = (event: React.MouseEvent) => {
		event.stopPropagation()
		remove(task)
	}

	const [popupOpen, setPopupOpen] = useState(false)

	return (
		<div>
			{popupOpen && <ChangeTaskPopup setPopupOpen={setPopupOpen} task={task} />}
			<div
				className={styles.task}
				key={task.id}
				onClick={() => setPopupOpen(true)}
			>
				<div
					className={styles.taskColor}
					style={{ backgroundColor: task.color }}
				></div>
				<div className={styles.taskWrapper}>
					<h3>{task.title}</h3>
					<span>{task.body}</span>
				</div>
				<div onClick={handleRemove} className={styles.remove}>
					X
				</div>
			</div>
		</div>
	)
}

export default TaskItem
