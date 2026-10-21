# Qwen 3.7 Plus — findings by Muse Glimmer 30B

- Source: Alibaba/Qwen3.7 Plus
- Date: 2026-10-20
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's Qwen3.7 Plus GUI-agent tier on the Max backbone, 1M native context for coding/agents; multimodal image/video input with text output. GUI-agent tier drives real interfaces on top of the Max backbone.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.7-plus`; OpenRouter `qwen/qwen3.7-plus` Chat Completions. Reasoning model, multimodal agent.
- **Release / knowledge:** Released 2026-06-01 per Artificial Analysis; knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.7-plus`; OpenRouter `qwen/qwen3.7-plus`. No Free ID on Zen; `noFreeId` true.
- **Context window:** 1,000,000 total / 131K output per meta.json; Artificial Analysis confirms 1M context, ~1500 A4 pages.
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes; JSON mode supported. Meta lists Text, image in; text out.
- **Pricing (as of 2026-10-20):** $0.40/$1.60 per 1M <=256K input; $1.20/$4.80 per 1M 256K-1M; $0.32/$1.28 via OpenRouter/OpenCode Go. Tiers from meta.json.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> All numbers from Alibaba Cloud launch blog “Qwen3.7-Plus multimodal agent intelligence” and BenchLM aggregation, unless noted.

Agent / tool use:
- Terminal-Bench 2.0: **70.3%** (Alibaba Cloud blog)
- Claw-Eval: **62.7%** (Alibaba Cloud blog)
- MCP Atlas: **73.2%** (Alibaba Cloud blog)
- OSWorld-Verified: **73.3%** (Alibaba Cloud blog)
- AndroidWorld: **81.0%** (Alibaba Cloud blog)
- BFCL v4: **72.9%** (Alibaba Cloud blog)

Reasoning / knowledge:
- GPQA: **90.3%** (Alibaba Cloud blog)
- GPQA Diamond: **90.3%** (Alibaba Cloud blog)
- HLE: **34.7%** (Alibaba Cloud blog)
- MRCRv2: **91.7%** (Alibaba Cloud blog)
- CritPt: **9.1%** (Alibaba Cloud blog)
- MMLU-Pro: **88.5%** (Alibaba Cloud blog)
- MMLU-Redux: **94.5%** (Alibaba Cloud blog)
- Artificial Analysis Intelligence Index: **25.2** (Artificial Analysis)

Coding:
- SWE-bench Verified: **77.7%** (Alibaba Cloud blog)
- SWE-bench Pro: **57.6%** (Alibaba Cloud blog)
- SciCode: **51.3%** (Alibaba Cloud blog)
- LiveCodeBench v6: **89.6%** (BenchLM citing Qwen3.8-27B model card proxy; meta short notes 89.6%)

Multimodal & grounded:
- MMMU-Pro: **79%** (Alibaba Cloud blog)
- MathVision: **90.3%** (Alibaba Cloud blog)
- Video-MME with subtitle: **88.0%** (Alibaba Cloud blog)

Long context:
- Context window 1M verified; no long-context retrieval score published.

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal-Bench 2.0 70.3%, Claw-Eval 62.7%, MCP Atlas 73.2%, OSWorld-Verified 73.3% and AndroidWorld 81.0% place it in the mid-upper agent band, below frontier ~88% TB.
- **Reasoning: 78/100.** GPQA 90.3% and MRCRv2 91.7% are frontier level; HLE 34.7% and CritPt 9.1% cap the score.
- **Context window: 95/100.** 1M native window with 131K output per meta.json; Artificial Analysis confirms 1M.
- **Multimodal: 85/100.** Text, image, video in; text out. Strong MMMU-Pro 79%, MathVision 90.3%, Video-MME 88.0%.
- **Coding: 78/100.** SWE-bench Verified 77.7%, LiveCodeBench 89.6%, SciCode 51.3% and SWE-Pro 57.6% give solid coding with mid-tier science coding.
- **Cost efficiency: 88/100.** Paid $0.40/$1.60 per 1M; no Free ID. Priced above median for its class.
- **Overall Score: 82/100.** Mean of the five quality dims (75+78+95+85+78)/5 = 82.2 → 82. Best-fit: strong multimodal agent with large context, capped by HLE/CritPt and paid pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
