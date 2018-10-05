// Higher Order Component (HOC) - a component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share !</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

// require authentification
const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please log to see the info</p>}     
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentification(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info = "There are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info = "These are the details" />, document.getElementById('app'))