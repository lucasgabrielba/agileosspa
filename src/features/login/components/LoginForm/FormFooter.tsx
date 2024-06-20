export function FormFooter() {
	return (
		<p className="px-8 text-sm text-center text-muted-foreground">
			Clicando em continue você aceita nossos termos.{' '}
			<a href="/terms" className="underline hover:text-primary">
				Termos de Serviço
			</a>{' '}
			e{' '}
			<a href="/privacy" className="underline hover:text-primary">
				Política de Privacidade
			</a>
			.
		</p>
	);
}
