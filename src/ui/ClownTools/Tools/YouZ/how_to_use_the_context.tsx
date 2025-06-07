import { useYouZ } from './YouZContext';

function SomeOtherComponent() {
    const { youZState, setYouZState } = useYouZ();
    
    const incrementTask = () => {
        setYouZState({
            ...youZState, // Spread existing state
            Task: youZState.Task + 1, // Update Task
            Info: "Task was incremented" // Update Info
        });
    };

    const updateInfo = (newInfo: string) => {
        setYouZState({
            ...youZState, // Spread existing state
            Info: newInfo // Update only Info
        });
    };
    
    return (
        <div>
            <h3>Current Task: {youZState.Task}</h3>
            <p>Current Info: {youZState.Info}</p>
            
            <button onClick={incrementTask} className="btn btn-primary me-2">
                Increment Task
            </button>
            
            <button 
                onClick={() => updateInfo("Info was updated at: " + new Date().toLocaleTimeString())} 
                className="btn btn-secondary"
            >
                Update Info
            </button>
        </div>
    );
}
export default SomeOtherComponent;

/**
 * 

import { useYouZ } from './YouZContext';

function SomeOtherComponent() {
    const { youZState, setYouZState } = useYouZ();
    
    return (
        <div>
            Current task: {youZState.Task}
            <button onClick={() => setYouZState({...youZState, Task: youZState.Task + 1})}>
                Increment Task
            </button>
        </div>
    );
}
 * 
 */