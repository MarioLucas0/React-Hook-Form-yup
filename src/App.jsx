import './global.css'

function App() {


  return (
    <form onSubmit>
      <div>
        <input type="text" placeholder='insira seu nome' />
      </div>
      <div>
        <input type="email" placeholder='insira seu email' />
      </div>
      <div>
        <input type="password" placeholder='insira sua senha ' />
      </div>
      <div>
        <input type="tpassword" placeholder='Confirma sua senha' />
      </div>

      <button type='submit'>Enviar formulario</button>
       
    </form>
  )
}

export default App
