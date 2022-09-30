import React from "react"
import ContentLoader from "react-content-loader"
const MyLoader = (props) => (
    <ContentLoader
        speed={10}
        width={404}
        height={75}
        viewBox="0 0 404 75"
        backgroundColor="#1766ab"
        foregroundColor="#b9d2e4"
        {...props}
    >
        <rect x="118" y="91" rx="0" ry="0" width="1" height="0" />
        <rect x="4" y="-21" rx="0" ry="0" width="336" height="110" />
        <circle cx="68" cy="199" r="28" />
        <rect x="121" y="183" rx="0" ry="0" width="237" height="19" />
        <rect x="123" y="216" rx="0" ry="0" width="235" height="18" />
        <rect x="271" y="170" rx="0" ry="0" width="1" height="21" />
        <rect x="219" y="35" rx="0" ry="0" width="4" height="32" />
    </ContentLoader>
)
export default MyLoader
