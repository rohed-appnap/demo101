type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
};

type Support = {
  text: string;
  url: string;
};

export type UserData = {
  data: User[];
  page: number;
  per_page: number;
  support: Support;
  total: number;
  total_pages: number;
};
