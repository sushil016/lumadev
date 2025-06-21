import React, { useState, useEffect } from 'react';

export const Do = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenSize.width <= 768;
  const isTablet = screenSize.width > 768 && screenSize.width <= 1024;
  const isDesktop = screenSize.width > 1024;

  // Responsive font sizes
  const getHeadingFontSize = () => {
    if (isMobile) return 48;
    if (isTablet) return 72;
    return 100;
  };

  const getBodyFontSize = () => {
    if (isMobile) return 16;
    if (isTablet) return 18;
    return 20;
  };

  const getLineHeight = () => {
    if (isMobile) return '52px';
    if (isTablet) return '76px';
    return '100px';
  };

  const getBoxHeight = () => {
    if (isMobile) return 'auto';
    if (isTablet) return '60vh';
    return '80vh';
  };

  const getBoxPadding = () => {
    if (isMobile) return '24px 16px';
    if (isTablet) return '32px 20px';
    return '40px 24px';
  };

  const getIconSize = () => {
    if (isMobile) return 32;
    if (isTablet) return 40;
    return 48;
  };

  const renderBox = (row: number, col: number) => {
    let boxStyle: React.CSSProperties = {
      width: isMobile ? '100vw' : '50%',
      height: getBoxHeight(),
      minHeight: isMobile ? '50vh' : 'auto',
      boxSizing: 'border-box',
      border: '1px solid black',
      padding: getBoxPadding(),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: getBodyFontSize(),
    };

    if (row === 1 && col === 1) {
      return (
        <div key={`${row}-${col}`} style={{ ...boxStyle, justifyContent: 'center', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'riccionets, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: getHeadingFontSize(),
            lineHeight: getLineHeight(),
            color: '#000',
            textAlign: 'center',
            marginTop: isMobile ? 0 : 60,
            display: 'block',
          }}>
            Product <br /> Strategy <br /> & Design
          </span>
        </div>
      );
    }

    if (row === 1 && col === 2) {
      return (
        <div key={`${row}-${col}`} style={{
          ...boxStyle,
          backgroundImage: 'linear-gradient(135deg, #fff 0%,rgb(244, 232, 221) 50%, #D6F5D6 100%)',
          color: '#222',
          flexDirection: 'column',
          textAlign: 'center'
        }}>
          <div style={{ 
            maxWidth: isMobile ? '90%' : 400, 
            margin: '0 auto', 
            fontSize: getBodyFontSize(), 
            fontWeight: 400,
            lineHeight: 1.5
          }}>
            We help validate your idea—through discovery workshops, user flows, prototypes, UX/UI design—so your product solves real-world problems and users love it.
          </div>
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? 20 : 40, 
            marginTop: isMobile ? 24 : 40, 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{ 
              background: 'rgba(180,255,220,0.25)', 
              borderRadius: 16, 
              padding: isMobile ? 16 : 24, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <svg width={getIconSize()} height={getIconSize()} fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M8 8h8v8H8z" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            </div>
            <div style={{ 
              background: 'rgba(180,255,220,0.25)', 
              borderRadius: '50%', 
              padding: isMobile ? 16 : 24, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <svg width={getIconSize()} height={getIconSize()} fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4-4" />
              </svg>
            </div>
          </div>
        </div>
      );
    }

    if (row === 2 && col === 1) {
      return (
        <div key={`${row}-${col}`} style={{
          ...boxStyle,
          flexDirection: 'column',
          textAlign: 'center',
          color: '#222',
          fontSize: getBodyFontSize(),
          fontWeight: 400,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'linear-gradient(135deg, #fff 0%,rgb(211, 231, 244) 50%,rgb(245, 243, 214) 100%)'
        }}>
          <div style={{ 
            maxWidth: isMobile ? '90%' : 400, 
            margin: '0 auto',
            lineHeight: 1.5
          }}>
            Your idea gets built end-to-end: React or React Native frontends, scalable backends, databases, APIs—all with automated testing and CI/CD pipelines ready for production.
          </div>
        </div>
      );
    }

    if (row === 2 && col === 2) {
      return (
        <div key={`${row}-${col}`} style={{ ...boxStyle, justifyContent: 'center', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'riccionets, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: getHeadingFontSize(),
            lineHeight: getLineHeight(),
            color: '#000',
            textAlign: 'center',
            marginTop: isMobile ? 0 : 60,
            display: 'block',
          }}>
            Full‑Stack <br /> Development <br /> & Launch
          </span>
        </div>
      );
    }

    if (row === 3 && col === 1) {
      return (
        <div key={`${row}-${col}`} style={{ ...boxStyle, justifyContent: 'center', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'riccionets, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: getHeadingFontSize(),
            lineHeight: getLineHeight(),
            color: '#000',
            textAlign: 'center',
            marginTop: isMobile ? 0 : 60,
            display: 'block',
          }}>
            DevOps <br /> & <br /> Ongoing Scaling
          </span>
        </div>
      );
    }

    if (row === 3 && col === 2) {
      return (
        <div key={`${row}-${col}`} style={{
          ...boxStyle,
          backgroundImage: 'linear-gradient(135deg, #fff 0%,rgb(229, 209, 239) 50%, #D6F5D6 100%)',
          color: '#222',
          flexDirection: 'column',
          textAlign: 'center',
          fontSize: getBodyFontSize(),
          fontWeight: 400,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{ 
            maxWidth: isMobile ? '90%' : 400, 
            margin: '0 auto',
            lineHeight: 1.5
          }}>
            We provision production-grade infrastructure—load balancers, auto-scaling, monitoring, logging—manage deployments, optimize performance, and keep your product thriving.
          </div>
        </div>
      );
    }

    return <div key={`${row}-${col}`} style={boxStyle}><span>{`Row ${row} - Col ${col}`}</span></div>;
  };

  const contentOrder = isMobile
    ? [[1, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 2]]
    : [[1, 1, 1, 2], [2, 1, 2, 2], [3, 1, 3, 2]];

  return (
    <div style={{
      width: isMobile ? '100vw' : '95vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      margin: isMobile ? 0 : '36px auto',
    }}>
      {
        isMobile
          ? contentOrder.map(([r, c]) => renderBox(r, c))
          : contentOrder.map((pair) => (
              <div key={pair.join('-')} style={{ display: 'flex', width: '100%' }}>
                {renderBox(pair[0], pair[1])}
                {renderBox(pair[2], pair[3])}
              </div>
            ))
      }
    </div>
  );
};