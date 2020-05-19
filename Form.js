import React from 'react'

const Form = (props) => {
    const { values, onInputChange, onSubmit } = props;

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add a team member!</h2>
                <button>Submit</button>
            </div>
            <div>
                <label>
                    Username
                    <input
                        type='text'
                        placeholder='Enter your username'
                        maxLength='20'
                        name='username'
                        value={values.username}
                        onChange={onInputChange}
                    />
                </label>
                <label>
                    Email
                    <input
                        type='text'
                        placeholder='Enter your Email Adress'
                        maxLength='30'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />

                </label>
                <label>
                    Role
                    <select name='role' value={values.role} onChange={onInputChange}>
                        <option value=''>Select a Role</option>
                        <option value='UIDev'>UI Dev</option>
                        <option value='FrontEndDev'>Frontend Dev</option>
                        <option value='BackEndDev'>Backend Dev</option>
                        <option value='DataScienceDev'>Data Science Dev</option>
                    />
                    </select>
                </label>
            </div>
        </form>
    );   
};

export default Form;

