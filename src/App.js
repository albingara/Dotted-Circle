import './style/main.scss'
import DottedCircle from './components/DottedCircle';

const App = () => {

  const numberOfLines = 38; // Here we put the total number of lines that we want
  const activeLines = 27; // Here we put the number of the active lines

  return (
    <div className='container'>
      <div className='wrapper'>
        <h1>Task Completion Goal</h1>
        <DottedCircle numberOfLines={numberOfLines} activeLines={activeLines} />
        <h2>You have completed <span>{activeLines}</span> of <span>{numberOfLines}</span> tasks that were assigned to you today!</h2>
      </div>
    </div>

  )
};

export default App;
