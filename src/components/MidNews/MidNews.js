import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Figure from "../../assets/resources/mid-news.png";
import avatar from "../../assets/resources/avatar.png";
import './MidNews.css';
import '../../assets/style/res.css';

function UserPost(props) {
    return (
        <Container>
            <Row className='section-mid-news'>
                <Col className="p-0">
                    <img src={props.Image} className="figure" alt={props.Name}/>
                </Col>
                <Col>
                    <Row>
                        <div className="figure-caption">
                            <div className="title">
                                {props.title}
                            </div>
                            <div className=" content">
                                <div className="avatar">
                                    <img src={props.Avatar} alt={props.Ava}/>
                                </div>
                                <div className="post-name">
                                    <span>{props.postname}</span>
                                    <br/>
                                    <span className="tag-name">@{props.tagName}</span>
                                </div>
                            </div>

                        </div>
                    </Row>
                </Col>
                <Col className="category">
                    <div className="align-self-end"><a href="#">{props.category}</a></div>
                </Col>
            </Row>
        </Container>
    )
}

export default class MidNews extends Component {
    render() {
        return (
            <div className="mid-news">
                <Container>
                    <Row>
                        <Col>
                            <div className="crash-course-col">
                                <div className="crash-course">
                                    <div className="crash-course-title">
                                        <div>How to Be Really Good at Marketing in 2020</div>
                                    </div>
                                    <div className="crash-course-button">
                                        <button type="button" className="btn btn-primary crash-button-start"> Start the
                                            Crash Course
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <UserPost
                                Image={Figure}
                                Name="Túi Xách"
                                title=" Cheap Airline Tickets Great Ways To Save"
                                Avatar={avatar} Ava="Avatar"
                                postname="Bài viết của Ollie Buchanan"
                                tagName="Oliebu"
                                category="Giáo dục - Tin tức"/>
                        </Col>
                        <Col>
                            <UserPost
                                Image={Figure}
                                Name="Túi Xách"
                                title=" Cheap Airline Tickets Great Ways To Save"
                                Avatar={avatar} Ava="Avatar"
                                postname="Bài viết của Ollie Buchanan"
                                tagName="Oliebu"
                                category="Giáo dục - Tin tức"/>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}