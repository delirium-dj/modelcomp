# Qwen 3.5 — findings by Fledge Alpha

- Source: Qwen (`qwen-3.5`, flagship `Qwen3.5-397B-A17B`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 (Qwen3.5-397B-A17B)
- **Short description:** Alibaba's unified native vision-language foundation model; open-weights flagship of the Qwen3.5 generation released February 2026, comparable to frontier closed models.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-397B-A17B` (Apache 2.0); NVIDIA NIM; various hosted APIs (Alibaba Model Studio, OpenRouter-class gateways); Chat Completions/Responses style endpoints.
- **Release / knowledge:** February 16–24, 2026; knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-397B-A17B`, `opencode/qwen-3.5` (scaffolded); no Zen Free ID verified.
- **Context window:** 262,144 tokens native (260k per AA); YaRN extension claimed for the family.
- **Modalities:** text, image, video in; text out; dual thinking/non-thinking modes; tool calls; JSON mode.
- **Pricing (as of 2026-10-05):** Alibaba list $0.60 in / $3.60 out per 1M (Qwen3.5 397B); AA blended ~$0.90/1M.
- **Architecture:** Hybrid MoE, 397B total / 17B active, 512 experts (10 routed + 1 shared), Gated DeltaNet + global attention, early-fusion ViT encoder; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **52.5–54.0** (vendor/AA-listed; Gemini 3 Pro 54.2 nearby)
- BrowseComp: **78.6** (vendor-reported)
- IFBench: **76.5** (vendor-reported)
- AA Agentic Index: **0.08** (AA)

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (vendor-reported)
- MMLU-Pro: **87.8%** (vendor-reported)
- MMMLU multilingual: **88.5** (vendor-reported)
- HLE: **29%** (AA)
- AA Intelligence Index: **34** (reasoning mode; AA)
- CritPt: **2%** (AA)
- ERQA: **67.5** (vendor-reported)

Coding:

- SWE-bench Verified: **80.0%** (vendor-reported)
- SciCode: **45–48.7%** (AA 45)
- AA Coding Index: **0.48** (AA)

Long context:

- BrowseComp 78.6 at 256k context; AA-LCR v1.1: **77%** (AA); WideSearch 256k context-folding score 69.0 (vendor).

Multimodal:

- OmniDocBench v1.5: **90.8** (vendor), MMMU-Pro: **79.0** (vendor), Video-MME: **87.5** (vendor)

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 80/100.** Terminal-Bench 52.5–54.0 and BrowseComp 78.6 are frontier-adjacent; AA Agentic Index 0.08 is low, capping confidence.
- **Reasoning: 84/100.** GPQA 88.4, MMLU-Pro 87.8; capped by HLE 29 and CritPt 2.
- **Context window: 95/100.** 262K native verified across AA and vendor; long-context evidenced by WideSearch/BrowseComp at 256K.
- **Multimodal: 86/100.** Early-fusion image+video, OmniDocBench 90.8, Video-MME 87.5; text-only out.
- **Coding: 80/100.** SWE-bench Verified 80.0; SciCode ~45 below frontier.
- **Cost efficiency: 72/100.** $0.60/$3.60 per 1M and ~$0.90 blended is mid-tier for open weights; free weights but paid serving.
- **Overall Score: 85/100.** Mean of five non-cost dims (80+84+95+86+80)/5 = 85.0 → 85; best fit: general open-weights multimodal flagship.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (DataCamp Qwen3.5 overview, vendor benchmark tables via AA comparison pages, NVIDIA NIM card, gigazine release notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
