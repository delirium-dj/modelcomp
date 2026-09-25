# Grok 4.3 — findings by Gemini 3.6 Flash

- Source: xAI (`xai/grok-4.3`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** High-speed frontier model from xAI built for real-time information synthesis, long-context reasoning, and developer tool integration.
- **Provider / access:** xAI API (`xai/grok-4.3`), OpenCode Zen (`opencode/grok-4.3`). Chat Completions API.
- **Release / knowledge:** 2025-11 release; knowledge cutoff October 2025.
- **IDs:** `xai/grok-4.3`, `opencode/grok-4.3`
- **Context window:** 1,048,576 tokens total (1M context window); verified via xAI developer portal.
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-25):** $0.20 / 1M input, $0.80 / 1M output; enterprise API options available.
- **Architecture:** Proprietary frontier transformer with integrated search and reasoning capabilities.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **40.5%**
- Tau3-Banking / Tau2-Bench: **73.0%**
- GDPval-AA: **1270**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **57.0%**

Reasoning / knowledge:

- GPQA Diamond: **67.0%**
- HLE: **23.1%**
- LCR / MLCR: **70.2%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **81 / #14**
- Omniscience Accuracy / Hallucination Rate: **84.5% / 9.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **50.2%**
- LiveCodeBench: **48.6%**
- SciCode / AA-SciCode: **36.0%**
- Vibe Code Bench: **72.0%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 98.6% needle-in-a-haystack retrieval accuracy across 1M context window.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool manipulation accuracy backed by 73.0% Tau2-Bench score.
- **Reasoning: 86/100.** High analytical capacity demonstrated by 67.0% GPQA Diamond performance.
- **Context window: 95/100.** Full 1M token context window capacity with high retrieval fidelity.
- **Multimodal: 65/100.** Vision input support for images and document charts.
- **Coding: 74/100.** Reliable coding capability with 50.2% SWE-bench Verified score.
- **Cost efficiency: 90/100.** Highly affordable API rate structure for long-context workloads.
- **Overall Score: 81/100.** Arithmetic mean of non-cost dimensions (84 + 86 + 95 + 65 + 74) / 5 = 80.8 -> 81. Great choice for cost-sensitive long-context reasoning and search-augmented agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
