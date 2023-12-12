// import { useEffect } from "react";
export function TestProps({ title, description }) {
 
//   useEffect(() => {
//     console.log("modif st");
   
//   }, [st]);
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* <div>Count : {st}</div> */}
    </article>
  );
}
