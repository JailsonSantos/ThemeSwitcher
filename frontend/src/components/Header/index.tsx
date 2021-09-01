import React, { useContext } from "react";
import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container } from './styles';

interface Props {
  toogleTheme(): void;
}

const Header: React.FC<Props> = ({ toogleTheme }) => {

  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <nav>
        <ul>
          <li>Início</li>
          <li>Sobre</li>
          <li>Contatos</li>
        </ul>

        <Switch
          onChange={toogleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={shade(0.15, colors.secundary)}
        />
      </nav>

    </Container>
  );
}

export default Header;