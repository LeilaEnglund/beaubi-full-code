import React, { Component } from 'react'
import Example from "./form";
import { Button, Form } from 'semantic-ui-react'

function validateF(Brand, Product, Category,URL) {
  /*return {
    Brand: Brand.length > 0,
    Product: Product.length > 0,
    Category: Category.length > 0,
    URL: URL.length > 0 
  };*/
  if (URL.length)
  {
    return {
      Brand: Brand.length ? true : false,
      Product: Product.length ? true : false,
      Category: Category.length ? true : false,
      URL: false
    };
  }else if(Brand.length || Product.length || Category.length){
      return {
      Brand: Brand.length ? false : true,
      Product: Product.length ? false : true,
      Category: Category.length ? false : true,
      URL: URL.length ? true : false
    };
  }else{
    return {}
  }
}
function validateU(URL)
{
  return {
    URL: URL.length === 0 
  };
}
export default class newForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Brand: "",
      Product: "",
      Category:"",
      URL: "",

      everFocusedBrand: false,
      everFocusedProduct: false,
      everFocusedCategory: false,
      everFocusedURL: false,
      touched: {
        Brand: false,
        Product: false,
        Category: false,
        URL: false
      },
    };
    
  }

  handleBrandChange = evt => {
    this.setState({ Brand: evt.target.value });
  };
handleURLChange = evt => {
    this.setState({ URL: evt.target.value });
    console.log(this.state.URL.length>0)
  };
  handleProductChange = evt => {
    this.setState({ Product: evt.target.value });
    console.log(this.state.Product.length>0)
  };
  handleCategoryChange = evt => {
    this.setState({ Category: evt.target.value });
  };
  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };
  canBeSubmitted = () => {
    if ((this.state.URL.length==0 &&(this.state.Product.length>0 && this.state.Brand.length>0 && this.state.Category.length>0 && this.state.Brand.length>0)))
    {
      return false
    }else if(this.state.URL.length>0 && ((this.state.Product.length==0 && this.state.Brand.length==0 && this.state.Category.length==0 && this.state.Brand.length==0))){
      console.log('b')
      return false
    }else{
      return true
    }
}

  handleSubmit = (evt) => {
    if (this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }else{
      evt.preventDefault();
      const { Brand, Product, Category } = this.state;
      alert(`Added row to google spreadsheet:  Brand: ${Brand} Product: ${Product} Category: ${Category}`);
      
    }
  };
  render() {
    const errors = validateF(this.state.Brand, this.state.Product,this.state.Category, this.state.URL);
    var val = this.canBeSubmitted()
    const isDisabled = val;
    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };
    return (
    <Form name="test-form" id="form1" onSubmit={this.handleSubmit}>
    <Form.Group widths={3}>
      <Form.Input name='URL' 
                  className={shouldMarkError('URL') ? "error" : ""} 
                  label='Add URL'
                  type="text" 
                  value={this.state.URL} 
                  onChange={this.handleURLChange} 
                  onBlur={this.handleBlur("URL")} 
      placeholder='https://www.company.com/product' />
    </Form.Group>

    <p>Or simply add manually details of the product</p>
    <Form.Group widths={2}>
     <Form.Input name='Brand' 
                 label='Brand' 
                 className={shouldMarkError('Brand') ? "error" : ""} 
                 type="text" 
                 value={this.state.Brand} 
                 onChange={this.handleBrandChange} 
                 onBlur={this.handleBlur("Brand")}
                 placeholder='Brand name' />
      <Form.Input name='Product'
                  label='Product'
                  className={shouldMarkError('Product') ? "error" : ""} 
                  type="text" 
                  value={this.state.Product} 
                  onChange={this.handleProductChange}
                  onBlur={this.handleBlur("Product")}
                  placeholder='Product name' />  
      <Form.Input name='Category' 
                  label='Category'
                  className={shouldMarkError('Category') ? "error" : ""} 
                  type="text" 
                  value={this.state.Category}
                  onBlur={this.handleBlur("Category")} 
                  onChange={this.handleCategoryChange} 
                  placeholder='ex. Clenser, shampo, mascara...' />
    </Form.Group>
    <Button disabled={isDisabled} type='submit' id="form-submit">Submit</Button>
  </Form>
    );
  }
}

