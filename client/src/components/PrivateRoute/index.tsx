import { connect }        from "react-redux"
import { PrivateRouteI }  from "../../interfaces"
import Dashboard          from "../../Sections/Dashboard"

const PrivateRoute = ( { auth, children }: PrivateRouteI ) => {
    
  return !auth.log.token ? children : <Dashboard />
}

const mapStateToProps = (state: any) => state

export default connect(mapStateToProps, null)(PrivateRoute)
