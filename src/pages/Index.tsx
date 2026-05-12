import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+79641286579";
const PHONE_DISPLAY = "+7 (964) 128-65-79";
const VK_URL = "https://vk.com/homeuk";
const ADDRESS = "ул. Кирова, 36, корп. 1";
const PRICE = "1 000 ₽";

const amenities = [
  { icon: "Wifi", label: "Wi-Fi бесплатно" },
  { icon: "ShowerHead", label: "Душ и туалет" },
  { icon: "Utensils", label: "Общая кухня" },
  { icon: "Tv", label: "Телевизор" },
  { icon: "Shirt", label: "Постельное бельё" },
  { icon: "Lock", label: "Безопасность" },
  { icon: "Thermometer", label: "Отопление" },
  { icon: "Clock", label: "Заезд 24/7" },
];

const rules = [
  { icon: "CigaretteOff", label: "Не курить в номерах" },
  { icon: "Volume2", label: "Тихий час с 23:00 до 7:00" },
  { icon: "Users", label: "Гостей принимать до 22:00" },
  { icon: "Sparkles", label: "Поддерживать чистоту" },
  { icon: "Wine", label: "Алкоголь запрещён" },
  { icon: "PawPrint", label: "Животные по согласованию" },
];

const reviews = [
  {
    name: "Алексей М.",
    date: "Март 2025",
    stars: 5,
    text: "Останавливался на 3 недели в командировке. Чисто, тепло, персонал отзывчивый. Кухня хорошо оснащена. Рекомендую!",
    avatar: "А",
  },
  {
    name: "Светлана К.",
    date: "Январь 2025",
    stars: 5,
    text: "Приехала в Усть-Кут неожиданно, нашла хостел ночью — заселили без проблем. Цена очень приятная, за такие деньги отличный вариант.",
    avatar: "С",
  },
  {
    name: "Дмитрий Р.",
    date: "Февраль 2025",
    stars: 4,
    text: "Хорошее место для длительного проживания. Всё необходимое есть. Удобное расположение в центре города.",
    avatar: "Д",
  },
];

