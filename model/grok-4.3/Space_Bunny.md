# Grok 4.3 — findings by Space Bunny Alpha

- Source: SpaceXAI / Grok 4.3
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3 (high reasoning)
- **Short description:** SpaceXAI's reasoning-first model for agentic tool use, instruction following, multimodal workflows, and long-context enterprise analysis. **Status as of 2026-09-29: deprecated by Artificial Analysis, which names Grok 4.6 as the suggested successor** and restricts ongoing measurement to the default 10k input token workload, so all non-10k results are now historical and no longer updated.
- **Provider / access:** xAI API `grok-4.3` (alias `grok-4.3-latest`); OpenRouter `x-ai/grok-4.3`; Amazon Bedrock `xai.grok-4.3` through its OpenAI-compatible Mantle endpoint. Artificial Analysis lists it as reachable through **3 API providers**.
- **Release / knowledge:** OpenRouter dated slug `grok-4.3-20260430`; released 2026-04-30 (Artificial Analysis FAQ confirms 2026-04-30). No verified exact knowledge cutoff found.
- **IDs:** xAI `grok-4.3` / `grok-4.3-latest`; OpenRouter `x-ai/grok-4.3`; Bedrock `xai.grok-4.3`.
- **Context window:** 1,000,000 tokens (confirmed by Artificial Analysis, accessed 2026-09-29); xAI documents higher-context pricing above 200K.
- **Modalities:** Text and image input, text output; configurable reasoning (`none`, `low`, `medium`, `high`, with the current docs also listing `xhigh`), function/tool calling, and structured outputs. OpenRouter additionally lists file input.
- **Pricing (as of 2026-09-29):** xAI standard pricing is $1.25 input / $0.20 cached input (an **84% cache discount**) / $2.50 output per 1M tokens, giving a blended $0.64 per 1M on a 7:2:1 cache-hit/input/output ratio. Requests above 200K use higher rates. Artificial Analysis ranks it **#6/216 for cost**, at **$0.21 per Intelligence Index task** — the cheapest tier among models at this intelligence level.
- **Speed / latency:** **112.6 output tokens/s** (rank #42/216; class median 79.1) and **TTFT 30.51 s** (class median 3.89 s, i.e. at the high end because of reasoning time). It is noted as fairly concise, generating 87M output tokens on the index vs. an 88M median.
- **Architecture:** Proprietary; parameter count and architecture were not publicly disclosed.

### Raw benchmarks found

> Artificial Analysis measurements below are for the high-reasoning variant unless noted. Its Intelligence Index was revised after launch, so current and original launch values are not directly comparable. **Because the model is now deprecated, all of these are frozen historical measurements**; only the 10k-token workload continues to be tracked.

Agent / tool use:

- Tau2-Bench Telecom: **97.7%** (Artificial Analysis high-reasoning run).
- IFBench instruction following: **81.3%** (Artificial Analysis high reasoning).
- Terminal-Bench Hard: **37.9%** (Artificial Analysis high reasoning).
- GDPval-AA: **21.2%**; the release measurement was **1,500 Elo** (Artificial Analysis).
- Agentic Index: **15.5** (OpenRouter Artificial Analysis metadata).
- AutomationBench-AA / AA-Briefcase v1.1 / GDPval-AA v2.1: **no verified public exact value found** for this model. (For reference on the successor: Grok 4.6 high scores 66.7% on AutomationBench-AA.)

Reasoning / knowledge:

- GPQA Diamond: **90.1%**; HLE: **37.2%** (Artificial Analysis high reasoning).
- AA-LCR v1.1 long-context reasoning: **73.0%** (Artificial Analysis high reasoning).
- Artificial Analysis Intelligence Index v4.3.2: **25**, rank **#114/216** (Artificial Analysis, accessed 2026-09-29). **Confirmed and rounded from the 24.9 previously recorded — the value did not move under the v4.3.2 re-base**; only the rank denominator and the "below average" framing (median 26) are new. The original 2026-04-30 release evaluation was **53** under the then-current index.
- AA-Omniscience Accuracy / Non-Hallucination Rate: **34.8% / 74.2%** (Artificial Analysis high reasoning).
- CritPt: **8.0%** (Artificial Analysis high reasoning).

Coding:

- Artificial Analysis Coding Index: **42.2** (high reasoning).
- SciCode: **48.3%** (Artificial Analysis high reasoning).
- Terminal-Bench 4.0 (the current index harness): **no verified public exact value found** for this model.
- No verified public SWE-bench Verified, LiveCodeBench, or Vibe Code Bench score found for Grok 4.3.

Long context:

- No long-context retrieval benchmark at the full 1M window was found. The 1M limit is a verified specification, not a retrieval-quality result; AA-LCR v1.1 at 73.0% is the closest long-context measurement.

### Normalized scores (1–100)

- **Tool use: 88/100.** Unchanged. Tau2 Telecom at 97.7% and IFBench at 81.3% demonstrate exceptional structured tool use and instruction following; the Agentic Index at 15.5 and Terminal-Bench Hard at 37.9% cap the score.
- **Reasoning: 84/100.** Unchanged. GPQA Diamond at 90.1% is frontier-level, while HLE at 37.2%, CritPt at 8.0%, and the confirmed v4.3.2 Intelligence Index of 25 (rank #114/216, below the 26 median) cap an otherwise strong result.
- **Context window: 98/100.** Unchanged. The verified 1M-token window is near the methodology's top tier; no full-window retrieval benchmark was found.
- **Multimodal: 64/100.** Unchanged. Text and image input are supported and text is returned, but no exact-model visual benchmark was verified.
- **Coding: 72/100.** Unchanged. SciCode at 48.3%, Terminal-Bench Hard at 37.9%, and Coding Index at 42.2 show solid coding ability without frontier-leading independent evidence.
- **Cost efficiency: 91/100.** Unchanged. At $1.25 input and $2.50 output per 1M tokens with an 84% cache discount and $0.21 per index task (#6/216 for cost), first-party inference is inexpensive; the premium above 200K reduces the benefit for maximum-context work.
- **Overall Score: 81.2/100.** (88 + 84 + 98 + 64 + 72) / 5 = 406 / 5 = 81.2. **Arithmetically corrected from the previously written "81"**; the five dimensions are unchanged. Strong agentic execution, high-tier reasoning, and a 1M window, but Artificial Analysis now marks the model **deprecated in favour of Grok 4.6**, so new deployments should move to the successor.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public xAI model documentation, Artificial Analysis model page and Intelligence Index v4.3.2 data (accessed 2026-09-29), the Artificial Analysis v4.3 index announcement, OpenRouter API metadata, and Amazon Bedrock documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4_3_Recheck.md`, using the same headings.
