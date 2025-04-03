import ComponentB from "./ComponentB";
import { useUserContext } from "../context/userContextData";

const ComponentA = () => {

    const { userData } = useUserContext();

    return (
        <div className="box">
            <h1>Component A</h1>

            <h2>User Data</h2>
            {userData.map((user, index) => (
                <div key={index}>
                    <p>Name: {user.name}</p>
                    <p>Gender: {user.gender}</p>
                    <p>Age: {user.age}</p>
                    <p>Profession: {user.profession}</p>
                    <p>Marital Status: {!user.isMarried ? "Single" : "Married"}</p>
                </div>
            ))}
            <ComponentB />
        </div>
    )
}

export default ComponentA
