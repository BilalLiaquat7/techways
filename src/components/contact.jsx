export function Contact() {
    return (
      <div className="bg-white w-4/5  my-14 gap-16">
        
        <div className="right flex flex-col bg-gray-100 rounded-md px-12 w-1/2">
          <h1 className=" py-12 text-2xl text-blue-900">Ask a Question</h1>
          <input
            className="px-4 h-12 my-4 border border-gray-200 rounded-lg outline-blue-200"
            type="text"
            placeholder="Your name *"
          />
          <input
            className="px-4 h-12 my-4 border border-gray-200 rounded-lg outline-blue-200"
            type="text"
            placeholder="Subject *"
          />
          <textarea
            className="p-4 border border-gray-200 outline-blue-200 rounded-lg"
            rows="5"
            placeholder="Type your message *"
          />
          <button className=" w-fit bg-pink-600 px-12 py-3 my-6 rounded-md text-white hover:text-white hover:bg-pink-700">
            Send Mail
          </button>
        </div>
      </div>
    );
  }
  