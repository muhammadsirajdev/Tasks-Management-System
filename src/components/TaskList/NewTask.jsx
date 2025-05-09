import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({data, employeeId}) => {
    const [userData, setUserData] = useContext(AuthContext)

    const handleAcceptTask = () => {
        const updatedData = userData.map(employee => {
            if (employee.id === employeeId) {
                // Update the specific task
                const updatedTasks = employee.tasks.map(task => {
                    if (task === data) {
                        return {
                            ...task,
                            newTask: false,
                            active: true
                        }
                    }
                    return task
                })

                // Update task counts
                const newTaskCount = employee.taskCount.newTask - 1
                const activeTaskCount = employee.taskCount.active + 1

                return {
                    ...employee,
                    tasks: updatedTasks,
                    taskCount: {
                        ...employee.taskCount,
                        newTask: newTaskCount,
                        active: activeTaskCount
                    }
                }
            }
            return employee
        })

        // Update context and localStorage
        setUserData(updatedData)
        localStorage.setItem('employees', JSON.stringify(updatedData))
    }

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button 
                    onClick={handleAcceptTask}
                    className='bg-blue-500 rounded font-medium py-1 px-2 text-xs hover:bg-blue-600 transition-colors'
                >
                    Accept Task
                </button>
            </div>
        </div>
    )
}

export default NewTask