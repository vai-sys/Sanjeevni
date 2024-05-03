const SideBar = () => {
  return (
    <div className="flex h-screen bg-zinc-900">
      <div className="flex flex-col w-64 bg-black">
        <div className="flex items-center justify-center h-16">
          <button className='flex items-center justify-between gap-3 py-3 mt-5 text-white items px-14 hover:bg-gray-700'>
            <span className='text-xl font-bold'>+</span>
            <p className='mt-1 text-sm font-semibold'>New Chat</p>
          </button>
        </div>
        <div className="flex flex-col p-4">
          chat
        </div>
      </div>

      <div className="flex-1 p-4">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="ml-4">
            <p className="text-white">you</p>
          </div>
        </div>
        <div className="p-4 text-white mb-9">
          <p>Your Question To GPT.</p>
        </div>

        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-green-900 rounded-full"></div>
          <div className="ml-4">
            <p className="text-white">ChatGPT</p>
            <p className="text-gray-400">Online</p>
          </div>
        </div>

        <div className="p-4 text-white mb-9">
          <p>This is a chat message from ChatGPT.</p>
        </div>

        <div className="">
          <form className="flex items-center justify-evenly">
            <textarea
              className="w-full p-3 py-2 mb-2 font-semibold text-white bg-black rounded-md outline-none mr-9 focus:ring-2 focus:ring-white"
              placeholder="Type your message here..."
            />
            <button
              type="submit"
              className="px-4 py-3 text-white bg-black rounded-md hover:bg-slate-900"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SideBar;






