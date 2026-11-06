# Codestral 25.08 — findings by GLM 5.3 Flash

- Source: Mistral/codestral-25.08 (`codestral-2508`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral's FIM (fill-in-the-middle) code-completion model update of July 2025 — a latency-sensitive completion specialist for IDE autocomplete, not an agentic coding flagship. Ships in the Mistral coding stack (Codestral + Codestral Embed + Devstral + Mistral Code IDE plugin) and supports a chat mode.
- **Provider / access:** Mistral API (`codestral-2508`, alias `codestral-latest`) — Chat Completions (`/v1/chat/completions`) plus a dedicated FIM endpoint (`POST /v1/fim/completions`); deployable cloud, VPC or on-prem; gated Hugging Face checkpoint (`mistralai/Codestral-2508`).
- **Release / knowledge:** released 2025-07-30 (announcement); knowledge cutoff not published on the consulted vendor pages (no verified public cutoff found).
- **IDs:** `codestral-2508` / `codestral-latest` (Mistral API); `mistralai/Codestral-2508` (HF, gated). No OpenCode Zen free ID exists (model absent from the current Zen catalog).
- **Context window:** 256,000 total per the live `/v1/models` capability check (recorded in models.dev, verified 2026-10-19; Mistral's docs page says 128K — live API value cited, discrepancy noted). Max output not published on consulted pages.
- **Modalities:** text + PDF in (chat accepts `document_url`/base64 PDFs — live-verified 2026-10-19); text out. Tools yes (all five `tool_choice` forms incl. strict functions — live-verified); structured output (json_schema) yes; prompt caching yes (automatic 64-token blocks, $0.03/M cached read). FIM endpoint takes prompt+suffix, no tools.
- **Pricing (as of 2026-11-06):** $0.30/M input, $0.90/M output, cached input $0.03/M (Mistral API pricing, live-verified 2026-10-19).
- **Architecture:** parameters not published on consulted pages (predecessor Codestral 25.01 was a ~24B dense model; 25.08 size unverified — not asserted). Available self-hosted via gated weights; API serving is proprietary.

### Raw benchmarks found

No absolute third-party benchmark numbers were found for this exact ID (BenchLM has no page; no SWE-bench / LiveCodeBench / HumanEval absolute value published). The verified evidence is vendor-measured relative deltas plus live-verified API capabilities; normalization below is therefore provisional.

Coding / completion (vendor-measured, relative to Codestral 25.01):

- Accepted completions: **+30%** (vendor, live IDE validation across production codebases)
- Retained code after suggestion: **+10%** (vendor)
- Runaway generations: **−50%** (vendor)
- Short- and long-context FIM academic benchmarks: improved (vendor claim, no values printed)

Chat mode (vendor-measured, relative to 25.01):

- Instruction following: **+5%** on IF eval v8 (vendor)
- MultiplE average: **+5%** (vendor)

Agent / tool use:

- Terminal-Bench / Tau2 / Tau3 / GDPval-AA / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / Intelligence Index: no verified public score found

Long context:

- No long-context retrieval scores (MRCR / RULER / GraphWalks) found; 256K is a live API capability value.

### Normalized scores (1–100)

- **Tool use: 30/100.** Tool-calling API fully verified (all five `tool_choice` forms, strict functions) but zero agentic benchmark evidence (no TB/Tau/GDPval) and completion-first positioning cap it near the bottom of the mid band.
- **Reasoning: 28/100.** No reasoning benchmark exists for this ID; the only signal is a vendor +5% MultiplE chat delta over 25.01 — provisional, kept low.
- **Context window: 72/100.** 256K live-verified total context → 200K–500K tier (200K ≈ 70, slight step up); no retrieval-at-length data.
- **Multimodal: 72/100.** Text + PDF document input (live-verified base64 PDF reading) puts it in the +PDF-in band (75–90) at its low end; no image/audio/video input.
- **Coding: 52/100.** Vendor-measured +30% accepted completions / +10% retained code over the already-strong 25.01 and best-in-class FIM positioning, but no absolute public agentic-coding number (SWE-bench, LiveCodeBench) exists — provisional mid score, capped by missing evidence.
- **Cost efficiency: 94/100.** $0.30/$0.90 with $0.03 cached reads undercuts the ~$0.60/$2.20 ≈ 92 reference point; strong value for an IDE-completion workhorse.
- **Overall Score: 51/100.** (30 + 28 + 72 + 72 + 52) / 5 = 50.8 → 51. Best fit: a cheap, self-hostable FIM autocomplete engine for IDEs and high-volume completion — pair it with an agentic model (Devstral or similar) for multi-file work rather than using it as a reasoning or agent model.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-06
- Method: public internet research (vendor announcement, models.dev live-verified TOML, Hugging Face availability check); scores are normalized 1–100 interpretations, not official vendor scores. Absolute benchmarks are absent for this ID — normalization leans on vendor relative deltas and live-verified specs and is marked provisional.
- Reference URLs:
  - [Announcing Codestral 25.08 and the Complete Mistral Coding Stack — Mistral (2025-07-30)](https://mistral.ai/news/codestral-25-08)
  - [Codestral 25.08 docs page — Mistral docs](https://docs.mistral.ai/models/codestral-25-08)
  - [models.dev — mistral/codestral-2508 TOML (live-verified 2026-10-19)](https://raw.githubusercontent.com/anomalyco/models.dev/dev/providers/mistral/models/codestral-2508.toml)
  - [Hugging Face — mistralai/Codestral-2508 (gated checkpoint)](https://huggingface.co/mistralai/Codestral-2508)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
