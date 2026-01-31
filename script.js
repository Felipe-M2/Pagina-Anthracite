// --- DICIONÁRIO DE TRADUÇÃO ---
const translations = {
    "pt": {
        nav_modules: "Módulos", nav_interface: "Interface", nav_architect: "Architect", nav_compliance: "Compliance", nav_deploy: "Deploy System",
        hero_status: "SYSTEM OPERATIONAL // SECURE", hero_title_1: "HUB UNIFICADO DE", hero_title_2: "DESENVOLVIMENTO & SEC",
        hero_desc: "Abandone ferramentas fragmentadas. Gerencie projetos, automatize infraestrutura e monitore vulnerabilidades em um ambiente 100% local e criptografado.",
        btn_install: "Instalar Core v1.0", btn_demo: "Ver Demo",
        stat_enc: "CRIPTOGRAFIA AES (BITS)", stat_cloud: "LATÊNCIA DE NUVEM", stat_local: "% CONTROLE LOCAL",
        mod_tag: "MÓDULOS CENTRAIS", mod_title: "Controle Total da Stack",
        card_auto_title: "Automação de Projetos", card_auto_desc: "Scaffolding instantâneo. O sistema configura pastas, git e IDE automaticamente.",
        card_vuln_title: "Vuln Scanner", card_vuln_desc: "SAST em tempo real. Bloqueie commits inseguros antes que eles aconteçam.",
        card_kanban_title: "Kanban & Flow", card_kanban_desc: "Gestão visual de tarefas integrada ao código e commits.",
        card_infra_title: "Infraestrutura & Ativos", card_infra_desc: "Monitoramento de latência, uptime e saúde de servidores.",
        card_vault_title: "Vault Seguro", card_vault_desc: "Credenciais criptografadas localmente. Nada de texto plano.",
        card_time_title: "Smart Tracking", card_time_desc: "Alocação de horas inteligente e relatórios de produtividade.",
        ui_tag: "UI / UX", ui_title_1: "Interface de", ui_title_2: "Alta Precisão",
        menu_dash: "Dashboard", menu_dash_desc: "Visão Geral", menu_proj: "Projetos", menu_proj_desc: "Gestão",
        menu_det: "Detalhes", menu_det_desc: "Metadados", menu_infra: "Ativos", menu_infra_desc: "Monitor",
        menu_vault: "Cofre", menu_vault_desc: "Segurança", menu_study: "Estudos", menu_study_desc: "Plano",
        menu_cal: "Agenda", menu_cal_desc: "Compromissos", menu_notes: "Notas", menu_notes_desc: "Rápido",
        menu_clock: "Ponto", menu_clock_desc: "Horas", menu_goals: "Metas", menu_goals_desc: "Objetivos",
        role_tag: "LEAD ARCHITECT", profile_desc: "Desenvolvedor Full Stack & Especialista em Segurança. Criador do ecossistema Anthracite com foco em performance e privacidade.",
        deploy_title: "Deploy Environment", deploy_sub: "Stable Release v1.0.0", file_name: "Instalador_Anthracite.exe",
        btn_download: "INICIAR DOWNLOAD", sec_check: "Assinado Digitalmente & Verificado",
        comp_tag: "LEGAL", comp_title: "Protocolos de Dados",
        comp_1_title: "Local-First Architecture", comp_1_desc: "100% dos dados residem no seu dispositivo. Sem nuvem, sem telemetria oculta.",
        comp_2_title: "LGPD & GDPR Compliant", comp_2_desc: "Você é o único controlador e operador dos seus dados. Conformidade total por design.",
        comp_3_title: "Licença de Uso", comp_3_desc: "Software fornecido 'como está' para uso pessoal e profissional intransferível."
    },
    "en": {
        nav_modules: "Modules", nav_interface: "Interface", nav_architect: "Architect", nav_compliance: "Compliance", nav_deploy: "Deploy System",
        hero_status: "SYSTEM OPERATIONAL // SECURE", hero_title_1: "UNIFIED HUB FOR", hero_title_2: "DEVELOPMENT & SEC",
        hero_desc: "Ditch fragmented tools. Manage projects, automate infrastructure, and monitor vulnerabilities in a 100% local, encrypted environment.",
        btn_install: "Install Core v1.0", btn_demo: "Watch Demo",
        stat_enc: "AES ENCRYPTION BITS", stat_cloud: "CLOUD LATENCY", stat_local: "% LOCAL CONTROL",
        mod_tag: "CORE MODULES", mod_title: "Total Stack Control",
        card_auto_title: "Project Automation", card_auto_desc: "Instant scaffolding. The system configures folders, git, and IDE automatically.",
        card_vuln_title: "Vuln Scanner", card_vuln_desc: "Real-time SAST. Block insecure commits before they happen.",
        card_kanban_title: "Kanban & Flow", card_kanban_desc: "Visual task management integrated with code and commits.",
        card_infra_title: "Infrastructure & Assets", card_infra_desc: "Latency, uptime, and server health monitoring.",
        card_vault_title: "Secure Vault", card_vault_desc: "Locally encrypted credentials. No plain text.",
        card_time_title: "Smart Tracking", card_time_desc: "Intelligent hour allocation and productivity reports.",
        ui_tag: "UI / UX", ui_title_1: "High Precision", ui_title_2: "Interface",
        menu_dash: "Dashboard", menu_dash_desc: "Overview", menu_proj: "Projects", menu_proj_desc: "Repo Mgmt",
        menu_det: "Details", menu_det_desc: "Metadata", menu_infra: "Assets", menu_infra_desc: "Monitoring",
        menu_vault: "Vault", menu_vault_desc: "Secure Vault", menu_study: "Studies", menu_study_desc: "Personal Plan",
        menu_cal: "Calendar", menu_cal_desc: "Schedule", menu_notes: "Notes", menu_notes_desc: "Quick Notes",
        menu_clock: "Time", menu_clock_desc: "Hour Control", menu_goals: "Goals", menu_goals_desc: "Objectives",
        role_tag: "LEAD ARCHITECT", profile_desc: "Full Stack Developer & Security Specialist. Creator of the Anthracite ecosystem focused on performance and privacy.",
        deploy_title: "Deploy Environment", deploy_sub: "Stable Release v1.0.0", file_name: "Anthracite_Installer.exe",
        btn_download: "START DOWNLOAD", sec_check: "Digitally Signed & Verified",
        comp_tag: "LEGAL", comp_title: "Data Protocols",
        comp_1_title: "Local-First Architecture", comp_1_desc: "100% of data resides on your device. No cloud, no hidden telemetry.",
        comp_2_title: "LGPD & GDPR Compliant", comp_2_desc: "You are the sole controller and operator of your data. Total compliance by design.",
        comp_3_title: "Usage License", comp_3_desc: "Software provided 'as is' for personal and professional use."
    }
};

