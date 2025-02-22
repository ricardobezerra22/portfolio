import { useLanguage } from './language-provider'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-md py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2023 Niverton Ricardo. {t('footer.rights')}</p>
      </div>
    </footer>
  )
}

