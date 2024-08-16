//Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

const axios = require('axios')

    (async function fetchData() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        } catch (err) {
            console.error(err)
        }
    })()