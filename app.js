const profile = {
  email: "laamrimohamed01@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohamed-laamri",
  portfolio: "https://xmlwastaken.github.io/",
  cv: "assets/Mohamed-Laamri-CV.pdf",
  photo: "assets/mohamed-laamri.png"
};

const visuals = {
  leoni: `<svg viewBox="0 0 620 210" aria-hidden="true">
    <defs><linearGradient id="leoniLine" x1="0" x2="1"><stop stop-color="#d9ff68"/><stop offset="1" stop-color="#72e1d0"/></linearGradient></defs>
    <path d="M24 174H596" stroke="rgba(114,225,208,.28)"/>
    <g fill="rgba(217,255,104,.08)" stroke="#d9ff68" stroke-width="1.7"><rect x="47" y="102" width="123" height="50" rx="9"/><rect x="451" y="102" width="123" height="50" rx="9"/></g>
    <g fill="#d9ff68"><circle cx="77" cy="127" r="5"/><circle cx="544" cy="127" r="5"/></g>
    <path d="M170 126C256 64 364 186 451 126" fill="none" stroke="url(#leoniLine)" stroke-width="3" stroke-dasharray="8 7"/>
    <g transform="translate(271 62)"><rect width="78" height="93" rx="11" fill="rgba(114,225,208,.13)" stroke="#72e1d0" stroke-width="2"/><path d="M15 26h48M15 40h48M15 54h29" stroke="#72e1d0" stroke-width="3"/><circle cx="18" cy="73" r="4" fill="#d9ff68"/><circle cx="34" cy="73" r="4" fill="#d9ff68"/><circle cx="50" cy="73" r="4" fill="#d9ff68"/></g>
    <text x="285" y="188" fill="#b6cbc3" font-family="sans-serif" font-size="11" letter-spacing="2">PLC CONTROL</text>
  </svg>`,
  ocp: `<svg viewBox="0 0 620 210" aria-hidden="true">
    <g fill="none" stroke="#72e1d0" stroke-width="1.4" opacity=".58"><path d="M69 167V56h92v111M187 167V85h92v82M305 167V43h92v124M423 167V75h92v92"/></g>
    <path d="M31 167h558" stroke="rgba(217,255,104,.35)"/>
    <g fill="#d9ff68"><circle cx="115" cy="56" r="6"/><circle cx="233" cy="85" r="6"/><circle cx="351" cy="43" r="6"/><circle cx="469" cy="75" r="6"/></g>
    <path d="M115 56H233M233 85H351M351 43H469" stroke="#d9ff68" stroke-width="2" stroke-dasharray="6 7"/>
    <g fill="#b9d4ca" font-size="11" font-family="sans-serif" letter-spacing="1"><text x="77" y="190">START-UP</text><text x="197" y="190">CONTROL</text><text x="315" y="190">PID / PI</text><text x="436" y="190">SAFETY</text></g>
  </svg>`,
  solar: `<svg viewBox="0 0 620 210" aria-hidden="true">
    <defs><linearGradient id="solarLine" x1="0" x2="1"><stop stop-color="#d9ff68"/><stop offset="1" stop-color="#72e1d0"/></linearGradient></defs>
    <circle cx="499" cy="50" r="19" fill="none" stroke="#d9ff68" stroke-width="2"/><g stroke="#d9ff68" opacity=".65"><path d="M499 20v-10M499 80v10M469 50h-10M529 50h10M478 29l-7-7M520 71l7 7M520 29l7-7M478 71l-7 7"/></g>
    <path d="M43 171l87-63 87 63z" fill="rgba(114,225,208,.13)" stroke="#72e1d0" stroke-width="2"/><g stroke="#72e1d0" opacity=".7"><path d="M62 157l68-48 67 48M84 141h92M107 124v43M153 124v43"/></g>
    <path d="M218 173c49-84 119-78 188-21" fill="none" stroke="url(#solarLine)" stroke-width="3" stroke-dasharray="7 8"/>
    <g transform="translate(339 91)"><rect width="60" height="57" rx="9" fill="rgba(217,255,104,.12)" stroke="#d9ff68" stroke-width="2"/><path d="M13 20h34M13 31h34M13 42h20" stroke="#d9ff68" stroke-width="2"/></g>
    <path d="M0 173H620" stroke="rgba(217,255,104,.27)"/>
  </svg>`,
  agrinode: `<svg viewBox="0 0 620 210" aria-hidden="true">
    <g fill="none" stroke="#72e1d0" stroke-width="1.5" opacity=".62"><path d="M310 105L131 50M310 105L131 161M310 105L489 50M310 105L489 161" stroke-dasharray="5 7"/></g>
    <g transform="translate(278 73)"><rect width="64" height="64" rx="12" fill="rgba(217,255,104,.12)" stroke="#d9ff68" stroke-width="2"/><path d="M14 23h36M14 33h36M14 43h21" stroke="#d9ff68" stroke-width="2.5"/></g>
    <g fill="rgba(114,225,208,.10)" stroke="#72e1d0" stroke-width="1.7"><rect x="72" y="28" width="113" height="48" rx="11"/><rect x="72" y="137" width="113" height="48" rx="11"/><rect x="435" y="28" width="113" height="48" rx="11"/><rect x="435" y="137" width="113" height="48" rx="11"/></g>
    <g fill="#72e1d0"><circle cx="100" cy="52" r="5"/><circle cx="100" cy="161" r="5"/><circle cx="463" cy="52" r="5"/><circle cx="463" cy="161" r="5"/></g>
    <g fill="#c3d8d0" font-family="sans-serif" font-size="10" letter-spacing=".7"><text x="113" y="56">SERRE 01</text><text x="113" y="165">SERRE 02</text><text x="477" y="56">SERRE 03</text><text x="285" y="161" fill="#d9ff68">MQTT</text></g>
  </svg>`,
  robot: `<svg viewBox="0 0 620 210" aria-hidden="true">
    <path d="M29 173H591" stroke="rgba(114,225,208,.27)"/>
    <g fill="rgba(114,225,208,.12)" stroke="#72e1d0" stroke-width="2"><rect x="239" y="80" width="142" height="57" rx="17"/><circle cx="257" cy="145" r="16"/><circle cx="363" cy="145" r="16"/><circle cx="257" cy="73" r="16"/><circle cx="363" cy="73" r="16"/></g>
    <rect x="281" y="49" width="58" height="32" rx="8" fill="rgba(217,255,104,.12)" stroke="#d9ff68" stroke-width="2"/><path d="M310 49V27M295 27h30" stroke="#d9ff68" stroke-width="2"/><g fill="#d9ff68"><circle cx="145" cy="108" r="6"/><circle cx="475" cy="108" r="6"/></g><path d="M151 108h78M391 108h78" stroke="#d9ff68" stroke-width="2" stroke-dasharray="5 7"/>
    <path d="M304 105h12M293 116h34" stroke="#72e1d0" stroke-width="3"/>
  </svg>`,
  smart: `<svg viewBox="0 0 620 210" aria-hidden="true">
    <path d="M29 171H591" stroke="rgba(217,255,104,.3)"/>
    <g fill="none" stroke="#72e1d0" stroke-width="2"><path d="M67 164V103h100v61M184 164V76h100v88M301 164V106h100v58M418 164V91h100v73"/></g>
    <g fill="#72e1d0"><circle cx="116" cy="95" r="5"/><circle cx="233" cy="68" r="5"/><circle cx="350" cy="98" r="5"/><circle cx="467" cy="83" r="5"/></g>
    <path d="M116 95V83M233 68V56M350 98V86M467 83V71" stroke="#72e1d0"/>
    <g transform="translate(262 24)"><rect width="97" height="34" rx="8" fill="rgba(217,255,104,.13)" stroke="#d9ff68"/><text x="19" y="22" fill="#d9ff68" font-family="sans-serif" font-size="12" letter-spacing=".8">PIC16F887</text></g>
    <path d="M310 58v43M310 101l-81 0M310 101l88 0" stroke="#d9ff68" stroke-width="1.5" stroke-dasharray="4 5"/>
  </svg>`,
  batching: `<svg viewBox="0 0 620 210" aria-hidden="true">
    <path d="M28 172H592" stroke="rgba(114,225,208,.27)"/>
    <g fill="none" stroke="#72e1d0" stroke-width="2"><path d="M85 169L142 58 199 169M217 169L274 58 331 169M349 169L406 58 463 169"/></g>
    <g fill="rgba(217,255,104,.12)" stroke="#d9ff68" stroke-width="1.7"><path d="M108 116h67l-12 41h-43z"/><path d="M240 116h67l-12 41h-43z"/><path d="M372 116h67l-12 41h-43z"/></g>
    <path d="M141 58h265M141 58l27-33M406 58l-27-33" stroke="#d9ff68" stroke-width="2" stroke-dasharray="6 6"/>
    <g transform="translate(481 65)"><rect width="69" height="71" rx="10" fill="rgba(114,225,208,.11)" stroke="#72e1d0"/><path d="M493 86h45M493 97h45M493 108h29" stroke="#72e1d0" stroke-width="2"/></g>
  </svg>`
};

