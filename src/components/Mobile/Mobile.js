import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap';
import Figure from "../../assets/resources/mid-news.png";
import avatar from "../../assets/resources/avatar.png";
import TuiXach from "../../assets/resources/tuixach.jpg";
import PhongCanh from "../../assets/resources/screen-shot-2019-02-28-at-1-01-43-pm-copy@2x.png";
import './Mobile.css';
import '../../assets/style/res.css';

function UserPost(props) {
    return (
        <Container >
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
const items = [
    {
        id: 1,
    src: <UserPost
        Image = {Figure}
        Name = "Túi Xách"
        title = " Cheap Airline Tickets Great Ways To Save"
        Avatar = {avatar} Ava="Avatar"
        postname = "Bài viết của Ollie Buchanan"
        tagName = "Oliebu"
        category = "Giáo dục - Tin tức"/>
    },
    {
        id: 2,
        src: <UserPost
            Image = {Figure}
            Name = "Túi Xách"
            title = " Cheap Airline Tickets Great Ways To Save"
            Avatar = {avatar} Ava="Avatar"
            postname = "Bài viết của Ollie Buchanan"
            tagName = "Oliebu"
            category = "Giáo dục - Tin tức"/>
    },
    {
        id: 3,
   src:  <UserPost
        Image = {PhongCanh}
        Name = "Greate way to save"
        title = " Cheap Airline Tickets Great Ways To Save"
        Avatar = {avatar} Ava="Avatar"
        postname = "Bài viết của Ollie Buchanan"
        tagName = "Oliebu"
        category = "Giáo dục - Tin tức"/>
    },
    {
        id: 4,
    src: <UserPost
    Image = {TuiXach}
    Name = "Túi Xách"
    title = " Cheap Airline Tickets Great Ways To Save"
    Avatar = {avatar} Ava="Avatar"
    postname = "Bài viết của Ollie Buchanan"
    tagName = "Oliebu"
    category = "Giáo dục - Tin tức"/>
}
]

class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.id}
                >
                    <div> {item.src}</div>
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>

            </Carousel>
        );
    }
}

export default class Mobile extends Component{
    render() {
        return(
            <div className="mobile">
            <Container container-fluid = "true">
                <Row  className="content-news">
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
                    <Col className="slider">
                        <div className="col-slider">
                        <Slider/>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}