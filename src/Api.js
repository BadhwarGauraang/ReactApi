import React, { useEffect, useState } from 'react'

const Api = () => {

  const style = {
    width: '18rem'
  }
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020')
      .then((response) => {
        return response.json();
      }).then((data) => {
        let values = data.results
        setUsers(values);
      })
  }

  useEffect(() => {
    getUsers();
    console.warn(users);
  }, []);

  return (
    <>

      <div className="container ">
      
        <div className="row ">
          {users.map((user, id) => {
            return (
            
              <div className="col-sm-12 col-lg-4 col-md-4 mb-5  justify-content-center">
                <div className="card justify-content-center " style={style} key={id} >

                  <img src={user.picture.large} className="card-img-top" alt="..." />
                  <div className="card-body ">
                    <h2 className="card-title text-lg"><strong> {user.name.title} {user.name.first} {user.name.last}</strong></h2>
                    
                  </div>
                  <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Gender: {user.gender}</strong> </li>
                    <li className="list-group-item"><strong>Email: {user.email}</strong></li>
                    <li className="list-group-item"><strong>City: {user.location.city}</strong></li>
                    <li className="list-group-item"><strong>State: {user.location.state}</strong></li>
                    <li className="list-group-item"><strong>Country: {user.location.country}</strong></li>
                    <li className="list-group-item"><strong>Postcode: {user.location.postcode} </strong></li>
                    <li className="list-group-item"><strong>Coordinates: Latitudes: {user.location.coordinates.latitude} & Longitudes: {user.location.coordinates.longitude}</strong></li>
                    
                  </ul>

                </div>

              </div>



            )
          })

          }


        </div>
      </div>


    </>
  )
}

export default Api
