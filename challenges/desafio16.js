db.produtos.updateMany({
  tags: { $all: ["bovino"] },
}, { $currentDate: { ultimaModificacao: { $type: "timestamp" } } });

db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });
