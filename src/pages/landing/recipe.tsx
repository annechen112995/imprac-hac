import React from 'react';

const testData = [
  {
    "name": "Fried Pork with Banana Cream",
    "ingredients": [
      {
        "name": "Banana",
        "quantity": 1,
        "unit": "pairs"
      },
      {
        "name": "Pork Chop",
        "quantity": 600,
        "unit": "grams"
      }
    ],
    "steps": [
      {
        "step_name": "Prepare the meat"
      }, {
        "step_name": "Rinse the banana"
      }
    ]
  },
  {
    "name": "Banana Mayo Sandwich",
    "ingredients": [
      {
        "name": "Bananas",
        "quantity": 1,
        "unit": "pairs"
      },
      {
        "name": "Bread Slice",
        "quantity": 2,
        "unit": "loaf"
      },
      {
        "name": "Mayo Sauce",
        "quantity": 2,
        "unit": "tablespoons"
      }
    ],
    "steps": [
      {
        "step_name": "Peel the Banana"
      }, {
        "step_name": "Spread the Mayo onto the Bread Slice"
      }, {
        "step_name": "Place the Banana onto the Bread Slice"
      }, {
        "step_name": "Place the second Bread Slice on top of the Banana"
      }
    ]
  },
  {
    "name": "Fried Pork with Apple Cream",
    "ingredients": [
      {
        "name": "Apple",
        "quantity": 200,
        "unit": "pairs"
      },
      {
        "name": "Pork Chop",
        "quantity": 600,
        "unit": "grams"
      }
    ],
    "steps": [
      {
        "step_name": "Prepare the apples"
      }, {
        "step_name": "Rinse the meat"
      }
    ]
  },{
    "name": "Dorito Cereal",
    "ingredients": [
      {
        "name": "Dorito Chips",
        "quantity": 10,
        "unit": "chips"
      },
      {
        "name": "Mountain Dew",
        "quantity": 1,
        "unit": "Can"
      }
    ],
    "steps": [
      {
        "step_name": "Crush the Dorito Chips in a bowl"
      }, {
        "step_name": "Pour in the Mountain Dew"
      }
    ]
  },{
    "name": "Pringles Jam",
    "ingredients": [
      {
        "name": "Pringles",
        "quantity": 50,
        "unit": "Chips"
      },
      {
        "name": "Water",
        "quantity": 5,
        "unit": "Ounces"
      }
    ],
    "steps": [
      {
        "step_name": "Crush 25 chips of Pringles into dust"
      }, {
        "step_name": "Add 5 ounces of water to the Pringle dust, mix until it's jam like"
      }, {
        "step_name": "Pour in rest of the Pringles into the jam and mix well"
      }
    ]
  }
];

interface RecipeProps {
  randIdx: number;
}

export default function Recipe({
  randIdx
}: RecipeProps) {
  return (
    <div className={`
      flex flex-col items-center
      w-full
    `}>
      <p className="py-5">
        <b>Recipe Name:</b> {testData[randIdx].name}
      </p>

      <p className="pt-5 font-bold">
       Ingredients:
      </p>
      <div className="flex flex-col">
        {testData[randIdx].ingredients.map((ingred, i) => {
          return (
            <p>
              {ingred.name}, {ingred.quantity} {ingred.unit}
            </p>
          );
        })}
      </div>

      <p className="pt-5 font-bold">
        Steps:
      </p>
      <div className="flex flex-col">
        {testData[randIdx].steps.map((step, i) => {
          return (
            <p>
              {i + 1}.){' '}{step.step_name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
