# Gemini 3.1 Pro — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemini-3.1-pro-preview`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's flagship natively-multimodal reasoning model, sitting between Gemini 3 Flash and the research-focused Gemini 3 Deep Think; the first Google 0.1 increment, roughly doubling reasoning performance over Gemini 3 Pro at the same price.
- **Provider / access:** Gemini API (`gemini-3.1-pro-preview`), Google AI Studio (free rate-limited), Vertex AI, Gemini CLI, GitHub Copilot, VS Code, Google Antigravity.
- **Release / knowledge:** Released 2026-02-19 (Preview from 2026-02-11); knowledge cutoff not published. Preview status at time of research.
- **IDs:** `google/gemini-3.1-pro-preview` (free rate-limited tier in AI Studio; paid API otherwise).
- **Context window:** 1,000,000 tokens input (largest production window among frontier models); 64,000 tokens max output.
- **Modalities:** natively multimodal — text + image (+ audio/video per Gemini line) in, text out; reasoning yes (configurable Low/Medium/High thinking levels); tool calls yes; notable animated-SVG generation.
- **Pricing (as of 2026-10-20):** $2.00 / 1M input and $12.00 / 1M output up to 200K context; $4.00 / $18.00 over 200K; context-cache hit $0.50 input. ~7.5x cheaper than Claude Opus 4.6 on input.
- **Architecture:** proprietary (closed weights); more token-efficient reasoning than Gemini 3 Pro.

### Raw benchmarks found

Agent / tool use:

- APEX-Agents: **33.5%** (leads Claude Opus 4.6 29.8%, GPT-5.2 23.0%)
- Terminal-Bench 2.0: **68.5%** (behind GPT-5.3-Codex 77.3%)
- GDPval-AA (expert task preference): **1317 Elo** (behind Claude Opus 4.6 1606)
- Tau-Bench / Toolathon: no verified public score found

Reasoning / knowledge:

- ARC-AGI-2: **77.1%** (dominant — up from Gemini 3 Pro's 31.1%; Claude Opus 4.6 37.6%, GPT-5.2 54.2%)
- GPQA Diamond: **94.3%** (leads Opus 4.6 91.3%, GPT-5.2 92.4%)
- Humanity's Last Exam: **44.4%** no tools / **51.4%** with tools (Opus 4.6 41.2% / 53.1% — Opus edges it with tools)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- SWE-bench Verified: **80.6%** (top-tier — beats Opus 4.6 72.6%, GPT-5.3-Codex 76.2%)
- LiveCodeBench Pro: **2887 Elo**
- SWE-bench Pro (Public): **54.2%** (behind GPT-5.3-Codex 56.8%)
- Terminal-Bench 2.0: **68.5%** (see tool use)

Multimodal:

- MMMU-Pro: **75.8%**

Long context:

- Long-Context MRCR v2 (128k): **84.9%** (ties Claude Opus 4.6 within the shared range).

### Normalized scores (1–100)

- **Tool use: 88/100.** Leads APEX-Agents 33.5% and is competitive on agentic work; capped by Terminal-Bench 2.0 68.5% trailing GPT-5.3-Codex's 77.3% and GDPval-AA expert preference behind Opus 4.6.
- **Reasoning: 95/100.** ARC-AGI-2 77.1% (more than double any prior Gemini) and GPQA Diamond 94.3% (best in table) are exceptional; a touch below 100 as HLE-with-tools still trails Opus 4.6.
- **Context window: 97/100.** Largest production window at 1M input tokens with MRCR v2 84.9% at 128k; held just short by the 64K output cap.
- **Multimodal: 90/100.** MMMU-Pro 75.8% and native text/image/audio/video input with strong SVG generation; capped as it is a single vision benchmark (no video/audio-specific score reported).
- **Coding: 91/100.** SWE-bench Verified 80.6% (leads the compared set) and LiveCodeBench Pro 2887 Elo; held below the ceiling by Terminal-Bench 2.0 and SWE-bench Pro trailing GPT-5.3-Codex.
- **Cost efficiency: 95/100.** $2/$12 with a free rate-limited AI Studio tier, up to 75% context-cache savings, and 7.5x cheaper input than Opus 4.6 — best price-performance in the frontier class; not 100 because >200K context doubles the rate.
- **Overall Score: 92/100.** Mean of Tool 88 + Reasoning 95 + Context 97 + Multimodal 90 + Coding 91 = 92.2 → 92. Best fit: budget-friendly frontier reasoning, long-context (>200K) document/codebase analysis and production SWE-bench-class coding where value-per-dollar matters most.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (NxCode's Gemini 3.1 Pro complete guide compiling Google's launch benchmarks; llm-stats.com and DeepMind model card for specs/pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
