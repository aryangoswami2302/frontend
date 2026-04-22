import React from 'react'

function Home() {
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">city</th>
       <th scope="col">state</th>
        <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Home