const content = {
  fr: {
    nav: { about: "À propos", experience: "Expériences", projects: "Projets", certs: "Certificats", skills: "Compétences", education: "Formation", resume: "CV", contact: "Contact" },
    actions: { viewCV: "Voir le CV", downloadCV: "Télécharger le PDF", credential: "Voir le certificat", verified: "Lien vérifié" },
    menu: "Menu", close: "Fermer", all: "Tout", industrial: "Industrie", iot: "IoT", embedded: "Embarqué", energy: "Énergie", details: "Détails", closeModal: "Fermer",
    hero: {
      availability: "Disponible pour un stage PFE en 2027",
      kicker: "PORTFOLIO / AUTOMATISME / SYSTÈMES INTELLIGENTS",
      titleA: "Mohamed", titleB: "Laamri",
      role: "Élève-ingénieur en <strong>Automatismes & Informatique Industrielle</strong>.",
      text: "Je transforme des besoins industriels en systèmes automatisés, connectés et mesurables — des API Siemens et interfaces de supervision jusqu’aux solutions IoT et systèmes embarqués.",
      primary: "Me contacter", secondary: "Explorer le portfolio", scroll: "Défiler pour explorer",
      resumeLabel: "CV / CURRICULUM VITAE", resumeMeta: "Mohamed Laamri · PDF · Mis à jour en septembre 2026", portraitAlt: "Portrait de Mohamed Laamri",
      ticker: ["TIA PORTAL", "S7-1500", "WINCC", "NODE-RED", "MQTT", "INDUSTRIE 4.0"],
      hud: "SYSTÈME CONNECTÉ", status: "EN LIGNE", nodeA: "CONTRÔLE", nodeB: "SUPERVISION", nodeC: "IIoT",
      stats: [["3", "environnements industriels"], ["7", "projets sélectionnés"], ["2027", "diplôme d’ingénieur prévu"]]
    },
    about: {
      index: "01 / À PROPOS", title: "De l’atelier à la donnée, une vision complète du système.", lead: "Un profil à l’intersection de l’<em>automatisme industriel</em>, de la supervision et des systèmes embarqués.",
      text: "Élève-ingénieur à l’EMSI, promotion 2027, j’adopte une démarche d’ingénierie concrète : comprendre le procédé, formaliser les besoins, développer la logique de commande, rendre les données visibles et valider le comportement du système. Mon parcours associe expérience terrain, projets techniques et apprentissage continu autour de l’industrie 4.0.",
      email: "Envoyer un e-mail", linkedin: "Voir LinkedIn", profileLabel: "MOHAMED LAAMRI", profileMeta: "Ingénierie IAII · EMSI · Promotion 2027",
      cards: [
        ["01", "Contrôle industriel", "API Siemens, S7-1500, SCL, Ladder, GRAFCET et régulation PI/PID."],
        ["02", "Supervision & données", "WinCC, Node-RED, IHM, tableaux de bord, alarmes et historisation."],
        ["03", "IoT & systèmes embarqués", "ESP32, Arduino, PIC, MQTT, capteurs, actionneurs et communications."],
        ["04", "Méthode d’ingénierie", "Analyse fonctionnelle, cahier des charges, simulation, validation et documentation." ]
      ]
    },
    experience: {
      index: "02 / EXPÉRIENCES", title: "Des expériences techniques au contact de l’industrie.", lead: "Automatisme, contrôle de procédé, supervision et intégration terrain dans trois environnements industriels.",
      items: [
        { company: "LEONI Maroc", period: "Juil. 2026 — Août 2026", location: "Bouznika, Maroc", role: "Stage PFA | Automatisme industriel & supervision", summary: "Conception et validation en simulation d’un système de coulisse pneumatique pour une ligne d’assemblage de faisceaux électriques.", bullets: ["Programmation d’un automate Siemens S7-1500 sous TIA Portal V20, avec logique de commande en SCL.", "Modélisation GRAFCET, gestion des palettes, comptage, interverrouillages et scénarios de défaut.", "Conception d’une supervision WinCC et d’un dashboard Node-RED pour le suivi des données et alertes.", "Validation des scénarios fonctionnels et de sécurité sous S7-PLCSIM Advanced."], tags: ["TIA Portal", "S7-1500", "SCL", "WinCC", "Node-RED"] },
        { company: "OCP Group", period: "Juil. 2025 — Août 2025", location: "Jorf Lasfar, Maroc", role: "Stage d’application | Analyse fonctionnelle & régulation de procédé", summary: "Analyse fonctionnelle de l’unité 107A de production d’engrais DAP afin de formaliser les logiques de commande existantes.", bullets: ["Modélisation par GRAFCET des séquences de démarrage des circuits de production.", "Identification des conditions de marche, permissifs et interverrouillages de sécurité.", "Analyse des boucles de régulation PI/PID liées aux variables critiques du procédé.", "Contribution à un référentiel technique pour la maintenance, l’exploitation et la formation."], tags: ["GRAFCET", "PI/PID", "Contrôle de procédé", "Instrumentation"] },
        { company: "Optimum Process Maroc", period: "Avr. 2023 — Juil. 2023", location: "Casablanca, Maroc", role: "Stage PFE | Automatisation d’une centrale à béton", summary: "Conception et simulation de l’automatisation d’une centrale à béton dans le cadre de la Licence Professionnelle SACI.", bullets: ["Développement de séquences de dosage et de malaxage en langage Ladder.", "Configuration des entrées/sorties et des tables de variables sous Siemens TIA Portal.", "Création d’une IHM de supervision pour les convoyeurs, le malaxeur et les vannes.", "Validation de la logique de commande sous PLCSIM."], tags: ["Ladder", "PLCSIM", "IHM", "API / PLC"] },
        { company: "Optimum Process Maroc", period: "Avr. 2022", location: "Casablanca, Maroc", role: "Stage d’initiation | Installation & maintenance de centrales à béton", summary: "Première immersion terrain en électromécanique, câblage et maintenance d’installations industrielles.", bullets: ["Participation au montage d’armoires électriques et au raccordement de câbles.", "Assistance aux opérations de montage, fixation et maintenance de centrales à béton.", "Découverte des équipements Liebherr et des logiciels RSAI."], tags: ["Câblage", "Électromécanique", "Maintenance"] }
      ]
    },
    projects: {
      index: "03 / PROJETS", title: "Des projets qui relient automatisme, IoT et impact concret.", lead: "Sept réalisations académiques et industrielles, de la conception de commande à la supervision connectée.",
      categories: { all: "Tout", industrial: "Industrie", iot: "IoT", embedded: "Embarqué", energy: "Énergie" },
      items: [
        { id: "leoni", type: "industrial", year: "2026", label: "PROJET INDUSTRIEL", title: "Coulisse pneumatique automatisée", text: "Automatisation et supervision d’un système de gestion alternée de palettes en fin de ligne d’assemblage automobile.", tags: ["S7-1500", "SCL", "WinCC", "Node-RED"], detail: ["Analyse fonctionnelle du poste et définition des exigences d’ergonomie, sécurité, traçabilité et logistique.", "Cycle GRAFCET à 12 étapes, développé autour d’un bloc fonctionnel générique et réutilisable.", "Supervision locale WinCC, dashboard Node-RED, indicateurs de production et notifications logistiques.", "Validation complète par scénarios sous S7-PLCSIM Advanced avant mise en œuvre terrain."], accent: "#d9ff68" },
        { id: "ocp", type: "industrial", year: "2025", label: "PROJET INDUSTRIEL", title: "Smart Unit 107A — Analyse fonctionnelle", text: "Formalisation des séquences de commande et des boucles de régulation d’une unité de production d’engrais DAP.", tags: ["GRAFCET", "PI/PID", "Sécurité", "Documentation"], detail: ["Analyse a posteriori de la logique de commande d’une unité déjà opérationnelle pour combler un besoin documentaire.", "Modélisation des circuits d’assainissement, stockage, produit fini, broyage, granulation, séchage et réaction.", "Identification des permissifs, interverrouillages et conditions de marche des équipements.", "Analyse de cinq boucles PI/PID : liquide de lavage, ammoniac gazeux et liquide, acide phosphorique et humidité."], accent: "#72e1d0" },
        { id: "solar", type: "energy", year: "2026", label: "PROJET ACADÉMIQUE", title: "Irrigation solaire autonome", text: "Système d’irrigation intelligent pour une serre de 500 m² : commande, supervision à distance et dimensionnement photovoltaïque.", tags: ["Arduino Mega", "Node-RED", "Telegram", "PV"], detail: ["Conception d’une solution d’irrigation goutte-à-goutte alimentée par énergie solaire pour une serre de poivrons à Benslimane.", "Acquisition de température, humidité, luminosité, niveau d’eau, pH et turbidité pour piloter pompe, électrovannes, ventilation, brumisation et ombrage.", "Développement de quatre modes : manuel, automatique ON/OFF, temporisation RTC et commande intelligente multicritère.", "Simulation sous Proteus, supervision Node-RED, assistant Telegram et dimensionnement hydraulique et énergétique."], accent: "#ffd27b" },
        { id: "agrinode", type: "iot", year: "2026", label: "PROJET ACADÉMIQUE", title: "AgriNode IoT", text: "Plateforme distribuée de gestion de trois serres intelligentes avec acquisition locale, contrôle automatique et supervision centralisée.", tags: ["ESP32", "MQTT", "Node-RED", "IoT"], detail: ["Architecture distribuée composée d’une unité centrale et de trois serres spécialisées, chacune pilotée localement par un ESP32.", "Acquisition de données environnementales et commande de l’irrigation, ventilation, chauffage, brumisation et ombrage.", "Communication temps réel par MQTT entre les nœuds, une passerelle et la supervision Node-RED.", "Validation en simulation sous Proteus des modes automatique, manuel, alarmes et scénarios environnementaux critiques."], accent: "#72e1d0" },
        { id: "robot", type: "embedded", year: "2025", label: "PROJET ACADÉMIQUE", title: "Robot mobile multifonctionnel", text: "Prototype 4WD Arduino avec contrôle Bluetooth, détection ultrasonique, évitement d’obstacles et régulation PID.", tags: ["Arduino", "PID", "Bluetooth", "HC-SR04"], detail: ["Conception matérielle et logicielle d’un robot mobile à quatre roues motrices basé sur Arduino UNO.", "Commande sans fil via Bluetooth, lecture de distance par capteur HC-SR04 monté sur servomoteur et stratégie réactive d’évitement.", "Pilotage des moteurs via driver L293D, intégration de PID pour améliorer la stabilité du déplacement.", "Simulation sous Proteus, réalisation physique et tests en environnement contrôlé."], accent: "#ff9a6b" },
        { id: "smart", type: "embedded", year: "2025", label: "PROJET ACADÉMIQUE", title: "Smart Irrigation System", text: "Irrigation intelligente multi-zones pour jardin domestique, basée sur des capteurs, une logique embarquée et une alimentation solaire.", tags: ["PIC16F887", "MikroC", "RTC", "Capteurs"], detail: ["Système multi-zones basé sur PIC16F887, capteurs d’humidité, de température, de pluie et de niveau d’eau.", "Commande de pompe et électrovannes, modes automatique et manuel, déclenchements programmés par RTC DS1307.", "Affichage local LCD et télécommande Bluetooth pour le suivi et le contrôle des actionneurs.", "Développement sous MikroC, simulation Proteus et tests unitaires sur carte EasyPIC v7."], accent: "#c4a6ff" },
        { id: "batching", type: "industrial", year: "2023", label: "PROJET DE FIN D’ÉTUDES", title: "Automatisation d’une centrale à béton", text: "Conception et simulation d’un système de dosage, malaxage et supervision de centrale à béton sous Siemens TIA Portal.", tags: ["TIA Portal", "Ladder", "PLCSIM", "IHM"], detail: ["Configuration de l’automate, des entrées/sorties et des tables de variables dans Siemens TIA Portal.", "Programmation Ladder des séquences de dosage du sable, ciment et eau, ainsi que des convoyeurs et du malaxeur.", "Utilisation de comparaison et de mise à l’échelle de valeurs analogiques.", "Création d’une IHM de conduite et validation fonctionnelle de la logique de commande sous PLCSIM."], accent: "#d9ff68" }
      ]
    },
    certificates: {
      index: "04 / CERTIFICATS", title: "Certifications vérifiables & apprentissage continu.", lead: "Cinq parcours complémentaires avec accès direct à chaque justificatif Coursera.",
      items: [
        { category: "Machine learning", title: "Machine Learning in Production", issuer: "DeepLearning.AI", date: "26 mars 2026", text: "Mise en production et cycle de vie de modèles de machine learning.", url: "https://www.coursera.org/account/accomplishments/verify/J97MO6AGTEPR" },
        { category: "Énergie", title: "Electric Power Systems", issuer: "University at Buffalo / SUNY", date: "26 mars 2026", text: "Fondamentaux des réseaux et systèmes de puissance électriques.", url: "https://www.coursera.org/account/accomplishments/verify/4KL112SCU2KK" },
        { category: "IoT & embarqué", title: "Introduction to the Internet of Things and Embedded Systems", issuer: "University of California, Irvine", date: "12 mars 2025", text: "Systèmes connectés, capteurs, microcontrôleurs et architecture IoT.", url: "https://www.coursera.org/account/accomplishments/verify/6EUZQHKG3LEQ" },
        { category: "Machine learning", title: "Machine Learning Foundations: A Case Study Approach", issuer: "University of Washington", date: "6 décembre 2025", text: "Fondamentaux du machine learning appliqués à des cas d’usage réels.", url: "https://www.coursera.org/account/accomplishments/verify/QGVYJWKJ1JF9" },
        { category: "Programmation", title: "Crash Course on Python", issuer: "Google", date: "21 novembre 2024", text: "Fondamentaux de Python pour l’automatisation et le développement.", url: "https://www.coursera.org/account/accomplishments/verify/II4574HSUM0Z" }
      ]
    },
    skills: {
      index: "05 / COMPÉTENCES", title: "Un stack complet, de la logique de commande au système connecté.", lead: "Des outils techniques structurés autour de l’automatisme, de la supervision et des systèmes intelligents.", featureTitle: "L’automatisation est le point de départ.", featureText: "Mon objectif : relier une logique de commande fiable, une supervision claire et des données exploitables pour créer des systèmes industriels plus sûrs et plus efficaces.",
      groups: [
        ["01", "Automatisme & contrôle", ["TIA Portal", "Siemens S7-1500", "API / PLC", "SCL", "Ladder", "GRAFCET", "PI/PID"]],
        ["02", "Supervision & données", ["WinCC", "IHM", "Node-RED", "SCADA", "PLCSIM", "Dashboards"]],
        ["03", "IoT & embarqué", ["ESP32", "Arduino", "PIC16F887", "MQTT", "Capteurs", "Actionneurs"]],
        ["04", "Ingénierie terrain", ["Analyse fonctionnelle", "Instrumentation", "Pneumatique", "Câblage", "Maintenance", "Documentation"]]
      ]
    },
    education: {
      index: "06 / FORMATION", title: "Un parcours progressif entre terrain, automatisme et innovation.", lead: "Des bases électromécaniques aux systèmes connectés et à l’ingénierie industrielle.",
      items: [
        { current: true, period: "2024 — 2027", school: "EMSI", degree: "Diplôme d’ingénieur", text: "Automatismes et Informatique Industrielle — contrôle-commande, API, supervision, systèmes embarqués, IoT et réseaux industriels." },
        { current: false, period: "2022 — 2023", school: "FSTM Mohammedia", degree: "Licence professionnelle d’université", text: "Systèmes Automatisés et Contrôle Industriel — automatisation des procédés, programmation d’automates et supervision industrielle." },
        { current: false, period: "2020 — 2022", school: "Institut Spécialisé Industriel de Mohammedia", degree: "Diplôme de technicien spécialisé", text: "Électromécanique des Systèmes Automatisés — câblage, machines électriques, pneumatique, instrumentation et maintenance." }
      ]
    },
    resume: {
      index: "07 / CV", title: "Mon CV, disponible en un clic.", lead: "Consultez directement le PDF ou téléchargez-le pour votre dossier de recrutement.", label: "CURRICULUM VITAE / PDF", meta: "Mohamed Laamri · Version septembre 2026", note: "Un document d’une page avec parcours, compétences, expériences et certifications.", preview: "Aperçu du CV de Mohamed Laamri", fallback: "L’aperçu PDF n’est pas pris en charge par votre navigateur ?"
    },
    contact: {
      index: "08 / CONTACT", title: "Construisons le prochain système intelligent.", text: "Je recherche un stage PFE de 4 à 6 mois en automatisme industriel, contrôle-commande, informatique industrielle ou Industrie 4.0.", button: "M’envoyer un e-mail", copy: "Copier l’e-mail", copied: "E-mail copié !", location: "Benslimane, Casablanca-Settat, Maroc", availability: "Disponible pour un PFE en 2027"
    },
    footer: "Portfolio d’automatisme industriel, systèmes embarqués et IoT.", source: "GitHub"
  },
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", certs: "Certificates", skills: "Skills", education: "Education", resume: "CV", contact: "Contact" },
    actions: { viewCV: "View CV", downloadCV: "Download PDF", credential: "View credential", verified: "Verified link" },
    menu: "Menu", close: "Close", all: "All", industrial: "Industry", iot: "IoT", embedded: "Embedded", energy: "Energy", details: "Details", closeModal: "Close",
    hero: {
      availability: "Available for a 2027 final-year internship",
      kicker: "PORTFOLIO / AUTOMATION / SMART SYSTEMS",
      titleA: "Mohamed", titleB: "Laamri",
      role: "Final-year Engineering Student in <strong>Industrial Automation & Computing</strong>.",
      text: "I turn industrial requirements into automated, connected and measurable systems — from Siemens PLCs and supervision interfaces to IoT solutions and embedded systems.",
      primary: "Get in touch", secondary: "Explore portfolio", scroll: "Scroll to explore",
      resumeLabel: "CV / RÉSUMÉ", resumeMeta: "Mohamed Laamri · PDF · Updated September 2026", portraitAlt: "Portrait of Mohamed Laamri",
      ticker: ["TIA PORTAL", "S7-1500", "WINCC", "NODE-RED", "MQTT", "INDUSTRY 4.0"],
      hud: "CONNECTED SYSTEM", status: "ONLINE", nodeA: "CONTROL", nodeB: "SUPERVISION", nodeC: "IIoT",
      stats: [["3", "industrial environments"], ["7", "selected projects"], ["2027", "expected engineering degree"]]
    },
    about: {
      index: "01 / ABOUT", title: "From shop-floor signals to data, a complete system view.", lead: "A profile at the intersection of <em>industrial automation</em>, supervision and embedded systems.",
      text: "An engineering student at EMSI, class of 2027, I use a practical engineering approach: understand the process, formalize needs, develop control logic, make data visible and validate system behaviour. My path combines field experience, technical projects and continuous learning around Industry 4.0.",
      email: "Send an email", linkedin: "View LinkedIn", profileLabel: "MOHAMED LAAMRI", profileMeta: "Industrial Automation & Computing · EMSI · Class of 2027",
      cards: [
        ["01", "Industrial control", "Siemens PLCs, S7-1500, SCL, Ladder, GRAFCET and PI/PID control."],
        ["02", "Supervision & data", "WinCC, Node-RED, HMI, dashboards, alarms and event logging."],
        ["03", "IoT & embedded systems", "ESP32, Arduino, PIC, MQTT, sensors, actuators and connected communications."],
        ["04", "Engineering method", "Functional analysis, specifications, simulation, validation and technical documentation." ]
      ]
    },
    experience: {
      index: "02 / EXPERIENCE", title: "Technical experience close to industrial operations.", lead: "Industrial automation, process control, supervision and field integration across three industrial environments.",
      items: [
        { company: "LEONI Morocco", period: "Jul 2026 — Aug 2026", location: "Bouznika, Morocco", role: "End-of-Year Internship | Industrial Automation & Supervision", summary: "Designed and simulation-validated a pneumatic sliding system for an automotive wire-harness assembly line.", bullets: ["Programmed a Siemens S7-1500 PLC in TIA Portal V20 using SCL control logic.", "Modelled the cycle with GRAFCET, including pallet management, counting, interlocks and fault scenarios.", "Designed a WinCC supervision interface and a Node-RED dashboard for data monitoring and alerts.", "Validated functional and safety scenarios using S7-PLCSIM Advanced."], tags: ["TIA Portal", "S7-1500", "SCL", "WinCC", "Node-RED"] },
        { company: "OCP Group", period: "Jul 2025 — Aug 2025", location: "Jorf Lasfar, Morocco", role: "Industrial Internship | Functional Analysis & Process Control", summary: "Performed a functional analysis of the 107A DAP fertilizer production unit to document existing control logic.", bullets: ["Modelled start-up sequences for core production circuits using GRAFCET.", "Identified operating conditions, permissives and safety interlocks for industrial equipment.", "Analysed PI/PID control loops linked to critical process variables.", "Contributed to technical documentation for maintenance, operations and training."], tags: ["GRAFCET", "PI/PID", "Process Control", "Instrumentation"] },
        { company: "Optimum Process Morocco", period: "Apr 2023 — Jul 2023", location: "Casablanca, Morocco", role: "Final-Year Internship | Concrete Batching Plant Automation", summary: "Designed and simulated a concrete batching plant automation system as part of a Professional Bachelor’s degree.", bullets: ["Developed Ladder-based dosing and mixing sequences.", "Configured I/O and variable tables in Siemens TIA Portal.", "Created an HMI for conveyors, mixer and valve supervision.", "Validated control logic using PLCSIM."], tags: ["Ladder", "PLCSIM", "HMI", "PLC"] },
        { company: "Optimum Process Morocco", period: "Apr 2022", location: "Casablanca, Morocco", role: "Introductory Internship | Concrete Plant Installation & Maintenance", summary: "First hands-on industrial exposure in electromechanics, electrical wiring and maintenance.", bullets: ["Supported electrical control-panel assembly and cable wiring.", "Assisted with installation, fastening and maintenance work on concrete batching plants.", "Gained familiarity with Liebherr equipment and RSAI software."], tags: ["Wiring", "Electromechanics", "Maintenance"] }
      ]
    },
    projects: {
      index: "03 / PROJECTS", title: "Projects that connect automation, IoT and concrete impact.", lead: "Seven academic and industrial projects, from control-system design to connected supervision.",
      categories: { all: "All", industrial: "Industry", iot: "IoT", embedded: "Embedded", energy: "Energy" },
      items: [
        { id: "leoni", type: "industrial", year: "2026", label: "INDUSTRIAL PROJECT", title: "Automated Pneumatic Sliding System", text: "Automation and supervision of an alternating pallet-management system at the end of an automotive assembly line.", tags: ["S7-1500", "SCL", "WinCC", "Node-RED"], detail: ["Performed functional analysis and defined ergonomics, safety, traceability and logistics requirements.", "Designed a 12-step GRAFCET cycle around a reusable generic function block.", "Built WinCC local supervision, a Node-RED dashboard, production indicators and logistics notifications.", "Completed scenario-based validation in S7-PLCSIM Advanced before field implementation."], accent: "#d9ff68" },
        { id: "ocp", type: "industrial", year: "2025", label: "INDUSTRIAL PROJECT", title: "Smart Unit 107A — Functional Analysis", text: "Documentation of control sequences and control loops for a DAP fertilizer production unit.", tags: ["GRAFCET", "PI/PID", "Safety", "Documentation"], detail: ["Performed an as-built functional analysis of an operational unit to address a technical documentation need.", "Modelled gas treatment, storage, finished-product, crushing, granulation, drying and reaction circuits.", "Identified permissives, interlocks and operating conditions for plant equipment.", "Analysed five PI/PID loops: wash liquid, gaseous and liquid ammonia, phosphoric acid and moisture."], accent: "#72e1d0" },
        { id: "solar", type: "energy", year: "2026", label: "ACADEMIC PROJECT", title: "Autonomous Solar Irrigation", text: "Smart irrigation for a 500 m² greenhouse: control, remote supervision and photovoltaic sizing.", tags: ["Arduino Mega", "Node-RED", "Telegram", "PV"], detail: ["Designed a solar-powered drip-irrigation solution for a pepper greenhouse in Benslimane.", "Acquired temperature, humidity, light, water-level, pH and turbidity data to control pumps, solenoid valves, ventilation, misting and shading.", "Developed four modes: manual, automatic ON/OFF, RTC scheduling and multi-criteria intelligent control.", "Used Proteus simulation, Node-RED supervision, a Telegram assistant, and hydraulic and energy sizing."], accent: "#ffd27b" },
        { id: "agrinode", type: "iot", year: "2026", label: "ACADEMIC PROJECT", title: "AgriNode IoT", text: "Distributed platform for three smart greenhouses with local acquisition, automatic control and centralized supervision.", tags: ["ESP32", "MQTT", "Node-RED", "IoT"], detail: ["Designed a distributed architecture comprising a central unit and three specialized greenhouses, each locally controlled by an ESP32.", "Collected environmental data and controlled irrigation, ventilation, heating, misting and shading.", "Implemented real-time MQTT communication between nodes, a gateway and Node-RED supervision.", "Validated automatic/manual modes, alarms and critical environmental scenarios in Proteus simulation."], accent: "#72e1d0" },
        { id: "robot", type: "embedded", year: "2025", label: "ACADEMIC PROJECT", title: "Multifunctional Mobile Robot", text: "Arduino-based 4WD prototype with Bluetooth control, ultrasonic sensing, obstacle avoidance and PID control.", tags: ["Arduino", "PID", "Bluetooth", "HC-SR04"], detail: ["Designed hardware and software for a four-wheel-drive mobile robot based on Arduino UNO.", "Added wireless Bluetooth control, HC-SR04 distance sensing on a servo and reactive obstacle avoidance.", "Controlled motors through an L293D driver and used PID to improve motion stability.", "Performed Proteus simulation, physical assembly and controlled-environment testing."], accent: "#ff9a6b" },
        { id: "smart", type: "embedded", year: "2025", label: "ACADEMIC PROJECT", title: "Smart Irrigation System", text: "Multi-zone smart irrigation for a home garden, based on sensors, embedded logic and solar power.", tags: ["PIC16F887", "MikroC", "RTC", "Sensors"], detail: ["Built a multi-zone solution based on a PIC16F887, soil-moisture, temperature, rain and water-level sensors.", "Controlled a pump and solenoid valves in manual and automatic modes with RTC DS1307 scheduling.", "Included a local LCD and Bluetooth remote control for monitoring and actuator control.", "Developed in MikroC, simulated in Proteus and unit-tested on an EasyPIC v7 board."], accent: "#c4a6ff" },
        { id: "batching", type: "industrial", year: "2023", label: "FINAL-YEAR PROJECT", title: "Concrete Batching Plant Automation", text: "Design and simulation of dosing, mixing and supervision for a concrete batching plant in Siemens TIA Portal.", tags: ["TIA Portal", "Ladder", "PLCSIM", "HMI"], detail: ["Configured the PLC, I/O and variable tables in Siemens TIA Portal.", "Programmed Ladder sequences for sand, cement and water dosing, conveyors and mixer control.", "Used comparison and analogue signal-scaling functions.", "Created an HMI and functionally validated the logic in PLCSIM."], accent: "#d9ff68" }
      ]
    },
    certificates: {
      index: "04 / CERTIFICATES", title: "Verifiable certifications & continuous learning.", lead: "Five complementary learning paths, each linked directly to its Coursera credential.",
      items: [
        { category: "Machine learning", title: "Machine Learning in Production", issuer: "DeepLearning.AI", date: "26 Mar 2026", text: "Production deployment and lifecycle management for machine-learning models.", url: "https://www.coursera.org/account/accomplishments/verify/J97MO6AGTEPR" },
        { category: "Energy", title: "Electric Power Systems", issuer: "University at Buffalo / SUNY", date: "26 Mar 2026", text: "Fundamentals of electrical power networks and systems.", url: "https://www.coursera.org/account/accomplishments/verify/4KL112SCU2KK" },
        { category: "IoT & embedded", title: "Introduction to the Internet of Things and Embedded Systems", issuer: "University of California, Irvine", date: "12 Mar 2025", text: "Connected systems, sensors, microcontrollers and IoT architecture.", url: "https://www.coursera.org/account/accomplishments/verify/6EUZQHKG3LEQ" },
        { category: "Machine learning", title: "Machine Learning Foundations: A Case Study Approach", issuer: "University of Washington", date: "6 Dec 2025", text: "Machine-learning foundations applied to real-world cases.", url: "https://www.coursera.org/account/accomplishments/verify/QGVYJWKJ1JF9" },
        { category: "Programming", title: "Crash Course on Python", issuer: "Google", date: "21 Nov 2024", text: "Python fundamentals for automation and software development.", url: "https://www.coursera.org/account/accomplishments/verify/II4574HSUM0Z" }
      ]
    },
    skills: {
      index: "05 / SKILLS", title: "A complete stack, from control logic to connected systems.", lead: "Technical tools structured around automation, supervision and smart systems.", featureTitle: "Automation is the starting point.", featureText: "My goal is to connect reliable control logic, clear supervision and usable data to create safer and more efficient industrial systems.",
      groups: [
        ["01", "Automation & control", ["TIA Portal", "Siemens S7-1500", "PLC Programming", "SCL", "Ladder", "GRAFCET", "PI/PID"]],
        ["02", "Supervision & data", ["WinCC", "HMI", "Node-RED", "SCADA", "PLCSIM", "Dashboards"]],
        ["03", "IoT & embedded", ["ESP32", "Arduino", "PIC16F887", "MQTT", "Sensors", "Actuators"]],
        ["04", "Field engineering", ["Functional Analysis", "Instrumentation", "Pneumatics", "Electrical Wiring", "Maintenance", "Documentation"]]
      ]
    },
    education: {
      index: "06 / EDUCATION", title: "A progression from field work to automation and innovation.", lead: "From electromechanical foundations to connected systems and industrial engineering.",
      items: [
        { current: true, period: "2024 — 2027", school: "EMSI", degree: "Engineering Degree", text: "Automation and Industrial Computing — control systems, PLCs, supervision, embedded systems, IoT and industrial networks." },
        { current: false, period: "2022 — 2023", school: "FSTM Mohammedia", degree: "Professional Bachelor’s Degree", text: "Automated Systems and Industrial Control — process automation, PLC programming and industrial supervision." },
        { current: false, period: "2020 — 2022", school: "Institut Spécialisé Industriel de Mohammedia", degree: "Specialized Technician Diploma", text: "Electromechanics of Automated Systems — wiring, electric machines, pneumatics, instrumentation and maintenance." }
      ]
    },
    resume: {
      index: "07 / CV", title: "My CV, one click away.", lead: "Open the PDF directly or download it for your recruitment file.", label: "CURRICULUM VITAE / PDF", meta: "Mohamed Laamri · September 2026 edition", note: "A one-page document covering education, skills, experience and certifications.", preview: "Preview of Mohamed Laamri’s CV", fallback: "Is PDF preview not supported by your browser?"
    },
    contact: {
      index: "08 / CONTACT", title: "Let’s build the next smart system.", text: "I am seeking a 4–6 month final-year internship in industrial automation, process control, industrial computing or Industry 4.0.", button: "Send me an email", copy: "Copy email", copied: "Email copied!", location: "Benslimane, Casablanca-Settat, Morocco", availability: "Available for a 2027 final-year internship"
    },
    footer: "Industrial automation, embedded systems and IoT portfolio.", source: "GitHub"
  }
};

