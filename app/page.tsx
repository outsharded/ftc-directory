import SideMenu from "./sideMenu";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-200 text-gray-900 dark:bg-gray-900 dark:text-zinc-200">
      <div className="fixed top-0 left-0 z-10 h-screen w-64">
        <SideMenu />
      </div>
      <div className="absolute left-16 md:left-64 p-10">
        <div className="text-2xl leading-relaxed">
          <h1 className="text-4xl font-bold mb-5">Welcome to the FTC Directory by Powercut Robotics</h1>
          <p className="mb-5">
            This website is designed to signpost teams to useful resources that 
            they may not have found otherwise. Whether you&apos;re a rookie team just 
            starting out or a veteran looking for a competitive edge, we&apos;ve curated 
            a selection of links and tools to help you on your FIRST Tech Challenge 
            journey.
          </p>
          <p className="mb-5">
            Powercut Robotics is Team #25268, UK-497, and based in South London. 
            Our rookie year was during the 2023–24 Centerstage season. Beyond competing, 
            we&apos;re also a championship organization, hosting regional events and scrimmages 
            to support the FTC community.
          </p>
          <h2 className="text-3xl font-bold mt-10 mb-3">Contact Us</h2>
          <p className="mb-5">
            Have a suggestion for a resource we should include? We&apos;d love to hear from you! 
            Please email us at{" "}
            <a
              href="mailto:info@powercut-robotics.org"
              className="text-blue-500 underline"
            >
              info@powercut-robotics.org
            </a>
            , or send a message to{" "}
            <a
              href="https://discordapp.com/users/outsharded"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              @outsharded
            </a>{" "}
            on Discord.
          </p>
        </div>
      </div>
    </div>
  );
}
