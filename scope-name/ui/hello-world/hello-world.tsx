import React from 'react';
import { getHelloWorld } from '@zengchaowu/doraemon.get-hello-world';

export function HelloWorld() {
  return <div>{getHelloWorld()}</div>;
}
