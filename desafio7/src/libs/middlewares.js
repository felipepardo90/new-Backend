//? completedFields revisará si el input del formulario o la query recibe todos los parámetros solicitados // Método POST

export const completedFields = (req, res, next) => {
    const { title, price, thumbnail } = req.body;
    title && price && thumbnail
      ? next()
      : res.status(300).send({ message: "Debe completar todos los campos" });
  };





//   module.exports= {completedFields}