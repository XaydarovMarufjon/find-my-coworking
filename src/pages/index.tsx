import Container from "../components/container";
import CoworkingCard from "../components/coworking-cards";

export default function Index() {
  return (
   <Container>
    <div>All coworkings pages</div>
    <h1>home </h1>
    
   <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
    {/* {[...Array(20).map()]} */}
    <CoworkingCard title={"csec"} desc={"good"} thumbSrc="https://www.google.com/url?sa=i&url=https%3A%2F%2Finsideevs.com%2Fnews%2F566539%2Ftesla-working-feverishly-on-roadster%2F&psig=AOvVaw1fSaNkcJA2oydUGb_bJhYy&ust=1706463361608000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiZi8iN_oMDFQAAAAAdAAAAABAD" />
    <CoworkingCard title={"cyber"} desc={"good"} thumbSrc={""} />
    <CoworkingCard title={"vite"} desc={"good"} thumbSrc={""} />
   </div>
  
   </Container>
)}
