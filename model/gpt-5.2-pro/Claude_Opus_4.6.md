# GPT-5.2 Pro — findings by Claude Opus 4.6

- Source: OpenAI (`gpt-5.2-pro`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's high-compute reasoning model designed for complex professional knowledge work, multi-step problem solving, and long-horizon tasks across science, mathematics, and software engineering.
- **Provider / access:** OpenAI API (`gpt-5.2-pro`) via Responses API and Chat Completions API; third-party routing via OpenCode / OpenRouter (`opencode/gpt-5.2-pro`).
- **Release / knowledge:** Released 2025-12-11; knowledge cutoff 2025-08-31.
- **IDs:** `openai/gpt-5.2-pro`, `opencode/gpt-5.2-pro`
- **Context window:** 400,000 tokens total; 128,000 max output tokens (verified via OpenAI API documentation).
- **Modalities:** Multimodal input (text, image); text output; configurable reasoning effort (medium, high, xhigh); tool use (function calling, File Search, MCP, Web Search); JSON mode.
- **Pricing (as of 2026):** $21.00 / $168.00 per 1M tokens (input / output); $2.10 cached input read per 1M tokens. Premium research-tier pricing.
- **Architecture:** Proprietary deep reasoning model utilizing extended test-time compute; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval: **70.9%** (wins or ties against human professionals across 44 occupations; OpenAI)
- SWE-bench Verified: **80.0%** (OpenAI, independent evaluations)
- SWE-bench Pro: **55.6%** (multi-language real-world software engineering; OpenAI)
- Tau-Bench / Tau2-Bench: **competitive enterprise agent performance reported** (OpenAI / third-party evaluations)
- Terminal-Bench 2.1: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (no tools; OpenAI)
- AIME 2025: **100.0%** (no tools; OpenAI)
- ARC-AGI-1: **86.2%** (verified abstract reasoning; OpenAI) / up to **90.5%** with peak test-time compute
- ARC-AGI-2: **52.9%** (verified abstract reasoning; OpenAI, DeepLearning.AI)
- FrontierMath (Tiers 1–3): **40.3%**; Tier 4: **14.6%** (OpenAI)
- Humanity's Last Exam (HLE): **36.6%** (benchgen.com)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **80.0%** (OpenAI)
- SWE-bench Pro: **55.6%** (OpenAI)
- LiveCodeBench: **87.99%** (high-reasoning configuration / LiveCodeBench variants; Vals AI)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 400,000 tokens total context window with 128,000 max output tokens confirmed via API specifications; no formal MRCR / RULER / GraphWalks retrieval score reported.

### Normalized scores (1–100)

- **Tool use: 84/100.** Outstanding GDPval win/tie rate (70.9%) and robust agentic tool orchestration via Responses API and MCP; capped by latency overhead on long-horizon tool execution loops and lack of standalone Terminal-Bench 2.1 public figures.
- **Reasoning: 93/100.** Exemplary scientific reasoning with GPQA Diamond at 92.4%, perfect 100.0% on AIME 2025, and ARC-AGI-2 at 52.9%; capped by steep drop-offs on ultra-hard frontier benchmarks like FrontierMath Tier 4 (14.6%) and HLE (36.6%).
- **Context window: 82/100.** 400K total context window with 128K max output capacity offers generous headroom for multi-document reasoning; capped by being below modern 1M+ frontier context windows.
- **Multimodal: 65/100.** Strong vision understanding and image input analysis alongside text; capped by the lack of audio, video, or native multimodal generation capabilities.
- **Coding: 81/100.** SWE-bench Verified at 80.0%, SWE-bench Pro at 55.6%, and LiveCodeBench near 88.0% demonstrate excellent multi-language bug-fixing and implementation skills; capped by specialized coding models surpassing it in subsequent generations.
- **Cost efficiency: 10/100.** Extremely steep pricing at $21.00 / $168.00 per 1M tokens restricts practical deployment to specialized high-value enterprise analysis and research.
- **Overall Score: 81/100.** Half-up mean of Tool use (84), Reasoning (93), Context window (82), Multimodal (65), and Coding (81) = 405 / 5 = 81. High-compute research flagship delivering extraordinary reasoning depth, reserved for mission-critical problem-solving where cost is secondary.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI Introducing GPT-5.2 Announcement](https://openai.com/index/introducing-gpt-5-2)
  - [OpenAI API Pricing](https://openai.com/api/pricing)
  - [OpenRouter GPT-5.2 Pro Model Card](https://openrouter.ai/openai/gpt-5.2-pro)
  - [DeepLearning.AI Frontier Evaluation Coverage](https://www.deeplearning.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
