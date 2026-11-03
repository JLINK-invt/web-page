import { ImageResponse } from 'next/og';
import { site } from '@/content/site';
import { defaultLocale, getDictionary, isLocale, type Locale } from '@/lib/i18n';

export const alt = 'Cosmos Compass — Software for real industries';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#EEF7FD',
        color: '#0A2342',
        padding: 64,
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: -180,
          top: -200,
          width: 720,
          height: 720,
          borderRadius: 9999,
          backgroundColor: '#E6F3FC',
          border: '10px solid #CFDCE8',
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 112,
          top: 176,
          width: 132,
          height: 132,
          borderRadius: 9999,
          border: '1px solid #8FB3CD',
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 164,
          top: 210,
          width: 46,
          height: 46,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #FFEAB6 0%, #E0B85A 54%, #A9781F 100%)',
          transform: 'rotate(45deg)',
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: -40,
          bottom: 96,
          width: 520,
          height: 1,
          backgroundColor: '#8FB3CD',
          transform: 'rotate(-28deg)',
          display: 'flex',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 20,
          letterSpacing: 6,
          textTransform: 'uppercase',
          color: '#4B647C',
        }}
      >
        <div style={{ display: 'flex' }}>{site.name}</div>
        <div style={{ display: 'flex' }}>EST. {site.established}</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: 5,
            textTransform: 'uppercase',
            color: '#8A5F14',
          }}
        >
          {dict.meta.tagline}
        </div>
        <div
          style={{
            display: 'flex',
            maxWidth: 820,
            marginTop: 28,
            fontSize: 78,
            fontWeight: 600,
            lineHeight: 1.02,
            letterSpacing: -2,
          }}
        >
          {dict.meta.home.title}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid #B9D2E6',
          paddingTop: 28,
          fontSize: 22,
          color: '#4B647C',
        }}
      >
        <div style={{ display: 'flex' }}>{site.url.replace(/^https?:\/\//, '')}</div>
        <div style={{ display: 'flex', textTransform: 'uppercase' }}>{locale}</div>
      </div>
    </div>,
    size
  );
}
