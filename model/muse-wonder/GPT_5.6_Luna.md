# Muse Wonder — findings by GPT 5.6 Luna

- Source: Meta / Muse Wonder
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder
- **Short description:** Meta's frontier model for personal and professional agents, combining Active Memory and Active Focus with long-horizon coding, knowledge work, and multimodal input. It is the standard member of the Muse Wonder series, distinct from the larger Muse Wonder Full.
- **Provider / access:** Meta Model API and Muse Code; the Meta launch post says Wonder is available through the Meta Model API, with rollout to Muse products. The dataset gateway route is `opencode/muse-wonder`.
- **Release / knowledge:** 2026-10-12 release; knowledge cutoff not disclosed.
- **IDs:** `muse-wonder` on the Meta Model API; `opencode/muse-wonder` as the gateway route tracked here. No separate Max checkpoint is assumed—the “Max” label on Artificial Analysis denotes the tested reasoning effort.
- **Context window:** 1M total tokens; maximum output not published. Artificial Analysis and The Decoder independently list the 1M window.
- **Modalities:** Text, image, speech, and video input; text output; reasoning; agentic tool use through the Meta API/Muse Code. Public function-calling limits were not fully documented in the sources reviewed.
- **Pricing (as of 2026-10-30):** $4.00 per 1M input tokens and $20.00 per 1M output tokens; Artificial Analysis reports an average **$6.95** per Intelligence Index task and a 95% cache discount. Access is paid; no free OpenCode route was verified.
- **Architecture:** Proprietary Meta model; parameter count and weights are undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **52%** (Artificial Analysis launch comparison reproduced in its announcement; exact Wonder result).
- AutomationBench-AA: **68%** (Artificial Analysis launch comparison; improved from Muse Spark 1.3's 58%).
- Artificial Analysis Intelligence Index v5.0: **43** (current independent model page; version updated after launch).
- Artificial Analysis Intelligence Index v4.3: **52** (The Decoder and Artificial Analysis launch comparison; not directly comparable to the current v5.0 score).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **43** (Artificial Analysis).
- Artificial Analysis Index v4.3: **52** (The Decoder, reporting the launch snapshot).
- AA-Omniscience: **25** (The Decoder's transcription of the launch evaluation table).
- CritPt: **33%** and SciCode: **63%** (Artificial Analysis launch comparison; the scientific-reasoning figures are useful specialist signals but not a general-knowledge replacement).

Coding:

- Coding Agents Index: **63** (The Decoder, citing the Artificial Analysis comparison; up from 54 for Muse Spark 1.3).
- Terminal-Bench 4.0: **52%** (Artificial Analysis launch comparison; repeated here because it measures terminal coding as well as tool use).
- Meta's official launch post positions Wonder for sustained software projects and identifies SWE-Marathon as its long-running coding evaluation, but no numeric SWE-Marathon result was exposed in the HTML page.

Long context:

- Declared context: **1M tokens** (Artificial Analysis and The Decoder).
- No exact-model MRCR, RULER, or other public retrieval curve was found; Active Memory is described qualitatively by Meta and should not be treated as a retrieval percentage.

Multimodal:

- Artificial Analysis lists text, image, speech, and video input with text output; The Decoder independently reports the same coverage. Meta's launch page demonstrates image-conditioned 3D artifact generation.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 4.0 at 52% and AutomationBench-AA at 68% show capable agent execution, but the current AA Index is 43 and the strongest launch score is version-specific, so the score stays below the frontier band.
- **Reasoning: 80/100.** The launch snapshot's 52 Index, CritPt 33%, and SciCode 63% show strong specialist reasoning; the current v5.0 Index 43 and AA-Omniscience 25 indicate a meaningful factual ceiling.
- **Context window: 98/100.** A 1M-token window is consistently documented, but no exact-model retrieval test at that limit was found, so the score stops just below a fully measured maximum.
- **Multimodal: 95/100.** Text, image, speech, and video input are independently documented, with text output; no non-text output modality was verified.
- **Coding: 84/100.** Coding Agents Index 63 and Terminal-Bench 4.0 at 52% support a strong coding-agent score, while the lack of a public numeric SWE-Marathon result and the current composite Index cap it.
- **Cost efficiency: 55/100.** $4/$20 pricing and $6.95 per Artificial Analysis task are expensive relative to similarly capable models; the cache discount helps repeated prompts but does not make the base tier low-cost.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions `(82 + 80 + 98 + 95 + 84) / 5 = 87.8 → 88`; a good multimodal long-context agent when the work justifies its premium price.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-30
- Method: Three independent search tracks (Meta's official release, Artificial Analysis measurements, and independent reporting from The Decoder), with direct page checks and explicit separation of the v4.3 and v5.0 composite scores; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
