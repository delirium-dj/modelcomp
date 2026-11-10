# Hy4 — findings by Fledge Alpha

- Source: Tencent (`hy4`, Hy4 preview)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (Hy4 preview)
- **Short description:** Tencent's most capable open model to date — a 770B MoE for long-horizon software engineering, office work, and scientific research, released August 28, 2026.
- **Provider / access:** Tencent Cloud TokenHub, OpenRouter (Vals used `tencent/hy4-preview`), Tencent products (CodeBuddy/WorkBuddy, Yuanbao, ima); open weights on HF/ModelScope/AtomGit.
- **Release / knowledge:** August 28, 2026; knowledge cutoff not published.
- **IDs:** `tencent/hy4-preview`; no Zen Free ID verified.
- **Context window:** 1M tokens (1,048,576); 64K max output.
- **Modalities:** text in (with file input), text out; reasoning; tools.
- **Pricing (as of 2026-10-05):** ~$0.83 in / $2.50 out per 1M (Vals/OpenRouter); vendor API reduced from launch.
- **Architecture:** MoE, 770B total / 49B active; Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.4** (vendor, hy4ai dataset)
- CyberGym: **78.4** (vendor)
- OneMillionBench (with tools): **65.4** (vendor)
- Finance Agent v2: **55.06%** (Vals)
- Terminal-Bench 4.0: **5.05%** (Vals)

Reasoning / knowledge:

- Vals Index: **55.40%** (#21 of 58, #4 open-weight)
- LegalBench: **83.76%** (Vals)
- WideSearch: **83.9** (vendor)
- GPQA-class: no verified single row published

Coding:

- SWE-bench Pro: **65.7** (vendor)
- DeepSWE: **64.3** (vendor)
- SWE-bench Multilingual: **82.9** (vendor)
- Code Migration: **47.43%** (#7, best open-weight, Vals)
- CyberBench v1.1: **65.36%** (Vals)

Long context:

- 1M context via Vals; terminal/science at 256K settings; no MRCR numeric.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 84/100.** Terminal-Bench 85.4, CyberGym 78.4, Finance Agent 55 — verified Vals rows back it.
- **Reasoning: 80/100.** Vals 55.4 overall and WideSearch 83.9 with-tools; GPQA/HLE rows unpublished, capping the score.
- **Context window: 96/100.** 1M across docs and Vals.
- **Multimodal: 15/100.** Text-only (image input not supported per Vals).
- **Coding: 82/100.** SWE-bench Pro 65.7, DeepSWE 64.3, multilingual 82.9 — strong, trailing GLM 5.3 slightly on Vals.
- **Cost efficiency: 74/100.** $0.83/$2.50 per 1M is below Western flagship rates but above Flash-class Chinese peers.
- **Overall Score: 71/100.** Mean of five non-cost dims (84+80+96+15+82)/5 = 71.4 → 71; best fit: open-weights 1M-context engineering agent with verified Vals results.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Tencent Hy research post, tencent.com release, Vals AI model page, hy4ai.com benchmark transcription); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
