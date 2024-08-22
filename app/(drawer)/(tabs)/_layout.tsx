import { Tabs } from 'expo-router';
//importa o componente tabs do modulo 'expo-router', que é usado para criar uma navegação de abas na aplicação

import { TabBarIcon } from '~/components/TabBarIcon';
//importa o componente 'tabbaricon' de um caminho relativo, este componente será usado para rederizar icones personalizados na barra de aba
  
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}>
        {/*
          o componente tabs organiza a navegação de app em layout de abas
          as opções screenoptions configuram o comportamento e a aparencia das abas
          headershown: falsa esconde o cabeçalho padrão de navegação
          tabbaractiveintcolor: black define a cor do texto e dos icones das abas ativas como preto
       */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="apple" color={color} />,
        }}
      />
      {/**
        define a primeria aba com o nome da rota index
        title: tab one define o titulo da aba
        tabbaricon: utiliza o componente tabbaricon ára rederizar um icone 
    */}
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="android" color={color} />,
        }}
      />
    </Tabs>
  );
}
