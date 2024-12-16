export function getInitials(name: string): string {
	// Split the name into words
	const words = name.split(' ');
	// Get the first letter of each word, capitalize it, and join them
	const initials = words.map((word) => word[0].toUpperCase()).join('');
	return initials;
}

export const CHARGES_AVALIABLE = [
	{
		title: 'Secretária',
		list: [
			'Compreende a demanda inicial',
			'Encaminha para o setor ou Agente de IA responsável',
			'Agenda, cancela e remarcar reuniões',
			'Organiza a Agenda da Equipe',
			'Encaminha para o humano quando necessário',
		],
	},
	{
		title: 'SDR - Pré Vendor(a)',
		list: [
			'Investiga a viabilidade do caso',
			'Entende a situação do potencial cliente',
			'Faz o processo de qualificação',
			'Convida e encaminha o cliente para o agendamento',
			'Encaminha para humano apenas quando necessário',
			'Preenche o CRM de forma automática',
		],
	},
	{
		title: 'Suporte - Consulta de Processos',
		list: [
			'Faz a consulta de dados no PJE',
			'Retorna informações sobre o processo sem jurisdiquês',
			'Responde todas as dúvidas do cliente',
			'Acompanha a movimentação processual em tempo real',
			'Encaminha para humano apenas quando necessário',
		],
	},
	{
		title: 'Social Selling',
		list: [
			'Identifica a demanda',
			'Analisa a situação e a viabilidade do caso',
			'Faz a qualificação necessária para a conversão da pessoa em cliente',
			'Convida e encaminha para o agendamento',
			'Encaminha para humano apenas quando necessário',
			'Recolhe o contato e faz contato ativo no whatsapp',
		],
	},
];

export const PLANS_AVALIABLE = [
	{
		title: 'Escritório Essencial',
		price: '799',
		list: [
			'5 Usuários',
			'2 Agentes de IA (Secretária + SDR)',
			'CRM Personalizado para o setor Jurídico',
			'Relatórios(BI) para acompanhar performance dos Agentes de IA',
			'Conecta com Multicanais: Whatsapp QR Code, Whatsapp Oficial, Instagram/Direct e +',
			'Até 10 mil contatos',
			'* Bônus de R$300 para até 2 mil conversas com seu Agente de IA',
		],
	},
	{
		title: 'Escritório Avançado',
		price: '1.499',
		list: [
			'10 Usuários',
			'2 Agentes de IA (Secretária + SDR)',
			'3 Módulos Extras:',
			'* Agendamento automático',
			'* Follow-UP(FUP) Padrão',
			'* Pesquisa de Satisfação(NPS)',
			'CRM Personalizado para o setor Jurídico',
			'Relatórios(BI) para acompanhar performance dos Agentes de IA',
			'Conecta com Multicanais: Whatsapp QR Code, Whatsapp Oficial, Instagram/Direct e +',
			'Até 25 mil contatos',
			'* Bônus de R$300 para até 3 mil conversas com seu Agente de IA',
		],
	},
	{
		title: 'Escritório de Excelência',
		price: '2.499',
		list: [
			'20 Usuários',
			'3 Agentes de IA (Secretária, SDR & Suporte)',
			'5 Módulos extras:',
			'* Agendamento automático',
			'* Follow-UP(FUP) Padrão',
			'* Follow-UP(FUP) Personalizado',
			'* Módulo de envio de procuração',
			'* Pesquisa de Satisfação(NPS)',
			'CRM Personalizado para o setor Jurídico',
			'Relatórios(BI) para acompanhar performance dos Agentes de IA',
			'Conecta com Multicanais: Whatsapp QR Code, Whatsapp Oficial, Instagram/Direct e +',
			'Até 50 mil contatos',
			'* Bônus de R$300 para até 4 mil conversas com seu Agente de IA',
			'* Bônus de R$300 para consultar até 800 processos com seu Agente de IA',
		],
	},
];

export const LINK_CTA_WHATSAPP =
	'https://wa.me/5581991656423?text=Gostaria+de+saber+mais+sobre+a+ConverseIA+Direito';

export const LINK_VIDEO =
	'https://res.cloudinary.com/djlmnni49/video/upload/v1732894445/dsqyig8giefutkd41ior.mp4';

export const LINK_AFFILIATES = '#';

export const LINK_LOGIN = '#';

export const LINK_NAVIGATE = [
	{
		href: '#inicio',
		label: 'Início',
	},
	{
		href: '#sobre',
		label: 'Sobre',
	},
	{
		href: '#recursos',
		label: 'Recursos',
	},
	{
		href: '#planos',
		label: 'Planos',
	},
	{
		href: LINK_AFFILIATES,
		label: 'Afiliados',
	},
];

export const LINK_FOR_LINKEDIN = 'https://www.linkedin.com/company/converseia-direito';

export const LINK_FOR_INSTAGRAM = 'https://www.instagram.com/converse.ia/';