# Qwen 3.7 Plus — findings by Pixel Canary

- Source: Alibaba (`opencode/qwen-3.7-plus`), vendor ID `qwen3.7-plus`
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Plus (mid-tier hosted tier of the Qwen3.7 generation; no OpenCode Zen Free ID — paid via Alibaba Model Studio)
- **Short description:** Alibaba's hosted "Plus" tier of the Qwen3.7 generation (released 2026-06-02): a reasoning model aimed at high-volume agent and app workloads with a 1M-token window and omnimodal input. Sits between Qwen3.6 Plus and the Qwen3.7 Max flagship.
- **Provider / access:** Alibaba Model Studio / DashScope (`alibaba/qwen3.7-plus`), Alibaba Cloud China (`alibaba-cn`), plus resellers (crossmodel, empiriolabs) and OpenRouter (`qwen/qwen3.7-plus`); Chat Completions-compatible API with tool calling. Bundled at $0 inside the Alibaba Token Plan / Coding Plan subscriptions.
- **Release / knowledge:** 2026-06-02 (models.dev `release_date`); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.7-plus`, vendor `qwen3.7-plus`, OpenRouter `qwen/qwen3.7-plus`. No Zen Free ID → cost scored on paid pricing.
- **Context window:** 1M input tokens / 131,072 max output on the international Alibaba endpoint (65,536–64,000 on the CN and token-plan variants) — verified from models.dev; BenchLM lists 1M. Note: this folder's `meta.json` still says "128K total / Standard pricing", which is stale placeholder metadata.
- **Modalities:** Text, image and video in; text out. Reasoning: yes (BenchLM "Reasoning" type). Tool calling: yes (BFCL v4 / MCP Atlas scores exist); JSON/structured output supported.
- **Pricing (as of 2026-09-29):** $0.40 / 1M input, $1.60 / 1M output, $0.04 cache reads (Alibaba international); $0.50 / $3.00 on the CN endpoint; $0 within Token Plan and Coding Plan subscriptions.
- **Architecture:** Proprietary; Alibaba publishes neither parameter count nor weights for the Plus tier (open-weights Qwen3.7 releases are separate checkpoints).

### Raw benchmarks found

Agent / tool use (BenchLM, updated 2026-09-28):

- τ²-bench: **93%**; BFCL v4 **72.9%**; MCP Atlas **73.2%**
- AndroidWorld **81.0%**; OSWorld-Verified **73.3%**; DeepPlanning **62.3%**; VITA-Bench **45.6%**
- Claw-Eval **62.7%**; QwenClawBench **61.8%**; QwenWebBench **1536**
- APEX-Agents-AA **22.4%**; AA Agentic Index **19.7%**; GDPval-AA **886** (12.8% normalized); OSWorld 2.0 **2.8%**

Reasoning / knowledge:

- GPQA Diamond **90.3%** (AA-GPQA Diamond 90.0%); HLE **34.7%** (AA-HLE 35.6%); MMLU-Pro **88.5%**; MMLU-Redux **94.5%**; SuperGPQA **71.4%**
- Artificial Analysis Intelligence Index **25.2**; CritPt **9.1%**
- AA-Omniscience Accuracy **22.5%** / Hallucination Rate **27.7%** / Omniscience Index **1.1%**
- IFEval **94.6%**; IFBench **79.1%**; MMLU-ProX **85.4%**; PolyMath **84.0%**; HMMT Feb 2026 **92.9%**; IMOAnswerBench **86.0%**

Coding:

- SWE-bench Verified **77.7%**; SWE-bench Pro **57.6%**; SWE Multilingual **75.8%**
- LiveCodeBench **89.6%**; Terminal-Bench 2.0 **70.3%**; Terminal-Bench 2.1 (Vals) **52.8%**
- SciCode **51.3%** (AA-SciCode 46.1%); AA Coding Index **55.9%**; NL2Repo **41.1%**

Multimodal / long context:

- MRCRv2 **91.7%**; AA-LCR **73.0%**
- MMMU-Pro **79%** (AA-MMMU-Pro 80.5%); MathVision **90.3%**; CharXiv **85.9%**; ScreenSpot Pro **79.0%**; SimpleVQA **81.7%**; RealWorldQA **86.9%**; OmniDocBench 1.5 **91.4%**; OCRBench V2 **70.7%**
- Video-MME (with subtitle) **88.0%**; VideoMMMU **85.4%**; MLVU (M-Avg) **87.4%**
- BenchLM composite: **55.83/100**, rank **#54 / 512** (BenchLM flags partial coverage: 70 of 486 benchmarks)
- Terminal-Bench 4.0 / Tau3-Banking / GDPval Elo on Anthropic's harness / SWE Atlas / Toolathon: no verified public score found for this exact ID

### Normalized scores (1–100)

- **Tool use: 72/100.** Excellent structured tool calling (τ²-bench 93%, BFCL v4 72.9%, MCP Atlas 73.2%) and solid device use (AndroidWorld 81.0%), but long-horizon autonomy collapses under independent harnesses (AA Agentic Index 19.7, APEX-Agents-AA 22.4%, GDPval-AA Elo 886) — capped by that gap, not by API capability.
- **Reasoning: 68/100.** GPQA Diamond 90.3% and MMLU-Pro 88.5% are near-frontier for a mid-tier, but HLE 34.7%, CritPt 9.1% and AA Intelligence Index 25.2 show it stops well short of flagship reasoning; AA-Omniscience accuracy 22.5% with a 27.7% hallucination rate is the hard cap.
- **Context window: 86/100.** 1M-token window with strong measured retrieval (MRCRv2 91.7%, AA-LCR 73.0%) — the best-evidenced dimension here; capped below 90 because max output is 64K–131K depending on endpoint and no GraphWalks/RULER number exists.
- **Multimodal: 78/100.** Text+image+video input with strong video (Video-MME 88.0%, MLVU 87.4%, VideoMMMU 85.4%) and document (OmniDocBench 1.5 91.4%, OCRBench V2 70.7%) results; capped because output is text-only and no audio or chart-generation path exists.
- **Coding: 76/100.** SWE-bench Verified 77.7% and LiveCodeBench 89.6% are strong, but SWE-bench Pro 57.6%, Terminal-Bench 2.0 70.3% and AA Coding Index 55.9 place it mid-pack for real agentic repo work.
- **Cost efficiency: 85/100.** $0.40/$1.60 per 1M with $0.04 cache reads, plus $0 access through the Alibaba Token/Coding Plan subscriptions; capped because there is no OpenCode Zen Free ID (a $0 Zen tier would score 100) and the CN endpoint is 3× the output price.
- **Overall Score: 76/100.** (72 + 68 + 86 + 78 + 76) / 5 = 76.0 — best fit as a cheap 1M-context multimodal workhorse for retrieval-heavy agents where flagship reasoning is not required.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM model profile for `qwen3-7-plus`, models.dev provider/pricing index, OpenRouter listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
