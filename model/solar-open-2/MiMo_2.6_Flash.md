# Solar Open 2 — findings by MiMo 2.6 Flash

- Source: Upstage (`solar-open-2`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weight 250B-A15B MoE foundation model optimized for agentic use in real work environments; Korea's sovereign AI play with first-class Korean/English/Japanese support. Substantial generational jump over Solar Open 100B across knowledge, math, coding, and instruction following.
- **Provider / access:** Hugging Face (`upstage/Solar-Open2-250B`); Upstage Console/API; self-host via vLLM/Transformers. Chat Completions.
- **Release / knowledge:** Released 2026-07-23 (Upstage blog + Chosun coverage); technical report on arXiv (2601.07022); knowledge cutoff not disclosed.
- **IDs:** `upstage/solar-open-2` / HF `upstage/Solar-Open2-250B`.
- **Context window:** 1,000,000 tokens (1M) per BenchLM; max output not disclosed.
- **Modalities:** text in; text out; reasoning mode; tool calls; MCP support (MCP Atlas 58.2%).
- **Pricing (as of 2026-10-13):** open weights (Upstage Solar License — commercial use and fine-tuning/distillation permitted); free self-host; Upstage Console API pricing not separately published for Open 2 in reviewed sources. Min recommended self-host: 4× NVIDIA H200 BF16 or 2× H200 quantized.
- **Architecture:** 250B total parameters, 15B active (MoE A15B); open weights.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **58.2%** (BenchLM)
- APEX-Agents: **16.6%** (BenchLM)
- terminalBenchHard: **28.3%** (BenchLM)
- Ko-GDPval: **86.8** (Upstage blog; just 0.16 behind DeepSeek-V4-Pro's 86.9 — a 1.6T model 6× its size; ahead of MiMo-V2.5-Pro 84.6)

Reasoning / knowledge:

- MMLU-Pro: **86.2%** (Upstage blog; "first among comparable models")
- GPQA Diamond: **86.3%** (BenchLM)
- HLE w/o tools: **28.8%** (BenchLM)
- HMMT Feb 2026: **93.9%** (BenchLM)
- AIME26: **95.7%** (BenchLM)
- IFBench: **80%** (BenchLM; strong instruction following)

Coding:

- LiveCodeBench: **92.4%** (Upstage blog; "highest among comparable models")
- SWE-bench Verified: **70.4%** (BenchLM)

Long context:

- 1M window claimed; no MRCR/RULER figure published in reviewed sources.

### Normalized scores (1–100)

- **Tool use: 62/100.** Ko-GDPval 86.8 (near DeepSeek-V4-Pro class on Korean economic-value tasks) and MCP Atlas 58.2% show real agentic chops. Capped hard by APEX-Agents 16.6% and terminalBenchHard 28.3% — long-horizon terminal/enterprise agent work still lags frontier.
- **Reasoning: 88/100.** MMLU-Pro 86.2, GPQA 86.3, AIME26 95.7, HMMT 93.9, IFBench 80% — elite academic reasoning for an open-weight model, near-frontier math. Capped slightly by HLE 28.8% still well behind closed flagships.
- **Context window: 95/100.** Full 1M-token native context matches the frontier class; capped only by no independent long-context retrieval measurements yet published.
- **Multimodal: 15/100.** Text-only model — no image/audio/video input. Capped at the text-only floor per scoring methodology.
- **Coding: 78/100.** LiveCodeBench 92.4% is elite (claims top among comparable models); SWE-bench Verified 70.4% solid. Capped by SWE-V still behind 80%+ frontier coders and terminalBenchHard 28.3%.
- **Cost efficiency: 75/100.** Open weights with commercial license and fine-tuning rights; 15B active keeps serving reasonable at 250B scale. Capped by 4× H200 minimum recommendation making self-host non-trivial for smaller teams; no cheap hosted API price published.
- **Overall Score: 68/100.** Mean of (62 + 88 + 95 + 15 + 78) / 5 = 67.6 → **68**. Best-fit recommendation: sovereign/Korean-market open-weight reasoning powerhouse with elite math and 1M context — excellent for Korean-language enterprise and math-heavy work; pair with a multimodal model for vision tasks and expect agent hardening on APEX-class benchmarks.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (Upstage Solar Open 2 blog, Chosun coverage, BenchLM comparison pages, HF model card, arXiv Solar Open technical report); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
