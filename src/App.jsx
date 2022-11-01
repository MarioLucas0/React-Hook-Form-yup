import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './form.module.css';


const schema = yup.object({

  nome: yup.string().required("Nome obrigatorio"),
  email: yup.string().required("Email obrigatorio").email("E-mail invalido"),
  password: yup.string().required("Senha obrigatorio").min(6,"No minimo 6 caracteres")

}).required();


function App() {

  const { register, handleSubmit , formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = () => {
        console.log("ok")
  }


  return (
    <form  onSubmit={handleSubmit(onSubmit)} className={styles.contentForm} >
      
      <div className={styles.formGroup}>
        <input type="text" placeholder='insira seu nome' {...register("nome")} />
      </div>
      <span>{errors.nome?.message}</span>
      
      <div className={styles.formGroup}>
        <input type="email" placeholder='insira seu email' {...register("email")} />
      </div>
      <span>{errors.nome?.message}</span>

      <div className={styles.formGroup}> 
        <input type="password" placeholder='insira sua senha ' {...register("password")} />
      </div>
      <span>{errors.nome?.message}</span>

      <div className={styles.formGroup}>
        <input type="password" placeholder='Confirma sua senha'  />
      </div>
      <span>{errors.nome?.message}</span>

      <button type='submit'>Enviar formulario</button>
       
    </form>
  )
}

export default App
