import './ListItem.css'

const ListItem = ({text, completed, onClick}) => {
    
    return <div className={`list-item ${completed ? 'completed' : ''}`} onClick={onClick}>
        {text}
    </div>
}

export default ListItem