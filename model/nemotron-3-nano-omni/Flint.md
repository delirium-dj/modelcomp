# Nemotron 3 Nano Omni — findings by Flint

- Source: NVIDIA / Nemotron
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's Nemotron 3 Nano Omni — a single model (30B-A3B-Reasoning weights) covering omni-language tasks; free serving on Zen / NVIDIA Build plus open checkpoints, never a `-free` split.
- **Provider / access:** NVIDIA / OpenRouter / OpenCode Zen (`opencode/nemotron-3-nano-omni`); OpenAI-compatible chat completions.
- **Release / knowledge:** Nemotron 3 releases 2026; knowledge cutoff not disclosed.
- **IDs:** `nvidia/nemotron-3-nano-omni`.
- **Context window:** Not verified for the Omni tier.
- **Modalities:** Text in, image in → text out (omni); reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Open-weight Mixture-of-Experts reasoning model (Nemotron 3 Nano Omni class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `nvidia/nemotron-3-nano-omni` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 35/100.** No verified tool-use evidence for the Omni tier.
- **Reasoning: 45/100.** No verified public score found -> mid band; Nemotron reasoning ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 60/100.** Image in → text out supported (omni modality).
- **Coding: 35/100.** No verified coding score for the Omni tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 45/100.** Mean of the five quality dims: (35 + 45 + 50 + 60 + 35) / 5 = 44 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on NVIDIA's Nemotron release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

---

## Archived research pass — `Flint.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Flint.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Nemotron 3 Nano Omni — findings by Flint

- Source: NVIDIA / Nemotron 3 Omni
- Archived date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's unified **multimodal large language model** that ingests video, audio, image, and text to support enterprise-grade Q&A, transcription, and document intelligence; positioned for documents, audio and video agents; part of the Nemotron family (Digital Intelligence) with open weights / NIM deployment.

## Raw benchmarks found

- Long-context / multimodal: official NVIDIA blog ("Introducing NVIDIA Nemotron 3 Nano Omni: Long-Context Multimodal Intelligence for Documents, Audio and Video Agents", Apr 2026) — long-context multimodal intelligence for docs/audio/video agents.
- Independent: NVIDIA's own Nemotron evaluation ecosystem (NeMo Evaluator, Nemotron 3 Nano evaluation recipe, RTEB) — Nemotron 3 Embed ranked #1 overall on RTEB (agentic retrieval) — distinct model line but same family.

#### Cross-source comparison

- Official NVIDIA sources (blog + Hugging Face org) vs. independent evaluation signals (RTEB #1 for Nemotron 3 Embed lineage): consistent positioning of Nemotron family as strong agentic/multimodal; no direct conflicting benchmark rows found for "Nano Omni" specifically.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
