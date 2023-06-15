import React, { useState, useEffect } from 'react'
import "./style.css"



const getLocalStorageData = () => {
  const list = localStorage.getItem("myTodoList");
  if (list.length > 0) {
    return JSON.parse(list);
  }
  else {
    return [];
  }
}


const Todos = () => {
  // It is used to hold a input value.
  const [inputData, setInputdata] = useState("");
  // This is used to store  item  in a state after click the Add button.
  const [item, setItem] = useState(getLocalStorageData())

  const [isEditItemm, setIsEditItem] = useState("");
  const [toggaleButton, setToggaleButton] = useState(false)


  // Add Item
  const addItem = () => {
    if (!inputData) {
      alert("Please fill the data?")
    }
    else if (inputData && toggaleButton) {
      setItem(
        item.map((ele) => {
          if (ele.id === isEditItemm) {
            return { ...ele, name: inputData }
          }
          return ele;
        })
      )
      setToggaleButton(false)
      setInputdata("");
      setIsEditItem("")
    }
    else {
      const myInputData = {
        id: new Date().getTime().toString(),
        name: inputData
      }
      setItem([...item, myInputData]);
      setInputdata("");
    }
  }

  // Delete Item
  const deleteItem = (id) => {
    const updatedData = item.filter((ele) => {
      return ele.id != id;
    })
    setItem(updatedData)

  }


  // Add Data in LocalStorage
  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(item))
  }, [item])


  // edit Item
  const editItem = (id) => {
    const isEditItem = item.find((ele) => {
      return ele.id === id;
    })
    console.log("isEdit", isEditItem)
    setIsEditItem(id);
    setInputdata(isEditItem.name);
    setToggaleButton(true)

  }

  return (
    <>
      <div className="main-section">
        <div className="sub-section">
          <figure>
            <div className="image-section">
              <img src="./image/todos.jpg" alt="todos" />
              <h3>Add Your List Here ✌️</h3>
            </div>

          </figure>
          <div className='input-section' style={{ marginBottom: "20px" }}>
            <input type="text" placeholder='✍️ Add Item' value={inputData} onChange={(event) => setInputdata(event.target.value)} />
            {toggaleButton ? <i className="far fa-edit edit-item" onClick={addItem}></i> : <i className="fa fa-plus add-item" onClick={addItem}></i>}

          </div>



          {/* New  Product*/}
          <div className='input-section '>
            {item.map((ele) => {
              return (
                <div className='new-product' key={ele.id}>
                  <h1>{ele.name}</h1>
                  <div className="icon">
                    <i className="far fa-edit product left" onClick={() => editItem(ele.id)}></i>
                    <i className="fa fa-trash product trash" onClick={() => deleteItem(ele.id)}></i>
                  </div>
                </div>
              )

            })}


          </div>



          {/* Check List */}
          <div className="check-list">
            <button className='btn' data-sm-link-text="Remove" onClick={() => setItem([])}>Check List</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todos