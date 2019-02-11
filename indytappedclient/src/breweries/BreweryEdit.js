import React from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class BreweryEdit extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            brewery: '',
            rating: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.userbreweries.id,
            brewery: this.props.userbreweries.Brewery,
            rating: this.props.userbreweries.Rating,
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(event)
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Edit a Brewery</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Input id="brewery" type="text" name="brewery" value={this.state.Brewery} placeholder="Enter a brewery" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="rating" id="rating" value={this.state.Rating} onChange={this.handleChange} placeholder="Type">
                                    <option>Rating</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Input>
                            </FormGroup>
                            <Button type="submit" color="secondary"> Submit </Button>
                        </Form>
                    </ModalBody>

                </Modal>

            </div>
        )
    }
}


export default BreweryEdit;