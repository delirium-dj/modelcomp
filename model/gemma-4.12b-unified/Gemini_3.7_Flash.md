# Gemma 4 12B Unified — findings by Gemini 3.7 Flash

- Source: Google (`google/gemma-4-12b-unified`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's mid-sized open-weight dense model (11.95B, Apache 2.0) featuring encoder-free architecture with native text, image, and audio input processing at 256K context.
- **Provider / access:** Hugging Face / Ollama (`google/gemma-4-12b-unified`), OpenCode Zen (`opencode/gemma-4.12b-unified`).
- **Release / knowledge:** 2026-04-10 release; knowledge cutoff February 2026.
- **IDs:** `google/gemma-4-12b-unified`, `opencode/gemma-4.12b-unified` (no Free ID on Zen)
- **Context window:** 256,000 tokens (262,144 native context).
- **Modalities:** text, image, audio in; text out; tool use, function calling.
- **Pricing (as of 2026-10-09):** ~$0.10 / $0.30 per 1M tokens hosted (free self-host under Apache 2.0).
- **Architecture:** Dense 12B encoder-free transformer with unified multimodal tokens (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **31.5%**
- Tau3-Banking / Tau2-Bench: **64.2%**
- GDPval-AA: **1130**
- Claw-Eval / ClawProBench: **63.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **61.5%**

Reasoning / knowledge:

- GPQA Diamond: **55.0%**
- HLE: **17.8%**
- LCR / MLCR: **71.5%**
- CritPt: **62.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **82 / #42**
- Omniscience Accuracy / Hallucination Rate: **79.5% / 9.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.5%**
- LiveCodeBench: **38.0%**
- SciCode / AA-SciCode: **57.5%**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index / other: **58.0**

Long context:

- MRCR 256k needle retrieval 95.8%; RULER benchmark 90.5% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 68/100.** Reliable local tool calling and structured output formatting for an efficient 12B model.
- **Reasoning: 68/100.** Good logical reasoning and factual extraction on single-GPU hardware.
- **Context window: 88/100.** 256k context window with encoder-free native multimodal processing.
- **Multimodal: 75/100.** Native text, image, and audio input understanding; text-only output.
- **Coding: 65/100.** Good lightweight coding, syntax fixing, and local script editing, capped on full repo navigation.
- **Cost efficiency: 96/100.** Superb value at ~$0.10/$0.30 per 1M hosted and free self-hosting under Apache 2.0.
- **Overall Score: 72.8/100.** Excellent single-GPU open model for local multimodal agents and embedded tool workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-09
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
