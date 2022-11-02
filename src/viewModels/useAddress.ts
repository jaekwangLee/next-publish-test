import { useRecoilValue } from 'recoil';
import { addressPageState, fetchAddressList } from '@models/call';

/***
 * 전통적인 viewModel의 역할을 custom hook이 수행
 **/

function useAddress() {
  const list = useRecoilValue(fetchAddressList);
  return list;
}

export default useAddress;
