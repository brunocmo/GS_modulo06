import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo_github.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore respositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://cdn.discordapp.com/attachments/281283408779411456/712390101568847963/djair.png"
            alt="Djair"
          />
          <div>
            <strong>djaja/dotafeed</strong>
            <p>Ai sim djaja</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://cdn.discordapp.com/attachments/281283408779411456/712390101568847963/djair.png"
            alt="Djair"
          />
          <div>
            <strong>djaja/dotafeed</strong>
            <p>Ai sim djaja</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
