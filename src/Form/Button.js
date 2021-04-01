const Button = ({ enabled }) => (
    <button type="submit" disabled={!enabled}>Confirmer</button>
)

export default Button;