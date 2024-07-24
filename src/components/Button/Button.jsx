export const Button = ({ children,onClick }) => {
  return (<button onClick={()=>onClick()    } className="w-[100%] md:w-[100%] px-4 md:px-2 py-2 md:py-1 rounded-2xl bg-red-700 text-center text-white">{children}</button>);
};
