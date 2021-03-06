import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import User from './pages/User/User'
import NewPokemon from './pages/User/NewPokemon'
import MyPokemons from './pages/User/MyPokemons'
import MyProfile from './pages/User/MyProfile'
import MyPlan from './pages/User/MyPlan'
import AddPlan from './pages/User/AddPlan'
import EditProfile from './pages/User/EditProfile'
import EditPokemon from './pages/User/EditPokemon'

import ProfessionalProfile from './pages/Trainer/ProfessionalProfile'
import Upgrade from './pages/Trainer/Upgrade'

import HomeMaster from './pages/Master/Home'
import AddDepartment from './pages/Master/Department/AddDepartment'
import ListDepartment from './pages/Master/Department/ListDepartment'

import AddTrainer from './pages/Master/Trainer/AddNewTrainer'
import ListTrainer from './pages/Master/Trainer/ListTrainer'
import EditTrainer from './pages/Master/Trainer/EditTrainer'

import AddUpgrade from './pages/Master/Upgrade/AddUpgrade'
import ListUpgrade from './pages/Master/Upgrade/ListUpgrade'
import EditUpgrade from './pages/Master/Upgrade/EditUpgrade'

import AddEmployee from './pages/Master/Employee/AddEmployee'
import ListEmployee from './pages/Master/Employee/ListEmployee'
import EditEmployee from './pages/Master/Employee/EditEmployee'

import AddMaster from './pages/Master/Master/AddMaster'
import ListMaster from './pages/Master/Master/ListMaster'
import MasterProfile from './pages/Master/Master/ViewMyInfo'

import Admin from './pages/Master/Admin/Admin'

import Login from './pages/NoAuth/Login'
import About from './pages/NoAuth/About'
import Pricing from './pages/NoAuth/Pricing'
import SignUp from './pages/NoAuth/SignUp'

import NotFound from './pages/404/NotFound'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />

                <Route path="/user" exact component={User} />
                <Route path="/user/profile" exact component={MyProfile} />
                <Route path="/user/plan" exact component={MyPlan} />
                <Route path="/user/plan/add" component={AddPlan} />
                <Route path="/user/profile/edit" exact component={EditProfile} />
                <Route path="/user/pokemon/new" component={NewPokemon} />
                <Route path="/user/pokemon/mine" component={MyPokemons} />
                <Route path="/user/pokemon/edit" component={EditPokemon} />

                <Route path="/trainer/profile" component={ProfessionalProfile} />
                <Route path="/trainer/upgrade" component={Upgrade} />

                <Route path="/master" exact component={HomeMaster} />

                <Route path="/master/department/add" component={AddDepartment} />
                <Route path="/master/department/list" component={ListDepartment} />

                <Route path="/master/trainer/add" component={AddTrainer} />
                <Route path="/master/trainer/list" component={ListTrainer} />
                <Route path="/master/trainer/edit" component={EditTrainer} />

                <Route path="/master/upgrade/add" component={AddUpgrade} />
                <Route path="/master/upgrade/list" component={ListUpgrade} />
                <Route path="/master/upgrade/edit" component={EditUpgrade} />

                <Route path="/master/employee/add" component={AddEmployee} />
                <Route path="/master/employee/list" component={ListEmployee} />
                <Route path="/master/employee/edit" component={EditEmployee} />

                <Route path="/master/add" component={AddMaster} />
                <Route path="/master/list" component={ListMaster} />
                <Route path="/master/profile" component={MasterProfile} />
                
                <Route path="/admin" component={Admin} />

                <Route path="/signup" component={SignUp} />
                <Route path="/about" component={About} />
                <Route path="/pricing" component={Pricing} />

                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}