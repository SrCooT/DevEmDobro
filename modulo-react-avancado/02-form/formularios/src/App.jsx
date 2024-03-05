import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <main>
      <div className="copy">
        <h1>
          FICOU COM DUVIDA? <br />
          NOS MANDE UMA MENSAGEM!
        </h1>

        <p>
          caso tenha ficado com qualquer duvida basta nos mandar uma mensagem e
          entraremos em contato que em menos de 24h.
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="nome" />
        <input
          type="text"
          id="nome"
          placeholder="Nome Completo *"
          className={`campo${
            errors.nome ? "campo-obrigatorio" : "campo-preenchido"
          }`}
          {...register("nome", {
            required: "Campo obrigatorio",
          })}
        />
        {errors.nome && <p>{errors.nome.message}</p>}

        <label htmlFor="email" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email *"
          className={`campo${
            errors.email ? "campo-obrigatorio" : "campo-preenchido"
          }`}
          {...register("nome", {
            required: "Campo obrigatorio",
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label className="telefone" />
        <input
          type="text"
          name="number"
          id="telefone"
          placeholder="Telefone *"
          className={`campo${
            errors.telefone ? "campo-obrigatorio" : "campo-preenchido"
          }`}
          {...register("telefone", {
            required: "Campo obrigatorio",
          })}
        />
        {errors.telefone && <p>{errors.telefone.message}</p>}

        <label htmlFor="mensagem" />
        <textarea
          type="mensagem"
          cols="30"
          rows="5"
          placeholder="Mensagem *"
          className={`campo${
            errors.mensagem ? "campo-obrigatorio" : "campo-preenchido"
          }`}
          {...register("mensagem", {
            required: "Campo obrigatorio",
          })}
        ></textarea>
        {errors.mensagem && <p>{errors.mensagem.message}</p>}

        <p className="instucao">* Campos Obrigatorios</p>

        <button type="submit" className="enviar">
          Enviar
        </button>
      </form>
    </main>
  );
}

export default App;
