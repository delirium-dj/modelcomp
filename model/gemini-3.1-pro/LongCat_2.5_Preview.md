# Gemini 3.1 Pro — findings by LongCat 2.5 Preview

- Source: Google DeepMind (`gemini-3.1-pro-preview`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Preview)
- **Short description:** Google DeepMind's flagship Pro model of the Gemini 3 generation — natively multimodal reasoning over text, audio, images, video, PDFs and whole code repositories, with a large jump in abstract reasoning over Gemini 3 Pro.
- **Provider / access:** Google Gemini API / Vertex AI — `gemini-3.1-pro-preview` (+ `gemini-3.1-pro-preview-customtools` agentic variant, same pricing). Chat Completions-style generateContent API. Public preview since 2026-02-19.
- **Release / knowledge:** Released 2026-02-19; knowledge cutoff January 2025 (per Gemini 3 developer guide).
- **IDs:** `google/gemini-3.1-pro-preview` (Vertex), `gemini-3.1-pro-preview` (Gemini API / AI Studio). No Zen Free ID — paid only.
- **Context window:** 1,048,576 tokens input; 65,536 max output (verified via Google AI docs + Vertex guide).
- **Modalities:** Text, image, audio (up to 8.4 h/prompt), video (up to 1 h), PDF in; text out; reasoning yes (minimal/default/high thinking levels); tool calls, structured outputs, code execution, computer use, caching, search grounding.
- **Pricing (as of 2026-09-27):** $2.00/M in, $12.00/M out (prompts <200K); $4.00/$18.00 (>200K); cache read $0.20/M. Paid only — no free tier.
- **Architecture:** Proprietary; based on Gemini 3 Pro (Transformer MoE per third-party reporting; Google defers architecture details to the 3 Pro card).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **70.8%**; Terminal-Bench 2.0: **68.5%** (Google launch materials)
- Tau2-bench: **95.6%**; Tau3-Banking: no verified public score found
- Claw-Eval: **57.8%**
- MCP Atlas: **69.2%**
- GDPval-AA: no verified public score found
- OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (rank 4 on llm-stats GPQA leaderboard)
- HLE (w/o tools): **45.4%**
- ARC-AGI-2: **77.1%**
- Artificial Analysis Intelligence Index: **48** (AA model page)
- MedXpertQA (Text): **71.5%**

Coding:

- SWE-bench Verified: **80.6%** (Google-reported)
- SWE-Bench Pro: **54.2%** (rank 40/55, llm-stats)
- LiveCodeBench Pro Elo: **2887**; LiveCodeBench (Vals): **88.5%**
- Vibe Code Bench: **32.03%**

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

Multimodal extras:

- MMMU-Pro **83.9%**; CharXiv **80.2%**; ScreenSpot Pro **84.4%** (BenchLM/Vals-sourced)

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 (Vals) 70.8% and MCP Atlas 69.2% sit above the mid band (45–60%) but well under the frontier TB2.1 88%+ mark; no Tau3/GDPval number caps the score.
- **Reasoning: 80/100.** GPQA Diamond 94.3% and HLE 45.4% are frontier-tier, ARC-AGI-2 77.1% exceptional; AA Index 48 is only mid-upper (20–35 → 55–65 band), capping the dimension.
- **Context window: 95/100.** 1M tokens with 64K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 90/100.** Text/image/audio/video/PDF input — full non-text input coverage; text-only output keeps it under the 95+ band.
- **Coding: 80/100.** SWE-bench Verified 80.6% and LiveCodeBench 88.5% are strong; SWE-Bench Pro 54.2% and Vibe Code Bench 32.03% hold it out of the frontier band.
- **Cost efficiency: 70/100.** $2.00/$12.00 standard pricing lands between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) reference points, closer to the latter.
- **Overall Score: 85/100.** Mean of the five quality dims (78+80+95+90+80)/5 = 84.6 → 85. Best-fit: multimodal flagship for huge-context (codebase-scale) reasoning and analysis where Claude/GPT-class tool use is not the priority.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Google model card + launch materials, Artificial Analysis, llm-stats, Vals.ai, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
