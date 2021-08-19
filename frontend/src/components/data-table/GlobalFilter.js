import React from 'react'

/**
 * Global Filter Constant 
 * 
 * @param {*} param0 
 * @returns Global Filter
 */
export const GlobalFilter = ({filter, setFilter}) => {

    return (
        <div>
            <span class ="searchbar">
                Search: {' '}
                <input value={filter || ''}
                onChange={e => setFilter(e.target.value)} />
            </span>
        </div>
    )
}
