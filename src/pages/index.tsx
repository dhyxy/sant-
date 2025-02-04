import { api } from "~/utils/api";

export default function Home() {
  const { data: video, isLoading } = api.video.getFirstVideo.useQuery();

  if (isLoading) return <p>Loading...</p>;
  if (!video) return <p>No video found</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">hey santé 👋🏽</h1>
      <video controls className="w-full max-w-lg rounded-lg shadow-lg">
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="px-6 pt-2">
        <h3>some summaries:</h3>
        <ul className="list-disc p-4">
          <li>
            first coded when i played minecraft as a kid, didn&apos;t know what i was doing though, fell in love with
            it again when i noticed how much my friends enjoyed a simple little game i made in first year university
          </li>
          <li>
            manager at first industry experience at SAP told me to aim perfection for the end user, rather than
            perfection for other engineers
          </li>
          <li>
            operator observability tool wasn&apos;t as instantaneous as we wanted it to be, discovered by interviewing
            and understanding operator workflows. diagnosed by implementing a pooling strategy to always have stand
            by instances, decreasing time it takes to connect from 5+ minutes to less than 1 second
          </li>
          <li>
            designed, implemented, and deployed email subscriptions to the facebook ad library -- a tool aimed
            at journalists and academics for political news. because of the nature of the application, usage spikes
            during election times. designed intensively for scalability at every step of the process, leveraging
            asynchronous jobs and SQL optimizations, ultimately, hit 15k users after deployment and scaled seamlessly
          </li>
          <li>
            $130-140k is good :) 
          </li>
          <li>github repo link <a href="https://github.com/dhyxy/sant-">here</a></li>
        </ul>
      </div>
    </div>
  );
}
