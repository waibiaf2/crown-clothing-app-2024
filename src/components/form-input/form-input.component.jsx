import './form-input.styles';
import {FormInputLabel, Group} from "./form-input.styles";

const FormInput = ({label, ...otherProps}) => {
    return (
        <Group>
            <FormInput className='form-input' {...otherProps} />
            {label && (
                <FormInputLabel
                    shrink={otherProps.value.length}
                >
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;