// --- INIT SYSTEM ---
document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initLenis();
    initPreloader();
    initThreeJS();
    initGSAPAnimations();
    initInterfaceTabs();
    initCursor();
    initTilt();
    initMobileMenu();
});

// 1. LANGUAGE
function initLanguage() {
    const langBtn = document.getElementById('lang-toggle');
    const langSpan = document.querySelector('.current-lang');
    let currentLang = localStorage.getItem('anthracite_lang') || (navigator.language.startsWith('en') ? 'en' : 'pt');

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.style.opacity = '0';
                setTimeout(() => {
                    el.innerHTML = translations[lang][key];
                    el.style.opacity = '1';
                }, 200);
            }
        });
        if(langSpan) langSpan.innerText = lang === 'pt' ? 'BR' : 'EN';
        localStorage.setItem('anthracite_lang', lang);
        currentLang = lang;
    };

    setLanguage(currentLang);

    if(langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'pt' ? 'en' : 'pt';
            setLanguage(newLang);
        });
    }
}

// 2. PRELOADER BLINDADO
function initPreloader() {
    const tl = gsap.timeline();
    let progress = { val: 0 };
    
    tl.to(progress, {
        val: 100, duration: 1.5, ease: "power2.inOut",
        onUpdate: () => {
            const percentEl = document.querySelector('.loader-percent');
            const fillEl = document.querySelector('.loader-fill');
            if(percentEl) percentEl.innerText = Math.round(progress.val) + "%";
            if(fillEl) fillEl.style.width = progress.val + "%";
        }
    })
    .to('.preloader', { y: "-100%", duration: 0.8, ease: "power4.inOut", delay: 0.1 })
    .from('.hero-title', { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.4")
    .add(() => { document.body.classList.remove('loading'); });
    
    setTimeout(() => {
        if(document.body.classList.contains('loading')) {
            const pre = document.querySelector('.preloader');
            if(pre) pre.style.display = 'none';
            document.body.classList.remove('loading');
        }
    }, 3000);
}

// 3. LENIS
function initLenis() {
    if(typeof Lenis === 'undefined') return;
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
}

// 4. GSAP ANIMATIONS
function initGSAPAnimations() {
    if(typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('.fade-up, .bento-card, .progress-fill, .fade-right, .fade-left', { opacity: 0 }); // Hide initially via JS

    // Fade Up
    ScrollTrigger.batch('.fade-up', {
        start: "top 85%",
        onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" })
    });

    // Cards
    ScrollTrigger.batch('.bento-card', {
        start: "top 80%",
        onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" })
    });

    // Sides
    ScrollTrigger.batch('.fade-right', { start: "top 80%", onEnter: batch => gsap.fromTo(batch, {x: -30, opacity: 0}, {x: 0, opacity: 1, duration: 0.8}) });
    ScrollTrigger.batch('.fade-left', { start: "top 80%", onEnter: batch => gsap.fromTo(batch, {x: 30, opacity: 0}, {x: 0, opacity: 1, duration: 0.8}) });

    // Bars
    gsap.utils.toArray('.progress-fill').forEach(bar => {
        gsap.fromTo(bar, { width: "0%", opacity: 1 }, { scrollTrigger: { trigger: ".skill-bars", start: "top 80%" }, width: bar.style.width, duration: 1.5, ease: "power2.out" });
    });

    // Counters
    document.querySelectorAll('.counter').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        ScrollTrigger.create({
            trigger: counter, start: "top 85%", once: true,
            onEnter: () => gsap.to(counter, { innerText: target, duration: 2, snap: { innerText: 1 }, ease: "power2.out" })
        });
    });
}

// 5. INTERFACE TABS
const screens = {
    'dashboard': 'images/tela_pagina_inicial.png',
    'projetos': 'images/pagina_projeto_info_1.png',
    'projetos_detalhe': 'images/pagina_projeto_info_2.png',
    'ativos': 'images/pagina_ativos.png',
    'cofre': 'images/cofre_de_senha.png',
    'agenda': 'images/pagina_agenda.png',
    'metas': 'images/pagina_metas.png',
    'estudos': 'images/plano_estudos.png',
    'notas': 'images/pagina_notas.png',
    'ponto': 'images/pagina_folha_ponto.png'
};

function initInterfaceTabs() {
    const btns = document.querySelectorAll('.menu-btn');
    const img = document.getElementById('screen-preview');
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const key = btn.getAttribute('data-screen');
            if(screens[key] && img) {
                gsap.to(img, { opacity: 0, duration: 0.15, onComplete: () => {
                    img.src = screens[key];
                    gsap.to(img, { opacity: 1, duration: 0.15 });
                }});
            }
        });
    });
}

