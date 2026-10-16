# Gemini 3.5 Flash — findings by Cat Jam

- Source: Google / Gemini 3.5 Flash (`opencode/gemini-3.5-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Mid-2026 Gemini Flash model (released 2026-05-19; superseded by 3.6/3.7/3.8). Strong MCP/OSWorld; 1M context; thinking levels.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.5-flash`), Vertex AI, Google Search AI Mode, Antigravity. Text/image/video/audio in; text out.
- **Release / knowledge:** Released 2026-05-19; knowledge cutoff not explicitly stated in sampled model card (likely pre-2025 training family; Google's 3.5 Flash description on safety says evaluated using Gemini 3.1 Pro). Treat as not verified.
- **IDs:** `gemini-3.5-flash` (Google)
- **Context window:** 1,048,576 tokens; max output 65,536. Verified.
- **Modalities:** Text, image, video, audio in; text out. Thinking. MCP, tool use, code execution, search grounding, structured output, computer use (preview).
- **Pricing (as of 2026-10-16):** $1.50/$9.00 per 1M (from Google comparison tables in 3.6 model card; explicit 3.5 pricing not in sampled page). Free tier (data consent) typical; not explicitly verified. Batch/flex discounts unspecified in sampled docs.
- **Architecture:** Proprietary; based on Gemini 3 Flash.

### Raw benchmarks found

Agent / tool use (official model card):

- Terminal-Bench 2.1: **76.2%**
- MCP Atlas: **83.6%**
- Toolathlon: **56.5%**
- OSWorld-Verified: **78.4%**
- Finance Agent v2: **57.9%**
- GDPval-AA v2: **1656 Elo**

Reasoning / knowledge:

- HLE: **40.2%** (full set text + MM)
- ARC-AGI-2: **72.1%**
- Blueprint-Bench 2 (spatial): 33.6 (no tools)
- MRCR v2 8-needle 128k: 77.3%, 1M pointwise 26.6%
- GPQA Diamond: not in sampled card
- MMMU-Pro: 83.6%

Coding:

- SWE-Bench Pro: **55.1%**
- Terminal-Bench 2.1: 76.2%
- DeepSWE? (3.6 card says 49% for 3.6 vs 37% for 3.5) ⇒ **37%**
- Vals? not sampled

Long context:

- MRCR v2 128k 77.3%, 1M pointwise 26.6%.

### Normalized scores (1–100)

- **Tool use: 88/100.** MCP Atlas 83.6, OSWorld 78.4, Toolathlon 56.5, Finance Agent 57.9, GDPval 1656. Strong agent tier.
- **Reasoning: 86/100.** HLE 40.2, ARC-AGI-2 72.1, Blueprint 33.6 (spatial). GPQA not in sampled card ⇒ cap.
- **Context window: 88/100.** MRCR 128k 77.3, 1M pointwise 26.6.
- **Multimodal: 90/100.** CharXiv 84.2 (no tools; 3.6 card says 3.5 at 84.2/84.9), MMMU-Pro 83.6, Blueprint 33.6 (agent spatial). Strong.
- **Coding: 84/100.** SWE-Pro 55.1, TB 2.1 76.2, DeepSWE 37.
- **Cost efficiency: 90/100.** $1.5/$9 standard Flash pricing; $1.5/$9 still cheap vs flagship models, though more than newer 3.6+. Free tier likely.
- **Overall Score: 87/100.** Mean (88+86+88+90+84)/5 = 87.2. Mid-series Gemini Flash, superseded by 3.6+.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Google DeepMind 3.5 Flash model card HTML); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
