const status = function status(request, response) {
  response.status(200).json({ chave: "Teste API curso.dev" });
};

export default status;
