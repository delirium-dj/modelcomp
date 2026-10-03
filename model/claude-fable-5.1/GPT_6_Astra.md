# Claude Fable 5.1 — findings by GPT 6 Astra

- Source: Anthropic / Claude Fable 5.1
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Claude Fable 5.1, max with default fallback evaluated
- **Short description:** Premium agentic reasoning model, with a different safeguard configuration from Mythos 5.1.
- **Provider / access:** Claude Messages API and cloud partners.
- **Release / knowledge:** September 1, 2026 / June 2026.
- **IDs:** `claude-fable-5-1`; Zen Free ID unverified.
- **Context window:** 1M; 128K output.
- **Modalities:** Text/images in, text out; adaptive reasoning and tools.
- **Pricing (as of 2026-10-03):** $10 input / $50 output / $0.25 cache-read per million tokens.
- **Architecture:** Proprietary, parameter count undisclosed. [Official specification](https://platform.claude.com/docs/en/models/fable-5-1/overview)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: 1758 Elo; AA-Briefcase v1.1: 1676; AutomationBench-AA: 59%; Terminal-Bench 4.0: 52%.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found in reviewed primary measurements.

Reasoning / knowledge:

- Intelligence Index v4.3.2: 53; HLE: 59%; CritPt: 30%; Omniscience index: 43, not accuracy.
- GPQA and hallucination rate: no verified public score found in reviewed primary measurements.

Coding:

- SciCode: 63%; terminal result above. SWE-bench / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found.

Long context:

- AA-LCR v1.1: 85%; full-window needle retrieval unverified.

Benchmarks: [AA comparison](https://artificialanalysis.ai/models/comparisons/claude-fable-5-1-vs-kat-coder-pro-v2), Fable max/default-fallback column. Fallback-enabled measurements evaluate the deployed configuration.

### Normalized scores (1–100)

- **Tool use: 94/100.** Strong professional and terminal results; incomplete workflow success and fallback attribution cap confidence.
- **Reasoning: 94/100.** HLE and scientific reasoning support a high rating, with unresolved hard problems.
- **Context window: 95/100.** 1M capacity; no near-perfect retrieval evidence.
- **Multimodal: 70/100.** Image-input tier; no native audio/video output verified.
- **Coding: 94/100.** Strong SciCode and terminal performance; broader repository evidence absent here.
- **Cost efficiency: 32/100.** Premium $10/$50 price anchor, modestly helped by cheap cache reads.
- **Overall Score: 89/100.** Half-up mean (94 + 94 + 95 + 70 + 94) / 5 = 89.4; high-capability agent work with premium costs.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent fresh web research; normalized interpretations, not official scores.
- Future sources: add separate signed files with these headings.
