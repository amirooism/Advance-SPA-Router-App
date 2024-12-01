import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EventRootsLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
export default EventRootsLayout