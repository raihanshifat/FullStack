import React from 'react';
import { Form, Input, Button} from 'antd';
import Axios from 'axios';

class FormLayout extends React.Component{
  handleSubmit=(event,requestType,articleID) =>
  {
    event.preventDefault();
    const title=event.target.elements.title.value;
    const content=event.target.elements.content.value;
    switch(requestType)
    {
      case 'post':
        return Axios.post("http://127.0.0.1:8000/api/",{
          title:title,
          content:content
        })
        .then(res=>console.log(res))
        .catch(error=>console.err(error))
        case 'put':
          return Axios.put(`http://127.0.0.1:8000/api/${articleID}`,{
            title:title,
            content:content
          })
          .then(res=>console.log(res))
          .catch(error=>console.err(error))
      }
  }
  render(){
  return (
    <div>
      <Form onSubmitCapture={(event)=>this.handleSubmit(event,this.props.requestType,this.props.articleID)}>
        <Form.Item label="Title">
          <Input name="title" placeholder="Enter title" />
        </Form.Item>
        <Form.Item label="Content">
          <Input name="content" placeholder="Write Something" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
        </Form.Item>
      </Form>
    </div>
  );
  };
};
 
export default FormLayout;