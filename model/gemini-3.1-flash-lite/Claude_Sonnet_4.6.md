# Gemini 3.1 Flash-Lite — findings by Claude Sonnet 4.6

- Source: Google DeepMind / Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Cost-optimised, ultra-low-latency model in the Gemini 3.1 family from Google DeepMind. Released March 3, 2026. Designed for high-volume production workloads where speed and economics are primary constraints. Selectable "thinking levels" (minimal to high) for reasoning-depth trade-off. Positioned as the most cost-efficient model in the 3.1 generation.
- **Provider / access:** Google AI Studio and Vertex AI (`gemini-3.1-flash-lite`). Gemini API, Chat Completions–style. Still active as of 2026-09-17.
- **Release / knowledge:** 2026-03-03 (blog.google). Knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.1-flash-lite`. No OpenCode Zen Free ID found as of 2026-09-17; scored on paid pricing.
- **Context window:** 1,048,576 tokens input (~1M); max output 65,536 tokens (google.dev, ai-toolbox.co, verdent.ai).
- **Modalities:** Text, image, video, audio, PDF input; text output. Function calling, structured output, code execution, search grounding, selectable thinking levels (blog.google, medium.com).
- **Pricing (as of 2026-09-17):** $0.25 / 1M input, $1.50 / 1M output (verified blog.google, medium.com, verdent.ai). One of the cheapest models in the 3.x series.
- **Architecture:** Proprietary Google DeepMind multimodal transformer; lightweight variant, exact params undisclosed. Optimised for throughput and latency over peak reasoning depth.

### Raw benchmarks found

Agent / tool use:

- Arena.ai Elo: **~1432** (medium.com, verdent.ai — verified multiple sources)
- SWE-bench Verified: **no verified public score found** for Flash-Lite specifically
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (deepmind.google, blog.google — verified primary source)
- MMMU Pro: **76.8%** (deepmind.google — verified primary source; multimodal understanding benchmark)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- Omniscience / Hallucination: **no verified public score found**

Coding:

- SWE-bench Verified: **no verified public score found**
- DeepSWE / LiveCodeBench / SciCode: **no verified public score found**

Long context:

- 1M input confirmed; no MRCR / RULER public retrieval-at-depth score found for Flash-Lite.

### Normalized scores (1–100)

- **Tool use: 52/100.** Only Arena.ai Elo ~1432 available (moderate competitive rank); no SWE-bench, TB2.1, Tau3, or GDPval; Lite tier designed for lightweight agents not complex multi-step; N/A penalties applied heavily; scored 52.
- **Reasoning: 76/100.** GPQA Diamond 86.9% verified — good PhD reasoning; frontier ref 90%+ = 90–100; 86.9% is above mid; MMMU Pro 76.8% solid multimodal reasoning; HLE absent prevents further boosting; scored 76.
- **Context window: 95/100.** 1M confirmed (google.dev, verdent.ai); no depth-retrieval study; 95 per tier mapping.
- **Multimodal: 82/100.** Text + image + video + audio + PDF in (blog.google, verdent.ai); MMMU Pro 76.8% anchors multimodal understanding; no non-text output generation; scores 82.
- **Coding: 48/100.** No SWE-bench or DeepSWE public numbers; Lite tier not positioned as primary coding agent; Arena Elo only partial signal; scored below mid reflecting missing data and Lite positioning.
- **Cost efficiency: 97/100.** $0.25/$1.50 — very cheap; per methodology ~$0.10/$0.20 = 97–99; $0.25/$1.50 scores 97.
- **Overall Score: 75/100.** Mean of (52 + 76 + 95 + 82 + 48 + 97) / 6 = 450 / 6 = 75.0 → **75**. Best fit: excellent reasoning per dollar; ideal for high-volume, reasoning-light pipelines; limited data on coding agents.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (Anthropic / `claude-sonnet-4-6`)** — 2026-09-17
- Method: public internet research (web search against deepmind.google, blog.google, medium.com, verdent.ai, ai-toolbox.co, google.dev, google.com, dev.to); scores are normalised 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
