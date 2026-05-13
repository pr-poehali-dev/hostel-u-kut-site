import Icon from "@/components/ui/icon";

const sections = [
  {
    title: "Что такое рекомендательные технологии",
    content: `На нашем сайте могут использоваться технологии автоматической обработки информации для формирования персонализированного контента — в соответствии с требованиями статьи 10.2 Федерального закона № 149-ФЗ «Об информации, информационных технологиях и о защите информации».`,
  },
  {
    title: "Какие данные анализируются",
    content: `Для формирования рекомендаций могут анализироваться:
• Страницы и разделы сайта, которые вы посещаете
• Время нахождения на странице
• Тип устройства и браузера
• Регион (приблизительно, по IP-адресу)

Данные используются в агрегированном и обезличенном виде.`,
  },
  {
    title: "Цели использования",
    content: `Рекомендательные технологии применяются для:
• Отображения актуальной информации об услугах хостела
• Улучшения пользовательского опыта на сайте
• Адаптации контента под интересы посетителей`,
  },
  {
    title: "Файлы cookie",
    content: `Наш сайт может использовать файлы cookie — небольшие текстовые файлы, сохраняемые на вашем устройстве. Они помогают запоминать ваши предпочтения и улучшать работу сайта.
Вы можете отключить cookie в настройках вашего браузера, однако некоторые функции сайта могут работать некорректно.`,
  },
  {
    title: "Как отказаться от рекомендаций",
    content: `Вы можете:
• Использовать режим инкогнито в браузере
• Очистить историю и файлы cookie
• Отключить обработку cookie в настройках браузера

Отказ от рекомендательных технологий не ограничивает доступ к информации на сайте.`,
  },
  {
    title: "Контакты",
    content: `По вопросам, связанным с использованием рекомендательных технологий:
Телефон: +7 (964) 128-65-79
Адрес: г. Усть-Кут, ул. Кирова, 36, корп. 1`,
  },
];

const RecommendationTech = () => {
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
            <Icon name="Cpu" size={13} />
            Правовой документ
          </div>
          <h1 className="font-display text-4xl font-bold uppercase tracking-wider mb-3" style={{ color: "var(--hostel-text)" }}>
            Рекомендательные технологии
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

export default RecommendationTech;
