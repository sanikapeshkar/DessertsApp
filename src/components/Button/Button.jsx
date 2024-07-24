export const Button = ({ children,onClick }) => {
  return (<button onClick={()=>onClick()    } className="w-[100%] px-4 py-2 rounded-2xl bg-red-700 text-center text-white">{children}</button>);
};
