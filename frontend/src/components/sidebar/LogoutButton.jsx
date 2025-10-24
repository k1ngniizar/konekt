import {BiLogOut} from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'
import { FaSpinner } from 'react-icons/fa6';

function LogoutButton() {
  const {loading, logout} = useLogout();
  return (
    <button onClick={logout} className='mt-auto'>
      {loading ? <FaSpinner className='animate-spin'/> : <BiLogOut/> }
    </button>
  )
}

export default LogoutButton