let language = "fr";
let projectFilter = "all";

const el = (selector) => document.querySelector(selector);
const escapeHTML = (value) => String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
const chips = (values, highlight = false) => `<div class="chips">${values.map(value => `<span class="chip${highlight ? " highlight" : ""}">${escapeHTML(value)}</span>`).join("")}</div>`;
const heading = (section) => `<div class="container section-heading reveal"><div><p class="eyebrow">${section.index}</p><h2>${section.title}</h2></div><p>${section.lead}</p></div>`;

function renderHeader(t) {
  el("#site-header").innerHTML = `
    <div class="container nav">
      <a class="brand" href="#home" aria-label="Mohamed Laamri home"><span class="brand-mark">ML</span><span>Mohamed Laamri</span></a>
      <nav aria-label="Primary navigation"><ul class="nav-list">
        <li><a href="#about">${t.nav.about}</a></li><li><a href="#experience">${t.nav.experience}</a></li><li><a href="#projects">${t.nav.projects}</a></li><li><a href="#certifications">${t.nav.certs}</a></li><li><a href="#skills">${t.nav.skills}</a></li><li><a href="#education">${t.nav.education}</a></li><li><a href="#resume">${t.nav.resume}</a></li>
      </ul></nav>
      <div class="nav-controls">
        <div class="language-switch" aria-label="Language selector"><button class="${language === "fr" ? "active" : ""}" data-language="fr" type="button">FR</button><button class="${language === "en" ? "active" : ""}" data-language="en" type="button">EN</button></div>
        <a class="nav-resume" href="${profile.cv}" target="_blank" rel="noopener" aria-label="${t.actions.viewCV} PDF"><span>CV</span><b>↗</b></a>
        <a class="nav-contact magnetic" href="#contact">${t.nav.contact}</a>
        <button class="mobile-menu-button" type="button" aria-label="${t.menu}" aria-expanded="false"><span></span></button>
      </div>
      <nav class="mobile-nav" aria-label="Mobile navigation">
        <a href="#about">${t.nav.about}</a><a href="#experience">${t.nav.experience}</a><a href="#projects">${t.nav.projects}</a><a href="#certifications">${t.nav.certs}</a><a href="#skills">${t.nav.skills}</a><a href="#education">${t.nav.education}</a><a href="#resume">${t.nav.resume}</a><a href="#contact">${t.nav.contact}</a><a href="${profile.cv}" target="_blank" rel="noopener">${t.actions.viewCV} ↗</a>
      </nav>
    </div>`;
}

