// WareStock HTML — auto-generated, do not edit manually
const warestockHTML = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
<meta name="theme-color" content="#0f172a"/>
<meta name="mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-title" content="WareStock"/>
<title>WareStock</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet"/>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  color-scheme:light;
  --bg:#f0f2f5;--card:#fff;--inp:#f0f2f5;
  --t1:#0f172a;--t2:#64748b;--t3:#94a3b8;
  --bd:#e2e8f0;--bd2:#cbd5e1;
  --rbg:#fef2f2;--rbd:#fca5a5;
  --bbg:#eff6ff;--bbd:#bfdbfe;
  --gbg:#f0fdf4;--gbd:#bbf7d0;
  --ybg:#fffbeb;--ybd:#fde68a;
  --sh:0 1px 3px rgba(0,0,0,.07),0 4px 14px rgba(0,0,0,.06);
  --shu:0 -2px 16px rgba(0,0,0,.1);
  --nav:58px;
}
[data-theme="dark"]{
  color-scheme:dark;
  --bg:#0d1628;--card:#162032;--inp:#0a1120;
  --t1:#e2e8f0;--t2:#94a3b8;--t3:#3d5470;
  --bd:#1f3048;--bd2:#2a4060;
  --rbg:#2a1218;--rbd:#5c2428;
  --bbg:#0f1e33;--bbd:#1e3a5f;
  --gbg:#0c1f14;--gbd:#14472a;
  --ybg:#1a1500;--ybd:#4a3800;
  --sh:0 1px 3px rgba(0,0,0,.3),0 4px 14px rgba(0,0,0,.25);
  --shu:0 -2px 16px rgba(0,0,0,.4);
}
html,body{height:100%;font-family:"DM Sans",sans-serif;background:var(--bg);color:var(--t1);overscroll-behavior:none;-webkit-tap-highlight-color:transparent;transition:background .2s,color .2s}

/* HDR */
.hdr{background:#0f172a;padding:0 13px;padding-top:env(safe-area-inset-top,0);position:sticky;top:0;z-index:100;box-shadow:0 2px 18px rgba(0,0,0,.4)}
.hdr-row{display:flex;align-items:center;justify-content:space-between;padding:10px 0 7px;gap:5px}
.logo{font-family:"Barlow Condensed",sans-serif;font-size:24px;font-weight:800;color:#fff;letter-spacing:.5px;flex-shrink:0}
.logo span{color:#f97316}
.hdr-r{display:flex;align-items:center;gap:4px}
.lpill{display:none;background:#ef4444;color:#fff;font-size:10px;font-weight:700;padding:3px 7px;border-radius:20px;animation:pulse 2s infinite;white-space:nowrap}
.lpill.on{display:inline-block}
.hb{background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.13);border-radius:8px;color:#fff;font-family:"DM Sans",sans-serif;font-size:11px;font-weight:600;padding:5px 8px;cursor:pointer;white-space:nowrap;transition:background .13s;flex-shrink:0}
.hb:active,.hb.on{background:#f97316;border-color:#f97316}
.hi{background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.13);border-radius:8px;color:#fff;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .13s;flex-shrink:0;font-size:15px;position:relative}
.hi:active{background:rgba(255,255,255,.25)}
.hi-badge{position:absolute;top:-4px;right:-4px;background:#ef4444;color:#fff;font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;display:none;align-items:center;justify-content:center;padding:0 3px;border:1.5px solid #0f172a}
.hi-badge.on{display:flex}
.sw{padding-bottom:10px;position:relative}
.swico{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:rgba(255,255,255,.35);pointer-events:none}
.si{width:100%;background:rgba(255,255,255,.09);border:1.5px solid rgba(255,255,255,.1);border-radius:10px;color:#fff!important;font-family:"DM Sans",sans-serif;font-size:15px;padding:9px 34px 9px 36px;outline:none;transition:background .2s,border .2s;-webkit-text-fill-color:#fff}
.si::placeholder{color:rgba(255,255,255,.3)}
.si:focus{background:rgba(255,255,255,.14)!important;border-color:#f97316;color:#fff!important;-webkit-text-fill-color:#fff}
.sc{position:absolute;right:9px;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,.4);cursor:pointer;padding:4px;display:none;font-size:15px;line-height:1}
.sc.on{display:block}

/* BOTTOM NAV */
.bottom-nav{position:fixed;bottom:0;left:0;right:0;height:calc(var(--nav) + env(safe-area-inset-bottom,0));background:var(--card);border-top:1.5px solid var(--bd);display:flex;z-index:200;box-shadow:var(--shu)}
.nav-btn{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;background:none;border:none;cursor:pointer;padding-bottom:env(safe-area-inset-bottom,0);transition:color .15s;color:var(--t3);font-family:"DM Sans",sans-serif;font-size:10px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;position:relative}
.nav-btn.on{color:#f97316}
.nav-btn svg{transition:transform .15s}
.nav-btn.on svg{transform:scale(1.12)}
.nav-badge{position:absolute;top:6px;right:calc(50% - 22px);background:#ef4444;color:#fff;font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;display:none;align-items:center;justify-content:center;padding:0 3px}
.nav-badge.on{display:flex}

/* MAIN VIEWS */
.view{display:none;padding-bottom:calc(var(--nav) + env(safe-area-inset-bottom,0) + 10px)}
.view.on{display:block}

/* STATS */
.stats{display:none;gap:7px;padding:10px 13px 4px;flex-wrap:wrap}
.stats.on{display:flex}
.chip{display:flex;align-items:center;gap:4px;background:var(--card);border:1.5px solid var(--bd);border-radius:8px;padding:5px 11px;font-size:12px;font-weight:500;color:var(--t2);box-shadow:var(--sh)}
.chip b{font-weight:700;color:var(--t1);font-size:13px}
.chip.w{border-color:var(--rbd);background:var(--rbg);color:#ef4444}.chip.w b{color:#ef4444}
.chip.i{border-color:var(--bbd);background:var(--bbg);color:#3b82f6}.chip.i b{color:#3b82f6}

/* PINNED */
.pinned-wrap{display:none}
.pinned-wrap.on{display:block}
.pinned-hdr{display:flex;align-items:center;justify-content:space-between;padding:10px 13px 6px}
.pinned-lbl{font-family:"Barlow Condensed",sans-serif;font-size:13px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;color:var(--t3)}
.pinned-lbl span{color:#f59e0b}
.pinned-scroll{display:flex;gap:10px;overflow-x:auto;padding:0 13px 10px;scrollbar-width:none;-webkit-overflow-scrolling:touch}
.pinned-scroll::-webkit-scrollbar{display:none}
.pin-card{background:var(--card);border:1.5px solid var(--bd);border-radius:12px;padding:10px;min-width:130px;max-width:130px;display:flex;flex-direction:column;gap:4px;box-shadow:var(--sh);position:relative;flex-shrink:0;cursor:pointer;transition:border-color .18s}
.pin-card.low{border-color:var(--rbd)}
.pin-card.low .pin-qty{color:#ef4444}
.pin-img{width:100%;max-height:80px;object-fit:contain;border-radius:7px;margin-bottom:3px;background:var(--inp)}
.pin-star{position:absolute;top:5px;right:5px;background:none;border:none;cursor:pointer;font-size:14px;line-height:1;padding:2px;color:#f59e0b}
.pin-name{font-family:"Barlow Condensed",sans-serif;font-size:15px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:16px;color:var(--t1)}
.pin-badge{font-size:9px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;padding:1px 6px;border-radius:4px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}
.pin-qty{font-family:"Barlow Condensed",sans-serif;font-size:28px;font-weight:800;line-height:1;letter-spacing:-1px;color:var(--t1)}
.pin-unit{font-size:10px;color:var(--t3);margin-top:-2px}
.pin-btns{display:flex;gap:5px;margin-top:4px}
.pin-btn{flex:1;height:28px;border-radius:7px;border:none;cursor:pointer;font-size:18px;font-weight:700;display:flex;align-items:center;justify-content:center;transition:transform .1s}
.pin-btn:active{transform:scale(.88)}
.pin-btn.use{background:var(--inp);color:var(--t2)}.pin-btn.use:disabled{opacity:.3}
.pin-btn.rst{background:#f97316;color:#fff}
.pin-divider{height:1px;background:var(--bd);margin:0 13px 8px}

/* INVENTORY LIST */
.list{padding:4px 12px 10px;display:flex;flex-direction:column;gap:11px}
.empty{display:none;flex-direction:column;align-items:center;justify-content:center;padding:70px 26px;text-align:center;gap:10px}
.empty.on{display:flex}
.eico{font-size:50px;opacity:.25}
.et{font-family:"Barlow Condensed",sans-serif;font-size:22px;font-weight:700;color:var(--t2)}
.es{font-size:13px;color:var(--t3);line-height:1.55}

/* CARDS */
.card{background:var(--card);border-radius:14px;box-shadow:var(--sh);border:1.5px solid var(--bd);overflow:hidden;animation:fadeUp .22s ease;position:relative;transition:border-color .18s,box-shadow .18s}
.card.low{border-color:var(--rbd)}.card.pinned{border-color:var(--ybd)}.card.sel{border-color:#f97316;box-shadow:0 0 0 3px rgba(249,115,22,.22),var(--sh)}
.cchk{display:none;position:absolute;top:11px;left:11px;width:22px;height:22px;border-radius:6px;border:2px solid var(--bd2);background:var(--card);z-index:5;align-items:center;justify-content:center}
.bkon .cchk{display:flex}.card.sel .cchk{border-color:#f97316;background:#f97316}.cchk svg{display:none}.card.sel .cchk svg{display:block}
.cimg{width:100%;max-height:220px;object-fit:contain;display:block;border-bottom:1px solid var(--bd);background:var(--inp)}
.ctop{display:flex;align-items:flex-start;justify-content:space-between;padding:11px 11px 6px;gap:6px}.bkon .ctop{padding-left:40px}
.cmeta{flex:1;min-width:0}
.cname{font-family:"Barlow Condensed",sans-serif;font-size:20px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.badges{display:flex;flex-wrap:wrap;gap:4px;margin-top:5px}
.badge{display:inline-flex;align-items:center;gap:3px;font-size:10px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;padding:2px 7px;border-radius:5px}
.cacts{display:flex;gap:1px;flex-shrink:0}.bkon .cacts{display:none}
.ibtn{background:none;border:none;cursor:pointer;padding:6px;border-radius:8px;color:var(--t3);transition:background .13s,color .13s;line-height:0}
.ibtn:active{background:var(--bd);color:var(--t1)}.ibtn.del:active{background:var(--rbg);color:#ef4444}
.ibtn.star{font-size:16px;color:var(--t3)}.ibtn.star.on{color:#f59e0b}
.cdiv{height:1px;background:var(--bd);margin:0 11px}
.cqty{display:flex;align-items:center;gap:8px;padding:9px 11px 7px}.bkon .cqty,.bkon .cbrow{pointer-events:none;opacity:.45}
.qb{width:46px;height:46px;border-radius:11px;border:none;cursor:pointer;font-size:22px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .1s}
.qb:active{transform:scale(.88)}.qb.use{background:var(--inp);color:var(--t2)}.qb.use:disabled{opacity:.3}.qb.rst{background:#f97316;color:#fff}
.qmid{flex:1;text-align:center}
.qnum{font-family:"Barlow Condensed",sans-serif;font-size:40px;font-weight:800;line-height:1;letter-spacing:-1px;transition:transform .15s;display:inline-block}
.qnum.bump{transform:scale(1.2)}.card.low .qnum{color:#ef4444}
.qunit{font-size:11px;color:var(--t3);font-weight:500;margin-top:1px}
.qsub{font-size:11px;color:var(--t3);margin-top:1px}.qsub span{color:#3b82f6}
.qwarn{font-size:11px;color:#ef4444;font-weight:600;display:none;margin-top:2px}.card.low .qwarn{display:block}
.cbrow{display:flex;align-items:center;gap:7px;padding:0 11px 11px;flex-wrap:wrap}
.bbtn{display:flex;align-items:center;justify-content:center;gap:5px;background:var(--inp);border:1.5px solid var(--bd);border-radius:9px;padding:8px 12px;cursor:pointer;font-family:"DM Sans",sans-serif;font-size:13px;font-weight:600;color:var(--t2);transition:background .13s,border .13s;white-space:nowrap}
.bbtn:active{background:var(--bbg);border-color:var(--bbd);color:#3b82f6}
.bcnt{display:none;align-items:center;gap:4px;border-radius:9px;padding:8px 11px;cursor:pointer;font-family:"DM Sans",sans-serif;font-size:12px;font-weight:700;white-space:nowrap}
.bcnt:active{filter:brightness(.93)}.bcnt.on{display:flex}
.bcnt.bor{background:var(--bbg);border:1.5px solid var(--bbd);color:#3b82f6}
.bcnt.log{background:var(--gbg);border:1.5px solid var(--gbd);color:#22c55e}

/* FAB */
.fab{position:fixed;bottom:calc(var(--nav) + env(safe-area-inset-bottom,0) + 14px);right:16px;width:56px;height:56px;border-radius:16px;background:#f97316;color:#fff;border:none;font-size:27px;cursor:pointer;box-shadow:0 4px 20px rgba(249,115,22,.55);display:flex;align-items:center;justify-content:center;z-index:150;transition:transform .12s}
.fab:active{transform:scale(.9)}.fab.off{display:none}

/* BULK BAR */
.bkbar{display:none;position:fixed;bottom:calc(var(--nav) + env(safe-area-inset-bottom,0));left:0;right:0;background:#0f172a;padding:10px 13px;z-index:195;box-shadow:var(--shu);flex-direction:column;gap:9px;animation:slideUp .2s ease}
.bkbar.on{display:flex}
.bktop{display:flex;align-items:center;justify-content:space-between}
.bkcnt{font-family:"Barlow Condensed",sans-serif;font-size:20px;font-weight:800;color:#fff}
.bkall{background:none;border:none;color:#f97316;font-family:"DM Sans",sans-serif;font-size:13px;font-weight:700;cursor:pointer}
.bkrow{display:flex;gap:7px;align-items:center}
.bkinp{flex:1;background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.18);border-radius:9px;color:#fff;font-family:"DM Mono",monospace;font-size:16px;padding:9px 12px;outline:none;min-width:0}
.bkinp::placeholder{color:rgba(255,255,255,.3)}.bkinp:focus{border-color:#f97316}
.bkap{background:#f97316;border:none;border-radius:9px;color:#fff;font-family:"DM Sans",sans-serif;font-size:14px;font-weight:700;padding:9px 14px;cursor:pointer;white-space:nowrap}
.bkdn{background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.17);border-radius:9px;color:#fff;font-family:"DM Sans",sans-serif;font-size:14px;font-weight:600;padding:9px 12px;cursor:pointer}

/* DASHBOARD */
.dash-wrap{padding:16px 13px 10px;display:flex;flex-direction:column;gap:16px}
.dash-section-title{font-family:"Barlow Condensed",sans-serif;font-size:14px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;color:var(--t3);margin-bottom:8px;display:flex;align-items:center;gap:6px}
.sum-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.sum-card{background:var(--card);border:1.5px solid var(--bd);border-radius:14px;padding:16px;box-shadow:var(--sh);display:flex;flex-direction:column;gap:4px}
.sum-card.warn{border-color:var(--rbd);background:var(--rbg)}
.sum-card.info{border-color:var(--bbd);background:var(--bbg)}
.sum-card.good{border-color:var(--gbd);background:var(--gbg)}
.sum-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--t3)}
.sum-card.warn .sum-label{color:#ef4444}.sum-card.info .sum-label{color:#3b82f6}.sum-card.good .sum-label{color:#22c55e}
.sum-value{font-family:"Barlow Condensed",sans-serif;font-size:32px;font-weight:800;line-height:1;letter-spacing:-1px;color:var(--t1)}
.sum-card.warn .sum-value{color:#ef4444}.sum-card.info .sum-value{color:#3b82f6}.sum-card.good .sum-value{color:#22c55e}
.sum-sub{font-size:11px;color:var(--t3)}

/* CHART */
.chart-card{background:var(--card);border:1.5px solid var(--bd);border-radius:14px;padding:14px 14px 10px;box-shadow:var(--sh)}
.chart-legend{display:flex;gap:14px;margin-bottom:10px}
.legend-item{display:flex;align-items:center;gap:5px;font-size:11px;font-weight:600;color:var(--t2)}
.legend-dot{width:9px;height:9px;border-radius:3px}
.chart-empty{text-align:center;padding:30px;color:var(--t3);font-size:13px}

/* OVERDUE SECTION */
.overdue-section{background:var(--rbg);border:1.5px solid var(--rbd);border-radius:14px;padding:12px}
.overdue-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.overdue-title{font-family:"Barlow Condensed",sans-serif;font-size:16px;font-weight:800;color:#ef4444;display:flex;align-items:center;gap:5px}
.od-entry{background:var(--card);border-radius:10px;padding:10px;margin-bottom:7px;border:1px solid var(--rbd);display:flex;align-items:flex-start;gap:8px}
.od-entry:last-child{margin-bottom:0}
.od-days{background:#ef4444;color:#fff;font-family:"Barlow Condensed",sans-serif;font-size:14px;font-weight:800;padding:2px 7px;border-radius:5px;white-space:nowrap;flex-shrink:0}
.od-info{flex:1;min-width:0}
.od-item{font-weight:700;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.od-who{font-size:12px;color:var(--t2)}

/* LOW STOCK LIST */
.low-list{display:flex;flex-direction:column;gap:8px}
.low-row{background:var(--card);border:1.5px solid var(--rbd);border-radius:10px;padding:10px 12px;display:flex;align-items:center;gap:10px}
.low-name{font-weight:700;font-size:14px;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.low-qty{font-family:"Barlow Condensed",sans-serif;font-size:20px;font-weight:800;color:#ef4444;white-space:nowrap}
.low-meta{font-size:11px;color:var(--t3)}
.reorder-btn{background:#f97316;border:none;border-radius:8px;color:#fff;font-family:"DM Sans",sans-serif;font-size:12px;font-weight:700;padding:6px 10px;cursor:pointer;white-space:nowrap;flex-shrink:0}

/* STOCK LOG */
.sl-day{margin-bottom:12px}
.sl-day-hdr{display:flex;align-items:center;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--bd);margin-bottom:7px}
.sl-day-lbl{font-family:"Barlow Condensed",sans-serif;font-size:13px;font-weight:800;letter-spacing:.4px;color:var(--t2)}
.sl-day-sum{font-size:11px;color:var(--t3);display:flex;gap:8px}
.sl-row{display:flex;align-items:center;gap:9px;padding:7px 10px;background:var(--inp);border-radius:9px;margin-bottom:5px;border:1.5px solid var(--bd)}
.sl-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.sl-dot.rst{background:#22c55e}.sl-dot.use{background:#f97316}
.sl-info{flex:1;min-width:0}
.sl-type{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.4px}
.sl-type.rst{color:#22c55e}.sl-type.use{color:#f97316}
.sl-bef-aft{font-size:11px;color:var(--t3);font-family:"DM Mono",monospace}
.sl-time{font-family:"DM Mono",monospace;font-size:10px;color:var(--t3);white-space:nowrap}
.sl-delta{font-family:"Barlow Condensed",sans-serif;font-size:22px;font-weight:800;flex-shrink:0}
.sl-delta.rst{color:#22c55e}.sl-delta.use{color:#f97316}

/* OVERLAYS */
.ov{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:300;backdrop-filter:blur(3px);align-items:flex-end}
.ov.on{display:flex;animation:fadeIn .18s}
.sheet{background:var(--card);border-radius:22px 22px 0 0;width:100%;max-height:93dvh;overflow-y:auto;padding-bottom:env(safe-area-inset-bottom,16px);animation:slideUp .23s ease}
.shdl{width:36px;height:4px;background:var(--bd);border-radius:2px;margin:11px auto 0}
.shhdr{display:flex;align-items:center;justify-content:space-between;padding:13px 17px 9px}
.shtitle{font-family:"Barlow Condensed",sans-serif;font-size:23px;font-weight:800;color:var(--t1)}
.shclose{background:var(--bd);border:none;border-radius:50%;width:29px;height:29px;font-size:15px;cursor:pointer;color:var(--t2);display:flex;align-items:center;justify-content:center}
.shbody{padding:4px 17px 20px;display:flex;flex-direction:column;gap:13px}
.seclbl{font-family:"Barlow Condensed",sans-serif;font-size:13px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--t3);border-bottom:1px solid var(--bd);padding-bottom:5px;margin-bottom:2px}

/* FORMS */
.f label{display:block;font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--t2);margin-bottom:4px}
.f input,.f select,.f textarea{width:100%;font-family:"DM Sans",sans-serif;font-size:16px;padding:10px 12px;border:1.5px solid var(--bd);border-radius:10px;background:var(--inp);color:var(--t1);outline:none;transition:border .2s,background .2s;-webkit-appearance:none;appearance:none}
.f input:focus,.f select:focus,.f textarea:focus{border-color:#f97316;background:var(--card)}
.f input.err,.f select.err{border-color:#ef4444}
.f textarea{resize:none;height:68px;font-size:14px}
.ferr{font-size:11px;color:#ef4444;margin-top:3px;display:none}.ferr.on{display:block}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.fhint{font-size:11px;color:var(--t3);margin-top:3px}

/* IMAGE UPLOAD */
.upfile{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}
.uplabel{display:block;cursor:pointer;border:2px dashed var(--bd);border-radius:12px;overflow:hidden;transition:border-color .2s;background:var(--inp)}
.uplabel:active{border-color:#f97316}
.upprev{width:100%;max-height:165px;object-fit:cover;display:none}.upprev.on{display:block}
.upph{display:flex;flex-direction:column;align-items:center;gap:6px;padding:20px 16px;color:var(--t3)}.upph.off{display:none}
.upph svg{opacity:.4}.upph span{font-size:13px;font-weight:500}.upph small{font-size:11px;opacity:.7}
.uprm{display:none;width:100%;background:var(--rbg);border:1.5px solid var(--rbd);border-radius:8px;color:#ef4444;font-size:12px;font-weight:700;padding:7px;cursor:pointer;margin-top:6px}.uprm.on{display:block}
.gallery-alt{display:block;text-align:center;font-size:12px;font-weight:600;color:var(--t2);padding:7px;cursor:pointer;border-radius:8px;border:1.5px solid var(--bd);background:var(--inp);-webkit-tap-highlight-color:transparent;margin-top:6px}
.gallery-alt:active{background:var(--bbg);color:#3b82f6;border-color:var(--bbd)}.gallery-alt.off{display:none}
.id-uplabel{display:block;cursor:pointer;border:2px dashed var(--bd);border-radius:10px;overflow:hidden;transition:border-color .2s;background:var(--inp)}
.id-uplabel:active{border-color:#3b82f6}
.id-prev{width:100%;max-height:120px;object-fit:cover;display:none}.id-prev.on{display:block}
.id-ph{display:flex;align-items:center;gap:10px;padding:14px 16px;color:var(--t3)}.id-ph.off{display:none}
.id-ph svg{opacity:.45;flex-shrink:0}.id-ph div{display:flex;flex-direction:column;gap:2px}
.id-ph span{font-size:13px;font-weight:600}.id-ph small{font-size:11px;opacity:.75}
.id-rm{display:none;width:100%;background:var(--rbg);border:1.5px solid var(--rbd);border-radius:8px;color:#ef4444;font-size:12px;font-weight:700;padding:7px;cursor:pointer;margin-top:6px}.id-rm.on{display:block}
.id-gallery{display:block;text-align:center;font-size:12px;font-weight:600;color:var(--t2);padding:7px;cursor:pointer;border-radius:8px;border:1.5px solid var(--bd);background:var(--inp);-webkit-tap-highlight-color:transparent;margin-top:6px}
.id-gallery:active{background:var(--bbg);color:#3b82f6;border-color:var(--bbd)}.id-gallery.off{display:none}

/* SIGNATURE */
.sig-wrap{background:var(--card);border:2px solid var(--bd);border-radius:12px;overflow:hidden;position:relative}
.sig-canvas{display:block;width:100%;height:150px;touch-action:none;cursor:crosshair;background:var(--card)}
.sig-footer{display:flex;align-items:center;justify-content:space-between;padding:7px 12px;border-top:1px solid var(--bd);background:var(--inp)}
.sig-hint{font-size:11px;color:var(--t3)}.sig-clear{background:none;border:none;font-size:12px;font-weight:700;color:var(--t2);cursor:pointer;padding:4px 8px;border-radius:6px}
.sig-clear:active{background:var(--bd)}.sig-err{font-size:11px;color:#ef4444;margin-top:3px;display:none}.sig-err.on{display:block}

/* AVAIL BOX */
.availbox{background:var(--inp);border:1.5px solid var(--bd);border-radius:9px;padding:10px 13px;font-size:13px;color:var(--t2);line-height:1.5}
.availbox b{color:var(--t1)}

/* BORROW ENTRIES */
.be{background:var(--inp);border:1.5px solid var(--bd);border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:8px}
.betop{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}
.bewho{font-family:"Barlow Condensed",sans-serif;font-size:18px;font-weight:700;color:var(--t1)}
.beproj{font-size:12px;color:var(--t2);margin-top:2px;display:flex;align-items:center;gap:3px}
.beqty{font-family:"DM Mono",monospace;font-size:18px;font-weight:500;color:#3b82f6;white-space:nowrap;flex-shrink:0}
.betags{display:flex;gap:6px;flex-wrap:wrap;align-items:center}
.betag{font-size:11px;background:var(--card);border:1px solid var(--bd);border-radius:5px;padding:2px 7px;color:var(--t2)}
.betag.over{color:#ef4444;border-color:var(--rbd)}.betag.dt{font-family:"DM Mono",monospace;font-size:10px}
.benote{font-size:12px;color:var(--t3);font-style:italic;line-height:1.4}
.be-media{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.be-idthumb{width:50px;height:50px;object-fit:cover;border-radius:8px;border:1.5px solid var(--bd);cursor:pointer;flex-shrink:0}
.be-sigthumb{height:38px;max-width:110px;object-fit:contain;border-radius:7px;border:1.5px solid var(--bd);cursor:pointer;background:var(--card)}
.be-medialbl{font-size:11px;color:var(--t3);display:flex;flex-direction:column;gap:2px}
.be-medialbl b{font-size:12px;font-weight:600;color:var(--t1)}
.beacts{display:flex;gap:7px;align-items:center}
.retinp{width:70px;background:var(--card);border:1.5px solid var(--bd);border-radius:8px;padding:7px 9px;font-family:"DM Mono",monospace;font-size:14px;color:var(--t1);outline:none;text-align:center;-webkit-appearance:none;appearance:none}
.retinp:focus{border-color:#22c55e}
.retbtn{flex:1;background:#22c55e;color:#fff;border:none;border-radius:8px;padding:9px 12px;font-family:"DM Sans",sans-serif;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:5px}
.retbtn:active{filter:brightness(.9)}
.norows{text-align:center;padding:28px;color:var(--t3);font-size:14px}

/* TIMELINE */
.tl{display:flex;flex-direction:column;gap:0}
.tl-entry{display:flex;gap:10px;position:relative;padding-bottom:14px}
.tl-entry:last-child{padding-bottom:0}
.tl-entry:not(:last-child)::before{content:"";position:absolute;left:9px;top:21px;width:2px;bottom:0;background:var(--bd)}
.tl-dot{width:20px;height:20px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;margin-top:2px}
.tl-dot.bor{background:var(--bbg);border:2px solid #3b82f6}.tl-dot.ret{background:var(--gbg);border:2px solid #22c55e}.tl-dot.iss{background:var(--ybg);border:2px solid #f59e0b}
.tl-body{flex:1;min-width:0}
.tl-hdr{display:flex;align-items:baseline;justify-content:space-between;gap:6px;flex-wrap:wrap}
.tl-type{font-family:"Barlow Condensed",sans-serif;font-size:14px;font-weight:800;letter-spacing:.3px}
.tl-type.bor{color:#3b82f6}.tl-type.ret{color:#22c55e}.tl-type.iss{color:#f59e0b}
.tl-dt{font-family:"DM Mono",monospace;font-size:10px;color:var(--t3)}
.tl-who{font-size:13px;font-weight:600;color:var(--t1);margin-top:3px}
.tl-proj{font-size:12px;color:var(--t2)}
.tl-qty{font-family:"DM Mono",monospace;font-size:12px;color:var(--t2);margin-top:2px}
.tl-note{font-size:12px;color:var(--t3);font-style:italic;margin-top:2px;line-height:1.4}
.tl-imgs{display:flex;gap:6px;margin-top:6px;flex-wrap:wrap}
.tl-img{width:42px;height:42px;object-fit:cover;border-radius:7px;border:1.5px solid var(--bd);cursor:pointer}
.tl-sig{height:34px;max-width:100px;object-fit:contain;border-radius:7px;border:1.5px solid var(--bd);cursor:pointer;background:var(--card)}

/* TABS */
.tabs{display:flex;border:1.5px solid var(--bd);border-radius:10px;overflow:hidden;margin-bottom:4px}
.tab{flex:1;padding:9px;background:none;border:none;font-family:"DM Sans",sans-serif;font-size:12px;font-weight:700;letter-spacing:.3px;color:var(--t2);cursor:pointer;transition:background .14s,color .14s}
.tab.on{background:#f97316;color:#fff}

/* EXPORT MODAL OPTIONS */
.exp-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.exp-btn{background:var(--inp);border:1.5px solid var(--bd);border-radius:12px;padding:16px 12px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:8px;transition:border-color .15s,background .15s;text-align:center}
.exp-btn:active{border-color:#f97316;background:var(--ybg)}
.exp-ico{font-size:28px}
.exp-label{font-family:"Barlow Condensed",sans-serif;font-size:15px;font-weight:800;color:var(--t1)}
.exp-sub{font-size:11px;color:var(--t3);line-height:1.4}

/* REORDER SLIP */
.ro-item{background:var(--inp);border:1.5px solid var(--bd);border-radius:10px;padding:11px;display:flex;align-items:center;gap:10px;margin-bottom:7px}
.ro-item:last-child{margin-bottom:0}
.ro-dot{width:8px;height:8px;border-radius:50%;background:#ef4444;flex-shrink:0}
.ro-info{flex:1;min-width:0}
.ro-name{font-weight:700;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ro-meta{font-size:11px;color:var(--t2);margin-top:2px}
.ro-need{font-family:"Barlow Condensed",sans-serif;font-size:18px;font-weight:800;color:#ef4444;white-space:nowrap;flex-shrink:0}

/* BACKUP */
.bk-btn{display:flex;align-items:center;gap:12px;background:var(--inp);border:1.5px solid var(--bd);border-radius:12px;padding:14px;cursor:pointer;transition:border-color .15s;width:100%;text-align:left}
.bk-btn:active{border-color:#f97316}
.bk-ico{font-size:28px;flex-shrink:0}
.bk-text{flex:1}
.bk-label{font-family:"Barlow Condensed",sans-serif;font-size:17px;font-weight:800;color:var(--t1)}
.bk-sub{font-size:12px;color:var(--t2);margin-top:2px;line-height:1.4}
.bk-note{background:var(--ybg);border:1.5px solid var(--ybd);border-radius:10px;padding:11px 13px;font-size:13px;color:var(--t2);line-height:1.5}
.bk-note b{color:var(--t1)}

/* MANAGER ROWS */
.mrow{display:flex;align-items:center;gap:7px;background:var(--inp);border:1.5px solid var(--bd);border-radius:10px;padding:9px 10px}
.mdot{width:9px;height:9px;border-radius:50%;flex-shrink:0}
.mname{flex:1;font-size:14px;font-weight:500;color:var(--t1);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.minp{flex:1;font-family:"DM Sans",sans-serif;font-size:14px;border:1.5px solid #f97316;border-radius:6px;padding:4px 8px;outline:none;background:var(--card);color:var(--t1);display:none}
.minp.on{display:block}.mname.h{display:none}
.mact{background:none;border:none;cursor:pointer;padding:5px;color:var(--t3);border-radius:6px;line-height:0}
.mact:active{background:var(--bd)}.mact.del:active{background:var(--rbg);color:#ef4444}
.marow{display:flex;gap:7px;margin-top:4px}
.mainp{flex:1;font-family:"DM Sans",sans-serif;font-size:15px;padding:10px 12px;border:1.5px solid var(--bd);border-radius:10px;background:var(--inp);color:var(--t1);outline:none}
.mainp:focus{border-color:#f97316;background:var(--card)}
.mabtn{width:44px;background:#f97316;border:none;border-radius:10px;color:#fff;font-size:22px;font-weight:700;cursor:pointer;flex-shrink:0}

/* LIGHTBOX */
.lb{display:none;position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:500;align-items:center;justify-content:center;flex-direction:column;gap:14px;padding:20px;backdrop-filter:blur(4px)}
.lb.on{display:flex;animation:fadeIn .18s}
.lb img{max-width:100%;max-height:80dvh;border-radius:12px;box-shadow:0 8px 40px rgba(0,0,0,.5)}
.lb-cap{color:rgba(255,255,255,.7);font-size:13px;font-weight:500;text-align:center}
.lb-close{position:absolute;top:calc(14px + env(safe-area-inset-top,0));right:14px;background:rgba(255,255,255,.15);border:none;border-radius:50%;width:36px;height:36px;font-size:18px;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center}

/* DELETE */
.delov{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:400;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(3px)}
.delov.on{display:flex;animation:fadeIn .14s}
.delbox{background:var(--card);border-radius:18px;padding:26px 20px 20px;width:100%;max-width:320px;text-align:center;animation:popIn .2s ease;border:1px solid var(--bd)}
.delico{font-size:42px;margin-bottom:9px}
.delttl{font-family:"Barlow Condensed",sans-serif;font-size:22px;font-weight:800;margin-bottom:6px;color:var(--t1)}
.delmsg{font-size:14px;color:var(--t2);margin-bottom:18px;line-height:1.5}
.delbtns{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.delno{padding:12px;background:var(--inp);border:1.5px solid var(--bd);border-radius:10px;font-family:"DM Sans",sans-serif;font-size:15px;font-weight:600;cursor:pointer;color:var(--t1)}
.delyes{padding:12px;background:#ef4444;border:none;border-radius:10px;color:#fff;font-family:"DM Sans",sans-serif;font-size:15px;font-weight:600;cursor:pointer}

/* SUBMIT */
.btnmain{width:100%;padding:14px;background:#f97316;color:#fff;border:none;border-radius:12px;font-family:"Barlow Condensed",sans-serif;font-size:20px;font-weight:800;letter-spacing:.4px;cursor:pointer;transition:filter .14s}
.btnmain:active{filter:brightness(.9)}

/* TOAST */
.toast{position:fixed;bottom:calc(var(--nav) + env(safe-area-inset-bottom,0) + 14px);left:50%;transform:translateX(-50%) translateY(10px);background:#0f172a;color:#fff;padding:9px 17px;border-radius:30px;font-size:13px;font-weight:500;opacity:0;transition:opacity .22s,transform .22s;pointer-events:none;z-index:600;white-space:nowrap;max-width:90vw;overflow:hidden;text-overflow:ellipsis}
.toast.on{opacity:1;transform:translateX(-50%) translateY(0)}
[data-theme="dark"] .toast{background:#1e3050;border:1px solid var(--bd)}


/* ── SMOOTH ANIMATION OVERHAUL ── */
/* Sheet slides */
@keyframes sheetUp{from{transform:translateY(100%);opacity:.6}to{transform:translateY(0);opacity:1}}
@keyframes sheetDown{from{transform:translateY(0);opacity:1}to{transform:translateY(100%);opacity:0}}
@keyframes fadeInSmooth{from{opacity:0;backdrop-filter:blur(0px)}to{opacity:1;backdrop-filter:blur(3px)}}
@keyframes popInSmooth{from{opacity:0;transform:scale(.88)}to{opacity:1;transform:scale(1)}}
@keyframes slideInRight{from{transform:translateX(6px)}to{transform:translateX(0)}}
@keyframes numberPop{0%{transform:scale(1)}40%{transform:scale(1.18)}100%{transform:scale(1)}}

/* Override existing with smoother versions */
.ov{transition:backdrop-filter .22s}
.ov.on{animation:fadeInSmooth .22s ease forwards}
.sheet{animation:sheetUp .28s cubic-bezier(.32,.72,0,1) forwards;border-radius:24px 24px 0 0}
.delbox{animation:popInSmooth .22s cubic-bezier(.34,1.56,.64,1) forwards}
.station-ov.on .station-card{animation:sheetUp .3s cubic-bezier(.32,.72,0,1) forwards}

/* Card animations */
.card{transition:box-shadow .18s,border-color .18s,transform .1s}
.card:active{transform:scale(.985)}

/* Button micro-interactions */
.btnmain{transition:filter .12s,transform .1s,box-shadow .12s}
.btnmain:active{transform:scale(.97);filter:brightness(.92)}
.btnmain:hover{box-shadow:0 4px 18px rgba(249,115,22,.35)}
.qb{transition:transform .1s,background .13s,box-shadow .1s}
.qb.rst:active{transform:scale(.85);box-shadow:0 2px 12px rgba(249,115,22,.5)}
.qb.use:active{transform:scale(.85)}
.qa-btn{transition:background .13s,border-color .13s,transform .1s,box-shadow .13s}
.qa-btn:active{transform:scale(.93)}
.brief-card{transition:transform .13s,box-shadow .13s,border-color .18s}
.brief-card:active{transform:scale(.94);box-shadow:0 1px 4px rgba(0,0,0,.08)}
.bbtn,.retbtn,.bkap{transition:background .13s,filter .1s,transform .1s}
.bbtn:active,.bkap:active{transform:scale(.95)}
.ibtn{transition:background .15s,color .15s,transform .1s}
.ibtn:active{transform:scale(.85)}
.pin-btn{transition:transform .1s,background .13s}
.nav-btn{transition:color .18s}
.nav-btn svg{transition:transform .2s}
.nav-btn.on svg{transform:scale(1.15) translateY(-1px)}
.hb,.hi{transition:background .13s,transform .1s}
.hb:active,.hi:active{transform:scale(.9)}

/* Category group open/close */
.cat-group-items{transition:opacity .18s ease,max-height .2s ease}
.cat-group-arr{transition:transform .22s cubic-bezier(.34,1.56,.64,1)}

/* Swipe cards */
.swipe-card{transition:transform .25s cubic-bezier(.25,.46,.45,.94),box-shadow .2s}
.swipe-reveal{transition:opacity .15s ease}

/* View switching */
.view{animation:none}
.view.on{animation:fadeIn .18s ease forwards}

/* Feed items stagger */
.feed-item{animation:slideInRight .15s ease forwards;transition:border-color .15s}
.brief-card:nth-child(1){animation-delay:.03s}
.brief-card:nth-child(2){animation-delay:.06s}
.brief-card:nth-child(3){animation-delay:.09s}
.brief-card:nth-child(4){animation-delay:.12s}
.brief-card:nth-child(5){animation-delay:.15s}

/* Tip card */
#tipCard{transition:opacity .3s ease,transform .3s ease,border-color .3s ease}

/* Input focus */
.f input,.f select,.f textarea{transition:border-color .18s,background .18s,box-shadow .18s}
.f input:focus,.f select:focus,.f textarea:focus{box-shadow:0 0 0 3px rgba(249,115,22,.15)}

@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes popIn{from{opacity:0;transform:scale(.83)}to{opacity:1;transform:scale(1)}}

/* QR SYSTEM */
.qr-wrap{display:flex;flex-direction:column;align-items:center;gap:16px;padding:12px 0 4px}
.qr-box{background:#fff;border-radius:14px;padding:14px;border:1.5px solid var(--bd);box-shadow:0 2px 12px rgba(0,0,0,.08)}
.qr-info{width:100%;background:var(--inp);border:1.5px solid var(--bd);border-radius:12px;padding:14px}
.qr-iname{font-family:var(--fh);font-size:22px;font-weight:800;color:var(--t1);margin-bottom:6px}
.qr-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px;width:100%}
.qr-act{display:flex;flex-direction:column;align-items:center;gap:5px;padding:13px 10px;background:var(--inp);border:1.5px solid var(--bd);border-radius:12px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;color:var(--t1);transition:border-color .15s}
.qr-act:active{border-color:#f97316;background:var(--ybg)}
.qr-act-i{font-size:24px}
.qr-btn{display:flex;align-items:center;gap:4px;background:var(--inp);border:1.5px solid var(--bd);border-radius:9px;padding:8px 10px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;color:var(--t2);transition:background .13s;white-space:nowrap}
.qr-btn:active{background:var(--bbg);border-color:var(--bbd);color:#3b82f6}
.scan-wrap{position:relative;background:#000;border-radius:14px;overflow:hidden;width:100%}
.scan-vid{width:100%;display:block}
.scan-frame-wrap{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
.scan-frame{width:60%;aspect-ratio:1;border:3px solid #f97316;border-radius:12px;box-shadow:0 0 0 9999px rgba(0,0,0,.5)}
.scan-beam{position:absolute;left:20%;width:60%;height:3px;background:linear-gradient(90deg,transparent,#f97316,transparent);animation:scanBeam 1.8s ease-in-out infinite}
@keyframes scanBeam{0%,100%{top:20%}50%{top:75%}}
.scan-hint{text-align:center;font-size:13px;color:var(--t2);padding:8px 0;font-weight:500}
.scan-ok{background:var(--gbg);border:1.5px solid var(--gbd);border-radius:12px;padding:14px;margin-top:4px;display:none}
.station-ov{display:none;position:fixed;inset:0;z-index:350;background:rgba(0,0,0,.6);backdrop-filter:blur(4px);align-items:flex-end}
.station-ov.on{display:flex;animation:slideUp .25s ease}
.station-card{background:var(--card);border-radius:22px 22px 0 0;width:100%;padding:20px;padding-bottom:calc(20px + env(safe-area-inset-bottom,0));display:flex;flex-direction:column;align-items:center;gap:14px}
.station-img{width:100%;max-height:160px;object-fit:contain;border-radius:12px;display:none;background:var(--inp)}
.station-cat{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--t3)}
.station-name{font-family:var(--fh);font-size:28px;font-weight:800;color:var(--t1);text-align:center}
.station-qrow{display:flex;align-items:center;gap:20px}
.sq-btn{width:54px;height:54px;border-radius:14px;border:none;cursor:pointer;font-size:26px;font-weight:700;display:flex;align-items:center;justify-content:center;transition:transform .1s}
.sq-btn:active{transform:scale(.88)}.sq-btn.use{background:var(--inp);color:var(--t2)}.sq-btn.use:disabled{opacity:.3}.sq-btn.rst{background:#f97316;color:#fff}
.sq-num{font-family:var(--fh);font-size:52px;font-weight:800;line-height:1;letter-spacing:-2px;color:var(--t1)}
.station-row2{display:flex;gap:10px;width:100%}
.st-bor{flex:1;padding:13px;background:#3b82f6;color:#fff;border:none;border-radius:12px;font-family:var(--fh);font-size:18px;font-weight:800;cursor:pointer}
.st-cls{padding:13px 18px;background:var(--inp);border:1.5px solid var(--bd);border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;color:var(--t2);cursor:pointer}

/* PERSONNEL */
.person-row{display:flex;align-items:center;gap:12px;background:var(--card);border:1.5px solid var(--bd);border-radius:12px;padding:12px 13px;cursor:pointer;transition:border-color .15s}
.person-row:active{border-color:#f97316}
.person-avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.person-info{flex:1;min-width:0}
.person-name{font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:800;color:var(--t1)}
.person-dept{font-size:11px;color:var(--t2);margin-top:1px}
.person-stat{text-align:right;flex-shrink:0}
.person-total{font-family:'Barlow Condensed',sans-serif;font-size:20px;font-weight:800;color:#f97316}
.person-total-lbl{font-size:10px;color:var(--t3);text-transform:uppercase;letter-spacing:.4px}
.person-act{background:none;border:none;cursor:pointer;padding:6px;color:var(--t3);border-radius:8px;line-height:0}
.person-act:active{background:var(--bd)}
.person-act.del:active{background:var(--rbg);color:#ef4444}
/* Issue History Timeline */
.issue-day{margin-bottom:16px}
.issue-day-hdr{display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--bd);margin-bottom:8px}
.issue-day-lbl{font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:800;color:var(--t2)}
.issue-day-total{font-size:12px;color:var(--t3)}
.issue-entry{display:flex;align-items:center;gap:10px;padding:9px 11px;background:var(--inp);border-radius:9px;border:1.5px solid var(--bd);margin-bottom:6px}
.issue-dot{width:8px;height:8px;border-radius:50%;background:#f97316;flex-shrink:0}
.issue-item-name{flex:1;font-size:14px;font-weight:600;color:var(--t1);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.issue-cat{font-size:10px;color:var(--t2)}
.issue-time{font-family:'DM Mono',monospace;font-size:10px;color:var(--t3);white-space:nowrap}
.issue-qty{font-family:'Barlow Condensed',sans-serif;font-size:20px;font-weight:800;color:#f97316;white-space:nowrap;flex-shrink:0}
/* Person picker in issue form */
.person-pick-list{display:flex;flex-direction:column;gap:7px;max-height:220px;overflow-y:auto}
.person-pick-item{display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--inp);border:1.5px solid var(--bd);border-radius:10px;cursor:pointer;transition:border-color .15s}
.person-pick-item:active,.person-pick-item.sel{border-color:#f97316;background:var(--ybg)}
.person-pick-avatar{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0}
/* Issue button on card */
.issue-btn{display:flex;align-items:center;gap:4px;background:var(--ybg);border:1.5px solid var(--ybd);border-radius:9px;padding:8px 10px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;color:#92400e;transition:background .13s;white-space:nowrap}
.issue-btn:active{background:#fde68a;border-color:#f59e0b}

/* CONDITION BADGE */
.cond-new{background:#dcfce7;color:#166534}.cond-good{background:#dbeafe;color:#1e40af}
.cond-fair{background:#fef9c3;color:#854d0e}.cond-poor{background:#fee2e2;color:#991b1b}
.cond-condemned{background:#1f2937;color:#ef4444;border:1.5px solid #ef4444}
[data-theme="dark"] .cond-new{background:#14532d;color:#86efac}
[data-theme="dark"] .cond-good{background:#1e3a5f;color:#93c5fd}
[data-theme="dark"] .cond-fair{background:#422006;color:#fde68a}
[data-theme="dark"] .cond-poor{background:#450a0a;color:#fca5a5}

/* INSPECTION TRACKER */
.insp-row{display:flex;align-items:center;gap:10px;background:var(--card);border:1.5px solid var(--bd);border-radius:12px;padding:12px 13px;cursor:pointer;transition:border-color .15s}
.insp-row:active{border-color:#f97316}
.insp-row.overdue{border-color:var(--rbd);background:var(--rbg)}
.insp-row.due-soon{border-color:var(--ybd);background:var(--ybg)}
.insp-status{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.insp-status.ok{background:#22c55e}.insp-status.soon{background:#f59e0b}.insp-status.over{background:#ef4444}
.insp-name{font-family:var(--fh);font-size:16px;font-weight:800;color:var(--t1)}
.insp-meta{font-size:11px;color:var(--t2);margin-top:2px}
.insp-due{font-size:12px;font-weight:700;flex-shrink:0;text-align:right}
.insp-due.ok{color:#22c55e}.insp-due.soon{color:#f59e0b}.insp-due.over{color:#ef4444}

/* HANDOVER */
.handover-card{background:var(--card);border:1.5px solid var(--bd);border-radius:14px;padding:14px;box-shadow:var(--sh)}
.handover-prev{background:var(--inp);border:1.5px solid var(--bd);border-radius:10px;padding:11px 13px;margin-top:4px}
.handover-prev-hdr{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--t3);margin-bottom:6px}
.handover-prev-note{font-size:14px;color:var(--t1);line-height:1.6;white-space:pre-wrap}
.handover-prev-meta{font-size:11px;color:var(--t3);margin-top:6px;font-family:'DM Mono',monospace}

/* SUPPLIER */
.supp-badge{display:inline-flex;align-items:center;gap:4px;font-size:11px;font-weight:600;color:#3b82f6;background:var(--bbg);border:1px solid var(--bbd);border-radius:6px;padding:2px 8px;cursor:pointer}
.supp-badge:active{filter:brightness(.9)}

/* MONTHLY REPORT */
.month-stat{background:var(--card);border:1.5px solid var(--bd);border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:4px;box-shadow:var(--sh)}
.month-stat-lbl{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--t3)}
.month-stat-val{font-family:var(--fh);font-size:28px;font-weight:800;color:var(--t1);line-height:1}
.month-row{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;background:var(--inp);border:1.5px solid var(--bd);border-radius:9px;margin-bottom:6px}

/* TEXT IMPORTER */
.imp-zone{border:2.5px dashed var(--bd);border-radius:14px;padding:20px;text-align:center;cursor:pointer;transition:border-color .2s,background .2s;background:var(--inp)}
.imp-zone:active,.imp-zone.drag{border-color:#f97316;background:var(--ybg)}
.imp-zone-ico{font-size:36px;margin-bottom:6px}
.imp-zone-lbl{font-size:15px;font-weight:600;color:var(--t1)}
.imp-zone-sub{font-size:12px;color:var(--t3);margin-top:3px}
.imp-textarea{width:100%;font-family:'DM Mono',monospace;font-size:13px;padding:11px 13px;border:1.5px solid var(--bd);border-radius:10px;background:var(--inp);color:var(--t1);resize:none;height:160px;outline:none;line-height:1.55}
.imp-textarea:focus{border-color:#f97316;background:var(--card)}
.imp-row{display:flex;align-items:center;gap:10px;background:var(--inp);border:1.5px solid var(--bd);border-radius:10px;padding:10px 12px;margin-bottom:6px;transition:border-color .15s}
.imp-row.sel{border-color:#f97316;background:var(--ybg)}
.imp-row.skip{opacity:.4}
.imp-chk{width:20px;height:20px;border-radius:5px;border:2px solid var(--bd2);background:var(--card);display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;transition:background .13s,border .13s}
.imp-chk.on{background:#f97316;border-color:#f97316}
.imp-item-name{flex:1;font-size:14px;font-weight:600;color:var(--t1);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.imp-item-exists{font-size:11px;color:#3b82f6;font-weight:600;flex-shrink:0}
.imp-item-new{font-size:11px;color:#22c55e;font-weight:600;flex-shrink:0}
.imp-qty-inp{width:64px;background:var(--card);border:1.5px solid var(--bd);border-radius:7px;padding:5px 7px;font-family:'DM Mono',monospace;font-size:13px;color:var(--t1);outline:none;text-align:center;-webkit-appearance:none}
.imp-qty-inp:focus{border-color:#f97316}
.imp-step{display:none;flex-direction:column;gap:12px}.imp-step.on{display:flex}
.imp-prog{height:4px;background:var(--bd);border-radius:2px;overflow:hidden;margin-bottom:4px}
.imp-prog-bar{height:100%;background:#f97316;border-radius:2px;transition:width .3s}

/* ── MORNING BRIEFING ── */
.brief-scroll{display:flex;gap:9px;overflow-x:auto;padding:10px 13px 4px;scrollbar-width:none;-webkit-overflow-scrolling:touch}
.brief-scroll::-webkit-scrollbar{display:none}
.brief-card{flex-shrink:0;min-width:155px;background:var(--card);border:1.5px solid var(--bd);border-radius:13px;padding:11px 13px;cursor:pointer;transition:border-color .15s,transform .1s;box-shadow:var(--sh)}
.brief-card:active{transform:scale(.96)}
.brief-card.alert{border-color:var(--rbd);background:var(--rbg)}
.brief-card.warn{border-color:var(--ybd);background:var(--ybg)}
.brief-card.info{border-color:var(--bbd);background:var(--bbg)}
.brief-card.good{border-color:var(--gbd);background:var(--gbg)}
.brief-ico{font-size:22px;margin-bottom:5px}
.brief-num{font-family:var(--fh);font-size:28px;font-weight:800;line-height:1;color:var(--t1)}
.brief-card.alert .brief-num{color:#ef4444}
.brief-card.warn  .brief-num{color:#f59e0b}
.brief-card.info  .brief-num{color:#3b82f6}
.brief-card.good  .brief-num{color:#22c55e}
.brief-lbl{font-size:11px;font-weight:700;color:var(--t3);margin-top:2px;text-transform:uppercase;letter-spacing:.4px}

/* ── CLOCK / SHIFT ── */
.hdr-clock{display:flex;align-items:center;gap:8px;padding:4px 0 8px 0}
.hdr-time{font-family:'DM Mono',monospace;font-size:13px;font-weight:500;color:rgba(255,255,255,.55);letter-spacing:.5px}
.shift-pill{font-size:10px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;padding:2px 8px;border-radius:20px}
.shift-pill.day{background:rgba(251,191,36,.2);color:#fbbf24}
.shift-pill.night{background:rgba(139,92,246,.2);color:#c4b5fd}

/* ── QUICK ACTION BAR ── */
.qab{display:flex;gap:7px;padding:0 13px 8px;overflow-x:auto;scrollbar-width:none}
.qab::-webkit-scrollbar{display:none}
.qa-btn{display:flex;align-items:center;gap:6px;padding:8px 13px;background:var(--card);border:1.5px solid var(--bd);border-radius:30px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;color:var(--t2);white-space:nowrap;flex-shrink:0;transition:all .13s;box-shadow:var(--sh)}
.qa-btn:active{transform:scale(.94)}
.qa-btn.primary{background:#f97316;border-color:#f97316;color:#fff;box-shadow:0 3px 12px rgba(249,115,22,.4)}
.qa-btn.blue{background:var(--bbg);border-color:var(--bbd);color:#3b82f6}
.qa-btn.amber{background:var(--ybg);border-color:var(--ybd);color:#d97706}
.qa-btn.green{background:var(--gbg);border-color:var(--gbd);color:#16a34a}
.qa-btn.purple{background:#f3e8ff;border-color:#d8b4fe;color:#7c3aed}
[data-theme="dark"] .qa-btn.purple{background:#2d1b69;border-color:#7c3aed}

/* ── ACTIVITY FEED ── */
.feed-wrap{padding:0 13px 4px}
.feed-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.feed-lbl{font-family:var(--fh);font-size:13px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;color:var(--t3)}
.feed-toggle{font-size:12px;font-weight:700;color:var(--t3);background:none;border:none;cursor:pointer;padding:2px 6px}
.feed-list{display:flex;flex-direction:column;gap:5px}
.feed-item{display:flex;align-items:center;gap:9px;padding:7px 10px;background:var(--card);border:1.5px solid var(--bd);border-radius:10px;transition:border-color .15s}
.feed-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.feed-text{flex:1;font-size:12px;color:var(--t2);line-height:1.4;min-width:0}
.feed-text b{color:var(--t1);font-weight:600}
.feed-time{font-family:'DM Mono',monospace;font-size:10px;color:var(--t3);flex-shrink:0}

/* ── CARD ENHANCEMENTS ── */
.card{border-left-width:4px!important}
.card.cond-new-card{border-left-color:#22c55e!important}
.card.cond-good-card{border-left-color:var(--bd)!important}
.card.cond-fair-card{border-left-color:#f59e0b!important}
.card.cond-poor-card{border-left-color:#ef4444!important}
.card.cond-condemned-card{border-left-color:#7c3aed!important}
.card.low{border-left-color:#ef4444!important}

/* ── SWIPE ACTIONS ── */
.swipe-wrap{position:relative;overflow:hidden;border-radius:14px;margin-bottom:0}
.swipe-reveal{position:absolute;top:0;bottom:0;display:flex;align-items:center;justify-content:center;width:80px;transition:opacity .15s}
.swipe-reveal.left{left:0;background:#3b82f6;border-radius:14px 0 0 14px;flex-direction:column;gap:3px}
.swipe-reveal.right{right:0;background:#f97316;border-radius:0 14px 14px 0;flex-direction:column;gap:3px}
.swipe-reveal-ico{font-size:20px;color:#fff}
.swipe-reveal-lbl{font-size:10px;font-weight:700;color:#fff;letter-spacing:.3px}
.swipe-card{position:relative;z-index:1;transform:translateX(0);transition:transform .25s cubic-bezier(.25,.46,.45,.94);will-change:transform;border-radius:14px}

/* ── CATEGORY GROUPS ── */
.cat-group{margin-bottom:4px}
.cat-group-hdr{display:flex;align-items:center;justify-content:space-between;padding:9px 13px 6px;cursor:pointer;-webkit-tap-highlight-color:transparent}
.cat-group-hdr:active{opacity:.7}
.cat-group-left{display:flex;align-items:center;gap:8px}
.cat-group-dot{width:10px;height:10px;border-radius:3px;flex-shrink:0}
.cat-group-name{font-family:var(--fh);font-size:14px;font-weight:800;letter-spacing:.4px;text-transform:uppercase;color:var(--t2)}
.cat-group-count{font-size:11px;font-weight:600;color:var(--t3)}
.cat-group-arr{font-size:12px;color:var(--t3);transition:transform .2s}
.cat-group-arr.open{transform:rotate(180deg)}
.cat-group-items{display:flex;flex-direction:column;gap:11px;padding:0 12px 8px}

/* COMPACT SEARCH BAR */
.srch-row{display:flex;align-items:center;justify-content:center;padding:6px 13px 10px;gap:8px}
.srch-pill{position:relative;flex:1;max-width:440px}
.srch-pill-input{width:100%;background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.12);border-radius:30px;color:#fff!important;-webkit-text-fill-color:#fff!important;font-family:'DM Sans',sans-serif;font-size:14px;padding:9px 36px 9px 38px;outline:none;transition:background .2s,border .2s,box-shadow .2s}
.srch-pill-input::placeholder{color:rgba(255,255,255,.35)}
.srch-pill-input:focus{background:rgba(255,255,255,.16);border-color:rgba(249,115,22,.8);box-shadow:0 0 0 3px rgba(249,115,22,.2)}
.srch-pill-ico{position:absolute;left:12px;top:50%;transform:translateY(-50%);color:rgba(255,255,255,.4);pointer-events:none}
.srch-pill-clr{position:absolute;right:10px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.15);border:none;color:#fff;cursor:pointer;width:20px;height:20px;border-radius:50%;display:none;align-items:center;justify-content:center;font-size:11px;transition:background .13s}
.srch-pill-clr:active{background:rgba(255,255,255,.3)}
.srch-pill-clr.on{display:flex}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<script src="https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js"></script>
</head>
<body>


<!-- ═══ LOGIN SCREEN ═══ -->
<div id="loginScreen" style="display:none;position:fixed;inset:0;background:#0f172a;z-index:9999;flex-direction:column;align-items:center;justify-content:center;padding:32px">
  <div style="width:100%;max-width:360px;display:flex;flex-direction:column;align-items:center;gap:24px">
    <!-- Logo -->
    <div style="text-align:center">
      <div style="font-family:var(--fh);font-size:40px;font-weight:800;color:#fff;letter-spacing:1px">WARE<span style="color:#f97316">STOCK</span></div>
      <div style="font-size:13px;color:rgba(255,255,255,.45);margin-top:4px;letter-spacing:.3px">Warehouse Management System</div>
    </div>
    <!-- Developer Card -->
    <div style="display:flex;align-items:center;gap:14px;background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.1);border-radius:16px;padding:14px 16px;width:100%">
      <img src="data:image/jpeg;base64,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" style="width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid #f97316;flex-shrink:0"/>
      <div>
        <div style="font-family:var(--fh);font-size:18px;font-weight:800;color:#fff;letter-spacing:.4px">Brian Capio</div>
        <div style="font-size:11px;color:#f97316;font-weight:700;letter-spacing:.4px;text-transform:uppercase">Developer</div>
        <div style="font-size:11px;color:rgba(255,255,255,.45);margin-top:1px">ICT – MAWD</div>
      </div>
    </div>
    <!-- Login Form -->
    <div style="width:100%;display:flex;flex-direction:column;gap:12px">
      <div style="display:flex;flex-direction:column;gap:5px">
        <label style="font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,255,255,.5)">Username</label>
        <input id="loginUser" type="text" autocomplete="username" placeholder="Enter username"
          style="width:100%;background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.15);border-radius:10px;color:#fff;font-family:'DM Sans',sans-serif;font-size:16px;padding:12px 14px;outline:none"
          onkeydown="if(event.key==='Enter')doLogin()"/>
      </div>
      <div style="display:flex;flex-direction:column;gap:5px">
        <label style="font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,255,255,.5)">Password</label>
        <div style="position:relative">
          <input id="loginPass" type="password" autocomplete="current-password" placeholder="Enter password"
            style="width:100%;background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.15);border-radius:10px;color:#fff;font-family:'DM Sans',sans-serif;font-size:16px;padding:12px 46px 12px 14px;outline:none"
            onkeydown="if(event.key==='Enter')doLogin()"/>
          <button onclick="togglePassVis()" id="passToggle" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,.4);cursor:pointer;font-size:18px;padding:4px;line-height:1">👁</button>
        </div>
      </div>
      <div id="loginErr" style="display:none;background:rgba(239,68,68,.2);border:1px solid rgba(239,68,68,.4);border-radius:8px;padding:9px 13px;font-size:13px;color:#fca5a5;text-align:center"></div>
      <button onclick="doLogin()" style="width:100%;padding:14px;background:#f97316;color:#fff;border:none;border-radius:12px;font-family:var(--fh);font-size:21px;font-weight:800;letter-spacing:.5px;cursor:pointer;margin-top:4px">SIGN IN</button>
    </div>
    <div style="font-size:11px;color:rgba(255,255,255,.25);text-align:center">WareStock v7.0 · Powered by ICT-MAWD</div>
  </div>
</div>

<!-- ═══ DAMAGE REPORT MODAL ═══ -->
<div class="ov" id="dmgOv" onclick="ovtap(event,'dmgOv',closeDmg)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr"><div class="shtitle">⚠ Damage Report</div><button class="shclose" onclick="closeDmg()">✕</button></div>
    <div class="shbody">
      <div style="background:var(--rbg);border:1.5px solid var(--rbd);border-radius:10px;padding:10px 13px;font-size:13px;color:#ef4444;line-height:1.5">
        Fill in the details below. You can print this report or send it directly via Gmail.
      </div>
      <div class="f"><label>Item Name *</label><input id="dmgItem" type="text" placeholder="e.g. Safety Harness"/><div class="ferr" id="dmgItemErr">Required</div></div>
      <div class="frow">
        <div class="f"><label>Category</label><select id="dmgCat"></select></div>
        <div class="f"><label>Location / Project</label><input id="dmgLoc" type="text" placeholder="e.g. Site A"/></div>
      </div>
      <div class="frow">
        <div class="f"><label>Date of Damage</label><input id="dmgDate" type="date"/></div>
        <div class="f"><label>Severity</label>
          <select id="dmgSev">
            <option value="Minor">Minor — Still usable</option>
            <option value="Moderate">Moderate — Needs repair</option>
            <option value="Severe">Severe — Cannot use</option>
            <option value="Total Loss">Total Loss — Write off</option>
          </select>
        </div>
      </div>
      <div class="f"><label>Description of Damage *</label><textarea id="dmgDesc" style="height:90px" placeholder="Describe what happened and the extent of damage…"></textarea><div class="ferr" id="dmgDescErr">Required</div></div>
      <div class="f"><label>Reported By</label><input id="dmgReporter" type="text" placeholder="Name of person reporting"/></div>
      <div class="f">
        <label>Photo Evidence (optional)</label>
        <input type="file" class="upfile" id="dmgPhotoFile" accept="image/*" capture="environment" onchange="handleDmgPhoto(event)"/>
        <input type="file" class="upfile" id="dmgPhotoGallery" accept="image/*" onchange="handleDmgPhoto(event)"/>
        <label for="dmgPhotoFile" class="uplabel" style="border-radius:10px">
          <img class="upprev" id="dmgPhotoPrev" src="" alt=""/>
          <div class="upph" id="dmgPhotoPh">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            <span>📷 Take photo of damage</span><small>Camera opens directly</small>
          </div>
        </label>
        <label for="dmgPhotoGallery" class="gallery-alt" id="dmgGalleryBtn">🖼 Choose from gallery instead</label>
        <button class="uprm" id="dmgPhotoRm" onclick="removeDmgPhoto(event)">✕ Remove Photo</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px">
        <button class="btnmain" style="background:#1d4ed8" onclick="printDmg()">🖨 Print Report</button>
        <button class="btnmain" style="background:#ef4444" onclick="emailDmg()">✉ Send via Gmail</button>
      </div>
    </div>
  </div>
</div>

<!-- ═══ DEVELOPER MODAL ═══ -->
<div class="ov" id="devOv" onclick="ovtap(event,'devOv',closeDev)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr"><div class="shtitle">About Developer</div><button class="shclose" onclick="closeDev()">✕</button></div>
    <div class="shbody">
      <div style="display:flex;flex-direction:column;align-items:center;gap:14px;padding:10px 0">
        <img src="data:image/jpeg;base64,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" style="width:110px;height:110px;border-radius:50%;object-fit:cover;border:3px solid #f97316;box-shadow:0 4px 20px rgba(249,115,22,.35)"/>
        <div style="text-align:center">
          <div style="font-family:var(--fh);font-size:28px;font-weight:800;color:var(--t1);letter-spacing:.4px">Brian Capio</div>
          <div style="font-size:12px;font-weight:700;color:#f97316;letter-spacing:.5px;text-transform:uppercase;margin-top:2px">Developer</div>
        </div>
      </div>
      <div style="background:var(--inp);border:1.5px solid var(--bd);border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;gap:10px;align-items:flex-start">
          <span style="font-size:18px;flex-shrink:0">🎓</span>
          <div><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--t3)">Educational Background</div>
          <div style="font-size:14px;font-weight:600;color:var(--t1);margin-top:2px">Information and Communications Technology</div>
          <div style="font-size:13px;color:var(--t2)">Strand: MAWD — Mobile App &amp; Web Development</div></div>
        </div>
        <div style="height:1px;background:var(--bd)"></div>
        <div style="display:flex;gap:10px;align-items:flex-start">
          <span style="font-size:18px;flex-shrink:0">💻</span>
          <div><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--t3)">Specialization</div>
          <div style="font-size:14px;font-weight:600;color:var(--t1);margin-top:2px">Mobile &amp; Web Applications</div>
          <div style="font-size:13px;color:var(--t2)">Warehouse Management Systems</div></div>
        </div>
        <div style="height:1px;background:var(--bd)"></div>
        <div style="display:flex;gap:10px;align-items:flex-start">
          <span style="font-size:18px;flex-shrink:0">📦</span>
          <div><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--t3)">Project</div>
          <div style="font-size:14px;font-weight:600;color:var(--t1);margin-top:2px">WareStock v7.0</div>
          <div style="font-size:13px;color:var(--t2)">Warehouse Inventory &amp; Borrow Management</div></div>
        </div>
      </div>
      <div style="text-align:center;font-size:12px;color:var(--t3);padding-top:4px">WareStock v7.0 · Built with ICT-MAWD</div>
    </div>
  </div>
</div>

<!-- SEARCH SUGGESTIONS DROPDOWN -->
<div id="srchDrop" style="display:none;position:fixed;left:13px;right:13px;background:var(--card);border:1.5px solid var(--bd);border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.15);z-index:105;max-height:260px;overflow-y:auto;animation:fadeIn .15s"></div>

<!-- HEADER -->
<div class="hdr">
  <div class="hdr-row">
    <div style="display:flex;align-items:center;gap:8px;min-width:0">
      <div class="logo">WARE<span>STOCK</span></div>
      <span class="lpill" id="lpill"></span>
    </div>
    <div class="hdr-r">
      <button class="hb" id="bulkBtn" onclick="toggleBulk()">✎ Bulk</button>
      <button class="hb" id="quickMenuBtn" onclick="toggleQuickMenu()" style="position:relative;padding:6px 11px">
        ⋯
        <span id="odDot" style="display:none;position:absolute;top:4px;right:4px;width:7px;height:7px;background:#ef4444;border-radius:50%"></span>
      </button>
      <button onclick="openProfileMenu()" title="My Profile" style="background:none;border:none;cursor:pointer;padding:0;border-radius:50%;width:36px;height:36px;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2.5px #f97316"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAFYASwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7AooooEFFFFAwooooAKKKKACiiigVgooooCwUUUUBYKKKM0AFFJmloAKKKKACjNJSUAOzRTaWgBaKTNLQMKKKKAsFFFFAWCiiigVgooooCwUUUUBYKKKKACiiigEFFFFK4wooopgFFFFABRRRQAUUUlABmjNJRQApNNJqO4miggeeZ1jjjUs7HooHU14p4j/aY+G1i8kFjqN3dSRzCN5IrQsoGcFhkgkUm0gse3ZNGRXylrv7XMdpJd2+maBa3gR8W91JK8ayL6mPBI/OvNPEn7TXxA126Yw6y+iWpPEOmQICB/vuCxoUgsffBNGa/PCD43+P7TUY7mx8c6jMFxkXQBLD/aHK16BoH7UXjZJwdQTSbxBx5f2UxF/UhgetLmCx9oBqWvJPg98cfDvj66/s2RF03UyoaOJpQyTD/ZPBz7GvWM4PpTTuKw+img0oNMYtLSUUgFzS5ptFAx1FJS0xBRRRQAUUUUAFFFFABRRRQAGiiigAoooqQCijvRTQBRRRTAKKKSgApKKDQAE4pueaCa+fP2vPixq/gvw8ug6Hb3NneallF1Leq7VXG9Y1+8Tggb+AM8ZNJuwHN/tbfGtbIX3gHQru3DOoj1CePLuARkxqRwD69xXx6ZGkOxSeTj5FwT9adczq85nnkeeZzuYsc8nuSeSajNz82QCnrg0kguSPAwcADDer81JHbXMkDNEqOB1CDB/+vTI5CeVkYbu3anfap4nBV2OD9M0AU3eWJmjkB46q4qexn8qQSA5UDoa07TV7eZvI1O1FzE2ch3wRnuG6g1DqGlPp0YvrSQ3Fg7AeYFw8TH+Fx2Poeh7elAGjG0swjurWWW1nT5t8R6+49816P4J+PPj/AE6CHTJvEt/c28XC79pk2+hZgTxXD+EZom80CzaSIJ+9jU/Njuy+uOuOvWk1TRbWGY3drOJrZxuDAYZfXj/PWpYH0Po/7QXimxghle+0/Ubc43LeL+9A92XB/MH617d8LfizpHjW6GmSWsunakYw6xucpMMZJRu/HODXwZcxTpafaDEkogfKlsgFfy6e1aXhbxJfeHtUhvNNnuLVo5Q8Ril3Kvf5c8gc9PSkroZ+lINOryH4H/GSx8bww6Zqqx2WtNGHRM/LcL6r6Hg8V64DWidxD6SlFBpgA60tIOtLQAUUUUAFFFFABRRRQAUUUUgCiiimAUUUUgE70ZoNJQMdRSUlFxCmkoooAKQ0ppKEBmeJtb0zw5oN5rmsXS21hZxGWaQ9gOwHcnoB3Jr80vjT4/1D4h+P9R1+6kl8l5DHZQMeIIAflQDt6n1JNey/tofGKXWPEUngHw/cxnTNNfF9PG27z7jumfROn1zXzHAw+0KzDjOaN2BK4CnbwSOuO5pU4DHyw2BnnPFIjok4kbBGckU67m8yT92QUCqOPpViHRTqCMRrkVZEcki7o3DjHIA5FXhosaWZuRcRs6xiQIe/fH5A/wCTU32+OwjzHMrpKgkgDIGCHuhPXrnBqXboBh3sDoVO0DIzjNavhTWJ9Nv/ALLex/abG4+S4hZvlkQ/zp0OrLeW8kH9nQyj70iA4cDP3kJ5B9Rzn2qOytUtNQU3TsLRXUSsBkwg/dcjupBHP/1qTGjpG0++8I6pHNp91FdabfZ+zTt1x12N6MPfIPaqmtSNdGWSG4W2lA+cscxP7q68L7g10Grw2T6bd6fDdLDc482NWIkgkIxkAHpu4KspGc45rM8F2mm+ILRtPmuorDUCCkMjcBpOyE9MN2yODx6Zz5tLjsXvB88V/bPYXaozJkACQMMEHoQccZ4rKvdPaDVfs8ki/ePlyeqgEDp7gfmad4f1HSbXxCNO1a1awmR/KZyAGB6HkcH8RTvGlveaXq+meXKJ0jV1juUPyzLuO0n0ODyPUGlezKSO90O8n0vUtPvLCRba7s7lWjLg4lXrxj6HH+9X3V4d1BdW0Oy1JV2/aYVkx6EjmvgfSL6/1PT4IMstra7VjKD8+TnjnPFfbnwhmkn+HGitLnzFtwjZ9RxSpPVoJnXLQaFpa3IEFLSUtABRRRQAUUUGgAoptKOtK4C0UUUgCiiiqAKKKKTASkoopDCiiikr3AKKKKoBDWZ4pGov4Y1RNIONRazlW1PpKUIQ/nitQ03FAj81vjX8JdV+Gtpp0+t6lFNe6pcTbIAwMgjTH7xsZ+8Se/65rzdVhXHG9vU19K/8FAtLktviDoetb3eK809oMEcI0T5wPqHzXzGGLPknk04iZpWVtDKzBk8xvrhR9TSXbQQbdscayqeNjh1PtwarC5MURjRFwQQSRmksoGlk+7n8Kp6Ald2Q5prqdmAdgGOSAeKmj06V1G44Ga2bHTWJB2ZNbdvpErEEJn8K5Z1kjup4Ry6HP2XhqSRg+/bxg57iuis/CAuFSKOYCQZA2kkgemfSt3TdMmY5kXn0rrtD0xogGVOfpXFVxUl1PQp4GHVHCr8NtTO2OO5V4wOFZiNh9vQfTiqQ8F67o101ysIfB+dgdyken+fQV7lZWUuQc8nit/TtOUDDxb93XI4PvXKsZVN3gKLWx8q+PLXUL/VUvrmxW3uGCiQxn5HbGN49M4yaL27uL37NbRxSXCBnVMLnBO0f0z+NfUmteBdJ1jTXt5YtkwB8uRR9xuxA/KvmzWBqnhrX7uwu/M8y1kIYCYx7h1GD05H+Fd+Gr+10e6PNxWF9jqtmbOi3F9pdqLWSSN5COinAUd1YZyrZ7Edu4NfaH7MeovqHwps2mWRJo5pVdXbcR83rXwro9vG2oz3NsGWGeJlZG+8r5B+Y5+vNfcH7K9wkvwxjgCqsttcPFJgYOeoJ+oNdUFaRwSeh62vSikWlNbGaCgUlKKQxaKKKYBSGlpDSYCUo60lKOtIYtFFFAgoooqgCg0UUmAlFJRSGFFFFVYAooopAwPSkNLSUIR8qf8FFLAP4W8JamGAMV9PAV7ndGGz/AOOV8WhsHNfcP/BQ2xuZvhx4d1CLJgtdVZJR6GSIhT/46R+NfDoUswAFUhE0AMmFHUmur0XTPLCsw5Iqn4d0eRpBcTLhR90HvXYwQKsYAGK5K9b7KPSweG+1ILOEBlCgYrrNBtlk+8oJ7Zrn7SBjIAFrsdCspV2sc159R6Hs042Nqz0pcA7c/hXR6fYoqqWAPrUOnRuUAYVs2ihSA1crZtsX7LT0wp2H8q2rWzAA46VUtJsIABWlbTEgdjUqxLJY4FTpg57Yrw/9pTwm1xe2etWibPupcuq87Qev5HFe7wnJ55qr4l0iHWNGuLWVA29CAD06VpTn7OakiKtNVabgz5S8OaSyXF0Eww80HcD0Bxn9K+v/ANl/T2s/h9LOxJ+0XkhUnuq4Ufyr5dSwudD1HyLiPKSSuOTznKjPP419gfAeJo/hTojOm1pYmlI/3mNe5TfN7x8xUi4uzO6FLSDpRWxkFKKSlFIYtBoopgJSUppKQBSjrSUo60hi0UUUCCiiiqAKKKKTAbRRRQNhRRRTEFFFFIbFppp1NahCPGf2zdGOsfs+66yDMmnvDfL9EkAb/wAdY1+euiwi41BExkA5NfqX8UNIk174ceJNGhjEk17pdxDGp7uYztH54r8yfBVoxkmlkUhkIQg9Qe4qaj5Ys0oQ5ppHXW0eFCqK1rKzeRuc1lx3UFqF8wjeegNVJ9b1BJCYYZXYnChFySPoK8/kcj2/bRgd3Y6c2QSDxXZ+H7fEanqK8Vs/HGtac4ju9NukjYgb5IiB+tev+BNftdQijyQrDkc5BrGtRlFXN6WJjN2O6tLT9zkDpT9Pt3kkJPIzWxp6RNpDzAg54FWdPtAsO/GBXI0dNyG3g2gA9a0YolCjBzXMeIPFFppZZdrSSDjaoJP6VzVl8R9TvLpIrTw/eLDnl5YmB/DH9acad9TN1LOx6rExVhmtCBlZccVxel6vPeSIZoZIDjvGQM11Vgzt8xKn6UprQqEtbHkHxn0gW9+LjYQHdnU9B7/1r6U+FcbQ/Djw9E4II0+LOfdc14x8dbb7RoelxxoDLcX0cC/V8j+tfQekWi2Gl2lkvS3hSIf8BUD+levgG5UzwMyio1nYtiigUCu088KUUlKKRQtFA6UUAFNp1NoYIKUdaSlHWkMWiiigQUUUVQBRRQaTAbRRRQMKKKKYgooopDYUjU6mv1oQjjfij8RvDvw5021v/EBumF1KY4YraLzHcgZPGRwBXwNqv9jf8JX4iuPD87T6VNqs0lo7IUPlsQwBB5BG4j8K+pv249Cub74faRrlsrMNK1Aedj+GOVdufpuC/nXyhDGhE8sZzvl+bHY7VrnrSd+U9DDUo8iqLcJY4ZHVn5I6VuaDq2haa4lvmZhGedi5wfqSBn8a5+/gkSPcnXHWqukWMkl1vZY5cgrsc44PXB7GuaUFJas7ITcHoj3TQPiB8NdXWHTD9qluLjKrGto0u8gZIG1TnA54rnvGk3h3w/HHrHhu4hmt522/uWHysBnBHQcVw3gTQrrwp4ptfEMWpS262h3IkblGYf3GZSDtP8WMEjI4zVTUbW71DxBqWpLK0w1CVpp1EHlpvJJ3KAeOp/Osnh6Sd4NmqxFdr95FHr/w4+ID6zdWulEbFU5JJ619EWGlpNpCFjjdnFfHXwrsZLHxVah1zlxxX2PZ3e3R7eND0H61y1Eozdjqg5Sgu5478StfstDu7i006CBrpG2yzyKXCH0Cgjc3fkgDuRnnivCnxW0K21ZLXU5dSvpWnEBkER2LIT90LGuM/ielaXxM8OawdWhltpRGi3D3JLxb1klZy2W55AG0AdsVm+AfhxdR/EGx8TTWlusVvO9wEjzu3sDyCTjgnIznt1pUo03/ABGaVnUjG9FI+idH1/Q5E+yTW5tblVBeOVCHQHoWVgGCns2NvvWosUGWaKJBnuveqmr6aupy2N7ewRQtZReVaJGxLxJgAgvwTkAZHSrduVFvsjGCKUo66bGUX7qb3OX8bCwGteE5NScR2cWsJLIxGQNqMw6e4Few6bqVlqUJmspxKueeCCM+xrzLV0gN1Dc3ShobKOa5cMPSM1tfBU6peeHJtb1ZmEuoTF4oyMCOIfdUD0FdeBrtTVK3dnHmOEi6TxDe1l99/wDI78UDrTRTh1r2DwAoo70UmMcOlFA6UGgBCaSiigEFKOtJSjrSGLRRRQIKKKKoAoNFBpMBBQaQ0CiwwooopiCiiikAUjUtIaEBl+KdFs/EXh2/0PUED2t9A0MgI6ZHB+oOD+FfnhdaNdaBrmvaHeqRcafebHz36rn8dufxr9IjXyJ+1PoUGm/FiS/iQKut6akrcdZY2Kk/iNtYV1pc7MHUs3HueR20MdzGA2KuWnh+ItvH6HFZdtI8UmBkYNdVo85eMdzXFNtHsUkmQJpCD5WGR7nNJdxQ2UPbPrXQrH8m4jGK5nXka81GO3VmCgFmx39KhO+5o49i/wCBFEmtwzled/B9K+kNBeUxJkZGBXzz4DtJG1yG1EbqUYMQ3GRmvqbw5pp/s0M+0AAYPqa55+9LQ2TVOF5Gbr2nWs1mDKgIY+nQ1i6fbR2TDA4BzxW/4pM9ppoMoBXfjcPQ1h2TiYbRzmpsiU3bRm9FfG4CoBVy3jK5J6mq+mWgRQ2OtaDqFSmyNDLlsDqmqLYBvlnjaNx/stgH9N1ek2tvDa20VtAgSKJQqKOwFcp4Ih83V7q6OMRJtX6nj/Guw716OX0koOfVnk5nWcqip9EApQKXtRXoHlhS0lKKQxR0oPSig9KAG0UUUgClHWkpR1oGLRRRQIKKKKoAoNFBpANoopaYCUUuKSgAooopMAoNFFCAaa8V/av8Hz614WtPElihe50VmaZR1aBsbj/wEgH6Zr2s1DdQRXVtLbXCCSGVCkiEcMpGCPypTjzKxVObhJSR+dM4BcyDHzela2gz7WAJ6Va+JPhybwp4x1bQZAdttcHyWI+9GeUP5EVgWcvl85xXnTR7tGfU9HSe2+wsWIzjiuWs9cbQvGUGrtpS6paomxoC23nPB5BFVrW+kdD1KiomvY3kwFz7VlyXVnsdDqNO6Nj4fz+IX8eLq39oXepQXMhM9rcIMxgnP7sjgbfToQK9q8Ry33jjTLKz0DxfquiWMQLSvZKsZnwf7/3sD0GK4H4QRD7fPfzJtjt4WIDDqcdvWuv+Ednet4cSM28ym3ZowSp5XORXPN+/c2gkobHcvHMfDdrpE+oyanLCih7uRNrSEDqff1qHR7F4ptpHvWhawzcIU5Axk1q20KqAccjrTsraGbmyeBAkY+lQ3MuEbJq0xwvHWmWFt9t1SC3Iypbc/wDujk/4fjU2cpKK6k8ygnKXQ1vBen3NpbyXFzF5RmVSFJyTyTk+nUV0IoNKor3aVNU4qK6Hzlaq6s3OW7F70UDrRWhiFLSUUFDqKBRQAYpKWkNJgJSjrSUo60hi0UUUCCiiiqAKKKKQDaU0tIaYAKDSUooASinUlK4CUtJSigAIyKYetSU1x3piufP/AO1t4NF5YWni+0j/AHlvi2vMDqhPyMfoTj8RXy80ZRse9foX4s0qHXPDOpaRcKGS7tnj+hI4P4HBr8/br5g7YxNC5jnT0YEjP0OK468bSv3PUwU7xs+hZF0LDRnaKJZbh8hQ3QVzFtrGvWEm42FhISc72VuPwzWmZmMg7j0rX0iCC5uFEqgqeoNYaRTurnb70mrOxpfD+fVLq6/tG+W8klzmMWk2QMc4wSOK920LWNQvLJZLfT7nzGOUWaZY9n5E1x/hHRvDtjCksFp+9blgJWA/LOK9J8M3FvGdsdlCkfTkZP61wOUXK9j2o1IRppPVi2Gr+MlPlpoUOoR8gu90qbP+BY5/KtTw7qOoXRKajYfY5xwyCTeB9D3rfilV4xwAvoBgVHLs3ZVQDTehwSmpv4bD2YKvPHetvwlaMls+oSjDz/6sHsn/ANfr+Vc9BGb2/trLqssgD+ydT+grvMBQFUAAcADsK7cDS5m5s8vMKrilTXUKcKQUteoeOAooooEFFFFIoUUtNpQaYC0UZoNADaUdaSlHWkMWiiiiwgooopgFFFFIApDS0hoQCUtJRTAXNJRRSAKUUlFCAdSN0pM4pCc0xDJGCozN0UEmvze1O7I16+uYiMPcynB6MpcnFfdvxZ8Z6f4a8DeILuO4WW8tbYxCKP5iksg2oGx0+8DXwGAT3znrXNX3R6GCT1ZcfbJ+9iJ29x3WtDSJGWZQGPWsm3EikSISGFbug3Fm1youImicHhkGR+Vcs3ZHpRjdnqng6N2hikck7zk+1ep+HUjcqOledeGLnTfsMaRXB3AdCpFdlo97JGwaJSQPbrXn31O1rQ9FQKqBRjpVS6lVTsXkntWXb317MPu7B71dt4jncx3E9Sapu5EY2NXwqh/tu3ZuSQxz/wABNdqwrhYZri0U3VmsZuI1PlB/ulsdD7dvxrY8A+LtN8ZaF/aVgTHNFI1veWzH57adeGjb+h7jBr1cErUzwsxlesdEKKQGlrsOAKM0UlAxaKQUtSAUUUVQBRRRQwClFJThSGFFFFMQUUUUAgoooqQA0lBpKaAKKKKYBRQSKaWoAcSBSFqqahf2Wn27XF9d29rCoyZJpAij8TXiPxL/AGm/A/hovaeHw/ia/GRi2bZbqfeQjn/gINAHt+pX9np1lLe39zFbW0SlpJZGCqo9STXzD8a/2m4ljudF+H+WOCkmqOvA/wCuQ/8AZj+FeD/Ez4seNPiLcH+3dQEViGJjsLX5IIx2yOrH3bP4VxEMMlzcrawIWeRgiqOpJoYH2T8DdHjufhfBba4DqH9spJPfmVyzTeacnLHnOMc15P8AFr4Sax4Ilk1Gz36joDN8lyoy8GeiygdP97ofavcvhsUs/D9hZ4KiGCNVz3GBXpZijnszFJGk0UqFXRgCrgjkEHqKwnFSOmlUdN6Hwjo0AmYrtJJrRj04wXAIBxn0r3Px78FoobiTWPBq+Xk7pNMJ49/KJ/8AQT+B7VwTaZMyYlgZJEO1lZcMpHUEV5lfmpvU9/CyhVjdM2fBVsDEvHXmvSNKt0AXjFcJ4RiaMBCpGDxmu/09toXPXFcaep1tG5bqq4IHbrWjbpv+6OB1PpVbSrWS4Advkj9cdfpW3FCEG1FwK7KFBzd5bHm4vFKn7sdX+RSuPljwRx2HpXzRrvjy/wDhT+0Rq95p6b9N1BIpb20zhZQy8kejAg4NfSms3MFurGSTgDJr4u/aPvvtXxZupF4KW0KkHqOCRmvWiktjwptvc+7PA/jDQvGOix6roV8lzEwG9Ojxt/dYdjW+Gr80/BnjPX/B+qJqmg6hLaTL95QcpIPRl6EV9K/Dv9qXSrqJbbxnYGyn6C5tQXjb6r1FaGR9MhhSmuf8LeLfD3iazW60TVba8jYZ/dvyPqK3A1AD6UU0GnUDCiiikAUtJSigAFLRRQAUUUUwCk70pptAkOoNFIaQwpKKaWpiFJFIT61xfj34oeBvBMUn9v6/bRXKDizhPm3DH0CLz+eK+Z/il+1JrusQz6d4N0/+xLRuDeTMHumH+yB8qfqaQz6p8b+NvC3guwF54l1q109G+4jtmST/AHUHzN+Ar58+JH7V9rCHtPAmkG4cjAvdQQqo91jByf8AgRFfKOoavqes6lLe6lc3d3PIfnuLmQu7fiefwqFSc9D7UwOi8d+N/FPjXUft3ibWbi/kHCIx2xoPRUGFA/CufHI+UD60hXuR+dRLNEW27+c9M0gJhtQYFbvw9CR+OtCklwYxfR7s98msLAPUVr+E22eK9GfHCX8Jz/wIUnsCPtjT4Qoe2VCkkS+ZGuOTGT1H0PFdfod75kKxyZBWsG4ikcw3EALXUIyhx1B6qfYitSCP93FcRo8YcZKkcqe4NQao3i3cAkeorlfHmn+HmspNU1a4tdMeMc3UzBFb2b1/nW2l5HBBJNNJsijUs5J6ADk18IfG34iXvxA8YXVxNcy/2ZbStHYW4bEaoDgOR3Y9cmplTU1Zmkakqb5onvll4u8CwuZIfFWjsm49JwOR+tbvg34i/DvUNe/s19fgaYMFjDqUikb03ng18aWaAvzgj6VNqU0UKgAnnqRWMcBTi7m88zrSVtj9KRuKqVVFGAQRyCPaqWqagtsCifMxFeB/sn/Eq91vSrvwjq1y889hEJbOSRsu0PQqT32mvY7gNNKdpyWwK25bHLzORja1feRaSajco0oVgkEPeWU/dUfzPsK+LfiHcTXHjrWpbif7RKbt1eQ9yODj2HQfSvsW9M097dajqETw2tjGyWcJHI4+eU+57e1fEWrXHn313OM/vbh3575YmtIkSEV6hk+9lSRTI345qO4niUgOw/PmrMzR0fXdX0S7+0aTqN3ZzA/ehlK/nXv3wz/ac17S4o7PxNaLqUKjH2gNiT8fWvm9GDR5HQmp0YKg7EChjP0U8A/GDwR4vREstZt4LthzbTtsf8M9a9CRwwDKQQeQR0NfldBcvFKrpIyMD1BxivTvh18bvG3hCaNINTkvbJW5tbti6EegJ5FAH6C5pQa8T+H37RfgjxDDFDrE50K+bAKT5MRPs46fjXsdndQXdulzazxzwyDckkbBlYeoI4pAWqKapp1ACg0tNpRTAWiiigANJS02gSCgnFBqKeWOGF5pXCRxqXdj0VQMk/lQMwfH/jHQPBHh+XWvEV8trbJwi9XlbsqL1Y18g/FP9pbxd4maaw8LofD2lsCvmI266kHu/RPov51xPx6+I158RfHk+oO0iaZbFotOtyeEiB++R/ebqfwHavPiG7HigB9xJJNM800ryzOSzuxLMx9STyaYqcfN19KFOB0zUin2oWoEaxlRwOKcQ3pTy3NNZuKAGHk1AIFVg5RWbPp0qZWy1KeTTAG46Vd0d2XV7AoDvW6iI/77FUmqxpc/lX9tJ/cnjb8AwNTLYFofotpUUaWkbuPmaNc/lUt06KoYBgjHDnsPQ1X0Rkn0+3nZvleJWH0xVxv3xABARevHWpNjjfiNDPc+HbvS7adkfUQLYPGMtGrcM35Zr5N+NXwpj8EtHfaPcT3entgOJBkp7k+lfbUdrH5jTNGp25VDjoD/AFrkPjLY6IvgDWbrVEVbWK0ZnOPbgD3zilFClsfB1tKTgdSOuKbf7iV+UnJwB60WkYYZjkZX7jHStjwXaw33jjR7W4mLQyX0SPleOWrToY9T6E/Zt+G0mi6SPFt5HINSkH7pR2hI5U179o0MBMaq24gbjnrj3qXSrVLWxit40CKiAYxxUtpGIr+XHQ42D0HespI2Rz3xXaOx8C67qAADR2MpJ/4CQK+AGP7lc8naK+5f2lLz7J8G9eYHDSxrCD67mAr4auAAu3PtmriRIi27l6471EYkdiWTLDvU64UlTyMdacFwvB+XsO9WQQKpUYqSNc/eHTpTGJ6VIgI70mAuMNmlJOQRSOMjAprAhc5oQWLIkYLhSQfUV2PgH4n+M/BdwsmiaxMkKnJtpTvhf2KHj8q4hM7QaVSc0DPsv4bftR+H9TEVn4yspNIuWIX7VADJAT6kfeX9a+g9L1Cy1Owhv9NvILu0mXdFNC4dHHsRX5XSl1bhsivc/wBlT4jap4X8b2Hh6a6Mmi6rOsU0LnKxO3CyL6HOM+ooA+6Qc0o60wcGnigBaKKKTAKQ0tIetMQ1q8r/AGpPFf8Awi3wf1V45AlzqC/YYuefnHzEf8Bz+deqNXyH+3p4gM2uaB4Xjk+WCB7yZR/eY7V/QGgZ8xSMWGcYPp6U6M5XJ70wH1p0fBI/CgCRB8tKopP4KRWpRAcR3ph9DUnaopOKdtQG/dYYp461WkJ3DmrEfSmwEcmlhx83qRxRJRDwx9hSEfeXww1Y6r4D0SdGyZLSPcfTAwa7WNcqFXp3968X/ZQv/t/w2ihc/vLGd4W+nUfoa9qjwijHeoNh0oURMo6V4L+2Trf2P4fWGhpIVbUbvL4PVIxu/nive2GV6Cvkz9tXUFl8a6Dpyni2095SO2Xf/wCtTQpPQ8DgjKRvzkkdat6Bc/2dqun3feC7jlJPoGBqAKVT6iq90R5OD3zVWMj9J9MkFzYQTD7skasDnqCM0mp741SdP4OvuK5z4L6qms/C7w/frJvZ7KNXP+0owf5V1cyb43VuhGKg2WqPGP2uL5f+FTpCrf8AHzfwrx3xk/0r46uDmXHbtX0v+17etB4f0TSCTlr55ev8Kp/9evmZ/vOT68VUTOT1Hqofk1MVAX1qOD7tOk6UxFfA87PvUw61Hj5c45p2F45NMRIRikAzkU7tSDAz9KQxcYFNJOOOtP8A4RTG4BycUAIDulx6DmtXw/dPaata3EblHilR1YdRg5rKt8FQT1PWp4W2TKR1FAH6k6XP9q0y0us586BJM/7yg/1q2vSud+G15Hf/AA+8P3kTBkl02Bgc/wCwM10S0CFooooGFIaWkNAhjcnHrX51ftF+I08UfGPxBqMDl7eGf7JCSeqxDbx7ZBr7u+LHiJPCfw41/wAQswV7OxkaL3kI2oP++iK/MySSR3aSRizsSWJ6knkn86BgnU5FPJxL7HpRGh2AmmzcKj44zigCQk9KQNihunFNHNCAlDcVG3Jpc0DqaLiImTJzmpFOBilC55pHIVgMcetAwkYYpYWAbFMbmkVsSD60wPoj9jbXFt/EGt6DI523EKXUYJ7r8px+BFfUkeODXwf8E9cHh/4paHfyNshln+yyn/ZkG3n8cV92wtkAdcVDVi4u6J5X+XNfE37VV0bz41X8WfltLWCID0+XJ/nX2q/OB718H/He4a5+NHimT7228EY56BVAoiE9jizkjpWZcF3cg8EVrTrhcA/jWfPGVU929atGZ9a/sXeJvtvgu88NTSAy6XL5kY7mKQ5/Rs176zHGQK+L/wBj3UJrP4uLaK4Ed/YyxOPUrhhX2cxJT8Kh6M1jsfKf7Z9yp8baHYo2fKsGmce7Nj+leAynNetftS34v/jRqkaNuSytYbcDPQhdzfzryJ8lvrVRM3uTRfdpJjxt7mhDgCmucygelADgMDp0pV4HSnHkUnagAHWk70vamkkYGOppX1EPzxVS6fMOPU4qyxwCKqN813GnYcmmMsxcFQeuKmTiRTio0I3n9KkHUGgD7x/ZB14ax8HbWzeQNPpc72rjuF+8n6H9K9jXrXx3+w54he28a6l4ed8Q39p5qKT1kjP/AMSTX2GOtAh9FIDS0DCmmnGmN0oEfO/7dXiIWHw503w/G+JNVvg7qD1jiG78txWviuNNwLHrnivff23vEC6r8VYNGjbMWkWSxtz/AMtJPmI/LbXgy4UDJ6UDHSsVTio3YtZn1ByKSY5HBpVXK49QRTAajgxg/nTskKD3zUMOMbTipuNv40hMctKAc8UAjHWkJ64PagB4BzTJhlP1pVJ45pW7ULcCFTkjH407YM5yaaQA/HAqTIIoGTQSSD5o3KSRsHUjsQcg/mK++vhdrsfibwLpOtRtkz2y+Z7OBhh+YNfn/bnZLuPNfVX7HfiET+H9S8MySAyWU32iFSf+Wb9fyNKQ4nvrnGDnuK+A/ixIH+LPiyYdP7TkA/CvvaRxu56d6/PTxpdC+8Z69eZz5+ozOD6jeQP5UojkZhkJOCaZN04pq/epXIIx3rQg7z9m65a0+NvhtycB5pI/++kNfdqE7lUfdz3r4B+CziL4x+FDnn7eox9QRX3V4p1OPR/DGp6rK4RLS0llJPqAcfrUSLi9D4S+Keof2n8RPEeo54m1GXaQeynb/SuWX5qlv5nnmLyf6x2LuR6sST/OowuBTJFcfLimRDd856tz+FJKxYbAcFjipVUKqj0FMQ/Hy0gHBpaTPtSQMBjpmmEfNRuw2aikfkc96GA6ZzuqGyBa5lk7ZwKJ3G1zxx0qSwH+jhu/U0AShSrZqVRnrURbJxUi0wO6+BeuHw/8UtA1EyGOOO9jSQg9Uc7Wz+Br9GvpX5Z2Uzw30bq2NpDA+hFfpZ8ONY/t/wABaHrBcO11ZRu5H97bhv1BoA6IUtNFLmkAU3jPJwM9aCcCsTx1f/2X4I13UgSptdNuJQfQrExH60AfnR8VteXxD8SPEetBtyXWpTNGf9gMVX9AK5aRgRmowzGIlhlsZNPjwYjn1FAC1IMZFJgYFPUAt+FAFLGJT9alBypFQ3DbJiMZGakQjGaAJE6GnLznHpTFzinL1xSAkUcAUpGcVGrEmngmqQA6VEhAJHNWOSKjmTbhgPrSYCZwa9G/Z58Rf2D8UtImkfZBesbObJ4IcfLn6HFecHJ5qa3lmj2ywNsljYPGw6qwOQfzFAz9FNVcQ6fdyf3IJGz9FJr86GkEs0sg53SM2fqxNfcWieKY/EvwUk8QxON8uly+d/syrGQwP418MW4/co2c7lzSiORIOppjHOcVIgLMQOtF0vlRhE6nqask2PhFKB8YPCz54GpRg/ia+vf2ntRFh8HtUjDEPeyx2ygHk5bn9BXx78Mf3XxJ8NvjkapAc/8AAq99/bO15TNoXhuKTDDfeTKD2+6v9alrUa2Pm+TG84HA4pM4BNAbOTSM35HgGgBI0BbcTzUjY28UbSB1prISD8xH0p3EKDkUE1EsYPVm/Om7AD1b86XUY5sb6ZIBSsG3ZqKRiAaLCIZ2GSvr0q/af6sfSsxjukANadtwn4U2gQrDDDNSLyaY55pyc0gJ1zmvu79kDUjqHwVsY2bc1nczW+PQA5A/WvhGM8gV9X/sJayfsPiHw87khZEuowT0yNrfyFAM+oB0ooHSigQxq89/aP1H+zPgd4ruAcF7BoR9XIX+teguea8H/bb1f7B8H00/POo30cWPUL85/lQM+G4yQGDehqSMArUSe/Wpsn7oFAyQ7QODSp96olB5JqVWA7U0JmdfnEmadASQKbqXL5Aplq37r3zSAur97GacB82aiiYb+TU3HXigAXANSA1EfvU6gCYHinONy7e2KiB461Ip460DKo+8V9KmhODTZo85ZPvDrSKwAznmgD2f4LeKmsvhv468MzScDTpby1DN0JG1wP0NeLWqnyYwo4Cjn1qeS8u7SGaazkMbTQtBJj+JG4IpIGCW6qQoO0dDQgbJFxGmf4qryuSaUvu60w81QjV8EEr478PFTg/2nBz/AMDFdH8ZvEI8U/EnWdVR98CTG2tuc4jj4/U5NcPHPLbXUFzASJYpAyn0PrUwGyLB6nk+5pMER4wT9aYn7yQMPurx9aRmIPHJbgCp44wiADAxSGLTXOBQ7AHioWfNCEx6nIpEJJ5pi9DTk6UIB7YqpcEVOxxVWdqoCsnzTVq25GzHfFZMHNxx0rVgHBpXAc/AzT4mprjIojGDRcCxu2kEV7f+x/rf9mfFyC2ZgI9Qt3gYepxkfqK8PK5XNdX8I9W/sb4iaBqDNtEF9Fu9NpYA/oaQM/ScUUikEZByDyKWgRCx4r5o/b6P/FG+Gl3YzqDnH/bM19Ksa+T/APgoDqLG48K6SPuAT3LfXhR/WgZ8r4beo7YqcH5jxUMe5nB9sVYUgHkUDGn2pQSe1B+9SAkcYoEVL0c81Wtz1q5f/czVCHIagC2pAINThgUAFVlOeMVPGRx7UAT5GaRjSZ70pBx0oYApPep0+7ioMfKMHvUsTY4oAepw2DVaZfKnwfunkH0q1wWBpZ0EqEH6/jTsBGAHiZfUVViJP7sjBU1JbyEEqRypwRSXH7uUEDhutAAQ3QCnDheaAe9OoASNNzjPQc0szDcacnCliOlV5CZGCJwTyfZaQDrdd7iU9OdtPZxik3quFXgAHj0qu0madgHO/NMzzSVLCobk0bDHKp25NSDiM/SlkAC1G33etJCI3YFaqXLDaasOflqrPyppgyK24ZvetWA44NZltyG9sVfjJyDSAssMCmqeaXk80ijk07ATW7/MVPQ1LFI0MwdDhlbI+oqqDtkU5qe44KuvQ0hn6V/CrXo/Evw70LWY2J+0Wce/P99Rtb9Qa6avnr9iHxMdS+H974emkzJpdxujBPIjfn+ea+g80CKc7lRXx5+3xMH8eeHYFYHbpjyHB6Zkx/SiigZ87QLtGTSkZbiiigBCSGAFA3bqKKGIr6o2Aq1SUdxRRTBkqn1qZDxxRRTewIeGOOtODk9TRRUsY9GyMU5DzRRSETK3apV5FFFUBVu18s+eAePvAelOnCzW+5DnPNFFICOE7lGe3FSkcAUUUMAndYoyXOFHSobdGSMyPw78n2HpRRQBE5GSSeaiCk0UU0wJVU55FWNoUkelFFIYyRiajZiBRRQhETscYqtOTtoooAS06H3NXoyciiimBZDHFDHD4FFFIAdckGpYmLRlD1XkUUUDPYf2RfFH/CO/FCG3mk22upJ9mkBPGT90/nX3dmiigR//2Q==" style="width:36px;height:36px;object-fit:cover;border-radius:50%;display:block" alt=""/></button>
    </div>
  </div>
  <div class="srch-row">
    <span class="hdr-time" id="hdrTime" style="font-family:'DM Mono',monospace;font-size:12px;font-weight:500;color:rgba(255,255,255,.45);letter-spacing:.4px;flex-shrink:0">00:00</span>
    <span class="shift-pill day" id="shiftPill" style="flex-shrink:0">Day</span>
    <div class="srch-pill" id="srchWrap">
      <svg class="srch-pill-ico" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input class="srch-pill-input" id="srch" type="text" placeholder="Search items…" autocomplete="off"/>
      <button class="srch-pill-clr" id="srchClr" onclick="clearSrch()">✕</button>
    </div>
  </div>

<!-- QUICK ACTIONS MENU -->
<div id="quickMenu" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;z-index:290" onclick="closeQuickMenu()">
  <div onclick="event.stopPropagation()" style="position:absolute;top:calc(env(safe-area-inset-top,0px) + 58px);right:54px;background:var(--card);border:1.5px solid var(--bd);border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.2);min-width:200px;overflow:hidden;animation:fadeIn .15s">
    <button onclick="closeQuickMenu();openScanner()" style="width:100%;display:flex;align-items:center;gap:12px;padding:13px 16px;background:none;border:none;border-bottom:1px solid var(--bd);cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:var(--t1);text-align:left">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="5" height="5"/><rect x="16" y="3" width="5" height="5"/><rect x="3" y="16" width="5" height="5"/><line x1="16" y1="16" x2="21" y2="16"/><line x1="16" y1="19" x2="21" y2="19"/><line x1="19" y1="16" x2="19" y2="21"/></svg>
      Scan QR Code
    </button>
    <button onclick="closeQuickMenu();openPersonnelMgr()" style="width:100%;display:flex;align-items:center;gap:12px;padding:13px 16px;background:none;border:none;border-bottom:1px solid var(--bd);cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:var(--t1);text-align:left">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      Personnel List
    </button>
    <button onclick="closeQuickMenu();openInsp()" style="width:100%;display:flex;align-items:center;gap:12px;padding:13px 16px;background:none;border:none;border-bottom:1px solid var(--bd);cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:var(--t1);text-align:left">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="11" y2="16"/></svg>
      Inspection Tracker
      <span id="inspOverdueBadge" style="display:none;background:#ef4444;color:#fff;font-size:10px;font-weight:700;padding:2px 6px;border-radius:10px;margin-left:auto"></span>
    </button>
    <button onclick="closeQuickMenu();openHandover()" style="width:100%;display:flex;align-items:center;gap:12px;padding:13px 16px;background:none;border:none;border-bottom:1px solid var(--bd);cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:var(--t1);text-align:left">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      Shift Handover
    </button>
    <button onclick="closeQuickMenu();openMonthly()" style="width:100%;display:flex;align-items:center;gap:12px;padding:13px 16px;background:none;border:none;border-bottom:1px solid var(--bd);cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:var(--t1);text-align:left">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
      Monthly Report
    </button>
    <button onclick="closeQuickMenu();openImporter()" style="width:100%;display:flex;align-items:center;gap:12px;padding:13px 16px;background:none;border:none;border-bottom:1px solid var(--bd);cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:var(--t1);text-align:left">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
      Import from Text / File
    </button>
    <button onclick="closeQuickMenu();openAllBorrows()" style="width:100%;display:flex;align-items:center;gap:12px;padding:13px 16px;background:none;border:none;border-bottom:1px solid var(--bd);cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:var(--t1);text-align:left">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>
      All Borrows
      <span id="qmOdBadge" style="display:none;background:#ef4444;color:#fff;font-size:10px;font-weight:700;padding:2px 6px;border-radius:10px;margin-left:auto"></span>
    </button>
    <button onclick="closeQuickMenu();openMgr()" style="width:100%;display:flex;align-items:center;gap:12px;padding:13px 16px;background:none;border:none;border-bottom:1px solid var(--bd);cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:var(--t1);text-align:left">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 17.5h7M17.5 14v7"/></svg>
      Categories & Locations
    </button>
    <button onclick="closeQuickMenu();openExport()" style="width:100%;display:flex;align-items:center;gap:12px;padding:13px 16px;background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:var(--t1);text-align:left">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      Export & Backup
    </button>
  </div>
</div>

<!-- PROFILE MENU -->
<div id="profileMenu" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;z-index:290" onclick="closeProfileMenu()">
  <div onclick="event.stopPropagation()" style="position:absolute;top:calc(env(safe-area-inset-top,0px) + 58px);right:10px;background:var(--card);border:1.5px solid var(--bd);border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.2);min-width:220px;overflow:hidden;animation:fadeIn .15s">
    <!-- Dev card -->
    <div onclick="closeProfileMenu();openDev()" style="display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid var(--bd);cursor:pointer">
      <img src="data:image/jpeg;base64,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" style="width:42px;height:42px;border-radius:50%;object-fit:cover;border:2px solid #f97316;flex-shrink:0" alt="Dev"/>
      <div>
        <div style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--t1)">Brian Capio</div>
        <div style="font-size:11px;color:#f97316;font-weight:600">Developer · ICT-MAWD</div>
      </div>
      <svg style="margin-left:auto;flex-shrink:0;color:var(--t3)" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </div>
    <!-- Theme toggle -->
    <button id="themeMenuBtn" onclick="toggleTheme();updateThemeMenuLabel()" style="width:100%;display:flex;align-items:center;gap:12px;padding:13px 16px;background:none;border:none;border-bottom:1px solid var(--bd);cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:var(--t1);text-align:left">
      <span id="themeMenuIco" style="font-size:16px">🌙</span>
      <span id="themeMenuLbl">Switch to Dark Mode</span>
    </button>
    <!-- Logout -->
    <button onclick="closeProfileMenu();doLogout()" style="width:100%;display:flex;align-items:center;gap:12px;padding:13px 16px;background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;color:#ef4444;text-align:left">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
      Sign Out
    </button>
  </div>
</div>
<div class="view on" id="invView">

  <!-- MORNING BRIEFING -->
  <div class="brief-scroll" id="briefStrip"></div>

  <!-- QUICK ACTION BAR -->
  <div class="qab">
    <button class="qa-btn primary" onclick="openAdd()">
      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Add Item
    </button>
    <button class="qa-btn blue" onclick="closeQuickMenu();openScanner()">
      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="5" height="5"/><rect x="16" y="3" width="5" height="5"/><rect x="3" y="16" width="5" height="5"/><line x1="16" y1="16" x2="21" y2="16"/><line x1="16" y1="19" x2="21" y2="19"/><line x1="19" y1="16" x2="19" y2="21"/></svg>Scan QR
    </button>
    <button class="qa-btn amber" onclick="closeQuickMenu();openPersonnelMgr()">
      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Issue PPE
    </button>
    <button class="qa-btn green" onclick="closeQuickMenu();openHandover()">
      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>Handover
    </button>
    <button class="qa-btn purple" onclick="closeQuickMenu();openAllBorrows()">
      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>Borrows
    </button>
  </div>

  <!-- ACTIVITY FEED -->
  <div class="feed-wrap" id="feedWrap" style="display:none">
    <div class="feed-hdr">
      <div class="feed-lbl">⚡ Today's Activity</div>
      <button class="feed-toggle" id="feedToggleBtn" onclick="toggleFeed()">Hide</button>
    </div>
    <div class="feed-list" id="feedList"></div>
  </div>

  <div class="stats" id="stats">
    <div class="chip"><b id="sTotal">0</b>&nbsp;items</div>
    <div class="chip w" id="sLowC" style="display:none">⚠ <b id="sLow">0</b>&nbsp;low</div>
    <div class="chip i" id="sBorC" style="display:none">📤 <b id="sBor">0</b>&nbsp;out</div>
  </div>
  
<!-- SAFETY TIP CARD -->
<div id="tipCardWrap" style="padding:0 13px 6px;display:none">
  <div id="tipCard" onclick="rotateTip()" style="background:var(--card);border:1.5px solid var(--bd);border-radius:14px;padding:13px 14px;box-shadow:var(--sh);cursor:pointer;position:relative;overflow:hidden;transition:border-color .2s">
    <div style="position:absolute;top:0;left:0;width:4px;height:100%;border-radius:4px 0 0 4px" id="tipAccent"></div>
    <div style="padding-left:8px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:7px">
        <div style="display:flex;align-items:center;gap:7px">
          <div id="tipIcon" style="width:22px;height:22px;flex-shrink:0;color:var(--t2)"><svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
          <div>
            <div style="font-family:var(--fh);font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.6px;color:var(--t3)" id="tipType">DID YOU KNOW</div>
            <div style="font-family:var(--fh);font-size:15px;font-weight:800;color:var(--t1);line-height:1.1" id="tipTool"></div>
          </div>
        </div>
        <div style="font-size:10px;color:var(--t3);text-align:right;flex-shrink:0;padding-left:8px">Tap to<br/>refresh</div>
      </div>
      <div style="font-size:13px;color:var(--t2);line-height:1.55" id="tipBody"></div>
    </div>
  </div>
</div>
<div class="pinned-wrap" id="pinnedWrap">
    <div class="pinned-hdr">
      <div class="pinned-lbl"><span>★</span> QUICK ACCESS</div>
      <span style="font-size:11px;color:var(--t3)">Tap ★ to pin items</span>
    </div>
    <div class="pinned-scroll" id="pinnedScroll"></div>
    <div class="pin-divider"></div>
  </div>
  <div class="list" id="itemList"></div>
  <div class="empty" id="emptyEl">
    <div class="eico">📦</div>
    <div class="et" id="emptyT">No Items Yet</div>
    <div class="es" id="emptyS">Tap the orange + to add your first item.</div>
  </div>
</div>


<!-- ═══ TOOLS VIEW ═══ -->
<div class="view" id="toolsView">
  <div style="padding:10px 13px 0">
    <div class="tabs" id="toolsTabs">
      <button class="tab on" onclick="switchToolTab('conv')">🔄 Convert</button>
      <button class="tab" onclick="switchToolTab('calc')">⚖️ Shapes</button>
      <button class="tab" onclick="switchToolTab('lib')">📚 Library</button>
      <button class="tab" onclick="switchToolTab('safe')">🛡️ Safety</button>
    </div>
  </div>

  <!-- CONVERTER TAB -->
  <div id="toolConv" style="padding:13px;display:flex;flex-direction:column;gap:14px">
    <div class="chart-card">
      <div class="dash-section-title" style="margin-bottom:10px">📏 Height / Length</div>
      <div class="f"><label>Value</label><input id="convHVal" type="number" placeholder="0" inputmode="decimal" oninput="doConvH()"/></div>
      <div class="f" style="margin-top:8px"><label>From Unit</label>
        <select id="convHFrom" onchange="doConvH()">
          <option value="mm">Millimetres (mm)</option>
          <option value="cm">Centimetres (cm)</option>
          <option value="m" selected>Metres (m)</option>
          <option value="in">Inches (in)</option>
          <option value="ft">Feet (ft)</option>
        </select>
      </div>
      <div id="convHOut" style="margin-top:10px;display:flex;flex-direction:column;gap:6px"></div>
    </div>
    <div class="chart-card">
      <div class="dash-section-title" style="margin-bottom:10px">⚖️ Weight / Mass</div>
      <div class="f"><label>Value</label><input id="convWVal" type="number" placeholder="0" inputmode="decimal" oninput="doConvW()"/></div>
      <div class="f" style="margin-top:8px"><label>From Unit</label>
        <select id="convWFrom" onchange="doConvW()">
          <option value="g">Grams (g)</option>
          <option value="kg" selected>Kilograms (kg)</option>
          <option value="t">Metric Tonnes (t)</option>
          <option value="lb">Pounds (lb)</option>
          <option value="oz">Ounces (oz)</option>
        </select>
      </div>
      <div id="convWOut" style="margin-top:10px;display:flex;flex-direction:column;gap:6px"></div>
    </div>
  </div>

  <!-- SHAPES CALCULATOR TAB -->
  <div id="toolCalc" style="display:none;padding:13px;display:none;flex-direction:column;gap:14px">
    <div class="chart-card">
      <div class="dash-section-title" style="margin-bottom:10px">⚙️ Material & Shape</div>
      <div class="frow">
        <div class="f"><label>Material</label>
          <select id="calcMat" onchange="updateCalcInputs()">
            <option value="7850">Steel (7850 kg/m³)</option>
            <option value="7800">Stainless Steel (7800)</option>
            <option value="2700">Aluminium (2700)</option>
            <option value="7200">Cast Iron (7200)</option>
            <option value="8500">Brass (8500)</option>
            <option value="8960">Copper (8960)</option>
            <option value="custom">Custom density…</option>
          </select>
        </div>
        <div class="f"><label>Shape</label>
          <select id="calcShape" onchange="updateCalcInputs()">
            <option value="plate">Flat Plate / Bar</option>
            <option value="roundbar">Round Bar</option>
            <option value="squarebar">Square Bar</option>
            <option value="pipe">Round Pipe / Tube</option>
            <option value="rhs">Rectangular Hollow</option>
            <option value="angle">Angle Iron (equal)</option>
          </select>
        </div>
      </div>
      <div id="calcCustomDensity" style="display:none" class="f">
        <label>Density (kg/m³)</label>
        <input id="calcDensityVal" type="number" placeholder="e.g. 7850" inputmode="decimal"/>
      </div>
    </div>
    <div class="chart-card" id="calcInputsCard">
      <div class="dash-section-title" style="margin-bottom:10px" id="calcInputsTitle">📐 Dimensions (mm)</div>
      <div id="calcInputs" style="display:flex;flex-direction:column;gap:10px"></div>
      <button onclick="calcWeight()" class="btnmain" style="margin-top:14px;font-size:18px">Calculate Weight</button>
    </div>
    <div id="calcResult" style="display:none" class="chart-card">
      <div class="dash-section-title">📊 Result</div>
      <div id="calcResultInner"></div>
    </div>
  </div>

  <!-- LIBRARY TAB -->
  <div id="toolLib" style="display:none;padding:13px;flex-direction:column;gap:10px">
    <div style="position:relative">
      <svg style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--t3);pointer-events:none" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input id="libSearch" type="text" placeholder="Search tools, equipment…" style="width:100%;padding:10px 12px 10px 36px;border:1.5px solid var(--bd);border-radius:10px;background:var(--inp);color:var(--t1);font-family:'DM Sans',sans-serif;font-size:15px;outline:none" oninput="renderLibrary()"/>
    </div>
    <div id="libCatFilter" style="display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px"></div>
    <div id="libList" style="display:flex;flex-direction:column;gap:8px"></div>
  </div>

  <!-- SAFETY TAB -->
  <div id="toolSafe" style="display:none;padding:13px;flex-direction:column;gap:10px">
    <div id="safeList"></div>
  </div>
</div>

<!-- ═══ DASHBOARD VIEW ═══ -->
<div class="view" id="dashView">
  <div class="dash-wrap">

    <!-- Summary Cards -->
    <div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <div class="dash-section-title" style="margin-bottom:0">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
          Summary
        </div>
        <button onclick="document.getElementById('clearDashOv').classList.add('on')" style="background:var(--rbg);border:1.5px solid var(--rbd);border-radius:8px;color:#ef4444;font-size:11px;font-weight:700;padding:5px 9px;cursor:pointer;display:flex;align-items:center;gap:5px">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M9 6V4h6v2"/></svg>
          Clear Data
        </button>
      </div>
      <!-- Row 1: Main stats -->
      <div class="sum-grid">
        <div class="sum-card"><div class="sum-label">Total Items</div><div class="sum-value" id="dTotal">0</div><div class="sum-sub" id="dTotalSub"></div></div>
        <div class="sum-card good"><div class="sum-label">Total Value</div><div class="sum-value" id="dValue">—</div><div class="sum-sub" id="dValueSub"></div></div>
      </div>
      <!-- Row 2: Stock status -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px">
        <div class="sum-card good" style="padding:12px">
          <div class="sum-label" style="font-size:10px">Available</div>
          <div class="sum-value" id="dAvail" style="font-size:24px">0</div>
          <div class="sum-sub" id="dAvailSub" style="font-size:10px">units ready</div>
        </div>
        <div class="sum-card info" style="padding:12px">
          <div class="sum-label" style="font-size:10px">Borrowed Out</div>
          <div class="sum-value" id="dBorOut" style="font-size:24px">0</div>
          <div class="sum-sub" id="dBorSub" style="font-size:10px">units out</div>
        </div>
        <div class="sum-card warn" style="padding:12px">
          <div class="sum-label" style="font-size:10px">Low Stock</div>
          <div class="sum-value" id="dLow" style="font-size:24px">0</div>
          <div class="sum-sub" style="font-size:10px">need restock</div>
        </div>
      </div>
    </div>

    <!-- Overdue Borrows -->
    <div id="odSection" style="display:none">
      <div class="overdue-section">
        <div class="overdue-hdr">
          <div class="overdue-title">⚠ Overdue Borrows</div>
          <button class="reorder-btn" onclick="openAllBorrows()" style="background:var(--rbg);color:#ef4444;border:1.5px solid var(--rbd)">View All</button>
        </div>
        <div id="odList"></div>
      </div>
    </div>

    <!-- 7-Day Chart -->
    <div class="chart-card">
      <div class="dash-section-title" style="margin-bottom:6px">📈 7-Day Stock Movement</div>
      <div class="chart-legend">
        <div class="legend-item"><div class="legend-dot" style="background:#22c55e"></div>Restocked</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f97316"></div>Used</div>
      </div>
      <div id="chartWrap"></div>
    </div>

    <!-- Low Stock Items -->
    <div id="lowSection" style="display:none">
      <div class="dash-section-title">⚠ Low Stock Items</div>
      <div class="low-list" id="lowList"></div>
    </div>

    <!-- Consumable Usage per Project -->
    <div id="conSection" style="display:none">
      <div class="dash-section-title">🧤 Consumable Usage by Project</div>
      <div id="conList"></div>
    </div>

    <!-- All items value breakdown -->
    <div id="valSection" style="display:none">
      <div class="dash-section-title">💰 Value by Category</div>
      <div id="valList"></div>
    </div>
  </div>
</div>

<!-- ═══ BORROWERS VIEW ═══ -->
<div class="view" id="brwView">
  <div style="padding:12px 13px 0">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:var(--t1)">Borrowers Directory</div>
      <button onclick="openDirectBorrow()" style="display:flex;align-items:center;gap:6px;background:#f97316;border:none;border-radius:10px;color:#fff;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;padding:9px 14px;cursor:pointer">
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        New Borrow
      </button>
    </div>
    <!-- Search borrowers -->
    <div style="position:relative;margin-bottom:10px">
      <svg style="position:absolute;left:11px;top:50%;transform:translateY(-50%);color:var(--t3);pointer-events:none" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input id="brwSearch" type="text" placeholder="Search borrower name or project…" autocomplete="off"
        style="width:100%;background:var(--card);border:1.5px solid var(--bd);border-radius:10px;color:var(--t1);font-family:'DM Sans',sans-serif;font-size:15px;padding:9px 12px 9px 36px;outline:none"
        oninput="renderBorrowers()"/>
    </div>
    <!-- Summary chips -->
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">
      <div class="chip"><b id="brwTotal">0</b>&nbsp;borrowers</div>
      <div class="chip i" id="brwActiveChip" style="display:none"><b id="brwActive">0</b>&nbsp;active</div>
      <div class="chip w" id="brwOdChip" style="display:none">⚠ <b id="brwOd">0</b>&nbsp;overdue</div>
    </div>
  </div>
  <div id="brwList" style="padding:0 13px 110px;display:flex;flex-direction:column;gap:10px"></div>
  <div id="brwEmpty" style="display:none;flex-direction:column;align-items:center;justify-content:center;padding:70px 26px;text-align:center;gap:10px">
    <div style="font-size:50px;opacity:.25">👥</div>
    <div style="font-family:var(--fh);font-size:22px;font-weight:700;color:var(--t2)">No Borrowers Yet</div>
    <div style="font-size:13px;color:var(--t3);line-height:1.55">Borrow records will appear here once items are borrowed.</div>
    <button onclick="openDirectBorrow()" style="background:#f97316;border:none;border-radius:10px;color:#fff;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;padding:12px 20px;cursor:pointer;margin-top:8px">📤 Record a Borrow</button>
  </div>
</div>

<!-- BOTTOM NAV -->
<div class="bottom-nav">
  <button class="nav-btn on" id="navInv" onclick="switchView('inv')">
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="6" height="6" rx="1"/><rect x="10" y="3" width="6" height="6" rx="1"/><rect x="18" y="3" width="4" height="6" rx="1"/><path d="M2 15h20M2 19h12"/></svg>
    Inventory
  </button>
  <button class="nav-btn" id="navBrw" onclick="switchView('brw')">
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    Borrowers
    <span class="nav-badge" id="brwOdBadge"></span>
  </button>
  <button class="nav-btn" id="navDash" onclick="switchView('dash')">
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
    Dashboard
    <span class="nav-badge" id="dashOdBadge"></span>
  </button>

  <button class="nav-btn" id="navTools" onclick="switchView('tools')">
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    Tools
  </button></div>

<!-- FAB -->
<button class="fab" id="fab" onclick="openAdd()">+</button>

<!-- BULK BAR -->
<div class="bkbar" id="bkbar">
  <div class="bktop">
    <div class="bkcnt" id="bkcnt">0 selected</div>
    <button class="bkall" id="bkallbtn" onclick="selAll()">Select All</button>
  </div>
  <div class="bkrow">
    <input class="bkinp" id="bkinp" type="number" min="0" placeholder="Set quantity to…" inputmode="numeric"/>
    <button class="bkap" onclick="applyBulk()">Apply</button>
    <button class="bkdn" onclick="toggleBulk()">Done</button>
  </div>
</div>

<!-- MODAL: DIRECT BORROW (add item+borrow in one step) -->
<div class="ov" id="dirBorOv" onclick="ovtap(event,'dirBorOv',closeDirBorrow)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr">
      <div>
        <div class="shtitle">Quick Borrow</div>
        <div style="font-size:12px;color:var(--t2);margin-top:1px">Record a borrow — item created automatically if new</div>
      </div>
      <button class="shclose" onclick="closeDirBorrow()">✕</button>
    </div>
    <div class="shbody">
      <!-- ID Photo -->
      <div class="f">
        <label>Borrower ID Photo <span style="font-weight:400;text-transform:none;letter-spacing:0">(recommended)</span></label>
        <input type="file" class="upfile" id="dbIdFile" accept="image/*" capture="environment" onchange="handleDbId(event)"/>
        <input type="file" class="upfile" id="dbIdGallery" accept="image/*" onchange="handleDbId(event)"/>
        <label for="dbIdFile" class="id-uplabel">
          <img class="id-prev" id="dbIdPrev" src="" alt=""/>
          <div class="id-ph" id="dbIdPh">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="14" rx="2"/><circle cx="8" cy="13" r="2"/><path d="M14 10h4M14 14h2"/></svg>
            <div><span>📷 Tap to photograph borrower ID</span><small>Government ID, company card…</small></div>
          </div>
        </label>
        <label for="dbIdGallery" class="id-gallery" id="dbGalleryBtn">🖼 Choose from gallery instead</label>
        <button class="id-rm" id="dbIdRm" onclick="removeDbId(event)">✕ Remove ID Photo</button>
      </div>
      <div class="f"><label>Borrower Name *</label><input id="dbName" type="text" placeholder="e.g. Juan dela Cruz" maxlength="80"/><div class="ferr" id="errDbN">Required</div></div>
      <div class="f"><label>Project / Location *</label><input id="dbProject" type="text" placeholder="e.g. Tower A – Level 12" maxlength="100"/><div class="ferr" id="errDbP">Required</div></div>
      <div style="background:var(--bbg);border:1.5px solid var(--bbd);border-radius:10px;padding:12px 13px">
        <div style="font-family:var(--fh);font-size:13px;font-weight:800;letter-spacing:.4px;text-transform:uppercase;color:#3b82f6;margin-bottom:8px">📦 Item Being Borrowed</div>
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <div class="f" style="flex:1;margin:0">
            <label>Item Name *</label>
            <input id="dbItem" type="text" placeholder="e.g. Safety Gloves" list="dbItemList" maxlength="80" oninput="filterDbItems()"/>
            <datalist id="dbItemList"></datalist>
            <div class="ferr" id="errDbItem">Required</div>
          </div>
          <div class="f" style="width:80px;flex-shrink:0;margin:0">
            <label>Qty *</label>
            <input id="dbQty" type="number" min="1" value="1" inputmode="numeric"/>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="f" style="margin:0"><label>Unit</label>
            <select id="dbUnit"><option>pcs</option><option>kg</option><option>g</option><option>L</option><option>mL</option><option>m</option><option>cm</option><option>rolls</option><option>boxes</option><option>sets</option></select>
          </div>
          <div class="f" style="margin:0"><label>Category</label><select id="dbCat"></select></div>
        </div>
        <div style="font-size:11px;color:#3b82f6;margin-top:8px;padding:6px 10px;background:rgba(59,130,246,.08);border-radius:7px">
          💡 If this item doesn\\x27t exist yet, it will be created automatically
        </div>
      </div>
      <div class="frow">
        <div class="f"><label>Due Date</label><input id="dbDue" type="date"/></div>
        <div class="f"><label>Notes</label><input id="dbNote" type="text" placeholder="Optional…" maxlength="200"/></div>
      </div>
      <!-- Signature -->
      <div class="f">
        <label>Borrower Signature *</label>
        <div class="sig-wrap"><canvas class="sig-canvas" id="dbSigCanvas"></canvas>
          <div class="sig-footer"><span class="sig-hint">✍ Sign with your finger above</span><button class="sig-clear" onclick="clearDbSig()">Clear</button></div>
        </div>
        <div class="sig-err" id="dbSigErr">Signature is required</div>
      </div>
      <button class="btnmain" onclick="submitDirectBorrow()">📤 CONFIRM BORROW</button>
    </div>
  </div>
</div>

<!-- MODAL: BORROWER DETAIL -->
<div class="ov" id="brwDetailOv" onclick="ovtap(event,'brwDetailOv',closeBrwDetail)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr"><div class="shtitle" id="brwDetailTitle">Borrower</div><button class="shclose" onclick="closeBrwDetail()">✕</button></div>
    <div class="shbody"><div id="brwDetailBody"></div></div>
  </div>
</div>

<!-- MODAL: ADD/EDIT ITEM -->
<div class="ov" id="itemOv" onclick="ovtap(event,'itemOv',closeItem)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr"><div class="shtitle" id="itemTitle">Add Item</div><button class="shclose" onclick="closeItem()">✕</button></div>
    <div class="shbody">
      <div class="f">
        <label>Item Photo <span style="font-weight:400;text-transform:none;letter-spacing:0">(optional)</span></label>
        <input type="file" class="upfile" id="itemImgFile" accept="image/*" capture="environment" onchange="handleItemImg(event)"/>
        <input type="file" class="upfile" id="itemImgGallery" accept="image/*" onchange="handleItemImg(event)"/>
        <label for="itemImgFile" class="uplabel">
          <img class="upprev" id="itemImgPrev" src="" alt=""/>
          <div class="upph" id="itemImgPh">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            <span>📷 Tap to open camera</span><small>Take a photo of the item</small>
          </div>
        </label>
        <label for="itemImgGallery" class="gallery-alt" id="itemGalleryBtn">🖼 Choose from gallery instead</label>
        <button class="uprm" id="itemImgRm" onclick="removeItemImg(event)">✕ Remove Photo</button>
      </div>
      <div class="f"><label>Item Name *</label><input id="fName" type="text" placeholder="e.g. Safety Harness" maxlength="80"/><div class="ferr" id="errName">Name is required</div></div>
      <div class="frow">
        <div class="f"><label>Category</label><select id="fCat"></select></div>
        <div class="f"><label>Location / Project</label><select id="fLoc"></select></div>
      </div>
      <div class="frow">
        <div class="f"><label>Quantity *</label><input id="fQty" type="number" min="0" placeholder="0" inputmode="numeric"/><div class="ferr" id="errQty">Enter a valid number</div></div>
        <div class="f"><label>Unit</label>
          <select id="fUnit"><option>pcs</option><option>kg</option><option>g</option><option>L</option><option>mL</option><option>m</option><option>cm</option><option>rolls</option><option>boxes</option><option>sets</option></select>
        </div>
      </div>
      <div class="frow">
        <div class="f"><label>Unit Price (optional)</label><input id="fPrice" type="number" min="0" step="0.01" placeholder="0.00" inputmode="decimal"/><div class="fhint">For total value calculation</div></div>
        <div class="f"><label>Low Stock Alert</label><input id="fThresh" type="number" min="0" placeholder="5" inputmode="numeric"/></div>
      </div>
      <div class="f"><label>Serial Number (optional)</label><input id="fSerial" type="text" placeholder="e.g. SN-2024-001, HRN-05" maxlength="80"/><div class="fhint">Tag, asset code, or serial number</div></div>
      <div class="frow">
        <div class="f"><label>Condition</label>
          <select id="fCond">
            <option value="New">New</option>
            <option value="Good" selected>Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
            <option value="Condemned">Condemned</option>
          </select>
        </div>
        <div class="f"><label>Next Inspection Due</label><input id="fInspDate" type="date"/><div class="fhint">Leave blank if not applicable</div></div>
      </div>
      <div class="f"><label>Supplier / Source (optional)</label><input id="fSupplier" type="text" placeholder="e.g. Lazada, ACE Hardware, Manila Rope" maxlength="80"/></div>
      <div class="f"><label>Supplier Contact (optional)</label><input id="fSupplierContact" type="text" placeholder="e.g. +63 912 345 6789" maxlength="60"/></div>
      <button class="btnmain" id="itemSub" onclick="submitItem()">ADD ITEM</button>
    </div>
  </div>
</div>

<!-- MODAL: BORROW -->
<div class="ov" id="borOv" onclick="ovtap(event,'borOv',closeBorrow)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr"><div class="shtitle" id="borTitle">Borrow Item</div><button class="shclose" onclick="closeBorrow()">✕</button></div>
    <div class="shbody">
      <div class="f">
        <label>Borrower ID Photo <span style="font-weight:400;text-transform:none;letter-spacing:0">(recommended)</span></label>
        <input type="file" class="upfile" id="borIdFile" accept="image/*" capture="environment" onchange="handleBorId(event)"/>
        <input type="file" class="upfile" id="borIdGallery" accept="image/*" onchange="handleBorId(event)"/>
        <label for="borIdFile" class="id-uplabel">
          <img class="id-prev" id="borIdPrev" src="" alt=""/>
          <div class="id-ph" id="borIdPh">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="14" rx="2"/><circle cx="8" cy="13" r="2"/><path d="M14 10h4M14 14h2"/></svg>
            <div><span>📷 Tap to photograph borrower ID</span><small>Government ID, company card…</small></div>
          </div>
        </label>
        <label for="borIdGallery" class="id-gallery" id="borGalleryBtn">🖼 Choose from gallery instead</label>
        <button class="id-rm" id="borIdRm" onclick="removeBorId(event)">✕ Remove ID Photo</button>
      </div>
      <div class="f"><label>Borrower Name *</label><input id="bName" type="text" placeholder="e.g. Juan dela Cruz" maxlength="80"/><div class="ferr" id="errBN">Name is required</div></div>
      <div class="f"><label>Project / Location *</label><input id="bProj" type="text" placeholder="e.g. Tower A – Level 12" maxlength="100"/><div class="ferr" id="errBP">Project / location is required</div></div>
      <div class="frow">
        <div class="f"><label>Qty to Borrow *</label><input id="bQty" type="number" min="1" placeholder="1" inputmode="numeric"/><div class="ferr" id="errBQ">Enter a valid amount</div></div>
        <div class="f"><label>Due Date</label><input id="bDue" type="date"/></div>
      </div>
      <div class="f"><label>Notes (optional)</label><textarea id="bNote" placeholder="Condition notes, reminders…"></textarea></div>
      <div class="f">
        <label>Borrower Signature *</label>
        <div class="sig-wrap"><canvas class="sig-canvas" id="sigCanvas"></canvas>
          <div class="sig-footer"><span class="sig-hint">✍ Sign with your finger above</span><button class="sig-clear" onclick="clearSig()">Clear</button></div>
        </div>
        <div class="sig-err" id="sigErr">Signature is required</div>
      </div>
      <div class="availbox" id="availbox"></div>
      <button class="btnmain" onclick="submitBorrow()">📤 CONFIRM BORROW</button>
    </div>
  </div>
</div>

<!-- MODAL: BORROW LIST -->
<div class="ov" id="borListOv" onclick="ovtap(event,'borListOv',closeBorList)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr"><div class="shtitle" id="borListTitle">Borrows</div><button class="shclose" onclick="closeBorList()">✕</button></div>
    <div class="shbody">
      <div class="tabs">
        <button class="tab on" id="blTabA" onclick="swBLTab('a')">ACTIVE</button>
        <button class="tab" id="blTabH" onclick="swBLTab('h')">HISTORY</button>
        <button class="tab" id="blTabS" onclick="swBLTab('s')">STOCK LOG</button>
      </div>
      <div id="blActivePanel"></div>
      <div id="blHistPanel" style="display:none"></div>
      <div id="blStockPanel" style="display:none"></div>
    </div>
  </div>
</div>

<!-- MODAL: ALL BORROWS -->
<div class="ov" id="allBorOv" onclick="ovtap(event,'allBorOv',closeAllBorrows)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr">
      <div class="shtitle">All Active Borrows</div>
      <div style="display:flex;gap:6px">
        <button onclick="document.getElementById('clearBorOv').classList.add('on')" style="background:var(--rbg);border:1.5px solid var(--rbd);border-radius:8px;color:#ef4444;font-size:11px;font-weight:700;padding:5px 9px;cursor:pointer">Clear All</button>
        <button class="shclose" onclick="closeAllBorrows()">✕</button>
      </div>
    </div>
    <div class="shbody"><div id="allBorBody"></div></div>
  </div>
</div>

<!-- MODAL: EXPORT & BACKUP -->
<div class="ov" id="exportOv" onclick="ovtap(event,'exportOv',closeExport)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr"><div class="shtitle">Export & Backup</div><button class="shclose" onclick="closeExport()">✕</button></div>
    <div class="shbody">
      <div class="seclbl">📤 Export Reports</div>
      <div class="exp-grid">
        <button class="exp-btn" onclick="exportStockCSV()">
          <div class="exp-ico">📊</div>
          <div class="exp-label">Stock CSV</div>
          <div class="exp-sub">All items with qty, value, status</div>
        </button>
        <button class="exp-btn" onclick="exportBorrowCSV()">
          <div class="exp-ico">📋</div>
          <div class="exp-label">Borrows CSV</div>
          <div class="exp-sub">Active borrow records</div>
        </button>
        <button class="exp-btn" onclick="printReport()">
          <div class="exp-ico">🖨️</div>
          <div class="exp-label">Print Report</div>
          <div class="exp-sub">Full PDF-ready summary</div>
        </button>
        <button class="exp-btn" onclick="openReorder()">
          <div class="exp-ico">📦</div>
          <div class="exp-label">Reorder Slip</div>
          <div class="exp-sub">Low stock items to request</div>
        </button>
      </div>
      <div class="seclbl">☁️ Cloud Backup</div>
      <button class="bk-btn" onclick="backupData()">
        <div class="bk-ico">⬇️</div>
        <div class="bk-text">
          <div class="bk-label">Download Backup</div>
          <div class="bk-sub">Save all your data as a .json file</div>
        </div>
      </button>
      <button class="bk-btn" onclick="document.getElementById('restoreFile').click()">
        <div class="bk-ico">⬆️</div>
        <div class="bk-text">
          <div class="bk-label">Restore from Backup</div>
          <div class="bk-sub">Load a previously downloaded .json file</div>
        </div>
      </button>
      <input type="file" id="restoreFile" accept=".json,application/json,text/plain,*/*" style="display:none" onchange="restoreData(event)"/>
      <div class="bk-note">
        <b>💡 Tip:</b> After downloading your backup, upload it to <b>Google Drive</b> or email it to yourself. That way your data is safe even if you lose your phone.
      </div>
    </div>
  </div>
</div>

<!-- MODAL: REORDER SLIP -->
<div class="ov" id="reorderOv" onclick="ovtap(event,'reorderOv',closeReorder)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr"><div class="shtitle">Reorder Request</div><button class="shclose" onclick="closeReorder()">✕</button></div>
    <div class="shbody">
      <div style="font-size:13px;color:var(--t2);line-height:1.5;padding:10px 13px;background:var(--inp);border-radius:9px;border:1.5px solid var(--bd)" id="roDate"></div>
      <div id="roList"></div>
      <button class="btnmain" onclick="shareReorder()">📤 Share / Copy Slip</button>
    </div>
  </div>
</div>

<!-- MODAL: MANAGER -->
<div class="ov" id="mgrOv" onclick="ovtap(event,'mgrOv',closeMgr)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr"><div class="shtitle">Manage Labels</div><button class="shclose" onclick="closeMgr()">✕</button></div>
    <div class="shbody">
      <div class="tabs">
        <button class="tab on" id="tabCat" onclick="swTab('cat')">CATEGORIES</button>
        <button class="tab" id="tabLoc" onclick="swTab('loc')">LOCATIONS</button>
      </div>
      <div id="catPanel">
        <div id="catRows" style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px"></div>
        <div class="marow"><input class="mainp" id="catAddInp" type="text" placeholder="New category…" maxlength="60"/><button class="mabtn" onclick="addCat()">+</button></div>
      </div>
      <div id="locPanel" style="display:none">
        <div id="locRows" style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px"></div>
        <div class="marow"><input class="mainp" id="locAddInp" type="text" placeholder="New location / project…" maxlength="80"/><button class="mabtn" onclick="addLoc()">+</button></div>
      </div>
    </div>
  </div>
</div>


<!-- QR CODE MODAL -->
<div class="ov" id="qrOv" onclick="ovtap(event,'qrOv',closeQR)">
  <div class="sheet"><div class="shdl"></div>
    <div class="shhdr"><div class="shtitle">📦 Item QR Code</div><button class="shclose" onclick="closeQR()">✕</button></div>
    <div class="shbody">
      <div class="qr-wrap">
        <div class="qr-box" id="qrCanvas"></div>
        <div class="qr-info">
          <div class="qr-iname" id="qrName"></div>
          <div id="qrBadges" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px"></div>
          <div id="qrStats" style="display:flex;gap:18px;flex-wrap:wrap"></div>
          <div style="margin-top:6px;font-size:10px;color:var(--t3);font-family:'DM Mono',monospace" id="qrItemId"></div>
        </div>
        <div class="qr-grid">
          <button class="qr-act" onclick="printQRLabel()"><span class="qr-act-i">🖨️</span>Print Label</button>
          <button class="qr-act" onclick="shareQR()"><span class="qr-act-i">📤</span>Share</button>
          <button class="qr-act" onclick="closeQR();openScanner()"><span class="qr-act-i">📷</span>Scan Another</button>
          <button class="qr-act" onclick="closeQR();openBorrow(qrItemId)"><span class="qr-act-i">📋</span>Quick Borrow</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- QR SCANNER MODAL -->
<div class="ov" id="scanOv" onclick="ovtap(event,'scanOv',closeScanner)">
  <div class="sheet"><div class="shdl"></div>
    <div class="shhdr"><div class="shtitle">📷 Scan QR Code</div><button class="shclose" onclick="closeScanner()">✕</button></div>
    <div class="shbody">
      <div class="scan-wrap">
        <video class="scan-vid" id="scanVideo" autoplay playsinline muted></video>
        <canvas id="scanCanvas" style="display:none"></canvas>
        <div class="scan-frame-wrap"><div class="scan-frame"></div></div>
        <div class="scan-beam"></div>
      </div>
      <div class="scan-hint" id="scanHint">Point camera at a WareStock QR code</div>
      <div class="scan-ok" id="scanOk">
        <div style="font-family:var(--fh);font-size:18px;font-weight:800;color:#22c55e;margin-bottom:8px">✅ Item Found!</div>
        <div id="scanOkContent"></div>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button onclick="goToScanned()" class="btnmain" style="flex:1;padding:11px;font-size:16px">View Item</button>
          <button onclick="borrowScanned()" class="btnmain" style="flex:1;padding:11px;font-size:16px;background:#3b82f6">Borrow</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- STATION OVERLAY -->
<div class="station-ov" id="stationOv">
  <div class="station-card">
    <img id="stationImg" class="station-img" src="" alt=""/>
    <div class="station-cat" id="stationCat"></div>
    <div class="station-name" id="stationName"></div>
    <div class="station-qrow">
      <button class="sq-btn use" id="stationUse" onclick="stationAdj(-1)">−</button>
      <div style="text-align:center">
        <div class="sq-num" id="stationQnum">0</div>
        <div style="font-size:11px;color:var(--t3);font-weight:500" id="stationUnit"></div>
        <div style="font-size:11px;color:#ef4444;font-weight:700;display:none" id="stationWarn">⚠ LOW STOCK</div>
      </div>
      <button class="sq-btn rst" onclick="stationAdj(+1)">+</button>
    </div>
    <div class="station-row2">
      <button class="st-bor" onclick="closeStation();openBorrow(stationItemId)">📋 Borrow This Item</button>
      <button class="st-cls" onclick="closeStation()">✕ Close</button>
    </div>
  </div>
</div>


<!-- PERSONNEL MANAGER MODAL -->
<div class="ov" id="personnelOv" onclick="ovtap(event,'personnelOv',closePersonnelMgr)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr">
      <div class="shtitle">👥 Personnel List</div>
      <button class="shclose" onclick="closePersonnelMgr()">✕</button>
    </div>
    <div class="shbody">
      <div id="personnelStats" style="display:flex;gap:8px;flex-wrap:wrap"></div>
      <div id="personnelList" style="display:flex;flex-direction:column;gap:8px"></div>
      <!-- Add person -->
      <div style="background:var(--inp);border:1.5px solid var(--bd);border-radius:12px;padding:13px;display:flex;flex-direction:column;gap:10px">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:.5px">Add New Person</div>
        <div class="f"><label>Full Name *</label><input id="newPersonName" type="text" placeholder="e.g. Juan dela Cruz" maxlength="60"/></div>
        <div class="f"><label>Department / Position (optional)</label><input id="newPersonDept" type="text" placeholder="e.g. Rigging Team" maxlength="60"/></div>
        <button class="btnmain" onclick="addPerson()" style="padding:12px;font-size:17px">+ Add to List</button>
      </div>
    </div>
  </div>
</div>

<!-- PERSON DETAIL MODAL -->
<div class="ov" id="personDetailOv" onclick="ovtap(event,'personDetailOv',closePersonDetail)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr">
      <div class="shtitle" id="personDetailTitle">Consumption</div>
      <button class="shclose" onclick="closePersonDetail()">✕</button>
    </div>
    <div class="shbody">
      <div id="personDetailStats" style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:4px"></div>
      <div id="personDetailBody"></div>
    </div>
  </div>
</div>

<!-- ISSUE CONSUMABLE MODAL -->
<div class="ov" id="issueOv" onclick="ovtap(event,'issueOv',closeIssue)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr">
      <div class="shtitle" id="issueTitle">📋 Issue Item</div>
      <button class="shclose" onclick="closeIssue()">✕</button>
    </div>
    <div class="shbody">
      <!-- Item info banner -->
      <div id="issueBanner" style="background:var(--inp);border:1.5px solid var(--bd);border-radius:10px;padding:11px 13px"></div>
      <!-- Person picker -->
      <div class="f">
        <label>Issue To (Requestor) *</label>
        <input id="issuePersonSearch" type="text" placeholder="Search or select person…" oninput="filterPersonPicker()" autocomplete="off"/>
        <div class="ferr" id="issuePersonErr">Select a person from the list</div>
      </div>
      <div class="person-pick-list" id="personPickList"></div>
      <div id="issueSelectedPerson" style="display:none;background:var(--gbg);border:1.5px solid var(--gbd);border-radius:10px;padding:10px 13px;margin-top:-6px">
        <div style="font-size:11px;color:#22c55e;font-weight:700;text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px">Selected</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:800;color:var(--t1)" id="issueSelectedName"></div>
        <div style="font-size:12px;color:var(--t2)" id="issueSelectedDept"></div>
      </div>
      <!-- Quantity -->
      <div class="frow">
        <div class="f">
          <label>Quantity *</label>
          <input id="issueQty" type="number" min="1" placeholder="1" inputmode="numeric"/>
          <div class="ferr" id="issueQtyErr">Enter a valid amount</div>
        </div>
        <div class="f" id="issueUnitWrap">
          <label>Unit</label>
          <input id="issueUnit" type="text" readonly style="background:var(--inp);cursor:default"/>
        </div>
      </div>
      <div class="f">
        <label>Notes (optional)</label>
        <textarea id="issueNote" placeholder="e.g. Issued for tower scaffolding…" style="height:60px"></textarea>
      </div>
      <div class="availbox" id="issueAvailBox"></div>
      <button class="btnmain" onclick="submitIssue()">📋 CONFIRM ISSUANCE</button>
    </div>
  </div>
</div>


<!-- TOOL DETAIL MODAL -->
<div class="ov" id="toolDetailOv" onclick="ovtap(event,'toolDetailOv',closeToolDetail)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr">
      <div class="shtitle" id="toolDetailName">Tool</div>
      <button class="shclose" onclick="closeToolDetail()">✕</button>
    </div>
    <div id="toolDetailBody" style="overflow-y:auto;max-height:75dvh"></div>
  </div>
</div>


<!-- INSPECTION TRACKER MODAL -->
<div class="ov" id="inspOv" onclick="ovtap(event,'inspOv',closeInsp)">
  <div class="sheet"><div class="shdl"></div>
    <div class="shhdr"><div class="shtitle">🔍 Inspection Tracker</div><button class="shclose" onclick="closeInsp()">✕</button></div>
    <div class="shbody">
      <div id="inspStats" style="display:flex;gap:8px;flex-wrap:wrap"></div>
      <div id="inspList" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>
</div>

<!-- INSPECTION DETAIL MODAL -->
<div class="ov" id="inspDetailOv" onclick="ovtap(event,'inspDetailOv',closeInspDetail)">
  <div class="sheet"><div class="shdl"></div>
    <div class="shhdr"><div class="shtitle" id="inspDetailTitle">Inspection Log</div><button class="shclose" onclick="closeInspDetail()">✕</button></div>
    <div class="shbody">
      <div id="inspDetailBanner" style="background:var(--inp);border:1.5px solid var(--bd);border-radius:10px;padding:11px 13px;margin-bottom:4px"></div>
      <div class="f"><label>Inspection Date *</label><input id="newInspDate" type="date"/></div>
      <div class="f"><label>Inspector Name *</label><input id="newInspector" type="text" placeholder="e.g. Ian Capio"/></div>
      <div class="frow">
        <div class="f"><label>Result</label>
          <select id="newInspResult">
            <option value="Pass">✅ Pass — In Service</option>
            <option value="Pass with notes">⚠ Pass with Notes</option>
            <option value="Fail">❌ Fail — Remove from Service</option>
          </select>
        </div>
        <div class="f"><label>Next Inspection Due</label><input id="newInspNext" type="date"/></div>
      </div>
      <div class="f"><label>Notes / Findings</label><textarea id="newInspNote" placeholder="Describe findings, defects, or actions taken…" style="height:70px"></textarea></div>
      <button class="btnmain" onclick="submitInspection()">✅ RECORD INSPECTION</button>
      <div style="height:1px;background:var(--bd);margin:4px 0"></div>
      <div id="inspHistory" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>
</div>

<!-- HANDOVER NOTES MODAL -->
<div class="ov" id="handoverOv" onclick="ovtap(event,'handoverOv',closeHandover)">
  <div class="sheet"><div class="shdl"></div>
    <div class="shhdr"><div class="shtitle">📝 Shift Handover</div><button class="shclose" onclick="closeHandover()">✕</button></div>
    <div class="shbody">
      <div class="handover-card">
        <div class="dash-section-title" style="margin-bottom:8px">Current Shift Note</div>
        <div class="f"><label>Your Name</label><input id="handoverAuthor" type="text" placeholder="e.g. Ian"/></div>
        <div class="f"><label>Handover Note *</label>
          <textarea id="handoverNote" placeholder="e.g. Compressor returned from Site A. Harness #3 needs inspection. Juan still has 2 gloves outstanding." style="height:110px"></textarea>
        </div>
        <button class="btnmain" onclick="saveHandover()" style="font-size:17px">💾 Save Handover Note</button>
      </div>
      <div id="handoverHistory" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>
</div>

<!-- MONTHLY REPORT MODAL -->
<div class="ov" id="monthlyOv" onclick="ovtap(event,'monthlyOv',closeMonthly)">
  <div class="sheet"><div class="shdl"></div>
    <div class="shhdr"><div class="shtitle">📊 Monthly Report</div><button class="shclose" onclick="closeMonthly()">✕</button></div>
    <div class="shbody">
      <div class="frow">
        <div class="f"><label>Month</label>
          <select id="monthlyMonth"></select>
        </div>
        <div class="f"><label>Year</label>
          <select id="monthlyYear"></select>
        </div>
      </div>
      <button class="btnmain" onclick="generateMonthly()" style="font-size:17px">📊 Generate Report</button>
      <div id="monthlyResult" style="display:none;flex-direction:column;gap:12px"></div>
      <div id="monthlyExportBtns" style="display:none;display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:4px">
        <button class="btnmain" onclick="printMonthly()" style="background:#1d4ed8;font-size:15px">🖨 Print</button>
        <button class="btnmain" onclick="exportMonthlyCSV()" style="background:#22c55e;font-size:15px">📊 CSV</button>
      </div>
    </div>
  </div>
</div>


<!-- TEXT IMPORTER MODAL -->
<div class="ov" id="importOv" onclick="ovtap(event,'importOv',closeImporter)">
  <div class="sheet">
    <div class="shdl"></div>
    <div class="shhdr">
      <div class="shtitle">📄 Import from Text</div>
      <button class="shclose" onclick="closeImporter()">✕</button>
    </div>
    <div class="shbody">

      <!-- STEP 1: INPUT -->
      <div class="imp-step on" id="impStep1">
        <div style="background:var(--bbg);border:1.5px solid var(--bbd);border-radius:10px;padding:11px 13px;font-size:13px;color:var(--t2);line-height:1.55">
          Paste your masterlist, CSV, or any text below. One item per line, or comma/tab separated.
          WareStock will extract the item names automatically.
        </div>

        <!-- File drop zone -->
        <div class="imp-zone" id="impDropZone" onclick="document.getElementById('impFileInput').click()"
          ondragover="event.preventDefault();this.classList.add('drag')"
          ondragleave="this.classList.remove('drag')"
          ondrop="handleImportDrop(event)">
          <input type="file" id="impFileInput" accept=".txt,.csv,.xlsx,.xls" style="display:none" onchange="handleImportFile(event)"/>
          <div class="imp-zone-ico">📂</div>
          <div class="imp-zone-lbl">Drop file or tap to upload</div>
          <div class="imp-zone-sub">.txt  .csv  .xlsx  .xls  accepted</div>
        </div>

        <div style="text-align:center;font-size:12px;color:var(--t3);font-weight:600">— OR PASTE TEXT BELOW —</div>

        <!-- Format hint -->
        <div style="background:var(--gbg);border:1.5px solid var(--gbd);border-radius:10px;padding:10px 13px;font-size:12px;color:var(--t2);line-height:1.7">
          <b style="color:var(--t1)">Accepted formats — one item per line:</b><br/>
          <span style="font-family:'DM Mono',monospace;font-size:11px">
            Safety Harness, 5, pcs<br/>
            Work Gloves 20 pairs<br/>
            Rope (10 rolls)<br/>
            1. Safety Rope x3<br/>
            Carabiner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;pcs
          </span><br/>
          <b style="color:var(--t1)">Quantity column</b> is read automatically from CSV/Excel.
          For plain text, write the number after the name.
        </div>
        <textarea class="imp-textarea" id="impTextArea"
          placeholder="Paste your masterlist here. Examples:

Safety Harness, 5, pcs
Work Gloves, 20, pairs
Rope 50m, 3, rolls
Eye Protection, 10
Carabiner, 8
Descender, 4, pcs
Hard Hat, 15, pcs
Safety Boots, 6, pairs

Or just names (set qty in Step 2):
Safety Harness
Work Gloves
Rope"></textarea>

        <div class="frow">
          <div class="f">
            <label>Default Category</label>
            <select id="impDefCat"></select>
          </div>
          <div class="f">
            <label>Default Location / Project</label>
            <select id="impDefLoc"></select>
          </div>
        </div>

        <button class="btnmain" onclick="parseImportText()" style="font-size:18px">
          🔍 Extract Items
        </button>
      </div>

      <!-- STEP 2: REVIEW -->
      <div class="imp-step" id="impStep2">
        <div class="imp-prog"><div class="imp-prog-bar" id="impProgBar" style="width:50%"></div></div>
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--t1)" id="impFoundLbl">0 items found</div>
          <div style="display:flex;gap:8px">
            <button onclick="impSelectAll(true)" style="background:none;border:none;font-size:12px;font-weight:700;color:#f97316;cursor:pointer">All</button>
            <button onclick="impSelectAll(false)" style="background:none;border:none;font-size:12px;font-weight:700;color:var(--t3);cursor:pointer">None</button>
          </div>
        </div>
        <div id="impReviewList" style="max-height:360px;overflow-y:auto;display:flex;flex-direction:column;gap:0"></div>
        <div style="display:flex;gap:9px">
          <button onclick="goImpStep(1)" style="flex:1;padding:12px;background:var(--inp);border:1.5px solid var(--bd);border-radius:10px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;color:var(--t2);cursor:pointer">← Back</button>
          <button class="btnmain" onclick="confirmImport()" style="flex:2;font-size:17px" id="impConfirmBtn">✅ Add Selected Items</button>
        </div>
      </div>

      <!-- STEP 3: DONE -->
      <div class="imp-step" id="impStep3">
        <div class="imp-prog"><div class="imp-prog-bar" style="width:100%"></div></div>
        <div style="text-align:center;padding:24px 0">
          <div style="font-size:48px;margin-bottom:10px">✅</div>
          <div style="font-family:var(--fh);font-size:26px;font-weight:800;color:var(--t1)" id="impDoneLbl">Items Added!</div>
          <div style="font-size:13px;color:var(--t2);margin-top:6px" id="impDoneSub"></div>
        </div>
        <div style="display:flex;gap:9px">
          <button onclick="goImpStep(1)" style="flex:1;padding:12px;background:var(--inp);border:1.5px solid var(--bd);border-radius:10px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;color:var(--t2);cursor:pointer">Import More</button>
          <button class="btnmain" onclick="closeImporter();switchView('inv')" style="flex:2;font-size:17px">View Inventory →</button>
        </div>
      </div>

    </div>
  </div>
</div>


<!-- CLEAR BORROWERS CONFIRM -->
<div class="delov" id="clearBorOv">
  <div class="delbox">
    <div class="delico"><svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#ef4444" stroke-width="1.8"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg></div>
    <div class="delttl">Clear All Borrows?</div>
    <div class="delmsg">This will mark all active borrows as returned and clear borrow history from all items. Stock levels will NOT change. This cannot be undone.</div>
    <div class="delbtns">
      <button class="delno" onclick="document.getElementById('clearBorOv').classList.remove('on')">Cancel</button>
      <button class="delyes" onclick="confirmClearBorrows()">Clear All</button>
    </div>
  </div>
</div>

<!-- CLEAR DASHBOARD DATA CONFIRM -->
<div class="delov" id="clearDashOv">
  <div class="delbox">
    <div class="delico"><svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#ef4444" stroke-width="1.8"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg></div>
    <div class="delttl">Clear Dashboard Data?</div>
    <div class="delmsg" id="clearDashMsg">Choose what to clear:</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;text-align:left">
      <label style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--inp);border-radius:9px;border:1.5px solid var(--bd);cursor:pointer">
        <input type="checkbox" id="clearStockLog" checked style="width:18px;height:18px;accent-color:#f97316"/>
        <span style="font-size:14px;color:var(--t1)">Stock movement logs (all items)</span>
      </label>
      <label style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--inp);border-radius:9px;border:1.5px solid var(--bd);cursor:pointer">
        <input type="checkbox" id="clearBorHist" style="width:18px;height:18px;accent-color:#f97316"/>
        <span style="font-size:14px;color:var(--t1)">Borrow history (returned items only)</span>
      </label>
      <label style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--inp);border-radius:9px;border:1.5px solid var(--bd);cursor:pointer">
        <input type="checkbox" id="clearIssueHist" style="width:18px;height:18px;accent-color:#f97316"/>
        <span style="font-size:14px;color:var(--t1)">Issuance history (personnel records)</span>
      </label>
    </div>
    <div class="delbtns">
      <button class="delno" onclick="document.getElementById('clearDashOv').classList.remove('on')">Cancel</button>
      <button class="delyes" onclick="confirmClearDash()">Clear Selected</button>
    </div>
  </div>
</div>

<!-- LIGHTBOX -->
<div class="lb" id="lb" onclick="closeLB()">
  <button class="lb-close" onclick="closeLB()">✕</button>
  <img id="lbImg" src="" alt=""/>
  <div class="lb-cap" id="lbCap"></div>
</div>

<!-- RESTORE CONFIRM -->
<div class="delov" id="restoreOv">
  <div class="delbox">
    <div class="delico">☁️</div>
    <div class="delttl">Restore Backup?</div>
    <div class="delmsg" id="restoreMsg"></div>
    <div class="delbtns">
      <button class="delno" onclick="cancelRestore()">Cancel</button>
      <button class="delyes" style="background:#22c55e" onclick="doRestore()">Restore</button>
    </div>
  </div>
</div>

<!-- DELETE -->
<div class="delov" id="delov">
  <div class="delbox">
    <div class="delico">🗑️</div>
    <div class="delttl">Delete Item?</div>
    <div class="delmsg" id="delmsg"></div>
    <div class="delbtns">
      <button class="delno" onclick="closeDelete()">Cancel</button>
      <button class="delyes" onclick="confirmDelete()">Delete</button>
    </div>
  </div>
</div>
<div class="toast" id="toast"></div>

<script>
const IKEY='ws_items_v7',CKEY='ws_cats_v2',LKEY='ws_locs_v1',TKEY='ws_theme';
const DEF_CATS=['Hand Tools','Rope Access','Consumable','Rope','Others','Lifting Tools','P.P.E','Scaffold','Power Tools','Electronic - battery operated device'];
const DEF_LOCS=['Main Warehouse','Site A','Site B','Others'];
let items=[],cats=[],locs=[];
let searchQ='',bulkMode=false,selIds=new Set();
let editId=null,borItemId=null,borListId=null,blTab='a',delId=null;
let curItemImg=null,curBorIdImg=null,sigPad=null;
let curView='inv';

function load(){
  try{items=JSON.parse(localStorage.getItem(IKEY))||[];}catch(e){items=[];}
  try{const c=JSON.parse(localStorage.getItem(CKEY));cats=(Array.isArray(c)&&c.length)?c:[...DEF_CATS];}catch(e){cats=[...DEF_CATS];}
  try{const l=JSON.parse(localStorage.getItem(LKEY));locs=(Array.isArray(l)&&l.length)?l:[...DEF_LOCS];}catch(e){locs=[...DEF_LOCS];}
  items.forEach(i=>{
    if(!i.borrows)i.borrows=[];
    if(!i.history)i.history=[];
    if(!i.stockLog)i.stockLog=[];
    if(!i.hasOwnProperty('location'))i.location='';
    if(!i.hasOwnProperty('pinned'))i.pinned=false;
    if(!i.hasOwnProperty('unitPrice'))i.unitPrice=0;
    if(!i.hasOwnProperty('condition'))i.condition='Good';
    if(!i.hasOwnProperty('supplier'))i.supplier=null;
    if(!i.hasOwnProperty('supplierContact'))i.supplierContact=null;
    if(!i.hasOwnProperty('nextInspection'))i.nextInspection=null;
    if(!i.hasOwnProperty('inspectionLog'))i.inspectionLog=[];
    if(!i.hasOwnProperty('serialNumber'))i.serialNumber=null;
  });
}
function saveItems(){try{localStorage.setItem(IKEY,JSON.stringify(items));}catch(e){toast('⚠ Storage full — remove item photos');}}
const saveCats=()=>localStorage.setItem(CKEY,JSON.stringify(cats));
const saveLocs=()=>localStorage.setItem(LKEY,JSON.stringify(locs));

// THEME
function applyTheme(dark){
  document.documentElement.setAttribute('data-theme',dark?'dark':'light');
  localStorage.setItem(TKEY,dark?'dark':'light');
  // Update profile menu icons if they exist
  const mIco=document.getElementById('themeMenuIco');
  const mLbl=document.getElementById('themeMenuLbl');
  if(mIco)mIco.textContent=dark?'☀️':'🌙';
  if(mLbl)mLbl.textContent=dark?'Switch to Light Mode':'Switch to Dark Mode';
  if(sigPad)sigPad.refreshTheme();
}
function toggleTheme(){applyTheme(document.documentElement.getAttribute('data-theme')!=='dark');}
function loadTheme(){applyTheme(localStorage.getItem(TKEY)==='dark');}
const isDark=()=>document.documentElement.getAttribute('data-theme')==='dark';

// VIEW SWITCHING
function switchView(v){
  curView=v;
  ['inv','brw','dash'].forEach(id=>{
    document.getElementById(id+'View').classList.toggle('on',v===id);
    document.getElementById('nav'+id.charAt(0).toUpperCase()+id.slice(1)).classList.toggle('on',v===id);
  });
  document.getElementById('fab').classList.toggle('off',v!=='inv');
  document.getElementById('srchWrap').style.display=v==='inv'?'':'none';
  document.getElementById('bulkBtn').style.display=v==='inv'?'':'none';
  if(v==='dash')renderDashboard();
  if(v==='brw')renderBorrowers();
}

// HELPERS
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2);
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const totBor=it=>(it.borrows||[]).reduce((s,b)=>s+b.quantity,0);
const avail=it=>Math.max(0,it.quantity-totBor(it));
const isLow=it=>avail(it)<=it.threshold;
const fmt=n=>n.toLocaleString(undefined,{minimumFractionDigits:0,maximumFractionDigits:2});
const fmtDT=iso=>{const d=new Date(iso);return d.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})+' · '+d.toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit'});};
const relDate=iso=>{const d=new Date(iso),now=new Date(),diff=Math.round((now-d)/86400000);if(diff===0)return'Today';if(diff===1)return'Yesterday';if(diff<7)return diff+' days ago';return d.toLocaleDateString(undefined,{month:'short',day:'numeric'});};

function hslBadge(hue){return isDark()?{bg:\`hsl(\${hue},35%,20%)\`,fg:\`hsl(\${hue},55%,72%)\`}:{bg:\`hsl(\${hue},52%,88%)\`,fg:\`hsl(\${hue},45%,28%)\`};}
function catColor(n){let h=5381;for(let i=0;i<n.length;i++)h=((h*33)^n.charCodeAt(i))>>>0;return hslBadge(h%360);}
function locColor(n){let h=7919;for(let i=0;i<n.length;i++)h=((h*31)+n.charCodeAt(i))>>>0;return hslBadge((h%360+160)%360);}
function dotClr(n,b){let h=b===1?5381:7919;for(let i=0;i<n.length;i++)h=((h*(b===1?33:31))+(b===1?(h^n.charCodeAt(i)):n.charCodeAt(i)))>>>0;return\`hsl(\${b===1?h%360:(h%360+160)%360},55%,50%)\`;}

function getOverdueBorrows(){
  const now=new Date();const res=[];
  items.forEach(it=>(it.borrows||[]).forEach(b=>{if(b.dueDate&&new Date(b.dueDate)<now)res.push({...b,itemId:it.id,itemName:it.name,itemUnit:it.unit});}));
  return res;
}

// RENDER INVENTORY
function getList(){const q=searchQ.toLowerCase().trim();if(!q)return items;return items.filter(i=>i.name.toLowerCase().includes(q)||i.category.toLowerCase().includes(q)||(i.location||'').toLowerCase().includes(q));}

function render(){
  renderPinned();
  const list=getList();
  const lowCnt=items.filter(i=>isLow(i)).length;
  const borOut=items.reduce((s,i)=>s+totBor(i),0);
  const odCnt=getOverdueBorrows().length;
  document.getElementById('lpill').textContent=\`⚠ \${lowCnt} LOW\`;
  document.getElementById('lpill').classList.toggle('on',lowCnt>0);
  document.getElementById('stats').classList.toggle('on',items.length>0);
  document.getElementById('sTotal').textContent=list.length;
  document.getElementById('sLow').textContent=lowCnt;
  document.getElementById('sLowC').style.display=lowCnt>0?'flex':'none';
  document.getElementById('sBor').textContent=borOut;
  document.getElementById('sBorC').style.display=borOut>0?'flex':'none';
  const odDot=document.getElementById('odDot');
  if(odDot)odDot.style.display=odCnt>0?'block':'none';
  const qmBadge=document.getElementById('qmOdBadge');
  if(qmBadge){qmBadge.textContent=odCnt>0?odCnt+' overdue':'';qmBadge.style.display=odCnt>0?'inline':'none';}
  const dashOdB=document.getElementById('dashOdBadge');
  if(dashOdB){dashOdB.textContent=odCnt;dashOdB.classList.toggle('on',odCnt>0);}
  const brwOdBNav=document.getElementById('brwOdBadge');
  if(brwOdBNav){brwOdBNav.textContent=odCnt;brwOdBNav.classList.toggle('on',odCnt>0);}
  const el=document.getElementById('emptyEl'),il=document.getElementById('itemList');
  if(list.length===0){il.innerHTML='';el.classList.add('on');
    document.getElementById('emptyT').textContent=items.length===0?'No Items Yet':'No Results';
    document.getElementById('emptyS').textContent=items.length===0?'Tap the orange + to add your first item.':\`Nothing matched "\${searchQ}".\`;return;}
  el.classList.remove('on');
  const sorted=[...list].sort((a,b)=>{if(isLow(a)!==isLow(b))return isLow(a)?-1:1;if(a.pinned!==b.pinned)return a.pinned?-1:1;return a.name.localeCompare(b.name);});
  // Group by category
  const catGroups={};
  sorted.forEach(item=>{
    if(!catGroups[item.category])catGroups[item.category]=[];
    catGroups[item.category].push(item);
  });
  const catOrder=Object.keys(catGroups).sort((a,b)=>{
    const aLow=catGroups[a].some(i=>isLow(i));
    const bLow=catGroups[b].some(i=>isLow(i));
    if(aLow!==bLow)return aLow?-1:1;
    return a.localeCompare(b);
  });
  const collapsedCats=JSON.parse(localStorage.getItem('ws_cat_collapsed')||'[]');
  il.innerHTML=catOrder.map(cat=>{
    const grpItems=catGroups[cat];
    const isCollapsed=collapsedCats.includes(cat);
    const hasLow=grpItems.some(i=>isLow(i));
    const cc=catColor(cat);
    const totalQty=grpItems.reduce((s,i)=>s+avail(i),0);
    const catId='cg'+cat.replace(/[^a-zA-Z0-9]/g,'').slice(0,14);
    return\`<div class="cat-group">
      <div class="cat-group-hdr" onclick="toggleCatGroup('\${catId}')">
        <div class="cat-group-left">
          <div class="cat-group-dot" style="background:\${cc.fg}"></div>
          <div class="cat-group-name" style="color:\${hasLow?'#ef4444':'var(--t2)'}">\${esc(cat)}</div>
          <div class="cat-group-count">\${grpItems.length} item\${grpItems.length!==1?'s':''} · \${totalQty} in stock</div>
        </div>
        <div class="cat-group-arr \${isCollapsed?'':'open'}" id="arr-\${catId}">▼</div>
      </div>
      <div class="cat-group-items" id="items-\${catId}" style="\${isCollapsed?'display:none':'display:flex'}">
        \${grpItems.map(cardHTML).join('')}
      </div>
    </div>\`;
  }).join('');
  // Attach swipe listeners after render
  setTimeout(()=>attachSwipeListeners(),50);
}

function renderPinned(){
  const pinned=items.filter(i=>i.pinned);
  document.getElementById('pinnedWrap').classList.toggle('on',pinned.length>0);
  if(!pinned.length)return;
  document.getElementById('pinnedScroll').innerHTML=pinned.map(item=>{
    const av=avail(item),low=isLow(item),cc=catColor(item.category);
    const img=item.image?\`<img class="pin-img" src="\${item.image}" alt=""/>\`:'';
    return\`<div class="pin-card\${low?' low':''}" onclick="scrollToCard('\${item.id}')">
      \${img}<button class="pin-star" onclick="event.stopPropagation();togglePin('\${item.id}')">★</button>
      <div class="pin-name">\${esc(item.name)}</div>
      <span class="pin-badge" style="background:\${cc.bg};color:\${cc.fg}">\${esc(item.category)}</span>
      <div class="pin-qty">\${av}</div><div class="pin-unit">\${esc(item.unit)}</div>
      <div class="pin-btns">
        <button class="pin-btn use" onclick="event.stopPropagation();adj('\${item.id}',-1)" \${av<=0?'disabled':''}>−</button>
        <button class="pin-btn rst" onclick="event.stopPropagation();adj('\${item.id}',+1)">+</button>
      </div></div>\`;
  }).join('');
}

function cardHTML(item){
  const av=avail(item),bt=totBor(item),bc=(item.borrows||[]).length,low=isLow(item),sel=selIds.has(item.id);
  const cc=catColor(item.category),lc=item.location?locColor(item.location):null;
  const img=item.image?\`<img class="cimg" src="\${item.image}" alt="\${esc(item.name)}" loading="lazy"/>\`:'';
  const locB=lc?\`<span class="badge" style="background:\${lc.bg};color:\${lc.fg}">📍 \${esc(item.location)}</span>\`:'';
  const condCls={'New':'cond-new','Good':'cond-good','Fair':'cond-fair','Poor':'cond-poor','Condemned':'cond-condemned'}[item.condition]||'cond-good';
  const condB=item.condition&&item.condition!=='Good'?\`<span class="badge \${condCls}">\${item.condition}</span>\`:'';
  const inspB=item.nextInspection&&new Date(item.nextInspection)<new Date()?'<span class="badge cond-poor">🔍 Inspect Now</span>':(item.nextInspection&&(new Date(item.nextInspection)-new Date())<7*86400000?'<span class="badge cond-fair">🔍 Inspect Soon</span>':'');
  const supplB=item.supplier?\`<span class="supp-badge" onclick="event.stopPropagation();callSupplier('\${item.id}')">📦 \${esc(item.supplier)}</span>\`:''
  const serialB=item.serialNumber?\`<span class="badge" style="background:var(--inp);border:1px solid var(--bd2);color:var(--t3);font-family:'DM Mono',monospace">#\${esc(item.serialNumber)}</span>\`:'';
  const borSub=bt>0?\`<div class="qsub">\${item.quantity} total · <span>\${bt} borrowed</span></div>\`:'';
  const borCntB=bc>0?\`<button class="bcnt bor on" onclick="event.stopPropagation();openBorList('\${item.id}','a')">📋 \${bc} active</button>\`:'';
  const logBtn=(item.stockLog&&item.stockLog.length>0)?\`<button class="bcnt log on" onclick="event.stopPropagation();openBorList('\${item.id}','s')">📈 Log</button>\`:'';
  return\`<div class="swipe-wrap" id="sw-\${item.id}"><div class="swipe-reveal left"><div class="swipe-reveal-ico">📋</div><div class="swipe-reveal-lbl">Borrow</div></div><div class="swipe-reveal right"><div class="swipe-reveal-ico">📦</div><div class="swipe-reveal-lbl">Issue</div></div><div class="swipe-card card\${low?' low':''}\${item.pinned?' pinned':''}\${sel?' sel':''} \${condBorderCls}" id="c-\${item.id}" onclick="cardTap('\${item.id}')" ontouchstart="swipeStart(event,'\${item.id}')" ontouchmove="swipeMove(event,'\${item.id}')" ontouchend="swipeEnd(event,'\${item.id}')">
  <div class="cchk"><svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#fff" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>
  \${img}
  <div class="ctop">
    <div class="cmeta"><div class="cname">\${esc(item.name)}</div>
      <div class="badges"><span class="badge" style="background:\${cc.bg};color:\${cc.fg}">\${esc(item.category)}</span>\${locB}\${condB}\${inspB}\${supplB}\${serialB}</div>
    </div>
    <div class="cacts">
      <button class="ibtn star\${item.pinned?' on':''}" onclick="event.stopPropagation();togglePin('\${item.id}')">\${item.pinned?'★':'☆'}</button>
      <button class="ibtn" onclick="event.stopPropagation();openEdit('\${item.id}')"><svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
      <button class="ibtn del" onclick="event.stopPropagation();openDelete('\${item.id}')"><svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg></button>
    </div>
  </div>
  <div class="cdiv"></div>
  <div class="cqty">
    <button class="qb use" onclick="event.stopPropagation();adj('\${item.id}',-1)" \${av<=0?'disabled':''}>−</button>
    <div class="qmid"><div class="qnum" id="qn-\${item.id}">\${av}</div><div class="qunit">\${esc(item.unit)}</div>\${borSub}<div class="qwarn">⚠ Low · min \${item.threshold}</div></div>
    <button class="qb rst" onclick="event.stopPropagation();adj('\${item.id}',+1)">+</button>
  </div>
  <div class="cbrow">
    <button class="bbtn" onclick="event.stopPropagation();openBorrow('\${item.id}')"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Borrow</button>
    \${borCntB}\${logBtn}<button class="issue-btn" onclick="event.stopPropagation();openIssue('\${item.id}')">📋 Issue</button><button class="qr-btn" onclick="event.stopPropagation();openQR('\${item.id}')"><svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="5" height="5"/><rect x="16" y="3" width="5" height="5"/><rect x="3" y="16" width="5" height="5"/><line x1="16" y1="16" x2="21" y2="16"/><line x1="16" y1="19" x2="21" y2="19"/><line x1="19" y1="16" x2="19" y2="21"/></svg>QR</button><button class="bcnt on" style="background:var(--rbg);border:1.5px solid var(--rbd);color:#ef4444" onclick="event.stopPropagation();openDmg('\${item.id}')">⚠ Dmg</button>
    </div></div></div>\`;
}

function scrollToCard(id){const el=document.getElementById(\`c-\${id}\`);if(el)el.scrollIntoView({behavior:'smooth',block:'center'});}

// DASHBOARD
function renderDashboard(){renderConsumablesByProject();
  const lowItems=items.filter(i=>isLow(i));
  const odBorrows=getOverdueBorrows();
  const totalOut=items.reduce((s,i)=>s+totBor(i),0);
  const priced=items.filter(i=>i.unitPrice>0);
  const totalVal=priced.reduce((s,i)=>s+(i.quantity*(i.unitPrice||0)),0);

  const totalAvail=items.reduce((s,i)=>s+avail(i),0);
  document.getElementById('dTotal').textContent=items.length;
  document.getElementById('dTotalSub').textContent=\`\${items.filter(i=>i.quantity>0).length} in stock\`;
  document.getElementById('dLow').textContent=lowItems.length;
  document.getElementById('dBorOut').textContent=totalOut;
  document.getElementById('dBorSub').textContent=\`\${items.filter(i=>totBor(i)>0).length} items\`;
  const availEl=document.getElementById('dAvail');
  if(availEl)availEl.textContent=totalAvail;
  const availSub=document.getElementById('dAvailSub');
  if(availSub)availSub.textContent=\`across \${items.filter(i=>avail(i)>0).length} items\`;

  if(priced.length>0){
    document.getElementById('dValue').textContent='₱'+fmt(totalVal);
    document.getElementById('dValueSub').textContent=\`from \${priced.length} priced items\`;
  } else {
    document.getElementById('dValue').textContent='—';
    document.getElementById('dValueSub').textContent='Add unit prices to track value';
  }

  // Overdue
  const odSec=document.getElementById('odSection');
  odSec.style.display=odBorrows.length>0?'':'none';
  if(odBorrows.length>0){
    const now=new Date();
    document.getElementById('odList').innerHTML=odBorrows.slice(0,5).map(b=>{
      const days=Math.floor((now-new Date(b.dueDate))/86400000);
      return\`<div class="od-entry">
        <div class="od-days">\${days}d</div>
        <div class="od-info"><div class="od-item">📦 \${esc(b.itemName)}</div><div class="od-who">👤 \${esc(b.borrower)} · 📍 \${esc(b.project)}</div></div>
      </div>\`;
    }).join('');
  }

  // Chart
  renderChart();

  // Low stock
  const lowSec=document.getElementById('lowSection');
  lowSec.style.display=lowItems.length>0?'':'none';
  if(lowItems.length>0){
    document.getElementById('lowList').innerHTML=lowItems.map(it=>\`
      <div class="low-row">
        <div class="low-info" style="flex:1;min-width:0">
          <div class="low-name">\${esc(it.name)}</div>
          <div class="low-meta">\${esc(it.category)}\${it.location?' · '+esc(it.location):''}</div>
        </div>
        <div style="text-align:right">
          <div class="low-qty">\${avail(it)} \${esc(it.unit)}</div>
          <div class="low-meta">min \${it.threshold}</div>
        </div>
        <button class="reorder-btn" onclick="openReorderFor('\${it.id}')">Request</button>
      </div>\`).join('');
  }

  // Value by category
  const valSec=document.getElementById('valSection');
  const catVal={};
  priced.forEach(it=>{if(!catVal[it.category])catVal[it.category]=0;catVal[it.category]+=it.quantity*(it.unitPrice||0);});
  const catEntries=Object.entries(catVal).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]);
  valSec.style.display=catEntries.length>0?'':'none';
  if(catEntries.length>0){
    document.getElementById('valList').innerHTML=catEntries.map(([cat,val])=>{
      const cc=catColor(cat);
      return\`<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:var(--card);border:1.5px solid var(--bd);border-radius:10px;margin-bottom:7px">
        <span class="badge" style="background:\${cc.bg};color:\${cc.fg}">\${esc(cat)}</span>
        <div style="flex:1"></div>
        <div style="font-family:var(--fh);font-size:18px;font-weight:800;color:var(--t1)">₱\${fmt(val)}</div>
      </div>\`;
    }).join('');
  }
}

function renderChart(){
  const days=[];
  for(let i=6;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);d.setHours(0,0,0,0);
    const dateStr=d.toDateString();
    const lbl=d.toLocaleDateString(undefined,{weekday:'short'});
    let rst=0,use=0;
    items.forEach(it=>(it.stockLog||[]).forEach(e=>{if(new Date(e.timestamp).toDateString()===dateStr){if(e.type==='restock')rst+=e.delta;else use+=e.delta;}}));
    days.push({lbl,rst,use});
  }
  const maxV=Math.max(...days.map(d=>Math.max(d.rst,d.use)),1);
  const W=320,H=120,PL=6,PB=22,PT=6,PR=6;
  const cW=W-PL-PR,cH=H-PB-PT;
  const bGrp=cW/7;const bW=bGrp*0.28;
  let bars='',hasData=false;
  days.forEach((d,i)=>{
    const x=PL+i*bGrp+bGrp*0.08;
    if(d.rst>0){hasData=true;const h=Math.max((d.rst/maxV)*cH,2);bars+=\`<rect x="\${x}" y="\${PT+cH-h}" width="\${bW}" height="\${h}" fill="#22c55e" rx="2"/>\`;}
    if(d.use>0){hasData=true;const h=Math.max((d.use/maxV)*cH,2);bars+=\`<rect x="\${x+bW+2}" y="\${PT+cH-h}" width="\${bW}" height="\${h}" fill="#f97316" rx="2"/>\`;}
    bars+=\`<text x="\${x+bGrp*0.3}" y="\${H-5}" text-anchor="middle" font-size="9" fill="var(--t3)" font-family="DM Sans,sans-serif">\${d.lbl}</text>\`;
    if(d.rst>0||d.use>0){
      const maxH=(Math.max(d.rst,d.use)/maxV)*cH;
      const valStr=d.rst>0&&d.use>0?\`+\${d.rst}/-\${d.use}\`:d.rst>0?\`+\${d.rst}\`:\`-\${d.use}\`;
      bars+=\`<text x="\${x+bGrp*0.3}" y="\${PT+cH-maxH-3}" text-anchor="middle" font-size="8" fill="var(--t2)" font-family="DM Mono,monospace">\${valStr}</text>\`;
    }
  });
  const chartSVG=\`<svg viewBox="0 0 \${W} \${H}" width="100%" style="overflow:visible">
    \${bars}
    <line x1="\${PL}" y1="\${PT+cH}" x2="\${W-PR}" y2="\${PT+cH}" stroke="var(--bd)" stroke-width="1"/>
  </svg>\`;
  document.getElementById('chartWrap').innerHTML=hasData?chartSVG:'<div class="chart-empty">No stock movements yet.<br><small>Use + / − on items to track usage</small></div>';
}

// PIN
function togglePin(id){const it=items.find(i=>i.id===id);if(!it)return;it.pinned=!it.pinned;saveItems();render();toast(it.pinned?\`⭐ "\${it.name}" pinned to Quick Access\`:\`"\${it.name}" unpinned\`);}

// QTY
function adj(id,d){
  const it=items.find(i=>i.id===id);if(!it)return;
  const before=it.quantity;it.quantity=Math.max(0,it.quantity+d);
  const actual=it.quantity-before;if(actual===0)return;
  if(!it.stockLog)it.stockLog=[];
  it.stockLog.unshift({type:actual>0?'restock':'use',delta:Math.abs(actual),before:before,after:it.quantity,timestamp:new Date().toISOString()});
  saveItems();render();
  const el=document.getElementById(\`qn-\${id}\`);
  if(el){el.classList.add('bump');setTimeout(()=>el.classList.remove('bump'),180);}
  toast(\`\${d>0?'Restocked':'Used'}: \${it.name} → \${avail(it)} \${it.unit} available\`);
}

// SEARCH
// search listener is in auto-suggest block
function clearSrch(){searchQ='';document.getElementById('srch').value='';document.getElementById('srchClr').classList.remove('on');render();}

// BULK
function toggleBulk(){
  bulkMode=!bulkMode;selIds.clear();
  document.getElementById('bulkBtn').classList.toggle('on',bulkMode);
  document.getElementById('bkbar').classList.toggle('on',bulkMode);
  document.getElementById('fab').classList.toggle('off',bulkMode||curView!=='inv');
  document.getElementById('itemList').classList.toggle('bkon',bulkMode);
  if(!bulkMode)document.getElementById('bkinp').value='';
  updBk();render();
}
function cardTap(id){if(!bulkMode)return;selIds.has(id)?selIds.delete(id):selIds.add(id);updBk();render();}
function selAll(){const fl=getList();if(selIds.size===fl.length)selIds.clear();else fl.forEach(i=>selIds.add(i.id));updBk();render();}
function updBk(){const n=selIds.size;document.getElementById('bkcnt').textContent=\`\${n} selected\`;document.getElementById('bkallbtn').textContent=(n>0&&n===getList().length)?'Deselect All':'Select All';}
function applyBulk(){
  if(selIds.size===0){toast('Select at least one item');return;}
  const v=parseInt(document.getElementById('bkinp').value);
  if(isNaN(v)||v<0){toast('Enter a valid quantity');return;}
  selIds.forEach(id=>{const it=items.find(i=>i.id===id);if(it)it.quantity=v;});
  saveItems();toast(\`Set quantity to \${v} for \${selIds.size} item(s)\`);selIds.clear();document.getElementById('bkinp').value='';updBk();render();
}

// ITEM MODAL
function fillSel(elId,arr,sel,first){const el=document.getElementById(elId);let opts=arr.map(v=>\`<option value="\${esc(v)}"\${v===sel?' selected':''}>\${esc(v)}</option>\`).join('');if(first)opts=\`<option value=""\${!sel?' selected':''}>\${first}</option>\`+opts;el.innerHTML=opts;}
function openAdd(){
  editId=null;curItemImg=null;
  document.getElementById('itemTitle').textContent='Add Item';document.getElementById('itemSub').textContent='ADD ITEM';
  ['fName','fQty','fPrice'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('fUnit').value='pcs';document.getElementById('fThresh').value='5';
  fillSel('fCat',cats,cats[0]);fillSel('fLoc',locs,'','— None —');
  resetItemImg();clearIErr();show('itemOv');
  setTimeout(()=>document.getElementById('fName').focus(),340);
}
function openEdit(id){
  const it=items.find(i=>i.id===id);if(!it)return;
  editId=id;curItemImg=it.image||null;
  document.getElementById('itemTitle').textContent='Edit Item';document.getElementById('itemSub').textContent='SAVE CHANGES';
  document.getElementById('fName').value=it.name;document.getElementById('fQty').value=it.quantity;
  document.getElementById('fUnit').value=it.unit;document.getElementById('fThresh').value=it.threshold;
  document.getElementById('fPrice').value=it.unitPrice||'';
  document.getElementById('fCond').value=it.condition||'Good';
  if(document.getElementById('fSerial'))document.getElementById('fSerial').value=it.serialNumber||'';
  document.getElementById('fInspDate').value=it.nextInspection||'';
  document.getElementById('fSupplier').value=it.supplier||'';
  document.getElementById('fSupplierContact').value=it.supplierContact||'';
  fillSel('fCat',cats,it.category);fillSel('fLoc',locs,it.location||'','— None —');
  clearIErr();
  if(it.image){document.getElementById('itemImgPrev').src=it.image;setItemImg(true);}else resetItemImg();
  show('itemOv');
}
function closeItem(){hide('itemOv');editId=null;}
function clearIErr(){['fName','fQty'].forEach(id=>document.getElementById(id).classList.remove('err'));['errName','errQty'].forEach(id=>document.getElementById(id).classList.remove('on'));}
function submitItem(){
  clearIErr();
  const name=document.getElementById('fName').value.trim();
  const qr=document.getElementById('fQty').value.trim();const qty=parseInt(qr);
  let ok=true;
  if(!name){document.getElementById('fName').classList.add('err');document.getElementById('errName').classList.add('on');ok=false;}
  if(qr===''||isNaN(qty)||qty<0){document.getElementById('fQty').classList.add('err');document.getElementById('errQty').classList.add('on');ok=false;}
  if(!ok)return;
  const price=parseFloat(document.getElementById('fPrice').value)||0;
  const cond=document.getElementById('fCond').value;
  const inspDate=document.getElementById('fInspDate').value||null;
  const supplier=document.getElementById('fSupplier').value.trim()||null;
  const supplierContact=document.getElementById('fSupplierContact').value.trim()||null;
  const serial=document.getElementById('fSerial')?.value.trim()||null;
  const data={name,category:document.getElementById('fCat').value,location:document.getElementById('fLoc').value||'',quantity:qty,unit:document.getElementById('fUnit').value,threshold:Math.max(0,parseInt(document.getElementById('fThresh').value)||5),unitPrice:price,image:curItemImg||null,condition:cond,nextInspection:inspDate,supplier,supplierContact,serialNumber:serial,inspectionLog:[]};
  if(editId){const idx=items.findIndex(i=>i.id===editId);if(idx!==-1)items[idx]={...items[idx],...data};toast(\`"\${name}" updated ✓\`);}
  else{const newItem={id:uid(),borrows:[],history:[],stockLog:[],pinned:false,condition:'Good',...data};items.unshift(newItem);toast(\`"\${name}" added ✓\`);}
  saveItems();render();closeItem();
}

// IMAGE
async function handleItemImg(e){const file=e.target.files[0];if(!file)return;try{curItemImg=await compress(file,680,.72);document.getElementById('itemImgPrev').src=curItemImg;setItemImg(true);}catch(err){toast('Could not load image');}e.target.value='';}
function removeItemImg(e){if(e){e.preventDefault();e.stopPropagation();}curItemImg=null;resetItemImg();}
function setItemImg(on){document.getElementById('itemImgPrev').classList.toggle('on',on);document.getElementById('itemImgPh').classList.toggle('off',on);document.getElementById('itemImgRm').classList.toggle('on',on);document.getElementById('itemGalleryBtn').classList.toggle('off',on);}
function resetItemImg(){setItemImg(false);document.getElementById('itemImgPrev').src='';}
async function handleBorId(e){const file=e.target.files[0];if(!file)return;try{curBorIdImg=await compress(file,800,.8);document.getElementById('borIdPrev').src=curBorIdImg;setBorId(true);}catch(err){toast('Could not load image');}e.target.value='';}
function removeBorId(e){if(e){e.preventDefault();e.stopPropagation();}curBorIdImg=null;resetBorId();}
function setBorId(on){document.getElementById('borIdPrev').classList.toggle('on',on);document.getElementById('borIdPh').classList.toggle('off',on);document.getElementById('borIdRm').classList.toggle('on',on);document.getElementById('borGalleryBtn').classList.toggle('off',on);}
function resetBorId(){setBorId(false);document.getElementById('borIdPrev').src='';}
function compress(file,maxW,q){return new Promise((res,rej)=>{const r=new FileReader();r.onerror=rej;r.onload=e=>{const img=new Image();img.onerror=rej;img.onload=()=>{const s=Math.min(1,maxW/img.width),w=Math.round(img.width*s),h=Math.round(img.height*s);const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);res(c.toDataURL('image/jpeg',q));};img.src=e.target.result;};r.readAsDataURL(file);});}

// SIGNATURE
function initSigPad(){
  const canvas=document.getElementById('sigCanvas');
  if(!canvas)return;
  if(sigPad){sigPad.clear();sigPad.refreshTheme();return;}
  canvas.width=560;canvas.height=150;
  const ctx=canvas.getContext('2d');let drawing=false,hasMark=false;
  function setStyle(){ctx.strokeStyle=isDark()?'#cbd5e1':'#0f172a';ctx.lineWidth=3;ctx.lineCap='round';ctx.lineJoin='round';}
  setStyle();
  function getXY(e){const r=canvas.getBoundingClientRect();const sx=canvas.width/r.width,sy=canvas.height/r.height;const src=e.touches?e.touches[0]:e;return{x:(src.clientX-r.left)*sx,y:(src.clientY-r.top)*sy};}
  canvas.addEventListener('touchstart',e=>{e.preventDefault();drawing=true;const p=getXY(e);ctx.beginPath();ctx.moveTo(p.x,p.y);},{passive:false});
  canvas.addEventListener('touchmove',e=>{if(!drawing)return;e.preventDefault();const p=getXY(e);ctx.lineTo(p.x,p.y);ctx.stroke();hasMark=true;},{passive:false});
  canvas.addEventListener('touchend',()=>{drawing=false;});
  canvas.addEventListener('mousedown',e=>{drawing=true;const p=getXY(e);ctx.beginPath();ctx.moveTo(p.x,p.y);});
  canvas.addEventListener('mousemove',e=>{if(!drawing)return;const p=getXY(e);ctx.lineTo(p.x,p.y);ctx.stroke();hasMark=true;});
  canvas.addEventListener('mouseup',()=>{drawing=false;});
  sigPad={clear(){ctx.clearRect(0,0,canvas.width,canvas.height);hasMark=false;setStyle();},isEmpty(){return!hasMark;},toURL(){return hasMark?canvas.toDataURL('image/png'):null;},refreshTheme(){setStyle();}};
}
function clearSig(){if(sigPad)sigPad.clear();}

// BORROW
function openBorrow(id){
  const it=items.find(i=>i.id===id);if(!it)return;
  borItemId=id;curBorIdImg=null;
  document.getElementById('borTitle').textContent=\`Borrow: \${it.name}\`;
  document.getElementById('bName').value='';document.getElementById('bProj').value=it.location||'';
  document.getElementById('bQty').value='1';document.getElementById('bDue').value='';document.getElementById('bNote').value='';
  document.getElementById('availbox').innerHTML=\`<b>\${avail(it)} \${it.unit}</b> available &nbsp;·&nbsp; \${totBor(it)} \${it.unit} already borrowed\`;
  document.getElementById('sigErr').classList.remove('on');
  resetBorId();clearBErr();show('borOv');
  setTimeout(()=>{document.getElementById('bName').focus();initSigPad();},340);
}
function closeBorrow(){hide('borOv');borItemId=null;}
function clearBErr(){['bName','bProj','bQty'].forEach(id=>document.getElementById(id).classList.remove('err'));['errBN','errBP','errBQ'].forEach(id=>document.getElementById(id).classList.remove('on'));}
function submitBorrow(){
  clearBErr();document.getElementById('sigErr').classList.remove('on');
  const nm=document.getElementById('bName').value.trim();
  const pr=document.getElementById('bProj').value.trim();
  const qty=parseInt(document.getElementById('bQty').value);
  const it=items.find(i=>i.id===borItemId);const av=it?avail(it):0;
  let ok=true;
  if(!nm){document.getElementById('bName').classList.add('err');document.getElementById('errBN').classList.add('on');ok=false;}
  if(!pr){document.getElementById('bProj').classList.add('err');document.getElementById('errBP').classList.add('on');ok=false;}
  if(!qty||qty<1||qty>av){document.getElementById('bQty').classList.add('err');document.getElementById('errBQ').textContent=qty>av?\`Max available: \${av}\`:'Enter a valid amount';document.getElementById('errBQ').classList.add('on');ok=false;}
  if(sigPad&&sigPad.isEmpty()){document.getElementById('sigErr').classList.add('on');ok=false;}
  if(!ok)return;
  const sigURL=sigPad?sigPad.toURL():null;
  const ts=new Date().toISOString();
  const borRec={id:uid(),borrower:nm,project:pr,quantity:qty,unit:it.unit,date:ts,dueDate:document.getElementById('bDue').value||null,note:document.getElementById('bNote').value.trim()||null,idImage:curBorIdImg||null,signature:sigURL};
  it.borrows.push(borRec);
  if(!it.history)it.history=[];
  it.history.unshift({type:'borrowed',borrower:nm,project:pr,quantity:qty,unit:it.unit,timestamp:ts,note:borRec.note,idImage:borRec.idImage,signature:sigURL,borrowId:borRec.id});
  saveItems();render();closeBorrow();
  toast(\`📤 \${qty} \${it.unit} borrowed by \${nm}\`);
}

// BORROW LIST
function openBorList(id,startTab){
  borListId=id;blTab=startTab||'a';
  const it=items.find(i=>i.id===id);if(!it)return;
  document.getElementById('borListTitle').textContent=it.name;
  swBLTab(blTab);show('borListOv');
}
function closeBorList(){hide('borListOv');borListId=null;}
function swBLTab(t){
  blTab=t;
  ['a','h','s'].forEach(x=>{document.getElementById(\`blTab\${x.toUpperCase()}\`).classList.toggle('on',t===x);document.getElementById(\`bl\${x==='a'?'Active':x==='h'?'Hist':'Stock'}Panel\`).style.display=t===x?'':'none';});
  if(t==='a')renderBLActive();else if(t==='h')renderBLHist();else renderBLStock();
}
function renderBLActive(){
  const it=items.find(i=>i.id===borListId);
  const el=document.getElementById('blActivePanel');
  if(!it||(it.borrows||[]).length===0){el.innerHTML='<div class="norows">No active borrows.</div>';return;}
  el.innerHTML=\`<div style="display:flex;flex-direction:column;gap:10px">\${it.borrows.map(b=>beHTML(b,it,false)).join('')}</div>\`;
}
function renderBLHist(){
  const it=items.find(i=>i.id===borListId);
  const el=document.getElementById('blHistPanel');
  if(!it||(it.history||[]).length===0){el.innerHTML='<div class="norows">No history yet.</div>';return;}
  el.innerHTML=\`<div class="tl">\${it.history.map(h=>tlHTML(h)).join('')}</div>\`;
}
function renderBLStock(){
  const it=items.find(i=>i.id===borListId);
  const el=document.getElementById('blStockPanel');
  if(!it||(it.stockLog||[]).length===0){el.innerHTML='<div class="norows">No stock movements yet.<br><small style="color:var(--t3)">Use + / − buttons to track restocks and usage</small></div>';return;}
  const byDay={};
  it.stockLog.forEach(e=>{const d=new Date(e.timestamp).toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric',year:'numeric'});if(!byDay[d])byDay[d]=[];byDay[d].push(e);});
  let html='';
  Object.entries(byDay).forEach(([day,entries])=>{
    const added=entries.filter(e=>e.type==='restock').reduce((s,e)=>s+e.delta,0);
    const used=entries.filter(e=>e.type==='use').reduce((s,e)=>s+e.delta,0);
    const sumParts=[];
    if(added>0)sumParts.push(\`<span style="color:#22c55e">+\${added}</span> added\`);
    if(used>0)sumParts.push(\`<span style="color:#f97316">−\${used}</span> used\`);
    html+=\`<div class="sl-day">
      <div class="sl-day-hdr"><div class="sl-day-lbl">📅 \${day}</div><div class="sl-day-sum">\${sumParts.join(' &nbsp; ')}</div></div>
      \${entries.map(e=>{const isRst=e.type==='restock';const time=new Date(e.timestamp).toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit'});
        const label=isRst?'Restocked':(e.issuedTo?'Issued':'Used');
        const subLabel=e.issuedTo?\`<div style="font-size:11px;color:var(--t3);margin-top:1px">👤 \${esc(e.issuedTo)}</div>\`:'';
        return\`<div class="sl-row"><div class="sl-dot \${isRst?'rst':'use'}"></div>
          <div class="sl-info"><div class="sl-type \${isRst?'rst':'use'}">\${label}</div>
          \${subLabel}
          <div class="sl-bef-aft">\${e.before} → \${e.after} \${esc(it.unit)}</div></div>
          <div class="sl-time">\${time}</div><div class="sl-delta \${isRst?'rst':'use'}">\${isRst?'+':'−'}\${e.delta}</div></div>\`;}).join('')}
    </div>\`;
  });
  el.innerHTML=html;
}

// ALL BORROWS
function openAllBorrows(){renderAllBor();show('allBorOv');}
function closeAllBorrows(){hide('allBorOv');}
function renderAllBor(){
  const el=document.getElementById('allBorBody');
  const all=[];items.forEach(it=>(it.borrows||[]).forEach(b=>all.push({...b,itemId:it.id,itemName:it.name,itemUnit:it.unit})));
  if(all.length===0){el.innerHTML='<div class="norows">🎉 No items currently borrowed.</div>';return;}
  const byProj={};all.forEach(b=>{if(!byProj[b.project])byProj[b.project]=[];byProj[b.project].push(b);});
  let html='';
  Object.entries(byProj).forEach(([proj,rows])=>{
    html+=\`<div style="margin-bottom:16px"><div class="seclbl" style="margin-bottom:8px">📍 \${esc(proj)}</div>
    <div style="display:flex;flex-direction:column;gap:9px">
    \${rows.map(b=>{const it=items.find(i=>i.id===b.itemId)||{unit:'pcs'};return beHTML(b,it,true);}).join('')}</div></div>\`;
  });
  el.innerHTML=html;
}

function beHTML(b,item,isAll){
  const overdue=b.dueDate&&new Date(b.dueDate)<new Date();
  const dueTag=b.dueDate?\`<span class="betag\${overdue?' over':''}">🕐 Due \${new Date(b.dueDate).toLocaleDateString(undefined,{month:'short',day:'numeric'})}\${overdue?' ⚠':''}</span>\`:'';
  const projLine=!isAll?\`<div class="beproj">📍 \${esc(b.project)}</div>\`:'';
  const itemLine=isAll?\`<div style="font-size:12px;color:var(--t3);margin-top:1px">📦 \${esc(item.name||'')}</div>\`:'';
  const retFn=isAll?\`retAll('\${item.id||b.itemId}','\${b.id}')\`:\`retItem('\${item.id}','\${b.id}')\`;
  const hasId=!!b.idImage,hasSig=!!b.signature;
  let mediaHTML='';
  if(hasId||hasSig){
    let thumbs='';
    if(hasId)thumbs+=\`<img class="be-idthumb" src="\${b.idImage}" alt="ID" onclick="viewLBDir('\${b.idImage}','🪪 ID – \${esc(b.borrower)}')"/>\`;
    if(hasSig)thumbs+=\`<img class="be-sigthumb" src="\${b.signature}" alt="Sig" onclick="viewLBDir('\${b.signature}','✍ Sig – \${esc(b.borrower)}')"/>\`;
    let lbl=hasId&&hasSig?'<b>🪪 ID + ✍ Signature</b>':hasId?'<b>🪪 ID on file</b>':'<b>✍ Signature on file</b>';
    mediaHTML=\`<div class="be-media">\${thumbs}<div class="be-medialbl">\${lbl}<span style="color:var(--t3)">Tap to view</span></div></div>\`;
  }
  return\`<div class="be" id="be-\${b.id}">
    <div class="betop"><div><div class="bewho">👤 \${esc(b.borrower)}</div>\${projLine}\${itemLine}</div><div class="beqty">\${b.quantity} \${esc(b.unit||item.unit||'pcs')}</div></div>
    \${mediaHTML}
    <div class="betags"><span class="betag dt">📅 \${fmtDT(b.date)}</span>\${dueTag}</div>
    \${b.note?\`<div class="benote">"\${esc(b.note)}"</div>\`:''}
    <div class="beacts">
      <input class="retinp" id="ri-\${b.id}" type="number" min="1" max="\${b.quantity}" value="\${b.quantity}" inputmode="numeric"/>
      <button class="retbtn" onclick="\${retFn}">↩ Return</button>
    </div></div>\`;
}

function tlHTML(h){
  const isBor=h.type==='borrowed';
  const isIssued=h.type==='issued';
  const dotCls=isBor?'bor':isIssued?'iss':'ret';
  const icon=isBor?'📤':isIssued?'📋':'↩';
  const label=isBor?'BORROWED':isIssued?'ISSUED':'RETURNED';
  const labelCls=isBor?'bor':isIssued?'iss':'ret';
  const imgs=[];
  if(h.idImage)imgs.push(\`<img class="tl-img" src="\${h.idImage}" onclick="viewLBDir('\${h.idImage}','🪪 ID – \${esc(h.borrower)}')"/>\`);
  if(h.signature)imgs.push(\`<img class="tl-sig" src="\${h.signature}" onclick="viewLBDir('\${h.signature}','✍ Sig – \${esc(h.borrower)}')"/>\`);
  return\`<div class="tl-entry">
    <div class="tl-dot \${dotCls}">\${icon}</div>
    <div class="tl-body">
      <div class="tl-hdr"><span class="tl-type \${labelCls}">\${label}</span><span class="tl-dt">\${fmtDT(h.timestamp)}</span></div>
      <div class="tl-who">👤 \${esc(h.borrower)}</div>
      \${h.project?\`<div class="tl-proj">📍 \${esc(h.project)}</div>\`:''}
      <div class="tl-qty">\${h.quantity} \${esc(h.unit||'')}</div>
      \${h.note?\`<div class="tl-note">"\${esc(h.note)}"</div>\`:''}
      \${imgs.length?\`<div class="tl-imgs">\${imgs.join('')}</div>\`:''}
    </div></div>\`;
}

function doReturn(itemId,borId){
  const it=items.find(i=>i.id===itemId);if(!it)return null;
  const b=it.borrows.find(x=>x.id===borId);if(!b)return null;
  const inp=document.getElementById(\`ri-\${borId}\`);
  const rq=Math.min(parseInt(inp?.value)||b.quantity,b.quantity);
  const ts=new Date().toISOString();
  if(!it.history)it.history=[];
  it.history.unshift({type:'returned',borrower:b.borrower,project:b.project,quantity:rq,unit:it.unit,timestamp:ts,originalDate:b.date,borrowId:b.id});
  let msg;
  if(rq>=b.quantity){it.borrows=it.borrows.filter(x=>x.id!==borId);msg=\`↩ \${rq} \${it.unit} returned from \${b.borrower}\`;}
  else{b.quantity-=rq;msg=\`↩ \${rq} \${it.unit} partial — \${b.quantity} still out\`;}
  saveItems();render();return msg;
}
function retItem(itId,borId){const m=doReturn(itId,borId);if(m){toast(m);renderBLActive();if(blTab==='h')renderBLHist();}}
function retAll(itId,borId){const m=doReturn(itId,borId);if(m){toast(m);renderAllBor();}}

// EXPORT
function openExport(){show('exportOv');}
function closeExport(){hide('exportOv');}

function dlCSV(filename,rows){
  const csv=rows.map(r=>r.map(cell=>\`"\${String(cell==null?'':cell).replace(/"/g,'""')}"\`).join(',')).join('\\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);
  toast(\`Downloaded \${filename}\`);
}

function exportStockCSV(){
  const rows=[['Item Name','Category','Location','Total Qty','Available','Unit','Unit Price','Total Value','Low Stock Alert','Status','Active Borrows']];
  items.forEach(it=>{
    const av=avail(it);const val=it.unitPrice>0?it.quantity*it.unitPrice:'';
    rows.push([it.name,it.category,it.location||'',it.quantity,av,it.unit,it.unitPrice||'',val,it.threshold,isLow(it)?'LOW STOCK':'OK',totBor(it)]);
  });
  dlCSV(\`stock-list-\${new Date().toISOString().slice(0,10)}.csv\`,rows);
}

function exportBorrowCSV(){
  const rows=[['Item','Borrower','Project / Location','Qty','Unit','Borrow Date & Time','Due Date','Status','Notes']];
  items.forEach(it=>(it.borrows||[]).forEach(b=>{
    const overdue=b.dueDate&&new Date(b.dueDate)<new Date();
    rows.push([it.name,b.borrower,b.project,b.quantity,b.unit,fmtDT(b.date),b.dueDate||'',overdue?'OVERDUE':'Active',b.note||'']);
  }));
  dlCSV(\`borrows-\${new Date().toISOString().slice(0,10)}.csv\`,rows);
}

function printReport(){
  const lowItems=items.filter(i=>isLow(i));
  const allBor=[];items.forEach(it=>(it.borrows||[]).forEach(b=>allBor.push({...b,itemName:it.name,itemUnit:it.unit})));
  const totalVal=items.filter(i=>i.unitPrice>0).reduce((s,i)=>s+i.quantity*(i.unitPrice||0),0);
  const now=new Date().toLocaleString();
  const html=\`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>WareStock Report</title>
  <style>body{font-family:Arial,sans-serif;font-size:12px;color:#111;margin:20px}h1{font-size:20px;margin-bottom:4px}h2{font-size:14px;margin:18px 0 8px;border-bottom:1px solid #ccc;padding-bottom:4px}table{width:100%;border-collapse:collapse;margin-bottom:12px}th,td{border:1px solid #ddd;padding:6px 8px;text-align:left}th{background:#f0f2f5;font-weight:700}tr:nth-child(even){background:#f9f9f9}.low{color:#ef4444;font-weight:700}.meta{color:#64748b;font-size:11px}@media print{body{margin:10px}}</style></head>
  <body><h1>📦 WareStock Report</h1><div class="meta">Generated: \${now}</div>
  <h2>Summary</h2><table><tr><th>Total Items</th><th>Total Value</th><th>Low Stock</th><th>Borrowed Out</th></tr>
  <tr><td>\${items.length}</td><td>\${totalVal>0?'₱'+fmt(totalVal):'—'}</td><td class="low">\${lowItems.length}</td><td>\${allBor.length}</td></tr></table>
  <h2>Stock List</h2><table><tr><th>Item</th><th>Category</th><th>Location</th><th>Available</th><th>Unit</th><th>Unit Price</th><th>Status</th></tr>
  \${items.map(it=>\`<tr><td>\${esc(it.name)}</td><td>\${esc(it.category)}</td><td>\${esc(it.location||'')}</td><td>\${avail(it)}</td><td>\${esc(it.unit)}</td><td>\${it.unitPrice>0?'₱'+fmt(it.unitPrice):'—'}</td><td class="\${isLow(it)?'low':''}">\${isLow(it)?'LOW':'OK'}</td></tr>\`).join('')}
  </table>\${allBor.length>0?\`<h2>Active Borrows</h2><table><tr><th>Item</th><th>Borrower</th><th>Project/Location</th><th>Qty</th><th>Borrowed</th><th>Due</th></tr>
  \${allBor.map(b=>\`<tr><td>\${esc(b.itemName)}</td><td>\${esc(b.borrower)}</td><td>\${esc(b.project)}</td><td>\${b.quantity} \${esc(b.itemUnit)}</td><td>\${fmtDT(b.date)}</td><td>\${b.dueDate?new Date(b.dueDate).toLocaleDateString():''}</td></tr>\`).join('')}</table>\`:''}
  </body></html>\`;
  const w=window.open('','_blank');w.document.write(html);w.document.close();w.print();
}

// REORDER
let reorderItemId=null;
function openReorder(){reorderItemId=null;buildReorder(items.filter(i=>isLow(i)));show('reorderOv');}
function openReorderFor(id){reorderItemId=id;buildReorder(items.filter(i=>i.id===id));show('reorderOv');}
function closeReorder(){hide('reorderOv');}
function buildReorder(lowItems){
  document.getElementById('roDate').innerHTML=\`<b>Reorder Request</b> · \${new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'})}\`;
  if(lowItems.length===0){document.getElementById('roList').innerHTML='<div class="norows">No low stock items.</div>';return;}
  document.getElementById('roList').innerHTML=\`<div style="margin-top:4px">\${lowItems.map(it=>\`
    <div class="ro-item"><div class="ro-dot"></div>
      <div class="ro-info"><div class="ro-name">\${esc(it.name)}</div>
        <div class="ro-meta">\${esc(it.category)}\${it.location?' · '+esc(it.location):''} · Have: \${avail(it)} \${esc(it.unit)} / Min: \${it.threshold}</div>
      </div>
      <div class="ro-need">Need \${Math.max(it.threshold*2-avail(it),it.threshold)} \${esc(it.unit)}</div>
    </div>\`).join('')}</div>\`;
}
function shareReorder(){
  const lowItems=reorderItemId?items.filter(i=>i.id===reorderItemId&&isLow(i)):items.filter(i=>isLow(i));
  if(lowItems.length===0){toast('No low stock items');return;}
  const date=new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'});
  const txt=\`📦 REORDER REQUEST – \${date}\\n\\n\${lowItems.map(it=>\`• \${it.name} (\${it.category})\\n  Have: \${avail(it)} \${it.unit} | Min: \${it.threshold} | Need: \${Math.max(it.threshold*2-avail(it),it.threshold)} \${it.unit}\`).join('\\n\\n')}\`;
  if(navigator.share){navigator.share({title:'Reorder Request',text:txt}).catch(()=>{});}
  else{navigator.clipboard.writeText(txt).then(()=>toast('Copied to clipboard!')).catch(()=>toast('Could not copy'));}
}

// BACKUP / RESTORE
function backupData(){
  const backup={version:1,exportDate:new Date().toISOString(),items,cats,locs};
  const blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');
  a.href=url;a.download=\`warestock-backup-\${new Date().toISOString().slice(0,10)}.json\`;a.click();URL.revokeObjectURL(url);
  toast('✅ Backup downloaded — save it to Google Drive!');
}
let pendingRestore=null;
function restoreData(e){
  const file=e.target.files[0];if(!file)return;
  e.target.value=''; // reset so same file can be picked again
  const reader=new FileReader();
  reader.onerror=()=>toast('⚠ Could not read file');
  reader.onload=ev=>{
    try{
      // Strip BOM and whitespace that Android sometimes adds
      let raw=(ev.target.result||'').trim();
      if(raw.charCodeAt(0)===0xFEFF)raw=raw.slice(1);
      // Sometimes Android wraps content in extra characters — find first {
      const start=raw.indexOf('{');
      const end=raw.lastIndexOf('}');
      if(start!==-1&&end!==-1&&end>start)raw=raw.slice(start,end+1);
      let data;
      try{data=JSON.parse(raw);}
      catch(parseErr){
        toast('⚠ File could not be read as JSON — make sure you selected the correct .json backup file');
        return;
      }
      // Flexible validation — accept any object with an items array
      if(!data||typeof data!=='object'){toast('⚠ Invalid backup file — not a valid object');return;}
      if(!data.items){toast('⚠ Invalid backup file — no items data found');return;}
      if(!Array.isArray(data.items)){toast('⚠ Invalid backup file — items data is corrupted');return;}
      // Store parsed data and show confirm modal
      pendingRestore=data;
      const dateStr=data.exportDate?new Date(data.exportDate).toLocaleString():'Unknown date';
      document.getElementById('restoreMsg').innerHTML=
        \`From: <b>\${dateStr}</b><br>Contains: <b>\${data.items.length} items</b><br><br>⚠ This will <b>replace all current data</b>.\`;
      document.getElementById('restoreOv').classList.add('on');
    }catch(err){
      toast('⚠ Unexpected error reading file');
    }
  };
  reader.readAsText(file,'UTF-8');
}
// LIGHTBOX
function viewLBDir(src,cap){document.getElementById('lbImg').src=src;document.getElementById('lbCap').textContent=cap;document.getElementById('lb').classList.add('on');}
function closeLB(){document.getElementById('lb').classList.remove('on');}

// MANAGER
function openMgr(){swTab('cat');renderMgr();show('mgrOv');}
function closeMgr(){hide('mgrOv');}
function swTab(t){document.getElementById('tabCat').classList.toggle('on',t==='cat');document.getElementById('tabLoc').classList.toggle('on',t==='loc');document.getElementById('catPanel').style.display=t==='cat'?'':'none';document.getElementById('locPanel').style.display=t==='loc'?'':'none';}
function renderMgr(){renderCatRows();renderLocRows();}
function mRow(name,idx,type){const dc=dotClr(name,type==='cat'?1:2);const p=type==='cat'?'cat':'loc';
  return\`<div class="mrow" id="\${p}r-\${idx}"><div class="mdot" style="background:\${dc}"></div>
    <span class="mname" id="\${p}n-\${idx}">\${esc(name)}</span>
    <input class="minp" id="\${p}i-\${idx}" value="\${esc(name)}" onblur="saveRen('\${p}',\${idx})" onkeydown="if(event.key==='Enter')saveRen('\${p}',\${idx})"/>
    <button class="mact" onclick="startRen('\${p}',\${idx})"><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
    <button class="mact del" onclick="delRow('\${p}',\${idx})"><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg></button>
  </div>\`;}
function renderCatRows(){document.getElementById('catRows').innerHTML=cats.map((c,i)=>mRow(c,i,'cat')).join('');}
function renderLocRows(){document.getElementById('locRows').innerHTML=locs.map((l,i)=>mRow(l,i,'loc')).join('');}
function startRen(p,i){const n=document.getElementById(\`\${p}n-\${i}\`),inp=document.getElementById(\`\${p}i-\${i}\`);n.classList.add('h');inp.classList.add('on');inp.focus();inp.select();}
function saveRen(p,i){
  const inp=document.getElementById(\`\${p}i-\${i}\`),nm=document.getElementById(\`\${p}n-\${i}\`);
  const newName=inp.value.trim(),arr=p==='cat'?cats:locs;
  if(!newName||newName===arr[i]){inp.classList.remove('on');nm.classList.remove('h');return;}
  const old=arr[i];arr[i]=newName;
  if(p==='cat'){items.forEach(it=>{if(it.category===old)it.category=newName;});saveItems();saveCats();renderCatRows();}
  else{items.forEach(it=>{if(it.location===old)it.location=newName;});saveItems();saveLocs();renderLocRows();}
  render();toast(\`Renamed to "\${newName}"\`);
}
function delRow(p,i){
  const arr=p==='cat'?cats:locs;if(arr.length<=1){toast(\`Keep at least one \${p==='cat'?'category':'location'}\`);return;}
  const name=arr[i],fallback=arr[i===0?1:0];
  const cnt=items.filter(it=>(p==='cat'?it.category:it.location)===name).length;
  if(cnt>0){items.forEach(it=>{if(p==='cat'&&it.category===name)it.category=fallback;else if(p==='loc'&&it.location===name)it.location=fallback;});saveItems();toast(\`Moved \${cnt} item(s) to "\${fallback}"\`);}
  arr.splice(i,1);if(p==='cat'){saveCats();renderCatRows();}else{saveLocs();renderLocRows();}render();
}
function addCat(){const inp=document.getElementById('catAddInp'),name=inp.value.trim();if(!name)return;if(cats.some(c=>c.toLowerCase()===name.toLowerCase())){toast('Already exists');return;}cats.push(name);saveCats();inp.value='';renderCatRows();toast(\`"\${name}" added\`);}
function addLoc(){const inp=document.getElementById('locAddInp'),name=inp.value.trim();if(!name)return;if(locs.some(l=>l.toLowerCase()===name.toLowerCase())){toast('Already exists');return;}locs.push(name);saveLocs();inp.value='';renderLocRows();toast(\`"\${name}" added\`);}
document.getElementById('catAddInp').addEventListener('keydown',e=>{if(e.key==='Enter')addCat();});
document.getElementById('locAddInp').addEventListener('keydown',e=>{if(e.key==='Enter')addLoc();});

// DELETE
function openDelete(id){delId=id;const it=items.find(i=>i.id===id);const bc=(it?.borrows||[]).length;document.getElementById('delmsg').textContent=it?\`Remove "\${it.name}"?\${bc>0?\` Has \${bc} active borrow(s).\`:''} This cannot be undone.\`:'This cannot be undone.';document.getElementById('delov').classList.add('on');}
function closeDelete(){document.getElementById('delov').classList.remove('on');delId=null;}
function confirmDelete(){if(!delId)return;const it=items.find(i=>i.id===delId);items=items.filter(i=>i.id!==delId);saveItems();render();closeDelete();if(it)toast(\`"\${it.name}" deleted\`);}

// OVERLAY
const show=id=>{const el=document.getElementById(id);if(el){el.style.display='';el.classList.add('on');}};
const hide=id=>{const el=document.getElementById(id);if(el)el.classList.remove('on');};
function ovtap(e,id,fn){if(e.target===document.getElementById(id))fn();}

// TOAST
let tT;
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('on');clearTimeout(tT);tT=setTimeout(()=>t.classList.remove('on'),2800);}

// ENTER KEY
document.querySelectorAll('#itemOv input').forEach(el=>{el.addEventListener('keydown',e=>{if(e.key==='Enter')submitItem();});});

// ═══ AUTH ═══
const CREDENTIALS={username:'IanKun',password:'password2026'};
function checkSession(){return sessionStorage.getItem('ws_auth')==='ok';}
function initAuth(){
  if(checkSession()){document.getElementById('loginScreen').style.display='none';}
  else{document.getElementById('loginScreen').style.display='flex';}
}
function doLogin(){
  const u=document.getElementById('loginUser').value.trim();
  const p=document.getElementById('loginPass').value;
  const err=document.getElementById('loginErr');
  if(u===CREDENTIALS.username&&p===CREDENTIALS.password){
    sessionStorage.setItem('ws_auth','ok');
    document.getElementById('loginScreen').style.display='none';
    render();
  } else {
    err.style.display='block';
    err.textContent=(!u||!p)?'Please enter username and password.':'Incorrect username or password.';
    document.getElementById('loginPass').value='';
  }
}
function doLogout(){
  if(!confirm('Sign out of WareStock?'))return;
  sessionStorage.removeItem('ws_auth');
  document.getElementById('loginScreen').style.display='flex';
  document.getElementById('loginUser').value='';
  document.getElementById('loginPass').value='';
  document.getElementById('loginErr').style.display='none';
}
function togglePassVis(){
  const inp=document.getElementById('loginPass');
  const btn=document.getElementById('passToggle');
  if(inp.type==='password'){inp.type='text';btn.textContent='🙈';}
  else{inp.type='password';btn.textContent='👁';}
}

// ═══ DEV MODAL ═══
function openDev(){show('devOv');}
function closeDev(){hide('devOv');}

// ═══ AUTO-SUGGEST SEARCH ═══
(function initAutoSuggest(){
  const inp=document.getElementById('srch');
  const drop=document.getElementById('srchDrop');
  if(!inp||!drop)return;
  inp.addEventListener('input',function(){
    searchQ=this.value;
    const _clr=document.getElementById('srchClr');if(_clr)_clr.classList.toggle('on',searchQ.length>0);
    render();
    const q=searchQ.toLowerCase().trim();
    if(!q){drop.style.display='none';return;}
    const scored=items.map(it=>{
      const name=it.name.toLowerCase();
      const cat=it.category.toLowerCase();
      const loc=(it.location||'').toLowerCase();
      let score=0;
      if(name===q)score=100;
      else if(name.startsWith(q))score=80;
      else if(name.includes(q))score=60;
      else if(cat.includes(q)||loc.includes(q))score=40;
      else{let qi=0;for(let ci=0;ci<name.length&&qi<q.length;ci++)if(name[ci]===q[qi])qi++;if(qi===q.length)score=20;}
      return{it,score};
    }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,6);
    if(!scored.length){drop.style.display='none';return;}
    drop.innerHTML=scored.map(({it})=>{
      const cc=catColor(it.category);
      const av=avail(it);const low=isLow(it);
      // Safe highlight
      const safeQ=q.replace(/[.*+?^\${}()|[\\]\\\\]/g,'\\\\$&');
      let hi=esc(it.name);
      try{hi=esc(it.name).replace(new RegExp('('+safeQ+')','gi'),'<b style="color:#f97316">$1</b>');}catch(e){}
      return\`<div onclick="pickSuggestion('\${it.id}')" style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid var(--bd);cursor:pointer" onmouseenter="this.style.background='var(--inp)'" onmouseleave="this.style.background=''">
        \${it.image?\`<img src="\${it.image}" style="width:36px;height:36px;object-fit:cover;border-radius:7px;flex-shrink:0"/>\`:'<div style="width:36px;height:36px;border-radius:7px;background:var(--inp);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:18px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:600;color:var(--t1);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\${hi}</div>
          <div style="display:flex;gap:5px;margin-top:3px;align-items:center">
            <span style="font-size:10px;font-weight:700;padding:1px 6px;border-radius:4px;background:\${cc.bg};color:\${cc.fg}">\${esc(it.category)}</span>
            \${it.location?\`<span style="font-size:10px;color:var(--t3)">📍 \${esc(it.location)}</span>\`:''}
          </div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:\${low?'#ef4444':'var(--t1)'}">\${av}</div>
          <div style="font-size:10px;color:var(--t3)">\${esc(it.unit)}</div>
        </div>
      </div>\`;
    }).join('');
    const rect=inp.getBoundingClientRect();
    drop.style.top=(rect.bottom+4)+'px';
    drop.style.display='block';
  });
  inp.addEventListener('blur',()=>{setTimeout(()=>{drop.style.display='none';},200);});
  inp.addEventListener('focus',function(){if(this.value.trim())this.dispatchEvent(new Event('input'));});
})();
function pickSuggestion(id){
  const it=items.find(i=>i.id===id);if(!it)return;
  document.getElementById('srch').value=it.name;
  searchQ=it.name;
  document.getElementById('srchDrop').style.display='none';
  document.getElementById('srchClr').classList.add('on');
  render();
  setTimeout(()=>scrollToCard(id),200);
}

// ═══ DAMAGE REPORT ═══
let dmgItemId=null;
function openDmg(id){
  dmgItemId=id||null;
  const it=id?items.find(i=>i.id===id):null;
  document.getElementById('dmgItem').value=it?it.name:'';
  document.getElementById('dmgLoc').value=it?it.location||'':'';
  document.getElementById('dmgDate').value=new Date().toISOString().slice(0,10);
  document.getElementById('dmgDesc').value='';
  document.getElementById('dmgReporter').value='';
  ['dmgItemErr','dmgDescErr'].forEach(id=>document.getElementById(id).classList.remove('on'));
  const catSel=document.getElementById('dmgCat');
  catSel.innerHTML=cats.map(c=>\`<option value="\${esc(c)}"\${it&&it.category===c?' selected':''}>\${esc(c)}</option>\`).join('');
  show('dmgOv');
}
function closeDmg(){hide('dmgOv');}
function buildDmgData(){
  const itemName=document.getElementById('dmgItem').value.trim();
  const desc=document.getElementById('dmgDesc').value.trim();
  let ok=true;
  if(!itemName){document.getElementById('dmgItemErr').classList.add('on');ok=false;}else document.getElementById('dmgItemErr').classList.remove('on');
  if(!desc){document.getElementById('dmgDescErr').classList.add('on');ok=false;}else document.getElementById('dmgDescErr').classList.remove('on');
  if(!ok)return null;
  return{itemName,category:document.getElementById('dmgCat').value,location:document.getElementById('dmgLoc').value.trim(),date:document.getElementById('dmgDate').value,severity:document.getElementById('dmgSev').value,description:desc,reporter:document.getElementById('dmgReporter').value.trim()||'—',generatedAt:new Date().toLocaleString()};
}
function printDmg(){
  const d=buildDmgData();if(!d)return;
  const sevColor={Minor:'#22c55e',Moderate:'#f59e0b',Severe:'#ef4444','Total Loss':'#7c3aed'}[d.severity]||'#ef4444';
  const html=\`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Damage Report</title>
  <style>body{font-family:Arial,sans-serif;font-size:13px;color:#111;margin:30px;max-width:700px}.logo{font-size:24px;font-weight:900}.logo span{color:#f97316}.badge{background:\${sevColor};color:#fff;padding:4px 14px;border-radius:20px;font-weight:700;font-size:12px}h2{font-size:15px;font-weight:700;border-bottom:1px solid #ddd;padding-bottom:5px;margin:18px 0 10px;color:#0f172a}.grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}.field{background:#f8f9fa;border:1px solid #e2e8f0;border-radius:8px;padding:10px 12px}.fl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#64748b;margin-bottom:3px}.fv{font-size:14px;font-weight:600}.desc-box{background:#fff5f5;border:1px solid #fca5a5;border-radius:8px;padding:14px;line-height:1.6}.footer{margin-top:28px;padding-top:14px;border-top:1px solid #ddd;display:flex;justify-content:space-between;font-size:11px;color:#64748b}.sig-line{margin-top:36px;display:flex;justify-content:space-around}.sig-block{text-align:center;width:180px}.sig-block hr{margin-bottom:5px}.hdr{display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid #f97316;padding-bottom:14px;margin-bottom:20px}@media print{body{margin:15px}}</style></head>
  <body>
  <div class="hdr"><div><div class="logo">WARE<span>STOCK</span></div><div style="font-size:11px;color:#64748b;margin-top:2px">Damage / Incident Report</div></div>
  <div><div class="badge">\${esc(d.severity)}</div><div style="font-size:11px;color:#64748b;margin-top:6px;text-align:right">Date: \${new Date(d.date).toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'})}</div></div></div>
  <h2>Item Information</h2>
  <div class="grid">
    <div class="field"><div class="fl">Item Name</div><div class="fv">\${esc(d.itemName)}</div></div>
    <div class="field"><div class="fl">Category</div><div class="fv">\${esc(d.category)}</div></div>
    <div class="field"><div class="fl">Location / Project</div><div class="fv">\${esc(d.location||'—')}</div></div>
    <div class="field"><div class="fl">Severity</div><div class="fv" style="color:\${sevColor}">\${esc(d.severity)}</div></div>
  </div>
  <h2>Damage Description</h2><div class="desc-box">\${esc(d.description)}</div>
  <h2>Report Details</h2>
  <div class="grid">
    <div class="field"><div class="fl">Reported By</div><div class="fv">\${esc(d.reporter)}</div></div>
    <div class="field"><div class="fl">Generated</div><div class="fv">\${esc(d.generatedAt)}</div></div>
  </div>
  <div class="sig-line">
    <div class="sig-block"><hr/><div>Reported By</div></div>
    <div class="sig-block"><hr/><div>Supervisor</div></div>
    <div class="sig-block"><hr/><div>Warehouse Officer</div></div>
  </div>
  <div class="footer"><div>WareStock v8.0 — Developed by Brian Capio (ICT-MAWD)</div><div>CONFIDENTIAL — Internal Use Only</div></div>
  </body></html>\`;
  const w=window.open('','_blank');w.document.write(html);w.document.close();setTimeout(()=>w.print(),400);
}
function emailDmg(){
  const d=buildDmgData();if(!d)return;
  const subject=encodeURIComponent(\`Damage Report – \${d.itemName} [\${d.severity}] – \${new Date(d.date).toLocaleDateString()}\`);
  const body=encodeURIComponent(\`WARESTOCK DAMAGE / INCIDENT REPORT\\n====================================\\nItem: \${d.itemName}\\nCategory: \${d.category}\\nLocation / Project: \${d.location||'—'}\\nDate of Damage: \${new Date(d.date).toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'})}\\nSeverity: \${d.severity}\\nReported By: \${d.reporter}\\n\\nDAMAGE DESCRIPTION:\\n\${d.description}\\n\\n---\\nGenerated: \${d.generatedAt}\\nWareStock v8.0 – Developed by Brian Capio (ICT-MAWD)\`);
  window.open(\`https://mail.google.com/mail/?view=cm&fs=1&su=\${subject}&body=\${body}\`,'_blank');
}

// ═══ CONSUMABLE USAGE PER PROJECT ═══
function renderConsumablesByProject(){
  const conSec=document.getElementById('conSection');
  if(!conSec)return;
  const conCats=new Set();
  cats.forEach(c=>{if(c.toLowerCase().includes('consumable')||c.toLowerCase().includes('p.p.e')||c.toLowerCase().includes('ppe'))conCats.add(c);});
  if(conCats.size===0)conCats.add('Consumable');
  const projectUsage={};
  items.forEach(it=>{
    const isCon=conCats.has(it.category);if(!isCon)return;
    // From borrow history (all borrows ever made)
    (it.history||[]).filter(h=>h.type==='borrowed').forEach(b=>{
      const proj=b.project||'Unassigned';
      if(!projectUsage[proj])projectUsage[proj]={};
      const key=it.id;
      if(!projectUsage[proj][key])projectUsage[proj][key]={name:it.name,unit:it.unit,category:it.category,total:0};
      projectUsage[proj][key].total+=b.quantity||0;
    });
    // Active borrows
    (it.borrows||[]).forEach(b=>{
      const proj=b.project||'Unassigned';
      if(!projectUsage[proj])projectUsage[proj]={};
      const key=it.id+'_active';
      if(!projectUsage[proj][key])projectUsage[proj][key]={name:it.name,unit:it.unit,category:it.category,total:0};
      projectUsage[proj][key].total+=b.quantity||0;
    });
    // Direct stock usage (− button)
    const directUsage=(it.stockLog||[]).filter(e=>e.type==='use').reduce((s,e)=>s+e.delta,0);
    if(directUsage>0){
      const proj='Direct Usage';
      if(!projectUsage[proj])projectUsage[proj]={};
      const key=it.id+'_direct';
      if(!projectUsage[proj][key])projectUsage[proj][key]={name:it.name,unit:it.unit,category:it.category,total:0};
      projectUsage[proj][key].total+=directUsage;
    }
  });
  const entries=Object.entries(projectUsage).filter(([,m])=>Object.values(m).some(r=>r.total>0));
  conSec.style.display=entries.length>0?'':'none';
  if(!entries.length)return;
  document.getElementById('conList').innerHTML=entries.map(([proj,usageMap])=>{
    const rows=Object.values(usageMap).filter(r=>r.total>0).sort((a,b)=>b.total-a.total);
    if(!rows.length)return'';
    const total=rows.reduce((s,r)=>s+r.total,0);
    return\`<div style="background:var(--card);border:1.5px solid var(--bd);border-radius:12px;overflow:hidden;margin-bottom:10px;box-shadow:var(--sh)">
      <div style="background:var(--inp);padding:10px 13px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:8px">
        <span>📍</span>
        <div style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--t1);flex:1">\${esc(proj)}</div>
        <div style="font-size:11px;color:var(--t3)">\${total} total consumed</div>
      </div>
      <div style="padding:8px 13px;display:flex;flex-direction:column;gap:6px">
        \${rows.map(r=>{const cc=catColor(r.category);return\`<div style="display:flex;align-items:center;gap:10px;padding:7px 10px;background:var(--inp);border-radius:9px;border:1px solid var(--bd)">
          <span style="font-size:10px;font-weight:700;padding:1px 6px;border-radius:4px;background:\${cc.bg};color:\${cc.fg};white-space:nowrap">\${esc(r.category)}</span>
          <div style="flex:1;font-size:14px;font-weight:600;color:var(--t1);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\${esc(r.name)}</div>
          <div style="font-family:var(--fh);font-size:22px;font-weight:800;color:#f97316;flex-shrink:0">\${r.total}<span style="font-size:12px;color:var(--t3);font-family:'DM Sans',sans-serif;font-weight:500"> \${esc(r.unit)}</span></div>
        </div>\`;}).join('')}
      </div>
    </div>\`;
  }).join('');
}

// ═══ HEADER DROPDOWN MENUS ═══
function toggleQuickMenu(){
  const m=document.getElementById('quickMenu');
  m.style.display=m.style.display==='none'?'block':'none';
  document.getElementById('profileMenu').style.display='none';
}
function closeQuickMenu(){document.getElementById('quickMenu').style.display='none';}
function openProfileMenu(){
  const m=document.getElementById('profileMenu');
  m.style.display=m.style.display==='none'?'block':'none';
  document.getElementById('quickMenu').style.display='none';
  updateThemeMenuLabel();
}
function closeProfileMenu(){document.getElementById('profileMenu').style.display='none';}
function updateThemeMenuLabel(){
  const dark=document.documentElement.getAttribute('data-theme')==='dark';
  const mIco=document.getElementById('themeMenuIco');
  const mLbl=document.getElementById('themeMenuLbl');
  if(mIco)mIco.textContent=dark?'☀️':'🌙';
  if(mLbl)mLbl.textContent=dark?'Switch to Light Mode':'Switch to Dark Mode';
}

function cancelRestore(){document.getElementById('restoreOv').classList.remove('on');pendingRestore=null;}
function doRestore(){
  if(!pendingRestore)return;
  const data=pendingRestore;
  items=data.items||[];
  cats=Array.isArray(data.cats)&&data.cats.length?data.cats:[...DEF_CATS];
  locs=Array.isArray(data.locs)&&data.locs.length?data.locs:[...DEF_LOCS];
  items.forEach(i=>{
    if(!i.borrows)i.borrows=[];if(!i.history)i.history=[];if(!i.stockLog)i.stockLog=[];
    if(!i.hasOwnProperty('pinned'))i.pinned=false;
    if(!i.hasOwnProperty('unitPrice'))i.unitPrice=0;
    if(!i.hasOwnProperty('location'))i.location='';
  });
  saveItems();saveCats();saveLocs();cancelRestore();closeExport();render();
  toast('✅ Restored '+items.length+' items successfully');
}


// ═══ BORROWERS VIEW ═══
function getBorrowerMap(){
  // Aggregate all borrow records (active + history) by borrower name
  const map = {}; // key = borrower name lowercase, value = {name, projects, items, activeCount, overdueCount, totalQty, records[]}
  items.forEach(it=>{
    // Active borrows
    (it.borrows||[]).forEach(b=>{
      const key = b.borrower.toLowerCase().trim();
      if(!map[key]) map[key]={name:b.borrower,projects:new Set(),activeItems:[],overdueItems:[],totalActiveQty:0};
      map[key].projects.add(b.project||'');
      map[key].activeItems.push({itemName:it.name,itemId:it.id,qty:b.quantity,unit:it.unit,date:b.date,dueDate:b.dueDate,borrowId:b.id,idImage:b.idImage,signature:b.signature,project:b.project,note:b.note});
      map[key].totalActiveQty += b.quantity;
      if(b.dueDate && new Date(b.dueDate)<new Date()) map[key].overdueItems.push(b);
    });
    // History (returned) - just track for profile
    (it.history||[]).filter(h=>h.type==='returned').forEach(h=>{
      const key = h.borrower.toLowerCase().trim();
      if(!map[key]) map[key]={name:h.borrower,projects:new Set(),activeItems:[],overdueItems:[],totalActiveQty:0};
      map[key].projects.add(h.project||'');
    });
  });
  return map;
}

function renderBorrowers(){
  const q = (document.getElementById('brwSearch')||{value:''}).value.toLowerCase().trim();
  const map = getBorrowerMap();
  const entries = Object.values(map)
    .filter(b=> !q || b.name.toLowerCase().includes(q) || [...b.projects].some(p=>p.toLowerCase().includes(q)))
    .sort((a,b)=>{
      // Sort: overdue first, then active, then alphabetical
      if(b.overdueItems.length !== a.overdueItems.length) return b.overdueItems.length - a.overdueItems.length;
      if(b.activeItems.length !== a.activeItems.length) return b.activeItems.length - a.activeItems.length;
      return a.name.localeCompare(b.name);
    });

  const totalActive = Object.values(map).filter(b=>b.activeItems.length>0).length;
  const totalOd     = Object.values(map).filter(b=>b.overdueItems.length>0).length;
  document.getElementById('brwTotal').textContent  = entries.length;
  document.getElementById('brwActive').textContent = totalActive;
  document.getElementById('brwOd').textContent     = totalOd;
  document.getElementById('brwActiveChip').style.display = totalActive>0?'flex':'none';
  document.getElementById('brwOdChip').style.display     = totalOd>0?'flex':'none';

  const brwOdB = document.getElementById('brwOdBadge');
  if(brwOdB){brwOdB.textContent=totalOd;brwOdB.classList.toggle('on',totalOd>0);}

  const list  = document.getElementById('brwList');
  const empty = document.getElementById('brwEmpty');
  if(entries.length===0){
    list.innerHTML=''; empty.style.display='flex'; return;
  }
  empty.style.display='none';
  list.innerHTML = entries.map(b=>{
    const isOd = b.overdueItems.length>0;
    const hasActive = b.activeItems.length>0;
    const projectList = [...b.projects].filter(Boolean).slice(0,3).join(', ');
    const bdColor = isOd?'var(--rbd)':hasActive?'var(--bbd)':'var(--bd)';
    const bgColor = isOd?'var(--rbg)':hasActive?'var(--bbg)':'var(--card)';
    return \`<div onclick="openBrwDetail('\${esc(b.name.replace(/'/g,"\\\\\\'"))}')"
      style="background:\${bgColor};border:1.5px solid \${bdColor};border-radius:13px;padding:13px 14px;cursor:pointer;box-shadow:var(--sh);display:flex;align-items:center;gap:12px;transition:box-shadow .15s">
      <!-- Avatar -->
      <div style="width:46px;height:46px;border-radius:50%;background:\${isOd?'var(--rbd)':hasActive?'var(--bbd)':'var(--bd)'};flex-shrink:0;display:flex;align-items:center;justify-content:center;font-family:var(--fh);font-size:20px;font-weight:800;color:\${isOd?'#ef4444':hasActive?'#3b82f6':'var(--t2)'}">
        \${b.name.charAt(0).toUpperCase()}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-family:var(--fh);font-size:19px;font-weight:800;color:var(--t1);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\${esc(b.name)}</div>
        \${projectList?\`<div style="font-size:12px;color:var(--t2);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">📍 \${esc(projectList)}</div>\`:''}
        \${isOd?\`<div style="font-size:11px;color:#ef4444;font-weight:700;margin-top:3px">⚠ \${b.overdueItems.length} overdue</div>\`:''}
      </div>
      <div style="text-align:right;flex-shrink:0">
        \${hasActive?\`<div style="font-family:var(--fh);font-size:26px;font-weight:800;line-height:1;color:\${isOd?'#ef4444':'#3b82f6'}">\${b.activeItems.length}</div>
        <div style="font-size:10px;color:var(--t3)">item\${b.activeItems.length!==1?'s':''} out</div>\`
        :\`<div style="font-size:11px;color:var(--t3)">No active borrows</div>\`}
      </div>
      <svg style="flex-shrink:0;color:var(--t3)" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </div>\`;
  }).join('');
}

function openBrwDetail(name){
  const map = getBorrowerMap();
  const b   = map[name.toLowerCase().trim()];
  if(!b) return;
  document.getElementById('brwDetailTitle').textContent = b.name;
  const el = document.getElementById('brwDetailBody');
  const activeItems = b.activeItems;
  if(activeItems.length===0){
    el.innerHTML=\`<div class="norows">No active borrows for \${esc(b.name)}.</div>\`;
  } else {
    el.innerHTML=\`<div style="display:flex;flex-direction:column;gap:10px">
      <div style="background:var(--inp);border:1.5px solid var(--bd);border-radius:10px;padding:11px 13px;display:flex;gap:16px">
        <div style="text-align:center"><div style="font-family:var(--fh);font-size:28px;font-weight:800;color:#3b82f6">\${activeItems.length}</div><div style="font-size:10px;color:var(--t3)">items out</div></div>
        <div style="text-align:center"><div style="font-family:var(--fh);font-size:28px;font-weight:800;color:#f97316">\${activeItems.reduce((s,r)=>s+r.qty,0)}</div><div style="font-size:10px;color:var(--t3)">total qty</div></div>
        <div style="text-align:center"><div style="font-family:var(--fh);font-size:28px;font-weight:800;color:var(--t1)">\${b.projects.size}</div><div style="font-size:10px;color:var(--t3)">project\${b.projects.size!==1?'s':''}</div></div>
      </div>
      \${activeItems.map(r=>{
        const overdue=r.dueDate&&new Date(r.dueDate)<new Date();
        return\`<div style="background:\${overdue?'var(--rbg)':'var(--inp)'};border:1.5px solid \${overdue?'var(--rbd)':'var(--bd)'};border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
            <div>
              <div style="font-family:var(--fh);font-size:18px;font-weight:800;color:var(--t1)">📦 \${esc(r.itemName)}</div>
              <div style="font-size:12px;color:var(--t2);margin-top:2px">📍 \${esc(r.project||'—')}</div>
            </div>
            <div style="font-family:'DM Mono',monospace;font-size:18px;font-weight:600;color:#3b82f6;flex-shrink:0">\${r.qty} \${esc(r.unit)}</div>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            <span class="betag dt">📅 \${fmtDT(r.date)}</span>
            \${r.dueDate?\`<span class="betag\${overdue?' over':''}">🕐 Due \${new Date(r.dueDate).toLocaleDateString(undefined,{month:'short',day:'numeric'})}\${overdue?' ⚠':''}</span>\`:''}
          </div>
          \${r.idImage||r.signature?\`<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            \${r.idImage?\`<img src="\${r.idImage}" style="width:48px;height:48px;object-fit:cover;border-radius:7px;border:1.5px solid var(--bd);cursor:pointer" onclick="viewLBDir('\${r.idImage}','🪪 ID – \${esc(r.itemName)}')"/>\`:''}
            \${r.signature?\`<img src="\${r.signature}" style="height:36px;max-width:100px;object-fit:contain;border-radius:7px;border:1.5px solid var(--bd);cursor:pointer;background:var(--card)" onclick="viewLBDir('\${r.signature}','✍ Sig – \${esc(name)}')"/>\`:''}
            <span style="font-size:11px;color:var(--t3)">Tap to view</span>
          </div>\`:''}
          <div style="display:flex;gap:7px">
            <input type="number" min="1" max="\${r.qty}" value="\${r.qty}" id="brwd-ri-\${r.borrowId}" style="width:70px;background:var(--card);border:1.5px solid var(--bd);border-radius:8px;padding:7px;font-family:'DM Mono',monospace;font-size:14px;color:var(--t1);outline:none;text-align:center" inputmode="numeric"/>
            <button onclick="retBrwDetail('\${r.itemId}','\${r.borrowId}')" style="flex:1;background:#22c55e;color:#fff;border:none;border-radius:8px;padding:9px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer">↩ Return</button>
          </div>
        </div>\`;
      }).join('')}
    </div>\`;
  }
  show('brwDetailOv');
}
function closeBrwDetail(){hide('brwDetailOv');}

function retBrwDetail(itemId,borId){
  const it=items.find(i=>i.id===itemId);if(!it)return;
  const b=it.borrows.find(x=>x.id===borId);if(!b)return;
  const inp=document.getElementById(\`brwd-ri-\${borId}\`);
  const rq=Math.min(parseInt(inp?.value)||b.quantity,b.quantity);
  const ts=new Date().toISOString();
  if(!it.history)it.history=[];
  it.history.unshift({type:'returned',borrower:b.borrower,project:b.project,quantity:rq,unit:it.unit,timestamp:ts,borrowId:b.id});
  if(rq>=b.quantity)it.borrows=it.borrows.filter(x=>x.id!==borId);
  else b.quantity-=rq;
  saveItems();render();renderBorrowers();
  // Refresh detail panel
  const map=getBorrowerMap();
  const bName=b.borrower;
  const upd=map[bName.toLowerCase().trim()];
  if(upd&&upd.activeItems.length>0) openBrwDetail(bName);
  else closeBrwDetail();
  toast(\`↩ \${rq} \${it.unit} returned\`);
}

// ═══ DIRECT BORROW (no pre-existing item needed) ═══
let dbSigPad=null;
let curDbIdImg=null;

function openDirectBorrow(){
  curDbIdImg=null;
  document.getElementById('dbName').value='';
  document.getElementById('dbProject').value='';
  document.getElementById('dbItem').value='';
  document.getElementById('dbQty').value='1';
  document.getElementById('dbNote').value='';
  document.getElementById('dbDue').value='';
  ['errDbN','errDbP','errDbItem','dbSigErr'].forEach(id=>document.getElementById(id).classList.remove('on'));
  // Fill category select
  const catSel=document.getElementById('dbCat');
  catSel.innerHTML=cats.map(c=>\`<option value="\${esc(c)}">\${esc(c)}</option>\`).join('');
  // Fill datalist for existing items
  filterDbItems();
  resetDbId();
  show('dirBorOv');
  setTimeout(()=>{
    document.getElementById('dbName').focus();
    if(!dbSigPad) initDbSigPad();
    else {dbSigPad.clear();dbSigPad.refreshTheme();}
  },340);
}
function closeDirBorrow(){hide('dirBorOv');}

function filterDbItems(){
  const q=document.getElementById('dbItem').value.toLowerCase();
  const dl=document.getElementById('dbItemList');
  dl.innerHTML=items
    .filter(it=>!q||it.name.toLowerCase().includes(q))
    .slice(0,10)
    .map(it=>\`<option value="\${esc(it.name)}">\`).join('');
}

function submitDirectBorrow(){
  // Clear errors
  ['errDbN','errDbP','errDbItem','dbSigErr'].forEach(id=>document.getElementById(id).classList.remove('on'));
  const name    = document.getElementById('dbName').value.trim();
  const project = document.getElementById('dbProject').value.trim();
  const itemName= document.getElementById('dbItem').value.trim();
  const qty     = parseInt(document.getElementById('dbQty').value)||0;
  let ok=true;
  if(!name){document.getElementById('errDbN').classList.add('on');ok=false;}
  if(!project){document.getElementById('errDbP').classList.add('on');ok=false;}
  if(!itemName){document.getElementById('errDbItem').classList.add('on');ok=false;}
  if(qty<1){document.getElementById('errDbItem').classList.add('on');ok=false;}
  if(dbSigPad&&dbSigPad.isEmpty()){document.getElementById('dbSigErr').classList.add('on');ok=false;}
  if(!ok)return;

  // Find or create item
  let item=items.find(it=>it.name.toLowerCase()===itemName.toLowerCase());
  if(!item){
    // Create new item on the fly
    item={
      id:uid(),name:itemName,
      category:document.getElementById('dbCat').value,
      location:project,quantity:qty,unit:document.getElementById('dbUnit').value,
      threshold:5,unitPrice:0,image:null,
      borrows:[],history:[],stockLog:[],pinned:false
    };
    items.push(item);
    toast(\`📦 New item "\${itemName}" created\`);
  } else {
    // Add qty to existing item
    item.quantity+=qty;
  }

  const ts=new Date().toISOString();
  const sigURL=dbSigPad?dbSigPad.toURL():null;
  const borRec={
    id:uid(),borrower:name,project,quantity:qty,unit:item.unit,
    date:ts,dueDate:document.getElementById('dbDue').value||null,
    note:document.getElementById('dbNote').value.trim()||null,
    idImage:curDbIdImg||null,signature:sigURL
  };
  item.borrows.push(borRec);
  if(!item.history)item.history=[];
  item.history.unshift({type:'borrowed',borrower:name,project,quantity:qty,unit:item.unit,timestamp:ts,note:borRec.note,idImage:borRec.idImage,signature:sigURL,borrowId:borRec.id});

  saveItems();render();renderBorrowers();closeDirBorrow();
  toast(\`📤 \${qty} \${item.unit} of "\${itemName}" borrowed by \${name}\`);
}

// Direct borrow ID photo
async function handleDbId(e){const file=e.target.files[0];if(!file)return;try{curDbIdImg=await compress(file,800,.8);document.getElementById('dbIdPrev').src=curDbIdImg;setDbId(true);}catch(err){toast('Could not load image');}e.target.value='';}
function removeDbId(e){if(e){e.preventDefault();e.stopPropagation();}curDbIdImg=null;resetDbId();}
function setDbId(on){document.getElementById('dbIdPrev').classList.toggle('on',on);document.getElementById('dbIdPh').classList.toggle('off',on);document.getElementById('dbIdRm').classList.toggle('on',on);document.getElementById('dbGalleryBtn').classList.toggle('off',on);}
function resetDbId(){setDbId(false);if(document.getElementById('dbIdPrev'))document.getElementById('dbIdPrev').src='';}

// Direct borrow signature pad
function initDbSigPad(){
  const canvas=document.getElementById('dbSigCanvas');
  if(!canvas)return;
  canvas.width=560;canvas.height=150;
  const ctx=canvas.getContext('2d');let drawing=false,hasMark=false;
  function setStyle(){ctx.strokeStyle=isDark()?'#cbd5e1':'#0f172a';ctx.lineWidth=3;ctx.lineCap='round';ctx.lineJoin='round';}
  setStyle();
  function getXY(e){const r=canvas.getBoundingClientRect();const sx=canvas.width/r.width,sy=canvas.height/r.height;const src=e.touches?e.touches[0]:e;return{x:(src.clientX-r.left)*sx,y:(src.clientY-r.top)*sy};}
  canvas.addEventListener('touchstart',e=>{e.preventDefault();drawing=true;const p=getXY(e);ctx.beginPath();ctx.moveTo(p.x,p.y);},{passive:false});
  canvas.addEventListener('touchmove',e=>{if(!drawing)return;e.preventDefault();const p=getXY(e);ctx.lineTo(p.x,p.y);ctx.stroke();hasMark=true;},{passive:false});
  canvas.addEventListener('touchend',()=>drawing=false);
  canvas.addEventListener('mousedown',e=>{drawing=true;const p=getXY(e);ctx.beginPath();ctx.moveTo(p.x,p.y);});
  canvas.addEventListener('mousemove',e=>{if(!drawing)return;const p=getXY(e);ctx.lineTo(p.x,p.y);ctx.stroke();hasMark=true;});
  canvas.addEventListener('mouseup',()=>drawing=false);
  dbSigPad={clear(){ctx.clearRect(0,0,canvas.width,canvas.height);hasMark=false;setStyle();},isEmpty(){return!hasMark;},toURL(){return hasMark?canvas.toDataURL('image/png'):null;},refreshTheme(){setStyle();}};
}
function clearDbSig(){if(dbSigPad)dbSigPad.clear();}


// ═══ QR CODE SYSTEM ═══
let qrItemId=null,scanStream=null,scanRaf=null,scannedId=null,stationItemId=null;

function openQR(id){
  const item=items.find(i=>i.id===id);if(!item)return;
  qrItemId=id;
  const box=document.getElementById('qrCanvas');
  box.innerHTML='';
  const data=JSON.stringify({app:'WARESTOCK',id:item.id,name:item.name,
    category:item.category,location:item.location||'',unit:item.unit});
  try{
    if(window.QRCode){
      new QRCode(box,{text:data,width:220,height:220,
        colorDark:'#0f172a',colorLight:'#ffffff',
        correctLevel:QRCode.CorrectLevel.M});
    } else {
      box.innerHTML='<div style="padding:20px;text-align:center;color:var(--t2);font-size:12px">QR library loading…<br/>Needs internet on first use</div>';
    }
  }catch(e){box.innerHTML='<div style="padding:20px;color:var(--t2)">QR error</div>';}
  const av=avail(item);const cc=catColor(item.category);
  const lc=item.location?locColor(item.location):null;
  document.getElementById('qrName').textContent=item.name;
  document.getElementById('qrItemId').textContent='ID: '+item.id;
  document.getElementById('qrBadges').innerHTML=
    '<span class="badge" style="background:'+cc.bg+';color:'+cc.fg+'">'+esc(item.category)+'</span>'
    +(lc?'<span class="badge" style="background:'+lc.bg+';color:'+lc.fg+'">📍 '+esc(item.location)+'</span>':'');
  const lowC=isLow(item)?'#ef4444':'var(--t1)';
  document.getElementById('qrStats').innerHTML=
    '<div><div style="font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:var(--t3);font-weight:700">Available</div>'
    +'<div style="font-family:var(--fh);font-size:26px;font-weight:800;color:'+lowC+'">'+av+' <span style="font-size:13px;color:var(--t3)">'+esc(item.unit)+'</span></div></div>'
    +'<div><div style="font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:var(--t3);font-weight:700">Total Stock</div>'
    +'<div style="font-family:var(--fh);font-size:26px;font-weight:800;color:var(--t1)">'+item.quantity+' <span style="font-size:13px;color:var(--t3)">'+esc(item.unit)+'</span></div></div>'
    +(totBor(item)>0?'<div><div style="font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:var(--t3);font-weight:700">Borrowed</div>'
    +'<div style="font-family:var(--fh);font-size:26px;font-weight:800;color:#3b82f6">'+totBor(item)+' <span style="font-size:13px;color:var(--t3)">'+esc(item.unit)+'</span></div></div>':'');
  show('qrOv');
}
function closeQR(){hide('qrOv');}

function printQRLabel(){
  const item=items.find(i=>i.id===qrItemId);if(!item)return;
  const av=avail(item);
  const qd=encodeURIComponent(JSON.stringify({app:'WARESTOCK',id:item.id,name:item.name,
    category:item.category,location:item.location||'',unit:item.unit}));
  const qrUrl='https://api.qrserver.com/v1/create-qr-code/?size=180x180&data='+qd+'&bgcolor=FFFFFF&color=0f172a&margin=8';
  const html='<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Label</title>'
    +'<style>@page{size:80mm 100mm;margin:0}*{box-sizing:border-box;margin:0;padding:0}'
    +'body{font-family:Arial,sans-serif;width:80mm;padding:5mm;background:#fff}'
    +'.logo{font-size:11px;font-weight:900;letter-spacing:1px}'
    +'.logo b{color:#f97316}.nm{font-size:17px;font-weight:900;margin:3px 0;word-break:break-word;line-height:1.1}'
    +'.ct{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;background:#f0f2f5;border-radius:3px;padding:2px 6px;display:inline-block;margin-bottom:3px}'
    +'.lc{font-size:10px;color:#64748b;margin-bottom:5px}hr{border:none;border-top:1px solid #e2e8f0;margin:4px 0}'
    +'.row{display:flex;align-items:flex-start;gap:8px}.qr{width:68px;height:68px;flex-shrink:0;border:1px solid #e2e8f0;border-radius:4px}'
    +'.sl{font-size:9px;text-transform:uppercase;letter-spacing:.4px;color:#94a3b8;font-weight:700}'
    +'.sv{font-size:13px;font-weight:900;margin-bottom:3px}.ft{margin-top:5px;font-size:8px;color:#94a3b8;display:flex;justify-content:space-between}'
    +'@media print{body{width:80mm}}</style></head><body>'
    +'<div class="logo">WARE<b>STOCK</b></div><hr/>'
    +'<div class="nm">'+esc(item.name)+'</div>'
    +'<div class="ct">'+esc(item.category)+'</div>'
    +(item.location?'<div class="lc">📍 '+esc(item.location)+'</div>':'')
    +'<div class="row"><img class="qr" src="'+qrUrl+'" alt="QR"/>'
    +'<div><div class="sl">Available</div><div class="sv">'+av+' '+esc(item.unit)+'</div>'
    +'<div class="sl">Total Stock</div><div class="sv">'+item.quantity+' '+esc(item.unit)+'</div>'
    +'<div class="sl">Min Alert</div><div class="sv">'+item.threshold+' '+esc(item.unit)+'</div>'
    +'</div></div><hr/>'
    +'<div class="ft"><span>ID: '+item.id.slice(0,14)+'</span><span>'+new Date().toLocaleDateString()+'</span></div>'
    +'</body></html>';
  const w=window.open('','_blank','width=380,height=560');
  if(w){w.document.write(html);w.document.close();setTimeout(()=>w.print(),700);}
  else toast('Allow pop-ups to print labels');
}

function shareQR(){
  const item=items.find(i=>i.id===qrItemId);if(!item)return;
  const text='📦 '+item.name+'\\nCategory: '+item.category+(item.location?'\\nLocation: '+item.location:'')
    +'\\nAvailable: '+avail(item)+' '+item.unit+'\\nTotal: '+item.quantity+' '+item.unit+'\\nID: '+item.id;
  if(navigator.share){navigator.share({title:'WareStock – '+item.name,text}).catch(()=>{});}
  else{navigator.clipboard.writeText(text).then(()=>toast('Copied to clipboard')).catch(()=>toast('Could not copy'));}
}

function openScanner(){
  scannedId=null;
  document.getElementById('scanOk').style.display='none';
  document.getElementById('scanHint').textContent='Point camera at a WareStock QR code';
  show('scanOv');
  setTimeout(startScan,350);
}
function closeScanner(){stopScan();hide('scanOv');}
function stopScan(){
  if(scanRaf){cancelAnimationFrame(scanRaf);scanRaf=null;}
  if(scanStream){scanStream.getTracks().forEach(t=>t.stop());scanStream=null;}
}
async function startScan(){
  const video=document.getElementById('scanVideo');
  const canvas=document.getElementById('scanCanvas');
  const hint=document.getElementById('scanHint');
  try{
    scanStream=await navigator.mediaDevices.getUserMedia(
      {video:{facingMode:'environment',width:{ideal:1280},height:{ideal:720}}});
    video.srcObject=scanStream;await video.play();
    hint.textContent='🔍 Scanning… align QR in the frame';
    const ctx=canvas.getContext('2d');
    function tick(){
      if(!scanStream)return;
      if(video.readyState===video.HAVE_ENOUGH_DATA){
        canvas.width=video.videoWidth;canvas.height=video.videoHeight;
        ctx.drawImage(video,0,0,canvas.width,canvas.height);
        if(window.jsQR){
          try{const code=jsQR(ctx.getImageData(0,0,canvas.width,canvas.height).data,canvas.width,canvas.height);
            if(code&&code.data){handleScan(code.data);return;}}catch(e){}
        }
      }
      scanRaf=requestAnimationFrame(tick);
    }
    scanRaf=requestAnimationFrame(tick);
  }catch(err){hint.textContent='⚠ Camera access denied — allow camera permission and retry';}
}
function handleScan(data){
  stopScan();
  const hint=document.getElementById('scanHint');
  const okEl=document.getElementById('scanOk');
  const cont=document.getElementById('scanOkContent');
  let parsed=null;try{parsed=JSON.parse(data);}catch(e){}
  if(parsed&&parsed.app==='WARESTOCK'){
    const item=items.find(i=>i.id===parsed.id);
    if(item){
      scannedId=item.id;const cc=catColor(item.category);const av=avail(item);
      const lc=item.location?locColor(item.location):null;
      cont.innerHTML='<div style="font-family:var(--fh);font-size:20px;font-weight:800;color:var(--t1)">'+esc(item.name)+'</div>'
        +'<div style="display:flex;gap:6px;margin:6px 0;flex-wrap:wrap">'
        +'<span class="badge" style="background:'+cc.bg+';color:'+cc.fg+'">'+esc(item.category)+'</span>'
        +(lc?'<span class="badge" style="background:'+lc.bg+';color:'+lc.fg+'">📍 '+esc(item.location)+'</span>':'')+'</div>'
        +'<div style="display:flex;gap:18px;margin-top:6px">'
        +'<div><div style="font-size:10px;color:var(--t3);text-transform:uppercase;font-weight:700">Available</div>'
        +'<div style="font-family:var(--fh);font-size:26px;font-weight:800;color:'+(isLow(item)?'#ef4444':'#22c55e')+'">'+av+' '+esc(item.unit)+'</div></div>'
        +'<div><div style="font-size:10px;color:var(--t3);text-transform:uppercase;font-weight:700">Total</div>'
        +'<div style="font-family:var(--fh);font-size:26px;font-weight:800;color:var(--t1)">'+item.quantity+' '+esc(item.unit)+'</div></div></div>';
      hint.textContent='✅ WareStock item found!';
    } else {
      scannedId=null;
      hint.textContent='⚠ Item not in this inventory';
      cont.innerHTML='<div style="font-size:13px;color:var(--t2)">Item "'+esc(parsed.name||'')+'" not found.</div>';
    }
  } else {
    scannedId=null;hint.textContent='⚠ Not a WareStock QR code';
    cont.innerHTML='<div style="font-size:12px;color:var(--t2);word-break:break-all">'+esc(data.slice(0,100))+(data.length>100?'…':'')+'</div>';
  }
  okEl.style.display='block';
}
function goToScanned(){
  if(!scannedId)return;closeScanner();
  if(curView!=='inv')switchView('inv');
  setTimeout(()=>{
    scrollToCard(scannedId);
    const el=document.getElementById('c-'+scannedId);
    if(el){el.style.transition='box-shadow .3s';el.style.boxShadow='0 0 0 4px #f97316';setTimeout(()=>el.style.boxShadow='',2200);}
  },350);
}
function borrowScanned(){
  if(!scannedId)return;closeScanner();
  if(curView!=='inv')switchView('inv');
  setTimeout(()=>openBorrow(scannedId),350);
}
function openStation(id){
  const item=items.find(i=>i.id===id);if(!item)return;
  stationItemId=id;renderStation();
  document.getElementById('stationOv').classList.add('on');
}
function closeStation(){document.getElementById('stationOv').classList.remove('on');stationItemId=null;}
function renderStation(){
  const item=items.find(i=>i.id===stationItemId);if(!item)return;
  const av=avail(item);const low=isLow(item);
  const img=document.getElementById('stationImg');
  if(item.image){img.src=item.image;img.style.display='block';}else{img.style.display='none';}
  document.getElementById('stationCat').textContent=item.category+(item.location?' · '+item.location:'');
  document.getElementById('stationName').textContent=item.name;
  document.getElementById('stationQnum').textContent=av;
  document.getElementById('stationQnum').style.color=low?'#ef4444':'var(--t1)';
  document.getElementById('stationUnit').textContent=item.unit;
  document.getElementById('stationWarn').style.display=low?'block':'none';
  document.getElementById('stationUse').disabled=av<=0;
}
function stationAdj(delta){
  const item=items.find(i=>i.id===stationItemId);if(!item)return;
  const before=item.quantity;item.quantity=Math.max(0,item.quantity+delta);
  const actual=item.quantity-before;if(actual===0)return;
  if(!item.stockLog)item.stockLog=[];
  item.stockLog.unshift({type:actual>0?'restock':'use',delta:Math.abs(actual),before,after:item.quantity,timestamp:new Date().toISOString()});
  saveItems();render();renderStation();
  toast((delta>0?'Restocked':'Used')+': '+item.name+' → '+avail(item)+' '+item.unit);
}
// END QR SYSTEM


// ═══ PERSONNEL & ISSUANCE SYSTEM ═══
const PKEY = 'ws_personnel_v1';
let personnel = [];
let issueItemId = null;
let issuePersonId = null;

function loadPersonnel(){
  try{ personnel = JSON.parse(localStorage.getItem(PKEY)) || []; }
  catch(e){ personnel = []; }
  personnel.forEach(p => { if(!p.issues) p.issues = []; });
}
function savePersonnel(){ localStorage.setItem(PKEY, JSON.stringify(personnel)); }

// ── PERSONNEL MANAGER ─────────────────────────────────────────────────────
function openPersonnelMgr(){
  renderPersonnelMgr();
  show('personnelOv');
}
function closePersonnelMgr(){ hide('personnelOv'); }

function renderPersonnelMgr(){
  const totalIssues = personnel.reduce((s,p)=>s+(p.issues||[]).length, 0);
  document.getElementById('personnelStats').innerHTML =
    \`<div class="chip"><b>\${personnel.length}</b>&nbsp;people</div>\`
    +(totalIssues>0?\`<div class="chip i"><b>\${totalIssues}</b>&nbsp;total issues</div>\`:'');
  const el = document.getElementById('personnelList');
  if(!personnel.length){
    el.innerHTML='<div class="norows">No personnel added yet.</div>';return;
  }
  el.innerHTML = personnel.map(p=>{
    const total = (p.issues||[]).reduce((s,i)=>s+i.quantity,0);
    const todayIss = (p.issues||[]).filter(i=>new Date(i.timestamp).toDateString()===new Date().toDateString());
    const todayTotal = todayIss.reduce((s,i)=>s+i.quantity,0);
    const initials = p.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    return \`<div class="person-row" onclick="openPersonDetail('\${p.id}')">
      <div class="person-avatar">\${initials}</div>
      <div class="person-info">
        <div class="person-name">\${esc(p.name)}</div>
        \${p.department?\`<div class="person-dept">\${esc(p.department)}</div>\`:''}
      </div>
      <div class="person-stat">
        \${todayTotal>0?\`<div class="person-total">\${todayTotal}</div><div class="person-total-lbl">today</div>\`:''}
        \${total>0&&!todayTotal?\`<div style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--t3)">\${total}</div><div class="person-total-lbl">total</div>\`:''}
      </div>
      <button class="person-act del" onclick="event.stopPropagation();deletePerson('\${p.id}')">
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
      </button>
    </div>\`;
  }).join('');
}

function addPerson(){
  const name = document.getElementById('newPersonName').value.trim();
  const dept = document.getElementById('newPersonDept').value.trim();
  if(!name){ toast('Enter a name'); return; }
  if(personnel.some(p=>p.name.toLowerCase()===name.toLowerCase())){
    toast('Person already in list'); return;
  }
  personnel.push({ id: uid(), name, department: dept, issues: [] });
  savePersonnel();
  document.getElementById('newPersonName').value = '';
  document.getElementById('newPersonDept').value = '';
  renderPersonnelMgr();
  toast('✅ '+name+' added to personnel list');
}

function deletePerson(id){
  const p = personnel.find(x=>x.id===id);
  if(!p) return;
  if((p.issues||[]).length > 0){
    if(!confirm('Delete "'+p.name+'"? This will also delete their '+p.issues.length+' issuance record(s).')) return;
  }
  personnel = personnel.filter(x=>x.id!==id);
  savePersonnel(); renderPersonnelMgr();
  toast('"'+p.name+'" removed');
}

// ── PERSON DETAIL ─────────────────────────────────────────────────────────
function openPersonDetail(id){
  const p = personnel.find(x=>x.id===id);
  if(!p) return;
  const initials = p.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  document.getElementById('personDetailTitle').innerHTML =
    \`<span style="display:inline-flex;align-items:center;gap:10px">
      <span style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;font-family:var(--fh);font-size:14px;font-weight:800;display:inline-flex;align-items:center;justify-content:center">\${initials}</span>
      \${esc(p.name)}
    </span>\`;
  const issues = p.issues||[];
  const totalQty   = issues.reduce((s,i)=>s+i.quantity,0);
  const todayIss   = issues.filter(i=>new Date(i.timestamp).toDateString()===new Date().toDateString());
  const todayQty   = todayIss.reduce((s,i)=>s+i.quantity,0);
  const uniqueItems= new Set(issues.map(i=>i.itemName)).size;
  document.getElementById('personDetailStats').innerHTML =
    \`<div class="chip"><b>\${totalQty}</b>&nbsp;total issued</div>\`
    +(todayQty?\`<div class="chip warn"><b>\${todayQty}</b>&nbsp;today</div>\`:'')
    +(uniqueItems?\`<div class="chip i"><b>\${uniqueItems}</b>&nbsp;item types</div>\`:'');
  const el = document.getElementById('personDetailBody');
  if(!issues.length){
    el.innerHTML=\`<div class="norows">No issuance records yet for \${esc(p.name)}.</div>\`;
    show('personDetailOv'); return;
  }
  const byDay={};
  [...issues].sort((a,b)=>new Date(b.timestamp)-new Date(a.timestamp)).forEach(iss=>{
    const day=new Date(iss.timestamp).toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric',year:'numeric'});
    if(!byDay[day])byDay[day]=[];
    byDay[day].push(iss);
  });
  el.innerHTML=Object.entries(byDay).map(([day,list])=>{
    const dayTotal=list.reduce((s,i)=>s+i.quantity,0);
    return \`<div class="issue-day">
      <div class="issue-day-hdr">
        <div class="issue-day-lbl">📅 \${day}</div>
        <div class="issue-day-total">\${dayTotal} issued</div>
      </div>
      \${list.map(iss=>{
        const cc=catColor(iss.category||'Others');
        const timeStr=new Date(iss.timestamp).toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit'});
        return \`<div class="issue-entry">
          <div class="issue-dot"></div>
          <div style="flex:1;min-width:0">
            <div class="issue-item-name">\${esc(iss.itemName)}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <span class="badge" style="background:\${cc.bg};color:\${cc.fg}">\${esc(iss.category||'')}</span>
              \${iss.note?\`<span style="font-size:11px;color:var(--t3);font-style:italic">\${esc(iss.note)}</span>\`:''}
            </div>
          </div>
          <div class="issue-time">\${timeStr}</div>
          <div class="issue-qty">\${iss.quantity} <span style="font-size:11px;color:var(--t3);font-weight:500">\${esc(iss.unit||'')}</span></div>
        </div>\`;
      }).join('')}
    </div>\`;
  }).join('');
  show('personDetailOv');
}

function closePersonDetail(){ hide('personDetailOv'); }

// ── ISSUE FORM ────────────────────────────────────────────────────────────
function openIssue(id){
  const item = items.find(i=>i.id===id);
  if(!item) return;
  issueItemId = id;
  issuePersonId = null;

  // Banner
  const cc = catColor(item.category);
  const lc = item.location ? locColor(item.location) : null;
  document.getElementById('issueBanner').innerHTML =
    '<div style="font-family:var(--fh);font-size:18px;font-weight:800;color:var(--t1)">'+esc(item.name)+'</div>'
    +'<div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:4px">'
    +'<span class="badge" style="background:'+cc.bg+';color:'+cc.fg+'">'+esc(item.category)+'</span>'
    +(lc?'<span class="badge" style="background:'+lc.bg+';color:'+lc.fg+'">📍 '+esc(item.location)+'</span>':'')
    +'</div>';

  document.getElementById('issueBanner').title = item.name;
  document.getElementById('issueTitle').textContent = '📋 Issue: '+item.name;
  document.getElementById('issueQty').value = '1';
  document.getElementById('issueNote').value = '';
  document.getElementById('issueUnit').value = item.unit;
  document.getElementById('issuePersonSearch').value = '';
  document.getElementById('issueSelectedPerson').style.display = 'none';
  document.getElementById('issuePersonErr').classList.remove('on');
  document.getElementById('issueQtyErr').classList.remove('on');
  document.getElementById('issueAvailBox').innerHTML =
    '<b>'+avail(item)+' '+esc(item.unit)+'</b> available';

  renderPersonPicker('');
  show('issueOv');
  setTimeout(()=>document.getElementById('issuePersonSearch').focus(), 340);
}
function closeIssue(){ hide('issueOv'); }

function renderPersonPicker(filter){
  const list = document.getElementById('personPickList');
  if(!personnel.length){
    list.innerHTML=\`<div style="text-align:center;padding:16px;color:var(--t3);font-size:13px">No personnel added yet.<br/><button onclick="closeIssue();openPersonnelMgr()" style="margin-top:8px;background:none;border:none;color:#f97316;font-weight:700;cursor:pointer;font-size:13px">Add people first →</button></div>\`;
    return;
  }
  const q = filter.toLowerCase().trim();
  const filtered = q ? personnel.filter(p=>p.name.toLowerCase().includes(q)||(p.department||'').toLowerCase().includes(q)) : personnel;
  list.innerHTML = filtered.map(p=>{
    const initials = p.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    const sel = p.id===issuePersonId;
    return \`<div class="person-pick-item\${sel?' sel':''}" onclick="selectPerson('\${p.id}')">
      <div class="person-pick-avatar">\${initials}</div>
      <div>
        <div style="font-size:14px;font-weight:600;color:var(--t1)">\${esc(p.name)}</div>
        \${p.department?\`<div style="font-size:11px;color:var(--t2)">\${esc(p.department)}</div>\`:''}
      </div>
      \${sel?'<svg style="margin-left:auto;flex-shrink:0;color:#f97316" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>':''}
    </div>\`;
  }).join('');
}

function filterPersonPicker(){
  renderPersonPicker(document.getElementById('issuePersonSearch').value);
}

function selectPerson(id){
  issuePersonId = id;
  const p = personnel.find(x=>x.id===id);
  document.getElementById('issueSelectedPerson').style.display = 'block';
  document.getElementById('issueSelectedName').textContent = p.name;
  document.getElementById('issueSelectedDept').textContent = p.department || '';
  document.getElementById('issuePersonErr').classList.remove('on');
  renderPersonPicker(document.getElementById('issuePersonSearch').value);
}

function submitIssue(){
  const item = items.find(i=>i.id===issueItemId);
  if(!item) return;
  let ok = true;
  if(!issuePersonId){
    document.getElementById('issuePersonErr').classList.add('on'); ok = false;
  }
  const qty = parseInt(document.getElementById('issueQty').value);
  const av  = avail(item);
  if(!qty||qty<1||qty>av){
    document.getElementById('issueQtyErr').textContent = qty>av?'Only '+av+' available':'Enter a valid amount';
    document.getElementById('issueQtyErr').classList.add('on'); ok = false;
  }
  if(!ok) return;

  const person = personnel.find(x=>x.id===issuePersonId);
  const note   = document.getElementById('issueNote').value.trim();
  const ts     = new Date().toISOString();

  // Record on person
  const issueRec = {
    id: uid(), itemId: item.id, itemName: item.name,
    category: item.category, quantity: qty, unit: item.unit,
    timestamp: ts, note: note||null
  };
  if(!person.issues) person.issues = [];
  person.issues.unshift(issueRec);

  // Deduct from stock + add to stock log
  item.quantity = Math.max(0, item.quantity - qty);
  if(!item.stockLog) item.stockLog = [];
  item.stockLog.unshift({
    type:'use', delta:qty, before:item.quantity+qty, after:item.quantity,
    timestamp:ts, issuedTo:person.name
  });

  // Also record in item history
  if(!item.history) item.history = [];
  item.history.unshift({
    type:'issued', borrower:person.name, project:person.department||'',
    quantity:qty, unit:item.unit, timestamp:ts, note:note||null
  });

  savePersonnel(); saveItems(); render(); closeIssue();
  toast('✅ '+qty+' '+item.unit+' of '+item.name+' issued to '+person.name);
}

// Also call loadPersonnel in init


// ═══ TOOLS SYSTEM ═══

// TOOL LIBRARY DATA
const TOOL_LIBRARY = [
// ── HAND TOOLS ──────────────────────────────────────────────────────────────
{id:'claw-hammer',name:'Claw Hammer',cat:'Hand Tools',icon:'🔨',
desc:'A two-in-one hand tool with a flat striking face and a split curved claw. The most common hammer in construction and carpentry.',
uses:['Driving nails into wood and other materials','Removing nails using the claw end','Light demolition and prying apart boards','General framing and carpentry tasks'],
safety:'Always wear safety glasses. Inspect the head for cracks and ensure the handle is tight before use. Strike squarely — a glancing blow can send a nail flying. Never use the side of the head to strike.',
specs:'Weight: 16–20 oz (450–560 g) standard. Handle: wood, fibreglass, or steel.'},

{id:'ball-peen-hammer',name:'Ball Peen Hammer',cat:'Hand Tools',icon:'🔨',
desc:'A metalworking hammer with a flat face on one end and a rounded "peen" on the other. Used for shaping metal and striking chisels.',
uses:['Striking cold chisels and punches','Rounding off edges of fasteners','Shaping and peening sheet metal','Riveting work'],
safety:'Wear eye protection — metal chips can fly. The head must be firmly attached. Never use a claw hammer to strike metal; use a ball peen instead.',
specs:'Weight: 8–48 oz. Common sizes: 12 oz and 16 oz for general use.'},

{id:'sledgehammer',name:'Sledgehammer',cat:'Hand Tools',icon:'🔨',
desc:'A heavy long-handled hammer used for heavy driving and demolition. Delivers much greater force than a standard hammer.',
uses:['Breaking concrete, brick, and masonry','Driving stakes and fence posts','Demolition work','Setting or removing large pins and wedges'],
safety:'Clear the swing area before striking. Wear eye protection, hard hat, and steel-toed boots. Use a two-hand grip. Never use if the head is loose. Do NOT strike hardened steel — the head can chip.',
specs:'Weight: 4–20 lbs (1.8–9 kg). Lengths: 36–48 in (90–120 cm).'},

{id:'flathead-screwdriver',name:'Flathead Screwdriver',cat:'Hand Tools',icon:'🪛',
desc:'A screwdriver with a single flat blade tip designed to fit slotted screw heads. One of the oldest and most common tools.',
uses:['Driving and removing slotted screws','Prying open paint can lids','Light prying and scraping tasks'],
safety:'Never use as a chisel or pry bar — the blade can snap. Keep the tip sharp and properly ground to avoid cam-out. Point away from your body. Use the correct blade width for the screw.',
specs:'Tip widths: 3–12 mm. Shaft lengths: 75–300 mm.'},

{id:'phillips-screwdriver',name:'Phillips Screwdriver',cat:'Hand Tools',icon:'🪛',
desc:'A screwdriver with a cross-shaped tip that engages four drive points in a Phillips head screw, providing better torque and reduced cam-out.',
uses:['Driving and removing Phillips head screws','Assembling furniture and equipment','Electrical panel work and electronics assembly'],
safety:'Use the correct size — a mismatched tip will damage the screw head. Apply downward pressure while turning to prevent cam-out. Inspect for worn or damaged tips regularly.',
specs:'Sizes: #0 (smallest) to #4. Most common: #2 for general use.'},

{id:'combination-wrench',name:'Combination Wrench',cat:'Hand Tools',icon:'🔧',
desc:'A wrench with an open-end on one side and a closed ring (box end) on the other, both sized to fit the same bolt or nut.',
uses:['Tightening and loosening bolts and nuts','The box end provides more grip; the open end allows quick repositioning','Used across mechanical, plumbing, and construction work'],
safety:'Always pull a wrench toward you rather than pushing. Use the right size — a loose-fitting wrench can slip and injure your knuckles. Never extend the handle with a pipe (cheater bar).',
specs:'Sizes: 6–50 mm (metric) or 1/4–2 in (imperial). Material: chrome vanadium steel.'},

{id:'adjustable-wrench',name:'Adjustable Wrench (Crescent)',cat:'Hand Tools',icon:'🔧',
desc:'A wrench with a movable jaw that can be adjusted to fit a wide range of nut and bolt sizes using a worm gear mechanism.',
uses:['Fitting various bolt/nut sizes without changing tools','Plumbing and pipe fitting','Quick tasks where a full wrench set is unavailable'],
safety:'Always turn so that the force is applied to the fixed (solid) jaw, not the movable jaw. Ensure the jaw is fully tightened before applying force. Not a substitute for a proper fixed wrench on critical joints.',
specs:'Common lengths: 6 in, 8 in, 10 in, 12 in (150–300 mm).'},

{id:'torque-wrench',name:'Torque Wrench',cat:'Hand Tools',icon:'🔧',
desc:'A precision wrench that allows the user to apply a specific, measured amount of rotational force (torque) to a fastener.',
uses:['Tightening bolts to manufacturer-specified torque values','Critical structural connections — flanges, cylinder heads, wheel nuts','Preventing under-tightening (loose joints) and over-tightening (stripped threads)'],
safety:'Always set to the correct torque value before use. Zero out the setting after use to prevent spring fatigue. Do NOT use as a breaker bar — only use in the tightening direction. Calibrate regularly.',
specs:'Types: click-type, beam, digital. Range: commonly 20–200 Nm or 15–150 ft·lb.'},

{id:'pipe-wrench',name:'Pipe Wrench',cat:'Hand Tools',icon:'🔧',
desc:'A heavy-duty wrench with serrated adjustable jaws designed to grip and turn round pipes and fittings.',
uses:['Tightening and loosening threaded pipe connections','Plumbing and gas line work','Gripping round stock that a standard wrench cannot hold'],
safety:'Always use two wrenches — one to hold, one to turn. The teeth will mark the surface; do not use on finished or chrome fittings. Keep jaws clean and adjusted snugly. Use only on round pipe.',
specs:'Common sizes: 14 in, 18 in, 24 in, 36 in. Heavier gauge for larger pipe.'},

{id:'hacksaw',name:'Hacksaw',cat:'Hand Tools',icon:'🪚',
desc:'A fine-toothed bow saw used to cut metal, plastic, and other hard materials. Blade is stretched in a C-shaped frame.',
uses:['Cutting metal pipe, conduit, and bar stock','Cutting bolts and threaded rod to length','Trimming plastic pipe and profiles','Cutting tile, bone, and other hard materials'],
safety:'Wear gloves and eye protection — metal chips and broken blade fragments are hazards. Install blade with teeth pointing forward. Keep cuts controlled and steady. Replace dull or cracked blades immediately.',
specs:'Blade length: 300 mm (12 in) standard. TPI (teeth per inch): 18 TPI for soft metal, 24–32 TPI for thin or hard metal.'},

{id:'utility-knife',name:'Utility Knife / Box Cutter',cat:'Hand Tools',icon:'🔪',
desc:'A retractable blade knife used for cutting soft materials such as cardboard, rope, strapping, insulation, drywall, and packaging.',
uses:['Opening boxes and packaging','Cutting drywall, carpet, and vinyl flooring','Trimming insulation and foam','Scoring materials for clean breaks'],
safety:'Always retract the blade when not in use. Cut away from your body. Use a fresh blade — dull blades require more force and slip more easily. Never carry in a pocket without the guard engaged.',
specs:'Standard blade: 18 mm or 25 mm wide snap-off or fixed. Blades rated in segments (10 segments per blade).'},

{id:'pliers',name:'Combination Pliers',cat:'Hand Tools',icon:'🔧',
desc:'A versatile gripping tool with serrated jaws for holding, bending, and cutting wire. The most common type of pliers in general use.',
uses:['Gripping and holding round, flat, or irregular objects','Bending and shaping wire and thin metal','Cutting soft wire (with side cutters)','General gripping tasks'],
safety:'Do not use on nuts and bolts — use a proper wrench. The jaws can round off fasteners. Never use as a hammer. Keep pivot joint lubricated.',
specs:'Length: 160–200 mm (6–8 in) typical.'},

{id:'needle-nose-pliers',name:'Needle Nose Pliers',cat:'Hand Tools',icon:'🔧',
desc:'Long, tapered jaws allow access to tight spaces and delicate grip on small components. Also called long-nose pliers.',
uses:['Electrical wiring — bending, shaping, and holding wires','Reaching into confined spaces','Retrieving small fasteners and pins','Jewellery and fine assembly work'],
safety:'Not designed for heavy loads — the long jaws can bend or break under high force. Use insulated versions for electrical work. Keep jaws clean.',
specs:'Length: 130–200 mm. Tip radius: 1–3 mm.'},

{id:'locking-pliers',name:'Locking Pliers (Vise-Grip)',cat:'Hand Tools',icon:'🔧',
desc:'Pliers that can be locked in place on a workpiece using an over-centre mechanism, freeing the user\\'s hands or providing a very firm grip.',
uses:['Holding workpieces while welding or drilling','Gripping rounded or damaged fasteners','Clamping materials together temporarily','Removing stripped bolts and nuts'],
safety:'Adjust the jaws correctly before clamping — excessive force can crack weaker materials. Do not use near electrical conductors unless insulated. Release carefully to prevent sudden movement.',
specs:'Common sizes: 7 in and 10 in. Jaw types: curved, straight, needle-nose, chain.'},

{id:'tape-measure',name:'Tape Measure',cat:'Hand Tools',icon:'📏',
desc:'A flexible ruler enclosed in a case, used to measure distances and lengths. The standard measuring tool on any job site.',
uses:['Measuring lengths, widths, and heights of materials','Laying out cut marks on timber, pipe, and sheet goods','Checking distances between structural elements','Inside and outside measurements using the hook and case'],
safety:'Return the blade slowly — a fast snap can cut fingers on the sharp blade edge. Do not use a metal tape near live electrical components. Inspect blade for kinks and damage.',
specs:'Common lengths: 3 m, 5 m, 8 m, 10 m. Blade width: 19 mm (¾ in) or 25 mm (1 in) for reach.'},

{id:'spirit-level',name:'Spirit Level (Bubble Level)',cat:'Hand Tools',icon:'📐',
desc:'A tool containing liquid-filled vials with air bubbles used to determine whether a surface is horizontal (level) or vertical (plumb).',
uses:['Ensuring shelves, frames, and surfaces are level','Checking vertical plumb on posts and walls','Setting equipment on level foundations','Checking pipe and duct slope/fall'],
safety:'Handle carefully — the vials are glass and break easily. Do not drop. Clean the working edge before use — debris under the level gives false readings.',
specs:'Lengths: 400 mm, 600 mm, 1200 mm, 1800 mm. Accuracy: ±0.5 mm/m typical.'},

{id:'pry-bar',name:'Pry Bar / Crowbar',cat:'Hand Tools',icon:'🪝',
desc:'A solid steel lever bar with a flattened end and a curved claw used for prying, lifting, and dismantling.',
uses:['Removing nails and prying apart nailed timber','Lifting and shifting heavy objects','Demolition — separating formwork, breaking joints','Opening crates and sealed containers'],
safety:'Wear eye protection — flying nails are a hazard. Ensure the fulcrum point is stable before levering. Do NOT use near live electrical components. Keep fingers clear of the work.',
specs:'Lengths: 300 mm (12 in) to 1500 mm (60 in). Material: hardened steel.'},

// ── POWER TOOLS ──────────────────────────────────────────────────────────────
{id:'angle-grinder',name:'Angle Grinder',cat:'Power Tools',icon:'⚙️',
desc:'A handheld power tool that uses abrasive discs to grind, cut, and polish metal and other hard materials. One of the most hazardous power tools on site.',
uses:['Cutting metal pipe, rod, and flat bar (cut-off disc)','Grinding welds and sharp edges smooth','Removing rust and surface scale','Polishing metal with flap disc'],
safety:'Always wear full face shield, N95 mask, gloves, and fitted non-flammable clothing. Inspect disc for cracks before use. Ensure guard is in place. Never use a cut-off disc for grinding. Run freely for 30 sec before cutting. Keep bystanders at least 3 m away.',
specs:'Disc sizes: 100 mm (4 in), 115 mm, 125 mm (5 in), 230 mm (9 in). Speed: 11,000–12,000 RPM for small; 6,600 for large.'},

{id:'electric-drill',name:'Electric Drill / Driver',cat:'Power Tools',icon:'🔩',
desc:'A rotary power tool used to drill holes and drive screws. Available as corded or cordless (battery-powered).',
uses:['Drilling holes in wood, metal, masonry (with correct bit)','Driving and removing screws at speed','Mixing paint or mortar (with paddle attachment)','Reaming and countersinking'],
safety:'Secure workpiece — never hold with your hand. Use correct bit type and size. Keep cord away from drill path. Use a depth stop for consistent holes. Wear eye protection — broken bits can fly.',
specs:'Chuck sizes: 10 mm and 13 mm. Cordless voltage: 12 V, 18 V, 20 V. Torque: 30–80 Nm typical.'},

{id:'impact-driver',name:'Impact Driver',cat:'Power Tools',icon:'🔩',
desc:'A rotary impact tool that delivers high-torque rotational and concussive blows to drive screws and fasteners. Much more powerful than a drill for fastening.',
uses:['Driving long screws and lag bolts quickly','Removing stubborn or corroded fasteners','High-volume screw-driving tasks in construction','Assembling structural timber connections'],
safety:'The high torque can cause wrist injuries if the bit catches — maintain a firm grip. Use correct impact-rated bits only (standard bits can shatter). Wear eye protection.',
specs:'Voltage: 18 V–20 V cordless. Torque: 150–250 Nm. No-load speed: 2,600–3,200 RPM.'},

{id:'impact-wrench',name:'Impact Wrench',cat:'Power Tools',icon:'🔩',
desc:'A power wrench that uses hammering impact action to deliver very high torque for tightening and loosening large bolts and nuts. Available pneumatic or electric.',
uses:['Removing wheel lug nuts','Structural bolting — flanges, heavy equipment','Breaking loose corroded and over-torqued fasteners','Assembly line and heavy fabrication work'],
safety:'Use correct socket size and always use impact-rated sockets (standard chrome sockets can shatter). Keep hand clear of work. Brace against reaction torque for large fasteners. Wear eye protection.',
specs:'Drive sizes: 1/2 in, 3/4 in, 1 in. Torque: 300–1,800 Nm depending on type.'},

{id:'reciprocating-saw',name:'Reciprocating Saw (Sawzall)',cat:'Power Tools',icon:'🪚',
desc:'A powerful saw with a push-pull blade action used for demolition cutting of wood, metal, pipe, and drywall.',
uses:['Demolition — cutting through walls, floors, and structural members','Cutting pipe and conduit in place','Pruning branches and rough timber cutting','Removing nailed or screwed assemblies'],
safety:'Secure all loose material before cutting. Never cut into walls or floors without confirming there are no hidden pipes, cables, or ducts. Keep both hands on the tool. Wear eye protection and heavy gloves.',
specs:'Stroke length: 28–32 mm. SPM: 0–3,000. Blade lengths: 100–305 mm.'},

{id:'chain-hoist',name:'Chain Block / Chain Hoist',cat:'Power Tools',icon:'⛓️',
desc:'A mechanical lifting device using a chain loop and reduction gearing to lift heavy loads vertically with minimal effort.',
uses:['Lifting and positioning heavy machinery and equipment','Suspending loads for maintenance access','Moving heavy stock in warehouses','Engine removal and installation'],
safety:'Never exceed the rated load capacity (WLL). Inspect chain for twisted, bent, or worn links before each use. Ensure anchor point is rated for the load. Never stand under a suspended load. Never use damaged equipment.',
specs:'Capacities: 0.5 t, 1 t, 2 t, 3 t, 5 t common. Lift heights: 3–6 m standard.'},

// ── MEASURING & SAFETY INSTRUMENTS ──────────────────────────────────────────
{id:'anemometer',name:'Anemometer (Wind Speed Meter)',cat:'Measuring & Safety',icon:'💨',
desc:'A device that measures wind speed. On construction and rope access sites, wind speed directly determines whether it is safe to work at height.',
uses:['Checking wind speed before and during work at height','Monitoring conditions for crane and lifting operations','Assessing conditions for scaffolding erection/dismantling','Ongoing monitoring during elevated work'],
safety:'⚠ WIND SAFETY THRESHOLDS FOR WORK AT HEIGHT:\\n• 0–5 m/s (0–18 km/h, Beaufort 1–2): Safe — normal operations\\n• 5–8 m/s (18–29 km/h, Beaufort 3–4): Caution — secure loose materials, light work only\\n• 8–11 m/s (29–40 km/h, Beaufort 5): Restrict overhead lifts, no large panel handling\\n• 11–14 m/s (40–50 km/h, Beaufort 6): STOP work above 6 m, no lifting operations\\n• 14+ m/s (50+ km/h, Beaufort 7+): STOP ALL work at height immediately\\n\\nBeaufort Force 6 = "Strong Breeze" — large branches move, umbrellas difficult to use. If you feel this, stop work.',
specs:'Digital types read in m/s, km/h, mph, knots, and Beaufort scale. Some log data over time.'},

{id:'gas-detector',name:'Portable Gas Detector (LEL Meter)',cat:'Measuring & Safety',icon:'🔴',
desc:'A device that detects the presence and concentration of flammable or toxic gases in the atmosphere. Essential for confined space entry and hot work.',
uses:['Confined space entry checks — oxygen, CO, H2S, and combustible gas','Pre-hot-work (welding/cutting) area checks','Monitoring during excavation near gas mains','Leak detection on gas lines and fittings'],
safety:'⚠ CRITICAL: Test the detector itself (bump test) before every use. Never enter a confined space without a positive gas check. Evacuate immediately if alarm sounds. LEL 0% = no gas, 100% LEL = explosion is possible. Work should stop at >10% LEL.',
specs:'Common 4-gas detectors measure: O₂ (oxygen), CO (carbon monoxide), H₂S (hydrogen sulphide), LEL (combustible gas).'},

{id:'multimeter',name:'Digital Multimeter (DMM)',cat:'Measuring & Safety',icon:'🔌',
desc:'An electronic measuring instrument that measures voltage (V), current (A), and resistance (Ω). Essential for electrical diagnostics.',
uses:['Checking voltage at outlets and panels','Testing continuity of circuits and fuses','Measuring current draw of equipment','Verifying circuits are de-energised before work'],
safety:'Always verify the meter is rated for the voltage being tested. Start on the highest range and work down. Never measure current (amps) in parallel. Inspect probes for damaged insulation. Test on a known live source first to confirm the meter works.',
specs:'CAT III 600 V or CAT IV 600 V rating for industrial site use. Auto-ranging models are safest for general use.'},

{id:'infrared-therm',name:'Infrared Thermometer',cat:'Measuring & Safety',icon:'🌡️',
desc:'A non-contact thermometer that measures surface temperature using infrared radiation. Useful for checking overheating components without touching them.',
uses:['Checking motor, bearing, and electrical component temperatures','Detecting hotspots in electrical panels','Monitoring pipe surface temperatures in process plants','Checking insulation effectiveness'],
safety:'Surface-only measurement — does not show internal temperature. Shiny/reflective surfaces give inaccurate readings. Not a substitute for contact thermometers in critical applications. Never point at eyes.',
specs:'Temperature range: typically -50°C to +500°C. Distance-to-spot ratio: 8:1 to 30:1 depending on model.'},

{id:'sound-meter',name:'Sound Level Meter (dB Meter)',cat:'Measuring & Safety',icon:'🔊',
desc:'Measures sound pressure level in decibels (dB). Used to assess noise exposure on construction and industrial sites.',
uses:['Checking if hearing protection is required','Assessing workplace noise levels for compliance','Measuring noise from equipment and machinery'],
safety:'⚠ NOISE EXPOSURE LIMITS:\\n• Below 80 dB(A): No action required\\n• 80–85 dB(A): Hearing protection available and recommended\\n• 85 dB(A)+: Hearing protection MANDATORY\\n• 90 dB(A)+: Audiometric testing required\\n• 115 dB(A)+: Maximum peak exposure\\n\\nNoise doubles in perceived loudness every 10 dB. Power tools typically produce 90–110 dB.',
specs:'Ranges: 30–130 dB(A). A-weighted (dBA) scale most relevant for hearing damage assessment.'},

{id:'laser-measure',name:'Laser Distance Meter',cat:'Measuring & Safety',icon:'📡',
desc:'A handheld device that uses a laser beam to measure distances accurately and quickly. Replaces tape measures for long or awkward distances.',
uses:['Measuring room dimensions and large distances','Calculating areas and volumes automatically','Measuring at height without a ladder','Setting out and checking alignment'],
safety:'Never aim at eyes — even low-power Class 2 lasers can damage vision at close range. Keep lens clean for accurate readings. Verify readings against a known distance periodically.',
specs:'Range: typically 40–100 m. Accuracy: ±1.0–1.5 mm. Some models measure area, volume, and Pythagoras calculations.'},

// ── ROPE ACCESS EQUIPMENT ────────────────────────────────────────────────────
{id:'safety-harness',name:'Full Body Safety Harness',cat:'Rope Access',icon:'🦺',
desc:'A system of straps and buckles worn on the body that distributes fall arrest forces across the chest, shoulders, and legs. The primary life safety device for work at height.',
uses:['Fall arrest — stopping a fall using an anchor and lanyard','Work positioning — suspending the worker in position','Rope access — ascending and descending ropes','Suspended work platform fall protection'],
safety:'⚠ PRE-USE INSPECTION EVERY DAY:\\n• Check all webbing for cuts, abrasion, heat damage, and discolouration\\n• Check all buckles and D-rings for bending, cracking, or corrosion\\n• Check stitching — look for broken, frayed, or missing stitches\\n• Never use a harness that has arrested a fall — retire it immediately\\n• Check the manufacturer\\'s date — harnesses expire (typically 10 years from manufacture, 5 years from first use)\\n• Fit correctly — leg straps snug, chest strap at sternum level',
specs:'Standard: EN 361 (Europe) / ANSI Z359 (USA). D-ring types: dorsal (back), sternal (front), lateral hip.'},

{id:'descender',name:'Figure-8 / Rappel Descender',cat:'Rope Access',icon:'🔗',
desc:'A friction device used for controlled descent on a rope during rope access and rappelling operations.',
uses:['Controlled descent on rope access lines','Emergency lowering of a casualty','Rappelling and abseiling operations'],
safety:'Always backed up with a friction hitch (prusik or mechanical) below the device. Test brake position before weighting the rope. Descend at a controlled speed — too fast generates heat and can melt rope sheath. Wear gloves.',
specs:'Compatible rope diameters: 9–13 mm. Material: aluminium alloy. MBS (minimum breaking strength): 25 kN.'},

{id:'ascender',name:'Mechanical Ascender (Jumar)',cat:'Rope Access',icon:'🔗',
desc:'A one-way gripping device that slides up a rope freely but locks when loaded downward. Used for ascending ropes and hauling.',
uses:['Ascending fixed ropes in rope access operations','Progress capture in hauling systems','Load holding in rigging setups'],
safety:'Never load sideways or in the direction of the opening trigger — it can release. Inspect cam teeth for wear. Never use as a sole anchor. Always use two ascenders when ascending a free rope (primary and backup).',
specs:'Compatible rope: 8–13 mm. Rated load: 140 kg. MBS: 4 kN on trigger side / 6 kN on spine.'},

{id:'carabiner',name:'Steel Screwgate Carabiner',cat:'Rope Access',icon:'🔗',
desc:'A metal connecting device with a spring-loaded gate used to quickly attach components of a safety system together.',
uses:['Connecting harness to anchor systems','Building rope access anchor configurations','Attaching equipment to a harness','Connecting belay and rappel devices'],
safety:'Always lock the gate (screwgate) before loading. Ensure the carabiner is loaded along its major axis (spine) — cross-loading reduces strength by up to 70%. Inspect for cracks, deformation, corrosion. Never drop a carabiner — internal damage may not be visible.',
specs:'Gate types: screwgate, twist-lock, auto-lock. Major axis MBS: 20–25 kN. Minor axis: 7 kN.'},

{id:'dynamic-rope',name:'Dynamic Kernmantle Rope',cat:'Rope Access',icon:'🪢',
desc:'A rope with a braided sheath (mantle) over a twisted core (kern). Designed to stretch under load to absorb the energy of a fall.',
uses:['Lead and top-rope climbing safety systems','Rope access primary and secondary life lines','Fall arrest systems requiring energy absorption'],
safety:'Inspect every metre of the sheath before each use — look for cuts, flat spots, hard spots, and discolouration. Retire ropes that have taken a severe fall, show sheath damage, or are older than 10 years. Store away from UV, chemicals, and heat.',
specs:'Diameter: 9.5–11 mm for single rope. UIAA fall rating: 5+ falls. Standard: EN 892.'},

{id:'work-lanyard',name:'Energy-Absorbing Lanyard (Y-Lanyard)',cat:'Rope Access',icon:'🔗',
desc:'A double (Y-shaped) lanyard with an energy-absorbing pack that deploys to limit peak fall arrest force to below 6 kN. Allows 100% tie-off when moving between anchors.',
uses:['100% tie-off during movement on scaffolding, towers, and structures','Connecting harness D-ring to anchor points','Positioning lanyards for work positioning systems'],
safety:'The energy absorber deploys during a fall — a deployed absorber means the lanyard MUST be retired even if visually intact. Check the indicator windows. Maximum free-fall distance: 2 m. Total arrest distance including absorber: up to 1.75 m — ensure adequate clearance below.',
specs:'Standard: EN 355. Maximum working load: 100 kg. Leg lengths: 1 m + 1 m. MBS connector: 15 kN.'},

// ── LIFTING & RIGGING ────────────────────────────────────────────────────────
{id:'shackle',name:'Bow (Anchor) Shackle',cat:'Lifting & Rigging',icon:'🔩',
desc:'A U-shaped piece of steel closed with a bolt or pin, used to connect rigging components such as slings, hooks, and chains.',
uses:['Connecting wire rope or chain slings to load hooks','Building rigging assemblies for lifting','Attaching lifting eyes on machinery to crane hooks'],
safety:'⚠ Never exceed the Working Load Limit (WLL) stamped on the shackle. Ensure the pin is fully tightened and moused (safety-wired) for overhead lifts. Never side-load a shackle — load through the bow only. Inspect for bending, corrosion, and thread damage.',
specs:'WLL: 0.3 t to 150 t+ depending on size. Material: Grade S (4) or Grade T (8) alloy steel. Standard: EN 13889.'},

{id:'wire-rope-sling',name:'Wire Rope Sling',cat:'Lifting & Rigging',icon:'⛓️',
desc:'A loop of steel wire rope with swaged or hand-spliced eyes, used for lifting loads. Highly durable for sharp, abrasive, or hot loads.',
uses:['Lifting steel beams, columns, and plate','Choker, basket, or vertical hitches on heavy loads','Repeated use in heavy fabrication and steel erection'],
safety:'⚠ INSPECT BEFORE EVERY USE:\\n• 10 randomly distributed broken wires in any 8-diameter length = retire\\n• Any kink, bird-cage, or crushing = retire immediately\\n• Corrosion reducing wire diameter by 15%+ = retire\\nUse softeners (edge protectors) on sharp corners. The WLL changes with hitch configuration:\\n• Vertical: 100% WLL\\n• Choker: 80% WLL\\n• Basket (straight): 200% WLL',
specs:'WLL varies by diameter and grade. 13 mm (1/2 in) 6x19 IWRC sling: approx. 3.2 t vertical WLL.'},
];



// EXTRA TOOL LIBRARY ENTRIES
TOOL_LIBRARY.push(
{id:'scaffold-spanner',name:'Scaffold Spanner (7/16" Ratchet)',cat:'Hand Tools',icon:'🔧',
desc:'A short, offset ratchet spanner sized specifically for scaffold tube couplers (7/16 inch / 11 mm). The most-used tool in scaffolding and temporary works.',
uses:['Tightening and loosening scaffold couplers and swivel clamps','Installing and striking scaffolding','Adjusting base plates and ledger connections'],
safety:'Never extend with a cheater bar — the short handle is intentional; over-tightening shears the bolt. Inspect the ratchet mechanism before use. Drop prevention lanyard required at height. Bolts should be torqued to 50 Nm (40 ft·lb) as a minimum.',
specs:'Drive: 7/16 in (11 mm). Material: chrome vanadium steel. Some models have a hammer head for quick adjustments.'},

{id:'wire-rope-cutter',name:'Wire Rope / Cable Cutter',cat:'Hand Tools',icon:'✂️',
desc:'Heavy-duty lever-action shears with hardened jaws designed to cut wire rope, cable, and multi-strand wire cleanly without fraying.',
uses:['Cutting wire rope slings and cables to length','Cutting steel wire and rebar up to the rated diameter','Removing old or damaged wire rope rigging'],
safety:'Use the correct cutter size for the rope diameter — undersized cutters crush instead of cut. Keep jaws clean and sharp. Wear eye protection — wire strands can spring back. Never use for cutting hardened bolts or chain — this will damage the jaws.',
specs:'Common capacities: up to 12 mm, 16 mm, 19 mm wire rope. Jaw material: high-carbon tool steel.'},

{id:'chain-wrench',name:'Chain Wrench / Chain Tong',cat:'Hand Tools',icon:'⛓️',
desc:'A wrench that uses a looped chain to grip any shape of pipe, round, square, or irregular section. Used where pipe wrenches cannot fit or would damage the surface.',
uses:['Turning large-diameter pipes and round stock','Gripping irregular sections where a standard wrench will not seat','Marine and offshore applications — fitting pipes through tight spaces'],
safety:'Ensure chain is fully seated and not riding on the tip of the hook. Apply force in a slow, controlled manner. Keep hands clear of the chain loop. Use gloves.',
specs:'Chain capacities: 2 in to 6 in pipe diameter typical. Chain material: hardened steel.'},

{id:'rivet-gun',name:'Pop Rivet Gun (Blind Riveter)',cat:'Hand Tools',icon:'🔩',
desc:'A hand tool that sets blind (pop) rivets by pulling a mandrel through the rivet body, expanding it on the blind side to clamp materials together.',
uses:['Joining sheet metal panels where only one side is accessible','Attaching brackets and fittings to sheet metal','Fabricating enclosures, ductwork, and cladding'],
safety:'Wear eye protection — the mandrel stem ejects at high speed when the rivet sets. Use the correct nose piece for the rivet diameter. Collect spent mandrels — they are slip hazards.',
specs:'Rivet diameters: 3.2 mm, 4 mm, 4.8 mm, 6.4 mm. Jaw types: nose pieces included for each size.'},

{id:'oscillating-tool',name:'Oscillating Multi-Tool',cat:'Power Tools',icon:'⚙️',
desc:'A power tool that moves its blade or accessory in a rapid oscillating arc rather than rotating. One of the most versatile power tools for cutting, sanding, and scraping in confined spaces.',
uses:['Plunge-cutting wood, drywall, and metal in tight locations','Undercut sawing at floor level for flooring installation','Scraping grout, adhesive, and paint from surfaces','Sanding in corners and tight areas'],
safety:'Wear eye protection and dust mask. The blade oscillates very fast — contact will cut skin immediately. Secure the workpiece. Check for hidden cables and pipes before cutting into walls or floors.',
specs:'Oscillation angle: 1.4°–3.2°. OPM: 10,000–22,000 OPM. Accessory mount: universal fit (most brands).'},

{id:'mag-drill',name:'Magnetic Drill (Mag Drill)',cat:'Power Tools',icon:'⚙️',
desc:'A portable drill that uses an electromagnetic base to attach to structural steel, allowing precise hole-cutting using annular cutters (core drills) in steel members.',
uses:['Drilling large precise holes in structural steel beams, columns, and plate','Installing bolted connections on steel structures','Site fabrication of new penetrations in existing steel'],
safety:'CRITICAL: The electromagnet only holds while power is on — if power fails, the drill falls. Always use the safety chain. Never drill overhead without full fall protection for the drill. Wear eye protection and keep hands clear of rotating cutter. De-burr all holes after drilling.',
specs:'Magnet force: 7,000–15,000 N. Cutter capacity: typically up to 50 mm diameter, 50 mm depth. Voltage: 110 V or 240 V.'},

{id:'come-along',name:'Come-Along (Hand Puller / Lever Hoist)',cat:'Lifting & Rigging',icon:'⛓️',
desc:'A manual pulling and tensioning device using a ratchet and wire rope or chain to pull, tension, or lift loads horizontally or vertically.',
uses:['Tensioning wire rope lashing and tie-downs','Pulling loads horizontally — recovering stuck vehicles or equipment','Lifting and positioning loads where a chain hoist cannot be anchored overhead','Straightening bent structural members'],
safety:'Never exceed the Working Load Limit (WLL). Inspect wire rope for kinks and broken wires. The anchor point must be rated for the load. Never use the handle extension beyond the designed length.',
specs:'WLL: 0.8 t to 6 t. Wire rope: 4–6 mm. Lift/pull: 1.5–3 m typical.'},

{id:'rope-grab',name:'Rope Grab / Fall Arrester (Trailing)',cat:'Rope Access',icon:'🔗',
desc:'A device that slides freely along a rope in the direction of travel but locks instantly when loaded by a fall. Attaches to the harness to provide continuous fall protection while moving vertically.',
uses:['Continuous fall protection on vertical fixed ropes and lifelines','Fall arrest on rope access and confined space vertical ladders','Used with a separate lanyard to allow hands-free climbing'],
safety:'Must only be used with the rope type and diameter it is rated for. The device must face in the correct travel direction. Do not let the rope feed too fast — the locking mechanism requires the rope to be taut. Inspect cam teeth before each use.',
specs:'Compatible rope: 10–16 mm (varies by model). MBS: 6 kN. Standard: EN 353-2.'},

{id:'tripod-rescue',name:'Rescue Tripod / Davit Arm',cat:'Rope Access',icon:'🏗️',
desc:'A portable anchor structure erected over a confined space entry point or vertical shaft. Provides a fixed overhead anchor for lowering, raising, and rescue operations.',
uses:['Confined space non-entry rescue — winching a casualty to surface','Providing a rated overhead anchor where none exists structurally','Supporting personnel lowering and raising systems'],
safety:'⚠ Legs must be fully spread and locked before loading. The winch must be rated for the load plus dynamic factor. Level ground required — use footplates on soft surfaces. NEVER stand under a suspended load. Maximum load must not exceed the tripod WLL.',
specs:'WLL: 250 kg typical. Height: 1.8–3.2 m adjustable. Leg spread: 1.6–2.4 m. Material: aluminium alloy.'},

{id:'torque-multiplier',name:'Torque Multiplier',cat:'Power Tools',icon:'🔧',
desc:'A geared device that amplifies the input torque of a wrench or bar, allowing very large fasteners to be tightened to specification with relatively little operator force.',
uses:['Tightening large structural bolts on flanges, foundations, and heavy equipment','High-torque applications where an impact wrench cannot reach specification','Controlled tightening of critical fasteners requiring exact torque values'],
safety:'Always use a reaction arm to absorb the counter-torque — without it, the device will spin and can cause serious injury. Never stand in the plane of rotation. Set the torque wrench to the input value, not the output value.',
specs:'Multiplication ratios: 4:1, 8:1, 25:1, 125:1. Input: 3/4 in or 1 in drive. Max output torque: up to 70,000 Nm on large models.'},

{id:'hydraulic-jack',name:'Hydraulic Floor Jack / Bottle Jack',cat:'Lifting & Rigging',icon:'🏗️',
desc:'A device using hydraulic fluid pressure to lift heavy loads vertically with minimal manual effort.',
uses:['Lifting vehicles and heavy machinery for maintenance','Levelling structures and equipment','Raising loads for shim insertion during alignment','Emergency lifting of collapsed structures (in rescue)'],
safety:'CRITICAL — never work under a load supported only by a hydraulic jack. Use rated jack stands once the load is lifted. Place the jack on a solid, level surface. Ensure the jack saddle is seated correctly on the load lifting point. Never exceed the rated capacity.',
specs:'Bottle jack capacities: 2 t to 50 t. Floor jack: 1.5 t to 5 t typical. Lift height: 150–500 mm.'}
);

// PHILIPPINE SAFETY STANDARDS
TOOL_LIBRARY.push(
{id:'ph-ra11058',name:'RA 11058 — Philippine OSH Law',cat:'PH Safety Standards',icon:'🇵🇭',
desc:'Republic Act 11058, signed in 2018, is the primary Occupational Safety and Health law of the Philippines. It strengthens the OSH standards in all workplaces nationwide and sets the legal duties of employers and workers.',
uses:[
  'Employers must provide a safe and healthful workplace free from hazards',
  'Employers with 50+ workers must have a full-time Safety Officer; under 50 must have a part-time Safety Officer',
  'Workers have the right to refuse unsafe work without fear of dismissal',
  'Safety and Health Committee must be established in all workplaces',
  'OSH programs, training, and records must be maintained and available for DOLE inspection'
],
safety:'⚠ PENALTIES under RA 11058:\\n• Failure to comply: fines of PHP 100,000 per day of violation\\n• Work stoppage order (WSO) may be issued by DOLE for imminent danger conditions\\n• Criminal liability for willful violations resulting in death or serious physical injury\\n• Employers must report work accidents to DOLE within 24 hours if fatal, 4 working days for non-fatal',
specs:'Implementing Rules and Regulations (IRR): DOLE Department Order 198-18. Covers all workplaces in the Philippines including construction, maritime, and temporary work sites.'},

{id:'ph-do198',name:'DO 198-18 — IRR of OSH Law',cat:'PH Safety Standards',icon:'📋',
desc:'Department Order 198-18 is the Implementing Rules and Regulations of RA 11058. It provides the detailed technical requirements for compliance with the Philippine OSH Law.',
uses:[
  'Defines the duties of Safety Officers (SO1, SO2, SO3, SO4) and their required training hours',
  'Mandates Personal Protective Equipment provision at no cost to the worker',
  'Requires OSH training for all workers: 8 hours basic for workers, 40 hours for safety officers',
  'Employers must conduct regular workplace hazard identification, risk assessment, and control (HIRAC)',
  'Workers must be informed of hazards in their workplace and trained on control measures'
],
safety:'DOLE can issue a Work Stoppage Order (WSO) for:\\n• Imminent danger to life or health\\n• Non-provision of required PPE\\n• Absence of required safety devices or guards\\n• Violation of any OSH standard that poses serious risk\\n\\nEmployers must correct the WSO conditions before operations can resume.',
specs:'Key ratio: 1 SO1 per 50 workers for high-hazard industries (construction, manufacturing, mining). All Safety Officers must be registered with DOLE.'},

{id:'ph-cosh',name:'COSH — Control of Substances Hazardous to Health',cat:'PH Safety Standards',icon:'☣️',
desc:'COSH training is a DOLE-mandated program that teaches workers how to identify, handle, and control substances that are hazardous to health in the workplace — including chemicals, dust, fumes, and biological agents.',
uses:[
  'Identifying chemical hazards using Safety Data Sheets (SDS / MSDS)',
  'Understanding hazard labels: GHS (Globally Harmonized System) symbols and signal words',
  'Selecting correct PPE for chemical exposures — gloves, respirators, face shields',
  'Proper chemical storage and segregation — flammables away from oxidisers',
  'Emergency response to chemical spills and exposures'
],
safety:'⚠ GHS SIGNAL WORDS:\\n• DANGER — more severe hazard. Requires immediate action and proper PPE\\n• WARNING — less severe but still hazardous\\n\\nNEVER mix bleach with ammonia (produces toxic chloramine gas). NEVER mix bleach with acids. Store all chemicals in original labelled containers. SDS sheets must be available for every hazardous chemical in the workplace.',
specs:'COSH training: minimum 8 hours. Required for workers handling hazardous substances. Trainer must be DOLE-accredited. Philippine Chemical Control Order (CCO) lists regulated chemicals requiring DENR clearance.'},

{id:'ph-scaffolding',name:'Rule 1410 — Scaffolding Safety (DOLE)',cat:'PH Safety Standards',icon:'🏗️',
desc:'DOLE OSHS Rule 1410 covers the standards for the erection, use, inspection, and dismantling of scaffolding in Philippine workplaces. All scaffolding must comply with this rule.',
uses:[
  'Scaffolding must be designed to carry 4 times the maximum intended load (4:1 safety factor)',
  'All scaffolding must be inspected by a competent person before use each day',
  'Scaffolding over 3 m must have guardrails on all open sides (at least 90 cm high)',
  'Workers erecting or dismantling scaffolding must wear a full body harness',
  'Scaffolding planks must overlap supports by at least 15 cm (6 inches) on each end'
],
safety:'CRITICAL SCAFFOLD INSPECTION POINTS:\\n• Uprights (standards) — vertical and firmly based on base plates or mud sills\\n• Ledgers — horizontal, level, and properly coupled\\n• Transoms — properly seated and braced\\n• All couplers tightened to 50 Nm minimum\\n• Guard rails and toe boards in place on all open sides\\n• Safe access — properly secured access ladders\\n• No overloading — maximum load clearly posted\\n\\nNEVER modify or remove scaffold components without a competent scaffolder present.',
specs:'Minimum standards: DOLE OSHS Rule 1410. Competent scaffolders must hold a TESDA NC II in Scaffolding or equivalent. Maximum bay length: 2.4 m for system scaffold; plank thickness: minimum 38 mm for spans under 1.5 m.'},

{id:'ph-wah',name:'Work at Height — Philippine Requirements',cat:'PH Safety Standards',icon:'🦺',
desc:'Work at Height (WAH) refers to any work where a person could fall a distance liable to cause personal injury. In the Philippines, this is governed by RA 11058, DO 198-18, and DOLE OSHS Rule 1411.',
uses:[
  'A risk assessment must be conducted before any work at height',
  'Fall prevention must be the first approach — barriers, guardrails, and covers before fall arrest',
  'All workers at height must wear a full body harness connected to an anchor rated at 10 kN minimum',
  'A rescue plan must be in place BEFORE workers ascend — suspension trauma can occur within minutes',
  'Ladders used for access only — not as a working platform for tasks requiring both hands'
],
safety:'SUSPENSION TRAUMA (Orthostatic Intolerance):\\nA worker hanging unconscious in a harness can suffer cardiac arrest within 5–30 minutes due to blood pooling in the legs. This is why a rescue plan is MANDATORY before any work at height begins.\\n\\nFIRST AID for harness suspension:\\n• Do NOT lay the victim flat immediately\\n• Keep them in a semi-upright sitting position (legs horizontal if possible)\\n• Get them to hospital — even if they appear conscious and uninjured\\n\\nWind limit: STOP all work at height at sustained winds of 11 m/s (40 km/h) or above.',
specs:'RA 11058 + DO 198-18. Harness standard: minimum EN 361 or ANSI Z359. Anchor: minimum 10 kN (approximately 1,000 kg) per worker. Lanyards must be shock-absorbing type (EN 355).'},

{id:'ph-firstaid',name:'Rule 1960 — First Aid Requirements (DOLE)',cat:'PH Safety Standards',icon:'🏥',
desc:'DOLE OSHS Rule 1960 mandates first aid facilities, training, and personnel for all Philippine workplaces based on the number of workers.',
uses:[
  '1–49 workers: at least one trained first aider must be present at all times during work hours',
  '50–199 workers: one first aider per shift plus an emergency clinic',
  '200–499 workers: one nurse on duty per shift',
  '500+ workers: one physician, one nurse, and a dental officer required',
  'First aid kits must be readily accessible, clearly marked, and regularly inspected'
],
safety:'PHILIPPINE FIRST AID KIT MINIMUM CONTENTS (Rule 1960):\\n• Adhesive bandages (assorted sizes)\\n• Sterile gauze pads and roller bandages\\n• Triangular bandages (slings)\\n• Antiseptic solution (betadine or alcohol)\\n• Medical adhesive tape\\n• Scissors and tweezers\\n• CPR face shield / barrier mask\\n• Emergency blanket\\n• First aid manual\\n• Gloves (latex or nitrile, at least 2 pairs)\\n\\nFirst aiders must hold a valid first aid certificate from a DOLE-accredited training provider (Red Cross Philippines, St. John Ambulance, etc.). Certificates are valid for 2 years.',
specs:'Rule 1960, DOLE OSHS Standards. First aid training minimum: 16 hours (basic). Advanced first aid: 24 hours. CPR/AED training recommended separately.'},

{id:'ph-electrical',name:'PEC & DOLE — Electrical Safety Standards',cat:'PH Safety Standards',icon:'⚡',
desc:'Electrical safety in Philippine workplaces is governed by the Philippine Electrical Code (PEC), the Philippine Grid Code, and DOLE OSHS Rule 1200 (Electrical Safety).',
uses:[
  'All electrical installations must comply with the Philippine Electrical Code (PEC)',
  'Only licensed electricians (PRC-registered) may perform electrical work in permanent installations',
  'Ground Fault Circuit Interrupters (GFCI / ELCB) required on all construction site temporary power',
  'Colour coding of electrical wires: Philippines follows IEC — Brown (Live), Blue (Neutral), Green/Yellow (Earth)',
  'All electrical tools must be tested and tagged (T&T) before use on site'
],
safety:'CLEARANCE DISTANCES from Overhead Power Lines (Philippines):\\n• Below 600 V: minimum 3 m horizontal clearance\\n• 600 V – 35 kV: minimum 3 m horizontal, 5 m vertical\\n• 35 kV – 115 kV: minimum 4 m horizontal, 6 m vertical\\n• 115 kV – 230 kV: minimum 5 m horizontal, 7 m vertical\\n\\nCrane and equipment operators: STOP work and call the utility if any equipment comes within these distances. Do NOT attempt to move equipment if it contacts a live line — stay inside the cab and call for help.',
specs:'Philippine Electrical Code (PEC) 2017 edition. DOLE OSHS Rule 1200. ECC (Energy Regulatory Commission) governs utility infrastructure. All electrical work on permanent installations: Licensed Electrical Engineer (LEE) or Registered Master Electrician (RME) required.'},

{id:'ph-fire',name:'RA 9514 — Fire Code of the Philippines',cat:'PH Safety Standards',icon:'🔥',
desc:'Republic Act 9514 (Revised Fire Code of the Philippines, 2008) mandates fire safety requirements for all buildings, establishments, and workplaces. Enforced by the Bureau of Fire Protection (BFP).',
uses:[
  'Fire Safety Inspection Certificate (FSIC) required for all business operations',
  'Fire extinguishers must be inspected monthly and serviced annually',
  'Fire exits must be unobstructed, clearly marked with illuminated signage, and unlocked during work hours',
  'Fire drills must be conducted at least once per year for all occupants',
  'Hot work (welding, cutting, grinding) requires a Hot Work Permit and fire watch'
],
safety:'FIRE EXTINGUISHER TYPES AND USES:\\n• Type A (Water/Foam): Ordinary combustibles — wood, paper, cloth, rubber\\n• Type B (CO₂ or Dry Chemical): Flammable liquids and gases — LPG, petrol, solvents\\n• Type C (CO₂ or Dry Chemical): Electrical equipment — NEVER use water on electrical fires\\n• Type D (Special powder): Metal fires — magnesium, lithium (rare on most sites)\\n\\nPASS Method:\\n• PULL the pin\\n• AIM at the base of the fire\\n• SQUEEZE the handle\\n• SWEEP side to side\\n\\nNever fight a fire that is larger than a wastepaper basket — evacuate and call 911.',
specs:'RA 9514 (2008). BFP enforces. FSIC validity: 1 year. Fire Safety Officer (FSO) training: BFP-accredited, minimum 16 hours. Fire extinguisher placement: within 23 m of any point in the building for Class A; 15 m for Class B/C.'},

{id:'ph-bosh',name:'BOSH — Basic Occupational Safety and Health',cat:'PH Safety Standards',icon:'📚',
desc:'BOSH (Basic Occupational Safety and Health) is a DOLE-mandated 40-hour training program. It is the baseline qualification required for all Safety Officers (SO1 level) in Philippine workplaces.',
uses:[
  'Required for all Safety Officers handling 1–50 workers in high-hazard industries',
  'Covers Philippine OSH laws and standards, hazard identification, and risk assessment',
  'Includes modules on fire safety, electrical safety, chemical safety, and construction safety',
  'After completion, graduates register with DOLE as accredited SO1 Safety Officers',
  'Required before attending advanced courses: COSH, BWSH, Construction Safety, etc.'
],
safety:'After BOSH, the following certifications are commonly required for construction and rope access:\\n• COSH (Control of Substances Hazardous to Health)\\n• BWSH (Basic Work at Sea Hazards) — for offshore\\n• Construction Safety & Health (CSH) — for construction sites\\n• First Aid Training (16 hours)\\n• Fire Safety Training (BFP-accredited)\\n• Ergonomics Training\\n\\nAll DOLE accreditations must be renewed every 3 years.',
specs:'40 hours (5 days). DOLE-accredited training providers only. Certificate valid for 3 years then renewal training required. Cost: typically PHP 3,000–PHP 6,000 depending on provider. DOLE registration fee applies.'},

{id:'ph-ppes',name:'PPE Requirements — Philippine Sites',cat:'PH Safety Standards',icon:'🪖',
desc:'Under RA 11058 and DO 198-18, Philippine employers must provide Personal Protective Equipment at NO COST to workers. Workers must use PPE correctly and report defects.',
uses:[
  'HARD HAT (ANSI Z89.1 Class E or equivalent): Required on all construction sites, lifting operations, and anywhere overhead hazards exist',
  'SAFETY FOOTWEAR (steel-toed): Required in warehouses, construction, and anywhere heavy objects are handled',
  'HIGH-VISIBILITY VEST: Required for workers near vehicle movement areas, roads, and crane swing zones',
  'SAFETY HARNESS (EN 361 or ANSI Z359): Required for all work above 1.8 m where fall prevention measures alone are insufficient',
  'EYE PROTECTION: Required for grinding, drilling, chemical handling, and welding operations',
  'HEARING PROTECTION: Required in areas above 85 dB(A) — earplugs (NRR 25+) or earmuffs (NRR 30+)'
],
safety:'PPE INSPECTION BEFORE EVERY USE:\\n• Hard hats: Check for cracks, dents, and UV degradation (chalky surface = replace). Replace after any impact. Maximum life: 5 years from manufacture date stamped inside the shell\\n• Safety harnesses: Full visual inspection of webbing, buckles, D-rings, and stitching. Check manufacture date — maximum 10 years from manufacture\\n• Safety footwear: Check sole integrity, steel toe condition, and ankle support\\n• Safety glasses: Check for scratches that reduce optical clarity. Anti-fog coating effectiveness\\n\\nEmployers CANNOT deduct PPE costs from workers\\'  wages — this is a violation of RA 11058.',
specs:'Philippine standards reference: DOLE OSHS, RA 11058, DO 198-18. Where Philippine standards are silent, international standards (ISO, EN, ANSI) apply as supplementary reference.'}
);

// ── SAFETY OFFICER PDF LIBRARY ENTRIES ──
TOOL_LIBRARY.push(
{id:'ph-so-roles',name:'Role of a Safety Officer (DOLE-OSHC)',cat:'PH Safety Standards',icon:'📋',
desc:'As defined by the DOLE Occupational Safety and Health Center (OSHC), a Safety Officer is responsible for leading the observance of safe practices, performs functions under DO 198-18 and the OSHS, and develops an effective safety program for the organization.',
uses:[
  'Lead the observance of safe practices in the workplace',
  'Develop, coordinate, and conduct Safety and Health (S&H) trainings',
  'Perform functions required under Department Order 198-18 and the OSHS',
  'Has knowledge on tools helpful in achieving a safe workplace',
  'Exercises diplomacy in handling personnel and situations',
  'Is a true LEADER - an Educator, Enforcer, Inspector, Investigator, Adviser, and Friend'
],
safety:'AN EFFECTIVE SAFETY OFFICER SHOULD:\\n1. RECOGNIZE all potentials for harm and damage to People, Equipment, Materials, and the Environment - by identifying hazards and understanding their harmful effects.\\n2. ASSESS the risk involved - Probability (how likely) and Severity (how serious). Tools: Risk Assessment, Job Hazard Analysis (JHA).\\n3. INSTITUTE control measures - Engineering Control > Administrative Control > Personal Protective Equipment (PPE).\\n4. MONITOR control measures - Follow up, measure performance vs. plan, evaluate results, identify residual hazards.\\n\\nACCOUNTABILITY is measured by: reduction of accident frequency and severity, reduction of accident costs, and efficiency of operations. Safety is EVERYONE\\'s responsibility.',
specs:'Source: DOLE Occupational Safety and Health Center (OSHC). Based on DO 198, Series of 2018 (IRR of RA 11058), OSHS, and D.O. 13 (Construction Industry Guidelines).'},

{id:'ph-so-levels',name:'Safety Officer Levels SO1-SO4 (DO 198-18)',cat:'PH Safety Standards',icon:'🎓',
desc:'Department Order 198-18 classifies Safety Officers into four levels based on training hours and experience. Each level carries specific qualifications and responsibilities.',
uses:[
  'SO1 - Entry level. Completed mandatory 8-hour OSH orientation course AND 2-hour trainers\\'training',
  'SO2 - Completed mandatory 40-hour OSH training course applicable to the industry (BOSH)',
  'SO3 - 40-hour OSH training + additional 48 hours advanced/specialized OSH training + at least 2 years OSH experience',
  'SO4 - 40-hour OSH training + 80 hours advanced/specialized OSH training + aggregate 320 hours OSH training/experience (as SO3 for at least 4 years)'
],
safety:'SAFETY OFFICER RATIO PER WORKERS (DO 198-18):\\n\\nLOW RISK:\\n1-50 workers: 1 SO1 | 51-200: 1 SO2 | 200-500: 2 SO2 or 1 SO3 | 501-1000: 2 SO2 + 1 SO3\\n\\nMEDIUM RISK:\\n1-50: 1 SO1 | 51-99: 1 SO2 | 100-199: 1 SO2 + 1 SO3 | 200-500: 2 SO3 | 500+: Additional 1 SO3 or SO4\\n\\nHIGH RISK:\\n1-9: 1 SO2 | 10-50: 1 SO3 | 51-99: 1 SO2 + 1 SO3 | 100-250: 2 SO3 | 251-1000: 1 SO2 + 2 SO3 | Every 250 additional: 1 more SO3 or SO4\\n\\nCONTRACTOR RULE: At least 1 Safety Officer must be deployed at EACH specific area of operations.',
specs:'Source: D.O. 198-18, Section 14. Safety Officer certification must be renewed every 3 years. Training provider must be DOLE-accredited. BOSH (Basic Occupational Safety and Health) = standard 40-hour SO2 qualification course.'},

{id:'ph-so-duties',name:'Duties of Safety Officer - Section 14, DO 198-18',cat:'PH Safety Standards',icon:'📝',
desc:'Under Section 14 of Department Order No. 198, Series of 2018, safety officers employed or designated in any workplace carry specific legal duties and responsibilities in implementing the OSH program.',
uses:[
  'Oversee the overall management of the OSH program in coordination with the OSH Committee',
  'Frequently monitor and inspect any health or safety aspect of all operations',
  'Assist government inspectors (DOLE) during safety and health inspections at any time work is being performed',
  'Issue Work Stoppage Order (WSO) when necessary based on requirements and procedures in the OSH standards',
  'Investigate all work-related accidents, illnesses, and near-miss incidents',
  'Maintain and update the workplace OSH records and submit required reports to DOLE'
],
safety:'WORK STOPPAGE ORDER (WSO):\\nA Safety Officer may issue a WSO when there is imminent danger to life or health of any worker in the workplace. The WSO must be based on the OSH standards requirements and follow prescribed procedures. Operations must NOT resume until the WSO conditions are corrected and the order is lifted.\\n\\nIMPORTANT: The Safety Officer is accountable for performance measured by:\\n- Reduction in frequency and severity of accidents\\n- Reduction in costs stemming from accidents\\n- Efficiency and smoothness of operations\\n\\nBut remember: SAFETY IS EVERYONE\\'s responsibility - every worker is accountable.',
specs:'Legal basis: RA 11058 + DO 198-18, Section 14. Failure to comply: penalties up to PHP 100,000 per day per violation. Source: DOLE Occupational Safety and Health Center (OSHC), Department of Labor and Employment.'},

{id:'ph-oshs-2020',name:'OSHS 2020 Edition - Philippine OSH Standards',cat:'PH Safety Standards',icon:'📖',
desc:'The Occupational Safety and Health Standards (OSHS) 2020 Edition is the comprehensive technical standard for safe and healthy working conditions in the Philippines. It is issued by DOLE and covers all industries.',
uses:[
  'Rule 1010 - General Provisions: definitions, scope, and applicability of OSH standards',
  'Rule 1020 - Registration of Establishments: all businesses must register with DOLE',
  'Rule 1040 - Health and Safety Committee: composition, functions, and meetings',
  'Rule 1050 - Notification and Keeping of Records of Accidents: reporting deadlines',
  'Rule 1060 - Premises of Establishments: layout, housekeeping, aisle marking',
  'Rule 1070 - Work Environment Measurement: noise, temperature, lighting, air quality',
  'Rule 1080 - PPE: standards for different types and when they are required',
  'Rule 1090 - Hazardous Materials: labeling, storage, handling, SDS requirements',
  'Rule 1100 - Gases and Vapors: LPG, acetylene, compressed gas safety',
  'Rule 1200 - Electrical Safety: wiring, grounding, lockout/tagout',
  'Rule 1410 - Scaffolding: erection, use, inspection standards',
  'Rule 1960 - Medical and First Aid: facilities, personnel, training requirements'
],
safety:'KEY OSHS REPORTING REQUIREMENTS:\\n- Fatal accident: Report to DOLE within 24 hours\\n- Non-fatal accident (3+ days lost): Report within 4 working days\\n- Occupational illness: Report within 4 working days of diagnosis\\n- Annual Work Accident/Illness Report (WAIR): Submit by January 30 of the following year\\n- Semi-annual Safe Practices Audit Report (SPAR): Submit every 6 months\\n\\nNon-compliance penalties: PHP 40,000-PHP 100,000 per violation per day.\\nRepeat violations: Criminal liability and business closure.',
specs:'OSHS 2020 Edition. Published by: Bureau of Working Conditions (BWC), DOLE. Applies to all workplaces in the Philippines with at least 1 worker. Supplements and does not replace RA 11058 and DO 198-18. Available at: bwc.dole.gov.ph'}
);

const SAFETY_REMINDERS = [
{id:'powertools',title:'Power Tools Safety',icon:'⚙️',color:'#ef4444',
steps:[
  {h:'1. Before You Pick Up Any Power Tool',items:[
    '👓 Eye & face protection FIRST — flying fragments are the #1 power tool injury',
    '😷 Dust mask (N95 minimum) — grinding, cutting, and sanding produce carcinogenic fine dust',
    '🧤 Gloves for grinders, saws, and metal work — but NEVER gloves near rotating drills, lathes, or drill presses',
    '👕 Fitted non-flammable clothing — loose sleeves and hoodies catch in rotating parts',
    '🔍 Inspect the tool — check for cracked housings, damaged cords, missing guards, and loose attachments',
    '⚡ Check the cord — no cuts, kinks, or taped repairs. Use an RCD/GFCI at all times outdoors'
  ]},
  {h:'2. Angle Grinder — Highest Risk Tool on Site',items:[
    '🛡️ Guard MUST be in place — NEVER remove it. Position it between you and the disc',
    '📋 Match disc to task — cut-off discs for cutting ONLY, grinding discs for grinding ONLY. Cross-use shatters discs',
    '🗓️ Check disc expiry date and inspect for cracks before mounting',
    '✅ 30-second test run — after fitting a disc, run freely for 30 seconds before cutting to detect vibration or wobble',
    '🔥 Maintain 3 m exclusion zone — sparks travel far. Remove all flammables from the area',
    '✋ Two-hand grip at all times. Never cut one-handed or reach across your body'
  ]},
  {h:'3. Drills & Impact Drivers',items:[
    '🔒 Clamp or secure the workpiece — NEVER hold with your free hand. A snagged bit will spin the work',
    '✅ Use correct bit type — SDS bits for SDS chucks, impact bits for impact drivers (standard bits shatter)',
    '🏗️ Hammer drill mode — use water or air cooling for deep holes in concrete. Dust from concrete contains silica — always mask up',
    '⚠️ Before drilling into walls or floors — check for hidden cables, pipes, and ducts with a detector',
    '🔁 Broken bit hazard — bits can shatter and eject at high speed. Never force a jammed bit by increasing pressure'
  ]},
  {h:'4. Reciprocating Saw & Jigsaws',items:[
    '🔍 Confirm what is behind the cut — hidden cables and pipes are the main hazard',
    '👢 Never support the material with your leg or hand near the blade path',
    '🔩 Secure the workpiece — unsupported material vibrates and causes blade breakage',
    '🔄 Let the blade stop completely before setting the tool down — the blade coasts after the trigger is released',
    '📦 Store blades in a case — loose blades in a toolbox cause cuts when reaching in'
  ]},
  {h:'5. Circular Saws & Table Saws',items:[
    '🛡️ Never remove the blade guard — it is the primary kickback prevention device',
    '↗️ Set blade depth to material thickness plus 6 mm only — deeper blade = greater kickback risk',
    '🚫 Never reach behind the blade while it is spinning',
    '📐 Use a rip fence or guide — freehand cutting causes wandering and kickback',
    '⏸️ Wait for blade to stop completely before setting the saw down or changing material',
    '🪵 Support long pieces — unsupported ends drop and pinch the blade, causing kickback'
  ]},
  {h:'6. After Using Any Power Tool',items:[
    '🔌 Unplug or remove battery before changing accessories, bits, or blades — ALWAYS',
    '🧹 Clear swarf, dust, and off-cuts — slip and fire hazards',
    '🔥 Fire watch — for any hot work (grinding, cutting metal), designate a fire watcher for 30 min after',
    '🏷️ Tag out damaged tools immediately — label "DO NOT USE" and remove from service',
    '🔋 Store batteries away from heat and moisture. Never charge damaged or swollen batteries'
  ]}
]},
{id:'height',title:'Work at Height Pre-Task',icon:'🦺',color:'#f97316',
steps:[
  {h:'1. Check Wind Speed',items:['💨 Measure wind with anemometer BEFORE starting','✅ 0–8 m/s (29 km/h): Safe for most work','⚠️ 8–11 m/s (40 km/h): Restrict overhead lifting, secure loose materials','🛑 11–14 m/s (50 km/h): STOP work above 6 m','🚨 Above 14 m/s (50+ km/h): STOP ALL work at height — evacuate elevated positions','📱 Monitor conditions continuously — weather can change rapidly']},
  {h:'2. Inspect Your PPE',items:['🦺 Inspect harness webbing — check for cuts, fraying, UV damage, and discolouration','🔗 Check all buckles, D-rings, and carabiners — no deformation, corrosion, or gate issues','📅 Check harness manufacture and service date — maximum 10 years from manufacture, 5 years in service','🚫 NEVER use a harness that has arrested a fall — retire it immediately','🔗 Inspect lanyards — check energy absorber indicator windows. If deployed, retire immediately']},
  {h:'3. Check Your Anchor Points',items:['💪 Anchor must be rated for at least 10 kN (1,000 kg) for fall arrest','🔍 Inspect structural integrity of anchor — no corrosion, cracking, or loose connections','📐 Position anchor ABOVE the working position where possible to minimise fall distance','⬇️ Calculate fall clearance — ensure enough space below before a lanyard arrests a fall','🔒 Use backup anchor — never rely on a single point for life safety']},
  {h:'4. Before You Climb',items:['📋 Conduct toolbox talk — brief all workers on hazards and emergency plan','📱 Communication — ensure someone on the ground knows you are working at height','🏥 First aid kit and rescue plan ready — who will respond if you fall?','🚫 Alone? Restricted — lone workers at height prohibited without risk assessment','🌧️ Weather check — rain, ice, and frost make surfaces slippery. Postpone if necessary']}
]},

{id:'electrical',title:'Electrical Safety',icon:'⚡',color:'#eab308',
steps:[
  {h:'1. Assume It\\x27s Live',items:['⚡ NEVER assume a circuit is dead — always test with a verified multimeter','🔒 Lock Out / Tag Out (LOTO) — isolate at the breaker, lock it, tag it, test it','🔑 One person, one lock — each worker places their own lock on the isolation point','✅ Test BEFORE touch — use multimeter on a known live source first to confirm meter works, then test the circuit']},
  {h:'2. Electrical PPE',items:['🧤 Insulated gloves — rated for the voltage being worked on (Cat III minimum for 230 V)','👓 Arc flash face shield if there is any risk of arc flash','👕 FR (flame-resistant) clothing near exposed live parts','👢 Insulated boots — rubber-soled non-conductive footwear']},
  {h:'3. Safe Working Distances',items:['🚫 Unqualified workers: NO closer than 3 m to exposed live conductors above 1000 V','⚠️ 230 V/415 V: Qualified personnel only within 600 mm of exposed live conductors','🛡️ Use insulated tools rated for the voltage','📏 Overhead power lines: minimum 3 m clearance for plant and equipment']},
  {h:'4. Cords and Portable Tools',items:['🔍 Inspect cord before every use — no cuts, cracked insulation, or taped repairs','🔌 Use RCD (residual current device) / GFCI on all portable tools outdoors or in wet areas','💧 Never use electrical tools in the rain or on wet surfaces unless rated IP65+','🔁 Tag and remove from service any tool with damage — DO NOT tape and continue']}
]},

{id:'confined',title:'Confined Space Entry',icon:'🚇',color:'#8b5cf6',
steps:[
  {h:'1. Is a Permit Required?',items:['📋 Any space NOT designed for continuous occupancy + restricted entry/exit = confined space','⚠️ Permit-required confined space: contains or could contain a hazardous atmosphere, material that could engulf, or other serious hazards','🚫 NEVER enter a permit-required confined space without a signed permit','👤 Designate: Entry Supervisor, Entrant(s), and Attendant — all roles MUST be filled']},
  {h:'2. Test the Atmosphere',items:['🔴 TEST BEFORE ENTRY — 4-gas test: O₂, CO, H₂S, LEL','✅ Safe entry conditions: O₂ 19.5–23.5% | CO <25 ppm | H₂S <10 ppm | LEL <10%','📡 Continuous monitoring — wear a personal gas monitor inside','💨 Ventilate — forced air ventilation before and during entry if any hazard present']},
  {h:'3. Entry Procedures',items:['📞 Attendant stays outside — maintains communication and contact count','🚨 Rescue plan ready — never improvise a rescue; have a plan before entry','🔗 Retrieval line — attach to harness for non-entry rescue where possible','📵 No smoking, sparks, or ignition sources near any confined space']},
  {h:'4. Emergency',items:['🚨 If alarm sounds: EXIT IMMEDIATELY — do not investigate','🚫 Non-entry rescue first — never send an unequipped person to rescue a downed worker (this is the #1 cause of confined space fatalities)','📞 Call emergency services','🏥 Only SCBA-equipped and trained rescuers enter to rescue']}
]},

{id:'manual-handling',title:'Manual Handling & Lifting',icon:'📦',color:'#22c55e',
steps:[
  {h:'1. Before You Lift',items:['🔍 Assess the load — weight, size, shape, and centre of gravity','📦 Can you use a mechanical aid? Use trolleys, hoists, and conveyors whenever possible','🤝 Team lift for loads over 25 kg (two-person lift > 25 kg) — one person should lead','🧹 Clear your path — trip hazards, narrow doorways, and stairs BEFORE picking up']},
  {h:'2. Safe Lifting Technique',items:['👟 Feet shoulder-width apart, one foot slightly forward','🦵 Bend at the knees and hips — NOT the back','🤲 Firm grip with whole hand — not just fingers','⬆️ Lift by straightening legs — keep load close to the body','🚫 No twisting — turn with your feet, not your back']},
  {h:'3. Warning Signs — Stop and Seek Help',items:['⚠️ Load too heavy to lift with straight back','⚠️ Cannot get close enough to the load','⚠️ Awkward shape that pulls you off balance','⚠️ Slippery or unstable load','⚠️ Lifting above shoulder height or below knee height regularly']},
  {h:'4. After Lifting',items:['🏷️ Stack safely — heaviest at the bottom, within 1.8 m height','🔒 Secure against toppling — use racking, ties, or caging for unstable stacks','🧯 Store hazardous materials correctly — follow SDS/MSDS requirements','📋 Report near misses and injuries — all musculoskeletal incidents should be recorded']}
]}
];

// ── TOOLS TAB SWITCHING ───────────────────────────────────────────────────────
function switchToolTab(tab){
  ['conv','calc','lib','safe'].forEach(t=>{
    document.getElementById('toolC'+t.charAt(0).toUpperCase()+t.slice(1)).style.display= t===tab?'flex':'none';
  });
  document.querySelectorAll('#toolsTabs .tab').forEach((btn,i)=>{
    btn.classList.toggle('on',['conv','calc','lib','safe'][i]===tab);
  });
  if(tab==='lib') renderLibrary();
  if(tab==='safe') renderSafety();
  if(tab==='calc') updateCalcInputs();
}

// Fix tab IDs (template uses toolConv etc.)
function getTToolEl(tab){
  const map={conv:'toolConv',calc:'toolCalc',lib:'toolLib',safe:'toolSafe'};
  return document.getElementById(map[tab]);
}

// Re-implement switchToolTab correctly
(function(){
  const orig = switchToolTab;
  window.switchToolTab = function(tab){
    ['conv','calc','lib','safe'].forEach(t=>{
      const el = document.getElementById({conv:'toolConv',calc:'toolCalc',lib:'toolLib',safe:'toolSafe'}[t]);
      if(el) el.style.display = t===tab ? 'flex' : 'none';
    });
    document.querySelectorAll('#toolsTabs .tab').forEach((btn,i)=>{
      btn.classList.toggle('on', ['conv','calc','lib','safe'][i]===tab);
    });
    if(tab==='lib') renderLibrary();
    if(tab==='safe') renderSafety();
    if(tab==='calc') updateCalcInputs();
  };
})();

// ── CONVERTER ─────────────────────────────────────────────────────────────────
const H_TO_M = {mm:0.001, cm:0.01, m:1, in:0.0254, ft:0.3048};
const H_UNITS = ['mm','cm','m','in','ft'];
const H_LABELS = {mm:'mm',cm:'cm',m:'m',in:'inches',ft:'feet'};

function doConvH(){
  const val = parseFloat(document.getElementById('convHVal').value);
  const from = document.getElementById('convHFrom').value;
  const el = document.getElementById('convHOut');
  if(isNaN(val)||val===''){ el.innerHTML=''; return; }
  const meters = val * H_TO_M[from];
  el.innerHTML = H_UNITS.filter(u=>u!==from).map(u=>{
    const conv = meters / H_TO_M[u];
    const display = conv >= 1000 ? fmt(conv) : parseFloat(conv.toPrecision(6)).toString();
    return \`<div style="display:flex;align-items:center;justify-content:space-between;background:var(--inp);border:1.5px solid var(--bd);border-radius:9px;padding:10px 13px">
      <div style="font-size:13px;color:var(--t2);font-weight:600">\${H_LABELS[u]}</div>
      <div style="font-family:'DM Mono',monospace;font-size:16px;font-weight:700;color:var(--t1)">\${display}</div>
    </div>\`;
  }).join('');
  // Special: feet+inches
  if(from!=='ft'&&from!=='in'){
    const totalIn = meters/H_TO_M['in'];
    const feet = Math.floor(totalIn/12);
    const inches = (totalIn%12).toFixed(2);
    el.innerHTML += \`<div style="display:flex;align-items:center;justify-content:space-between;background:var(--bbg);border:1.5px solid var(--bbd);border-radius:9px;padding:10px 13px">
      <div style="font-size:13px;color:#3b82f6;font-weight:600">ft + in</div>
      <div style="font-family:'DM Mono',monospace;font-size:16px;font-weight:700;color:#3b82f6">\${feet}ft \${inches}in</div>
    </div>\`;
  }
}

const W_TO_KG = {g:0.001, kg:1, t:1000, lb:0.453592, oz:0.0283495};
const W_UNITS = ['g','kg','t','lb','oz'];
const W_LABELS = {g:'grams',kg:'kilograms',t:'metric tonnes',lb:'pounds',oz:'ounces'};

function doConvW(){
  const val = parseFloat(document.getElementById('convWVal').value);
  const from = document.getElementById('convWFrom').value;
  const el = document.getElementById('convWOut');
  if(isNaN(val)||val===''){ el.innerHTML=''; return; }
  const kg = val * W_TO_KG[from];
  el.innerHTML = W_UNITS.filter(u=>u!==from).map(u=>{
    const conv = kg / W_TO_KG[u];
    const display = parseFloat(conv.toPrecision(7)).toString();
    return \`<div style="display:flex;align-items:center;justify-content:space-between;background:var(--inp);border:1.5px solid var(--bd);border-radius:9px;padding:10px 13px">
      <div style="font-size:13px;color:var(--t2);font-weight:600">\${W_LABELS[u]}</div>
      <div style="font-family:'DM Mono',monospace;font-size:16px;font-weight:700;color:var(--t1)">\${display}</div>
    </div>\`;
  }).join('');
}

// ── SHAPES & WEIGHT CALCULATOR ────────────────────────────────────────────────
const SHAPE_INPUTS = {
  plate:   [{id:'len',label:'Length (mm)'},{id:'wid',label:'Width (mm)'},{id:'thk',label:'Thickness (mm)'}],
  roundbar:[{id:'dia',label:'Diameter (mm)'},{id:'len',label:'Length (mm)'}],
  squarebar:[{id:'side',label:'Side (mm)'},{id:'len',label:'Length (mm)'}],
  pipe:    [{id:'od',label:'Outer Diameter OD (mm)'},{id:'wt',label:'Wall Thickness (mm)'},{id:'len',label:'Length (mm)'}],
  rhs:     [{id:'ow',label:'Outer Width (mm)'},{id:'oh',label:'Outer Height (mm)'},{id:'wt',label:'Wall Thickness (mm)'},{id:'len',label:'Length (mm)'}],
  angle:   [{id:'leg',label:'Leg Length (mm)'},{id:'thk',label:'Thickness (mm)'},{id:'len',label:'Length (mm)'}],
};
const SHAPE_NAMES = {plate:'Flat Plate / Bar',roundbar:'Round Bar',squarebar:'Square Bar',pipe:'Round Pipe / Tube',rhs:'Rectangular Hollow Section',angle:'Angle Iron (equal legs)'};

function updateCalcInputs(){
  const shape = document.getElementById('calcShape').value;
  const matSel = document.getElementById('calcMat').value;
  document.getElementById('calcCustomDensity').style.display = matSel==='custom'?'block':'none';
  const fields = SHAPE_INPUTS[shape] || [];
  document.getElementById('calcInputs').innerHTML = fields.map(f=>
    \`<div class="f"><label>\${f.label}</label><input id="cinp_\${f.id}" type="number" min="0" placeholder="0" inputmode="decimal"/></div>\`
  ).join('');
  document.getElementById('calcInputsTitle').textContent = \`📐 \${SHAPE_NAMES[shape]} — Dimensions\`;
  document.getElementById('calcResult').style.display='none';
}

function getD(id){ return parseFloat(document.getElementById('cinp_'+id)?.value||0)||0; }

function calcWeight(){
  const shape  = document.getElementById('calcShape').value;
  const matSel = document.getElementById('calcMat').value;
  const density= matSel==='custom'
    ? (parseFloat(document.getElementById('calcDensityVal').value)||7850)
    : parseFloat(matSel);

  let volume_mm3 = 0; // mm³
  let formulaStr = '';
  const PI = Math.PI;

  if(shape==='plate'){
    const L=getD('len'),W=getD('wid'),T=getD('thk');
    volume_mm3 = L*W*T;
    formulaStr = \`\${L} × \${W} × \${T} mm\`;
  } else if(shape==='roundbar'){
    const D=getD('dia'),L=getD('len');
    volume_mm3 = (PI/4)*D*D*L;
    formulaStr = \`⌀\${D} × \${L} mm\`;
  } else if(shape==='squarebar'){
    const S=getD('side'),L=getD('len');
    volume_mm3 = S*S*L;
    formulaStr = \`\${S} × \${S} × \${L} mm\`;
  } else if(shape==='pipe'){
    const OD=getD('od'),WT=getD('wt'),L=getD('len');
    const ID=OD-2*WT;
    if(ID<=0){toast('Wall thickness too large for this OD');return;}
    volume_mm3 = (PI/4)*(OD*OD - ID*ID)*L;
    formulaStr = \`OD \${OD} / ID \${ID.toFixed(1)} × \${L} mm\`;
  } else if(shape==='rhs'){
    const OW=getD('ow'),OH=getD('oh'),WT=getD('wt'),L=getD('len');
    const IW=OW-2*WT,IH=OH-2*WT;
    if(IW<=0||IH<=0){toast('Wall thickness too large');return;}
    volume_mm3 = (OW*OH - IW*IH)*L;
    formulaStr = \`\${OW}×\${OH} / \${IW.toFixed(1)}×\${IH.toFixed(1)} × \${L} mm\`;
  } else if(shape==='angle'){
    const LEG=getD('leg'),T=getD('thk'),L=getD('len');
    volume_mm3 = (2*LEG - T)*T*L;
    formulaStr = \`\${LEG}×\${LEG}×\${T} × \${L} mm\`;
  }

  if(volume_mm3<=0){toast('Enter all dimensions');return;}

  // Convert: mm³ → m³ then × density
  const vol_m3 = volume_mm3 / 1e9;
  const kg = vol_m3 * density;
  const t  = kg / 1000;
  const lb = kg * 2.20462;

  const matLabel = document.getElementById('calcMat').options[document.getElementById('calcMat').selectedIndex].text.split(' (')[0];

  document.getElementById('calcResultInner').innerHTML =
    \`<div style="text-align:center;padding:10px 0 14px">
      <div style="font-size:12px;color:var(--t3);font-weight:700;text-transform:uppercase;letter-spacing:.5px">\${SHAPE_NAMES[shape]}</div>
      <div style="font-size:12px;color:var(--t2);margin-top:2px">\${formulaStr} · \${matLabel}</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
      <div style="text-align:center;background:var(--gbg);border:1.5px solid var(--gbd);border-radius:10px;padding:12px 6px">
        <div style="font-size:10px;color:#22c55e;font-weight:700;text-transform:uppercase;letter-spacing:.5px">kg</div>
        <div style="font-family:var(--fh);font-size:26px;font-weight:800;color:#22c55e;line-height:1">\${kg<10?kg.toFixed(3):kg<100?kg.toFixed(2):kg.toFixed(1)}</div>
      </div>
      <div style="text-align:center;background:var(--bbg);border:1.5px solid var(--bbd);border-radius:10px;padding:12px 6px">
        <div style="font-size:10px;color:#3b82f6;font-weight:700;text-transform:uppercase;letter-spacing:.5px">tonnes</div>
        <div style="font-family:var(--fh);font-size:26px;font-weight:800;color:#3b82f6;line-height:1">\${t.toFixed(4)}</div>
      </div>
      <div style="text-align:center;background:var(--ybg);border:1.5px solid var(--ybd);border-radius:10px;padding:12px 6px">
        <div style="font-size:10px;color:#92400e;font-weight:700;text-transform:uppercase;letter-spacing:.5px">lbs</div>
        <div style="font-family:var(--fh);font-size:26px;font-weight:800;color:#92400e;line-height:1">\${lb.toFixed(1)}</div>
      </div>
    </div>
    <div style="margin-top:10px;background:var(--inp);border-radius:9px;padding:9px 12px;font-size:12px;color:var(--t3);font-family:'DM Mono',monospace">
      Volume: \${(volume_mm3).toFixed(0)} mm³ = \${vol_m3.toExponential(3)} m³ · Density: \${density} kg/m³
    </div>\`;
  document.getElementById('calcResult').style.display='block';
}

// ── TOOL LIBRARY ──────────────────────────────────────────────────────────────
let libActiveCat = 'All';

function renderLibrary(){
  const q   = (document.getElementById('libSearch')?.value||'').toLowerCase().trim();
  const cats = ['All',...new Set(TOOL_LIBRARY.map(t=>t.cat))];

  // Category filter buttons
  document.getElementById('libCatFilter').innerHTML = cats.map(cat=>
    \`<button onclick="setLibCat('\${cat}')" style="flex-shrink:0;padding:5px 12px;border-radius:20px;border:1.5px solid \${cat===libActiveCat?'#f97316':'var(--bd)'};background:\${cat===libActiveCat?'#f97316':'var(--inp)'};color:\${cat===libActiveCat?'#fff':'var(--t2)'};font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap">\${cat}</button>\`
  ).join('');

  const filtered = TOOL_LIBRARY.filter(t=>{
    const catOk = libActiveCat==='All' || t.cat===libActiveCat;
    const qOk   = !q || t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || (t.uses||[]).join(' ').toLowerCase().includes(q);
    return catOk && qOk;
  });

  if(!filtered.length){
    document.getElementById('libList').innerHTML='<div class="norows">No tools found matching your search.</div>';
    return;
  }

  document.getElementById('libList').innerHTML = filtered.map(t=>{
    const cc = catColor(t.cat);
    const shortDesc = t.desc.length>90 ? t.desc.slice(0,90)+'…' : t.desc;
    return \`<div style="background:var(--card);border:1.5px solid var(--bd);border-radius:12px;overflow:hidden;box-shadow:var(--sh)" onclick="openToolDetail('\${t.id}')">
      <div style="display:flex;align-items:center;gap:12px;padding:12px 13px">
        <div style="font-size:28px;flex-shrink:0;width:40px;text-align:center">\${t.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-family:var(--fh);font-size:18px;font-weight:800;color:var(--t1)">\${esc(t.name)}</div>
          <span style="font-size:10px;font-weight:700;padding:1px 7px;border-radius:4px;background:\${cc.bg};color:\${cc.fg};text-transform:uppercase;letter-spacing:.4px">\${esc(t.cat)}</span>
        </div>
        <svg style="flex-shrink:0;color:var(--t3)" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </div>
      <div style="padding:0 13px 12px;font-size:13px;color:var(--t2);line-height:1.5">\${esc(shortDesc)}</div>
    </div>\`;
  }).join('');
}

function setLibCat(cat){
  libActiveCat = cat;
  renderLibrary();
}

function openToolDetail(id){
  const t = TOOL_LIBRARY.find(x=>x.id===id);
  if(!t) return;
  const cc = catColor(t.cat);
  // Build detail sheet
  let html = \`<div style="padding:16px">
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
      <div style="font-size:44px">\${t.icon}</div>
      <div>
        <div style="font-family:var(--fh);font-size:26px;font-weight:800;color:var(--t1);line-height:1">\${esc(t.name)}</div>
        <span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:5px;background:\${cc.bg};color:\${cc.fg};text-transform:uppercase;letter-spacing:.4px;display:inline-block;margin-top:4px">\${esc(t.cat)}</span>
      </div>
    </div>
    <div style="font-size:14px;color:var(--t1);line-height:1.6;margin-bottom:16px">\${esc(t.desc)}</div>\`;

  if(t.uses&&t.uses.length){
    html += \`<div style="margin-bottom:14px"><div style="font-family:var(--fh);font-size:15px;font-weight:800;color:var(--t2);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Common Uses</div>
    \${t.uses.map(u=>\`<div style="display:flex;gap:8px;padding:7px 10px;background:var(--gbg);border-radius:8px;margin-bottom:5px;border:1px solid var(--gbd)"><span style="color:#22c55e;flex-shrink:0">✓</span><span style="font-size:13px;color:var(--t1)">\${esc(u)}</span></div>\`).join('')}
    </div>\`;
  }

  if(t.safety){
    const safeLines = t.safety.split('\\n');
    html += \`<div style="background:var(--rbg);border:1.5px solid var(--rbd);border-radius:12px;padding:13px;margin-bottom:14px">
      <div style="font-family:var(--fh);font-size:15px;font-weight:800;color:#ef4444;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">⚠ Safety</div>
      \${safeLines.map(l=>l?\`<div style="font-size:13px;color:var(--t1);line-height:1.6;margin-bottom:4px">\${esc(l)}</div>\`:'').join('')}
    </div>\`;
  }

  if(t.specs){
    html += \`<div style="background:var(--inp);border:1.5px solid var(--bd);border-radius:10px;padding:11px 13px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--t3);margin-bottom:4px">Specifications</div>
      <div style="font-size:13px;color:var(--t2);line-height:1.5">\${esc(t.specs)}</div>
    </div>\`;
  }

  html += '</div>';

  // Show in toolDetailOv
  document.getElementById('toolDetailBody').innerHTML = html;
  document.getElementById('toolDetailName').textContent = t.name;
  show('toolDetailOv');
}
function closeToolDetail(){ hide('toolDetailOv'); }

// ── SAFETY REMINDERS ──────────────────────────────────────────────────────────
let safeOpenId = null;

function renderSafety(){
  document.getElementById('safeList').innerHTML = SAFETY_REMINDERS.map(r=>\`
    <div style="background:var(--card);border:1.5px solid var(--bd);border-radius:14px;overflow:hidden;box-shadow:var(--sh);margin-bottom:10px">
      <div onclick="toggleSafe('\${r.id}')" style="display:flex;align-items:center;gap:12px;padding:14px 15px;cursor:pointer">
        <div style="font-size:26px;flex-shrink:0">\${r.icon}</div>
        <div style="flex:1">
          <div style="font-family:var(--fh);font-size:18px;font-weight:800;color:var(--t1)">\${esc(r.title)}</div>
          <div style="font-size:12px;color:var(--t2);margin-top:2px">\${r.steps.length} checklist sections</div>
        </div>
        <div id="safeArr_\${r.id}" style="color:var(--t3);transition:transform .2s">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>
      <div id="safeBody_\${r.id}" style="display:none;padding:0 15px 15px">
        <div style="height:1px;background:var(--bd);margin-bottom:12px"></div>
        \${r.steps.map(step=>\`
          <div style="margin-bottom:12px">
            <div style="font-family:var(--fh);font-size:15px;font-weight:800;color:\${r.color};margin-bottom:7px">\${esc(step.h)}</div>
            \${step.items.map(item=>\`
              <div style="display:flex;gap:8px;align-items:flex-start;padding:7px 10px;background:var(--inp);border-radius:8px;margin-bottom:5px;border:1.5px solid var(--bd)">
                <span style="font-size:14px;flex-shrink:0;line-height:1.5">\${item.split(' ')[0]}</span>
                <span style="font-size:13px;color:var(--t1);line-height:1.5">\${esc(item.split(' ').slice(1).join(' '))}</span>
              </div>\`).join('')}
          </div>\`).join('')}
      </div>
    </div>\`).join('');
}

function toggleSafe(id){
  const body = document.getElementById('safeBody_'+id);
  const arr  = document.getElementById('safeArr_'+id);
  if(!body) return;
  const open = body.style.display!=='none';
  body.style.display = open?'none':'block';
  arr.style.transform = open?'':'rotate(180deg)';
}

// Patch switchView to handle tools
const _origSwitchView = switchView;
window.switchView = function(v){
  _origSwitchView(v);
  const toolsView = document.getElementById('toolsView');
  if(toolsView) toolsView.classList.toggle('on', v==='tools');
  const navTools = document.getElementById('navTools');
  if(navTools) navTools.classList.toggle('on', v==='tools');
  const fab = document.getElementById('fab');
  if(fab) fab.classList.toggle('off', v!=='inv');
  if(v==='tools') switchToolTab('conv');
};
// END TOOLS SYSTEM


// ═══ DAMAGE PHOTO ═══
let curDmgPhoto=null;
function handleDmgPhoto(e){
  const file=e.target.files[0];if(!file)return;
  compress(file,800,.82).then(b64=>{
    curDmgPhoto=b64;
    document.getElementById('dmgPhotoPrev').src=b64;
    document.getElementById('dmgPhotoPrev').classList.add('on');
    document.getElementById('dmgPhotoPh').classList.add('off');
    document.getElementById('dmgPhotoRm').classList.add('on');
    document.getElementById('dmgGalleryBtn').classList.add('off');
  }).catch(()=>toast('Could not load photo'));
  e.target.value='';
}
function removeDmgPhoto(e){
  if(e){e.preventDefault();e.stopPropagation();}
  curDmgPhoto=null;
  document.getElementById('dmgPhotoPrev').src='';
  document.getElementById('dmgPhotoPrev').classList.remove('on');
  document.getElementById('dmgPhotoPh').classList.remove('off');
  document.getElementById('dmgPhotoRm').classList.remove('on');
  document.getElementById('dmgGalleryBtn').classList.remove('off');
}

// Patch openDmg to reset photo
const _origOpenDmg=openDmg;
window.openDmg=function(id){
  _origOpenDmg(id);
  curDmgPhoto=null;
  removeDmgPhoto(null);
};

// Patch printDmg to include photo
const _origPrintDmg=printDmg;
window.printDmg=function(){
  const d=buildDmgData();if(!d)return;
  const sevColor={Minor:'#22c55e',Moderate:'#f59e0b',Severe:'#ef4444','Total Loss':'#7c3aed'}[d.severity]||'#ef4444';
  const photoHTML=curDmgPhoto?\`<div style="margin:14px 0"><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#64748b;margin-bottom:6px">Photo Evidence</div><img src="\${curDmgPhoto}" style="max-width:100%;border-radius:8px;border:1px solid #e2e8f0"/></div>\`:'';
  const html=\`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Damage Report</title>
  <style>body{font-family:Arial,sans-serif;font-size:13px;color:#111;margin:30px;max-width:700px}.logo{font-size:24px;font-weight:900}.logo b{color:#f97316}.badge{background:\${sevColor};color:#fff;padding:4px 14px;border-radius:20px;font-weight:700;font-size:12px}h2{font-size:15px;font-weight:700;border-bottom:1px solid #ddd;padding-bottom:5px;margin:18px 0 10px;color:#0f172a}.grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}.field{background:#f8f9fa;border:1px solid #e2e8f0;border-radius:8px;padding:10px 12px}.fl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#64748b;margin-bottom:3px}.fv{font-size:14px;font-weight:600}.desc-box{background:#fff5f5;border:1px solid #fca5a5;border-radius:8px;padding:14px;line-height:1.6}.footer{margin-top:28px;padding-top:14px;border-top:1px solid #ddd;display:flex;justify-content:space-between;font-size:11px;color:#64748b}.sig-line{margin-top:36px;display:flex;justify-content:space-around}.sig-block{text-align:center;width:180px}.sig-block hr{margin-bottom:5px}.hdr{display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid #f97316;padding-bottom:14px;margin-bottom:20px}@media print{body{margin:15px}}</style></head>
  <body><div class="hdr"><div><div class="logo">WARE<b>STOCK</b></div><div style="font-size:11px;color:#64748b;margin-top:2px">Damage / Incident Report</div></div>
  <div><div class="badge">\${esc(d.severity)}</div><div style="font-size:11px;color:#64748b;margin-top:6px;text-align:right">Date: \${new Date(d.date).toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'})}</div></div></div>
  <h2>Item Information</h2>
  <div class="grid">
    <div class="field"><div class="fl">Item Name</div><div class="fv">\${esc(d.itemName)}</div></div>
    <div class="field"><div class="fl">Category</div><div class="fv">\${esc(d.category)}</div></div>
    <div class="field"><div class="fl">Location / Project</div><div class="fv">\${esc(d.location||'—')}</div></div>
    <div class="field"><div class="fl">Severity</div><div class="fv" style="color:\${sevColor}">\${esc(d.severity)}</div></div>
  </div>
  <h2>Damage Description</h2><div class="desc-box">\${esc(d.description)}</div>
  \${photoHTML}
  <h2>Report Details</h2>
  <div class="grid">
    <div class="field"><div class="fl">Reported By</div><div class="fv">\${esc(d.reporter)}</div></div>
    <div class="field"><div class="fl">Generated</div><div class="fv">\${esc(d.generatedAt)}</div></div>
  </div>
  <div class="sig-line">
    <div class="sig-block"><hr/><div>Reported By</div></div>
    <div class="sig-block"><hr/><div>Supervisor</div></div>
    <div class="sig-block"><hr/><div>Warehouse Officer</div></div>
  </div>
  <div class="footer"><div>WareStock — Developed by Brian Capio (ICT-MAWD)</div><div>CONFIDENTIAL — Internal Use Only</div></div>
  </body></html>\`;
  const w=window.open('','_blank','width=380,height=560');
  if(w){w.document.write(html);w.document.close();setTimeout(()=>w.print(),400);}
  else toast('Allow pop-ups to print');
};

// ═══ SUPPLIER CALL ═══
function callSupplier(id){
  const it=items.find(i=>i.id===id);if(!it)return;
  if(it.supplierContact){
    const clean=it.supplierContact.replace(/\\s+/g,'');
    window.open('tel:'+clean);
  } else {
    toast('No contact number saved for this supplier');
    openEdit(id);
  }
}

// ═══ INSPECTION TRACKER ═══
const INSP_KEY='ws_inspections_v1';

function openInsp(){
  renderInspList();
  show('inspOv');
}
function closeInsp(){hide('inspOv');}

function renderInspList(){
  const now=new Date();
  const withInsp=items.filter(i=>i.nextInspection||i.inspectionLog?.length>0||i.condition==='Condemned');
  const overdue=withInsp.filter(i=>i.nextInspection&&new Date(i.nextInspection)<now);
  const soon=withInsp.filter(i=>i.nextInspection&&new Date(i.nextInspection)>=now&&(new Date(i.nextInspection)-now)<7*86400000);
  const ok=withInsp.filter(i=>!i.nextInspection||(new Date(i.nextInspection)-now)>=7*86400000);

  // Update badge
  const badge=document.getElementById('inspOverdueBadge');
  if(badge){badge.textContent=overdue.length+' overdue';badge.style.display=overdue.length?'inline':'none';}

  document.getElementById('inspStats').innerHTML=
    \`<div class="chip warn"><b>\${overdue.length}</b>&nbsp;overdue</div>\`
    +\`<div class="chip" style="border-color:var(--ybd);background:var(--ybg);color:#92400e"><b>\${soon.length}</b>&nbsp;due soon</div>\`
    +\`<div class="chip good"><b>\${ok.length}</b>&nbsp;OK</div>\`;

  if(!withInsp.length){
    document.getElementById('inspList').innerHTML='<div class="norows" style="text-align:center;padding:24px;color:var(--t3)">No items with inspection dates set.<br/>Edit any item to add a Next Inspection date.</div>';
    return;
  }

  const rows=[...overdue,...soon,...ok];
  document.getElementById('inspList').innerHTML=rows.map(item=>{
    const isOver=item.nextInspection&&new Date(item.nextInspection)<now;
    const isSoon=!isOver&&item.nextInspection&&(new Date(item.nextInspection)-now)<7*86400000;
    const statusCls=isOver?'over':isSoon?'soon':'ok';
    const cc=catColor(item.category);
    let dueStr='No date set';
    if(item.nextInspection){
      const d=new Date(item.nextInspection);
      const diff=Math.ceil((d-now)/86400000);
      dueStr=isOver?\`\${Math.abs(diff)}d overdue\`:diff===0?'Due today':diff===1?'Due tomorrow':\`Due in \${diff}d\`;
    }
    return\`<div class="insp-row\${isOver?' overdue':isSoon?' due-soon':''}" onclick="openInspDetail('\${item.id}')">
      <div class="insp-status \${statusCls}"></div>
      <div style="flex:1;min-width:0">
        <div class="insp-name">\${esc(item.name)}</div>
        <div class="insp-meta">
          <span class="badge" style="background:\${cc.bg};color:\${cc.fg}">\${esc(item.category)}</span>
          &nbsp;<span style="font-size:11px;font-weight:600;color:var(--t2)">Condition: \${item.condition||'Good'}</span>
        </div>
      </div>
      <div class="insp-due \${statusCls}">\${dueStr}</div>
    </div>\`;
  }).join('');
}

let inspItemId=null;
function openInspDetail(id){
  const item=items.find(i=>i.id===id);if(!item)return;
  inspItemId=id;
  document.getElementById('inspDetailTitle').textContent='🔍 '+item.name;
  const cc=catColor(item.category);
  document.getElementById('inspDetailBanner').innerHTML=
    \`<div style="font-family:var(--fh);font-size:17px;font-weight:800;color:var(--t1)">\${esc(item.name)}</div>
     <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:5px">
       <span class="badge" style="background:\${cc.bg};color:\${cc.fg}">\${esc(item.category)}</span>
       <span class="badge \${({'New':'cond-new','Good':'cond-good','Fair':'cond-fair','Poor':'cond-poor','Condemned':'cond-condemned'}[item.condition]||'cond-good')}">\${item.condition||'Good'}</span>
       \${item.nextInspection?\`<span style="font-size:12px;color:var(--t2);align-self:center">Next: \${new Date(item.nextInspection).toLocaleDateString()}</span>\`:''}
     </div>\`;
  // Set default dates
  document.getElementById('newInspDate').value=new Date().toISOString().slice(0,10);
  document.getElementById('newInspNext').value='';
  document.getElementById('newInspector').value='';
  document.getElementById('newInspNote').value='';
  renderInspHistory();
  show('inspDetailOv');
}
function closeInspDetail(){hide('inspDetailOv');}

function renderInspHistory(){
  const item=items.find(i=>i.id===inspItemId);
  const log=(item?.inspectionLog||[]);
  const el=document.getElementById('inspHistory');
  if(!log.length){el.innerHTML='<div class="norows">No inspection records yet.</div>';return;}
  el.innerHTML=\`<div style="font-family:var(--fh);font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.5px;color:var(--t3);margin-bottom:6px">Past Inspections</div>\`
    +log.map(r=>{
      const pass=r.result==='Pass';
      const warn=r.result==='Pass with notes';
      const col=pass?'#22c55e':warn?'#f59e0b':'#ef4444';
      return\`<div style="background:var(--inp);border:1.5px solid var(--bd);border-radius:10px;padding:10px 12px;margin-bottom:7px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
          <span style="font-size:12px;font-weight:700;color:\${col}">\${r.result}</span>
          <span style="font-family:'DM Mono',monospace;font-size:11px;color:var(--t3)">\${new Date(r.date).toLocaleDateString()}</span>
        </div>
        <div style="font-size:13px;font-weight:600;color:var(--t1)">Inspector: \${esc(r.inspector)}</div>
        \${r.nextDate?\`<div style="font-size:12px;color:var(--t2);margin-top:2px">Next due: \${new Date(r.nextDate).toLocaleDateString()}</div>\`:''}
        \${r.note?\`<div style="font-size:12px;color:var(--t2);margin-top:4px;font-style:italic">\${esc(r.note)}</div>\`:''}
      </div>\`;
    }).join('');
}

function submitInspection(){
  const item=items.find(i=>i.id===inspItemId);if(!item)return;
  const date=document.getElementById('newInspDate').value;
  const inspector=document.getElementById('newInspector').value.trim();
  const result=document.getElementById('newInspResult').value;
  const nextDate=document.getElementById('newInspNext').value||null;
  const note=document.getElementById('newInspNote').value.trim();
  if(!date||!inspector){toast('Enter inspection date and inspector name');return;}
  if(!item.inspectionLog)item.inspectionLog=[];
  item.inspectionLog.unshift({date,inspector,result,nextDate,note:note||null,timestamp:new Date().toISOString()});
  if(nextDate)item.nextInspection=nextDate;
  // Auto-update condition if failed
  if(result==='Fail')item.condition='Condemned';
  else if(result==='Pass with notes'&&item.condition==='Condemned')item.condition='Poor';
  saveItems();render();renderInspHistory();renderInspList();
  document.getElementById('newInspNote').value='';
  document.getElementById('newInspector').value='';
  toast('✅ Inspection recorded for '+item.name);
}

// ═══ SHIFT HANDOVER ═══
const HANDOVER_KEY='ws_handover_v1';
let handoverNotes=[];

function loadHandover(){
  try{handoverNotes=JSON.parse(localStorage.getItem(HANDOVER_KEY))||[];}
  catch(e){handoverNotes=[];}
}
function saveHandoverData(){localStorage.setItem(HANDOVER_KEY,JSON.stringify(handoverNotes));}

function openHandover(){
  loadHandover();
  renderHandoverHistory();
  show('handoverOv');
}
function closeHandover(){hide('handoverOv');}

function saveHandover(){
  const note=document.getElementById('handoverNote').value.trim();
  const author=document.getElementById('handoverAuthor').value.trim()||'Unknown';
  if(!note){toast('Enter a handover note');return;}
  handoverNotes.unshift({id:uid(),author,note,timestamp:new Date().toISOString()});
  if(handoverNotes.length>20)handoverNotes=handoverNotes.slice(0,20);
  saveHandoverData();
  document.getElementById('handoverNote').value='';
  renderHandoverHistory();
  toast('✅ Handover note saved');
}

function renderHandoverHistory(){
  const el=document.getElementById('handoverHistory');
  if(!handoverNotes.length){el.innerHTML='<div class="norows">No handover notes yet.</div>';return;}
  el.innerHTML=\`<div style="font-family:var(--fh);font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.5px;color:var(--t3);margin-top:4px;margin-bottom:6px">Previous Notes</div>\`
    +handoverNotes.map((n,i)=>\`
    <div class="handover-prev" style="\${i===0?'border-color:var(--bbd);background:var(--bbg)':''}">
      <div class="handover-prev-hdr">\${i===0?'⭐ LATEST — ':''}\${esc(n.author)} · \${fmtDT(n.timestamp)}</div>
      <div class="handover-prev-note">\${esc(n.note)}</div>
    </div>\`).join('');
}

// ═══ MONTHLY REPORT ═══
function openMonthly(){
  const now=new Date();
  const mSel=document.getElementById('monthlyMonth');
  const ySel=document.getElementById('monthlyYear');
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  mSel.innerHTML=months.map((m,i)=>\`<option value="\${i}"\${i===now.getMonth()?' selected':''}>\${m}</option>\`).join('');
  const yr=now.getFullYear();
  ySel.innerHTML=[yr-1,yr,yr+1].map(y=>\`<option value="\${y}"\${y===yr?' selected':''}>\${y}</option>\`).join('');
  document.getElementById('monthlyResult').style.display='none';
  document.getElementById('monthlyExportBtns').style.display='none';
  show('monthlyOv');
}
function closeMonthly(){hide('monthlyOv');}

let monthlyData=null;

function generateMonthly(){
  const month=parseInt(document.getElementById('monthlyMonth').value);
  const year=parseInt(document.getElementById('monthlyYear').value);
  const monthName=new Date(year,month,1).toLocaleString(undefined,{month:'long',year:'numeric'});

  // Gather all issues in this month
  const inRange=ts=>{const d=new Date(ts);return d.getMonth()===month&&d.getFullYear()===year;};

  // From personnel issues
  let totalIssued=0,totalIssueQty=0;
  const byPerson={},byItem={};
  (typeof personnel!=='undefined'?personnel:[]).forEach(p=>{
    (p.issues||[]).filter(iss=>inRange(iss.timestamp)).forEach(iss=>{
      totalIssued++;totalIssueQty+=iss.quantity;
      if(!byPerson[p.name])byPerson[p.name]={qty:0,count:0};
      byPerson[p.name].qty+=iss.quantity;byPerson[p.name].count++;
      if(!byItem[iss.itemName])byItem[iss.itemName]={qty:0,unit:iss.unit,cat:iss.category||''};
      byItem[iss.itemName].qty+=iss.quantity;
    });
  });

  // Stock movements
  let totalRestocked=0,totalUsed=0;
  items.forEach(it=>{
    (it.stockLog||[]).filter(e=>inRange(e.timestamp)).forEach(e=>{
      if(e.type==='restock')totalRestocked+=e.delta;
      else totalUsed+=e.delta;
    });
  });

  // Borrows
  let totalBorrows=0,overdueCount=0;
  items.forEach(it=>{
    (it.history||[]).filter(h=>h.type==='borrowed'&&inRange(h.timestamp)).forEach(()=>totalBorrows++);
    (it.borrows||[]).filter(b=>b.dueDate&&new Date(b.dueDate)<new Date()&&inRange(b.date)).forEach(()=>overdueCount++);
  });

  monthlyData={month,year,monthName,totalIssued,totalIssueQty,totalRestocked,totalUsed,totalBorrows,overdueCount,byPerson,byItem};

  const topPeople=Object.entries(byPerson).sort((a,b)=>b[1].qty-a[1].qty).slice(0,5);
  const topItems=Object.entries(byItem).sort((a,b)=>b[1].qty-a[1].qty).slice(0,5);

  const el=document.getElementById('monthlyResult');
  el.innerHTML=\`
    <div style="font-family:var(--fh);font-size:22px;font-weight:800;color:var(--t1)">📊 \${monthName}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      <div class="month-stat"><div class="month-stat-lbl">Issues Made</div><div class="month-stat-val">\${totalIssued}</div><div style="font-size:11px;color:var(--t3)">\${totalIssueQty} total units</div></div>
      <div class="month-stat"><div class="month-stat-lbl">Items Used (−)</div><div class="month-stat-val">\${totalUsed}</div><div style="font-size:11px;color:var(--t3)">via stock log</div></div>
      <div class="month-stat good"><div class="month-stat-lbl">Restocked (+)</div><div class="month-stat-val" style="color:#22c55e">\${totalRestocked}</div></div>
      <div class="month-stat info"><div class="month-stat-lbl">Borrows</div><div class="month-stat-val" style="color:#3b82f6">\${totalBorrows}</div></div>
    </div>
    \${topPeople.length?\`<div>
      <div style="font-family:var(--fh);font-size:14px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Top Requestors</div>
      \${topPeople.map(([name,d],i)=>\`<div class="month-row"><div style="display:flex;align-items:center;gap:8px"><span style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--t3)">#\${i+1}</span><span style="font-size:14px;font-weight:600;color:var(--t1)">\${esc(name)}</span></div><span style="font-family:var(--fh);font-size:18px;font-weight:800;color:#f97316">\${d.qty} pcs</span></div>\`).join('')}
    </div>\`:''}
    \${topItems.length?\`<div>
      <div style="font-family:var(--fh);font-size:14px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Top Consumed Items</div>
      \${topItems.map(([name,d],i)=>\`<div class="month-row"><div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden"><span style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--t3);flex-shrink:0">#\${i+1}</span><span style="font-size:14px;font-weight:600;color:var(--t1);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\${esc(name)}</span></div><span style="font-family:var(--fh);font-size:18px;font-weight:800;color:#f97316;flex-shrink:0">\${d.qty} \${esc(d.unit)}</span></div>\`).join('')}
    </div>\`:''}\`;
  el.style.display='flex';
  document.getElementById('monthlyExportBtns').style.display='grid';
}

function printMonthly(){
  if(!monthlyData)return;
  const {monthName,totalIssued,totalIssueQty,totalRestocked,totalUsed,totalBorrows,byPerson,byItem}=monthlyData;
  const topPeople=Object.entries(byPerson).sort((a,b)=>b[1].qty-a[1].qty);
  const topItems=Object.entries(byItem).sort((a,b)=>b[1].qty-a[1].qty);
  const html=\`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Monthly Report \${monthName}</title>
  <style>body{font-family:Arial,sans-serif;font-size:13px;color:#111;margin:30px;max-width:700px}
  .logo{font-size:22px;font-weight:900}.logo b{color:#f97316}
  h2{font-size:15px;font-weight:700;border-bottom:1px solid #ddd;padding-bottom:4px;margin:16px 0 10px}
  .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px}
  .stat{background:#f8f9fa;border:1px solid #e2e8f0;border-radius:8px;padding:10px;text-align:center}
  .stat-lbl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#64748b}
  .stat-val{font-size:24px;font-weight:900;color:#0f172a}
  table{width:100%;border-collapse:collapse}th,td{border:1px solid #ddd;padding:6px 8px;text-align:left}
  th{background:#f0f2f5;font-weight:700}tr:nth-child(even){background:#f9f9f9}
  .footer{margin-top:24px;font-size:11px;color:#64748b;display:flex;justify-content:space-between;border-top:1px solid #ddd;padding-top:10px}
  @media print{body{margin:15px}}</style></head>
  <body><div style="display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid #f97316;padding-bottom:12px;margin-bottom:18px">
  <div><div class="logo">WARE<b>STOCK</b></div><div style="font-size:13px;color:#64748b;margin-top:2px">Monthly Consumption Report — \${monthName}</div></div>
  <div style="text-align:right;font-size:11px;color:#64748b">Generated: \${new Date().toLocaleString()}</div></div>
  <h2>Summary</h2>
  <div class="grid">
    <div class="stat"><div class="stat-lbl">Issues</div><div class="stat-val">\${totalIssued}</div></div>
    <div class="stat"><div class="stat-lbl">Units Out</div><div class="stat-val">\${totalIssueQty}</div></div>
    <div class="stat"><div class="stat-lbl">Restocked</div><div class="stat-val">\${totalRestocked}</div></div>
    <div class="stat"><div class="stat-lbl">Borrows</div><div class="stat-val">\${totalBorrows}</div></div>
  </div>
  \${topPeople.length?\`<h2>Requestors</h2><table><tr><th>Name</th><th>Issues</th><th>Qty</th></tr>\${topPeople.map(([n,d])=>\`<tr><td>\${esc(n)}</td><td>\${d.count}</td><td>\${d.qty}</td></tr>\`).join('')}</table>\`:''}
  \${topItems.length?\`<h2>Items Consumed</h2><table><tr><th>Item</th><th>Category</th><th>Qty</th><th>Unit</th></tr>\${topItems.map(([n,d])=>\`<tr><td>\${esc(n)}</td><td>\${esc(d.cat)}</td><td>\${d.qty}</td><td>\${esc(d.unit)}</td></tr>\`).join('')}</table>\`:''}
  <div class="footer"><div>WareStock — Developed by Brian Capio (ICT-MAWD)</div><div>CONFIDENTIAL</div></div>
  </body></html>\`;
  const w=window.open('','_blank','width=780,height=600');
  if(w){w.document.write(html);w.document.close();setTimeout(()=>w.print(),500);}
  else toast('Allow pop-ups to print');
}

function exportMonthlyCSV(){
  if(!monthlyData)return;
  const {monthName,byPerson,byItem}=monthlyData;
  const rows=[['WareStock Monthly Report',monthName],[''],
    ['REQUESTORS'],['Name','Issues','Total Qty'],
    ...Object.entries(byPerson).sort((a,b)=>b[1].qty-a[1].qty).map(([n,d])=>[n,d.count,d.qty]),
    [''],['TOP CONSUMED ITEMS'],['Item','Category','Qty','Unit'],
    ...Object.entries(byItem).sort((a,b)=>b[1].qty-a[1].qty).map(([n,d])=>[n,d.cat,d.qty,d.unit])
  ];
  const csv=rows.map(r=>r.map(cell=>\`"\${String(cell||'').replace(/"/g,'""')}"\`).join(',')).join('\\n');
  const blob=new Blob([csv],{type:'text/csv'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download=\`warestock-monthly-\${monthlyData.year}-\${String(monthlyData.month+1).padStart(2,'0')}.csv\`;
  a.click();URL.revokeObjectURL(url);
  toast('Monthly CSV downloaded');
}

// ═══ BARCODE SCANNER EXTENSION ═══
// Patch startScan to also use BarcodeDetector API (native Android) if available
const _origStartScan=startScan;
window.startScan=async function(){
  if(window.BarcodeDetector){
    const video=document.getElementById('scanVideo');
    const hint=document.getElementById('scanHint');
    try{
      const scanStream2=await navigator.mediaDevices.getUserMedia(
        {video:{facingMode:'environment',width:{ideal:1280},height:{ideal:720}}});
      video.srcObject=scanStream2;
      // Make scanStream accessible for stopScan
      window.scanStream=scanStream2;
      await video.play();
      hint.textContent='🔍 Scanning… supports QR codes and barcodes';
      const detector=new BarcodeDetector({formats:['qr_code','ean_13','ean_8','code_128','code_39','itf','upc_a','upc_e','data_matrix']});
      let scanning=true;
      async function detectLoop(){
        if(!scanning||!window.scanStream)return;
        try{
          const codes=await detector.detect(video);
          if(codes&&codes.length>0){scanning=false;handleScan(codes[0].rawValue);return;}
        }catch(e){}
        window.scanRaf=requestAnimationFrame(detectLoop);
      }
      detectLoop();
    }catch(err){
      // BarcodeDetector failed, fall back to jsQR
      _origStartScan();
    }
  } else {
    // No BarcodeDetector, use jsQR
    _origStartScan();
  }
};

// Patch handleScan to handle non-WareStock barcodes gracefully
const _origHandleScan=handleScan;
window.handleScan=function(data){
  let parsed=null;
  try{parsed=JSON.parse(data);}catch(e){}
  if(!parsed||parsed.app!=='WARESTOCK'){
    // Not a WareStock QR - check if it looks like a product barcode
    const isBarcode=/^[0-9]{8,14}$/.test(data.trim());
    if(isBarcode){
      stopScan();
      document.getElementById('scanHint').textContent='📦 Barcode scanned: '+data.trim();
      document.getElementById('scanOkContent').innerHTML=
        \`<div style="font-size:14px;color:var(--t2);line-height:1.6">
          Barcode: <b style="font-family:'DM Mono',monospace;color:var(--t1)">\${esc(data.trim())}</b><br/>
          This is a manufacturer barcode, not a WareStock QR.<br/>
          You can add this as an item or search for an existing item.
        </div>
        <div style="margin-top:10px;display:flex;gap:8px">
          <button onclick="closeScanner();openAdd()" class="btnmain" style="flex:1;padding:10px;font-size:14px">+ Add New Item</button>
        </div>\`;
      document.getElementById('scanOk').style.display='block';
      return;
    }
  }
  _origHandleScan(data);
};

// Init patch
loadHandover();
loadPersonnel();
// END NEW FEATURES


// ═══ TEXT IMPORTER ═══
let impItems = []; // parsed items array
let impSelected = new Set();

function openImporter(){
  goImpStep(1);
  document.getElementById('impTextArea').value = '';
  fillSel('impDefCat', cats, cats[0]);
  fillSel('impDefLoc', locs, '', '— None —');
  show('importOv');
}
function closeImporter(){ hide('importOv'); }

function goImpStep(n){
  [1,2,3].forEach(i=>{
    document.getElementById('impStep'+i).classList.toggle('on', i===n);
  });
}

// ── FILE HANDLING ─────────────────────────────────────────────────────────────
function handleImportDrop(e){
  e.preventDefault();
  document.getElementById('impDropZone').classList.remove('drag');
  const file = e.dataTransfer.files[0];
  if(file) processImportFile(file);
}
function handleImportFile(e){
  const file = e.target.files[0];
  if(file) processImportFile(file);
  e.target.value='';
}

function processImportFile(file){
  const name = file.name.toLowerCase();
  if(name.endsWith('.xlsx')||name.endsWith('.xls')){
    // Read as binary for XLSX
    const reader = new FileReader();
    reader.onload = ev => {
      try{
        if(window.XLSX){
          const wb = XLSX.read(ev.target.result, {type:'binary'});
          const ws = wb.Sheets[wb.SheetNames[0]];
          const rows = XLSX.utils.sheet_to_csv(ws);
          document.getElementById('impTextArea').value = rows;
          toast('📊 Excel file loaded — ' + wb.SheetNames[0]);
        } else {
          toast('XLSX library not loaded — paste text manually');
        }
      }catch(err){ toast('Could not read Excel file'); }
    };
    reader.readAsBinaryString(file);
  } else {
    // Text/CSV
    const reader = new FileReader();
    reader.onload = ev => {
      document.getElementById('impTextArea').value = ev.target.result;
      toast('📄 File loaded — click Extract Items');
    };
    reader.readAsText(file, 'UTF-8');
  }
}

// ── PARSER ────────────────────────────────────────────────────────────────────
function parseImportText(){
  const raw = document.getElementById('impTextArea').value.trim();
  if(!raw){ toast('Paste or upload a masterlist first'); return; }

  const lines = raw.split(/\\r?\\n/).map(l=>l.trim()).filter(l=>l.length>0);
  const parsed = [];

  // Detect if it looks like CSV with headers
  const firstLine = lines[0];
  const isCSV = firstLine.includes(',') || firstLine.includes('\\t');
  const hasHeader = isCSV && /item|name|description|material|equipment|tool|qty|quantity|unit/i.test(firstLine);

  const startIdx = hasHeader ? 1 : 0;

  // Column detection for CSV
  let nameCol=0, qtyCol=-1, unitCol=-1;
  if(hasHeader){
    const headers = splitRow(firstLine).map(h=>h.toLowerCase().trim());
    headers.forEach((h,i)=>{
      if(/item|name|description|material|equipment|tool/i.test(h)) nameCol=i;
      else if(/qty|quantity|amount|count/i.test(h)) qtyCol=i;
      else if(/unit|uom|measure/i.test(h)) unitCol=i;
    });
  }

  lines.slice(startIdx).forEach(line => {
    // Skip clearly empty or header-looking lines
    if(/^[-=_#*]+$/.test(line)) return;
    if(/^(no\\.?|#|s\\/n|sno|item no)/i.test(line)) return;
    if(line.length < 2) return;

    let name='', qty=1, unit='pcs';

    if(isCSV){
      const cols = splitRow(line);
      name = cleanName(cols[nameCol]||'');
      if(qtyCol>=0 && cols[qtyCol]) qty = Math.max(1, parseInt(cols[qtyCol])||1);
      if(unitCol>=0 && cols[unitCol]) unit = normaliseUnit(cols[unitCol].trim())||'pcs';
      // Even if no header, try 2-col or 3-col: name,qty or name,qty,unit
      if(nameCol===0 && qtyCol<0){
        const cols2 = splitRow(line);
        if(cols2.length>=2 && /^\\d+$/.test(cols2[1].trim())){
          qty = Math.max(1, parseInt(cols2[1])||1);
          if(cols2.length>=3 && cols2[2].trim()) unit = normaliseUnit(cols2[2].trim());
          name = cleanName(cols2[0]);
        }
      }
    } else {
      let rawName = line;
      // Pattern 1: trailing "(10 pcs)" or "[5rolls]" or "x3" or "- 4 pairs"
      const qtyMatch = rawName.match(/[\\(\\[]?[xX\\*]?\\s*(\\d+)\\s*(pcs?|rolls?|sets?|kgs?|meters?|m\\b|boxes?|pairs?|ltr?s?|liters?|units?|ea|each)[\\)\\]]?\\s*$/i);
      if(qtyMatch){
        qty = parseInt(qtyMatch[1])||1;
        unit = normaliseUnit(qtyMatch[2]);
        rawName = rawName.slice(0, qtyMatch.index).trim().replace(/[,\\-\\s]+$/, '');
      } else {
        // Pattern 2: standalone number at end: "Safety Harness 10" or "Gloves, 20"
        const numEnd = rawName.match(/[,\\s]+(\\d{1,4})\\s*$/);
        if(numEnd && parseInt(numEnd[1]) > 0 && parseInt(numEnd[1]) < 10000){
          qty = parseInt(numEnd[1]);
          rawName = rawName.slice(0, numEnd.index).trim();
        } else {
          // Pattern 3: "5 Safety Harness" — number at START (some formats)
          const numStart = rawName.match(/^(\\d{1,4})\\s+(.+)$/);
          if(numStart && parseInt(numStart[1]) > 0 && parseInt(numStart[1]) < 500){
            qty = parseInt(numStart[1]);
            rawName = numStart[2];
          }
        }
      }
      // Strip leading row numbers: "1. Item" "01)" "No.3 Item"
      rawName = rawName.replace(/^(no\\.?\\s*)?\\d+[.\\)\\-\\s]+/i, '').trim();
      // Strip trailing punctuation
      rawName = rawName.replace(/[:\\-,]+$/, '').trim();
      name = cleanName(rawName);
    }

    if(name.length < 2) return; // Skip too-short names
    if(name.length > 100) name = name.slice(0,100);

    // Check if already in inventory
    const exists = items.find(i=>i.name.toLowerCase()===name.toLowerCase());
    parsed.push({ name, qty, unit, exists: exists||null, selected: !exists });
  });

  if(!parsed.length){
    toast('No items could be extracted — try a different format');
    return;
  }

  impItems = parsed;
  impSelected = new Set(parsed.map((_,i)=>i).filter(i=>parsed[i].selected));
  renderImpReview();
  goImpStep(2);
}

function splitRow(line){
  // Handle CSV with possible quotes
  const cols=[];let cur='';let inQ=false;
  for(let i=0;i<line.length;i++){
    const ch=line[i];
    if(ch==='"'){inQ=!inQ;}
    else if((ch===','||ch==='\\t')&&!inQ){cols.push(cur.replace(/^"|"$/g,'').trim());cur='';}
    else cur+=ch;
  }
  cols.push(cur.replace(/^"|"$/g,'').trim());
  return cols;
}

function cleanName(s){
  return s
    .replace(/^["'\`]|["'\`]$/g,'')     // strip outer quotes
    .replace(/\\(.*?\\)/g,' ')           // remove parenthetical notes (keep qty handled above)
    .replace(/\\[.*?\\]/g,' ')
    .replace(/\\s+/g,' ')
    .trim();
}

function normaliseUnit(u){
  const map={pcs:'pcs',pc:'pcs',piece:'pcs',pieces:'pcs',
    roll:'rolls',rolls:'rolls',
    set:'sets',sets:'sets',
    kg:'kg',kgs:'kg',
    m:'m',meter:'m',meters:'m',metre:'m',metres:'m',
    box:'boxes',boxes:'boxes',
    pair:'pairs',pairs:'pairs',
    ltr:'L',litre:'L',liter:'L',litres:'L',liters:'L',l:'L',
    unit:'pcs',units:'pcs'
  };
  return map[u.toLowerCase()]||u.toLowerCase()||'pcs';
}

// ── REVIEW UI ─────────────────────────────────────────────────────────────────
function renderImpReview(){
  const total = impItems.length;
  const selCount = impSelected.size;
  document.getElementById('impFoundLbl').textContent = \`\${total} item\${total!==1?'s':''} found\`;
  document.getElementById('impConfirmBtn').textContent = \`✅ Add \${selCount} Selected Item\${selCount!==1?'s':''}\`;

  document.getElementById('impReviewList').innerHTML = impItems.map((item,i)=>{
    const isSel = impSelected.has(i);
    const existLabel = item.exists
      ? \`<span class="imp-item-exists">Already in stock (\${item.exists.quantity} \${item.exists.unit})</span>\`
      : \`<span class="imp-item-new">+ New item</span>\`;
    return \`<div class="imp-row\${isSel?' sel':''}" id="impR\${i}">
      <div class="imp-chk\${isSel?' on':''}" onclick="toggleImpItem(\${i})" id="impChk\${i}">
        \${isSel?'<svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#fff" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>':''}
      </div>
      <div class="imp-item-name" title="\${esc(item.name)}">\${esc(item.name)}</div>
      \${existLabel}
      <input class="imp-qty-inp" type="number" min="1" value="\${item.qty}"
        onchange="impItems[\${i}].qty=Math.max(1,parseInt(this.value)||1)"
        onclick="event.stopPropagation()" inputmode="numeric"/>
    </div>\`;
  }).join('');
}

function toggleImpItem(i){
  if(impSelected.has(i)) impSelected.delete(i);
  else impSelected.add(i);
  renderImpReview();
}

function impSelectAll(sel){
  if(sel) impItems.forEach((_,i)=>impSelected.add(i));
  else impSelected.clear();
  renderImpReview();
}

// ── CONFIRM IMPORT ────────────────────────────────────────────────────────────
function confirmImport(){
  if(!impSelected.size){ toast('Select at least one item'); return; }

  const defCat   = document.getElementById('impDefCat').value || cats[0];
  const defLoc   = document.getElementById('impDefLoc').value || '';
  let added=0, updated=0;

  impSelected.forEach(i=>{
    const imp = impItems[i];
    if(imp.exists){
      // Update quantity of existing item
      imp.exists.quantity += imp.qty;
      if(!imp.exists.stockLog) imp.exists.stockLog=[];
      imp.exists.stockLog.unshift({
        type:'restock', delta:imp.qty,
        before:imp.exists.quantity-imp.qty,
        after:imp.exists.quantity,
        timestamp:new Date().toISOString()
      });
      updated++;
    } else {
      // Add new item
      items.push({
        id:uid(), name:imp.name, category:defCat, location:defLoc,
        quantity:imp.qty, unit:imp.unit||'pcs', threshold:5,
        unitPrice:0, image:null, pinned:false, condition:'Good',
        supplier:null, supplierContact:null, nextInspection:null,
        inspectionLog:[], borrows:[], history:[], stockLog:[]
      });
      added++;
    }
  });

  saveItems(); render();
  document.getElementById('impDoneLbl').textContent = \`\${added+updated} Item\${added+updated!==1?'s':''} Imported!\`;
  document.getElementById('impDoneSub').textContent =
    [added?\`\${added} new item\${added!==1?'s':''} added\`:'',
     updated?\`\${updated} existing item\${updated!==1?'s':''} restocked\`:'']
    .filter(Boolean).join(' · ');
  goImpStep(3);
}
// END TEXT IMPORTER


// ═══ RANDOM TIP CARD ═══
let tipIdx = -1;

function buildTips(){
  const tips = [];
  // From tool library safety notes
  TOOL_LIBRARY.forEach(t => {
    if(t.safety){
      // Split multi-line safety notes into individual tips
      const lines = t.safety.split('\\n').map(l=>l.trim()).filter(l=>l.length>20);
      lines.forEach(line => {
        tips.push({type:'⚠️ SAFETY', tool:t.name, icon:t.icon,
          body:line.replace(/^[•⚠✅🚨🔴🟡✓→•\\-]+\\s*/,''), color:'#ef4444'});
      });
      // Also add the first use
      if(t.uses && t.uses[0]){
        tips.push({type:'💡 DID YOU KNOW', tool:t.name, icon:t.icon,
          body:t.uses[0], color:'#3b82f6'});
      }
    }
  });
  // From safety reminders
  SAFETY_REMINDERS.forEach(r => {
    r.steps.forEach(step => {
      step.items.slice(0,2).forEach(item => {
        const emoji = item.split(' ')[0];
        const text  = item.split(' ').slice(1).join(' ');
        if(text.length > 20){
          tips.push({type:'🛡️ REMINDER', tool:r.title, icon:r.icon,
            body:text, color:r.color||'#f97316'});
        }
      });
    });
  });
  // Extra standalone tips
  const extras = [
    {type:'⚖️ DID YOU KNOW', tool:'Weight Limits', icon:'⛓️', color:'#22c55e',
     body:'A 1-tonne rated sling in a basket hitch can lift 2 tonnes — but in a choker hitch it drops to 800 kg. Always check the hitch configuration against the WLL.'},
    {type:'💨 WIND SAFETY', tool:'Anemometer', icon:'💨', color:'#3b82f6',
     body:'Stop ALL work at height when wind exceeds 14 m/s (50 km/h). If you feel wind strong enough to move large branches or make walking difficult, get down immediately.'},
    {type:'🔋 BATTERY SAFETY', tool:'Cordless Tools', icon:'🔩', color:'#f59e0b',
     body:'Never charge lithium-ion batteries unattended or overnight. If a battery swells, smells, or gets hot during charging — move it outside immediately and away from flammables.'},
    {type:'🔐 LOCKOUT', tool:'Electrical Isolation', icon:'⚡', color:'#eab308',
     body:'One person, one lock. Each worker locks out the isolation point with THEIR OWN lock. Never remove someone else\\'s lock — even if they have left the job site.'},
    {type:'🦺 HARNESS CHECK', tool:'Full Body Harness', icon:'🦺', color:'#f97316',
     body:'A harness that has arrested a fall MUST be retired immediately, even if it looks undamaged. The webbing fibres stretch beyond their designed limit in a fall arrest event.'},
    {type:'📦 MANUAL HANDLING', tool:'Safe Lifting', icon:'📦', color:'#22c55e',
     body:'Team lift for anything over 25 kg. Keep the load close to your body, bend at the knees — not the waist — and never twist while holding a load. Turn with your feet.'},
    {type:'🔍 INSPECT FIRST', tool:'Pre-Use Checks', icon:'🔍', color:'#8b5cf6',
     body:'10 seconds of inspection before use prevents hours in hospital. Check for cracks, missing guards, frayed cords, and loose fasteners before turning on any power tool.'},
    {type:'💧 HYDRATION', tool:'Heat & Work at Height', icon:'🌡️', color:'#06b6d4',
     body:'Dehydration impairs concentration and reaction time — critical risks at height. Drink water every 20 minutes during physical outdoor work, even if you do not feel thirsty.'},
    {type:'🧤 PPE REMINDER', tool:'Gloves', icon:'🧤', color:'#f97316',
     body:'Never wear gloves when operating a drill press, lathe, or any rotating machinery — the glove can catch and drag your hand into the machine. Bare hands only near rotating parts.'},
    {type:'⚡ STATIC', tool:'Grounding', icon:'⚡', color:'#eab308',
     body:'Before transferring flammable liquids, bond and ground the containers. Static electricity generated during pouring can ignite fuel vapours — causing explosion without any open flame.'},
  ];
  extras.forEach(e=>tips.push(e));
  return tips;
}

let allTips = [];
function initTipCard(){
  try{
    allTips = buildTips();
  }catch(e){ allTips=[]; }
  if(!allTips.length){
    // Retry once if library not ready yet
    setTimeout(()=>{
      try{ allTips=buildTips(); }catch(e){ allTips=[]; }
      if(allTips.length){ rotateTip(); const w=document.getElementById('tipCardWrap'); if(w)w.style.display='block'; }
    },500);
    return;
  }
  rotateTip();
  const w=document.getElementById('tipCardWrap');
  if(w)w.style.display='block';
  setInterval(rotateTip, 60000);
}

function rotateTip(){
  if(!allTips.length) return;
  let next = tipIdx;
  while(next === tipIdx) next = Math.floor(Math.random() * allTips.length);
  tipIdx = next;
  const tip = allTips[tipIdx];
  const tipIconEl=document.getElementById('tipIcon');
  if(tipIconEl){
    const iconMap={
      '⚠️':'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
      '💡':'<line x1="12" y1="2" x2="12" y2="6"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="2" y1="12" x2="6" y2="12"/><circle cx="12" cy="14" r="4"/><path d="M9 18h6"/>',
      '🛡️':'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
      '💨':'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>',
      '🔋':'<rect x="2" y="7" width="18" height="11" rx="2"/><path d="M22 11v4"/>',
      '🔐':'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
      '🦺':'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
      '📦':'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
      '🔍':'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
      '💧':'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
      '🧤':'<path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
      '⚡':'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
      '🌡️':'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>',
      '🔊':'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>'
    };
    const svgPath=iconMap[tip.icon]||'<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>';
    tipIconEl.innerHTML=\`<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="\${tip.color}" stroke-width="1.8">\${svgPath}</svg>\`;
  }
  document.getElementById('tipType').textContent  = tip.type;
  document.getElementById('tipTool').textContent  = tip.tool;
  document.getElementById('tipBody').textContent  = tip.body;
  document.getElementById('tipAccent').style.background = tip.color;
  document.getElementById('tipCard').style.borderColor = tip.color;
  document.getElementById('tipCard').style.borderWidth = '1.5px';
  // Animate
  const card = document.getElementById('tipCard');
  card.style.opacity='0';card.style.transform='translateY(4px)';
  setTimeout(()=>{card.style.transition='opacity .3s,transform .3s';card.style.opacity='1';card.style.transform='translateY(0)';},50);
}
// END TIP CARD


// ═══ LIVE CLOCK ═══
function updateClock(){
  const now=new Date();
  const hr=now.getHours();
  const min=String(now.getMinutes()).padStart(2,'0');
  const h12=hr%12||12;
  const ampm=hr<12?'AM':'PM';
  const el=document.getElementById('hdrTime');
  if(el) el.textContent=h12+':'+min+' '+ampm;
  const pill=document.getElementById('shiftPill');
  if(pill){
    const isDay=hr>=6&&hr<18;
    pill.textContent=isDay?'Day Shift':'Night Shift';
    pill.className='shift-pill '+(isDay?'day':'night');
  }
}
setInterval(updateClock,1000);

// ═══ MORNING BRIEFING STRIP ═══
function renderBriefing(){
  const el=document.getElementById('briefStrip');
  if(!el)return;
  const now=new Date();
  const odBorrows=getOverdueBorrows();
  const lowItems=items.filter(i=>isLow(i));
  const totalOut=items.reduce((s,i)=>s+totBor(i),0);
  const inspDue=items.filter(i=>i.nextInspection&&(new Date(i.nextInspection)-now)<7*86400000&&new Date(i.nextInspection)>=now);
  const inspOver=items.filter(i=>i.nextInspection&&new Date(i.nextInspection)<now);
  const totalVal=items.filter(i=>i.unitPrice>0).reduce((s,i)=>s+i.quantity*(i.unitPrice||0),0);
  const todayIssues=(typeof personnel!=='undefined'?personnel:[])
    .reduce((s,p)=>s+(p.issues||[]).filter(iss=>new Date(iss.timestamp).toDateString()===now.toDateString()).length,0);

  // SVG icon helper
  const bSvg=(path,vb='0 0 24 24')=>\`<svg width="20" height="20" fill="none" viewBox="\${vb}" stroke="currentColor" stroke-width="1.8">\${path}</svg>\`;
  const icoOverdue=bSvg('<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>');
  const icoOk=bSvg('<polyline points="20 6 9 17 4 12"/>');
  const icoBox=bSvg('<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>');
  const icoOut=bSvg('<path d="M5 12h14M12 5l7 7-7 7"/>');
  const icoInsp=bSvg('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>');
  const icoIssue=bSvg('<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/>');
  const icoVal=bSvg('<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>');
  const icoCount=bSvg('<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>');

  const cards=[];
  cards.push({cls:odBorrows.length?'alert':'good',
    ico:odBorrows.length?icoOverdue:icoOk,
    num:odBorrows.length||'None',
    lbl:odBorrows.length?'Overdue Borrows':'All Returns OK',
    fn:odBorrows.length?"openAllBorrows()":null});
  if(lowItems.length)
    cards.push({cls:'warn',ico:icoBox,num:lowItems.length,lbl:'Low Stock Items',fn:"openReorder()"});
  if(totalOut>0)
    cards.push({cls:'info',ico:icoOut,num:totalOut,lbl:'Borrowed Out',fn:"openAllBorrows()"});
  if(inspOver.length)
    cards.push({cls:'alert',ico:icoInsp,num:inspOver.length,lbl:'Inspections Overdue',fn:"openInsp()"});
  else if(inspDue.length)
    cards.push({cls:'warn',ico:icoInsp,num:inspDue.length,lbl:'Inspections Due Soon',fn:"openInsp()"});
  if(todayIssues>0)
    cards.push({cls:'info',ico:icoIssue,num:todayIssues,lbl:'Issued Today',fn:"openPersonnelMgr()"});
  if(totalVal>0)
    cards.push({cls:'good',ico:icoVal,num:'P'+fmt(totalVal),lbl:'Inventory Value',fn:"switchView('dash')"});
  cards.push({cls:'',ico:icoCount,num:items.length,lbl:'Total Items',fn:null});

  el.innerHTML=cards.map(card=>\`
    <div class="brief-card\${card.cls?' '+card.cls:''}" \${card.fn?\`onclick="\${card.fn}"\`:''}
      style="\${!card.cls?'border-color:var(--bd)':''}">
      <div class="brief-ico">\${card.ico}</div>
      <div class="brief-num">\${card.num}</div>
      <div class="brief-lbl">\${card.lbl}</div>
    </div>\`).join('');
}

// ═══ ACTIVITY FEED ═══
let feedVisible=true;
function renderActivityFeed(){
  const el=document.getElementById('feedList');
  const wrap=document.getElementById('feedWrap');
  if(!el||!wrap)return;
  const today=new Date().toDateString();
  const events=[];

  // From stock logs
  items.forEach(it=>{
    (it.stockLog||[]).forEach(e=>{
      if(new Date(e.timestamp).toDateString()===today){
        events.push({
          ts:e.timestamp,
          color:e.type==='restock'?'#22c55e':'#f97316',
          text:e.type==='restock'
            ?\`<b>\${it.name}</b> restocked +\${e.delta} \${it.unit}\`
            :e.issuedTo
              ?\`<b>\${e.delta} \${it.unit}</b> of <b>\${it.name}</b> issued to \${e.issuedTo}\`
              :\`<b>\${it.name}</b> used −\${e.delta} \${it.unit}\`
        });
      }
    });
    // From borrow history
    (it.history||[]).forEach(h=>{
      if(new Date(h.timestamp).toDateString()===today){
        if(h.type==='borrowed')
          events.push({ts:h.timestamp,color:'#3b82f6',text:\`<b>\${h.borrower}</b> borrowed \${h.quantity} \${it.unit} of <b>\${it.name}</b>\`});
        else if(h.type==='returned')
          events.push({ts:h.timestamp,color:'#22c55e',text:\`<b>\${h.borrower}</b> returned \${h.quantity} \${it.unit} of <b>\${it.name}</b>\`});
      }
    });
  });

  events.sort((a,b)=>new Date(b.ts)-new Date(a.ts));
  const recent=events.slice(0,8);

  if(!recent.length){wrap.style.display='none';return;}
  wrap.style.display='block';
  el.style.display=feedVisible?'flex':'none';
  document.getElementById('feedToggleBtn').textContent=feedVisible?'Hide':'Show';

  el.innerHTML=recent.map(e=>{
    const time=new Date(e.ts).toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit'});
    return\`<div class="feed-item">
      <div style="width:8px;height:8px;border-radius:50%;background:\${e.color};flex-shrink:0"></div>
      <div class="feed-text">\${e.text}</div>
      <div class="feed-time">\${time}</div>
    </div>\`;
  }).join('');
}

function toggleFeed(){
  feedVisible=!feedVisible;
  const el=document.getElementById('feedList');
  const btn=document.getElementById('feedToggleBtn');
  if(el){el.style.display=feedVisible?'flex':'none';}
  if(btn)btn.textContent=feedVisible?'Hide':'Show';
}

// ═══ CATEGORY GROUP COLLAPSE ═══
function toggleCatGroup(catId){
  let collapsed=JSON.parse(localStorage.getItem('ws_cat_collapsed')||'[]');
  const idx=collapsed.indexOf(catId);
  if(idx>=0)collapsed.splice(idx,1);else collapsed.push(catId);
  localStorage.setItem('ws_cat_collapsed',JSON.stringify(collapsed));
  const items_el=document.getElementById('items-'+catId);
  const arr_el=document.getElementById('arr-'+catId);
  if(items_el){items_el.style.display=idx>=0?'':'none';}
  if(arr_el){arr_el.classList.toggle('open',idx>=0);}
}

// ═══ SWIPE ACTIONS ═══
let swipeState={};
function swipeStart(e,id){
  const t=e.touches[0];
  swipeState[id]={startX:t.clientX,startY:t.clientY,moved:false,dir:null};
}
function swipeMove(e,id){
  const s=swipeState[id];if(!s)return;
  const t=e.touches[0];
  const dx=t.clientX-s.startX;
  const dy=Math.abs(t.clientY-s.startY);
  if(!s.dir){
    if(Math.abs(dx)<5&&dy<5)return;
    s.dir=Math.abs(dx)>dy?'h':'v';
  }
  if(s.dir!=='h')return;
  e.preventDefault();
  s.moved=true;
  const card=document.getElementById('c-'+id);
  if(!card)return;
  const clamped=Math.max(-90,Math.min(90,dx));
  card.style.transform=\`translateX(\${clamped}px)\`;
  card.style.transition='none';
  // Show reveal hints
  const revL=document.querySelector(\`#sw-\${id} .swipe-reveal.left\`);
  const revR=document.querySelector(\`#sw-\${id} .swipe-reveal.right\`);
  if(revL)revL.style.opacity=dx>20?Math.min(1,(dx-20)/50):0;
  if(revR)revR.style.opacity=dx<-20?Math.min(1,(-dx-20)/50):0;
}
function swipeEnd(e,id){
  const s=swipeState[id];if(!s||!s.moved){delete swipeState[id];return;}
  const card=document.getElementById('c-'+id);
  if(!card){delete swipeState[id];return;}
  const dx=parseFloat(card.style.transform.replace('translateX(','').replace('px)','')||0);
  card.style.transition='';
  card.style.transform='translateX(0)';
  const revL=document.querySelector(\`#sw-\${id} .swipe-reveal.left\`);
  const revR=document.querySelector(\`#sw-\${id} .swipe-reveal.right\`);
  if(revL)revL.style.opacity=0;
  if(revR)revR.style.opacity=0;
  delete swipeState[id];
  if(dx>60){openBorrow(id);toast('📋 Opening borrow form…');}
  else if(dx<-60){openIssue(id);toast('📦 Opening issue form…');}
}
function attachSwipeListeners(){}// listeners are inline ontouchstart

// Patch render() to also refresh briefing and feed
const _origRenderForUI=render;
window.render=function(){
  _origRenderForUI();
  renderBriefing();
  renderActivityFeed();
};
// END UI OVERHAUL


// ═══ CLEAR DATA FUNCTIONS ═══
function confirmClearBorrows(){
  // 1. Close modal first
  document.getElementById('clearBorOv').classList.remove('on');
  // 2. Do work
  try{
    items.forEach(it=>{
      (it.borrows||[]).forEach(b=>{
        if(!it.history)it.history=[];
        it.history.unshift({type:'returned',borrower:b.borrower,project:b.project,
          quantity:b.quantity,unit:it.unit,timestamp:new Date().toISOString(),
          note:'Auto-cleared',borrowId:b.id});
      });
      it.borrows=[];
    });
    saveItems();
  }catch(e){console.error('clearBorrows',e);}
  // 3. Refresh UI after a tick so modal close animation plays
  setTimeout(()=>{
    try{render();}catch(e){}
    try{closeAllBorrows();}catch(e){}
    toast('All borrows cleared');
  },80);
}

function confirmClearDash(){
  const clearLog  = !!(document.getElementById('clearStockLog')?.checked);
  const clearBH   = !!(document.getElementById('clearBorHist')?.checked);
  const clearIssue= !!(document.getElementById('clearIssueHist')?.checked);
  // 1. Close modal first
  document.getElementById('clearDashOv').classList.remove('on');
  if(!clearLog&&!clearBH&&!clearIssue){toast('Nothing selected');return;}
  const msgs=[];
  // 2. Do work
  try{
    if(clearLog){
      items.forEach(it=>{it.stockLog=[];});
      msgs.push('stock logs');
    }
    if(clearBH){
      items.forEach(it=>{
        it.history=(it.history||[]).filter(h=>h.type==='borrowed'||h.type==='issued');
      });
      msgs.push('borrow history');
    }
    if(clearLog||clearBH) saveItems();
    if(clearIssue&&typeof personnel!=='undefined'&&personnel.length){
      personnel.forEach(p=>{p.issues=[];});
      savePersonnel();
      msgs.push('issuance records');
    }
  }catch(e){console.error('clearDash',e);toast('Error: '+e.message);return;}
  // 3. Refresh UI after tick
  setTimeout(()=>{
    try{render();}catch(e){}
    try{if(curView==='dash')renderDashboard();}catch(e){}
    toast('Cleared: '+msgs.join(', '));
  },80);
}
// END CLEAR FUNCTIONS

// INIT
loadTheme();load();loadPersonnel();initAuth();render();initTipCard();
</script>
</body>
</html>`;
export default warestockHTML;
