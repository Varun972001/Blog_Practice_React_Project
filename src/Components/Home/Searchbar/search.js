import './search.css'

function Search({value,handlesearch,clearsearch,formsubmit})
{
    return (<>
    <div className='searchbar'>
        <form onSubmit={formsubmit}>
            <input 
            type="text" 
            placeholder="Search By Category"
            onChange={handlesearch}
            value={value}>
            </input>
            {value && <span onClick={clearsearch}>X</span>}
            <button>Go</button>
        </form>
    </div>
    </>)
}

export default Search;