import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    CardText,
    Col,
    CardImg,
    CardBody,
    Container,
    Row
} from 'reactstrap';

//style
const rowMargin={
    margin:20
}

//props:courses
class EuCourses extends Component{
    render() {
        return <div>{
            this.props.courses.map((rowCourses)=>{
            const rowCoursesList = rowCourses.map((course) => {
                return (
                    <Col sm="3">
                        <Card>
                            <CardImg top width="100%" src={course.pic} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{course.cardTitle}</CardTitle>
                                <CardText>{course.carText}</CardText>
                                <CardText>
                                    <small className="text-muted">{course.sum}</small>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                );
            });

            return (
                <Row style={rowMargin}>{rowCoursesList}</Row>
            );
        })

      }
      </div>

    }
}

export  default  EuCourses;