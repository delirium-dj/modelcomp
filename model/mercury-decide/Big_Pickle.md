# Mercury Decide - findings by Big Pickle

- Source: Inception Labs/Mercury Decide
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide
- **Short description:** Inception Labs' diffusion-based "System One" decision model. It answers named questions against a shared state and returns typed probabilities (`noul`, `choice`, `score`, `extract`) through a dedicated `/v1/decisions` endpoint — built for routing, classification, scoring and extraction, not open-ended chat.
- **Provider / access:** Inception Labs API, model `mercury-decide`, `POST https://api.inceptionlabs.ai/v1/decisions`. It deliberately does not support `/v1/chat/completions`, streaming or tool calling.
- **Release / knowledge:** Released September 2026 (Artificial Analysis release tracker); knowledge cutoff not published.
- **IDs:** `inception/mercury-decide`
- **Context window:** 66,000 tokens (Artificial Analysis technical spec); Inception's own docs describe a shared `state` plus question set without publishing a token cap.
- **Modalities:** Text and image in; structured decision output. Up to 16 base64 images per request (10 MiB each, 20 MiB body limit); images allowed in `state` and question instructions, not in `criteria`. No chat text generation, no tool calls.
- **Pricing (as of 2026-11-13):** $0.02 / 1M input tokens (temporary 50% launch discount off the regular $0.04); output tokens reported but not billed.
- **Architecture:** Proprietary diffusion language model; parameter count undisclosed.

### Raw benchmarks found

> Artificial Analysis runs a dedicated Decision Index for this model class; the
> score below is the only independent measurement found.

Agent / tool use:

- Artificial Analysis Decision Index: **62 / 100**, rank **#14 of 21** decision models (median 66)
- Time per task: **245 ms**, rank **#14 of 21** (median 206 ms)
- Cost per 1M tasks: **$70**, rank **#6 of 21** (median $137; reflects the temporary launch price — standard price would roughly double it)
- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found (endpoint supports no tool calls)

Reasoning / knowledge:

- Decision Index components per Artificial Analysis: AA-Paperclip, EvalSafe-O*NET-AA, When2Call, AA-Omniscience-Decision v1.1, HLE-MultiChoice v1.1, AA-Symmetry v1.1 — **composite 62**, below the 66 median
- GPQA Diamond: no verified public score found
- HLE: no verified public score found (only the decision-format HLE-MultiChoice component above)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: not applicable (decision-model index used instead)
- Omniscience Accuracy / Hallucination Rate: no separate published values

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found — the model emits typed decisions, not code.

Long context:

- No MRCR / RULER / GraphWalks curve; 66K is a request-state budget, and the model is evaluated per decision task rather than on retrieval.

### Normalized scores (1-100)

- **Tool use: 55/100.** The endpoint is purpose-built for agentic routing and structured extraction, but it exposes no tool calling and has no Terminal-Bench/MCP-Atlas row, so the score reflects routing utility rather than tool execution.
- **Reasoning: 62/100.** Directly anchored to the Artificial Analysis Decision Index of 62 (#14/21), which is below the 66 median for decision models.
- **Context window: 40/100.** A 66K window falls below the 100K tier floor, mapping into the sub-100K band (10-49).
- **Multimodal: 65/100.** Image input is supported (screenshots, documents) alongside text, with structured output; images are excluded from criteria and there is no vision benchmark.
- **Coding: 20/100.** Not a code model: no code-generation endpoint and no coding benchmark; only structured extraction of code-adjacent fields is in scope.
- **Cost efficiency: 99/100.** At $0.02/1M input (output free) and $70 per 1M tasks — roughly half the $137 median — it is among the cheapest decision models; the discount is temporary.
- **Overall Score: 48/100.** Half-up mean of (55 + 62 + 40 + 65 + 20) / 5 = 48.4. Best fit: high-volume classification/routing where calibrated probabilities and sub-250ms latency matter more than reasoning depth.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-11-13
- Method: public internet research (Inception Labs decisions documentation, Artificial Analysis Decision Index page, model pricing docs); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Mercury Decide: Decision Index, performance & price](https://artificialanalysis.ai/decision-models/mercury-decide)
  - [Inception Labs docs — Decisions API](https://docs.inceptionlabs.ai/capabilities/decisions)
  - [Inception Labs docs — Models & Pricing](https://docs.inceptionlabs.ai/get-started/models)
- Future sources: add a new file next to this one, e.g. `Mercury_Decide.md`, using the same headings.
