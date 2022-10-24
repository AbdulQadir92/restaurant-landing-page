import { useState, useEffect } from "react";

import { SpecialDishesSection, CardContainer, Card, CardBody, ImageDiv } from "../styles/SpecialDishes.styled";


const SpecialDishes = () => {
    const [data, setData] = useState(null);

    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Fugiat ipsa';

    const items = [
        { name: 'Fried Chicken', price: 200, description: description, image: 'fried_chicken-min.jpg' },
        { name: 'Fruit Salad', price: 49, description: description, image: 'fruit_salad-min.jpg' },
        { name: 'Chicken Sandwich', price: 80, description: description, image: 'chicken_sandwich-min.jpg' }
    ]

    useEffect(() => {
        setData(items)
    }, [])

    return (
        <SpecialDishesSection id="dishes">
            <h1>Our Special Dishes</h1>
            <CardContainer>
                {data && data.map((item, index) => (
                    <Card key={index}>
                        <CardBody>
                            <div>
                                <h2>{item.name}</h2>
                                <h2>${item.price}</h2>
                            </div>
                            <p>{item.description}</p>
                        </CardBody>
                        <ImageDiv>
                            <img src={`http://localhost:3000/images/specialDishes/${item.image}`} alt="Special Dish" width="350" height="300" />
                        </ImageDiv>
                    </Card>
                ))}
            </CardContainer>
        </SpecialDishesSection>
    )
}

export default SpecialDishes