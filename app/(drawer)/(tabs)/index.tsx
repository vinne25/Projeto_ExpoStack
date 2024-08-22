import { Stack } from 'expo-router';
//importa o componente stack do modulo expo-router, usado para configurar a navegação em pilha (stack navigation)

import { Container } from '~/components/Container';
//importa o componente container de um caminho relativo, geralmente usado para organizar o centralizar o conteudo

import { ScreenContent } from '~/components/ScreenContent';
//importa o componente que provavelmente e responsavel por exibir o conteudo esperado, como textos e elementeos visuais 

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Tab One" />
      </Container>
    </>
  );
}
