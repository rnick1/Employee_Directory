import React from 'react';
import { Table } from 'react-bootstrap';

function MainTable () {
    return (
            <div class="container">
            <div class="row-A"></div>
            <br/>
            <div class="row-A">
            <div class="col-xs-1 col-md-1 col-lg-1"></div>
            <div class="col-xs-10 col-md-11 col-lg-11">
                <div class="card-contact">
                <div class="row no-gutters">
                    <section class="card-body text-center">
                    <h2 class="card-title mb-1">Employees</h2>
                    <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@mdo</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>Bird</td>
                            <td>Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </Table>
                    </div>
                    </section>
                </div>
                </div>
            </div>
            <div class="col-xs-1 col-md-1 col-lg-1"></div>
            </div>
            <div class="row-tall"></div>
            </div>
    )
}

export default MainTable;