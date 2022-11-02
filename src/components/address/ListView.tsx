import { UserAddress } from '@models/call';

export const AddressListView = ({ list }: { list: UserAddress[] }) => {
  return (
    <>
      {list.map(_address => (
        <AddressView key={_address.id} {..._address} />
      ))}
    </>
  );
};

const AddressView = ({ id, first_name, last_name }: UserAddress) => (
  <div>
    <ul>
      <li>ID: {id}</li>
      <li>FirstName: {first_name}</li>
      <li>LastName: {last_name}</li>
    </ul>
  </div>
);
