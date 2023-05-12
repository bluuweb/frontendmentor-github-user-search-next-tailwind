"use client";

import FormSearchUser from "@/components/FormSearchUser";
import UserCardInfo from "@/components/UserCardInfo";
import { useState } from "react";
import { User } from "@/interfaces/user";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    console.log(res);
    if (!res.ok) {
      setUser(null);
      setError("User not found");
      return;
    }
    setUser(await res.json());
    setError(null);
  };

  return (
    <>
      <FormSearchUser getUser={getUser} />
      {user && <UserCardInfo user={user} />}
      {error && (
        <div className="rounded-lg bg-red-500 p-4 text-white">{error}</div>
      )}
    </>
  );
};
export default Home;
