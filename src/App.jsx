import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './form.module.css';


const schema = yup.object({

  nome: yup.string().required("Nome obrigatorio"),
  email: yup.string().required("Email obrigatorio").email("E-mail invalido"),
  password: yup.string().required("Senha obrigatorio").min(6,"No minimo 6 caracteres"),
  password_confirmation: yup.string().oneOf([
    null,yup.ref('password')
  ], 'As senhas precisam ser iguais')

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
        <input type="text" placeholder='insira seu nome' {...register("nome")}  className={(errors.nome) ? `${styles.inputError}` : ''} />
        <span className={styles.labelError} >{errors.nome?.message}</span>
      </div>
     
      
      <div className={styles.formGroup}>
        <input type="email" placeholder='insira seu email' {...register("email")}  className={(errors.email) ? `${styles.inputError}` : ''}/>
        <span className={styles.labelError} >{errors.email?.message} </span>
      </div>
      

      <div className={styles.formGroup}> 
        <input type="password" placeholder='insira sua senha ' {...register("password")} className={(errors.password) ? `${styles.inputError}` : ''} />
        <span className={styles.labelError} >{errors.password?.message}</span>
      </div>
     

      <div className={styles.formGroup}>
        <input type="password" placeholder='Confirma sua senha' {...register("password_confirmation")} className={(errors.password_confirmation) ? `${styles.inputError}` : ''} />
        <span className={styles.labelError}>{errors.password_confirmation?.message}</span>
      </div>
      

      <button type='submit'>Enviar formulario</button>

      
       
    </form>
  )
}

export default App
