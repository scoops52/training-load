import React from 'react';
import { Link, Redirect, Stack } from 'expo-router';
import { NativeBaseProvider } from 'native-base';

const Home = () => {
  return (
    <>
      <Redirect href="/summary"/>
    </>
  )
}

export default Home