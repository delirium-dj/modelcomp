# Claude Opus 4.8 — findings by Step 5 Preview

- Source: Anthropic `claude-opus-4.8`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (`claude-opus-4.8`; Anthropic's Claude 4-family flagship, predecessor to Opus 5)
- **Short description:** Anthropic's most capable generally available Claude 4 model (at its release), optimized for agentic coding, long-context analysis, and complex reasoning. Adds native computer-use automation for desktop tasks. Superseded by Opus 5 / Opus 5.5 but still a strong frontier agentic-coding/research model.
- **Provider / access:** Anthropic Claude API, AWS Bedrock, Google Vertex AI, Microsoft Foundry (200K on Foundry). Official SDKs (Python/JS/TS/Java/Go/Ruby). No free tier.
- **Release / knowledge:** Released 2026-05-28. Knowledge cutoff not explicitly disclosed.
- **IDs:** `claude-opus-4.8` (+ `-low/-medium/-high/-max`). No free/contributor ID.
- **Context window:** 1,000,000 (1M) input; 128,000 max output (300K via Batch API beta header).
- **Modalities:** Text, image, PDF in; text + tool-calls out. No audio/video input; no non-text output. Reasoning yes (adaptive, default on); tool calls yes; native computer-use; JSON yes.
- **Pricing (as of 2026-10-08):** $5.00/M in · $25.00/M out · $0.50/M cached in. Fast mode (research preview) ~2× price. Batch 50% off. No free tier.
- **Architecture:** Dense Transformer; parameter count undisclosed (estimated ~600B from capability footprint).

### Raw benchmarks found

> Cross-referenced hokai.io (Anthropic) and vectorwire.ai (199 results/139 benchmarks, 32 independent, capability profile). Independent runs noted where available.

Agent / tool use:

- Terminal-Bench 2.1 (multi-turn coding/debugging): **74.6%** (Anthropic; up from Opus 4.7's 66.1%)
- τ²-Bench Telecom: **94.44%** (max, Artificial Analysis)
- τ³-Bench Banking: **27.6%**
- Toolathlon Verified: **76.2%**
- WideSearch: **72.9%**
- Native computer-use automation (desktop tasks) — a 4.8 addition
- Vector Wire capability: **Agentic "Capable"** (−10.3% vs leader, 7/7)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (Anthropic; rank #9/50)
- Humanity's Last Exam: **49.8%** no tools / **57.9%** with tools (Anthropic — the highest in the field with tools)
- USAMO 2026 (math): **96.7%** (a leap from Opus 4.7's 69.3%)
- Vector Wire capability: **Reasoning "Strong"** (−8.6% vs leader, 6/6); **Factuality "Strong"** (−8.4%); **Math "Capable"** (−24.1%); **Instruction Following "Limited"** (−26.7%)
- AIME 2025: not surfaced live for 4.8 — treated as provisional

Coding:

- SWE-bench Verified: **88.6%** (Anthropic; up from 4.7's 87.6%, rank #6/32)
- SWE-bench Pro (harder agentic coding): **69.2%** (Anthropic; +4.9 over 4.7, +10.6 over GPT-5.5)
- Terminal-Bench 2.1: **74.6%** (see tool use)
- Vector Wire capability: **Coding "Strong"** (−9.7% vs leader, 9/10) — near-frontier
- LiveCodeBench / SciCode exact rows: not surfaced live for 4.8 — treated as provisional

Multimodal:

- Text + image + PDF in; text out. No audio/video input, no non-text output.
- Video-MME (w. sub): **86.0%**; ZeroBench (pass@5) **34.0%**
- Vector Wire: **Multimodal "Capable"** (−17.5% vs leader, 2/6)

- **Tool use: 88/100.** Terminal-Bench 2.1 74.6%, τ²-Bench Telecom 94.44%, Toolathlon 76.2%, and native computer-use automation are strong, with Agentic "Capable" (−10.3%). Capped by τ³-Bench Banking 27.6% and the "Capable" (not "Frontier"/"Strong") agentic rating — solid enterprise agentic tooling, behind the current agentic leaders.
- **Reasoning: 92/100.** GPQA Diamond 93.6%, HLE 57.9% with tools (the highest in the field), and USAMO 2026 96.7% are frontier-level, with Reasoning "Strong" (−8.6%) and Factuality "Strong" (−8.4%). Capped by Math "Capable" (−24.1%) and Instruction Following "Limited" (−26.7%), plus no verified AIME row.
- **Context window: 92/100.** 1M input / 128K output with 99%+ needle-in-haystack recall above 100K — solid ≥1M tier. Held from 100 by the 128K output cap and Vector Wire's Long Context "Capable" (−15.5%) rating (no explicit ≥512K MRCR figure).
- **Multimodal: 80/100.** Text + image + PDF in (text out), no audio/video input and no non-text output → the 75–90 "video/PDF in" band, held to 80 by the missing audio/video and Multimodal "Capable" (−17.5%); Video-MME 86% confirms solid visual reasoning.
- **Coding: 90/100.** SWE-bench Verified 88.6% (rank #6/32) and SWE-bench Pro 69.2% with Coding "Strong" (−9.7%, 9/10) — near-frontier agentic coding. Capped by SWE-bench Pro trailing the newer Opus 5.5 (89.9%) and no live LiveCodeBench/SciCode row.
- **Cost efficiency: 55/100.** Paid-only at $5/$25 per 1M (one of the priciest tracked, >93% of models); cached input $0.50/M and Batch 50% off soften it, but no free tier and it costs more than its successor Opus 5.5.
- **Overall Score: 88/100.** Mean of the five non-cost dims (88+92+92+80+90)/5 = 88.4. Best fit for long autonomous coding/research loops and enterprise tool orchestration with a 1M context and native computer-use; new deployments are better served by the cheaper Opus 5.5, but 4.8 remains a strong frontier agentic-coding/research model.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Cross-referenced Anthropic (via hokai.io) and vectorwire.ai (199 results, 32 independently verified, capability profile).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

Long context:

- 1M input / 128K output. Long-context recall (needle-in-haystack) reliable above 100K: **99%+ accuracy on fact retrieval deep in the window** (Anthropic).
- Vector Wire: Long Context **"Capable"** (−15.5% vs leader, 1/3)

### Normalized scores (1–100)
