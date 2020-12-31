# useCounter Hook

Ejemplo de uso:
```
    const { counter, increment, decrement, reset } = useCounter(10);
```

useCounter() // recibe un valor por defecto

# useFetch Hook

Ejemplo de uso:
```
    const url = 'endpoint de una api';
    const { data: null, loading: true, error: null } = useFetch(url);

```

useFetch() // recibe un valor por defecto

# useForm Hook

Ejemplo:
```
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );
    

```

useFetch() // recibe un valor por defecto