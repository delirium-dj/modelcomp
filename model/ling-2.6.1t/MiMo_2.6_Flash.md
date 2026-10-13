# Ling-2.6-1T — findings by MiMo 2.6_Flash

- Source: InclusionAI / Ant Group (`ling-2.6.1t`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** Instant-response trillion-parameter flagship from InclusionAI (Ant Group), sibling to thinking model Ring-2.6-1T in the Ling/Ring 2.6 family. Optimized for low-latency agent execution at scale rather than deep multi-step reasoning — fast token efficiency, tool calling, long context. Upgraded from Ling-2.0-1T base via architectural retrofit (hybrid linear attention) + continued pretraining + large-scale post-training (not from-scratch).
- **Provider / access:** InclusionAI API; Hugging Face / ModelScope open weights (MIT); OpenRouter `inclusionai/ling-2.6-1t`; Novita AI; vLLM/SGLang/Docker Model Runner; OpenAI-compatible chat completions with tool calling.
- **Release / knowledge:** Released April 2026 (LLM Reference / Zeplik); tech report June 2026 (arXiv 2606.15079). Knowledge cutoff not disclosed.
- **IDs:** `inclusionAI/Ling-2.6-1T` (HF); `inclusionai/ling-2.6-1t` (OpenRouter).
- **Context window:** 262,144 tokens (262K); max output not clearly disclosed.
- **Modalities:** text in; text out; instant/instruct (no extended thinking); function calling; tool use; structured outputs; open weights for self-host.
- **Pricing (as of 2026-10-13):** OpenRouter $0.075 / 1M input, $0.625 / 1M output; Novita $0.30 / $2.50; Zeplik ~$0.08 / $0.63 raw. Open-weight MIT = free self-host.
- **Architecture:** ~1T total parameters, ~63B active (MoE, 256 experts, 8 active + 1 shared); 80 layers, hidden 8192, 64 heads; hybrid linear attention (Lightning Attention + MLA 7:1); preserves ~20T-token Ling-2.0-1T pretraining investment via retrofit.

### Raw benchmarks found

Agent / tool use (tech report, vendor):

- PinchBench: **85.24**
- BFCL-v4: **70.64**
- ClawEval: **51.00**
- τ-bench (θ=6,000,000): **78.36**
- Terminal-Bench 2.0: **40.45**

Coding:

- SWE-bench Verified: **72.20** (tech report; community HF eval also added)
- LiveCodeBench-v6: **65.58**

Reasoning / knowledge (tech report, vendor):

- AIME26: **87.40**
- HMMT-Nov25: **81.93**
- IMO-AnswerBench: **65.81**
- ARCPrize: **50.94**
- GPQA-Diamond: **76.17**
- SuperGPQA: **58.32**
- C-SimpleQA: **76.53**; SimpleQA-Verified: **31.50**
- BBEH: **52.37**

Long context:

- MRCR (16K–256K): **80.37**
- LongBenchv2: **48.31**

Independent:

- Artificial Analysis Intelligence Index: **17** (mid-pack / weak on current AA suite)
- GPQA (pricepertoken listing): 75.2

### Normalized scores (1–100)

- **Tool use: 68/100.** PinchBench 85.24 and BFCL-v4 70.64 are strong; ClawEval 51 and Terminal-Bench 2.0 40.45 are mid. Capped by independent AA Intelligence Index 17 (weak on current agentic/reasoning suite composition).
- **Reasoning: 72/100.** Vendor AIME26 87.4 / HMMT 81.93 are solid; GPQA-D 76.17 is mid-flagship. Capped by instant-mode design (no deep thinking) and low independent AA index.
- **Context window: 80/100.** 262K native with MRCR 80.37 shows solid long-context retrieval. Capped by LongBenchv2 48 and no 1M tier.
- **Multimodal: 15/100.** Text-only model — no image/audio/video input. Capped at text-only floor.
- **Coding: 65/100.** SWE-bench Verified 72.2 is good for instant 63B-active; LCB-v6 65.58 is mid. Capped by no SWE-Pro figure and Terminal-Bench near-40.
- **Cost efficiency: 88/100.** MIT open weights + $0.075/$0.625 for a 1T-class model is strong value; free self-host. Capped by higher output price than flash-tier siblings and mid independent intelligence per dollar.
- **Overall Score: 60/100.** Mean of (68 + 72 + 80 + 15 + 65) / 5 = 60.0 → **60**. Best-fit recommendation: instant-response 1T flagship for latency-sensitive agent pipelines that need big-model knowledge + tool calling without thinking-mode latency; prefer Ling-3.0-flash for better price/performance or Ring-2.6-1T for deep reasoning.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (HF inclusionAI/Ling-2.6-1T, arXiv 2606.15079 Ling/Ring 2.6 tech report via emergentmind, openrouter.ai, zeplik.ai, llmreference.com, artificialanalysis.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
