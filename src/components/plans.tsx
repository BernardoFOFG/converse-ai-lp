import { PLANS_AVALIABLE } from '@/lib/constants';

export const Plans = () => {
	return (
		<div className="space-y-8">
			<h1 className="text-white text-center font-bold text-4xl">
				Escolha o <span className="text-secondary">plano sob medida</span>{' '}
				<br /> para você:
			</h1>

			<div className="grid base:grid-cols-1 md:grid-cols-3 base:gap-2 md:gap-6">
				{PLANS_AVALIABLE.map((plans) => (
					<div
						className="border-2 border-background bg-gradient-to-b from-primary-light to-primary-dark p-6 flex flex-col gap-3 rounded-xl size-full"
						key={plans.title}
					>
						<h3 className="text-center font-bold text-4xl">{plans.title}</h3>
						<h4 className="text-center text-2xl font-semibold">
							R$ {plans.price}/mês
						</h4>
						<div className="font-semibold">
							{plans.list?.map((charge: any, index: any) => (
								<div
									key={`${plans.title}-${index}`}
									className="flex items-start gap-2"
								>
									<img
										src="/icons/verify-white.svg"
										alt="verify-icon"
										className="pt-2"
									/>
									<span>{charge}</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