function renderHero(t) {
  const h = t.hero;
  const tickerItems = [...h.ticker, ...h.ticker];
  const waveBars = [42, 67, 34, 81, 54, 92, 48, 73, 38, 65, 87, 45];
  el("#home").innerHTML = `
    <div class="container hero-grid">
      <div class="hero-content reveal">
        <div class="availability"><span class="availability-dot"></span>${h.availability}</div>
        <div class="hero-kicker">${h.kicker}</div>
        <h1 class="hero-title">${h.titleA}<br><span class="outline">${h.titleB.slice(0, 2)}</span><span class="accent">${h.titleB.slice(2)}</span></h1>
        <p class="hero-role">${h.role}</p>
        <p class="hero-description">${h.text}</p>
        <div class="action-row"><a class="button button-primary magnetic" href="#contact">${h.primary}<span class="button-icon">↗</span></a><a class="button" href="#projects">${h.secondary}<span class="button-icon">↓</span></a></div>
        <aside class="hero-resume-card" aria-label="${h.resumeLabel}">
          <div class="resume-card-mark"><span>CV</span><i></i></div>
          <div class="resume-card-copy"><small>${h.resumeLabel}</small><strong>${h.resumeMeta}</strong></div>
          <div class="resume-card-actions"><a href="${profile.cv}" target="_blank" rel="noopener">${t.actions.viewCV} <b>↗</b></a><a href="${profile.cv}" download="Mohamed-Laamri-CV.pdf">${t.actions.downloadCV} <b>↓</b></a></div>
        </aside>
        <div class="hero-stats">${h.stats.map(([value, label]) => `<div class="stat"><strong class="stat-number" data-count="${value}">${value}</strong><span class="stat-label">${label}</span></div>`).join("")}</div>
      </div>
      <div class="hero-aside reveal delay-2">
        <div class="system-hud">
          <div class="hud-top"><span>ML // SYSTEM MAP</span><span class="hud-status"><i></i>${h.status}</span></div>
          <svg class="hud-path" viewBox="0 0 500 500" aria-hidden="true"><defs><linearGradient id="hudLine" x1="0" x2="1"><stop stop-color="#d9ff68" stop-opacity=".3"/><stop offset=".5" stop-color="#72e1d0" stop-opacity=".9"/><stop offset="1" stop-color="#d9ff68" stop-opacity=".3"/></linearGradient></defs><path d="M32 162 C126 162 125 255 230 255S355 108 468 108" fill="none" stroke="url(#hudLine)" stroke-width="1.8"/><path d="M32 353 C133 353 137 279 232 279S359 397 468 397" fill="none" stroke="url(#hudLine)" stroke-width="1.8"/></svg>
          <div class="hud-data first"><small>NODE_01</small><strong class="lime">${h.nodeA}</strong></div>
          <div class="hud-core"><div class="core-node"><img src="${profile.photo}" alt="${h.portraitAlt}" /></div></div>
          <div class="hud-data second"><small>NODE_02</small><strong class="aqua">${h.nodeB}</strong></div>
          <div class="hud-data third"><small>NODE_03</small><strong>${h.nodeC}</strong></div>
          <div class="hud-wave" aria-hidden="true"><small>SIGNAL / LIVE</small><div>${waveBars.map((height, index) => `<span style="--h:${height}%;--d:${index * -0.12}s"></span>`).join("")}</div></div>
        </div>
        <div class="scroll-prompt"><i></i><span>${h.scroll}</span></div>
      </div>
    </div>
    <div class="hero-ticker" aria-hidden="true"><div class="hero-ticker-track">${tickerItems.map(item => `<span>${item}<b>✦</b></span>`).join("")}</div></div>`;
}

