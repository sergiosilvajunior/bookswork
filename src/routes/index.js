import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Inicio from '../screens/inicio'
import Login from '../screens/login'
import EsqueceuSenha from '../screens/esqueceu'
import CriarConta from '../screens/criarconta'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false}}
            />
             <Stack.Screen
                name="EsqueceuSenha"
                component={EsqueceuSenha}
                options={{ headerShown: false}}
            />
             <Stack.Screen
                name="CriarConta"
                component={CriarConta}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}

