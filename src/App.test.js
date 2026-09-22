import React from 'react';
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import App from './App';

test('renders the CI/CD application', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  await act(async () => {
    root.render(<App />);
  });

  expect(container.textContent).toMatch(/Pipeline funcionando!/i);
  expect(container.textContent).toMatch(/executar testes, gerar o build/i);
  expect(container.querySelector('a')).not.toBeNull();

  await act(async () => {
    root.unmount();
  });
  container.remove();
});
