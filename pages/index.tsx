import { useGetUser } from "@/repo/api-hooks/useGetUser";
// import CubeBox from './../components/cube/index';

export default function Home() {
  const { data: userData } = useGetUser(1, {});

  return (
    <main>
      <section> 
        {userData?.data.map((user) => (
          <div key={user.id}>
            {user.id} {user.first_name} {user.last_name}
          </div>
        ))}
      </section>
      <p>Landing page with test 23</p>
      {/* <CubeBox/> */}
      <p className="text-[4rem]">Landing page</p>
    </main>
  );
}