// 6. CURSOR & MAGNETIC
function initCursor() {
    if (window.innerWidth < 768) return; 
    const dot = document.querySelector('.cursor-dot');
    const circle = document.querySelector('.cursor-circle');
    
    if(dot && circle) {
        window.addEventListener('mousemove', (e) => {
            gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0 });
            gsap.to(circle, { x: e.clientX, y: e.clientY, duration: 0.1 });
        });
        document.querySelectorAll('.magnetic').forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const r = el.getBoundingClientRect();
                gsap.to(el, { x: (e.clientX - r.left - r.width/2)*0.3, y: (e.clientY - r.top - r.height/2)*0.3, duration: 0.3 });
                document.body.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(el, { x: 0, y: 0, duration: 0.3 });
                document.body.classList.remove('hovering');
            });
        });
    }
}

// 7. TILT 3D
function initTilt() {
    document.querySelectorAll('.hover-tilt, .hover-tilt-strong').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            const x = e.clientX - r.left; const y = e.clientY - r.top;
            const dx = (x - r.width/2) / (r.width/2);
            const dy = (y - r.height/2) / (r.height/2);
            const force = card.classList.contains('hover-tilt-strong') ? 10 : 5;
            gsap.to(card, { transform: `perspective(1000px) rotateY(${dx * force}deg) rotateX(${-dy * force}deg) scale(1.02)`, duration: 0.1 });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { transform: `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`, duration: 0.5, ease: "elastic.out(1, 0.5)" });
        });
    });
}

// 8. THREE.JS
function initThreeJS() {
    const container = document.getElementById('webgl-canvas');
    if(!container || typeof THREE === 'undefined') return;
    
    const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0x030303, 0.002);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: window.innerWidth > 768 });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const count = window.innerWidth < 768 ? 40 : 100;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const spd = [];
    for(let i=0; i<count*3; i+=3) {
        pos[i] = (Math.random()-0.5)*20; pos[i+1] = (Math.random()-0.5)*20; pos[i+2] = (Math.random()-0.5)*20;
        spd.push({x: (Math.random()-0.5)*0.01, y: (Math.random()-0.5)*0.01});
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0x6366f1, size: 0.05, transparent: true, opacity: 0.6 });
    const pts = new THREE.Points(geo, mat);
    scene.add(pts);

    const lineMat = new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.08 });
    const lineGeo = new THREE.BufferGeometry();
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        const p = geo.attributes.position.array;
        for(let i=0; i<count; i++) {
            const ix = i*3;
            p[ix] += spd[i].x; p[ix+1] += spd[i].y;
            if(p[ix]>10 || p[ix]<-10) spd[i].x *= -1;
            if(p[ix+1]>10 || p[ix+1]<-10) spd[i].y *= -1;
        }
        geo.attributes.position.needsUpdate = true;
        
        const ln = [];
        for(let i=0; i<count; i++) {
            for(let j=i+1; j<count; j++) {
                const dx=p[i*3]-p[j*3]; const dy=p[i*3+1]-p[j*3+1]; const dz=p[i*3+2]-p[j*3+2];
                if(Math.sqrt(dx*dx+dy*dy+dz*dz) < 3) {
                    ln.push(p[i*3],p[i*3+1],p[i*3+2], p[j*3],p[j*3+1],p[j*3+2]);
                }
            }
        }
        lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(ln, 3));
        scene.rotation.y += 0.001;
        renderer.render(scene, camera);
    }
    animate();
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function initMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const overlay = document.querySelector('.mobile-menu-overlay');
    if(toggle && overlay) {
        toggle.addEventListener('click', () => toggleMenu());
    }
}

function toggleMenu() {
    const overlay = document.querySelector('.mobile-menu-overlay');
    overlay.classList.toggle('active');
}

// Icons
lucide.createIcons();