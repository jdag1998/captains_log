const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// class component
class Show extends React.Component {

    render() {
        
        const { log } = this.props

        return (
            <div title={`${log.title} details`} >
                <h1>Show Page</h1>
                <p>
                    The {log.title} is {log.text}.
                </p>
                <p>
                    {log.shipIsBroken ? "Ship is safe!" : "Ship is broken"}
                </p>

                <button>
                    <a href={`/logs/${log._id}/edit`}>Edit</a>
                </button>

                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>

                <nav>
                    <a href="/logs">Back</a>
                </nav>
            </div>
        )
    }
}

module.exports = Show;