import DateBlock from './components/DateBlock'
import Header from './components/Header'
import TaskContainer from './components/TaskContainer'
import './scss/all.scss'

function App() {
	return (
		<>
			<Header />
			<div className='wrapper'>
				<DateBlock />
				<TaskContainer />
			</div>
		</>
	)
}

export default App
