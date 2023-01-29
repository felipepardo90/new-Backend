//? completedFields revisará si el input del formulario o la query recibe todos los parámetros solicitados // Método POST

export const completedFields = (req, res, next) => {
  const { title, price, thumbnail } = req.body;
  title && price && thumbnail
    ? next()
    : res.status(300).send({ message: "Debe completar todos los campos" });
};

export const auth = (req, res, next) => {
  req.session.isAdmin == true
    ? next()
    : res.status(401).send("You don't have administrator permissions");
};

// export default { completedFields, auth };
