import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div className="box">
      <h2>Component B</h2>

      <ComponentC />
    </div>
  )
}

export default ComponentB
