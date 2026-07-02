import { SITE } from '@/data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={SITE.brunch} target="_blank" rel="noopener noreferrer">
            브런치
          </a>
          <a href={SITE.resumePdf} target="_blank" rel="noopener noreferrer">
            이력서 (PDF)
          </a>
        </div>
        <p className="footer-disclaimer">{SITE.disclaimer}</p>
      </div>
    </footer>
  );
}
