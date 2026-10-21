# Kimi K2.7 Code Highspeed — findings by Gemini 3.8 Flash

- Source: Moonshot AI / Kimi (`moonshot/kimi-k2.7-code-highspeed`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** Moonshot AI's accelerated serving tier of Kimi K2.7 Code, featuring a 1-trillion parameter Mixture-of-Experts (MoE) architecture with 32B active parameters per token, delivering 180–260+ tokens/second generation speeds for interactive agentic coding loops.
- **Provider / access:** Moonshot AI API (`kimi-k2.7-code-highspeed`), [OpenRouter](https://openrouter.ai/models/moonshot/kimi-k2.7-code), and CoreWeave.
- **Release / knowledge:** 2026-06-05 release; knowledge cutoff early 2026.
- **IDs:** `moonshot/kimi-k2.7-code-highspeed`
- **Context window:** 262,144 tokens total (256K context window); max output 32,768 tokens.
- **Modalities:** Text, image, and video input; text, code, structured JSON, and tool-calling output; mandatory thinking mode.
- **Pricing (as of 2026-10-21):** $1.90 / 1M input tokens, $8.00 / 1M output tokens ($0.38 / 1M cached input); priced for ultra-low latency interactive developer workflows.
- **Architecture:** 1T-parameter Mixture-of-Experts (32B active) multimodal architecture deployed on optimized high-throughput inference infrastructure.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **64.2%–67.0%** ([Moonshot Technical Report](https://kimi.ai))
- Tau2-Bench: **86.4%**
- Kimi Claw 24/7 & MCP Atlas: ~10% improvement in autonomous agent execution over K2.6
- Generation speed: **180–260 tok/s** (peaking at ~296 tok/s on optimized CoreWeave clusters) ([Artificial Analysis](https://artificialanalysis.ai/models/kimi-k2-7-code))

Reasoning / knowledge:
- GPQA Diamond: **80.5%–89.6%** (harness-dependent; Moonshot reported 89.6%)
- Artificial Analysis Intelligence Index: **25.8**
- Humanity's Last Exam (HLE, no tools): **24.5%**
- LCR / MLCR: **76.0%**

Coding:
- SWE-bench Verified: **74.8%–78.2%**
- SWE-bench Pro: **45.5%–58.6%**
- LiveCodeBench: **81.5%–82.0%** pass@1
- Kimi Code Bench v2: **62.0** (+21.8% over K2.6)
- Program Bench: **53.6** (+11.0% over K2.6)

Long context:
- 262,144 tokens (256K) context window with 32K max output tokens supporting rapid multi-file refactoring and automated test-fix loops.

### Normalized scores (1–100)

- **Tool use: 76/100.** Fast and dependable tool execution tailored for high-frequency interactive edit loops, evidenced by 86.4% on Tau2-Bench and 64.2%–67.0% on Terminal-Bench 2.1.
- **Reasoning: 78/100.** Solid domain logic and programming reasoning with 80.5%–89.6% on GPQA Diamond and mandatory thinking mode reasoning.
- **Context window: 75/100.** 256K context window with 32K max output fits repository sub-tree exploration and codebase comprehension.
- **Multimodal: 75/100.** Visual and video comprehension across UI screenshots, front-end designs, and technical diagrams.
- **Coding: 82/100.** Strong software engineering aptitude marked by 74.8%–78.2% on SWE-bench Verified and 81.5%–82.0% on LiveCodeBench.
- **Cost efficiency: 75/100.** Moderate premium over base models at $1.90 / $8.00 per 1M tokens, justified by ultra-low generation latency (~180+ tok/s).
- **Overall Score: 77/100.** Arithmetic mean of five quality dimensions: (76 + 78 + 75 + 75 + 82) / 5 = 77.2 → 77. High-speed coding specialist designed to accelerate interactive agentic programming and rapid automated test-fix loops.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research into Moonshot AI documentation, Artificial Analysis evaluations, and OpenRouter model cards; scores are normalized 1–100 interpretations, not official vendor scores.
