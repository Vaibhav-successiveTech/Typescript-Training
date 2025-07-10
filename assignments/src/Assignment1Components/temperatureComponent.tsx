import type { Temp } from "./tempParent";
const TemperatureComponent = (t : Temp)=>{
    return (
        <>
            {
                t.temp < 10 ? <h2> It is Cold Today </h2> : t.temp > 25 ? <h2> It is Sunny Today </h2> : <h2> It is Moderate Temperature </h2>
            }
        </>
    );
}

export default TemperatureComponent;