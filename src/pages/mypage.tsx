import { AddressProvider } from '@components/address/AddressProvider';

/******
 * Layout안에 여러 Provier를 넣는다거나
 * Container로 Provier를 감싼다거나
 * 그냥 Provider하나만 위치시키거나 경우에따라 처리
 ****/

function MyPage() {
  return (
    <>
      <AddressProvider />
      {/* <MyProfileProvider /> */}
      {/* <UserEventListProvider /> */}
      {/* ... */}
    </>
  );
}

export default MyPage;
