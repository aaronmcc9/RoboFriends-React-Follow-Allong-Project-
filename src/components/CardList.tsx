import React from "react";
import Card from "./Card";
import { Robot } from "../containers/App";

interface CardListProps{
    robots: Robot[]
}

const CardList = ({ robots }: CardListProps) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return <Card
                        key={i}
                        robot={robots[i]} />
                })
            }
        </div>
    )
}

export default CardList;