function renderAbout(t) {
  const a = t.about;
  el("#about").innerHTML = `${heading(a)}
    <div class="container about-layout">
      <div class="reveal"><div class="about-profile"><div class="about-photo"><img src="${profile.photo}" alt="${a.profileLabel}" /></div><div><small>${a.profileLabel}</small><strong>${a.profileMeta}</strong></div></div><p class="about-statement">${a.lead}</p><p class="about-copy">${a.text}</p><div class="inline-links"><a class="inline-link" href="mailto:${profile.email}">${a.email} ↗</a><a class="inline-link" href="${profile.linkedin}" target="_blank" rel="noopener">${a.linkedin} ↗</a><a class="inline-link" href="${profile.cv}" target="_blank" rel="noopener">${t.actions.viewCV} ↗</a></div></div>
      <div class="focus-grid">${a.cards.map((item, index) => `<article class="focus-card tilt reveal delay-${index + 1}"><div class="focus-symbol">${item[0]}</div><h3>${item[1]}</h3><p>${item[2]}</p></article>`).join("")}</div>
    </div>`;
}

function renderExperience(t) {
  const section = t.experience;
  el("#experience").innerHTML = `${heading(section)}
    <div class="container experience-list reveal">${section.items.map(item => `
      <article class="experience-card">
        <div class="experience-date">${item.period}<span class="experience-location">${item.location}</span></div>
        <div><h3 class="experience-company">${item.company}</h3><p class="experience-role">${item.role}</p><p class="experience-summary">${item.summary}</p><ul class="experience-points">${item.bullets.map(point => `<li>${point}</li>`).join("")}</ul></div>
        <div class="tech-list">${item.tags.map(tag => `<span class="chip">${tag}</span>`).join("")}</div>
      </article>`).join("")}
    </div>`;
}

