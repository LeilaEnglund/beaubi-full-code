import React, { Component } from 'react'
import Example from "./form";
import { Button, Form } from 'semantic-ui-react'
import $ from "jquery";
function validateF(Brand, Product, Category,URL) {

  if (URL.length)
  {
    return {
      Brand: Brand.length ? true : false,
      Product: Product.length ? true : false,
      Category: Category.length ? true : false,
      URL: false,
      Message:"The following field(s) should be empty (Input a new URL, not a Product): "
    };
  }else if(Brand.length || Product.length || Category.length){
      return {
      Brand: Brand.length ? false : true,
      Product: Product.length ? false : true,
      Category: Category.length ? false : true,
      URL: URL.length ? true : false,
      Message:"The following field(s) should not be empty (Input a new product, not an URL): "
    };
  }else {
    return {
      Brand: Brand.length ? false : true,
      Product: Product.length ? false : true,
      Category: Category.length ? false : true,
      URL: true,
      Message: 'No input detected, please enter an URL or a Product.'
    };

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
      Message: "",
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
  };
  handleProductChange = evt => {
    this.setState({ Product: evt.target.value });
    
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
      $('.message').fadeOut(150)
      return false
    }else if(this.state.URL.length>0 && ((this.state.Product.length==0 && this.state.Brand.length==0 && this.state.Category.length==0 && this.state.Brand.length==0))){
      $('.message').fadeOut(150)
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
      if($('.message').hasClass('warning')){
        $('.message').removeClass('warning');
        $('.message').addClass('success');
        $('.message').show(0,function(){
           $('#no').hide();
           $('#yes').show();
           $('.message').hide(3500,function(){
              $('#yes').hide();
              $('#no').show();
              $('.message').removeClass('success');
              $('.message').addClass('warning');
           });
        });
      }
      this.state.touched['Brand'] = false;
      this.state.touched['Product'] = false;
      this.state.touched['Category'] = false;
      this.state.touched['URL'] = false;    
    }
  };
  render() {
    const errors = validateF(this.state.Brand, this.state.Product,this.state.Category, this.state.URL);
    var val = this.canBeSubmitted()
    const isDisabled = val;
    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      $(".headerM span").remove();
      $("#err"+field).remove();
      if(hasError && shouldShow)
      {

        $('.headerM').append('<span>'+errors['Message']+'</span>')
        $('.message ul').append('<li id="err'+field+'">'+field+'</li>');
        $('.message').fadeIn();
      }else{
        $("#err"+field).remove();
        $(".headerM span").remove();
      }
      return hasError ? shouldShow : false;
    };
    return (
    <Form name="test-form" method="GET" id="form1" onSubmit={this.handleSubmit}>
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

