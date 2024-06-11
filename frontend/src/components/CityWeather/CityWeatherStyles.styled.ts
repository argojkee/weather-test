import styled from "styled-components";


export const CityWeatherStyles = styled.li<{ $isMoreInfo: boolean }>`
list-style: none;
border: 1px solid black;
border-radius: 12px;
padding: 4px 12px;
    .main-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .temperature {
        color: orange;
    }

    .more-info {
        display: flex;
        justify-content: space-between;
        max-height: ${props => props.$isMoreInfo ? '500px' : '0'};
        overflow: ${props => props.$isMoreInfo ? 'auto' : 'hidden'};
        opacity: ${props => props.$isMoreInfo ? 1 : 0};
        transition: max-height 0.5s linear, opacity 0.5s linear;
    }



    img {
        width: 60px;
        height: 60px;
    }
    .arrow {
        transition: transform 250ms linear;
        transform: ${props => (props.$isMoreInfo ? 'rotate(180deg)' : 'rotate(0deg)')}
    }

    .title {
        width: 15%;
        text-align: center;
    }

    .time {
        width: 40%;
    }
    `