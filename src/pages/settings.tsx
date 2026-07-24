/* Import */
import { Link } from "react-router";

/* Links account page to Home and Settings pages */
function settings() {
  return (<>
    <Link to="/">Home (Placeholder)</Link>
    <hr />
    <Link to="/account">Account (Placeholder)</Link>
    </>
  )
}

export default settings