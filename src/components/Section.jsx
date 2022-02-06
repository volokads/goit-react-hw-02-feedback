import PropTypes from "prop-types"
function Section({ title, children }) {
    return (
        <section>
            <h1>{title}</h1>
            { children}
        </section>
    )

}
export { Section }

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}