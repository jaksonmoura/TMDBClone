import React from 'react'
import { HeaderSection, HeaderBox, Input, Form, Button } from './Header.styles'

const Header = () =>{
    return(
        <HeaderSection>
            <HeaderBox>
                <a href="/" className="logo"><img src="/logo.svg" alt="TMDB Clone" /></a>

                <Form action="">
                    <Input type="search"/>
                    <Button><i className="material-icons">search</i></Button>
                </Form>
            </HeaderBox>
        </HeaderSection>
    )
}

export default Header