function projectVisual(id) { return visuals[id] || visuals.agrinode; }

function renderProjects(t) {
  const section = t.projects;
  const filterKeys = ["all", "industrial", "iot", "embedded", "energy"];
  const items = projectFilter === "all" ? section.items : section.items.filter(item => item.type === projectFilter);
  el("#projects").innerHTML = `${heading(section)}
    <div class="container"><div class="project-controls" role="tablist" aria-label="Project filters">${filterKeys.map(key => `<button class="filter ${projectFilter === key ? "active" : ""}" type="button" data-filter="${key}">${section.categories[key]}</button>`).join("")}</div>
      <div class="project-grid">${items.map((item, index) => `<button class="project-card tilt reveal delay-${(index % 4) + 1}" type="button" data-project="${item.id}" style="--card-accent:${item.accent}"><div class="project-visual">${projectVisual(item.id)}</div><div class="project-content"><div class="project-meta"><span>${item.year} · ${item.label}</span><span class="project-open">${t.details} <b>↗</b></span></div><h3>${item.title}</h3><p>${item.text}</p>${chips(item.tags)}</div></button>`).join("")}</div>
    </div>`;
}

function renderCertificates(t) {
  const section = t.certificates;
  el("#certifications").innerHTML = `${heading(section)}
    <div class="container certification-strip">${section.items.map((item, index) => `<a class="certificate-card tilt reveal delay-${(index % 4) + 1}" href="${item.url}" target="_blank" rel="noopener" aria-label="${t.actions.credential}: ${item.title}"><div class="certificate-top"><div class="cert-badge">${String(index + 1).padStart(2, "0")}</div><span class="certificate-verified"><i></i>${t.actions.verified}</span></div><div class="certificate-category">${item.category}</div><h3>${item.title}</h3><p>${item.text}</p><div class="certificate-meta"><span>${item.issuer}</span><time>${item.date}</time></div><span class="certificate-link">${t.actions.credential} <b>↗</b></span></a>`).join("")}</div>`;
}

