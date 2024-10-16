

const MyComponent = () => {

    const a = 'halo'
    const b = 25
    const c = [1, 2, 3]
    const d = {
        name: 'atd',
        age: 25
    }

    return (
        <>
            <h1>Hi, I'm ATD</h1>
            <p>{a} - {b} - {JSON.stringify(c)} - {JSON.stringify(d)}</p>

            //Code JS in React: use {}
            <div>{console.log('Hello World!')}</div>
        </>
    )
}

export default MyComponent