import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Ícone de entradas"/>
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Ícone de saídas"/>
        </header>
        <strong>-R$500,00</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Ícone de total"/>
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}