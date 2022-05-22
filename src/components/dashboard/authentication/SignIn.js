// import node module libraries
import { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap'

// import media files
import Logo from 'assets/images/brand/logo/logo-icon.svg'

import { loginUser } from './../../../features/user/userSlice'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [values, setValues] = useState(initialState)
  const { user, isLoading } = useSelector((store) => store.user)

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/instructor')
      }, 1500)
    }
  }, [user])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setValues({ ...values, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      toast.error('請輸入所有欄位')

      return
    }

    if (isMember) {
      dispatch(loginUser({ email, password }))

      return
    }
  }

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
                <h1 className='mb-1 fw-bold'>登入</h1>
                <span>
                  還沒有帳號?{' '}
                  <Link to='/auth/sign-up' className='ms-1'>
                    註冊
                  </Link>
                </span>
              </div>
              {/* Form */}
              <Form onSubmit={onSubmit}>
                <Row>
                  <Col lg={12} md={12} className='mb-3'>
                    {/* Username or email */}
                    <Form.Label>電子郵件</Form.Label>
                    <Form.Control
                      type='email'
                      id='email'
                      name='email'
                      value={values.email}
                      onChange={handleChange}
                      placeholder='Email address here'
                    />
                  </Col>
                  <Col lg={12} md={12} className='mb-3'>
                    {/* Password */}
                    <Form.Label>密碼</Form.Label>
                    <Form.Control
                      type='password'
                      id='password'
                      name='password'
                      value={values.password}
                      onChange={handleChange}
                      placeholder='**************'
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className='mb-3'>
                    {/* Checkbox */}
                    <div className='d-md-flex justify-content-between align-items-center'>
                      <Form.Group
                        className='mb-3 mb-md-0'
                        controlId='formBasicCheckbox'
                      >
                        <Form.Check type='checkbox' label='記住我' />
                      </Form.Group>
                      <Link to='/authentication/forget-password'>
                        忘記密碼？
                      </Link>
                    </div>
                  </Col>
                  <Col lg={12} md={12} className='mb-0 d-grid gap-2'>
                    {/* Button */}
                    <Button
                      variant='primary'
                      type='submit'
                      disabled={isLoading}
                    >
                      {isLoading ? '載入中...' : '登入'}
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

export default SignIn
