// import node module libraries
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap'

// import media files
import Logo from 'assets/images/brand/logo/logo-icon.svg'

const SignUp = () => {
  return (
    <Fragment>
      <Row className='align-items-center justify-content-center g-0 min-vh-100'>
        <Col lg={5} md={5} className='py-8 py-xl-0'>
          <Card>
            <Card.Body className='p-6'>
              <div className='mb-4'>
                <Link to='/landing'>
                  <Image src={Logo} className='mb-4' alt='' />
                </Link>
                <h1 className='mb-1 fw-bold'>註冊</h1>
                <span>
                  已經有帳號了?{' '}
                  <Link to='/auth/sign-in' className='ms-1'>
                    登入
                  </Link>
                </span>
              </div>
              {/* Form */}
              <Form>
                <Row>
                  <Col lg={12} md={12} className='mb-3'>
                    {/* User Name */}
                    <Form.Label>姓名</Form.Label>
                    <Form.Control
                      type='text'
                      id='username'
                      placeholder='姓名'
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className='mb-3'>
                    {/* email */}
                    <Form.Label>電子郵件</Form.Label>
                    <Form.Control
                      type='email'
                      id='email'
                      placeholder='輸入電子郵件'
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className='mb-3'>
                    {/* Password */}
                    <Form.Label>密碼</Form.Label>
                    <Form.Control
                      type='password'
                      id='password'
                      placeholder='**************'
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className='mb-3'>
                    {/* Checkbox */}
                    <Form.Check type='checkbox' id='check-api-checkbox'>
                      <Form.Check.Input type='checkbox' />
                      <Form.Check.Label>
                        I agree to the
                        <Link to='/pages/terms-and-conditions'>
                          Terms of Service{' '}
                        </Link>{' '}
                        and{' '}
                        <Link to='/pages/terms-and-conditions'>
                          Privacy Policy.
                        </Link>
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>
                  <Col lg={12} md={12} className='mb-0 d-grid gap-2'>
                    {/* Button */}
                    <Button variant='primary' type='submit'>
                      註冊
                    </Button>
                  </Col>
                </Row>
              </Form>
              <hr className='my-4' />
              <div className='mt-4 text-center'>
                {/* Facebook */}
                <Link
                  to='#'
                  className='btn-social btn-social-outline btn-facebook'
                >
                  <i className='fab fa-facebook'></i>
                </Link>{' '}
                {/* Twitter */}
                <Link
                  to='#'
                  className='btn-social btn-social-outline btn-twitter'
                >
                  <i className='fab fa-twitter'></i>
                </Link>{' '}
                {/* LinkedIn */}
                <Link
                  to='#'
                  className='btn-social btn-social-outline btn-linkedin'
                >
                  <i className='fab fa-linkedin'></i>
                </Link>{' '}
                {/* GitHub */}
                <Link
                  to='#'
                  className='btn-social btn-social-outline btn-github'
                >
                  <i className='fab fa-github'></i>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default SignUp
