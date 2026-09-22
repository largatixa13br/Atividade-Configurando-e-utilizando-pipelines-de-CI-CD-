import React from 'react';

/**
 * Componente principal da atividade.
 * A aplicação é simples de propósito: o objetivo da atividade é demonstrar
 * a execução de testes, build e deploy por meio de um pipeline CI/CD.
 */
function App() {
  return (
    <main style={styles.main}>
      <section style={styles.card}>
        <p style={styles.badge}>CI/CD • GitHub Actions</p>
        <h1>Pipeline funcionando!</h1>
        <p>
          Esta aplicação React foi configurada para executar testes,
          gerar o build e permitir publicação no GitHub Pages.
        </p>
        <a
          href="https://github.com/features/actions"
          target="_blank"
          rel="noreferrer"
        >
          Conheça o GitHub Actions
        </a>
      </section>
    </main>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    padding: '24px',
    boxSizing: 'border-box',
    background: 'linear-gradient(135deg, #1d2671, #2c5364)',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    maxWidth: '680px',
    padding: '40px',
    borderRadius: '20px',
    background: '#ffffff',
    color: '#172033',
    textAlign: 'center',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
  },
  badge: {
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
};

export default App;
