import React, { useState } from 'react';
import Form from './Form';
import Team from './Freind';

const initialTeamList = [
    {
        username: 'Jason',
        email: 'tjason.clegg@gmail.com',
        role: 'Frontend Dev',
    },
];

const initialFormValues = {
    username:'',
    email:'',
    role:'',
};

const App = () => {
    const [ team, setTeam ] = useState(initialTeamList);
    const [ formValues, setFormValues ] = useState(initialFormValues);

    const onInputChange = (event) => {
        const { name } = event.target;
        const { value } = event.target;

        setFormValues({ 
            ...formValues, 
            [name]: value 
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (
            !formValues.username.trim() ||
            !formValues.email.trim() ||
            !formValues.role.trim() 
        ) { return 'Please enter all fields' }

        const newTeamMember = { ...formValues };

        setTeam([newTeamMember, ...team ]);

        setFormValues(initialFormValues);
    };
    return (
        <div className='App'>
            <header className='App-header'>Team Building!!</header>
            <Form 
                values={formValues}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
            />

            {
                team.map(teams => {
                    return (
                         <Team key={teams.id} details={teams} />
                     )
                })
            }
        </div>
    );
};

export default App;