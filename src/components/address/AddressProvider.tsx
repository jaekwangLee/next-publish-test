import useAddress from '@viewModels/useAddress';
import { AddressHeaderView } from './HeaderView';
import { AddressListController } from './ListController';

/***
 * viewModel을 가져와 적절한 컴포넌트에 data-binding
 **/

export const AddressProvider = () => {
  const list = useAddress();
  // const list = [];
  return (
    <>
      <AddressHeaderView />
      <AddressListController list={list} />
    </>
  );
};
