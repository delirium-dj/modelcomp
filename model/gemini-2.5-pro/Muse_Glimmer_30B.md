# Gemini 2.5 Pro — findings by Muse Glimmer 30B

- Source: Google/Gemini 2.5 Pro
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's canonical thinking flagship (1M context, 64K out) for long-context reasoning; AIME 92% and GPQA 84.4%, superseded by 3.x.
- **Provider / access:** Google Gemini API / AI Studio / Vertex AI; OpenCode Zen `opencode/gemini-2.5-pro`. Chat Completions compatible.
- **Release / knowledge:** GA 2025-05-20; preview 2025-03-25; knowledge cutoff Jan 2025 per `meta.json` and vendor docs.
- **IDs:** `google/gemini-2.5-pro`, `opencode/gemini-2.5-pro`
- **Context window:** 1,048,576 tokens input; max output 64,000 tokens per `meta.json`.
- **Modalities:** Text, image, audio, video, PDF in; text out. Native thinking/reasoning, tool calling, JSON mode.
- **Pricing (as of 2026-10-20):** $1.25 / $10.00 per 1M input/output tokens for prompts ≤200K; $2.50 / $15.00 per 1M for prompts >200K per `meta.json`. No free tier.
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with source for traceability. “no verified public score found” where missing.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- SWE-bench Verified agentic coding proxy: **63.8%** (Google self-reported via DataCamp roundup; BenchLM shared harness)
- Aider Polyglot whole-file editing: **74.0%** (Google self-reported via DataCamp)

Reasoning / knowledge:

- GPQA Diamond: **84.0%** pass@1 (Google self-reported)
- Humanity's Last Exam no-tools: **18.8%** (Google self-reported)
- AIME 2024: **92.0%** / AIME 2025: **86.7%** pass@1 (Google)
- MMMU: **81.7%** pass@1 (Google via DataCamp)
- Artificial Analysis Intelligence Index v4.3.2: **16** (#172/214) — artificialanalysis.ai model page 2026-10-20

Coding:

- SWE-bench Verified: **63.8%** (Google)
- LiveCodeBench v5: **70.4%** (Google; llm-stats snapshot reports 75.6% on alternate harness)
- Aider Polyglot: **74.0%** (Google)
- SciCode / AA-SciCode: no verified public score found

Long context:

- MRCR at 128K: **91.5%** (Google via DataCamp); MRCR-1M pointwise **82.9%** llm-stats snapshot
- RULER / GraphWalks retrieval at 1M: no verified public score found

### Normalized scores (1–100)

> Derived from raw numbers above using methodology in `model-comparison.md`.

- **Tool use: 62/100.** SWE-bench Verified 63.8% and Aider 74% provide a mid-band agentic coding proxy; no verified Terminal-Bench / Tau2 / GDPval scores caps tool use.
- **Reasoning: 79/100.** GPQA 84.0% and AIME 92/87% show strong math/knowledge reasoning; HLE 18.8% and AA Intelligence Index 16 keep it below the 90%+/40%+ frontier tier.
- **Context window: 95/100.** Full 1M input / 64K output window per `meta.json`; MRCR 91.5% at 128K confirms strong retrieval, no independent 98%+ at 512K+ reported.
- **Multimodal: 82/100.** Text + image + audio + video + PDF in, text out; MMMU 81.7% supports strong multimodal understanding, capped by text-only output.
- **Coding: 73/100.** SWE-bench Verified 63.8% and LiveCodeBench 70.4% place it in solid mid-pack coding; Aider 74% lifts score, still below 78-85% SWE frontier.
- **Cost efficiency: 80/100.** $1.25/$10.00 per 1M is competitive input pricing with expensive output; no free tier.
- **Overall Score: 78/100.** Mean of Tool 62 + Reasoning 79 + Context 95 + Multimodal 82 + Coding 73 = 391 /5 = 78.2 → 78. Best-fit as broad multimodal reasoning workhorse with 1M context, superseded by Gemini 3.x for frontier coding/tool use.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research using `meta.json` for specs/pricing; benchmarks from Artificial Analysis, Google self-reports via DataCamp/llm-stats, BenchLM. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
