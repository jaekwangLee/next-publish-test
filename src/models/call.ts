import { atom, selector } from 'recoil';
import { ADDRESS_TYPES } from './types';
import { fetchAddressListByPageAPI } from '@libs/call';

export interface UserAddress {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  job?: string;
}

export interface AddressListResponse {
  total_pages: number;
  total: number;
  support: string;
  per_page: number;
  page: number;
  data: UserAddress[];
}

/***
 * interface를 통해 각 모델을 설계
 * ****/

export interface AddressManager {
  fetchList(page: number): Promise<UserAddress[]>;
  // add...
}

class CallAddress implements AddressManager {
  async fetchList(page: number): Promise<UserAddress[]> {
    const { data }: { data: AddressListResponse } = await fetchAddressListByPageAPI(page);
    console.log('data: ', data);
    return data.data;
  }

  // ...
}

/*****
 * 실제 모델의 역할을 Recoil이 수행
 * ****/

export const addressPageState = atom<number>({
  key: ADDRESS_TYPES.ADDRESS_PAGE,
  default: 0
});

export const fetchAddressList = selector({
  key: ADDRESS_TYPES.ADDRESS_LIST,
  get: async ({ get }) => {
    const page = get(addressPageState);
    return new CallAddress().fetchList(page);
  }
});
