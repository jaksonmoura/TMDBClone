import styled from "styled-components"

export const PaginationWrapper = styled.div`
    width: 100%;
    padding: 50px 0;
    display: inline-flex;
    justify-content: center;
`

export const PagesList = styled.ul`

    display: inline-flex;
    gap: 4px;

    li{
        width: 40px;
        height: 40px;

        &.jump-link{
            width: auto;
            &:first-of-type{
                margin-right: 4px;
                a{
                    padding-right: 4px;
                }
            }
            &:last-of-type{
                margin-left: 4px;
                a{
                    padding-left: 4px;
                }
            }
        }

        a{
            height: 100%;
            width: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--lightGrey);
            color: #000;
            border-radius: 4px;
            font-weight: 500;
            transition: all .3s ease-in-out;

            &:hover{

                background: var(--grey);
            }

            &[aria-current="page"]{
                pointer-events: none;
                cursor: default;
                color: #fff;
                background: var(--mainColor);
            }
        }
    }

`