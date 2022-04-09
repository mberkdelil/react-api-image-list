import { useState } from "react";

const SearchBar = (props) => {

    const [entry, setEntry] = useState("");

    const onFormSubmit = e => {
        e.preventDefault();
        props.onSearchSubmit(entry);
    }

    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <div className="ui massive icon input">
                        <input onChange={(e) => setEntry(e.target.value)} value={entry} type="text" placeholder="Search..." />
                        <i className="search icon"></i>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;