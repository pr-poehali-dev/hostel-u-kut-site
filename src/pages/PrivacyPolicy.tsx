import Icon from "@/components/ui/icon";

const sections = [
  {
    title: "1. Общие положения",
    content: `Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки и защиты персональных данных пользователей сайта хостела.
Обработка персональных данных осуществляется в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».`,
  },
  {
    title: "2. Какие данные мы собираем",
    content: `При заполнении формы бронирования мы можем собирать следующие данные:
• Имя и фамилия
• Номер телефона
• Даты заезда и выезда
• Комментарии к бронированию

Данные собираются исключительно для обработки заявок на бронирование и связи с вами.`,
  },
  {
    title: "3. Цели обработки данных",
    content: `Ваши персональные данные используются для:
• Обработки заявок на бронирование номеров
• Связи с вами по вопросам вашего бронирования
• Улучшения качества обслуживания`,
  },
  {
    title: "4. Хранение и защита данных",
    content: `Мы принимаем необходимые технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
Данные хранятся не дольше, чем это необходимо для целей обработки.`,
  },
  {
    title: "5. Передача данных третьим лицам",
    content: `Мы не передаём ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации.`,
  },
  {
    title: "6. Права пользователя",
    content: `Вы вправе:
• Запросить доступ к своим персональным данным
• Потребовать исправления или удаления данных
• Отозвать согласие на обработку персональных данных

Для реализации своих прав свяжитесь с нами по телефону или оставьте заявку на сайте.`,
  },
  {
    title: "7. Контакты",
    content: `По вопросам обработки персональных данных вы можете обратиться к нам:
Телефон: +7 (964) 128-65-79
Адрес: г. Усть-Кут, ул. Кирова, 36, корп. 1`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--hostel-dark)", color: "var(--hostel-text)" }}>
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 mb-10 font-body text-sm transition-colors"
          style={{ color: "var(--hostel-muted)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--hostel-gold)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--hostel-muted)")}
        >
          <Icon name="ArrowLeft" size={16} />
          На главную
        </a>

        <div className="mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-body font-medium mb-4"
            style={{
              background: "rgba(212,168,83,0.12)",
              border: "1px solid rgba(212,168,83,0.3)",
              color: "var(--hostel-gold)",
            }}
          >
            <Icon name="Shield" size={13} />
            Правовой документ
          </div>
          <h1 className="font-display text-4xl font-bold uppercase tracking-wider mb-3" style={{ color: "var(--hostel-text)" }}>
            Политика обработки персональных данных
          </h1>
          <p className="font-body text-sm" style={{ color: "var(--hostel-muted)" }}>
            Последнее обновление: май 2025 г.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-xl p-6"
              style={{
                background: "var(--hostel-surface)",
                border: "1px solid rgba(212,168,83,0.1)",
              }}
            >
              <h2 className="font-display text-lg font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--hostel-gold)" }}>
                {section.title}
              </h2>
              <p className="font-body text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--hostel-muted)" }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
