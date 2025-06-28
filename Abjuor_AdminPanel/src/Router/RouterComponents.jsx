import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from '../components/Form/LoginForm';
import Dashboards from '../pages/Dashboards';
import Orders from '../pages/Orders';
import UserAccount from '../pages/UserAccount';
import SideBar from '../components/sideBar/SideBar';
import Layout from '../components/Layout/Layout'
import AddProducts from '../pages/AddProducts';
import SideBarLayuot from '../components/SideBarLayout/SideBarLayuot';
import AllProducts from '../pages/AllProducts';

function RouterComponents() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/" element={<SideBarLayuot />}>
                    <Route path="dashboard" element={<Dashboards />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="user-accounts" element={<UserAccount />} />
                    <Route path="add-products" element={<AddProducts />} />
                    <Route path="all-product-list" element={<AllProducts />} />
                </Route>
            </Routes>
        </Layout>
    );
}

export default RouterComponents;
