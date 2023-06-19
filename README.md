
# Getting Started with Create React App🎬
Here I have made Four React project.







- Restaurant
- Counting App
- Chats App
- Todos App
- Weather App




## Restaurant App😃
This is the first project where you can check their daily routine.Like Breakfast,Lunch,Snacks,Dinner.

- It will Show the data according to the selected meal.
- If you select Breakfast,So it will only show the    Breakfast meal.
- And So on it will show daily routine meal according to you.







## Projects Screenshots🚀

![App Screenshot](https://github.com/Gaurav6299/ReactProject/blob/master/ScreenShots/breakfast.PNG?raw=trueG)

![App Screenshot](https://github.com/Gaurav6299/ReactProject/blob/master/ScreenShots/dinner.PNG?raw=true)

![App Screenshot](https://github.com/Gaurav6299/ReactProject/blob/master/ScreenShots/restaurant.PNG?raw=true)

## Tools⚒️
- React
- Html
- CSS

## Functionality
- Hooks(useState,useEffect,useReducer)
- Made Dummy Api
- Props (Parent Child Communication)
- Components





## Usage/Examples✍️

```javascript
import React from 'react'

const Navbar = ({ filterItem, uniqueData }) => {
  return (
    <>
      <nav className='navbar'>

        <div className="btn-group">
          {
            uniqueData.map((cur) => {
              return (
                <button className='btn-item' onClick={()=>filterItem(cur)}>{cur}</button>

              )
            })
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar
```


## 

Insert gif or link to demo


## Installation 👍 

Create React App with npx

```bash
 npx create-reacta-app restaurant
 cd restaurant
```

Create React App with npm

```bash
 npm create-reacta-app restaurant
 cd restaurant
```

## Available Scripts 📝
Run React Application run the command.

```bash
npm start
```

If you want to Run React Application Using yarn,First you need to install yarn by the following command.

```bash
npm i -g yarn
```

Then run react application using yarn 
```bash
yarn start
```

## Snippets
Here I am using two snippets for react.
- ES7+ React/Redux/React-Native snippets
- JavaScript (ES6) code snippets
    
