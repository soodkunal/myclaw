import os

replacements = {
    'fr': {
        '## Workflow': '## Flux de travail',
        '## Responsibilities': '## Responsabilités',
        '## Git Rules': '## Règles Git',
        '## General Code Style': '## Style de Code Général',
        '## Python Rules': '## Règles Python',
        '## TypeScript Rules': '## Règles TypeScript',
        '## Step 1': '## Étape 1',
        '## Step 2': '## Étape 2',
        '## Step 3': '## Étape 3',
        '**Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile]': '**Coup de Pub :** Vous aimez ? Veuillez contribuer au dépôt MyClaw et visiter mon [Profil GitHub]'
    },
    'de': {
        '## Workflow': '## Arbeitsablauf',
        '## Responsibilities': '## Verantwortlichkeiten',
        '## Git Rules': '## Git-Regeln',
        '## General Code Style': '## Allgemeiner Code-Stil',
        '## Python Rules': '## Python-Regeln',
        '## TypeScript Rules': '## TypeScript-Regeln',
        '## Step 1': '## Schritt 1',
        '## Step 2': '## Schritt 2',
        '## Step 3': '## Schritt 3',
        '**Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile]': '**Eigenwerbung:** Gefällt Ihnen das? Bitte tragen Sie zum MyClaw-Repository bei und besuchen Sie mein [GitHub-Profil]'
    },
    'nl': {
        '## Workflow': '## Werkstroom',
        '## Responsibilities': '## Verantwoordelijkheden',
        '## Git Rules': '## Git Regels',
        '## General Code Style': '## Algemene Code Stijl',
        '## Python Rules': '## Python Regels',
        '## TypeScript Rules': '## TypeScript Regels',
        '## Step 1': '## Stap 1',
        '## Step 2': '## Stap 2',
        '## Step 3': '## Stap 3',
        '**Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile]': '**Schaamteloze Promotie:** Geniet je hiervan? Draag bij aan de MyClaw repository en bezoek mijn [GitHub Profiel]'
    },
    'es': {
        '## Workflow': '## Flujo de trabajo',
        '## Responsibilities': '## Responsabilidades',
        '## Git Rules': '## Reglas de Git',
        '## General Code Style': '## Estilo de Código General',
        '## Python Rules': '## Reglas de Python',
        '## TypeScript Rules': '## Reglas de TypeScript',
        '## Step 1': '## Paso 1',
        '## Step 2': '## Paso 2',
        '## Step 3': '## Paso 3',
        '**Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile]': '**Promoción Descarada:** ¿Te gusta esto? ¡Por favor contribuye al repositorio de MyClaw y visita mi [Perfil de GitHub]'
    }
}

website_replacements = {
    'fr': {
        'Build Fast.<br />Break Nothing.': 'Construisez Vite.<br />Ne Cassez Rien.',
        'The Ecosystem': "L'Écosystème",
        'Why MyClaw?': 'Pourquoi MyClaw ?',
        'Read Docs': 'Lire la Doc',
        'Install CLI': 'Installer le CLI'
    },
    'de': {
        'Build Fast.<br />Break Nothing.': 'Schnell bauen.<br />Nichts kaputt machen.',
        'The Ecosystem': 'Das Ökosystem',
        'Why MyClaw?': 'Warum MyClaw?',
        'Read Docs': 'Doku lesen',
        'Install CLI': 'CLI installieren'
    },
    'nl': {
        'Build Fast.<br />Break Nothing.': 'Snel bouwen.<br />Niets breken.',
        'The Ecosystem': 'Het Ecosysteem',
        'Why MyClaw?': 'Waarom MyClaw?',
        'Read Docs': 'Lees Docs',
        'Install CLI': 'Installeer CLI'
    },
    'es': {
        'Build Fast.<br />Break Nothing.': 'Construye Rápido.<br />No Rompas Nada.',
        'The Ecosystem': 'El Ecosistema',
        'Why MyClaw?': '¿Por qué MyClaw?',
        'Read Docs': 'Leer Docs',
        'Install CLI': 'Instalar CLI'
    }
}

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
target_dirs = ['skills', 'agents', 'rules', 'workflows']
languages = ['fr', 'de', 'nl', 'es']

# Translate Markdown files
print("Translating markdown documentation...")
for t_dir in target_dirs:
    full_t_dir = os.path.join(base_dir, t_dir)
    if not os.path.exists(full_t_dir):
        continue
    for root, dirs, files in os.walk(full_t_dir):
        for file in files:
            if file.endswith('.md'):
                original_path = os.path.join(root, file)
                with open(original_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Rel path from base_dir to recreate structure
                rel_path = os.path.relpath(root, base_dir)
                
                for lang in languages:
                    lang_content = content
                    for eng, translated in replacements[lang].items():
                        lang_content = lang_content.replace(eng, translated)
                    
                    dest_dir = os.path.join(base_dir, lang, rel_path)
                    os.makedirs(dest_dir, exist_ok=True)
                    
                    dest_path = os.path.join(dest_dir, file)
                    with open(dest_path, 'w', encoding='utf-8') as f:
                        f.write(lang_content)

# Translate Website page.tsx
print("Translating website UI...")
page_path = os.path.join(base_dir, 'website', 'src', 'app', 'page.tsx')
if os.path.exists(page_path):
    with open(page_path, 'r', encoding='utf-8') as f:
        page_content = f.read()

    for lang in languages:
        lang_content = page_content
        for eng, translated in website_replacements[lang].items():
            lang_content = lang_content.replace(eng, translated)
            
        # Needs relative imports fixed
        lang_content = lang_content.replace('@/components', '@/components') # Next.js alias still works from subfolders usually, but we need to ensure paths are correct. `@/` always resolves to `src/`!
        
        dest_dir = os.path.join(base_dir, 'website', 'src', 'app', lang)
        os.makedirs(dest_dir, exist_ok=True)
        
        dest_path = os.path.join(dest_dir, 'page.tsx')
        with open(dest_path, 'w', encoding='utf-8') as f:
            f.write(lang_content)

print("Translations complete!")
