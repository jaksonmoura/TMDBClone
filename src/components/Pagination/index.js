import React from 'react'
import { PagesList, PaginationWrapper } from './Pagination.styles'
import useQuery from '../../useQuery'


const Pagination = ({totalPages = 1}) => {
    const currentPage = parseInt(useQuery().get("page")) || 1
    const query = useQuery().get("q") || ""

    const PageLinks = () => {
        const len = 5
        if (currentPage < 5) {
            let pgNums = Array.from({length: len}, (v, k) => len - k).sort(); 
            return(
                <>
                    {pgNums.map(pg => <li><a key={pg} aria-current={(currentPage === pg ? "page" : "" )}  href={`/search/?q=${query}&page=${pg}`} >{pg}</a></li>)}
                    <li className="jump-link"><a href={`/search/?q=${query}&page=${totalPages}`}>Next <i className="material-icons">keyboard_arrow_right</i></a></li>
                </>
                )
        } else {
            let prevNums = Array.from({length: len}, (v, k) => currentPage - k).filter(i => i > 0 && i <= totalPages).sort(); 
            let nextNums = Array.from({length: len-1}, (v, k) => (currentPage+1)  + k).filter(i => i <= totalPages);
            let pgNums = prevNums.concat(nextNums)
            return(
                <>
                    <li className="jump-link"><a href={`/search/?q=${query}&page=1`}><i className="material-icons">keyboard_arrow_left</i> Previous</a></li>
                    {pgNums.map(pg => <li><a key={pg} aria-current={(currentPage === pg ? "page" : "" )} href={`/search/?q=${query}&page=${pg}`} >{pg}</a></li>)}
                    {( pgNums[pgNums.length - 1] !== totalPages ? <li className="jump-link"><a href={`/search/?q=${query}&page=${totalPages}`}>Next <i className="material-icons">keyboard_arrow_right</i></a></li> : "")}
                    
                </>

            )
        }
        
    }


    return(
        <PaginationWrapper>
            <PagesList>
                <PageLinks />
            </PagesList>
        </PaginationWrapper>
    )
}

export default Pagination