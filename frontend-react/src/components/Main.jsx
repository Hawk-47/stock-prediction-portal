import React from 'react'
import Button from './Button'

const Main = () => {
    return (
        <>
            <div className='container'>
                <div className='pt-5 text-center bg-light-dark rounded'>
                    <h1 className='display-4 text-light'>Welcome to Stock Prediction Portal</h1>
                    <p className='text-light lead'>The Stock Prediction Portal is a smart platform that helps users analyze stock market trends and predict future stock prices using machine learning. It provides real-time updates and valuable insights, allowing investors to make informed decisions. The portal is designed to assist traders, students, and researchers in understanding market behavior more effectively. With its accurate predictions and easy-to-use interface, it becomes a useful tool for anyone interested in the stock market.</p>
                    <Button text="Login" class="btn btn-outline-info" />
                </div>
            </div>
        </>
    )
}

export default Main