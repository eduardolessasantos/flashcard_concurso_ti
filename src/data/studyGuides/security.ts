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
          ],
          diagramFormula: 'Risco = Ameaça (Externa) × Vulnerabilidade (Interna) × Impacto\nTratamento: Mitigar | Transferir | Evitar | Aceitar',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Receita Federal do Brasil (RFB) – Auditor-Fiscal da Receita Federal – 2023',
            enunciado: `Durante uma auditoria nos sistemas de processamento aduaneiro de um porto seco, a equipe de segurança identificou que determinado servidor de aplicação mantinha ==o protocolo Telnet ativo em texto claro na porta 23== com uma biblioteca de autenticação ==sem suporte do fabricante há três anos==. 

Adicionalmente, relatórios de inteligência indicaram que ==grupos cibercriminosos organizados estão executando varreduras massivas== em busca de servidores expostos para inserção de ransomware.

De acordo com as boas práticas de Gestão de Riscos de Segurança da Informação (ISO 31000 e ISO 27005), os elementos grifados correspondem, respectivamente, a:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Ameaça e Vulnerabilidade.',
                correta: false,
                comentario: 'INCORRETA: A ordem está invertida. A fraqueza intrínseca (Telnet sem suporte) é uma vulnerabilidade interna; os grupos hackers externos são a ameaça.'
              },
              {
                letra: 'B',
                texto: '==Vulnerabilidade e Ameaça==.',
                correta: true,
                comentario: 'CORRETA: A vulnerabilidade é a fraqueza de um ativo ou controle que pode ser explorada por uma ou mais ameaças (porta Telnet sem suporte). A ameaça é a causa potencial de um incidente indesejado (os grupos criminosos realizando varreduras ativas).'
              },
              {
                letra: 'C',
                texto: 'Impacto e Risco Residual.',
                correta: false,
                comentario: 'INCORRETA: Impacto é a perda financeira/operacional se o ataque se concretizar. Nenhum dos dois itens descritos é impacto.'
              },
              {
                letra: 'D',
                texto: 'Incidente de Segurança e Ativo Crítico.',
                correta: false,
                comentario: 'INCORRETA: Não houve ainda a concretização do incidente (invasão consolidada), e sim a existência de vetores de risco.'
              },
              {
                letra: 'E',
                texto: 'Vulnerabilidade e Risco Inerente.',
                correta: false,
                comentario: 'INCORRETA: Grupos criminosos realizando varreduras são agentes de ameaça, e não a métrica de risco inerente.'
              }
            ],
            termosGrifados: [
              {
                termo: 'o protocolo Telnet ativo em texto claro na porta 23',
                papel: 'Falha Técnica Intrínseca',
                regra: 'Configuração insegura no próprio ambiente da organização -> Vulnerabilidade.',
                cor: 'rose'
              },
              {
                termo: 'sem suporte do fabricante há três anos',
                papel: 'Obsolescência do Ativo',
                regra: 'Falta de patches é a definição por excelência de Vulnerabilidade.',
                cor: 'yellow'
              },
              {
                termo: 'grupos cibercriminosos organizados estão executando varreduras massivas',
                papel: 'Agente Causador Externo',
                regra: 'Agente externo com potencial e intenção de causar dano -> Ameaça.',
                cor: 'green'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE A ORIGEM DO PRIMEIRO ELEMENTO: Porta Telnet aberta sem suporte do fabricante. É algo de dentro da empresa (fraqueza do sistema)? Sim! Fraqueza interna = VULNERABILIDADE.',
              '2. IDENTIFIQUE O SEGUNDO ELEMENTO: Grupos hackers varrendo a rede. É um agente externo com capacidade de explorar brechas? Sim! Agente externo = AMEAÇA.',
              '3. CRUZE COM A ISO 31000/27005: Risco = Ameaça × Vulnerabilidade × Impacto.',
              '4. CONFIRME A ORDEM SOLICITADA: Primeiro o elemento interno (Vulnerabilidade), depois o externo (Ameaça).',
              '5. MARQUE: Letra B.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA B',
            conclusaoPedagogica: 'DISTINÇÃO CLÁSSICA DE CONCURSO: A vulnerabilidade é o buraco na cerca (interno); a ameaça é o ladrão rondando a fazenda (externo); o risco é a probabilidade do ladrão passar pelo buraco e causar prejuízo!'
          }
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
   • Refresh Token: Longa duração (dias/meses), serve unicamente para gerar novos Access Tokens sem pedir login novamente.`,
          annotations: [
            'MFA exige no mínimo dois fatores de CATEGORIAS DIFERENTES.',
            'OIDC adiciona o ID Token (JWT) assinado pelo Authorization Server.'
          ],
          diagramFormula: 'Fator 1 (Sabe: Senha/PIN) + Fator 2 (Tem: Token/Celular) + Fator 3 (É: Biometria)\nOAuth 2.0 = Autorização (Scopes) | OIDC = Autenticação (Identidade)',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Senado Federal – Analista Legislativo (Informática Legislativa) – 2022',
            enunciado: `Para elevar a segurança no acesso ao sistema de votação e deliberação remota do Parlamento, a comissão de TI avaliou propostas para implantação de Autenticação Multifator (MFA).

Considere as alternativas de mecanismos de autenticação apresentadas:

I. ==Solicitar a senha alfanumérica de 10 caracteres e, ato contínuo, a resposta a uma pergunta de segurança pessoal== pré-cadastrada pelo parlamentar.
II. ==Solicitar a senha individual associada à leitura biométrica da impressão digital== do parlamentar.
III. ==Solicitar a inserção de um token físico criptográfico FIDO2/U2F (hardware conectado à porta USB) e a validação do reconhecimento facial== em tempo real.

Constituem implementações GENUÍNAS de Autenticação Multifator (MFA), em estrita conformidade com os padrões internacionais do NIST (SP 800-63B), as propostas contidas em:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'I, apenas.',
                correta: false,
                comentario: 'INCORRETA: Tanto a senha quanto a pergunta secreta são fatores da mesma categoria ("algo que você sabe" / conhecimento). Usar dois itens da mesma categoria NÃO constitui MFA.'
              },
              {
                letra: 'B',
                texto: 'I e II, apenas.',
                correta: false,
                comentario: 'INCORRETA: A proposta I não é MFA.'
              },
              {
                letra: 'C',
                texto: '==II e III, apenas==.',
                correta: true,
                comentario: 'CORRETA: No item II temos: Senha ("algo que sabe") + Biometria ("algo que é") = 2 categorias distintas (MFA autêntico). No item III temos: Token FIDO2 ("algo que tem") + Reconhecimento Facial ("algo que é") = 2 categorias distintas (MFA autêntico).'
              },
              {
                letra: 'D',
                texto: 'II, apenas.',
                correta: false,
                comentario: 'INCORRETA: O item III também é uma implementação válida de MFA (Posse + Inerência).'
              },
              {
                letra: 'E',
                texto: 'I, II e III.',
                correta: false,
                comentario: 'INCORRETA: O item I invalida a opção.'
              }
            ],
            termosGrifados: [
              {
                termo: 'senha alfanumérica de 10 caracteres e a resposta a uma pergunta de segurança',
                papel: 'Mesma Categoria (Conhecimento)',
                regra: 'Dois elementos da mesma classe (algo que sabe) NÃO formam MFA.',
                cor: 'rose'
              },
              {
                termo: 'senha individual associada à leitura biométrica',
                papel: 'MFA Válido (Sabe + É)',
                regra: 'Conhecimento + Inerência constituem categorias independentes.',
                cor: 'green'
              },
              {
                termo: 'token físico criptográfico FIDO2 e reconhecimento facial',
                papel: 'MFA Válido (Tem + É)',
                regra: 'Posse de hardware criptográfico + Inerência biométrica constituem MFA de alta segurança.',
                cor: 'cyan'
              }
            ],
            comoLerPassoAPasso: [
              '1. LEMBRE-SE DA DEFINIÇÃO DO NIST/ISO: MFA exige fatores de famílias distintas: 1) O que você sabe (conhecimento); 2) O que você tem (posse); 3) O que você é (inerência).',
              '2. AVALIE A PROPOSTA I: Senha (sabe) + Pergunta secreta (sabe). Mesma categoria! NÃO É MFA. Risque A, B e E!',
              '3. AVALIE A PROPOSTA II: Senha (sabe) + Digital (é). Duas categorias distintas. É MFA válido!',
              '4. AVALIE A PROPOSTA III: Token USB FIDO2 (tem) + Facial (é). Duas categorias distintas. Também é MFA válido!',
              '5. MARQUE: Letra C (II e III, apenas).'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA C',
            conclusaoPedagogica: 'PEGADINHA FAVORITA DE BANCAS: Pedir "duas senhas" ou "senha + PIN" é o distrator mais comum. Só existe MFA se houver cruzamento entre Conhecimento, Posse ou Inerência!'
          }
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
   • Rootkit: Esconde processos no Kernel do SO.`,
          annotations: [
            'Assinatura Digital = Hash cifrado com Chave Privada do Emissor.',
            'Verificação = Decifrar o Hash com a Chave Pública do Emissor.',
            'Confidencialidade = Cifrado com a Chave Pública do Destinatário.'
          ],
          diagramFormula: 'Assinatura: Resumo Hash + Chave Privada do Emissor = Autenticidade, Integridade e Não-Repúdio\nSigilo: Mensagem + Chave Pública do Destinatário = Confidencialidade',
          realExamQuestion: {
            banca: 'Cebraspe',
            orgaoAno: 'Polícia Federal (PF) – Perito Criminal Federal (Informática Forense) – 2021',
            enunciado: `Acerca de criptografia, algoritmos e infraestrutura de chaves públicas (ICP-Brasil), julgue o item a seguir:

"No processo padrão de assinatura digital baseado em criptografia assimétrica, ==o emissor utiliza a chave pública do destinatário para assinar digitalmente o resumo criptográfico (hash)== da mensagem, garantindo, dessa forma, a integridade do conteúdo e a irrefutabilidade (não-repúdio) da autoria perante terceiros."`,
            alternativas: [
              {
                letra: 'C',
                texto: 'CERTO',
                correta: false,
                comentario: 'INCORRETO: Cifrar com a chave pública do destinatário garante apenas CONFIDENCIALIDADE (sigilo para que só o destinatário leia). Para assinar digitalmente garantindo autoria e não-repúdio, o emissor DEVE utilizar a sua própria CHAVE PRIVADA!'
              },
              {
                letra: 'E',
                texto: '==ERRADO==',
                correta: true,
                comentario: 'CORRETO (ITEM ERRADO): Pegadinha campeã do Cebraspe! A assinatura digital é gerada cifrando o hash com a CHAVE PRIVADA DO EMISSOR (pois ela é exclusiva e secreta dele, comprovando autoria). Qualquer pessoa de posse da chave pública do emissor poderá decifrar e atestar que partiu dele, garantindo Autenticidade, Integridade e Não-Repúdio.'
              }
            ],
            termosGrifados: [
              {
                termo: 'o emissor utiliza a chave pública do destinatário para assinar digitalmente',
                papel: 'Inversão Fatal de Chaves',
                regra: 'Assinatura exige a chave PRIVADA do EMISSOR; a chave pública do destinatário serve para envio confidencial.',
                cor: 'rose'
              },
              {
                termo: 'resumo criptográfico (hash)',
                papel: 'Objeto Cifrado na Assinatura',
                regra: 'Não se cifra o arquivo inteiro por motivos de performance; cifra-se apenas o hash de tamanho fixo.',
                cor: 'yellow'
              },
              {
                termo: 'irrefutabilidade (não-repúdio) da autoria',
                papel: 'Propriedade Jurídica da Chave Privada',
                regra: 'Apenas a chave privada exclusiva do signatário pode conferir valor probatório irrefutável.',
                cor: 'green'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE A OPERAÇÃO: "assinar digitalmente o resumo (hash)".',
              '2. BUSQUE A CHAVE UTILIZADA: O item diz "chave pública do destinatário".',
              '3. AVALIE COM A REGRA BÁSICA: Se qualquer pessoa tem a chave pública do destinatário, como isso provaria quem assinou? Não prova nada!',
              '4. APLICAÇÃO DA REGRA DE OURO: Assinatura Digital SEMPRE usa a CHAVE PRIVADA DO EMISSOR.',
              '5. MARQUE: Item ERRADO com 100% de certeza.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: ERRADO',
            conclusaoPedagogica: 'MANTRA DA CRIPTOGRAFIA ASSIMÉTRICA: Quem quer segredo, cifra com a PÚBLICA DE QUEM RECEBE. Quem quer assinar, carimba com a PRIVADA DE QUEM ENVIA!'
          }
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
  4. Tecnológicos (34 controles - Autenticação, cripto, DLP, Cloud)`,
          annotations: [
            'A empresa se certifica na ISO 27001, e NUNCA diretamente na ISO 27002.',
            'SoA (Statement of Applicability) justifica os controles escolhidos do Anexo A.'
          ],
          diagramFormula: 'ISO 27001 = Requisitos + Certificação Auditável (Cláusulas 4-10 + Anexo A)\nISO 27002:2022 = Catálogo de 93 Controles em 4 Temas (O-P-F-T)',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'TCE-ES – Auditor de Controle Externo (Tecnologia da Informação) – 2023',
            enunciado: `Em conformidade com as normas ABNT NBR ISO/IEC 27001:2022 e 27002:2022 para a implantação de um Sistema de Gestão de Segurança da Informação (SGSI) em um órgão de controle público:

I. ==Uma organização pública pode pleitear e obter formalmente a certificação independente de conformidade acreditada com a ISO/IEC 27002==.
II. ==A versão 2022 da norma ISO/IEC 27002 estruturou seus 93 controles em 4 grandes temas estruturais==: Organizacionais, Pessoas, Físicos e Tecnológicos.
III. ==A Declaração de Aplicabilidade (Statement of Applicability - SoA)== é um documento mandatório que documenta quais controles do Anexo A foram aplicados ou justificados em sua exclusão.

Está CORRETO o que se afirma em:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'I, apenas.',
                correta: false,
                comentario: 'INCORRETA: A ISO 27002 é um código de práticas e orientações de controles, NÃO é uma norma certificável. A certificação formal só é obtida na ISO 27001.'
              },
              {
                letra: 'B',
                texto: 'I e II, apenas.',
                correta: false,
                comentario: 'INCORRETA: O item I é incorreto.'
              },
              {
                letra: 'C',
                texto: '==II e III, apenas==.',
                correta: true,
                comentario: 'CORRETA: Exatamente! A ISO 27002:2022 reduziu as 14 seções antigas para 4 temas taxonômicos (Organizacionais, Pessoas, Físicos e Tecnológicos com 93 controles no total). E a Declaração de Aplicabilidade (SoA) é exigência explícita e obrigatória da ISO 27001 (cláusula 6.1.3).'
              },
              {
                letra: 'D',
                texto: 'I e III, apenas.',
                correta: false,
                comentario: 'INCORRETA: O item I invalida a opção.'
              },
              {
                letra: 'E',
                texto: 'I, II e III.',
                correta: false,
                comentario: 'INCORRETA: O item I invalida a opção.'
              }
            ],
            termosGrifados: [
              {
                termo: 'obter formalmente a certificação independente de conformidade com a ISO/IEC 27002',
                papel: 'Pegadinha de Certificação',
                regra: 'ISO 27002 NÃO certifica! Apenas a ISO 27001 emite certificado acreditado de SGSI.',
                cor: 'rose'
              },
              {
                termo: 'estruturou seus 93 controles em 4 grandes temas estruturais',
                papel: 'Nova Taxonomia da Versão 2022',
                regra: 'A ISO 27002:2022 consolidou os controles em: Organizacionais (37), Pessoas (8), Físicos (14) e Tecnológicos (34).',
                cor: 'green'
              },
              {
                termo: 'Declaração de Aplicabilidade (Statement of Applicability - SoA)',
                papel: 'Artefato Mandatório da ISO 27001',
                regra: 'A SoA é o inventário formal auditável onde se declara quais controles foram adotados ou descartados justificadamente.',
                cor: 'yellow'
              }
            ],
            comoLerPassoAPasso: [
              '1. AVALIE O ITEM I: "obter certificação com a ISO 27002". REGRA DE OURO: Empresa NUNCA se certifica na 27002, apenas na 27001! Item I é FALSO.',
              '2. ELIMINE ALTERNATIVAS: Com o item I falso, risque imediatamente A, B, D e E.',
              '3. CONFIRA O ITEM II: A versão 2022 tem 4 temas (OPFT) e 93 controles. Verdadeiro!',
              '4. CONFIRA O ITEM III: A SoA é mandatória no SGSI. Verdadeiro!',
              '5. MARQUE: Letra C sem perder tempo.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA C',
            conclusaoPedagogica: 'DISTINÇÃO CLÁSSICA: 27001 é o "QUÊ" (Requisitos do SGSI, gera certificado). 27002 é o "COMO" (Guia detalhado de controles, não gera certificado).'
          }
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
  #3 Injection (SQL Injection clássico: ' OR '1'='1)`,
          annotations: [
            'SAST é White-Box (código-fonte sem execução).',
            'DAST é Black-Box (aplicação compilada rodando em ambiente de teste).'
          ],
          diagramFormula: 'Pipeline DevSecOps:\nRequisitos (STRIDE) -> Commit (SAST / Linters) -> Build -> Deploy Staging (DAST / PenTest) -> Produção',
          realExamQuestion: {
            banca: 'Cebraspe',
            orgaoAno: 'Petrobras – Profissional de Nível Superior (Ciência de Dados e TI) – 2022',
            enunciado: `No âmbito do desenvolvimento seguro de software e das ferramentas de teste automatizado integradas ao pipeline DevSecOps (Shift-Left Security), julgue o item subsequente:

"Os testes de segurança estática de aplicações (SAST) operam sob a abordagem de caixa-preta (black-box), ==analisando a aplicação compilada e em pleno funcionamento em tempo de execução==, sem necessitar de acesso ao código-fonte, enquanto os testes de segurança dinâmica de aplicações (DAST) realizam varreduras diretamente sobre o código-fonte em repouso."`,
            alternativas: [
              {
                letra: 'C',
                texto: 'CERTO',
                correta: false,
                comentario: 'INCORRETO: O item inverteu completamente os conceitos de SAST e DAST.'
              },
              {
                letra: 'E',
                texto: '==ERRADO==',
                correta: true,
                comentario: 'CORRETO (ITEM ERRADO): O item trocou a definição: SAST (Static Application Security Testing) é teste de CAIXA-BRANCA (White-Box), que analisa o código-fonte em repouso sem executar o programa. Por outro lado, DAST (Dynamic Application Security Testing) é teste de CAIXA-PRETA (Black-Box), que injeta cargas maliciosas via HTTP na aplicação em tempo de execução.'
              }
            ],
            termosGrifados: [
              {
                termo: 'testes de segurança estática de aplicações (SAST) operam sob a abordagem de caixa-preta',
                papel: 'Inversão Conceitual',
                regra: 'SAST é Static = Caixa-Branca (inspeciona o código-fonte).',
                cor: 'rose'
              },
              {
                termo: 'analisando a aplicação compilada e em pleno funcionamento em tempo de execução',
                papel: 'Definição do DAST',
                regra: 'Tempo de execução (runtime) via rede/HTTP é o domínio exclusivo do DAST.',
                cor: 'yellow'
              },
              {
                termo: 'DAST realizam varreduras diretamente sobre o código-fonte em repouso',
                papel: 'Segunda Inversão',
                regra: 'DAST nunca olha código-fonte; ele interage apenas com as entradas e saídas da aplicação no ar.',
                cor: 'cyan'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE AS SIGLAS: SAST (S = Static) e DAST (D = Dynamic).',
              '2. LÓGICA MNEMÔNICA: Estático (Static) = parado (código-fonte em repouso / caixa-branca). Dinâmico (Dynamic) = em movimento (aplicação rodando em tempo de execução / caixa-preta).',
              '3. COMPARAÇÃO COM O ENUNCIADO: O enunciado atribuiu caixa-preta e execução ao SAST e código-fonte ao DAST. Inversão total!',
              '4. MARQUE: Item ERRADO instantaneamente.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: ERRADO',
            conclusaoPedagogica: 'PADRÃO CEBRASPE: Inverter pares antagônicos (SAST x DAST, Simétrica x Assimétrica, Risco x Ameaça) é a estratégia mais recorrente da banca. Fique atento aos termos trocados!'
          }
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
