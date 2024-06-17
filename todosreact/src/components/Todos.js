import React, { useEffect, useState } from 'react'


// getItemFromLocalStorage
const getItemFromLocalStorage = () => {
  const list = JSON.parse(localStorage.getItem("myTodoData"))
  if (list.length != 0) {
    return list;
  }
  else return []
}

const Todos = () => {
  const [inputdata, setInputData] = useState("");
  const [addItem, setItem] = useState(getItemFromLocalStorage())
  const [editedId, setEditedId] = useState("");
  const [toggle, setToggale] = useState(false);


  // Add Items
  const addData = () => {
    if (!inputdata) {
      alert("Please write something??")
    }
    else if (inputdata && toggle) {
      setItem(
        addItem.map((ele) => {
          if (ele.id == editedId) {
            return { ...ele, name: inputdata }
          }
          return ele;
        })
      )

      setEditedId(null);
      setToggale(false);
      setInputData("");
    }
    else {
      const myInputData = {
        id: new Date().getTime().toString(),
        name: inputdata
      }
      setItem([...addItem, myInputData])  //...addItem means addItem list me pahale wala deta ko rakho or satth hi new item ko add kar do
      setInputData("")
    }
  }


  // Delete Item
  const deleteItem = (id) => {
    const updateList = addItem.filter((ele) => {
      return ele.id != id;
    })
    setItem(updateList)
  }

  // Edit Item
  const editItem = (id) => {
    const edited_item = addItem.find((ele) => {
      return ele.id == id;
    })

    setInputData(edited_item.name);
    setEditedId(id);
    setToggale(true);


  }

  // Add item in local storage
  useEffect(() => {
    localStorage.setItem("myTodoData", JSON.stringify(addItem))
  }, [addItem])

  return (
    <>
      <div className="main-section">
        <div className="sub-body">
          <img className='image' src="images/notes.webp" alt="todos" />
          <p>Add Your List Here </p>
          <input type="text" placeholder='Add Item' onChange={(e) => setInputData(e.target.value)} value={inputdata} />
          {toggle ? <i className="far fa-edit icon-btn" onClick={addData}></i> : <i className="fas fa-plus icon-btn" onClick={addData}></i>}
          {/* <i className="fas fa-plus icon-btn" onClick={addData}></i> */}


          {/* Show All Items here */}
          {addItem.map((ele, index) => {
            return <>
              <div className="show-items" key={index}>
                <div className="each-item" key={index}>


                  <h3>{ele.name}</h3>
                  <div className='icons'>
                    <i className="far fa-edit edit-btn" onClick={() => editItem(ele.id)}></i>
                    <i className="far fa-trash-alt " onClick={() => deleteItem(ele.id)}></i>
                  </div>

                </div>
              </div>
            </>
          })}

          <div className='check-list-items'>
            <button className='check-list' onClick={() => setItem([])}>CHECK LIST</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todos