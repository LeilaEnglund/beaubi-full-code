import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import $ from 'jquery'
const FormExampleUnstackableGroup = () => (
  <Form name="test-form" id="form1">
    <Form.Group widths={3}>
      <Form.Input name='URL' label='Add URL' placeholder='https://www.company.com/product' />
    </Form.Group>
    <p>Or simply add manually details of the product</p>
    <Form.Group widths={2}>
     <Form.Input name='Brand' label='Brand' placeholder='Brand name' />
      <Form.Input name='Product'label='Product' placeholder='Product name' />  
      <Form.Input name='Category' label='Category' placeholder='ex. Clenser, shampo, mascara...' />
    </Form.Group>
    <Button type='submit' id="form-submit">Submit</Button>
  </Form>
)


export default FormExampleUnstackableGroup