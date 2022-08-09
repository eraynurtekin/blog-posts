import React from 'react'
import ReactDOM  from 'react-dom'
import SingleComment from './SingleComment'
import profile1 from './image/sarah.jpg'
import profile2 from './image/John.jfif'
import profile3 from './image/Peter.jfif'
import UserCard from './UserCard'


const App = () =>{
  return(
    <div className='ui comments'>
       <UserCard>
       <SingleComment 
       name='Sarah' 
       date='Today at 5:00PM'
       text ='It is amazing'
       picture={profile1}
       />
       </UserCard>
       <UserCard>
       <SingleComment 
       name='John' 
       date='Today at 6:00PM'
       text ='It is cool'
       picture={profile2}/>
       </UserCard>
       <UserCard>
       <SingleComment 
       name='Peter' 
       date='Today at 7:00PM'
       text ='It is not okay'
       picture={profile3}/>
       </UserCard>
       
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
