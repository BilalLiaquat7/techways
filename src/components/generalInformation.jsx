export function GeneralInformation() {
  return (
    <div className="bg-white w-11/12 grid md:grid-cols-2 my-14 gap-4">
      <div className="left grid grid-cols-1 gap-8">
        <h1 className="text-3xl text-blue-900">General Information</h1>
        <div className="space-y-4">
          <p></p>
          <p className="text-blue-900">
            Eu dictumst cum at sed euismood condimentum?
          </p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
        <div className="space-y-4">
          <p></p>
          <p className="text-blue-900">
            Eu dictumst cum at sed euismood condimentum?
          </p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
        <div className="space-y-4">
          <p></p>
          <p className="text-blue-900">
            Eu dictumst cum at sed euismood condimentum?
          </p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
        <div className="space-y-4">
          <p></p>
          <p className="text-blue-900">
            Eu dictumst cum at sed euismood condimentum?
          </p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
      </div>
      <div className="right flex flex-col bg-gray-100 rounded-md px-12">
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
