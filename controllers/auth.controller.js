import connection from '../models/connection.js';

const ID = 'ITITIU18125';

export const signin = async (req, res) => {
    const { username, password } = req.body;

    connection.connect((err) => {
        if (err) throw err;

        console.log('connected');
    })

    if (username === password && username === ID) res.status(200).json({ message: 'Login successfully!' });

    res.status(404).json({ message: 'Incorrect username or password!' });
}