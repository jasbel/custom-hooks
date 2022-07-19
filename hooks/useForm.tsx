import {useState} from 'react';

export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const onDoubleChange = <K extends Object>(value: K, field: keyof T, value2: K, field2: keyof T) => {
    setState({
      ...state,
      [field]: value,
      [field2]: value2,
    });
  };

  const onChangeAll = (states: T) => {
    setState({...state, ...states});
  };

  const onReset = () => {
    setState(initState);
  };

  return {
    ...state,
    dataForm: state,
    onChange,
    onDoubleChange,
    onChangeAll,
    onReset,
  };
};
