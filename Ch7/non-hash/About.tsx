import app, {Component} from 'apprun';

export default class extends Component {
  state = 'About';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
    </div>
  }

  update = {
    '/About': state => state,
  }
}

