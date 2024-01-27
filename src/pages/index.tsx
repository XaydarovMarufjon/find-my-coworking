import Button from "../components/button";

export default function Index() {
  return (
   <>
    <div>All coworkings pages</div>
    <h1>home </h1>

    <div className="p-6">
      <img src="" alt="" />
      <h2 className="text-lg font-semibold">Ground zero</h2>
      <p className="text-stone-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta rerum voluptatum cumque eveniet distinctio iure nobis, provident beatae atque, officia repellat modi earum ut blanditiis, consequatur explicabo sit maxime eius.</p>
      <Button to="/coworking" className="mt-5">View details</Button>
    </div>
   </>
)}
