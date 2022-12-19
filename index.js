// Add your code here
const submitData = (name, email) => {
    const DOM = document.querySelector("body");
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,    
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        DOM.append(data.id);
      })
      .catch((message) => {
        DOM.append(message);
      });
  };
  
  
  
  
  
  
  
  