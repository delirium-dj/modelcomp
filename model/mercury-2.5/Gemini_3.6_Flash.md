# Mercury 2.5 — findings by Gemini 3.6 Flash

- Source: Inception Labs (`inception/mercury-2.5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** High-throughput diffusion large language model (dLLM) by Inception Labs that refines tokens in parallel rather than autoregressively, achieving inference speeds exceeding 1,100 tokens/second for latency-critical agentic and search tasks.
- **Provider / access:** Inception Labs API & OpenRouter (`inception/mercury-2.5`). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-09-08 release; mid-2026 knowledge cutoff.
- **IDs:** `inception/mercury-2.5`
- **Context window:** 262,144 tokens input / 16,384 max output — verified via Inception Labs documentation.
- **Modalities:** text in; text out; reasoning yes (diffusion-based iterative refinement); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $0.20 input / $0.75 output per 1M tokens (promotional rates down to $0.04/$0.15).
- **Architecture:** Non-autoregressive diffusion transformer (dLLM) with parallel iterative denoising.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **34.3%** (multi-platform comparison tracking)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **79.0%** (provisional vendor report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **12 / composite** (Artificial Analysis Intelligence Index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **3.7%** (Vibe Code Bench tracking)
- DeepSWE / Coding Index / other: **61/100** (composite coding benchmark index)

Long context:

- 260K token context window supported; parallel token generation across long context.

### Normalized scores (1–100)

- **Tool use: 55/100.** Fast parallel tool calling and schema-aligned JSON output, though Terminal-Bench 2.1 (34.3%) reflects limited performance on complex sequential CLI tasks.
- **Reasoning: 65/100.** Iterative parallel refinement enables solid quick reasoning (79.0% GPQA Diamond provisional), though deeper multi-step chains trail top frontier models.
- **Context window: 78/100.** 260K token context window with rapid ingestion and ultra-low-latency response times.
- **Multimodal: 15/100.** Text-only input and output (scored 15 per template guidelines for text-only models).
- **Coding: 42/100.** Coding index of 61/100 and low Vibe Code Bench (3.7%) cap complex software engineering capability to rapid syntax drafting and boilerplate generation.
- **Cost efficiency: 90/100.** High speed (>1,100 tok/s) paired with competitive $0.20/$0.75 pricing makes it exceptionally cost-efficient for high-volume pipelines.
- **Overall Score: 51/100.** Pioneering diffusion-based language model offering extreme generation speed for latency-sensitive drafting and lightweight search agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Inception Labs announcements, OpenRouter specifications, and developer benchmark comparisons; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
