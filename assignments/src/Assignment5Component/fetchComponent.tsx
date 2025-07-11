let newData : [] = []; 
export default function FetchComponent() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      newData = data
    })
    .catch((err) => console.log(err));

  return (
    <>
      {newData.map((items, index) => <div key={index}> {JSON.stringify(items)} </div>)}
    </>
  );
}