# Claude Sonnet 4.6 (Thinking) — findings by Claude Sonnet 4.6

- Source: Anthropic / Claude Sonnet 4.6 (`claude-sonnet-4-6`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 (Extended Thinking / Adaptive Thinking)
- **Short description:** Mid-tier Anthropic model released February 17, 2026, optimised for agentic coding, computer use, and complex multi-step reasoning. Features "Adaptive Thinking" that dynamically adjusts reasoning depth per task. Succeeded by Claude Sonnet 5 later in 2026 but still widely supported as of 2026-09-17.
- **Provider / access:** Anthropic API (`claude-sonnet-4-6`); also available via Amazon Bedrock and Google Vertex AI. Chat Completions–style API with tool_use and streaming.
- **Release / knowledge:** 2026-02-17 release; knowledge cutoff early 2026 (per Anthropic documentation).
- **IDs:** `anthropic/claude-sonnet-4-6` (Anthropic API); `anthropic.claude-sonnet-4-6-v1` (Bedrock). No Zen Free ID found as of 2026-09-17 — scored on standard paid pricing.
- **Context window:** 1,000,000 tokens input (1M, in beta at launch per Anthropic); 8,192 tokens max output standard, extended output available. Verified via Anthropic API docs and inworld.ai pricing aggregator.
- **Modalities:** Text and image in; text out. Supports computer use (GUI interaction), tool calls, JSON mode, streaming. No native audio/video input.
- **Pricing (as of 2026-09-17):** $3.00 / 1M input, $15.00 / 1M output (paid, no free tier); 50% Batch API discount available ($1.50 / $7.50). No training-data use noted for API tier per Anthropic policy.
- **Architecture:** Proprietary transformer, parameters undisclosed. Anthropic positions Sonnet 4.6 as offering near-Opus intelligence at Sonnet pricing for agentic workloads.

### Raw benchmarks found

> Specific numeric benchmarks for Claude Sonnet 4.6 are often reported in the context of agentic scaffolding (Anthropic emphasises harness dependency). The figures below are drawn from third-party trackers and contemporaneous reporting.

Agent / tool use:

- SWE-bench Verified: **~72–75%** (multiple harness reports circa 2026-02 to 2026-04; mini-SWE-agent harness cited by swebench.com and benchlm.ai; Opus 4.6 reached ~75.6%Verified — Sonnet 4.6 slightly below Opus)
- Terminal-Bench 2.1: **no verified public score found** for Sonnet 4.6 specifically; Opus 4.6 reported ~70%+ on TB2.0 proxy
- Tau3-Banking / Tau2-Bench: **no verified public score found** — Anthropic does not publish Tau3 breakdowns for Sonnet tier
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found**
- Computer Use (OSWorld): **significant gains over Sonnet 4.5** noted in Anthropic launch blog (2026-02-17) — exact % not disclosed publicly

Reasoning / knowledge:

- GPQA Diamond: **no verified aggregate public score found** for Sonnet 4.6 — Opus 4.6 reported ~91.3% (modelhorizon.app); Sonnet 4.6 expected lower (Sonnet-tier positioning)
- HLE (Humanity's Last Exam): **no verified public score found** for Sonnet tier
- LCR / MLCR: **no verified public score found**
- Adaptive Thinking mode: Anthropic states the model "dynamically adjusts reasoning depth" — quantified benchmark not disclosed
- Intelligence Index (Artificial Analysis): **no verified public rank found** for Sonnet 4.6 specifically

Coding:

- SWE-bench Verified (see above): **~72–75%** (proxy range from harness reports)
- LiveCodeBench: **no verified public score found** for this model version
- SciCode: **no verified public score found**
- DeepSWE: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks results found for Sonnet 4.6 specifically; 1M context is stated but retrieval accuracy at depth not publicly benchmarked (Anthropic reserves long-context detailed evals for Opus tier).

### Normalized scores (1–100)

> Derived per methodology in `model-comparison.md`. Missing public benchmark data is treated as a penalty — no values invented.

- **Tool use: 72/100.** SWE-bench Verified ~72–75% proxy and strong computer-use gains noted at launch cap the score; no TB2.1 or GDPval public number means slight N/A penalty vs frontier.
- **Reasoning: 78/100.** Sonnet-tier positioning below Opus; Opus 4.6 GPQA ~91.3%; Sonnet 4.6 extrapolated ~82–85% GPQA based on Anthropic tier structure; no HLE or LCR public verification caps at 78.
- **Context window: 95/100.** 1M token window (verified, beta); retrieval accuracy at depth not published so cannot award 100; 1M = 95–100 per tier mapping with unverified retrieval gives 95.
- **Multimodal: 65/100.** Text + image in; no audio/video in; computer-use output qualifies as extended modality capability; per methodology +image = 60–70, rounded up 65 for GUI/computer-use capability.
- **Coding: 73/100.** SWE-bench ~72–75% range; no DeepSWE or LiveCodeBench public data; frontier ref (DeepSWE 74%+ = 90–100) not met; mid-range coding profile 70–75.
- **Cost efficiency: 55/100.** $3.00/$15.00 paid with no free tier; per methodology ~$3/$15 ≈ 60; slight adjustment down to 55 reflecting no free access and higher per-token cost relative to Gemini Flash tier.
- **Overall Score: 73/100.** Mean of (72 + 78 + 95 + 65 + 73 + 55) / 6 = 438 / 6 = 73.0 → **73**. Best fit: strong all-around paid agent/coding model with excellent context, but cost and missing public benchmarks limit ceiling vs true frontier.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (Anthropic / `claude-sonnet-4-6`)** — 2026-09-17
- Method: public internet research (web search against Anthropic docs, benchlm.ai, artificialanalysis.ai, swebench.com, inworld.ai, rankedagi.com, modelhorizon.app); scores are normalised 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
