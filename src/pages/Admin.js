import React from 'react'
import { Route } from 'react-router';
import Feedback from './Feedback';
import './Admin.css'

export default function Admin() {
    return (
        <div>
        <button><a href="/Documents">Manager Documents</a></button>
        <button><a href="/Users">Manager Users</a></button>
        <button><a href="/AdminFeedback">Teacher Feedback</a></button>
        <button><a href="/AdminFeedback">Guest Teacher Feedback</a></button>
        </div>
    )
}
