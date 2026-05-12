import Icon from "@/components/ui/icon";
import { PHONE, PHONE_DISPLAY, VK_URL, ADDRESS, PRICE } from "./constants";

export default function HeroHeader() {
  return (
    <>
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
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--hostel-gold)" }} />
              Работаем круглосуточно · Усть-Кут
            </div>

            <h1
              className="font-display font-bold tracking-wider uppercase mb-4 animate-fade-up-delay-2"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", lineHeight: 1, color: "var(--hostel-text)" }}
            >
              ХОСТЕЛ
            </h1>

            <p className="font-body text-lg mb-3 animate-fade-up-delay-3" style={{ color: "var(--hostel-muted)" }}>
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
                style={{ border: "1.5px solid var(--hostel-gold)", color: "var(--hostel-gold)", background: "transparent" }}
              >
                <Icon name="Phone" size={20} />
                Позвонить
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 animate-fade-up-delay-4">
              {[
                { icon: "MapPin", text: ADDRESS },
                { icon: "Clock", text: "Круглосуточно" },
                { icon: "Star", text: "Отзывы ВКонтакте" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm font-body" style={{ color: "var(--hostel-muted)" }}>
                  <Icon name={icon as "MapPin"} size={15} style={{ color: "var(--hostel-gold)" } as React.CSSProperties} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
