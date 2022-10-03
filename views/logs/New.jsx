const React = require('react')
// const  DefaultLayout = require('../layouts/DefaultLayout')

class New extends React.Component {
    render() {
        const logs = this.props.logs
        return (
            < div title="Create a new Memory for the Capitan" capitanlogos="logos">
                <h1>New Page</h1>
                <form action="/logs" method="POST">

                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" name="title" />
                    <break></break>
                    <label htmlFor="textarea">What Happen?  </label>
                    <input type="text" id="text" name="text" />
                    <break></break>
                    <label htmlFor="shipIsBroken">Is the ship broken?</label>
                    <input type="checkbox" id="shipIsBroken" name="shipIsBroken" />
                    
                    <input type="submit" value="Create a new Memory for the Capitan"/>
                </form>
                </div>
            // </DefaultLayout>
        )
    }
}

module.exports = New;