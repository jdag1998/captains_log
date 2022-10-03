const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { log } = this.props

        return (
            <div title="edit a log" foodGroup="logs">
                <h1>Edit Page</h1>
                <form action={`/logs/${log_id}?_method=PUT`} method="POST">

                    <label htmlFor="name">Title:</label>
                    <input type="text" id="name" name="name" defaultValue={log.title} />

                    <label htmlFor="color">Text:</label>
                    <input type="text" id="color" name="color" defaultValue={log.text} />

                    <label htmlFor="shipIsBroken">Is the ship broken:</label>
                    <input type="checkbox" id="shipIsBroken" name="shipIsBroken" defaultChecked={log.shipIsBroken} />

                    <input type="submit" value="Edit log"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit