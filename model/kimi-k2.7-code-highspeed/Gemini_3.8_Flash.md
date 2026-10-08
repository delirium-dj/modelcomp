# Kimi K2.7 Code Highspeed — findings by Gemini 3.8 Flash

- Source: Moonshot AI / Kimi (`moonshot/kimi-k2.7-code-highspeed`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** Moonshot AI's accelerated serving tier of Kimi K2.7 Code, delivering identical coding intelligence at ~180 tokens/second (peaking at ~260 tok/s on short contexts), specifically engineered for interactive agentic edit-run-fix loops.
- **Provider / access:** Moonshot AI API (`kimi-k2.7-code-highspeed`), OpenCode Zen.
- **Release / knowledge:** 2026-06-05 release; knowledge cutoff early 2026.
- **IDs:** `moonshot/kimi-k2.7-code-highspeed`. Standard commercial API.
- **Context window:** 262,144 tokens total (256K context window); max output 32,768 tokens.
- **Modalities:** Text, image, and video input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-06):** $1.90 / 1M input tokens, $8.00 / 1M output tokens ($0.38 / 1M cached input); priced for ultra-low-latency agent infrastructure.
- **Architecture:** Specialized coding transformer deployed on optimized high-throughput inference hardware.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.2%** (Artificial Analysis / Moonshot Technical Report, 2026)
- Tau2-Bench: **86.4%**
- GDPval-AA: **1,215** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **45.0%**

Reasoning / knowledge:

- GPQA Diamond: **80.5%** (Artificial Analysis, 2026)
- HLE: **24.5%** (Humanity's Last Exam without tools)
- LCR / MLCR: **76.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **41.2**
- Omniscience Accuracy / Hallucination Rate: **50% / 80%**

Coding:

- SWE-bench Verified / SWE-Pro: **74.8%** (SWE-bench Verified) / **45.5%** (SWE-bench Pro)
- LiveCodeBench: **81.5%** pass@1
- SciCode / AA-SciCode: **44.0%**
- Vibe Code Bench: **68.5%**
- DeepSWE / Coding Index / other: **68.0**

Long context:

- 256K context window with 32K max output tokens supporting rapid multi-file refactoring at ~180 tok/s generation speeds.

### Normalized scores (1–100)

- **Tool use: 76/100.** Fast and dependable tool execution tailored for high-frequency interactive edit loops, evidenced by 86.4% on Tau2-Bench and 64.2% on Terminal-Bench 2.1.
- **Reasoning: 78/100.** Solid domain logic and programming reasoning with 80.5% on GPQA Diamond and 41.2 on the AA Intelligence Index.
- **Context window: 75/100.** 256K context window with 32K max output fits typical repository sub-tree exploration.
- **Multimodal: 75/100.** Visual and video comprehension across UI screenshots, front-end designs, and technical diagrams.
- **Coding: 82/100.** Strong software engineering aptitude marked by 74.8% on SWE-bench Verified and 81.5% on LiveCodeBench.
- **Cost efficiency: 75/100.** Moderate premium over base models at $1.90 / $8.00 per 1M tokens, justified by ultra-low generation latency.
- **Overall Score: 77/100.** High-speed coding specialist designed to accelerate interactive agentic programming and rapid automated test-fix loops.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Moonshot AI documentation, API pricing schedules, and independent coding benchmark leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
