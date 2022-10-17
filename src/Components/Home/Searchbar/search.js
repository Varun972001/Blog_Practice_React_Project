import './search.css'

function Search(props)
{
    return (<>
    <div className='searchbar'>
        <form onSubmit={props.submitform}>
            <input 
            type="text" 
            placeholder="Search By Category"
            value={props.value}
            onChange={props.handleSearch}>
            </input>
            {props.value && <span onClick={props.clearSearch}>X</span>}
            <button>Go</button>
        </form>
    </div>
    </>)
}

export default Search;