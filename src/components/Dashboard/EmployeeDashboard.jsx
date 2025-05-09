import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // Provide a default empty object if no data is passed
  const employeeData = props.data || {
    firstName: 'Employee',
    tasks: [],
    taskCount: {
      newTask: 0,
      completed: 0,
      active: 0,
      failed: 0
    }
  }

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data={employeeData}/>
        <TaskListNumbers data={employeeData} />
        <TaskList data={employeeData} />
    </div>
  )
}

export default EmployeeDashboard