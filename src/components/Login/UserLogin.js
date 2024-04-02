import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, selectCurrentUser } from "./userSlice";
import login from '../../app/assets/images/login.png';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button,
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validateUserLogin from "./validateLogin";
import { useNavigate } from "react-router-dom";

const UserLoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (values) => {
        console.log(values);
        const currentUser = {
            id: Date.now(),
            username: values.username,
            password: values.password,
        };
        dispatch(setCurrentUser(currentUser));
        setLoginModalOpen(false);
    };

    const handleLogout = () => {
        dispatch(setCurrentUser(null));

        navigate('/')
    };

    return (
        <>
            <span className="navbar-text ml-auto">
                {currentUser ? (
                    <div className="logout-btn text-danger" >
                        <span className="username-span me-3">{currentUser.username}</span>
                        <Button onClick={handleLogout} className="bg-danger me-5">
                            LOGOUT
                        </Button>
                    </div>
                ) : (
                    <Button
                        outline
                        onClick={() => setLoginModalOpen(true)}
                        className="login-btn mt-2"
                        style={{ border: 'none' }}
                    >
                        <img className="tv" src={login} alt="Login Button" />
                        <h3 className="login-text">LOGIN</h3>
                    </Button>
                )}
            </span>
            <Modal className='text-muted' isOpen={loginModalOpen}>
                <ModalHeader toggle={() => setLoginModalOpen(false)}>Login</ModalHeader>
                <ModalBody style={{ backgroundColor: '#FFC0CB' }}>
                    <Formik
                        initialValues={{ username: "", password: "" }}
                        onSubmit={handleLogin}
                        validate={validateUserLogin}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Field
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    className="form-control"
                                />
                                <ErrorMessage name="username">
                                    {(msg) => <p className="text-danger">{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Field
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-control"
                                />
                                <ErrorMessage name="password">
                                    {(msg) => <p className="text-danger">{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Button type="submit" color="warning">
                                Login
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};
export default UserLoginForm;