function renderSkills(t) {
  const section = t.skills;
  el("#skills").innerHTML = `${heading(section)}
    <div class="container skills-layout"><article class="skills-feature reveal"><div class="eyebrow">CORE FOCUS</div><h3>${section.featureTitle}</h3><p>${section.featureText}</p><div class="skill-radar"><span class="radar-dot"></span></div></article><div class="skill-groups">${section.groups.map((group, index) => `<article class="skill-group tilt reveal delay-${index + 1}"><div class="skill-group-number">${group[0]}</div><h3>${group[1]}</h3>${chips(group[2])}</article>`).join("")}</div></div>`;
}

function renderEducation(t) {
  const section = t.education;
  el("#education").innerHTML = `${heading(section)}
    <div class="container education-timeline">${section.items.map((item, index) => `<article class="education-card ${item.current ? "current" : ""} tilt reveal delay-${index + 1}"><div class="education-dot"></div><div class="education-period">${item.period}</div><h3>${item.school}</h3><div class="education-degree">${item.degree}</div><p>${item.text}</p></article>`).join("")}</div>`;
}

function renderResume(t) {
  const r = t.resume;
  el("#resume").innerHTML = `${heading(r)}
    <div class="container resume-layout">
      <article class="resume-summary reveal"><div class="resume-identity"><div class="resume-photo"><img src="${profile.photo}" alt="Mohamed Laamri" /></div><div><small>${r.label}</small><h3>Mohamed Laamri</h3><p>${r.meta}</p></div></div><p class="resume-note">${r.note}</p><div class="resume-facts"><span><i></i>PDF</span><span><i></i>1 PAGE</span><span><i></i>2026</span></div><div class="resume-actions"><a class="resume-action primary magnetic" href="${profile.cv}" target="_blank" rel="noopener">${t.actions.viewCV}<b>↗</b></a><a class="resume-action" href="${profile.cv}" download="Mohamed-Laamri-CV.pdf">${t.actions.downloadCV}<b>↓</b></a></div></article>
      <article class="resume-viewer reveal delay-2"><div class="resume-viewer-head"><span>${r.label}</span><span>01 / 01</span></div><iframe class="resume-frame" src="${profile.cv}#view=FitH" title="${r.preview}" loading="lazy"></iframe><p class="resume-viewer-fallback">${r.fallback} <a href="${profile.cv}" target="_blank" rel="noopener">${t.actions.viewCV} ↗</a></p></article>
    </div>`;
}

function renderContact(t) {
  const c = t.contact;
  el("#contact").innerHTML = `<div class="container"><div class="contact-panel reveal"><div class="contact-grid"><div><p class="eyebrow">${c.index}</p><h2>${c.title}</h2><p>${c.text}</p></div><div class="contact-actions"><a class="button magnetic" href="mailto:${profile.email}">${c.button}<span class="button-icon">↗</span></a><div class="contact-resume-actions"><a href="${profile.cv}" target="_blank" rel="noopener">${t.actions.viewCV} ↗</a><a href="${profile.cv}" download="Mohamed-Laamri-CV.pdf">${t.actions.downloadCV} ↓</a></div><button class="copy-email" type="button" data-copy-email data-default="${c.copy}" data-copied="${c.copied}">${c.copy}: ${profile.email}</button><div class="contact-meta"><span><i></i>${c.location}</span><span><i></i>${c.availability}</span></div></div></div></div></div>`;
  el("#footer").innerHTML = `<div class="container footer-wrap"><span>© ${new Date().getFullYear()} <strong>Mohamed Laamri</strong> · ${c.availability}</span><span>${t.footer} <span class="footer-links"><a href="${profile.cv}" target="_blank" rel="noopener">CV PDF</a><a href="${profile.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a href="${profile.portfolio}" target="_blank" rel="noopener">${t.source}</a></span></span></div>`;
}

