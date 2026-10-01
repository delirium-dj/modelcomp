# Qwen 3.5 Plus — findings by DeepSeek 4 Flash

- Source: Alibaba / Qwen (`opencode/qwen-3.5-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba Cloud Model Studio's hosted, production tier of the Qwen3.5 generation. The official Qwen3.5-397B-A17B model card states Qwen3.5-Plus is the hosted version of that open model with more production features (1M context by default, official built-in tools, adaptive tool use).
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5-plus`; Alibaba Cloud Model Studio / QwenCloud (`qwen3.5-plus`, OpenAI- and Anthropic-compatible API). Chat Completions interface.
- **Release / knowledge:** Qwen3.5 open family released 2026-02-16 (397B-A17B first); Plus is the hosted variant. Knowledge cutoff not stated.
- **IDs:** `opencode/qwen-3.5-plus`
- **Context window:** 1M tokens on the hosted Plus tier (per the Qwen3.5-397B-A17B card); the underlying open model is 262,144 natively and extensible to ~1,010,000.
- **Modalities:** underlying Qwen3.5-397B-A17B is a unified vision-language model (text/image/video in; text out; reasoning on by default; tool calls). The hosted Plus endpoint is documented primarily for text/tool use.
- **Pricing (as of 2026-10-02):** hosted pay-as-you-go tier; a specific per-1M-token rate for qwen3.5-plus was not verified in this pass. No free Zen ID.
- **Architecture:** 397B total / 17B activated sparse MoE with Gated DeltaNet + Gated Attention hybrid; Apache-2.0 open weights for the base model.

### Raw benchmarks found

> Qwen3.5-Plus is the hosted form of Qwen3.5-397B-A17B; the numbers below are that model's published card results (Qwen3.5-397B-A17B model card / Qwen Blog), which the card ties directly to Plus.

Agent / tool use:

- TAU2-Bench: **86.7%**
- BFCL-V4: **72.9%**
- Tool Decathlon: **38.3%**
- MCP-Mark: **46.1%**
- VITA-Bench: **49.7%**; DeepPlanning: **34.3%**
- HLE w/ tools: **48.3%**; BrowseComp: **69.0** (context-folding) / **78.6** (discard-all); WideSearch: **74.0%**
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA: **88.4%**
- HLE: **28.7%**; HLE-Verified: **37.6%**
- MMLU-Pro: **87.8%**; SuperGPQA: **70.4%**; MMLU-Redux: **94.9%**
- AIME26: **91.3%**; HMMT Feb 25: **94.8%**; IMOAnswerBench: **80.9%**
- LiveCodeBench v6: **83.6%**
- AA-LCR: **68.7%**; LongBench v2: **63.2%**
- IFBench: **76.5%**; MultiChallenge: **67.6%**
- Artificial Analysis Intelligence Index / Omniscience: no verified public score found for this exact hosted tier

Coding:

- SWE-bench Verified: **76.4%**
- SWE-bench Multilingual: **69.3%**
- SecCodeBench: **68.3%**
- Terminal Bench 2: **52.5%**
- DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 68.7% and LongBench v2 63.2% at long context; native 262K extensible to ~1M (hosted Plus defaults to 1M). No published MRCR/RULER number.

Vision (underlying unified model):

- MMMU-Pro: **79.0%**; MMMU: **85.0%**; MathVision: **88.6%**
- CharXiv(RQ): **80.8%**; OCRBench: **93.1%**; OmniDocBench1.5: **90.8%**
- ScreenSpot Pro: **65.6%**; OSWorld-Verified: **62.2%**; AndroidWorld: **66.8%**
- VideoMME (w/ sub): **87.5%**

### Normalized scores (1–100)

- **Tool use: 85/100.** TAU2-Bench 86.7% and BFCL-V4 72.9% are strong, and HLE/BrowseComp with tools are solid; capped by lower MCP-Mark 46.1% and Tool Decathlon 38.3%.
- **Reasoning: 86/100.** GPQA 88.4%, MMLU-Pro 87.8%, AIME26 91.3% and LiveCodeBench 83.6% are excellent for an open-weight MoE; HLE 28.7% is the main anchor keeping it out of the 90s.
- **Context window: 90/100.** Hosted Plus defaults to 1M tokens and the base model reaches ~1.01M via YaRN; no published long-context retrieval benchmark caps the top end.
- **Multimodal: 84/100.** Unified vision-language base with strong MMMU-Pro 79.0%, OCR 93.1% and video 87.5%; text-only on the hosted endpoint and no audio generation keep it below fully-native multimodal flagships.
- **Coding: 83/100.** SWE-bench Verified 76.4% and SWE-bench Multilingual 69.3% are strong at this price/openness; Terminal Bench 2 52.5% trails frontier coding agents.
- **Cost efficiency: 80/100.** Hosted pay-as-you-go Qwen tier is positioned as cost-competitive and the 17B-active MoE is efficient, but the exact per-token price was not verified this pass (score provisional).
- **Overall Score: 85.6/100.** Half-up mean of the five quality dims (85+86+90+84+83)/5 = 85.6. Best-fit recommendation: high-volume agentic and multimodal work needing a 1M window at open-weight economics.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (Qwen3.5-397B-A17B Hugging Face model card, which documents Qwen3.5-Plus as the hosted equivalent, plus the Qwen Blog / OpenLM Qwen3.5 summary); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6_Plus.md`, using the same headings.
