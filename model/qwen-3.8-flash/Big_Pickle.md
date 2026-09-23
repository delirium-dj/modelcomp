# Qwen 3.8 Flash — findings by Big Pickle

- Source: Alibaba Qwen Team (`opencode/qwen-3.8-flash` = **Qwen3.8 Flash** / open checkpoint `Qwen3.8-Flash-Next`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's August 2026 multimodal MoE — a Qwen4-architecture technical preview with 125B main + 51B N-gram embeddings but only ~6B active params, a 1M-token window, image/video input and near-free pricing. Strongest-performing Qwen on OpenCode usage share (45.1% of Alibaba-model tokens) and beats Claude Opus 4.6 Max on several agentic benchmarks at ~1/9 the training cost of Qwen3.7-Plus.
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio (`qwen3.8-flash`, OpenAI- and Anthropic-compatible APIs), OpenCode Go, Novita/AliCloud resellers via LLM Gateway; open weights `Qwen3.8-Flash-Next` on Hugging Face / ModelScope (with FP8 build). OpenCode Zen id per repo meta stub: `opencode/qwen-3.8-flash`.
- **Release / knowledge:** API GA 2026-08-26; open weights 2026-08-27.
- **IDs:** `qwen3.8-flash` (QwenCloud, Model Studio, OpenCode Go); `qwen3.8-flash-next` (OSS checkpoint); `opencode/qwen-3.8-flash` per repo meta.
- **Context window:** 1,000,000 tokens at the API (max input 991,808 / max output 131,072; CoT up to 262,144); native preview 262K extensible to 1M via YaRN.
- **Modalities:** Text, image and video input; text output. Function calling, structured output, partial mode, context caching supported (no web search).
- **Pricing:** ¥0.8 in / ¥2.7 out (≈ $0.15 / $0.47 per 1M, intl $0.113/$0.382; cache-read $0.016-0.014); open weights for self-hosting.
- **Architecture:** Sparse MoE on a Qwen4 blueprint — 125B main + 51B N-gram embedding params, ~6B active per token; GDN + Qwen Sparse Attention (QSA) hybrid attention with 7.6x/4.9x prefill/decode speedups on 1M-token seqs; Muon optimizer, refit scaling law; one-ninth Qwen3.7-Plus training cost.

### Raw benchmarks found

Agent / tool use (Alibaba release table + llm-stats):

- Toolathlon Verified: **73.5%** (vs DeepSeek-V4-Flash 0731 70.3%); AndroidWorld: **84.5%**
- CoWorkBench: **73.9%** (vs Claude Opus 4.6 Max 68.2%)
- LLM Stats agents index: **34.7**; overall LLM Stats Score **49.2 (#19)**, beating GPT-5.4 on DeepSWE 1.1, SWE-Bench Pro and Toolathlon
- OSWorld / Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (Alibaba release); LLM Stats reasoning index: **48.9 (#10 area)**

Coding:

- SWE-bench Pro: **62.5%** (vs Claude Opus 4.6 Max 53.4%); SWE-bench Multilingual: **81.0%** (vs 77.5%); SWE-bench Verified: no verified score found
- DeepSWE 1.1: **58.7%** (Alibaba release); LLM Stats coding index: **36.1**

Long context:

- MRCR: no verified public score found; 1M window advertised with baboon 7.6x QSA prefill speedup claim

Multimodal:

- Image and video input accepted and verified via provider docs (no standalone vision benchmark found beyond provider claim)

### Normalized scores (1–100)

- **Tool use: 80/100.** Toolathlon Verified 73.5% (beating DeepSeek-V4-Flash), AndroidWorld 84.5% and CoWorkBench 73.9% place it at the top of mid-tier; no verified OSWorld/TB2.1 keeps it under the frontier.
- **Reasoning: 84/100.** Vendor-claimed GPQA 91.7% is near-frontier, corroborated by a strong LLM Stats reasoning index (48.9); without independent HLE it sits below the 90+ gate.
- **Context window: 88/100.** 1M window at the API with 131K output but 262K native + YaRN extension; no verified 512K+ retrieval score.
- **Multimodal: 85/100.** Full image + video input with dense tool-calling interoperability; no verified vision benchmark caps it below 90.
- **Coding: 80/100.** SWE-bench Pro 62.5% and Multilingual 81.0% beat Claude Opus 4.6 Max; DeepSWE 58.7% is strong for a ~6B-active model — a standout coding value.
- **Cost efficiency: 96/100.** ~$0.15/$0.47 or free self-hosting; one-third of DeepSeek-V4-Flash pricing at comparable-or-better agentic benchmarks — near-floor cost for a multi-modal frontier-adjacent model.
- **Overall Score: 83/100.** (80 + 84 + 88 + 85 + 80) / 5 = 83.4 → 83. The runaway-value pick of the Qwen3.8 line: multimodal MoE, 1M context and Opus-beating agentic coding at pocket-change pricing, with open weights on a new-efficient Qwen4 blueprint.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (Pandaily, kie.ai spec sheet, Alibaba Cloud Model Studio docs, LLM Gateway, llm-stats head-to-heads); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).