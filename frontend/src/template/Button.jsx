import React from 'react'
import IF from '../template/IF'

export default props => (
    <IF test={!props.hide}>
        <button className={'btn btn-' + props.style} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </IF>
)