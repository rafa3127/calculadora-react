import React from "react";
import propTypes from "prop-types";

const Result = (props) => {
    const { value } = props
    return (
        <div className="result">
            <span>{value}</span>
        </div>
    )
}

Result.propTypes = {
    value: propTypes.string.isRequired
}

Result.defaultProps = {
    value: "0"
}

export default Result