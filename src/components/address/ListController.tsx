import React, { useState } from 'react';
import { UserAddress } from '@models/call';
import { AddressListView } from './ListView';

/***
 * 컴포넌트 내에서 수행되어야 할 작업들을 담당
 * 예를 들어, 글로벌하게 관리될 state가 아니라면
 * model/viewModel에서 state를 관리할 이유가 없음
 * controller 레벨에서 관리
 ***/

export const AddressListController = ({ list }: { list: UserAddress[] }) => {
  const [keyword, setKeyword] = useState('');

  const getNextPage = () => {};

  const searchUser = () => {};

  // do something ...

  return (
    <>
      <AddressListView list={list} />
    </>
  );
};
