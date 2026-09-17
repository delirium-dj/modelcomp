# Gemini 3.5 Flash-Lite — findings by Claude Sonnet 4.6

- Source: Google DeepMind / Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** High-efficiency, ultra-low-latency cost-tier model from Google DeepMind, released July 21, 2026. Occupies the "budget" tier in the 3.5 family — optimised for high-volume, repetitive agentic tasks, document processing, and data extraction. One of the fastest models in its class (350–490 output tokens/second reported by Artificial Analysis).
- **Provider / access:** Google AI Studio and Vertex AI (`gemini-3.5-flash-lite`). Active as of 2026-09-17. Gemini API, Chat Completions–style.
- **Release / knowledge:** 2026-07-21 (blog.google). Knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.5-flash-lite`. No OpenCode Zen Free ID found as of 2026-09-17; scored on paid pricing.
- **Context window:** 1,048,576 tokens input (~1M); max output 65,536 tokens (google.dev, eesel.ai).
- **Modalities:** Text, image, video, audio, PDF input; text output. Function calling, structured outputs, code execution, search grounding, Thinking (reasoning) supported. Does NOT support image/audio generation, Live API, or computer use (google.dev).
- **Pricing (as of 2026-09-17):** $0.30 / 1M input, $2.50 / 1M output; cached input $0.03 / 1M (openrouter.ai, aipricing.org, eesel.ai — consistent across sources).
- **Architecture:** Proprietary Google DeepMind multimodal transformer; lightweight optimised variant of 3.5 Flash; exact parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Throughput: **350–490 output tokens/second** (Artificial Analysis Index — speed benchmark confirming high throughput for agentic loops)
- SWE-bench Verified: **no verified public score found**
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** for Lite tier
- MMMU / MMMU Pro: **no verified public score found**
- HLE / LCR: **no verified public score found**
- Intelligence Index: **no verified public rank found**

Coding:

- SWE-bench Verified: **no verified public score found**
- DeepSWE / LiveCodeBench / SciCode: **no verified public score found**

Long context:

- 1M input confirmed; no MRCR / RULER retrieval-at-depth study found for this model.

### Normalized scores (1–100)

> Note: Very limited public benchmark data found beyond speed metrics. Scores are largely inferred from positioning (budget Lite tier of 3.5 family) and structural specs. Treat as provisional.

- **Tool use: 52/100.** No specific benchmark data; Lite tier targets repetitive/high-volume workflows over complex multi-step agents; throughput speed alone doesn't map to tool-use quality; provisional.
- **Reasoning: 58/100.** No GPQA/HLE/LCR verified; Thinking supported which gives headroom over 2.5 Flash-Lite (20); positioned above prior Lite tiers in capability; provisional upper-mid for Lite tier.
- **Context window: 95/100.** 1M confirmed (google.dev); no depth-retrieval study; 95.
- **Multimodal: 82/100.** Text + image + video + audio + PDF in confirmed (google.dev); no generation out; consistent with 3.x Flash family profile; 82.
- **Coding: 48/100.** No SWE-bench or DeepSWE; Lite not primary coding-agent model; budget tier; provisional below mid.
- **Cost efficiency: 96/100.** $0.30/$2.50 — near-budget pricing; per methodology ~$0.30 in-range with 96–97; cached at $0.03 / 1M adds further efficiency; scored 96.
- **Overall Score: 72/100.** Mean of (52 + 58 + 95 + 82 + 48 + 96) / 6 = 431 / 6 = 71.8 → **72**. Best fit: high-speed, cost-efficient document/data extraction and routing; not a primary reasoning or coding-agent model.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (Anthropic / `claude-sonnet-4-6`)** — 2026-09-17
- Method: public internet research (web search against blog.google, google.dev, eesel.ai, openrouter.ai, aipricing.org, felloai.com, inworld.ai, google.com); scores are normalised 1–100 interpretations, not official vendor scores. Limited verified public benchmarks available — scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
