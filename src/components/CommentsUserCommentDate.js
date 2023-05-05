import { useState, useEffect } from 'react'
import { generarId, formatDate } from '@/helpers'
import Image from 'next/image'

const CommentsUserCommentDate = ({userComments}) => {

    const [ visibleUserComments, setVisibleUserComments ] = useState([])

    useEffect(()=>{
      setVisibleUserComments(userComments)
    },[userComments])
  
    const loadNextUserComment = (forward) =>{
      let changeUser = 0
  
      setVisibleUserComments(currentList  =>{
        if(!forward){
          changeUser = currentList.length-1
        }
        const filterList = currentList.filter((v,i) => i!= changeUser)
        return forward ? [...filterList, currentList[0]] : [currentList[currentList.length-1], ...filterList]
      })
    }

  return (
    <section className='px-10 py-24'>
        <div className='flex w-full'>
          <button className='text-4xl text-primary-site hover:text-primary-light' onClick={()=>loadNextUserComment(false)}>{"<"}</button>
          <div className='comment-container px-10 justify-around flex flex-wrap h-96 overflow-hidden'>
            { !visibleUserComments ? <div></div> : 
              visibleUserComments.map( user =>{
                return(
                  <div className='text-primary-light border-solid border-primary-light border-2 p-5 comment-box h-96' key={generarId()}>
                    <div className="flex mb-5">
                      <Image src={user.avatar} height={50} width={50} alt="imagen del usuario"/>
                      <h3 className='my-auto ml-5'>{user.user}</h3>
                    </div>
                    <p className='bg-secondary-dark p-2 h-3/5 overflow-y-scroll scrollbar'>
                        {user.comment}
                    </p>
                    <div className='mt-5'>{formatDate(user.date)}</div>
                  </div>
                )
              })
            }
          </div>
          <button className='text-4xl text-primary-site hover:text-primary-light' onClick={()=>loadNextUserComment(true)}>{">"}</button>
        </div>
      </section>
  )
}

export default CommentsUserCommentDate