function renderAll() {
  const t = content[language];
  document.documentElement.lang = language;
  document.title = language === "fr" ? "Mohamed Laamri | Automatismes & systèmes intelligents" : "Mohamed Laamri | Industrial Automation & Smart Systems";
  renderHeader(t); renderHero(t); renderAbout(t); renderExperience(t); renderProjects(t); renderCertificates(t); renderSkills(t); renderEducation(t); renderResume(t); renderContact(t);
  bindInteractions();
  observeReveals();
  observeNavigation();
  animateCounters();
}

function bindInteractions() {
  document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => {
    language = button.dataset.language;
    projectFilter = "all";
    renderAll();
  }));

  const menuButton = el(".mobile-menu-button");
  const mobileNav = el(".mobile-nav");
  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.classList.toggle("open");
      mobileNav.classList.toggle("open", open);
      menuButton.setAttribute("aria-expanded", String(open));
    });
    mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      menuButton.classList.remove("open"); mobileNav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  bindProjectFilters();
  bindProjectInteractions();
  setupTilt();
  setupMagnetic();

  const copyButton = el("[data-copy-email]");
  if (copyButton) copyButton.addEventListener("click", async () => {
    const defaultText = copyButton.dataset.default;
    try { await navigator.clipboard.writeText(profile.email); } catch (_) { /* fallback keeps button useful even if clipboard is blocked */ }
    copyButton.textContent = copyButton.dataset.copied;
    setTimeout(() => { copyButton.textContent = `${defaultText}: ${profile.email}`; }, 1700);
  });
}

function bindProjectFilters() {
  document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
    projectFilter = button.dataset.filter;
    renderProjects(content[language]);
    bindProjectFilters();
    bindProjectInteractions();
    setupTilt();
    observeReveals();
  }));
}

function bindProjectInteractions() {
  document.querySelectorAll("[data-project]").forEach(card => card.addEventListener("click", () => openProjectModal(card.dataset.project)));
}

function setupTilt() {
  document.querySelectorAll(".tilt").forEach(card => {
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    card.addEventListener("mousemove", event => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      const rotationY = (x - 50) / 18;
      const rotationX = (50 - y) / 18;
      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${y}%`);
      card.style.transform = `perspective(900px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

function setupMagnetic() {
  document.querySelectorAll(".magnetic").forEach(button => {
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    button.addEventListener("mousemove", event => {
      const rect = button.getBoundingClientRect();
      button.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * .11}px, ${(event.clientY - rect.top - rect.height / 2) * .11}px)`;
    });
    button.addEventListener("mouseleave", () => { button.style.transform = ""; });
  });
}

function openProjectModal(id) {
  const t = content[language];
  const item = t.projects.items.find(project => project.id === id);
  if (!item) return;
  const root = el("#modal-root");
  root.innerHTML = `<div class="modal-backdrop" role="presentation"><article class="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><button class="modal-close" type="button" aria-label="${t.closeModal}">×</button><p class="modal-type">${item.year} · ${item.label}</p><h2 id="project-modal-title">${item.title}</h2><p>${item.text}</p><p class="modal-label">${language === "fr" ? "POINTS CLÉS" : "KEY HIGHLIGHTS"}</p><ul class="modal-points">${item.detail.map(point => `<li>${point}</li>`).join("")}</ul><div class="modal-stack"><p class="modal-label">${language === "fr" ? "ENVIRONNEMENT TECHNIQUE" : "TECHNICAL ENVIRONMENT"}</p>${chips(item.tags, true)}</div></article></div>`;
  document.body.style.overflow = "hidden";
  const close = () => { root.innerHTML = ""; document.body.style.overflow = ""; };
  root.querySelector(".modal-close").addEventListener("click", close);
  root.querySelector(".modal-backdrop").addEventListener("click", event => { if (event.target.classList.contains("modal-backdrop")) close(); });
  window.addEventListener("keydown", function onKey(event) { if (event.key === "Escape") { close(); window.removeEventListener("keydown", onKey); } });
}

function observeReveals() {
  const items = document.querySelectorAll(".reveal:not(.visible)");
  if (!items.length) return;
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { items.forEach(item => item.classList.add("visible")); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), { threshold: .11, rootMargin: "0px 0px -30px" });
  items.forEach(item => observer.observe(item));
}

function observeNavigation() {
  if (!("IntersectionObserver" in window)) return;
  const map = new Map([...document.querySelectorAll(".nav-list a")].map(link => [link.getAttribute("href").slice(1), link]));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    map.forEach(link => link.classList.remove("active"));
    const link = map.get(entry.target.id); if (link) link.classList.add("active");
  }), { rootMargin: "-35% 0px -55%", threshold: .02 });
  document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
}

function initScrollProgress() {
  const bar = el("#scroll-progress-bar");
  const header = el("#site-header");
  const update = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0}%`;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update); update();
}

function initCursorGlow() {
  if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const glow = el("#cursor-glow");
  let x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y;
  document.body.classList.add("has-pointer");
  window.addEventListener("pointermove", event => { tx = event.clientX; ty = event.clientY; }, { passive: true });
  const tick = () => { x += (tx - x) * .12; y += (ty - y) * .12; glow.style.left = `${x}px`; glow.style.top = `${y}px`; requestAnimationFrame(tick); };
  tick();
}

function initNetworkCanvas() {
  const canvas = el("#network-canvas");
  const context = canvas.getContext("2d");
  if (!context || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let width, height, dpr, particles = [], mouse = { x: -900, y: -900 };
  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2); width = window.innerWidth; height = window.innerHeight;
    canvas.width = width * dpr; canvas.height = height * dpr; canvas.style.width = `${width}px`; canvas.style.height = `${height}px`; context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(62, Math.max(28, Math.round(width / 24)));
    particles = Array.from({ length: count }, () => ({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .17, vy: (Math.random() - .5) * .17, size: Math.random() * 1.4 + .55 }));
  };
  window.addEventListener("resize", resize); window.addEventListener("pointermove", event => { mouse.x = event.clientX; mouse.y = event.clientY; }, { passive: true }); resize();
  const draw = () => {
    context.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i += 1) {
      const p = particles[i]; p.x += p.vx; p.y += p.vy;
      if (p.x < -10 || p.x > width + 10) p.vx *= -1; if (p.y < -10 || p.y > height + 10) p.vy *= -1;
      const mouseDistance = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (mouseDistance < 145) { p.x += (p.x - mouse.x) * .003; p.y += (p.y - mouse.y) * .003; }
      context.fillStyle = "rgba(114,225,208,.46)"; context.beginPath(); context.arc(p.x, p.y, p.size, 0, Math.PI * 2); context.fill();
      for (let j = i + 1; j < particles.length; j += 1) {
        const q = particles[j]; const distance = Math.hypot(p.x - q.x, p.y - q.y);
        if (distance < 112) { context.strokeStyle = `rgba(114,225,208,${.11 * (1 - distance / 112)})`; context.lineWidth = .65; context.beginPath(); context.moveTo(p.x, p.y); context.lineTo(q.x, q.y); context.stroke(); }
      }
    }
    requestAnimationFrame(draw);
  };
  draw();
}

function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const node = entry.target; const target = node.dataset.count; const numeric = Number(target);
    if (Number.isNaN(numeric) || numeric > 100) return;
    const start = performance.now(); const duration = 850;
    const update = now => { const progress = Math.min(1, (now - start) / duration); const eased = 1 - Math.pow(1 - progress, 3); node.textContent = Math.round(numeric * eased); if (progress < 1) requestAnimationFrame(update); else node.textContent = target; };
    requestAnimationFrame(update); observer.unobserve(node);
  }), { threshold: .8 });
  counters.forEach(counter => observer.observe(counter));
}

renderAll();
initScrollProgress();
initCursorGlow();
initNetworkCanvas();
window.addEventListener("load", () => setTimeout(() => el("#loader").classList.add("done"), 420));
