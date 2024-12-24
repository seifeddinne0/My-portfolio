function Horizontaline({ children }) {
    return (<div className="flex items-center justify-center mb-5">
      <hr className="md:w-1/3 w-24 h-[1px] my-8 bg-red-200 border-0 rounded dark:bg-gray-700" />
      {children}
      <hr className="md:w-1/3 w-24 h-[1px] my-8 bg-red-200 border-0 rounded dark:bg-gray-700 " />
  </div>);
  }
  
  export default Horizontaline;