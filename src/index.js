import * as React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
// Modest Grid linked via public/index.html
import './css/reset.css'
import './css/style.css'

import App from './App'

// main ("ROOT") component 
class Root extends React.Component {

render() {

return (


<div className="wrapper">
<div className="row">

<div className="col-12">
  <App />
</div>

</div>
</div>


)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
