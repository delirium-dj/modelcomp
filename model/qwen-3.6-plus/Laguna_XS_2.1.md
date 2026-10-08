# Qwen3.6-Plus — findings by Laguna XS 2.1

- Source: Alibaba (`qwen3.6-plus`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6-Plus
- **Short description:** Alibaba's Qwen3.6 native vision-language flagship (2026-04-01) — hybrid linear-attention + sparse-MoE architecture, big agentic-coding gains over the 3.5 series (SWE-bench Verified 78.8) at budget pricing; succeeded by Qwen3.7-Plus in June.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (`qwen3.6-plus`, snapshot `qwen3.6-plus-2026-04-02`), PAI-EAS, OpenRouter, Vercel AI Gateway. Integrates with OpenClaw, Claude Code, Qwen Code (1,000 free calls/day), Kilo Code, Cline, OpenCode.
- **Release / knowledge:** 2026-04-01 (GA); knowledge cutoff not published in sources found.
- **IDs:** `qwen3.6-plus` (Model Studio); `qwen/qwen3.6-plus` (OpenRouter). No Zen Free ID found.
- **Context window:** 1M tokens (991K max input; 983K with thinking); 65K max output.
- **Modalities:** native vision-language: text, image (+ series-level video) in; text out; reasoning yes (thinking mode); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** Model Studio intl ≤256K: $0.50 / $3.00 per 1M; 256K–1M: $2.00 / $6.00; PAI-EAS route $0.325 / $1.95 (cache read $0.156); explicit cache create $0.625 / read $0.05 (≤256K).
- **Architecture:** hybrid efficient linear attention + sparse MoE routing (OpenRouter description); parameter count not published. ~56 t/s (AA).

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **74.1** (llm-stats/LLM Reference)
- τ²-Bench Telecom: **97.7%** (Artificial Analysis via OpenRouter); τ-bench **76.8** (LLM Reference, rank 16/37)
- Terminal-Bench Hard: **43.9%** (AA)
- GDPval-AA: **23.8%** (AA — weak)
- SkillsBench / TAU3-Bench / VITA-Bench / MCPMark / WideSearch / Claw-Eval / QwenClawBench: vendor-reported in launch post (methodology disclosed; absolute values not captured in sources found)
- Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.2%** (AA) / **90.4** (LLM Reference)
- AIME 2026 (I & II): **95.3%** (vendor/LLM Reference)
- HLE: **27.8%** (AA)
- MMLU-Pro: **88.5%** (LLM Reference)
- IFBench: **75.2%** (AA)
- CritPt: **2.9%** (AA — very weak)
- AA-Omniscience: accuracy **26.4%** / non-hallucination **65.4%** (AA)
- AA-LCR: **78.3%** (AA)

Coding:

- SWE-bench Verified: **78.8%** (vendor/LLM Reference — near the frontier of its day)
- LiveCodeBench v6: **87.1% pass@1** (LLM Reference, rank 14/56)
- AA Coding Index: **54.5** (AA)
- Design Arena: Code Categories Elo **1242**, Website **1248**, UI Component **1241**, 3D **1218** (Design Arena)
- SWE-bench Pro / DeepSWE: vendor claims parity with leaders (launch post; absolute values not captured)

Long context:

- AA-LCR **78.3%** over the 1M window (see above)

Multimodal (supporting): MMMU **86.0%**, MMMU-Pro **78.8%** (LLM Reference); OCR / object localization enhanced per Model Studio

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-Bench 97.7% and MCP-Atlas 74.1 are solid agent evidence; capped by TB Hard 43.9%, GDPval-AA 23.8% and vendor-only rows for the launch's other tool benchmarks.
- **Reasoning: 74/100.** AIME 95.3%, GPQA ~88–90 and MMLU-Pro 88.5% are strong mid-tier; capped by HLE 27.8% and CritPt 2.9% far below frontier.
- **Context window: 95/100.** 1M window (95–100 tier) with AA-LCR 78.3%; no ≥98%-at-512K+ evidence, so the floor.
- **Multimodal: 80/100.** Native vision-language (image in with enhanced OCR/localization, series-level video) with MMMU 86.0% and MMMU-Pro 78.8%; text-only output caps it below the audio-in tier.
- **Coding: 82/100.** SWE-bench Verified 78.8% and LiveCodeBench 87.1% are excellent for a $0.43-blended model; capped by Coding Index 54.5 and TB Hard 43.9%.
- **Cost efficiency: 92/100.** $0.325/$1.95 (PAI-EAS) matches the methodology's $0.60/$2.20 (~92) anchor; even the standard $0.50/$3.00 tier is cheap, though the 256K–1M tier jumps to $2/$6.
- **Overall Score: 81/100.** Mean of (74, 74, 95, 80, 82) = 81 — a strong budget coding/multimodal model of spring 2026; Qwen3.7-Plus adds better vision + speed at similar prices.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Qwen launch post + Model Studio docs, OpenRouter, Artificial Analysis, LLM Reference, Alibaba Cloud Community, benchable); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
