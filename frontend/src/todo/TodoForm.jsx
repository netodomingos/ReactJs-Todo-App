import React from 'react'
import Grid from '../template/Grid'
import Button from '../template/Button'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input
                id='description'
                className='form-control'
                placeholder='Adicione uma tarefa'
                value={props.description}
                onChange={props.handleChange}
            />
        </Grid>
        <Grid cols='12 3 2'>
            <Button style='primary' icon='plus' onClick={props.handleAdd} />
        </Grid>
    </div>
)