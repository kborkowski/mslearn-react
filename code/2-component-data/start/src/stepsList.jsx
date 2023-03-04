import './IngredientList.css'
import React from 'react';

function StepsList(props) {
    // Create the list items using map
    const stepItems = props.steps.map((step, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index} className={ step.prepared ? 'prepared' : '' }>
                { step.step }
            </li>
        );
    });

    // return the HTML for the component
    // stepItems will be rendered as ol elements
    return (
        <ol>
            { stepItems }
        </ol>
    );
}

export default StepsList;