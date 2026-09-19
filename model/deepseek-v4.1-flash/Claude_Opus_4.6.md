# DeepSeek V4.1 Flash — findings by Claude Opus 4.6

- Source: DeepSeek / DeepSeek-V4.1-Flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash
- **Short description:** DeepSeek's efficient high-performance MoE model for long-horizon agentic workloads, coding, and reasoning. Replaces legacy V4 Flash and Vision Exp variants. Open-weight under MIT license.
- **Provider / access:** DeepSeek API (`deepseek-flash`), Hugging Face, third-party providers. Chat Completions API.
- **Release / knowledge:** 2026-09-10 release; knowledge cutoff not explicitly published.
- **IDs:** `deepseek/deepseek-v4.1-flash` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M); max output 384,000 tokens. FP4 KV caching with ~890 bytes/token (1/4 of V4 Flash). Verified via DeepSeek docs.
- **Modalities:** Text, image in (native vision); text out; tool calls.
- **Pricing (as of 2026-09-19):** Off-peak: $0.15/$0.60 per 1M tokens. Peak: $0.30/$1.20. Cache hit: $0.003–$0.006. Peak hours: 01:00–04:00, 06:00–10:00 UTC weekdays.
- **Architecture:** 552B-parameter MoE, Causal Encoder-Decoder; activates 8B (prefill) / 16B (decode) per token. Open-weight MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (source: search results; outperforms predecessor and rivals frontier)
- AutomationBench: **54.8%** (source: search results)
- CyberGym: **88.1%** (source: search results)
- Agent's Last Exam: **31.8%** (source: search results)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- DeepSWE v1.1: **74.2%** (source: search results; frontier-level)
- SWE-bench Verified: no verified public standalone score found
- LiveCodeBench: no verified public score found

Long context:

- 1M context with 384K max output; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 2.1 90.6% is frontier-leading (88%+ = 90–100 ref). AutomationBench 54.8% is exceptional. CyberGym 88.1% shows specialized strength. Minor cap from missing Tau3/GDPval.
- **Reasoning: 78/100.** Agent's Last Exam 31.8% is moderate. No GPQA/HLE published. CyberGym 88.1% shows domain reasoning. Capped by missing breadth of reasoning benchmarks.
- **Context window: 98/100.** 1M tokens with industry-leading 384K max output. FP4 KV caching is highly efficient. Top-tier context specs.
- **Multimodal: 65/100.** Text + image in (native); text out. No video/audio input. Text+image = 60–70 range.
- **Coding: 90/100.** DeepSWE 74.2% is frontier-level (ref: 74%+ = 90–100). TB 2.1 90.6% includes coding. Strong coding agent.
- **Cost efficiency: 97/100.** Off-peak $0.15/$0.60 is near-free. Even peak $0.30/$1.20 is very affordable. Per methodology: ~$0.15/$0.60 ≈ 97.
- **Overall Score: 85/100.** Mean of (93 + 78 + 98 + 65 + 90) / 5 = 84.8 ≈ 85. Exceptional value with frontier coding/tool use; reasoning data gaps and text+image multimodal cap the overall.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (DeepSeek docs, community benchmarks, Hugging Face); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
