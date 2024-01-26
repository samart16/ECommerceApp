import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const UserProfilePage = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const handleUserUpdate = () => {}

    return (
        <Container>
            <Form>
                <Form.Group controlId="username">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    disabled
                    onChange={e => setUsername(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button
                type="submit"
                onclick={handleUserUpdate}
                >
                    Update User Details
                </Button>
            </Form>
        </Container>
    )
};

export default UserProfilePage;
