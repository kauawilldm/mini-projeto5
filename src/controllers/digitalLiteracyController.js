


const getDigitalLiteracyTips = (req, res) => {
  const tips = [
    'Pratique o uso de ferramentas de pesquisa online.',
    'Participe de cursos e workshops sobre tecnologia.',
    'Mantenha seus softwares e sistemas operacionais atualizados.',
    'Use senhas fortes e mude-as regularmente.',
    'Fique atento a e-mails e links suspeitos para evitar phishing.',
    'Aprenda a usar ferramentas de produtividade como editores de texto e planilhas.',
    'Entenda e respeite as leis de direitos autorais e privacidade online.',
    'Faça backups regulares dos seus dados importantes.',
    'Utilize software antivírus e mantenha-o atualizado.',
    'Desenvolva habilidades básicas de programação para entender melhor a tecnologia.'
  ];
  res.json(tips);
};

module.exports = { getDigitalLiteracyTips };
