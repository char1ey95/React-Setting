import { getContacts } from '../contacts'

export async function loader() {
    // 페이크로 데이터를 요청하는 곳
    const contacts = await getContacts();
    return { contacts };
  }