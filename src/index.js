import ReactDOM from 'react-dom/client'
import './styles.css';

import Search from './components/Search'
//import Localization from './Localization';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container'>
        <div className='findRepository'>
            <h1>FindRepository GitHub</h1>
            <span>linkedin.com/in/eltonfontes</span>
        </div>
        <Search />
    </div>
)