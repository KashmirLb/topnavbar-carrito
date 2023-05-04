import DataContext from '@/context/DataProvider'
import { useContext } from 'react'

const useData = () => {
  return useContext(DataContext)
}

export default useData