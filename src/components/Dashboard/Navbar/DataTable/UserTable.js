import React, {Component} from "react";
import './UserTable.css'
import {Table} from "reactstrap";

import Delete from '../../../../containers/Dashboard/DeleteButton'
import Edit from '../../../../containers/Dashboard/EditButton'

export default class UserTable extends Component {
    render() {
        return (
            <Table className="ml-2 mr-2" hover={true}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên đăng nhập</th>
                    <th>Lương</th>
                    <th>Tuổi</th>
                    <th>Hình</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.length > 0 ? (
                    this.props.users.map(user => (
                        <tr key={user.id}>
                            <th scope="row">{this.props.users.indexOf(user) + 1}</th>
                            <td>{user.employee_name}</td>
                            <td>{user.employee_salary}</td>
                            <td>{user.employee_age}</td>
                            <td>{user.profile_image}</td>
                            <td className="d-flex justify-content-around">
                                <Edit user={user}/>
                                <Delete id={user.id}/>
                            </td>
                        </tr>
                    ))) : (
                    <tr>
                        <td colSpan={3}>Không có tài khoản nào đã đăng nhập</td>
                    </tr>
                )}
                </tbody>
            </Table>
        )
    }
}