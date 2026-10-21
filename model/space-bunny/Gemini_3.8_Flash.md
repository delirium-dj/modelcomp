# Space Bunny Alpha — findings by Gemini 3.8 Flash

- Source: OpenRouter Stealth (`stealth/space-bunny-alpha`) / OpenCode Zen (`opencode/space-bunny-free`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny (Space Bunny Alpha / MiniMax M3.1-Flash Preview)
- **Short description:** Frontier reasoning model with native multimodal input (text, image, video), 1M token context, high-throughput generation (>100 tok/s), and adjustable chain-of-thought reasoning (revealed as early preview of MiniMax M3.1-Flash).
- **Provider / access:** [OpenRouter](https://openrouter.ai/stealth/space-bunny-alpha) (`stealth/space-bunny-alpha`), OpenCode Zen free tier (`opencode/space-bunny-free`).
- **Release / knowledge:** September 23, 2026.
- **Lifecycle status:** Active preview on OpenRouter and OpenCode Zen (revealed as MiniMax M3.1-Flash precursor).
- **IDs:** `stealth/space-bunny-alpha`, `opencode/space-bunny-free`, `space-bunny`
- **Context window:** 1,000,000 tokens total (1M context window; max output 524,288 tokens).
- **Modalities:** Native multimodal input (text, image, video); text, code, structured JSON, and tool-calling output; configurable reasoning effort.
- **Pricing (as of 2026-10-21):** Free ($0.00 / 1M prompt and completion) during promotional stealth preview on OpenRouter and OpenCode Zen.
- **Architecture:** Large-scale proprietary Mixture-of-Experts architecture with native vision projection layers and integrated chain-of-thought reasoning.

### Raw benchmarks found

Agent / tool use:

- AI BENCHY high-effort evaluation: **7.5/10** (Tool Calling: **10/10**, Agentic: **10/10**)
- Autonomous self-verification: capable of analyzing screenshots of its own rendered output to perform multi-step bug fixing.
- OSWorld V2: **61.7** (under MiniMax M3.1-Flash evaluation)
- Terminal-Bench / Tau2-Bench: no standardized full-suite vendor run published.

Reasoning / knowledge:

- GPQA Diamond: **82.0%** (evaluated on 60-question sample)
- MMLU-Pro: **75.0%**
- Humanity's Last Exam (HLE): **46.1%** (evaluated on 300-question sample)
- Physics Simulation: struggles on complex multi-body physical dynamic reasoning (e.g. Newton's cradle).

Multimodal:

- Native text, image, and video ingestion within unified prompt sequences.
- Video game and interactive web UI generation directly from visual sketches.

Coding:

- DeepSWE v1.1: **73.7%**
- AI BENCHY Coding: **6.2/10**
- Fast prototyping and full-stack application scaffolding in Zed Editor and Hermes Agent harnesses.

Long context:

- 1,000,000 tokens context window verified on live API endpoints with up to 524K token generation capacity.

### Normalized scores (1–100)

- **Tool use: 68/100.** Flawless tool-calling triggers on AI BENCHY (10/10) and agentic loops, though lacking extensive enterprise harness coverage.
- **Reasoning: 74/100.** Strong deductive performance on GPQA Diamond (82.0% subset) and MMLU-Pro (75.0%), bounded by lower consistency on complex physics simulation.
- **Context window: 94/100.** Validated 1M context window with an unprecedented 524K max output ceiling.
- **Multimodal: 80/100.** Native vision and video multimodal ingestion capable of interactive frontend code generation from sketches.
- **Coding: 65/100.** Strong rapid prototyping and visual debugging, balanced by moderate algorithmic depth on rigorous benchmarks.
- **Cost efficiency: 100/100.** Zero-token fee ($0.00) free availability on OpenRouter and OpenCode Zen during the stealth trial.
- **Overall Score: 76/100.** Arithmetic mean of non-cost metrics: (68 + 74 + 94 + 80 + 65) / 5 = 76.2 → 76. An impressive, zero-cost anonymous stealth preview model excelling in multimodal agentic coding and massive context processing.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of OpenRouter stealth endpoint documentation, AI BENCHY results, and independent evaluator test logs.
