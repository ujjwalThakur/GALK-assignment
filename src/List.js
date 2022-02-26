import ListItem from "./ListItem"

const List = ({ data, onClick }) => {


    const onClickHandler = (index) =>
        () => {
            console.log('Hello')
            onClick(index)
        }

    return <div className='list' >
        {   
            data.map(({id, text, completed}, index) => <ListItem key={id} id={id} text={text} completed={completed} onClick={onClickHandler(index)}/>)
        }
    </div>
}

export default List