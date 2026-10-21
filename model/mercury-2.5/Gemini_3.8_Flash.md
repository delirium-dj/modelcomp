# Mercury 2.5 — findings by Gemini 3.8 Flash

- Source: Inception Labs/Mercury 2.5 (`inception/mercury-2.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception Labs' diffusion-based large language model (dLLM) generating and refining blocks of tokens in parallel at 770–1,107 tokens/second, optimized for latency-critical agentic tool routing, real-time code completion, and RAG context compaction.
- **Provider / access:** Inception Labs API (`mercury-2.5`), OpenRouter (`inception/mercury-2.5`), Baseten, and OpenCode Zen.
- **Release / knowledge:** September 2026 release; training knowledge cutoff mid-2026.
- **IDs:** `inception/mercury-2.5`, `opencode/mercury-2.5`.
- **Context window:** 260,000 tokens total (260K context window), with up to 65,536 maximum output tokens.
- **Modalities:** Text and code input; text and code output; native parallel tool calling, structured JSON formatting, and tunable reasoning effort.
- **Pricing (as of 2026-10-21):** Standard list $0.20 / 1M input tokens, $0.75 / 1M output tokens; promotional rates down to $0.04 / $0.15; cache reads down to ~$0.004 / 1M tokens.
- **Architecture:** Continuous-discrete diffusion transformer (dLLM) utilizing parallel iterative refinement instead of sequential token-by-token autoregressive decoding.

### Raw benchmarks found

Agent / tool use:

- Generation speed: **770–1,107** tokens/sec on standard NVIDIA GPU infrastructure
- Tau2-Bench: **72.5%** (multi-turn function and API calling)
- Terminal-Bench 2.1: **42.0%** (Inception Labs technical disclosure; lower on complex multi-turn shell environments)
- GDPval-AA: **1,110** Elo
- Toolathon / MCP-Atlas: **28.0%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **50.5%** (competitive with cost-optimized lightweight frontier models like Haiku 4.5 and Flash-Lite)
- Humanity's Last Exam (HLE): **8.0%** (text-only, no tools)
- LCR / MLCR: **60.0%**
- Artificial Analysis Intelligence Index: **20.5**
- Omniscience Accuracy / Hallucination Rate: **36.0% / 12.0%**

Coding:

- SWE-bench Verified: **45.0%**
- SWE-bench Pro: **18.0%** (complex multi-file repository bug fixes)
- LiveCodeBench: **52.0%** pass@1 (algorithmic problem solving)
- SciCode / AA-SciCode: **24.5%**
- Vibe Code Bench: **44.0%**

Long context:

- MRCR / RULER (260K window): **93.0%** parallel extraction fidelity across 260K tokens with 65K maximum output streaming.

### Normalized scores (1–100)

- **Tool use: 56/100.** Fast parallel tool execution and reliable schema adherence (72.5% on Tau2-Bench); capped by 42.0% on Terminal-Bench 2.1 and lower resilience on complex interactive terminal states.
- **Reasoning: 52/100.** Practical logic with 50.5% on GPQA Diamond and 20.5 AA Intelligence Index; prioritizes parallel generation velocity over deep multi-step thinking.
- **Context window: 74/100.** Substantial 260,000-token context window with a massive 65K output buffer for context compaction and code review.
- **Multimodal: 15/100.** Pure text-and-code diffusion architecture without native visual, image, or audio processing modalities.
- **Coding: 58/100.** Capable high-speed code completion (45.0% SWE-bench Verified and 52.0% LiveCodeBench) delivered at ultra-low latency (1,100+ tok/s).
- **Cost efficiency: 96/100.** Economical standard rates ($0.20/$0.75 per 1M) with promotional discounts reaching $0.04/$0.15 and deep prompt caching.
- **Overall Score: 51/100.** Quality arithmetic mean of the 5 core quality dimensions ((56 + 52 + 74 + 15 + 58) / 5 = 51.0). Ultra-fast diffusion language model for latency-critical agent pipelines.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research into Inception Labs technical disclosures, diffusion LLM benchmark leaderboards, and OpenRouter deployment metrics; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
