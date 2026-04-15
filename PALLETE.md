import os

# Conteúdo do arquivo Markdown
md_content = """# Paleta de Cores: Astronauta Botânico 👨‍🚀🌸

Esta paleta foi extraída com base na estética visual do vídeo, focando no contraste entre o traje espacial tecnológico e a vivacidade das flores.

## 🎨 Cores Principais

| Elemento | Nome da Cor | Hex | Uso Recomendado |
| :--- | :--- | :--- | :--- |
| **Flores (Destaque)** | Rosa Hibisco | `#E91E63` | **Botões Principais (CTA), Links e Estados Ativos** |
| **Sombras das Flores** | Púrpura Profundo | `#880E4F` | Hover de botões, ícones de alerta e bordas |
| **Traje (Neutro)** | Branco Acinzentado | `#ECEFF1` | Planos de fundo, cards e superfícies |
| **Visor/Espaço** | Preto Profundo | `#101214` | Textos, cabeçalhos e navegação |
| **Folhagem** | Verde Musgo | `#2E7D32` | Detalhes de sucesso, badges ou acentos |

---

## 💻 Exemplo de Implementação (CSS)

```css
:root {
  /* Cor principal baseada nas flores */
  --primary-color: #E91E63;
  --primary-dark: #880E4F;
  
  /* Cores de suporte */
  --bg-surface: #ECEFF1;
  --text-main: #101214;
  --accent-green: #2E7D32;
}

button.primary {
  background-color: var(--primary-color);
  color: white;
  border-radius: 8px;
  padding: 10px 20px;
  transition: background 0.3s ease;
}

button.primary:hover {
  background-color: var(--primary-dark);
}