# Hy4 preview — findings by GPT 6 Astra

- Source: Tencent / Hy4 preview
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Hy4 preview
- **Short description:** This Hy4 folder is assessed using Tencent's publicly released preview checkpoint; no separate final Hy4 release is assumed. Designed for coding and sustained tool workflows.
- **Provider / access:** OpenRouter Chat Completions and self-hosted compatible servers.
- **Release / knowledge:** August 28, 2026 listing date; knowledge cutoff unverified.
- **IDs:** Weights `tencent/Hy4-preview`; hosted `tencent/hy4-preview`. No verified Zen Free ID.
- **Context window:** 1,048,576 hosted tokens; 64,000 maximum completion tokens.
- **Modalities:** Text in/out, configurable reasoning, tool calls and hosted JSON-schema outputs.
- **Pricing (as of 2026-10-07):** Observed discounted Tencent Cloud route: $0.7506 input / $2.2509 output / $0.0378 cache read per million. Other listed routes: $0.834/$2.501/$0.042. These are paid hosting prices, not a free-weight inference entitlement. [Route documentation](https://openrouter.ai/tencent/hy4-preview)
- **Architecture:** 770B backbone / 49B active, plus a 10B MTP layer; MoE, gated sparse attention, Apache-2.0 weights. Default high reasoning; optional no-think. Publisher acknowledges excessive reasoning and repeated verification. [Model card](https://huggingface.co/tencent/Hy4-preview)

### Raw benchmarks found

Publisher appendix, visually inspected: [official benchmark image](https://huggingface.co/tencent/Hy4-preview/resolve/main/assets/benchmark-appendix.jpg). Highest available reasoning settings; results are not universally comparable across scaffolds.

Agent / tool use:
- Terminal-Bench 2.1 **85.4%**: Claude Code, up to 500 turns and 12 hours.
- GDPval-AA v2 **1678 Elo**, marked official in the appendix.
- MCP-Atlas public **83.7%**; Toolathon-Verified **74.1%**.
- Tau3-Banking and Claw-Eval: no verified public score found.

Reasoning / knowledge:
- GPQA Diamond **92.3%**; HLE text-only **43.4%** without tools / **55.4%** with tools; CritPt **16.9%**.
- Current AA Intelligence Index, LCR/MLCR and Omniscience: no verified public score found.

Coding:
- DeepSWE **64.3%**, mini-swe-agent; SWE-bench Pro **65.7%**, swe-agent.
- SWE Atlas codebase Q&A **64.0%**, test writing **57.8%**, refactoring **53.3%**.
- LiveCodeBench, SciCode and Vibe Code Bench: no verified public score found.

Long context:
- No verified public retrieval score found at the advertised 1M limit. Architecture capacity is not retrieval accuracy.

[OpenRouter's own endpoint tests](https://openrouter.ai/tencent/hy4-preview) separately show Tencent Cloud GPQA Diamond **90.7%** and TAU-Bench **75.3%**. The page does not establish TAU version here; these are not substituted for the publisher's settings.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 85.4%, MCP-Atlas 83.7% and GDPval 1678 support strong agents; substantial scaffold budgets qualify the result.
- **Reasoning: 88/100.** GPQA 92.3% and text-only HLE 43.4% are strong, with CritPt and absent broad independent indexing limiting confidence.
- **Context window: 95/100.** Verified 1M tier; no retrieval measurement supports the maximum.
- **Multimodal: 15/100.** Text-only released model; frontend design skill does not establish visual input support.
- **Coding: 84/100.** DeepSWE 64.3% and SWE-Pro 65.7% support strong coding below the methodology's top tier.
- **Cost efficiency: 92/100.** Approximately $0.75/$2.25 hosting offers good value; discount and reasoning-token usage can change effective cost.
- **Overall Score: 73/100.** Half-up mean: (85 + 88 + 95 + 15 + 84) / 5 = 73.4. Broad text-agent capability with no native multimodal coverage.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-07 UTC
- Method: Independent public-source research; scores are normalized interpretations, not vendor scores.
- Future sources: Add a separate signed report using the same headings.

