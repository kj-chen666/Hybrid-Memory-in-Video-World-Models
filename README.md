# Paper GitHub Homepage (Template)

一个简洁的论文项目主页模板（适合 GitHub Pages），包含：
- 论文标题、作者
- GitHub / arXiv / Dataset 链接按钮
- Intro / Method / Demo 三个部分（每部分至少一个 video）
- BibTeX（带一键复制）

## 使用方式

1) 把 `paper-github-page/` 里的文件复制到你的论文代码仓库根目录（或直接把这个文件夹内容移到仓库根目录）。

2) 按需替换占位内容：
- `index.html`：标题、作者、按钮链接、文案、BibTeX
- `assets/`：替换图片、视频文件（或把 `<video>` 改成 YouTube/哔哩哔哩 iframe）

3) GitHub Pages 发布
- 进入 GitHub 仓库 Settings → Pages
- Source 选择 `Deploy from a branch`
- Branch 选择 `main` / `(root)`（或 `docs/`，看你放在哪里）

## 本地预览

macOS:
```bash
cd paper-github-page
python3 -m http.server 8000
```
然后打开 `http://localhost:8000`。

