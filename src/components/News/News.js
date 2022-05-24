import "./News.css";

const News = () => {
  return (
    <div>
      <section className="specialitates" id="specialitates">
        <h1 className="heading">
          Aktuālākie<span>jaunumi</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img  src="https://www.thexboxhub.com/wp-content/uploads/2022/05/csgo-logo.jpg" />
            <h3>
              TheXboxHub Why has CS:GO Never Reached a Console Edition Since the
              Original Xbox? | TheXboxHub
            </h3>
            <p>
              CS:GO is one of Valve Corporation’s biggest hits and has a huge
              following among gamers. The only thing we need to say is that
              every year the game organizes big tournaments with thousands of
              viewers. To be more precise, for example, PGL Major Stockholm 2021
              managed to reach 2.74 million viewers.{" "}
            </p>
            <form action="entry.php" method="post">
              <button type="submit" name="pieteikties" class="btn">
                Lasīt vairāk
              </button>
            </form>
          </div>
          <div className="box">
            <img  src="https://www.thexboxhub.com/wp-content/uploads/2022/05/csgo-logo.jpg" />
            <h3>
              TheXboxHub Why has CS:GO Never Reached a Console Edition Since the
              Original Xbox? | TheXboxHub
            </h3>
            <p>
              CS:GO is one of Valve Corporation’s biggest hits and has a huge
              following among gamers. The only thing we need to say is that
              every year the game organizes big tournaments with thousands of
              viewers. To be more precise, for example, PGL Major Stockholm 2021
              managed to reach 2.74 million viewers.{" "}
            </p>
            <form action="entry.php" method="post">
              <button type="submit" name="pieteikties" class="btn">
                Lasīt vairāk
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default News;
