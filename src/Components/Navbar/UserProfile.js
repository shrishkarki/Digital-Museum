import React from 'react'

const UserProfile = ({setStatusDropdown , statusDropdown}) => {
  return (
    <div className=''>
      <div class="flex flex-wrap justify-center" onClick={()=>setStatusDropdown(!statusDropdown)}>
  <div class="w-6/12 sm:w-4/12 px-4 cursor-pointer">
  <figure className='w-[40px] h-[40px] border-2 rounded-full border-black'> <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="shadow rounded-full max-w-full h-auto align-middle border-none" /></figure>
  </div>
</div>


     
    </div>
  )
}

export default UserProfile