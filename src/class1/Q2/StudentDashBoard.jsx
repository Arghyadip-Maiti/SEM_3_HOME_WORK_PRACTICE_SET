import React from 'react'
import Card from './Card'

const StudentDashBoard = () => {
  return (
    <div className='flex flex-wrap gap-4 justify-center py-6'>
        <Card name='Arghyadip Maiti' rollno={21} course='b-tech'/>
        <Card name='Arkaprava Maiti' rollno={12} course='b-tech'/>
        <Card name='Rajdip Maiti' rollno={29} course='b-sc'/>
        <Card name='Debalina Maiti' rollno={15} course='mbbs'/>
    </div>
  )
}

export default StudentDashBoard