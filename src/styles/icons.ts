import styled from "styled-components";
import {FaShoppingCart} from "react-icons/fa";
import {TbLogout} from "react-icons/tb";
import {RxMagnifyingGlass} from "react-icons/rx"

export const ShopCart = styled(FaShoppingCart)`
    cursor:pointer;
    color: var(--grey-50);
    scale: 1.5;
`

export const GetOut = styled(TbLogout)`
    cursor:pointer;
    color: var(--grey-50);
    scale: 1.5;
    margin-left: 0.5rem
`

export const MagnGlass = styled(RxMagnifyingGlass)`
    cursor:pointer;
    color: var(--grey-50);
    scale: 1.5;
    @media (min-width: 1024px) {
        display: none;
        }
`
export const MagnGlassWhite = styled(RxMagnifyingGlass)`
    cursor:pointer;
    color: var(--color-white);
    scale: 1.5;
`