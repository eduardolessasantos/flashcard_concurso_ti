import { StudyGuideTopic } from '../../types';

export const SECURITY_TOPIC: StudyGuideTopic = {
  id: 'Segurança da Informação',
  title: 'Segurança da Informação',
  category: 'especificos_ti',
  description: 'Pilares CIDAN, Gestão de Riscos ISO 31000, MFA, OAuth 2.0, SSO, Criptografia, Malwares, ISO 27001/27002:2022, OWASP Top 10 e SAST/DAST.',
  badge: 'Segurança & Compliance (Peso Alto)',
  iconName: 'ShieldCheck',
  generalUsefulLinks: [
    {
      title: 'OWASP Top 10:2021 - Guia Oficial de Vulnerabilidades',
      url: 'https://owasp.org/Top10/',
      category: 'official',
      badgeLabel: 'OWASP Oficial',
      description: 'Documentação detalhada dos 10 maiores riscos de segurança em aplicações web modernas.'
    },
    {
      title: 'ISO/IEC 27001 & 27002 (Visão Geral da Norma 2022)',
      url: 'https://www.iso.org/standard/27001',
      category: 'doc',
      badgeLabel: 'Padrão ISO',
      description: 'Estrutura dos 4 novos temas da ISO 27002:2022 e requisitos do SGSI da ISO 27001.'
    },
    {
      title: 'Cartilha de Segurança para Internet - CERT.br',
      url: 'https://cartilha.cert.br/',
      category: 'official',
      badgeLabel: 'CERT.br',
      description: 'Conceitos práticos sobre malwares, golpes cibernéticos, senhas fortes e criptografia.'
    }
  ],
  lessons: [
    {
      id: 'seg-pilares-riscos-controles',
      title: 'Pilares CIDAN, Gestão de Riscos e Classificação de Controles',
      subtopic: 'Fundamentos de Segurança & ISO 31000',
      readTimeMinutes: 8,
      keyTakeaways: [
        'Pilares da Segurança (CIDAN): Confidencialidade (acesso restrito aos autorizados), Integridade (precisão sem alteração indevida), Disponibilidade (acesso garantido quando necessário), Autenticidade (certeza da identidade/origem), Não-Repúdio/Irretratabilidade (impossibilidade de negar a autoria). Outros atributos: Conformidade, Auditabilidade e Privacidade.',
        'Tríade do Risco: Risco = Ameaça × Vulnerabilidade × Impacto. Ameaça é o agente/evento externo com potencial de causar dano; Vulnerabilidade é a fragilidade interna explorável.',
        'Tratamento de Riscos (ISO 31000): Mitigar/Reduzir (aplicar controles), Aceitar (tolerar o risco residual), Transferir/Compartilhar (seguros ou contratos terceirizados), Evitar/Eliminar (descontinuar a atividade de risco).',
        'Classificação de Controles: Físicos (portas, biometria predial, CFTV), Lógicos/Técnicos (firewalls, criptografia, IAM, IPS), Administrativos/Organizacionais (políticas, normas de senhas, termos de sigilo, treinamentos).'
      ],
      summary: `A segurança da informação equilibra a proteção dos ativos nos pilares CIDAN através de uma análise contínua de riscos e aplicação coordenada de controles preventivos, detectivos e corretivos.`,
      mnemonics: 'PILAREES DA SEGURANÇA: C-I-D-A-N (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não-repúdio).',
      examPitfalls: [
        'Cebraspe e FGV tentam confundir Vulnerabilidade (falha no sistema) com Ameaça (o hacker ou malware que tenta explorar a falha).',
        'Não-Repúdio (Irretratabilidade) NÃO é apenas autenticação; é a garantia jurídica de que o autor não pode negar a emissão de uma mensagem (assegurada por Assinatura Digital com chave privada).',
        'Risco Residual é o risco que permanece APÓS a implementação dos controles de segurança.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: A Equação de Risco e Pilares CIDAN',
          topicTag: '✍️ Segurança Básica',
          paperStyle: 'lined',
          colorTheme: 'yellow',
          headerNote: '🛡️ Como as bancas cobram Gestão de Riscos',
          handwrittenContent: `1) PILARES SAGRADOS:
   • C - Confidencialidade: Somente quem tem direito pode LER. (Criptografia simétrica/assimétrica).
   • I - Integridade: O dado não foi ALTERADO no caminho. (Hash criptográfico SHA-256).
   • D - Disponibilidade: O sistema está no ar quando o usuário precisa. (Backup, Redundância).
   • A - Autenticidade: O emissor é quem diz ser. (Certificado digital).
   • N - Não-Repúdio: O emissor NÃO pode negar que enviou. (Assinatura com Chave Privada).

2) EQUAÇÃO DO RISCO:
   Risco = Ameaça (Externa) × Vulnerabilidade (Interna) × Impacto
   -> Se você corrigir a vulnerabilidade (patch), o risco zera mesmo com a ameaça ativa!

3) AS 4 RESPOSTAS AO RISCO (ISO 31000):
   1. Mitigar (Aplicar firewall/antivírus)
   2. Transferir (Contratar seguro de TI)
   3. Evitar (Desligar o serviço inseguro)
   4. Aceitar (Assumir o risco residual)`,
          annotations: [
            'Controle Preventivo: Evita o incidente (Firewall).',
            'Controle Detectivo: Identifica o ataque (IDS / SIEM).',
            'Controle Corretivo: Restaura o ambiente (Backup / DRP).'
          ]
        }
      ],
      usefulLinks: [
        {
          title: 'Gestão de Riscos de TI - Guia ISO 31000',
          url: 'https://www.iso.org/iso-31000-risk-management.html',
          category: 'doc',
          badgeLabel: 'Norma ISO',
          description: 'Processo de identificação, análise, avaliação e tratamento contínuo de riscos.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'Um analista de segurança identificou que um servidor web possui uma porta desnecessária aberta com uma versão desatualizada de software sem patch. No contexto da gestão de segurança da informação, essa fraqueza intrínseca constitui:',
        answer: 'Uma Vulnerabilidade',
        explanation: 'Vulnerabilidade é a fraqueza interna ou falha de configuração suscetível de ser explorada por uma ameaça para causar um incidente de segurança.'
      }
    },
    {
      id: 'seg-autenticacao-oauth-sso',
      title: 'Controle de Acesso, MFA, OAuth 2.0 e Single Sign-On (SSO)',
      subtopic: 'Gestão de Identidade & Acesso (IAM)',
      readTimeMinutes: 9,
      keyTakeaways: [
        'Controle de Acesso em 4 Etapas: 1. Identificação (quem sou: username), 2. Autenticação (provar quem sou: senha/token), 3. Autorização (o que posso fazer: RBAC/ABAC/ACL), 4. Auditoria/Accountability (rastrear o que fiz: logs).',
        'Menor Privilégio (Principle of Least Privilege) & Need-to-Know: Conceder estritamente as permissões mínimas necessárias para a execução das tarefas, revogando privilégios desnecessários.',
        'MFA (Autenticação Multifator): Exige 2 ou mais fatores de categorias DIFERENTES: 1. Algo que você SABE (senha, PIN), 2. Algo que você TEM (token OTP, smartcard, celular), 3. Algo que você É (biometria, impressão digital, reconhecimento facial, íris). Usar duas senhas NÃO é MFA!',
        'OAuth 2.0 vs OpenID Connect (OIDC): OAuth 2.0 é um framework de AUTORIZAÇÃO delegada via tokens (Access Token, Refresh Token); OIDC adiciona uma camada de AUTENTICAÇÃO sobre o OAuth 2.0 com ID Tokens em formato JWT.',
        'Single Sign-On (SSO) & Protocolos Federados: Autenticação única centralizada com SAML (baseado em XML), Kerberos (tickets TGT/TGS) e OIDC (JSON/JWT).'
      ],
      summary: `A gestão moderna de acessos baseia-se em princípios de Zero Trust, autenticação multifator forte (MFA) e delegação segura de autorização via OAuth 2.0 / OIDC para impedir movimentação lateral de invasores.`,
      mnemonics: '3 FATORES DE AUTENTICAÇÃO: O que você SABE (Conhecimento), o que você TEM (Posse), o que você É (Inerência).',
      examPitfalls: [
        'MFA de 2 senhas: Pedir a senha principal e a palavra-chave secreta NÃO constitui MFA (ambas pertencem à mesma categoria "algo que você sabe").',
        'OAuth 2.0 NÃO é protocolo de autenticação; é framework de AUTORIZAÇÃO delegada. Quem autentica é o OpenID Connect (OIDC).',
        'Kerberos: Usa criptografia simétrica com Tickets (KDC - Authentication Server e Ticket Granting Server).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro de Giz: Fatores de MFA & Fluxo OAuth 2.0',
          topicTag: '✍️ IAM & Autenticação',
          paperStyle: 'lined',
          colorTheme: 'cyan',
          headerNote: '🔐 Domine para as provas de TI',
          handwrittenContent: `1) OS 3 FATORES DO MFA (Mínimo de 2 categorias distintas!):
   • Fator 1: SABE (Senha, PIN, Pergunta Secreta)
   • Fator 2: TEM  (App Authenticator, Token Físico, SMS, Yubikey)
   • Fator 3: É    (Digital, Reconhecimento Facial, Íris, Voz)
   * Nota: Senha + PIN = 1 Fator (Categoria Conhecimento duplicada).

2) OAUTH 2.0 vs OIDC:
   • OAuth 2.0 = AUTORIZAÇÃO! (Dá um Access Token para o app ler seus dados).
   • OpenID Connect (OIDC) = AUTENTICAÇÃO! (Entrega um ID Token / JWT provando quem você é).

3) TOKENS NO OAUTH 2.0:
   • Access Token: Curta duração (minutos), enviado nos headers (Bearer).
   • Refresh Token: Longa duração (dias/meses), serve unicamente para gerar novos Access Tokens sem pedir login novamente.`
        }
      ],
      usefulLinks: [
        {
          title: 'OAuth 2.0 Simplified - Aaron Parecki',
          url: 'https://aaronparecki.com/oauth-2-simplified/',
          category: 'doc',
          badgeLabel: 'Guia OAuth',
          description: 'Visão clara dos fluxos Authorization Code, Client Credentials e Refresh Tokens.'
        }
      ],
      sampleQuestion: {
        banca: 'Cesgranrio',
        statement: 'Um sistema bancário exige que o correntista digite sua senha de 6 dígitos e, em seguida, responda à sua pergunta secreta pré-cadastrada. Sob a ótica da segurança da informação, esse mecanismo implementa adequadamente uma Autenticação Multifator (MFA)?',
        answer: 'NÃO implementa MFA',
        explanation: 'MFA exige pelo menos dois fatores de categorias distintas (Conhecimento, Posse ou Inerência). Senha e pergunta secreta pertencem ambos à categoria "algo que o usuário sabe".'
      }
    },
    {
      id: 'seg-criptografia-malwares',
      title: 'Criptografia Simétrica/Assimétrica, Assinatura Digital e Taxonomia de Malwares',
      subtopic: 'Criptografia & Códigos Maliciosos',
      readTimeMinutes: 9,
      keyTakeaways: [
        'Criptografia Simétrica (Chave Secreta): Mesma chave para cifrar e decifrar. Rápida e eficiente para grandes volumes de dados. Exemplos: AES, DES, 3DES, RC4, Blowfish. Problema: Distribuição segura da chave.',
        'Criptografia Assimétrica (Par de Chaves Pública/Privada): Chave Pública cifra (qualquer um pode cifrar); Chave Privada decifra (apenas o dono decifra). Mais lenta. Exemplos: RSA, ECC (Curvas Elípticas), Diffie-Hellman, DSA.',
        'Assinatura Digital: Garante Autenticidade, Integridade e Não-Repúdio. O emissor gera o Hash da mensagem e o cifra com sua CHAVE PRIVADA. O destinatário decifra com a CHAVE PÚBLICA do emissor e compara os hashes.',
        'Certificado Digital (ICP-Brasil / X.509): Vincula uma chave pública a uma identidade física/jurídica, emitido por uma Autoridade Certificadora (AC) confiável.',
        'Taxonomia de Malwares: Vírus (precisa de hospedeiro/execução do usuário), Worm (auto-replicável e autônomo via rede sem hospedeiro), Bot/Botnet (controlado remotamente por C&C), Spyware/Keylogger/Screenlogger (espionagem), Trojan/Cavalo de Troia (aparenta ser útil mas executa carga maliciosa oculta), Rootkit (esconde a presença de invasores no núcleo do SO), Ransomware (sequestro e cifragem de dados com chantagem financeira).'
      ],
      summary: `A criptografia é o pilar matemático da confidencialidade e do não-repúdio. A assinatura digital utiliza o par assimétrico de forma inversa à confidencialidade (cifra com a chave privada).`,
      mnemonics: 'ASSINATURA DIGITAL: Cifra o Hash com a Privada do Emissor; CONFIDENCIALIDADE: Cifra o dado com a Pública do Destinatário!',
      examPitfalls: [
        'Para confidencialidade: Cifra com a Chave Pública do Destinatário. Para Assinatura Digital: Cifra o resumo hash com a Chave Privada do Emissor.',
        'Diferença Vírus vs Worm: Vírus precisa de hospedeiro (.exe, .docx) e ação do usuário; Worm propaga-se sozinho pela rede explorando vulnerabilidades.',
        'Phishing (golpe de engenharia social) vs Ransomware (malware extorsivo que cifra arquivos).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Criptografia Assimétrica e Assinatura Digital',
          topicTag: '✍️ Criptografia & Malwares',
          paperStyle: 'grid',
          colorTheme: 'green',
          headerNote: '🎯 A regra que 90% dos candidatos confundem',
          handwrittenContent: `1) SIGILO / CONFIDENCIALIDADE (Alice envia para Bob):
   • Alice cifra com a CHAVE PÚBLICA DE BOB.
   • Apenas Bob pode decifrar com sua CHAVE PRIVADA!

2) ASSINATURA DIGITAL (Alice assina para Bob):
   • Alice gera o Hash do documento.
   • Alice cifra o Hash com sua CHAVE PRIVADA! (Selo de autoria).
   • Bob confere decifrando o Hash com a CHAVE PÚBLICA DE ALICE!
   • Garante: Autenticidade + Integridade + Não-Repúdio (NÃO garante sigilo por si só!).

3) MALWARES EM 1 FRASE:
   • Vírus: Precisa de hospedeiro (.exe) e clique do usuário.
   • Worm: Autônomo! Espalha-se sozinho pela rede.
   • Trojan: "Presente de grego" (jogo/crack falso que abre portas).
   • Ransomware: Cifra o HD e exige resgate em Bitcoin.
   • Rootkit: Esconde processos no Kernel do SO.`
        }
      ],
      usefulLinks: [
        {
          title: 'Cartilha CERT.br - Criptografia e Assinatura Digital',
          url: 'https://cartilha.cert.br/criptografia/',
          category: 'official',
          badgeLabel: 'CERT.br Oficial',
          description: 'Conceitos ilustrados sobre chaves públicas, privadas e certificados digitais.'
        }
      ],
      sampleQuestion: {
        banca: 'Cebraspe',
        statement: 'No processo de assinatura digital de um documento eletrônico, o emissor utiliza a chave pública do destinatário para cifrar o hash do documento, garantindo o não-repúdio da transação.',
        answer: 'ERRADO',
        explanation: 'Para assinar digitalmente, o emissor utiliza a SUA PRÓPRIA CHAVE PRIVADA para cifrar o hash. A chave pública do destinatário seria utilizada caso se desejasse garantir confidencialidade.'
      }
    },
    {
      id: 'seg-normas-iso27001-27002',
      title: 'Normas ISO/IEC 27001 e ISO/IEC 27002 (Versão 2022)',
      subtopic: 'Governança de Segurança & SGSI',
      readTimeMinutes: 8,
      keyTakeaways: [
        'ISO/IEC 27001:2022 (Requisitos Auditáveis): Define os requisitos para estabelecer, implementar, manter e melhorar continuamente um Sistema de Gestão de Segurança da Informação (SGSI). Possui cláusulas obrigatórias de 4 a 10 (Contexto, Liderança, Planejamento, Apoio, Operação, Avaliação de Desempenho, Melhoria) e o Anexo A.',
        'Declaração de Aplicabilidade (SoA - Statement of Applicability): Documento mandatório da ISO 27001 que lista quais controles do Anexo A foram selecionados, justificados ou excluídos.',
        'ISO/IEC 27002:2022 (Código de Prática / Controles): Guia de boas práticas não auditável para certificação direta. Na versão 2022, reduziu de 14 seções (114 controles) para 4 TEMAS consolidados (93 controles no total): 1. Controles Organizacionais (37 controles), 2. Controles de Pessoas (8 controles), 3. Controles Físicos (14 controles), 4. Controles Tecnológicos (34 controles).',
        'Novos Controles da ISO 27002:2022: Threat Intelligence (Inteligência de ameaças), Segurança da informação para serviços em nuvem, Prontidão de TIC para continuidade de negócios, Monitoramento físico de segurança, Mascaramento de dados e Prevenção contra vazamento de dados (DLP).'
      ],
      summary: `A ISO 27001 é a norma de certificação e governança do SGSI, enquanto a ISO 27002 é o catálogo descritivo dos 93 controles de segurança agrupados em 4 temas na versão 2022.`,
      mnemonics: '4 TEMAS DA ISO 27002:2022: O-P-F-T (Organizacionais, Pessoas, Físicos, Tecnológicos).',
      examPitfalls: [
        'Uma organização se certifica na ISO 27001 (norma de requisitos auditáveis), NUNCA diretamente na ISO 27002 (que é apenas um guia de boas práticas).',
        'Bancas cobram os novos controles de 2022, em especial Inteligência de Ameaças, Segurança em Nuvem e Mascaramento de Dados.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Diferença ISO 27001 vs ISO 27002 (2022)',
          topicTag: '✍️ Normas ISO',
          paperStyle: 'lined',
          colorTheme: 'yellow',
          headerNote: '📋 Principais mudanças da versão 2022',
          handwrittenContent: `ISO 27001 (SGSI - Requisitos):
• Norma CERTIFICÁVEL e auditável!
• Ciclo de melhoria contínua (Cláusulas 4 a 10).
• Artefato obrigatório: Declaração de Aplicabilidade (SoA).

ISO 27002 (Guia de Controles):
• Norma de RECOMENDAÇÃO (Não gera certificado individual).
• Versão 2022: 93 controles divididos em 4 Temas:
  1. Organizacionais (37 controles - Políticas, contratos, ativos)
  2. Pessoas (8 controles - Treinamento, triagem, teletrabalho)
  3. Físicos (14 controles - Perímetros, salas seguras, cabeamento)
  4. Tecnológicos (34 controles - Autenticação, cripto, DLP, Cloud)`
        }
      ],
      usefulLinks: [
        {
          title: 'ISO/IEC 27002:2022 - Estrutura dos 93 Controles',
          url: 'https://www.iso.org/standard/75652.html',
          category: 'doc',
          badgeLabel: 'Norma ISO Oficial',
          description: 'Detalhamento dos novos 11 controles inseridos na revisão de 2022.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'A respeito da estrutura da norma ABNT NBR ISO/IEC 27002:2022, os controles de segurança da informação estão categorizados em quais temas?',
        answer: 'Organizacionais, Pessoas, Físicos e Tecnológicos',
        explanation: 'A revisão de 2022 substituiu as antigas 14 seções por 4 grandes temas estruturais: Controles Organizacionais, de Pessoas, Físicos e Tecnológicos.'
      }
    },
    {
      id: 'seg-sdl-owasp-sast-dast',
      title: 'Desenvolvimento Seguro (SDL), OWASP Top 10 e SAST vs DAST',
      subtopic: 'Segurança em Aplicações (AppSec)',
      readTimeMinutes: 9,
      keyTakeaways: [
        'SDL / SSDLC (Security Development Lifecycle): Integração da segurança em todas as fases do ciclo de desenvolvimento (Requisitos -> Modelagem de Ameaças/STRIDE -> Design Seguro -> Codificação Segura -> Testes de Segurança -> Operação e Resposta a Incidentes - Shift-Left Security).',
        'Modelagem de Ameaças (STRIDE): Spoofing (Falsificação de identidade), Tampering (Adulteração de dados), Repudiation (Repúdio), Information Disclosure (Vazamento de informação), Denial of Service (Negação de serviço), Elevation of Privilege (Elevação de privilégios).',
        'OWASP Top 10 (2021): A01: Broken Access Control (Controle de Acesso Quebrado - #1), A02: Cryptographic Failures (Falhas Criptográficas), A03: Injection (SQL/NoSQL/Command Injection), A04: Insecure Design, A05: Security Misconfiguration, A06: Vulnerable and Outdated Components, A07: Identification and Authentication Failures, A08: Software and Data Integrity Failures, A09: Security Logging and Monitoring Failures, A10: Server-Side Request Forgery (SSRF).',
        'Testes de Segurança: SAST (Static Application Security Testing - Caixa Branca, analisa código-fonte estático sem executar o app), DAST (Dynamic Application Security Testing - Caixa Preta, analisa o app rodando contra ataques em tempo de execução), IAST (Interactive - híbrido instrumentado).',
        'Métricas de Teste: Falso Positivo (alerta emitido quando o código é seguro) vs Falso Negativo (vulnerabilidade real que passou despercebida pela ferramenta - muito mais perigoso).'
      ],
      summary: `A segurança em aplicações modernas adota a abordagem Shift-Left, inserindo validações SAST/DAST e modelagem STRIDE no pipeline de CI/CD para mitigar as vulnerabilidades do OWASP Top 10.`,
      mnemonics: 'STRIDE: Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege.',
      examPitfalls: [
        'No OWASP Top 10:2021, o risco #1 NÃO é mais Injection (que caiu para #3); a vulnerabilidade número 1 atual é Broken Access Control (Controle de Acesso Quebrado).',
        'SAST testa código-fonte em repouso (White Box); DAST testa aplicação compilada e em execução via HTTP (Black Box).',
        'Falso Negativo é o pior cenário: a ferramenta diz que o sistema está 100% seguro, mas existe uma brecha oculta.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro de Giz: SAST vs DAST & STRIDE',
          topicTag: '✍️ AppSec & OWASP',
          paperStyle: 'grid',
          colorTheme: 'rose',
          headerNote: '🔍 Testes Automatizados no Pipeline DevSecOps',
          handwrittenContent: `1) SAST vs DAST:
• SAST (Static - Caixa Branca):
  -> Lê o código-fonte (Java, Python, C#).
  -> Encontra erros na linha de código exata antes de compilar.
  -> Rápido, mas gera muitos Falsos Positivos.

• DAST (Dynamic - Caixa Preta):
  -> Ataca a aplicação no ar via rede/HTTP (simula hacker real).
  -> Não precisa do código-fonte.
  -> Não encontra erros em rotas ocultas não navegáveis.

2) OWASP TOP 10 2021 (Os 3 Primeiros):
  #1 Broken Access Control (Acessar dados de outros usuários sem permissão)
  #2 Cryptographic Failures (Uso de MD5, SHA1 ou HTTP sem TLS)
  #3 Injection (SQL Injection clássico: ' OR '1'='1)`
        }
      ],
      usefulLinks: [
        {
          title: 'OWASP Top 10:2021 Detalhado em Português',
          url: 'https://owasp.org/Top10/',
          category: 'official',
          badgeLabel: 'OWASP Guide',
          description: 'Explicações, exemplos de código vulnerável e remediações recomendadas.'
        }
      ],
      sampleQuestion: {
        banca: 'Cebraspe',
        statement: 'No âmbito do ciclo de vida de desenvolvimento seguro de software (SSDLC), o teste estático de segurança de aplicações (SAST) analisa o comportamento da aplicação em tempo de execução sem requerer acesso ao seu código-fonte.',
        answer: 'ERRADO',
        explanation: 'O SAST é um teste de caixa branca que analisa o código-fonte em repouso (estático), sem executar a aplicação. Quem analisa em tempo de execução sem código-fonte é o DAST (Dynamic Application Security Testing).'
      }
    }
  ]
};
