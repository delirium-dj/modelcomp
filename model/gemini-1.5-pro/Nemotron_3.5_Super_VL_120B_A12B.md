# Gemini 1.5 Pro — findings by Nemotron 3.5 Super VL 120B A12B

- Source: storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf (official Gemini 1.5 technical report), storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf arxiv 2403.05530v2 (official), blog.google "Introducing Gemini 1.5" (2024-02-15), langbase.com/models/google/gemini-1.5-pro/benchmarks (official benchmark table), benchlm.ai/models/gemini-1-5-pro (aggregator), benchgecko.ai model page, alienart.io charts, llmreference.com (MMLU/MMLU-Pro), deepmind.google/models/model-cards
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (Google DeepMind)
- **Short description:** Google's multimodal MoE model, announced 2024-02-15, early testing May 2024; mid-size multimodal model optimized for scaling; breakthrough long-context (standard 128K, experimental up to 10M tokens); performs at ~Gemini 1.0 Ultra level with less compute; proprietary.
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI.
- **Release / knowledge:** Announced 2024-02-15; updated/may 2024 version (gemini_v1_5_report October 2024). Knowledge cutoff not stated in fetched sources.
- **IDs:** `gemini-1.5-pro` (benchlm), `gemini-1.5-pro-001` (alienart), `gemini-1-5-pro-feb-2024` / `gemini-1-5-pro-may-2024` (benchgecko variants).
- **Context window:** Standard 128,000 tokens (blog.google); experimental up to 10M tokens (technical report — "from 32k up to 10M tokens"); benchlm.ai lists 2M (aggregator display value, treat as indicative). Near-perfect needle recall >99.7% up to 1M across all modalities (report Figure 1).
- **Modalities:** Text, image, audio, video in; text out (natively multimodal); reasoning yes (non-reasoning classifier per benchlm); tool calls / function calling not detailed in fetched sources; JSON mode not advertised.
- **Pricing (as of 2026-10-16):** benchlm.ai compare lists $1.25/M input, $5.00/M output. Google official pricing not confirmed in fetched sources.
- **Architecture:** Mixture-of-Experts (MoE); parameter count undisclosed by Google.

### Raw benchmarks found

Official Gemini 1.5 technical report (Table 1 / Figure 2: Feb 2024 vs May 2024 versions) plus langbase official table and benchlm.ai aggregator. Two versions exist (Feb 2024 and May 2024); both cited where identifiable.

Agent / tool use: No scored agent benchmarks (SWE-bench, Terminal-Bench, TAU-bench, BrowseComp) found for Gemini 1.5 Pro in fetched sources.

Reasoning / knowledge:

- MMLU: **81.9%** (Feb 2024) / **85.9%** (May 2024, 5-shot) (technical report / langbase)
- GPQA (main): **41.5%** (Feb 2024) / **46.2%** (May 2024) (technical report)
- MATH: **58.5%** (Feb) / **67.7%** (May) (technical report)
- GSM8K: **91.7%** (11-shot, technical report Table)
- Big-Bench Hard: **84.0%** (Feb) / **89.2%** (May, 3-shot CoT) (technical report)
- Natural2Code (code gen): **77.7%** (Feb) / **82.6%** (May) (langbase)
- MMMU: **58.5%** (Feb) / **62.2%** (May) (langbase)
- MathVista: **54.7%** (Feb) / **63.9%** (May) (langbase/technical report)
- WMT23: **75.2%** (May) (langbase)
- EgoSchema (video QA): **72.2%** (May) (langbase)
- benchlm.ai aggregator: overall **27.77/100** (#200/954, last updated 2026-10-16), AA Coding Index 23.6%, AA-MMMU-Pro 55.0%, AA Intelligence Index 7.9%, AA-GPQA Diamond 58.9%, AA-HLE 4.6% (5 of 639 benchmarks covered — conservative)
- benchgecko: avg score 40.8, rank #171, multimodal #1 globally

Coding:

- Natural2Code: 77.7% / 82.6% — see above
- HumanEval / LiveCodeBench / Codeforces / SWE-bench: not found for Gemini 1.5 Pro in fetched sources

Multimodal & grounded:

- MMMU 58.5–62.2%, MathVista 54.7–63.9%, EgoSchema 72.2% (video) — see above; natively multimodal (text+image+audio+video)

Long context:

- >99.7% needle recall up to 1M tokens all modalities (report Figure 1); context up to 10M experimental; mainstream long-context QA / long-video QA / long-context ASR state-of-the-art per report; benchlm lists 2M context (indicative)

Instruction following: No IFEval/BBH scores found for Gemini 1.5 Pro.

### Conflicting results noted

- **Version conflict:** Feb 2024 vs May 2024 scores differ on every benchmark (e.g. MMLU 81.9 → 85.9, GPQA 41.5 → 46.2, MATH 58.5 → 67.7). Both cited with version labeled.
- **Context window:** 128K standard (blog) vs up to 10M experimental (report) vs benchlm's 2M (aggregator). 128K standard is authoritative; 10M is the experimental long-context capability.
- **benchlm.ai overall (27.77)** is much lower than raw benchmark percentages suggest because it's a normalized composite over only 5 covered benchmarks — conservative per benchlm's own coverage note.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Uses the May 2024 figures where both versions exist.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 40/100.** No public scored agent benchmarks (SWE-bench, Terminal-Bench, TAU-bench, BrowseComp, MCP Atlas) found; floor estimate.
- **Reasoning: 66/100.** Strong MMLU (85.9), MATH (67.7), GSM8K (91.7), Big-Bench Hard (89.2), GPQA (46.2); solid generalist reasoning.
- **Context window: 95/100.** Up to 10M experimental with >99.7% needle recall to 1M — best-in-class long context; capped because standard deployment is 128K and the 10M figure is experimental.
- **Multimodal: 72/100.** Natively multimodal (text+image+audio+video); MMMU 62.2, MathVista 63.9, EgoSchema 72.2; competitive but not frontier on pure vision vs later models.
- **Coding: 58/100.** Natural2Code 82.6% (May); no HumanEval/LiveCodeBench/Codeforces/SWE-bench found → moderate confidence, floor-leaning.
- **Cost efficiency: 70/100.** $1.25/$5.00 per M (benchlm, unconfirmed by Google); not counted toward Overall.
- **Overall Score: 66/100.** Half-up mean of (40 + 66 + 95 + 72 + 58) / 5 = 66.2 → 66. Best-fit recommendation: long-context specialist and capable generalist; coding and agentic tool use unverified in public sources.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Gemini 1.5 technical report + model card + Google blog + langbase official benchmark table + benchlm.ai + benchgecko + alienart + llmreference); scores are normalized 1–100 interpretations, not official vendor scores. Feb vs May 2024 versions distinguished where identifiable.
- Future sources: add a new file next to this one, using the same headings.