export default function Index() {
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "1",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [lightbox, setLightbox] = useState<{ open: boolean; imgs: string[]; idx: number }>({ open: false, imgs: [], idx: 0 });

  const roomPhotos = [
    "https://cdn.poehali.dev/projects/6fc3c0e0-e4d1-4e5d-bfb8-0b90f93b7d7e/bucket/ebdeb959-7ebc-40e0-9a97-d74a4af49344.jpg",
    "https://cdn.poehali.dev/projects/6fc3c0e0-e4d1-4e5d-bfb8-0b90f93b7d7e/bucket/a58dff22-2e97-4461-bdb5-30e09b349cab.jpg",
    "https://cdn.poehali.dev/projects/6fc3c0e0-e4d1-4e5d-bfb8-0b90f93b7d7e/bucket/7c016392-11a0-4fae-b216-9da263be1b9f.jpg",
  ];
  const commonPhotos = [
    "https://cdn.poehali.dev/projects/6fc3c0e0-e4d1-4e5d-bfb8-0b90f93b7d7e/bucket/6df3b2f8-2dd4-49be-8ddc-2d73278a51b0.jpg",
    "https://cdn.poehali.dev/projects/6fc3c0e0-e4d1-4e5d-bfb8-0b90f93b7d7e/bucket/4580dbbb-e1ef-4d2e-82b5-a5a39f306045.jpg",
    "https://cdn.poehali.dev/projects/6fc3c0e0-e4d1-4e5d-bfb8-0b90f93b7d7e/bucket/a0ac05c4-003e-408b-875a-ef7f5794ae1b.jpg",
  ];
  const entrancePhoto = "https://cdn.poehali.dev/projects/6fc3c0e0-e4d1-4e5d-bfb8-0b90f93b7d7e/bucket/98a31120-cd60-416f-9e63-668f82b62b2e.jpg";

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--hostel-dark)", color: "var(--hostel-text)" }}>

      {/* Floating Call Button */}
      <a
        href={`tel:${PHONE}`}
        className="fixed right-5 bottom-8 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl pulse-btn"
        style={{ background: "var(--hostel-gold)", color: "var(--hostel-dark)", position: "fixed" }}
        aria-label="Позвонить"
      >
        <Icon name="Phone" size={26} />
      </a>

      {/* HEADER */}
      <header
        className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 backdrop-blur-md"
        style={{ background: "rgba(20,18,16,0.92)", borderBottom: "1px solid rgba(212,168,83,0.15)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-lg"
            style={{ background: "var(--hostel-gold)", color: "var(--hostel-dark)" }}
          >
            Х
          </div>
          <span className="font-display text-xl font-semibold tracking-widest uppercase" style={{ color: "var(--hostel-text)" }}>
            ХОСТЕЛ
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-body" style={{ color: "var(--hostel-muted)" }}>
          {[
            ["#amenities", "Удобства"],
            ["#rules", "Правила"],
            ["#reviews", "Отзывы"],
            ["#booking", "Бронирование"],
            ["#contacts", "Контакты"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="transition-colors"
              style={{ color: "var(--hostel-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--hostel-gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--hostel-muted)")}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={VK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body font-medium transition-all hover:opacity-90"
          style={{ background: "var(--hostel-gold)", color: "var(--hostel-dark)" }}
        >
          <span className="font-display font-bold">VK</span>
          Мы ВКонтакте
        </a>
      </header>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "var(--hostel-dark)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/6fc3c0e0-e4d1-4e5d-bfb8-0b90f93b7d7e/files/d9fefcf1-47e6-4ba4-9178-28ab7788be03.jpg)`,
            opacity: 0.22,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(20,18,16,0.97) 0%, rgba(20,18,16,0.55) 60%, rgba(20,18,16,0.9) 100%)" }}
        />
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: "linear-gradient(to bottom, transparent, var(--hostel-gold), transparent)" }}
        />

        <div className="relative z-10 container mx-auto px-6 py-24 max-w-5xl">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-body font-medium mb-6 animate-fade-up-delay-1"
              style={{
                background: "rgba(212,168,83,0.12)",
                border: "1px solid rgba(212,168,83,0.3)",
                color: "var(--hostel-gold)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--hostel-gold)" }}
              />
              Работаем круглосуточно · Усть-Кут
            </div>

            <h1
              className="font-display font-bold tracking-wider uppercase mb-4 animate-fade-up-delay-2"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", lineHeight: 1, color: "var(--hostel-text)" }}
            >
              ХОСТЕЛ
            </h1>

            <p
              className="font-body text-lg mb-3 animate-fade-up-delay-3"
              style={{ color: "var(--hostel-muted)" }}
            >
              Уютное и доступное жильё в сердце Усть-Кута
            </p>

            <div className="flex items-baseline gap-2 mb-8 animate-fade-up-delay-3">
              <span className="font-display text-5xl font-bold" style={{ color: "var(--hostel-gold)" }}>
                {PRICE}
              </span>
              <span className="font-body text-lg" style={{ color: "var(--hostel-muted)" }}>/ сутки</span>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-up-delay-4">
              <a
                href="#booking"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-display font-semibold uppercase tracking-wide text-base transition-all hover:opacity-90 hover:scale-105"
                style={{ background: "var(--hostel-gold)", color: "var(--hostel-dark)" }}
              >
                <Icon name="CalendarCheck" size={20} />
                Забронировать
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-display font-semibold uppercase tracking-wide text-base transition-all hover:scale-105"
                style={{
                  border: "1.5px solid var(--hostel-gold)",
                  color: "var(--hostel-gold)",
                  background: "transparent",
                }}
              >
                <Icon name="Phone" size={20} />
                Позвонить
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 animate-fade-up-delay-4">
              {[
                { icon: "MapPin", text: ADDRESS },
                { icon: "Clock", text: "Круглосуточно" },
                { icon: "Star", text: "Отзывы на Яндексе" },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm font-body"
                  style={{ color: "var(--hostel-muted)" }}
                >
                  <Icon
                    name={icon as "MapPin"}
                    size={15}
                    style={{ color: "var(--hostel-gold)" } as React.CSSProperties}
                  />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: "var(--hostel-gold)" }}>
              Что входит
            </p>
            <h2
              className="font-display font-bold text-4xl uppercase tracking-wide"
              style={{ color: "var(--hostel-text)" }}
            >
              Удобства
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {amenities.map(({ icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl transition-all hover:scale-105"
                style={{
                  background: "var(--hostel-surface)",
                  border: "1px solid rgba(212,168,83,0.1)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(212,168,83,0.12)" }}
                >
                  <Icon
                    name={icon as "Wifi"}
                    size={22}
                    style={{ color: "var(--hostel-gold)" } as React.CSSProperties}
                  />
                </div>
                <span className="font-body text-sm text-center" style={{ color: "var(--hostel-text)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* PHOTO */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          <div className="grid md:grid-cols-2 gap-4">

          {/* Блок НОМЕРА */}
          <div className="flex flex-col gap-3">
            <p className="font-display text-sm uppercase tracking-widest mb-1" style={{ color: "var(--hostel-gold)" }}>Номера</p>
            <div
              className="rounded-2xl overflow-hidden h-48 relative cursor-pointer group"
              onClick={() => setLightbox({ open: true, imgs: roomPhotos, idx: 0 })}
            >
              <img src={roomPhotos[0]} alt="Номер 1" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,18,16,0.5) 0%, transparent 60%)" }} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(212,168,83,0.85)" }}>
                  <Icon name="ZoomIn" size={22} style={{ color: "var(--hostel-dark)" } as React.CSSProperties} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {roomPhotos.slice(1).map((src, i) => (
                <div
                  key={src}
                  className="rounded-2xl overflow-hidden h-32 relative cursor-pointer group"
                  onClick={() => setLightbox({ open: true, imgs: roomPhotos, idx: i + 1 })}
                >
                  <img src={src} alt={`Номер ${i + 2}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,18,16,0.4) 0%, transparent 60%)" }} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(212,168,83,0.85)" }}>
                      <Icon name="ZoomIn" size={16} style={{ color: "var(--hostel-dark)" } as React.CSSProperties} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Блок ОБЩАЯ ЗОНА */}
          <div className="flex flex-col gap-3">
            <p className="font-display text-sm uppercase tracking-widest mb-1" style={{ color: "var(--hostel-gold)" }}>Общая зона</p>
            <div
              className="rounded-2xl overflow-hidden h-48 relative cursor-pointer group"
              onClick={() => setLightbox({ open: true, imgs: commonPhotos, idx: 0 })}
            >
              <img src={commonPhotos[0]} alt="Общая зона 1" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,18,16,0.5) 0%, transparent 60%)" }} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(212,168,83,0.85)" }}>
                  <Icon name="ZoomIn" size={22} style={{ color: "var(--hostel-dark)" } as React.CSSProperties} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {commonPhotos.slice(1).map((src, i) => (
                <div
                  key={src}
                  className="rounded-2xl overflow-hidden h-32 relative cursor-pointer group"
                  onClick={() => setLightbox({ open: true, imgs: commonPhotos, idx: i + 1 })}
                >
                  <img src={src} alt={`Общая зона ${i + 2}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,18,16,0.4) 0%, transparent 60%)" }} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(212,168,83,0.85)" }}>
                      <Icon name="ZoomIn" size={16} style={{ color: "var(--hostel-dark)" } as React.CSSProperties} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>

          {/* Блок ГЛАВНЫЙ ВХОД */}
          <div className="flex flex-col gap-3">
            <p className="font-display text-sm uppercase tracking-widest mb-1" style={{ color: "var(--hostel-gold)" }}>Главный вход</p>
            <div
              className="rounded-2xl overflow-hidden h-64 relative cursor-pointer group"
              onClick={() => setLightbox({ open: true, imgs: [entrancePhoto], idx: 0 })}
            >
              <img src={entrancePhoto} alt="Главный вход" className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,18,16,0.5) 0%, transparent 60%)" }} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(212,168,83,0.85)" }}>
                  <Icon name="ZoomIn" size={22} style={{ color: "var(--hostel-dark)" } as React.CSSProperties} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LIGHTBOX */}
        {lightbox.open && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={() => setLightbox(l => ({ ...l, open: false }))}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
              style={{ background: "rgba(212,168,83,0.2)", color: "var(--hostel-gold)" }}
              onClick={() => setLightbox(l => ({ ...l, open: false }))}
            >
              <Icon name="X" size={20} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
              style={{ background: "rgba(212,168,83,0.2)", color: "var(--hostel-gold)" }}
              onClick={e => { e.stopPropagation(); setLightbox(l => ({ ...l, idx: (l.idx - 1 + l.imgs.length) % l.imgs.length })); }}
            >
              <Icon name="ChevronLeft" size={22} />
            </button>
            <img
              src={lightbox.imgs[lightbox.idx]}
              alt="Фото"
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
              style={{ background: "rgba(212,168,83,0.2)", color: "var(--hostel-gold)" }}
              onClick={e => { e.stopPropagation(); setLightbox(l => ({ ...l, idx: (l.idx + 1) % l.imgs.length })); }}
            >
              <Icon name="ChevronRight" size={22} />
            </button>
            <p className="absolute bottom-5 font-body text-sm" style={{ color: "var(--hostel-muted)" }}>
              {lightbox.idx + 1} / {lightbox.imgs.length}
            </p>
          </div>
        )}
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* RULES */}
      <section id="rules" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: "var(--hostel-gold)" }}>
              Для комфорта всех гостей
            </p>
            <h2
              className="font-display font-bold text-4xl uppercase tracking-wide"
              style={{ color: "var(--hostel-text)" }}
            >
              Правила проживания
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {rules.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{
                  background: "var(--hostel-surface)",
                  border: "1px solid rgba(212,168,83,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                  style={{ background: "rgba(212,168,83,0.1)" }}
                >
                  <Icon
                    name={icon as "Lock"}
                    size={18}
                    style={{ color: "var(--hostel-gold)" } as React.CSSProperties}
                  />
                </div>
                <span className="font-body text-sm" style={{ color: "var(--hostel-text)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div
            className="mt-8 p-5 rounded-2xl flex items-start gap-4"
            style={{
              background: "rgba(212,168,83,0.06)",
              border: "1px solid rgba(212,168,83,0.2)",
            }}
          >
            <Icon
              name="Info"
              size={20}
              style={{ color: "var(--hostel-gold)", flexShrink: 0, marginTop: 2 } as React.CSSProperties}
            />
            <p className="font-body text-sm leading-relaxed" style={{ color: "var(--hostel-muted)" }}>
              При нарушении правил проживания администрация вправе попросить гостя покинуть хостел без возврата
              оплаты. Просим отнестись с уважением к другим жильцам.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: "var(--hostel-gold)" }}>
              Говорят гости
            </p>
            <h2
              className="font-display font-bold text-4xl uppercase tracking-wide"
              style={{ color: "var(--hostel-text)" }}
            >
              Отзывы
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map(({ name, date, stars, text, avatar }) => (
              <div
                key={name}
                className="p-6 rounded-2xl flex flex-col gap-4"
                style={{
                  background: "var(--hostel-surface)",
                  border: "1px solid rgba(212,168,83,0.1)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-base flex-shrink-0"
                    style={{ background: "var(--hostel-gold)", color: "var(--hostel-dark)" }}
                  >
                    {avatar}
                  </div>
                  <div>
                    <p className="font-body font-medium text-sm" style={{ color: "var(--hostel-text)" }}>
                      {name}
                    </p>
                    <p className="font-body text-xs" style={{ color: "var(--hostel-muted)" }}>
                      {date}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5 stars">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} />
                  ))}
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--hostel-muted)" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={VK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body text-sm font-medium transition-all hover:opacity-80"
              style={{ border: "1px solid rgba(212,168,83,0.3)", color: "var(--hostel-gold)" }}
            >
              <Icon name="ExternalLink" size={16} />
              Все отзывы ВКонтакте
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: "var(--hostel-gold)" }}>
              Оставьте заявку
            </p>
            <h2
              className="font-display font-bold text-4xl uppercase tracking-wide"
              style={{ color: "var(--hostel-text)" }}
            >
              Бронирование
            </h2>
            <p className="font-body text-sm mt-3" style={{ color: "var(--hostel-muted)" }}>
              Мы свяжемся с вами в течение 15 минут
            </p>
          </div>

          {submitted ? (
            <div
              className="p-10 rounded-2xl text-center"
              style={{
                background: "var(--hostel-surface)",
                border: "1px solid rgba(212,168,83,0.2)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: "rgba(212,168,83,0.15)" }}
              >
                <Icon
                  name="CheckCircle2"
                  size={32}
                  style={{ color: "var(--hostel-gold)" } as React.CSSProperties}
                />
              </div>
              <h3
                className="font-display text-2xl font-semibold uppercase mb-2"
                style={{ color: "var(--hostel-text)" }}
              >
                Заявка принята!
              </h3>
              <p className="font-body text-sm" style={{ color: "var(--hostel-muted)" }}>
                Мы перезвоним вам на указанный номер.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleBooking}
              className="p-8 rounded-2xl flex flex-col gap-5"
              style={{
                background: "var(--hostel-surface)",
                border: "1px solid rgba(212,168,83,0.1)",
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-body text-xs uppercase tracking-wider"
                    style={{ color: "var(--hostel-muted)" }}
                  >
                    Ваше имя
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Иван Иванов"
                    value={bookingForm.name}
                    onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="px-4 py-3 rounded-xl font-body text-sm outline-none transition-all"
                    style={{
                      background: "var(--hostel-surface2)",
                      border: "1px solid rgba(212,168,83,0.15)",
                      color: "var(--hostel-text)",
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--hostel-gold)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(212,168,83,0.15)")}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-body text-xs uppercase tracking-wider"
                    style={{ color: "var(--hostel-muted)" }}
                  >
                    Телефон
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={bookingForm.phone}
                    onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="px-4 py-3 rounded-xl font-body text-sm outline-none transition-all"
                    style={{
                      background: "var(--hostel-surface2)",
                      border: "1px solid rgba(212,168,83,0.15)",
                      color: "var(--hostel-text)",
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--hostel-gold)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(212,168,83,0.15)")}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-body text-xs uppercase tracking-wider"
                    style={{ color: "var(--hostel-muted)" }}
                  >
                    Дата заезда
                  </label>
                  <input
                    required
                    type="date"
                    value={bookingForm.checkin}
                    onChange={e => setBookingForm({ ...bookingForm, checkin: e.target.value })}
                    className="px-4 py-3 rounded-xl font-body text-sm outline-none transition-all"
                    style={{
                      background: "var(--hostel-surface2)",
                      border: "1px solid rgba(212,168,83,0.15)",
                      color: "var(--hostel-text)",
                      colorScheme: "dark",
                    } as React.CSSProperties}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--hostel-gold)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(212,168,83,0.15)")}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-body text-xs uppercase tracking-wider"
                    style={{ color: "var(--hostel-muted)" }}
                  >
                    Дата выезда
                  </label>
                  <input
                    required
                    type="date"
                    value={bookingForm.checkout}
                    onChange={e => setBookingForm({ ...bookingForm, checkout: e.target.value })}
                    className="px-4 py-3 rounded-xl font-body text-sm outline-none transition-all"
                    style={{
                      background: "var(--hostel-surface2)",
                      border: "1px solid rgba(212,168,83,0.15)",
                      color: "var(--hostel-text)",
                      colorScheme: "dark",
                    } as React.CSSProperties}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--hostel-gold)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(212,168,83,0.15)")}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-body text-xs uppercase tracking-wider"
                  style={{ color: "var(--hostel-muted)" }}
                >
                  Количество гостей
                </label>
                <select
                  value={bookingForm.guests}
                  onChange={e => setBookingForm({ ...bookingForm, guests: e.target.value })}
                  className="px-4 py-3 rounded-xl font-body text-sm outline-none transition-all"
                  style={{
                    background: "var(--hostel-surface2)",
                    border: "1px solid rgba(212,168,83,0.15)",
                    color: "var(--hostel-text)",
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--hostel-gold)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(212,168,83,0.15)")}
                >
                  {[1, 2, 3, 4, 5, 6].map(n => (
                    <option key={n} value={n} style={{ background: "var(--hostel-surface2)" }}>
                      {n} {n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-body text-xs uppercase tracking-wider"
                  style={{ color: "var(--hostel-muted)" }}
                >
                  Комментарий (необязательно)
                </label>
                <textarea
                  rows={3}
                  placeholder="Особые пожелания, время приезда..."
                  value={bookingForm.comment}
                  onChange={e => setBookingForm({ ...bookingForm, comment: e.target.value })}
                  className="px-4 py-3 rounded-xl font-body text-sm outline-none transition-all resize-none"
                  style={{
                    background: "var(--hostel-surface2)",
                    border: "1px solid rgba(212,168,83,0.15)",
                    color: "var(--hostel-text)",
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--hostel-gold)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(212,168,83,0.15)")}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-display font-semibold uppercase tracking-wide text-base transition-all hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
                style={{ background: "var(--hostel-gold)", color: "var(--hostel-dark)" }}
              >
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: "var(--hostel-gold)" }}>
              Мы рядом
            </p>
            <h2
              className="font-display font-bold text-4xl uppercase tracking-wide"
              style={{ color: "var(--hostel-text)" }}
            >
              Контакты
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: "Phone",
                  title: "Телефон",
                  value: PHONE_DISPLAY,
                  sub: "Только звонки",
                  href: `tel:${PHONE}`,
                },
                {
                  icon: "MapPin",
                  title: "Адрес",
                  value: ADDRESS,
                  sub: "Усть-Кут, Иркутская область",
                  href: "https://yandex.ru/maps/?text=Усть-Кут+ул+Кирова+36",
                },
                {
                  icon: "Clock",
                  title: "Режим работы",
                  value: "Круглосуточно",
                  sub: "Без выходных и праздников",
                  href: null,
                },
              ].map(({ icon, title, value, sub, href }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 p-5 rounded-2xl"
                  style={{
                    background: "var(--hostel-surface)",
                    border: "1px solid rgba(212,168,83,0.1)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(212,168,83,0.12)" }}
                  >
                    <Icon
                      name={icon as "Phone"}
                      size={22}
                      style={{ color: "var(--hostel-gold)" } as React.CSSProperties}
                    />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="font-body text-xs uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--hostel-muted)" }}
                    >
                      {title}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-body font-medium text-base truncate block transition-colors"
                        style={{ color: "var(--hostel-text)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--hostel-gold)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--hostel-text)")}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className="font-body font-medium text-base"
                        style={{ color: "var(--hostel-text)" }}
                      >
                        {value}
                      </p>
                    )}
                    <p className="font-body text-xs" style={{ color: "var(--hostel-muted)" }}>
                      {sub}
                    </p>
                  </div>
                </div>
              ))}

              <a
                href={VK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:scale-[1.01]"
                style={{
                  background: "var(--hostel-surface)",
                  border: "1px solid rgba(212,168,83,0.1)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-display font-bold text-sm"
                  style={{ background: "rgba(212,168,83,0.12)", color: "var(--hostel-gold)" }}
                >
                  VK
                </div>
                <div>
                  <p
                    className="font-body text-xs uppercase tracking-wider mb-0.5"
                    style={{ color: "var(--hostel-muted)" }}
                  >
                    ВКонтакте
                  </p>

                  <p className="font-body text-xs" style={{ color: "var(--hostel-muted)" }}>
                    Фото, новости, отзывы
                  </p>
                </div>
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden flex-1" style={{ minHeight: 360, border: "1px solid rgba(212,168,83,0.15)" }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=105.7297%2C56.7963&z=17&pt=105.7297,56.7963,pm2rdl~105.7297,56.7963&text=Хостел%20Усть-Кут%20Кирова%2036"
                  width="100%"
                  height="100%"
                  style={{ minHeight: 360, border: "none", display: "block" }}
                  allowFullScreen
                  title="Хостел на карте"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 px-6 text-center font-body text-xs"
        style={{
          borderTop: "1px solid rgba(212,168,83,0.1)",
          color: "var(--hostel-muted)",
        }}
      >
        <p>
          © 2025 ХОСТЕЛ · Усть-Кут · {ADDRESS} · {PHONE_DISPLAY}
        </p>
      </footer>
    </div>
  );
}