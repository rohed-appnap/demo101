import { useGetUser } from "@/repo/api-hooks/useGetUser";

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
      <p>Landing page with test 15</p>
    </main>
  );
}
