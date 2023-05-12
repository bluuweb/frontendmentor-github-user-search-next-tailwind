import GithubLogo from "@/components/icons/GithubIcon";

const UserCardInfo = () => {
  return (
    <article className="grid-areas rounded-xl bg-blue-900 p-2 text-white">
      <div className="section-logo grid h-20 w-20 place-content-center rounded-full bg-gray-200 p-1">
        <GithubLogo className="relative top-2 h-full w-full" />
      </div>
      <div className="section-title">
        <h2>The Octocat</h2>
        <p>@octocat</p>
      </div>
      <p className="section-date">Joined 25 Jan 2011</p>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odit
        nam expedita deserunt est quia repudiandae, fuga ut magni voluptatibus
        deleniti numquam rem accusantium dignissimos veritatis ullam eum. Ut,
        quam?
      </p>
      <div className="section-number flex justify-around bg-blue-950">
        <article>
          <p>Repos</p>
          <p>8</p>
        </article>
        <article>
          <p>Followers</p>
          <p>3938</p>
        </article>
        <article>
          <p>Following</p>
          <p>9</p>
        </article>
      </div>
      <div className="section-social md:grid md:grid-cols-2">
        <article>
          <i>Icono</i>
          <p>San Francisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>San Francisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>San Francisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>San Francisco</p>
        </article>
      </div>
    </article>
  );
};
export default UserCardInfo;
