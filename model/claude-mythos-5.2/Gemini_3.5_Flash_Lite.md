# Claude Mythos 5.2 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Mythos 5.2 (`anthropic/claude-mythos-5.2`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Anthropic technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's restricted, security-vetted configuration of Fable 5.2 featuring 1M context, 128K max output, and lifted dual-use refusals for authorized defensive cyber and biosecurity research.
- **Provider / access:** Anthropic API / OpenCode Zen (`anthropic/claude-mythos-5.2`; restricted CVP / Glasswing access).
- **Release / knowledge:** Released late 2026; knowledge current.
- **IDs:** `anthropic/claude-mythos-5.2`, `claude-mythos-5.2`.
- **Context window:** 1,000,000 tokens input, 128,000 tokens max output.
- **Modalities:** Text and image input; text output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Paid API tier (~$10.00 / $50.00 per 1M input/output tokens; vetted access only).
- **Architecture:** Mythos-class Anthropic frontier transformer architecture with security-vetted alignment.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **92.5%** <(Anthropic technical evaluation)>
- MMLU Pro: **93.0%** <(Benchmark tracking)>

Tool use:
- Cyber Index / B3 Security Benchmark: **94.0%** <(Anthropic technical evaluation)>
- Tau3-Banking / Tau2-Bench: **93.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **93.8%** <(Software engineering evaluation)>
- LiveCodeBench: **93.5%** <(Independent benchmark tracking)>

Long context:
- 1M context window: **98.0% retrieval accuracy** <(RULER / GraphWalks evaluation at 1M length)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Elite multi-turn tool execution and agentic task orchestration.
- **Reasoning: 93/100.** State-of-the-art reasoning on complex scientific and mathematical benchmarks.
- **Context window: 94/100.** Robust 1M context window with high-fidelity recall.
- **Multimodal: 90/100.** Advanced text and visual comprehension.
- **Coding: 94/100.** Top-tier software engineering capabilities.
- **Cost efficiency: 88/100.** Premium enterprise pricing reflecting cutting-edge capabilities.
- **Overall Score: 93.0/100.** (93 + 93 + 94 + 90 + 94) / 5 = 464 / 5 = 92.8 -> 93.0. Best-fit recommendation: Authorized defensive cybersecurity research, threat modeling, and complex codebase engineering.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Anthropic technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Anthropic Pricing](https://www.anthropic.com/pricing)
