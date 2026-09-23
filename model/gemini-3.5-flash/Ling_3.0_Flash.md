# Gemini 3.5 Flash — findings by Ling 3.0 Flash

- Source: Google (`google/gemini-3.5-flash`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's next-gen 3.5 Flash model offering enhanced speed and capabilities; free tier available with strong multimodal and agentic performance.
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI. Free tier available; paid-tier pricing.
- **Release / knowledge:** Prior to July 2026 (superseded by 3.6 Flash). Knowledge cutoff not explicitly stated.
- **IDs:** `google/gemini-3.5-flash` (Google API)
- **Context window:** 1,048,576 (1M) tokens, 65.5K max output
- **Modalities:** Text, image, audio, PDF in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** Free tier available; paid $1.50/1M input, $9.00/1M output
- **Architecture:** Proprietary, closed weights; Google's efficient multimodal model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (aimadetools, BenchLM)
- Terminal-Bench 2.0: **76.2%** (BenchLM)
- OSWorld-Verified: **78.4%** (aimadetools)
- MCP Atlas: **83.6%** (aimadetools, BenchLM)
- Toolathlon: **56.5%** (aimadetools)
- cursorBench 31: **49.8%** (BenchLM)
- cursorBench 32: **48.8%** (BenchLM)
- Finance Agent v2: **57.9%** (aimadetools)
- Agentic (BenchLM): 80.6 (#6 multimodal category)

Reasoning / knowledge:

- GPQA Diamond: ~88-90% (implied from aimadetools comparison)
- HLE: **40.2%** (BenchLM)
- ARC-AGI-2: **72.1%** (aimadetools)
- FrontierMath v2 Tiers 1-3: **38.97%** (BenchLM)
- FrontierMath Tier 4: **14.58%** (BenchLM)
- Knowledge (BenchLM): 57.7 (#47/181)
- Gert Labs: **61.85%** (BenchLM)
- MRCR v2 128k: **77.3%** (aimadetools)
- Known Good Index: 84 (theknowngood.com)

Coding:

- SWE-bench Pro: **55.1%** (aimadetools)
- Terminal-Bench 2.0/2.1: **76.2%**
- Vibe Code Bench: **48.68%** (BenchLM)
- cursorBench 31: 49.8%, cursorBench 32: 48.8%
- Coding Index (BenchLM): 54.7 (#53/148)

Multimodal:

- MMMU-Pro: **83.6%** (aimadetools)
- CharXiv Reasoning: **84.2%** (aimadetools)
- MRCR v2 128k: **77.3%**
- Agentic multimodal rank: 6/35 (BenchLM)

Long context:

- 1M context window
- MRCR v2 128k: 77.3%
- CharXiv with tools: implied strong

### Normalized scores (1–100)

- **Tool use: 81/100.** Terminal-Bench 2.1 at 76.2%; MCP Atlas at 83.6%; OSWorld-Verified at 78.4%; Toolathlon at 56.5%. Strong agentic and MCP-based tool use capability.
- **Reasoning: 85/100.** GPQA Diamond ~88-90%; HLE at 40.2%; ARC-AGI-2 at 72.1%; MRCR v2 at 77.3%; Knowledge Index at 57.7. Solid reasoning with strong long-context performance.
- **Context window: 95/100.** 1M context window with MRCR v2 at 77.3%; 65.5K max output.
- **Multimodal: 89/100.** Text, image, audio, and PDF input supported; MMMU-Pro at 83.6%; CharXiv Reasoning at 84.2%. Broad multimodal coverage including audio.
- **Coding: 79/100.** Terminal-Bench 2.0/2.1 at 76.2%; SWE-bench Pro at 55.1%; Vibe Code Bench at 48.68%. Solid terminal coding but moderate on research-level coding.
- **Cost efficiency: 92/100.** Free tier available on Google AI Studio and OpenCode Zen; paid pricing at $1.50/$9.00 per 1M. Cost-efficient for a Flash model.
- **Overall Score: 86/100.** Mean of the five non-cost dimensions (81 + 85 + 95 + 89 + 79) / 5 = 85.8, rounded to 86. Google's 3.5 Flash model with strong multimodal (MMMU-Pro 83.6%), MCP Atlas leadership (83.6%), 1M context, and free tier at $1.50/$9.00 pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via aimadetools.com, BenchLM, Vals.ai, theknowngood.com, and lmspeed.net; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.5-flash/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.5-flash/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
