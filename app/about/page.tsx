import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="container container--narrow">
        <div className="hero-inner">
          <p>ABOUT</p>
        </div>
        <section className="about-section">
          <h1 className="hero-title">About Backyard Bird Tracker</h1>

          <p>
            Backyard Bird Tracker began with a simple idea: Birdwatching doesn't
            have to be complicated to be fun.
          </p>

          <p>
            Some of the most memorable bird sightings don't happen on remote,
            difficult hiking trails or once-in-a-lifetime vacations. They happen
            in our own backyards, at the kitchen window, or while enjoying a
            quiet morning on the patio. Those everyday moments are worth
            noticing and worth remembering.
          </p>

          <p>That's why I created Backyard Bird Tracker.</p>
        </section>

        <section className="about-section">
          <h2>Why I Built All This</h2>

          <p>
            I like birds. I've always enjoyed watching them, but I’ve found that
            most birding tools were designed for a different purpose than what I
            wanted.
          </p>

          <p>
            Many excellent apps help identify birds or contribute observations
            to scientific projects. Sure, they’re valuable tools, but I wanted
            something simpler.
          </p>

          <p>
            I wanted an easy way to remember the birds that visited my own yard.
            Something that could eventually answer questions like:
          </p>

          <ul>
            <li>When did the hummingbirds first arrive this spring?</li>
            <li>Have I seen a Rose-breasted Grosbeak this year?</li>
            <li>Which birds have been visiting most often lately?</li>
          </ul>

          <p>
            I realized that keeping track of those small moments made
            birdwatching even more fun. The more I recorded, the more I noticed.
            The more I noticed, the more I wanted to record what I saw. And on
            and on....
          </p>

          <p>That simple idea became Backyard Bird Tracker.</p>

          <p>
            All that’s true, as far as it goes, but there’s really a step or two
            before that that really got me going with this.
          </p>

          <p>
            One day I asked ChatGPT for ideas for apps that I could design. One
            of them was about tracking the birds I saw.
          </p>

          <p>
            I immediately thought, “That’s it! That’s what I’ve been looking
            for.” And so I’ll say it: The rest is history.
          </p>
        </section>

        <section className="about-section">
          <h2>My Philosophy</h2>

          <p>
            Philosophy may be too philosophic a word to use here, but what I
            mean is this: Everything here at Backyard Bird Tracker is built
            around one simple idea—a journey, so to speak.
          </p>

          <h3>Start noticing.</h3>

          <p>
            The free Backyard Bird Tracker
            <Link href="/starter-kit">Starter Kit</Link> helps new (and
            not-so-new) birdwatchers begin paying more attention to the birds
            around them.
          </p>

          <h3>Learn and reflect.</h3>

          <p>
            The <Link href="/articles">Articles</Link> share ideas, tips, and
            observations that help you enjoy backyard birdwatching a little more
            each day.
          </p>

          <h3>Remember.</h3>

          <p>
            The <Link href="/app">Backyard Bird Tracker app</Link> (also free)
            gives you an easy way to keep a personal journal of the birds you've
            seen, making it simple to look back at what you’ve seen in the past
            days, weeks, months, and (eventually) years.
          </p>

          <p>
            It's not about building the biggest life list or competing with
            anyone else. It's about enjoying the birds that visit your own
            little corner of the world.
          </p>
        </section>

        <section className="about-section">
          <h2>About Me</h2>

          <p>
            My name is Gary Sonnenberg, but you can call me Papasonn. I've spent
            much of my life enjoying the outdoors, taking photographs, and,
            especially the past several years, just watching the birds.
          </p>

          <p>
            I have a handful of feeders—tube, peanut, box, hummer, suet—in my
            backyard. When it’s too hot or too cold here in Wisconsin to sit
            outside and watch them, I can still see them on the other side of
            the French doors in my dining room.
          </p>

          <p>
            Backyard Bird Tracker brings together my interests in birdwatching,
            technology, and helping people—in this case, by creating a simple
            tool that makes an everyday hobby more enjoyable.
          </p>

          <p>
            I hope this project encourages people of all experience levels—from
            complete beginners to lifelong birdwatchers—to slow down, look
            outside, and appreciate the birds that share our neighborhoods.
          </p>
        </section>

        <section className="about-section">
          <h2>Looking Ahead</h2>

          <p>
            Backyard Bird Tracker is continuing to grow with new articles,
            improvements to the app, and additional resources for backyard
            birdwatchers.
          </p>

          <p>
            My goal isn't to build the biggest birding website on the
            internet—though how cool would that be! It's to build a place that
            helps people notice, record, and enjoy the birds that share their
            everyday lives.
          </p>

          <p>
            If Backyard Bird Tracker helps you smile when an old feathered
            friend returns to your yard, then it's doing exactly what I hoped it
            would.
          </p>
        </section>
      </div>
    </main>
  );
}
