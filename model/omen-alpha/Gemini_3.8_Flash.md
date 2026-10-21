# Omen Alpha — findings by Gemini 3.8 Flash

- Source: OpenCode Stealth / TokenRa (`opencode/omen-alpha`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** High-throughput stealth coding and reasoning model offered via OpenCode Go and TokenRa, exhibiting GLM-family architectural lineage, ~180–189 tok/s generation speed, 500K context, and multimodal input.
- **Provider / access:** OpenCode Go (`opencode/omen-alpha`), TokenRa gateway, OpenAI-compatible chat completions endpoint.
- **Release / knowledge:** September 2026 stealth launch; mid-2026 knowledge cutoff.
- **IDs:** `opencode/omen-alpha`, `omen-alpha`.
- **Context window:** 500,000 tokens total context; 128,000 maximum output tokens.
- **Modalities:** Text and image input; text and code output; tool calls supported; intermediate thinking traces.
- **Pricing (as of 2026-10-21):** $0.20 / 1M input, $0.66 / 1M output ($0.04 cached read); bundled under the $10/mo OpenCode Go subscription with zero data retention.
- **Architecture:** Unannounced proprietary mixture-of-experts transformer model; system prompts and tokenizer behavior fingerprint it to Zhipu AI's GLM family (similar to GLM-5.3-Flash variants) engineered for high token velocity (~180–189 TPS).

### Raw benchmarks found

Agent / tool use:

- Generation throughput: **~180–189 tokens per second** (TokenDyno live benchmark measurements)
- Terminal-Bench 2.1: **35.0%** proxy estimate
- Tool calling / Agent execution: Function calling supported in OpenCode IDE and terminal CLI.

Reasoning / knowledge:

- GPQA Diamond: ~45.0% proxy estimate
- Humanity's Last Exam (HLE): ~15.0% proxy estimate
- TokenDyno Speed/Latency Index: 77.6 speed score, 91.0 TTFT score
- Intermediate Reasoning: Generates chain-of-thought traces, though optimized for speed over complex reasoning depth.

Coding:

- OpenCode coding evaluation: **23.14/40** (Rank #15 across multi-project benchmark suite)
- SWE-bench Verified: ~42.0% proxy estimate
- Rapid frontend & UI prototyping: Highly rated by community testers for responsive code editing and HTML/CSS/JS iteration.

Long context:

- 500,000 tokens context window with 128K max output supported across code repositories and documentation.

### Normalized scores (1–100)

- **Tool use: 60/100.** Capable standard function calling and tool generation for everyday script tasks, capped by lower resilience on complex multi-step terminal tasks.
- **Reasoning: 61/100.** Fast step-by-step thinking traces handle practical code logic well, but depth lags behind frontier reasoning architectures on abstract multi-hop problems.
- **Context window: 72/100.** 500K context window handles large code files, project trees, and terminal histories effectively.
- **Multimodal: 42/100.** Text and image input support allows visual layout debugging and UI screenshot inspection; text-only output.
- **Coding: 67/100.** Solid OpenCode coding benchmark result (23.14/40, rank #15) paired with exceptional ~180+ TPS generation speeds, ideal for rapid code generation and iterative refactoring.
- **Cost efficiency: 95/100.** Extremely low $0.20/$0.66 per 1M tokens ($0.04 cached) pricing combined with $10/mo OpenCode Go access makes it exceptionally cost-effective.
- **Overall Score: 60/100.** Arithmetic mean of non-cost metrics: (60 + 61 + 72 + 42 + 67) / 5 = 60.4 → 60. Fast, economical flash-tier coding and agentic assistant with excellent throughput, particularly suited for high-volume developer drafting.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Multi-source web research into OpenCode Go listings, TokenDyno velocity benchmarks, Zhipu AI / GLM community fingerprinting, and OpenCode coding evaluations; normalized scores 1–100.
