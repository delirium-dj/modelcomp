# Gemini 3.6 Flash — findings by Claude Sonnet 4.6

- Source: Google DeepMind / Gemini 3.6 Flash (`gemini-3.6-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** High-efficiency "workhorse" Flash model from Google DeepMind, released July 21, 2026. Outperformed Gemini 3.1 Pro on coding, agentic workflows, and SWE-bench at Flash-tier speed. Notable for ~17% better token efficiency than 3.5 Flash on similar tasks. Succeeded by Gemini 3.7 Flash and 3.8 Flash in August–September 2026.
- **Provider / access:** Google AI Studio and Vertex AI (`gemini-3.6-flash`). Active but superseded. Gemini API, Chat Completions–style.
- **Release / knowledge:** 2026-07-21 (confirmed). Knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.6-flash`. No OpenCode Zen Free ID found as of 2026-09-17; scored on paid pricing.
- **Context window:** 1,048,576 tokens input (~1M); max output 65,536 tokens.
- **Modalities:** Text, image, video, audio, PDF input; text output. Function calling, structured outputs, code execution, search grounding, Thinking levels.
- **Pricing (as of 2026-09-17):** Introductory pricing $0.75 / 1M input, $3.75 / 1M output (through Dec 31, 2026); standard price rising to $1.50/$7.50 from Jan 1, 2027 (confirmed via search results).
- **Architecture:** Proprietary Google DeepMind multimodal transformer; exact parameters undisclosed; notably 17% more token-efficient output than 3.5 Flash.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Pro: **~58.7%** (at launch; noted vs 3.5 Flash's ~55.1%)
- Terminal-Bench 2.1: **~78.0%** (at launch; confirmed by search benchmark comparison)
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** for 3.6 Flash specifically (3.1 Pro reference: 94.3%)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- GDM-MRCR v2 (1M token depth): **~54.0%** (noted at launch — long-context retrieval benchmark)
- Intelligence Index: **no verified public rank found**

Coding:

- SWE-bench Pro: **~58.7%** (primary coding evidence)
- Terminal-Bench 2.1: **~78.0%** (cross-referenced as coding/agentic)
- DeepSWE: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode: **no verified public score found**

Long context:

- GDM-MRCR v2 at 1M depth: **~54.0%** — moderate long-context retrieval; 1M context supported.

### Normalized scores (1–100)

- **Tool use: 70/100.** SWE-bench Pro 58.7% and TB2.1 78%—solid agentic range; no Tau3/GDPval; TB2.1 at 78% approaching frontier (85%+); SWE-bench at 58.7% pulls down; scored 70.
- **Reasoning: 76/100.** No GPQA directly; MRCR v2 54% at 1M depth (moderate); positioned above 3.5 Flash but below 3.7+ generations; HLE absent; inferred mid-upper reasoning; scored 76.
- **Context window: 90/100.** 1M confirmed; MRCR v2 54% at 1M depth is published ← rare long-context retrieval data; 54% retrieval at 1M is moderate (95–100 tier requires ≥95% at 512K+); per methodology 95 minus retrieval penalty → 90.
- **Multimodal: 82/100.** Full multimodal in (text/image/video/audio/PDF); no non-text out; consistent 3.x Flash profile; 82.
- **Coding: 68/100.** TB2.1 78% strong; SWE-bench Pro 58.7%; DeepSWE absent; averaged mid-upper coding 68.
- **Cost efficiency: 95/100.** $0.75/$3.75 introductory pricing (very competitive); per methodology ~$0.60/$2.20=~92 and lower-priced gives higher; scores 95.
- **Overall Score: 80/100.** Mean of (70 + 76 + 90 + 82 + 68 + 95) / 6 = 481 / 6 = 80.2 → **80**. Best fit: strong coding/agent Flash model at very competitive price; outperforms prior Pro tier on coding; MRCR retrieval at depth is moderate limitation.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (Anthropic / `claude-sonnet-4-6`)** — 2026-09-17
- Method: public internet research (web search against blog.google, google.dev, emergent.sh, mindstudio.ai); scores are normalised 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
