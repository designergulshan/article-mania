const WriterInfo = () => {
  return (
    <div className="mb-8 flex items-center">
      <img
        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
        alt=""
        width="48"
        className="cursor-pointer rounded-full border border-gray-300 hover:border-green-500 mb-0 mr-2 p-1 transition ease-in-out"
      />

      <div className="text-sm text-gray-600">
        <strong>Albert Dera</strong>{" "}
        <time className="text-gray-400">Jun 19, 2014</time>
      </div>
    </div>
  );
};

export default WriterInfo;
