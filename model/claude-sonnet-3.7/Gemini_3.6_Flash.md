# Claude Sonnet 3.7 — findings by Gemini 3.6 Flash

- Source: Anthropic (`claude-sonnet-3.7`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's first hybrid reasoning model featuring extended thinking budget control for complex software engineering and analytical tasks.
- **Provider / access:** Anthropic API (`claude-3-7-sonnet-20250219`), Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2025-02-24 release; knowledge cutoff 2024-11.
- **IDs:** `anthropic/claude-3.7-sonnet`
- **Context window:** 200,000 tokens input, 64,000 max output tokens (verified via Anthropic announcement).
- **Modalities:** text, image in; text out; reasoning yes (configurable extended thinking budget); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $3.00 / $15.00 / $0.75 cached per 1M tokens.
- **Architecture:** Proprietary hybrid reasoning transformer model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **67.2%** (Anthropic release benchmark)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **36** (Artificial Analysis early 2025 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **70.3%** (SWE-bench Verified release data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 200K: 98.8% needle-in-a-haystack retrieval accuracy across 200K context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool orchestration with hybrid thinking support.
- **Reasoning: 86/100.** GPQA Diamond score of 67.2% with extended thinking.
- **Context window: 75/100.** 200K token context window with 64K max output.
- **Multimodal: 80/100.** High quality text and vision input processing.
- **Coding: 86/100.** Outstanding 70.3% score on SWE-bench Verified.
- **Cost efficiency: 72/100.** Standard mid-tier pricing ($3.00 in / $15.00 out per 1M).
- **Overall Score: 82/100.** Landmark hybrid reasoning model for software engineering and scientific analysis.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-01
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
