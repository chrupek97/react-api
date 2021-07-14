import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import ToDoTable from './components/ToDoTable';
import { getAll, deleteRowById } from './components/FetchData'

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/todos";


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postData: [],
            offset: 0,
            pageCount: 0,
            perPage: 10,
            currentPage: 0,
            props: props
        };
    }

    componentDidMount() {
        this.getData();
    }

    deleteRow(id) {
        deleteRowById(id)
            .then(res => {
                alert("Status code: " + res.status);
            })
    }

    redirectToEditWindow(id) {
        const {props} = this.state;
        let path = "/editRow/" + id;
        props.history.push(path);
    }

    pageClick = (e) => {
        const { perPage } = this.state;
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getData()
        });
    }

    getData() {
        const { perPage, offset } = this.state;
        getAll()
            .then(res => {
                if (res.status === 200) {
                    const data = res.data;
                    const slice = data.slice(offset, offset + perPage)
                    const postData = slice.map(data => {
                        return <tr>
                            <td>{data.title}</td>
                            {
                                data.completed === false ? <td>
                                    <img src="./no.png" width="50" height="50" alt="Yes sign" /></td> :
                                    <td><img src="./yes.png" width="50" height="50" alt="No sign" /></td>
                            }
                            <td>
                                <BsFillTrashFill fontSize="30" onClick={() => this.deleteRow(data.id)} />
                            </td>
                            <td>
                                <AiFillEdit fontSize="30" onClick={() => this.redirectToEditWindow(data.id)} />
                            </td>
                        </tr>;
                    });

                    this.setState({ postData: postData, pageCount: Math.ceil(data.length / perPage) });
                }
            })
    }



    render() {
        const { postData, pageCount,} = this.state;
        return (
            <ToDoTable postData={postData} pageClick={this.pageClick} pageCount={pageCount} />
        );
    }
}

export default Main;