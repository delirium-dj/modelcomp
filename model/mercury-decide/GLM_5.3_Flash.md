# Mercury Decide — findings by GLM 5.3 Flash

- Source: Inception Labs (`mercury-decide` — Decisions API, System One endpoint)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide
- **Short description:** Inception's structured decision model (Oct 2026) — a System One endpoint in the Mercury diffusion-LLM family (sibling class to TypeSafe's Jev): send a shared `state` plus typed questions and get back a yes/no probability, a choice with calibrated option probabilities, a fractional score, or extracted text spans — taken directly from the model, not generated as text, so output is effectively free. Built for routing, classification, scoring and extraction at high volume. A decision-category model, not comparable to generative chat Overall.
- **Provider / access:** Inception Platform, `POST https://api.inceptionlabs.ai/v1/decisions` with model `mercury-decide`; also on OpenRouter (`inception/mercury-decide`) and other aggregators. Custom Decisions API only — `/v1/chat/completions`, streaming and tool calling are explicitly not supported.
- **Release / knowledge:** released 2026-10-01 (tracker release note); knowledge cutoff not stated.
- **IDs:** `mercury-decide` (Inception, OpenRouter `inception/mercury-decide`).
- **Context window:** 64K-class per tracker catalogs (65K reported by AgentBreaking; the official Decisions doc page states no window) — treat as tracker-reported, not vendor-published.
- **Modalities:** Text and image in — images as base64 data URLs (PNG/JPEG/WebP/GIF), up to 10 MiB each, up to 16 images per request within a 20 MiB body limit, accepted in `state` or question `instructions` (not in criteria). Typed structured answers out (noul probability / choice + probabilities + confidence / fractional score + legend / extract spans with character offsets + `not_stated`). No free-text generation.
- **Pricing (as of 2026-11-11):** $0.02 per 1M input tokens (50% off the regular $0.04); output tokens reported in usage but never charged.
- **Architecture:** diffusion-LLM (dLLM) family member serving probability heads directly; closed weights; questions are evaluated independently against the shared state.

### Raw benchmarks found

Agent / tool use: no verified public score found (no tool-calling interface exists — the model is consumed as a decision primitive)

Reasoning / knowledge:

- No published accuracy/calibration benchmark rows (no routing-classification suite numbers from Inception or independent evaluators found) — no verified public score found

Coding: no verified public score found (no coding interface)

Long context: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 15/100.** Structurally absent — no tool calling, no streaming, no chat surface; it is itself the tool (a decision primitive other systems call).
- **Reasoning: 30/100.** Genuine judgment capability (calibrated probabilities, confidence values, fractional scoring, span extraction) but no published accuracy benchmark and a deliberately narrow task surface.
- **Context window: 45/100.** 64K-class (tracker-reported only) — below the 100K tier boundary; the shared-state workload is inherently short.
- **Multimodal: 62/100.** Real image input (up to 16 images, 10 MiB each, base64) for screenshot/vision-conditioned decisions — mid of the image-in band; no audio/video, and output is typed structure, not text.
- **Coding: 15/100.** No coding interface; extraction spans can target code text, but nothing measured or intended for code generation.
- **Cost efficiency: 98/100.** $0.02/1M input with output free — near the $0=100 anchor and the cheapest per-decision pricing in the dataset; extreme-volume economics.
- **Overall Score: 33/100.** Mean of the five non-cost dims (15+30+45+62+15)/5 = 33.4. Best-fit recommendation: a decision-category model (like Jev) — wire it into ticket routing, moderation, scoring and extraction pipelines at $0.02/1M where calibrated probabilities beat free-text generation; never compare its Overall against generative chat models.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-11
- Method: public internet research (official Inception Decisions API documentation, OpenRouter listing, tracker catalogs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Platform Docs — Decisions (Mercury Decide API, question types, vision, pricing)](https://docs.inceptionlabs.ai/capabilities/decisions)
  - [OpenRouter — inception/mercury-decide listing](https://openrouter.ai/inception/mercury-decide)
  - [AnyRouter — Mercury Decide release note (2026-10-01)](https://anyrouter.dev/blog/releases/2026-10-01-mercury-decide)
  - [AgentBreaking — Mercury Decide specs (65K context, $0.02/1M)](https://agentbreaking.com/models/inception--mercury-decide)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
