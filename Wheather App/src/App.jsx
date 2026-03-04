import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchWeather } from "./actions/weatherAction";
import Search from "./Components/Search";
import CurrentWheather from "./Components/CurrentWheather";
import ForecastDetails from "./Components/ForecastDetails";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather('indore'))
  }, [])
  return (
    <>
      <div className="flex flex-col gap-3 items-center p-5 w-full">
        <Search/>
      <CurrentWheather/>
      <ForecastDetails/>
      </div>
    </>
  )
}

export default App
