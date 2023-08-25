
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios for making API requests
import "./FoodMenu.css";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
function FoodMenu({ items, title, updateItem }) {
  const itemCount = items.length;
  const [showAddItem, setShowAddItem] = useState(false);
  const [newItemName, setNewItemName] = useState(""); // New state to hold the input value

  const handleAddItemClick = () => {
    setShowAddItem(true);
  }; 

  const asd = useLocation();
  const handleNewItemSubmit = async () => {
    try {
        const response = await axios.post(`http://localhost:5000/${title}`, {"name":newItemName, "id":newItemName})
        window.location.reload();
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
};



  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
          <p>Current {title} Count: {itemCount}</p>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${title.toLowerCase()}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <br></br>
          {showAddItem && (
    <div>
      <input
        onChange={(event) => setNewItemName(event.target.value)}
        value={newItemName}
        placeholder={`Enter a new ${title.toLowerCase()}`}
      />
      <button onClick={handleNewItemSubmit}>Create Item</button>
      <button onClick={() => setShowAddItem(false)}>Cancel</button>
    </div>
  )}
    {!showAddItem && (
      <button onClick={handleAddItemClick}>Add Item</button>
    )}
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;