import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={220}
    height={360}
    viewBox="0 0 220 360"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="40" y="44" rx="12" ry="12" width="138" height="186" /> 
    <rect x="48" y="372" rx="3" ry="3" width="110" height="6" /> 
    <rect x="23" y="271" rx="3" ry="3" width="180" height="11" /> 
    <rect x="24" y="295" rx="3" ry="3" width="80" height="11" /> 
    <rect x="159" y="326" rx="4" ry="4" width="48" height="29" /> 
    <rect x="27" y="326" rx="0" ry="0" width="67" height="25" />
  </ContentLoader>
)

export default MyLoader