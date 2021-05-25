import { useState, useEffect } from 'react';

export const useMeals = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [rawMeals, setRawMeals] = useState([]);

    // const loadMeals = async () => {
    //     setIsLoading(true);
    //     const response = await fetch('/meals');
    //     const rawMeals = await response.json();
    //     setRawMeals(rawMeals);
    //     setIsLoading(false);
    // }

    useEffect(() => {
        const loadMeals = async () => {
            const response = await fetch('/meals');
            const rawMealsResponse = await response.json();
            setRawMeals(rawMealsResponse);
            setIsLoading(false);
        }

        loadMeals();
    }, []);

    return {
        isLoading,
        meals: rawMeals.map(rawMeal => ({
            ...rawMeal,
            plannedDate: new Date(rawMeal.plannedDate),
        })),
        setMeals: setRawMeals,
    };
}