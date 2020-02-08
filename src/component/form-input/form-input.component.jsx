import React from 'react';

import { Group,FormInputContainer, FromInputLabel } from './form-input.styles';

const FormInput = ({handleChange,label,...otherProps}) => (
    <Group >
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {
            label?(
            <FromInputLabel
                className={otherProps.value.length ? 'shrink' : ''}
            >
                {label}
            </FromInputLabel>
            )
            :null
        }
    </Group>
)

export default FormInput;