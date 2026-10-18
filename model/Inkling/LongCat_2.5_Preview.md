# Inkling — findings by LongCat 2.5 Preview

- Source: Thinking Machines Lab/inkling
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** A 975B total / 41B active parameter open-weights multimodal MoE model from Thinking Machines Lab (Mira Murati), natively accepting text, image, and audio input. Released July 2026 under Apache 2.0 license.
- **Provider / access:** Open weights on Hugging Face (`thinkingmachines/Inkling`, `thinkingmachines/Inkling-NVFP4`); API via DeepInfra `deepinfra/thinkingmachines/Inkling`, Together AI, Baseten, Fireworks AI, OpenRouter `thinkingmachines/inkling`, Tinker (fine-tuning platform). No Zen Free ID.
- **Release / knowledge:** Released 2026-07-15; pretrained on 45T tokens of text, images, audio, and video.
- **IDs:** `thinkingmachines/inking` (no Free ID on Zen; paid + free tier on some gateways)
- **Context window:** 1M tokens (model card spec); 524,288 tokens (most API providers); 64K/256K on Tinker platform. Provider-dependent.
- **Modalities:** Text + image + audio input → text output; tool calls; reasoning (controllable effort); structured output (provider-dependent).
- **Pricing (as of 2026-10-18):** $0.95/MTok input, $4.05/MTok output (DeepInfra, lowest); $1.00/$4.05 (Together, Baseten, Fireworks); $3.74/$9.36 (official list); free tier on OpenRouter/NVIDIA (rate-limited). Open weights can be self-hosted at cost.
- **Architecture:** 66-layer decoder-only MoE transformer; 975B total / 41B active; 256 experts, 6 active per token + 2 shared; hybrid local/global attention; native multimodal (hierarchical patch encoder for images, discrete token encoding for audio). Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **76.0%** (official model card) / **74.1%** (HF model card) / rank 6 of 7 in publisher table
- Toolathlon Verified: **45.5%** (official)
- BrowseComp (w/ ctx management): **77.1%** (official)
- GDPVal-AA v2: **1,238** (official) / **1,233** (HF) / **1,063.67** (AA v2.1)
- AA-AnalystAgent: **23.75%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (official) / **87.12%** (Vals AI) / **87.17%** (AA)
- AIME 2026: **97.1%** (official)
- HLE text only: **29.7%** (official) / **31.88%** (AA)
- HLE with tools: **46.0%** (official)
- Artificial Analysis Intelligence Index: **25** (AA / rank 41 of 42)
- IFBench: **79.8%** (official / ahead of all models in comparison table)
- Global-MMLU-Lite: **88.7%** (official)
- SimpleQA Verified: **43.9%** (official)
- AA Omniscience: **2.1** (official) / **2** (AA)

Coding:

- SWE-bench Verified: **77.6%** (official) / **77.60%** (Vals AI / rank 34 of 88)
- SWE-bench Pro Public: **54.3%** (official)
- Terminal Bench 2.1: **63.8%** (official, internal harness) / **47.57%** (Vals AI) / **55.06%** (AA) — large discrepancy across harnesses
- LiveCodeBench: **85.52%** (Vals AI / rank 32 of 143)
- SciCode: **46.99%** (AA)

Vision / audio:

- MMMU Pro: **73.5%** (official) / **78.50%** (Vals AI) / **73.47%** (AA)
- CharXiv RQ: **78.1%** (official) / **82.0%** with python
- Audio MC: **56.6%** (official)
- MMAU: **77.2%** (official)
- VoiceBench: **91.4%** (official)

Long context:

- AA-LCR v1.1: **77.33%** (Artificial Analysis)
- 1M token context window (model card spec)

### Normalized scores (1–100)

- **Tool use: 74/100.** MCP Atlas 76.0% is competitive with frontier models; Toolathlon 45.5% is moderate. Capped by AgentBench-style evals showing mid-tier agentic performance.
- **Reasoning: 82/100.** GPQA Diamond 87.2% and AIME 97.1% are strong; IFBench 79.8% leads its comparison table. Capped by HLE 29.7% (below frontier) and AA Intelligence Index 25 (rank 41/42).
- **Context window: 90/100.** 1M tokens per model card (524K on most API providers). Needle-in-a-haystack passes to ~880K tokens (SGLang). Provider-dependent limits apply.
- **Multimodal: 86/100.** Native text+image+audio input (rare among open models); MMMU Pro 73.5%, VoiceBench 91.4%, MMAU 77.2%, Audio MC 56.6%. Capped by vision scores below frontier closed models (Gemini 3.1 Pro 82.0% MMMU Pro).
- **Coding: 74/100.** SWE-bench Verified 77.6% is solid for open weights; SWE-bench Pro 54.3% trails GLM 5.2 (62.1%). Capped by Terminal Bench discrepancy (63.8% official vs 47.57% Vals AI) and SciCode 46.99%.
- **Cost efficiency: 88/100.** $0.95/$4.05 per MTok is exceptionally low for a 975B model; free tier available; Apache 2.0 open weights enable self-hosting. Outstanding value.
- **Overall Score: 81.2/100.** Mean of (74+82+90+86+74)/5 = 81.2 → 82. A strong open-weights multimodal model with excellent cost efficiency. Best suited for fine-tuning on Tinker, multimodal applications, and budget-conscious deployments. Not the strongest out-of-the-box coding or reasoning model — frontier closed models (Claude Fable 5, GPT-5.6 Sol) outperform it on hard tasks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-18
- Method: Public internet research (Thinking Machines official model card + blog, Hugging Face model card, Artificial Analysis, AIEvals, Vals AI, Sebastian Raschka, Decrypt, Pondero, OpenRouter, DeepInfra, LiteLLM, Vercel AI Gateway); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
