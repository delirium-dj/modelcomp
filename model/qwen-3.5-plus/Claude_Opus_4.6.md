# Qwen 3.5 Plus — findings by Claude Opus 4.6

- Source: Alibaba Cloud (`qwen-3.5-plus`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's premium hosted API model from the Qwen 3.5 family, released February 16, 2026. Built on the Qwen 3.5-397B-A17B MoE architecture with 1M-token context. Succeeded by Qwen 3.6+, 3.7+, and 3.8-Max.
- **Provider / access:** Alibaba Cloud Model Studio (hosted API only; not open-weights). Also available via third-party providers.
- **Release / knowledge:** 2026-02-16 release; knowledge cutoff not publicly confirmed.
- **IDs:** `alibaba/qwen-3.5-plus`
- **Context window:** 1,000,000 tokens total; max output not separately confirmed (estimated 65,536+).
- **Modalities:** Text + image + video in (native multimodal); text out; chain-of-thought reasoning; native agentic tool calling; JSON mode.
- **Pricing (as of 2026-02):** ~$0.30–2.00 / $1.20–6.00 per 1M tokens (input / output, varies by provider; competitive with Western mid-tier).
- **Architecture:** Mixture-of-Experts (MoE); 397B total parameters, ~17B active per token (Qwen 3.5-397B-A17B base). Hosted-only variant with additional optimizations.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found.
- Native agentic tool calling confirmed (qwen.ai).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (datacamp.com, deepinfra.com).
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Verified: **76.4%** (widely cited; ai.rs, medium.com).
- LiveCodeBench: **83.6%** (medium.com).
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- 1,000,000-token window confirmed. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 80/100.** Native agentic tool calling supported; no specific tool-use benchmarks published. Capped by absence of Terminal-Bench/Tau data.
- **Reasoning: 86/100.** GPQA Diamond 88.4% is strong for a Feb 2026 model. Chain-of-thought reasoning built in. Capped by being surpassed by later models (GPT-5.4 Pro at 94.4%).
- **Context window: 86/100.** 1M-token window is top-tier; unconfirmed max output. Capped by missing retrieval benchmarks and uncertain output ceiling.
- **Multimodal: 78/100.** Text + image + video input natively. Broader than vision-only competitors. Text-only output. Capped by no audio input and no generative output.
- **Coding: 85/100.** SWE-bench Verified 76.4% and LiveCodeBench 83.6% were strong at release. Capped by age — later models exceed these scores substantially.
- **Cost efficiency: 82/100.** Competitive pricing significantly below Western flagships. MoE efficiency with 17B active params. Capped by variable pricing across providers.
- **Overall Score: 83/100.** Mean of (80 + 86 + 86 + 78 + 85) / 5 = 83.0. Solid early-2026 model with strong reasoning and coding, showing age vs. Q4 frontier.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (qwen.ai, datacamp.com, deepinfra.com, medium.com, ai.rs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
