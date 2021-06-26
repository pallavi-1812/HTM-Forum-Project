import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './comp.css';

const AddQuestion = (props) => {
    return (
      <div className="container ques-container">
        <div className="row">
            <div className="col"></div>
            <div className="col-sm-12 col-md-7">
                <div className="card ques-card">
                    <a href="./index.js" className="exit-btn">&#9932;</a>
                    <div className="card-body">
                        <Form>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input type="text" id="textTitle" placeholder="Title" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Question</Label>
                                <Input type="textarea" name="text" id="descriptionText" placeholder="Enter a question"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Tags</Label> 
                                <Input type="text" data-role="tagsinput" placeholder="Press Enter to add tag"/>
                            </FormGroup>
                            <Button type="submit" className="btn ques-btn">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="col"></div>
        </div>
      </div>
    );
  }
  
  export default AddQuestion;