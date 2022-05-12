import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import RecipesInformation from '../views/RecipesInformation';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<RecipesInformation />} />
            </Routes>
        </BrowserRouter>
    )
}