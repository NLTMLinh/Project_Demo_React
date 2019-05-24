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
                    <th>Tên hiển thị</th>
                    <th>Mật khẩu</th>
                    <th>Tuổi</th>
                    <th>Số điện thoại</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.length > 0 ? (
                    this.props.users.map(user => (
                        <tr key={user._id}>
                            <th scope="row">{this.props.users.indexOf(user) + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.displayName}</td>
                            <td>{user.passWord}</td>
                            <td>{user.age}</td>
                            <td>{user.phone}</td>
                            <td className="d-flex justify-content-around">
                                <Edit user={user}/>
                                <Delete id={user._id}/>
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