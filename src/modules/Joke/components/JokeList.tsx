import JokeModel from '@/modules/Joke/services/Joke.model';

async function JokeList() {
  const jokes = await JokeModel.all();
  return (
    <div className="bg-gray-800 p-2 rounded w-full max-w-[500px]">
      <p className="text-sm text-slate-400 px-5 text-center mb-5">
        Here&apos;s the data returned directly from the Database.
      </p>
      <code className="max-w-[380px] mb-16 text-center text-slate-300">
        {JSON.stringify(jokes, null, 2)}
      </code>
    </div>
  );
}

export default JokeList;
