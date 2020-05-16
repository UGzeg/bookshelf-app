import styled from "styled-components";
import {Card} from "reactstrap";

export const StyledBookCard = styled(Card)`
        height: 500px;
        .card-img-top {
            height: 250px;
        }
        .card-text {
            text-align: justify;
        }
        #rating{
            text-align: center;
        }
`;