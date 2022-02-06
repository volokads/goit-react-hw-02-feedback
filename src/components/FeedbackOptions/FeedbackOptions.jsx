import s from './FeedbackOption.module.css'
import PropTypes from "prop-types"
function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <>
            <ul className={s.ul}>
                {Object.keys(options).map(key => {
                    return (
                        <li className={s.list} key={key}>
                            <button
                                className={s.btn}
                                name={key}
                                onClick={onLeaveFeedback}
                                type="button">
                                {key}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
    
}

export { FeedbackOptions }

FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func
}