import React, { useEffect } from 'react'
import useQuery from '../../useQuery'
import { HeaderSection, HeaderBox, Input, Form, Button } from './Header.styles'

const Header = () =>{
    let q = useQuery().get("q")
    const searchTermRef = React.useRef("")

    useEffect(() => {
        searchTermRef.current.value = q
    })



    return(
        <HeaderSection>
            <HeaderBox>
                <a href="/" className="logo"><img src="/logo.svg" alt="TMDB Clone" /></a>

                <Form action="/search" method="get">
                    <Input name="q" type="search" ref={searchTermRef} />
                    <Button><i className="material-icons">search</i></Button>
                </Form>
            </HeaderBox>
        </HeaderSection>
    )
}

export default Header