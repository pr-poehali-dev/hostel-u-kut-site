import Icon from "@/components/ui/icon";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--hostel-dark)", color: "var(--hostel-text)" }}>
      <div className="text-center px-6">
        <div
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(6rem, 20vw, 12rem)", lineHeight: 1, color: "var(--hostel-gold)", opacity: 0.15 }}
        >
          404
        </div>
        <div className="-mt-8 mb-8">
          <Icon name="MapPinOff" size={48} style={{ color: "var(--hostel-gold)", margin: "0 auto 16px" } as React.CSSProperties} />
          <h1 className="font-display text-3xl font-bold uppercase tracking-wider mb-3" style={{ color: "var(--hostel-text)" }}>
            Страница не найдена
          </h1>
          <p className="font-body text-base" style={{ color: "var(--hostel-muted)" }}>
            Возможно, она была удалена или вы перешли по неверной ссылке
          </p>
        </div>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-semibold uppercase tracking-wide text-base transition-all hover:opacity-90 hover:scale-105"
          style={{ background: "var(--hostel-gold)", color: "var(--hostel-dark)" }}
        >
          <Icon name="ArrowLeft" size={18} />
          На главную
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
