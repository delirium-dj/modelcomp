# Gemini 3.5 Flash — findings by Claude Sonnet 4.6

- Source: Google DeepMind / Gemini 3.5 Flash (`gemini-3.5-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** High-efficiency Flash-tier model from Google DeepMind, released May 19, 2026. Positioned as delivering "Pro-level" reasoning at Flash-tier speed — outperformed Gemini 3.1 Pro on several coding and agentic benchmarks at release while running ~4× faster. Succeeded by Gemini 3.6 Flash and 3.8 Flash in subsequent months.
- **Provider / access:** Google AI Studio and Vertex AI (`gemini-3.5-flash`). Gemini API, Chat Completions–style. Active as of 2026-09-17 (though newer models recommended).
- **Release / knowledge:** 2026-05-19 (confirmed via search sources). Knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.5-flash`. No OpenCode Zen Free ID found as of 2026-09-17; scored on paid pricing.
- **Context window:** 1,048,576 tokens input (~1M); max output 65,536 tokens.
- **Modalities:** Text, image, video, audio, PDF input; text output. Function calling, structured outputs, code execution, search grounding, Thinking mode.
- **Pricing (as of 2026-09-17):** $1.50 / 1M input, $9.00 / 1M output; cached input $0.15 / 1M (confirmed at launch; current pricing may differ — verify via AI Studio).
- **Architecture:** Proprietary Google DeepMind multimodal transformer; positioned above 3.1 Flash family; exact parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (confirmed at launch — outperformed Gemini 3.1 Pro)
- MCP Atlas: **83.6%** (confirmed at launch)
- CharXiv Reasoning (as coding/agent proxy): **84.2%** (at launch)
- SWE-bench (Pro): **~55.1%** (Gemini 3.6 Flash blog.google noted 3.5 Flash at ~55.1% on SWE-bench Pro for comparison)
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- CharXiv Reasoning: **84.2%** (same as agent entry — cross-domain)
- GPQA Diamond: **no verified public score found** for 3.5 Flash specifically (3.1 Pro had 94.3%)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- Intelligence Index: **no verified public rank found** specific to 3.5 Flash

Coding:

- Terminal-Bench 2.1: **76.2%** — primary coding/agent evidence
- SWE-bench Pro: **~55.1%** (provisional from 3.6 Flash release comparison)
- DeepSWE: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode: **no verified public score found**

Long context:

- 1M input confirmed; no MRCR / RULER depth-retrieval study found for 3.5 Flash.

### Normalized scores (1–100)

- **Tool use: 72/100.** TB2.1 76.2% and MCP Atlas 83.6% — solid agentic scores; no Tau3 or GDPval reduces ceiling; frontier TB ref 85%+ = 90–100 not quite met; scored 72.
- **Reasoning: 74/100.** CharXiv 84.2% indicates strong cross-domain reasoning; no GPQA Diamond or HLE verified; inferred mid-upper reasoning tier; scored 74.
- **Context window: 95/100.** 1M confirmed; no depth-retrieval data; 95 per tier mapping.
- **Multimodal: 82/100.** Full multimodal in (text/image/video/audio/PDF) consistent with 3.x Flash family; no non-text generation; 82.
- **Coding: 68/100.** TB2.1 76.2% strong; SWE-bench Pro ~55.1% is lower than Flash expectation; DeepSWE absent; averaged to 68.
- **Cost efficiency: 82/100.** $1.50/$9.00 — moderate paid pricing; per methodology $3/$15 ≈ 60, prices lower so higher efficiency; scores 82.
- **Overall Score: 79/100.** Mean of (72 + 74 + 95 + 82 + 68 + 82) / 6 = 473 / 6 = 78.8 → **79**. Best fit: Pro-level intelligence at Flash speed; excellent for MCP/tool-orchestration workloads; since superseded by 3.6/3.8 Flash.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (Anthropic / `claude-sonnet-4-6`)** — 2026-09-17
- Method: public internet research (web search against blog.google, google.dev, emergent.sh, artificialanalysis.ai); scores are normalised 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
