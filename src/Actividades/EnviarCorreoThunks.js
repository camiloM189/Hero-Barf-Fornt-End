import HeroBarfApi from "../../api/HeroBarfApi";

export const enviarCorreo = ({Nombre,Comentario,Email,Telefono}) => {
    return async (dispatch) => {
        await HeroBarfApi.post(`/correo/EnviarCorreo`,{Nombre,Comentario,Email,Telefono});




    }
  }