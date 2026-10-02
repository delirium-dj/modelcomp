# Gemini 2.5 Flash — findings by Space Bunny Alpha

- Source: Google (`gemini-2.5-flash`; stable)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's balanced, thinking-capable multimodal model for high-volume processing, low-latency agentic tasks, and coding, now a legacy access model restricted to users who have used it.
- **Provider / access:** Google Gemini API (`gemini-2.5-flash`); Google AI Studio; Batch, Flex, and Priority inference. The current Google page says access to 2.5 models is limited to users who have actively used them.
- **Release / knowledge:** Google documentation lists the latest stable update in June 2025 and a January 2025 knowledge cutoff. The model was released in 2025; no separate day-level release date was shown.
- **IDs:** `gemini-2.5-flash`; preview ID `gemini-2.5-flash-preview-09-2025` is shut down.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google model documentation).
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, function calling, structured outputs, code execution, file search, Google Search grounding, URL context, and computer use supported. Live API and image/audio generation are not supported.
- **Pricing (as of 2026-09-24):** BenchLM reports $0.30 per 1M input, $2.50 per 1M output, and $0.03 cached input. Google pricing can vary by tier and inference mode.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public score found**
- Google documents function calling, code execution, file search, search grounding, URL context, and computer use, but the reviewed pages do not expose exact model scores.

Reasoning / knowledge:

- FrontierMath v2 Tiers 1–3: **4.844%**; Tier 4: **4.167%** (Epoch AI leaderboard via BenchLM)
- GPQA, HLE, LCR/MLCR, CritPt, hallucination metrics, and an Artificial Analysis composite: **no verified public score found**

Coding:

- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public score found**

Long context:

- No exact-model retrieval-at-length result was found. Native context is **1,048,576 input tokens / 65,536 output** (Google model documentation).

Sources consulted: [Google Gemini 2.5 Flash model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash) and [BenchLM Gemini 2.5 Flash](https://benchlm.ai/models/gemini-2-5-flash), accessed 2026-09-24. BenchLM exposes only two FrontierMath rows for this profile; no standard agent/coding rows are inferred from sibling models.

### Normalized scores (1–100)

- **Tool use: 70/100.** Google documents a broad tool set, but no exact-model Terminal-Bench, Tau, GDPval, Toolathlon, or MCP measurement was found.
- **Reasoning: 55/100.** Thinking is supported, but the only surfaced measured results are weak FrontierMath values (4.844% and 4.167%) and no standard reasoning benchmark is available.
- **Context window: 95/100.** A 1M input/65K output limit is verified by Google; retrieval quality at length is unmeasured.
- **Multimodal: 95/100.** Text, image, video, audio, and PDF input with text output are explicitly documented.
- **Coding: 60/100.** The model is designed for coding and agents, but exact SWE/LiveCodeBench/SciCode/DeepSWE values are absent; the public profile has no coding row.
- **Cost efficiency: 93/100.** The $0.30/$2.50 rate and $0.03 cached input are inexpensive for a 1M multimodal model, though legacy access and tier pricing matter.
- **Overall Score: 75.0/100.** (70 + 55 + 95 + 95 + 60) / 5 = 75.0. Best fit: high-volume multimodal extraction and lightweight agentic work, with newer Gemini models preferred for new deployments.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Google's official model documentation and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
