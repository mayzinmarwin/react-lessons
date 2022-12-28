import React from 'react'

const EmpListing = () => {
    useEffect(()=>){
        fetch()
    }
  return (
    <div className="container">
        <div className="card-title">
            <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
            <table className="table table-bordered">
                <thead className="bg-dark text-white">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default EmpListing