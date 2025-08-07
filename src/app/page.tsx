import { getCurrentSession } from "@/actions/auth";

const Home = async () => {
  const { user } = await getCurrentSession();

  return (
    <>
      <div className="uppercase">{JSON.stringify(user)}</div>
    </>
  );
};

export default Home;
