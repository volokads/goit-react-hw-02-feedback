import PropTypes from "prop-types"
function Statistics({ good, bad, neutral, total, positivePercentage }) {
    return (
        <>
           <p >Good: {good}</p>
            <p>Bad: { bad}</p>
            <p>Neutral: {neutral}</p>
            <p>Total: {total} </p>
            <p>Positive feedback: { positivePercentage} % </p> 
        </>
    )
}

export { Statistics }

Statistics.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
}