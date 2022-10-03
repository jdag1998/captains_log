const React = require('react')
// const DefaultLayout = require('../views/layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { logs } = this.props

        return (
            <div title="All Logs" >
                    <h1>Logs Index Page</h1>
                    <ul id="logs-index">
                        {logs.map((log) => {
                            return (
                                <li key={log._id}>
                                    The <a href={`/logs/${log._id}`}>{log.title}</a> is {log.text}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/logs/new">Create a new Log</a>
                    </nav>
            </div>
        )
    }
}

module.exports = Index;