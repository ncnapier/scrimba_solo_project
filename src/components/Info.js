import React from 'react';
import ReactDOM from 'react-dom';
import profilePic from './profile_image.jpeg'

export default function Info(){
    return (
        <main className='info'>
            <img src={profilePic}></img>
            <h1>Nathaniel C Napier</h1>
            <h3>Software Engineer</h3>
            <a href='nattydevs.com' target='_blank'>nattydevs.com</a>
            <div className='buttons'>
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </main>
    )
}