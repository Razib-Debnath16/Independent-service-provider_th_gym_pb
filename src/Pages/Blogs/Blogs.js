import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center text-primary mb-2'>Different between Authorization and Authentication?</h2>
            <div className='question-1'>
                <div >
                    <h3>Authorization</h3>
                    <p>Authorization stands for process of specifying access rights/privileges to resources related to internet security.It's validates user's permission.Occurs after Authentication.</p>
                </div>
                <div>
                    <h3>Authentication</h3>
                    <p>Authentication stands for process of confirming the truth of an attribute of a single piece of data claimed true by an entity.It's verify user's credentials.Occurs before Authorization.</p>
                </div>
            </div>
            <h3 className='text-center text-primary mb-2'>Why are you using Firebase? What other options do you have to implement Authentication?</h3>
            <div className='question-2'>
                <p>Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick.That's why i am using firebase.
                    Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.</p>
            </div>
        </div>
    );
};

export default Blogs;