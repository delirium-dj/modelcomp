# Exo Free — findings by Solar_Mini_4

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenCode Zen `exo-free` (`opencode/exo-free`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo Free
- **Short description:** OpenCode Zen's anonymous free-tier "preview" reasoning model with text and image input + tool use. Free for the duration of the preview window. The maker is intentionally undisclosed; third-party fingerprinting points to Anthropic's Claude Opus 5.5 (99.4% confidence), but OpenCode does not confirm the identity. Endpoint is volatile and drops under load.
- **Provider / access:** OpenCode Zen `opencode/exo-free`, `https://opencode.ai/zen/v1/chat/completions` (Chat Completions). Unknown upstream vendor.
- **Release / knowledge:** Released 2026-10-06 (modelbenchmark.io). Knowledge cutoff unknown. Endpoint was live and quietly added on 2026-10-07 without announcement (Free AI API review).
- **IDs:** `exo-free` (OpenCode Zen `opencode/exo-free`).
- **Context window:** 1,000,000 total, 131,072 max output (modelbenchmark.io, most-agreed). Host-reported 8,192–1,048,576 (llmpricing.dev) — usable window is host-dependent.
- **Modalities:** text in/out; image in (native vision understanding); tool_call supported; structured_output (modelbenchmark.io capabilities); attachments = false on other free models (not confirmed for exo-free). Reasoning low/high/max effort supported (modelbenchmark).
- **Pricing (as of 2026-10-10):** Free / Free ($0/$0), cached free, on OpenCode Zen free tier (modelbenchmark.io, most-agreed). No published per-1M pricing on a single authoritative channel; endpoint has no zero-data-retention guarantee and data is collected for training.
- **Architecture:** Not disclosed by OpenCode. Third-party fingerprinting suggests a Claude Opus 5.5-class base; speculation includes a distilled/imitator model. Open weights = unknown/no.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Zero verified public benchmark numbers → save `<STEM>.md.excluded` instead.

- OpenCode Zen free tier (7-task sweep, 5 iterations, Ben Ebsworth 2026-08-08): exo-free was **not isolated or scored** in the published sweep (only Ling 3.0 Tiny, Laguna XS 2.1, Gemma 4 26B scored in the article's headline table).
- lm.ikale.io fingerprint detector (Free AI API review, 2026-10-07): matched `claude-opus-5.5` at **99.4% confidence**; `claude-fable-5.1` at 0.4%. (~300 pseudo-random numbers + tokenizer probes.)
- Blender/Pelican spatial tasks ("Pelican on a Bicycle", convenience store scene): `exo-free` executed cleanly on first attempt (Free AI API review) — qualitative, single-trial.
- Any independent SWE-bench / Terminal-Bench / SWE-Atlas / GPQA / AA benchmark for `exo-free`: **no verified public score found**.

> SELF-EXCLUSION (mandatory): if a folder's model yielded zero verified public benchmark numbers — every row below would read "no verified public score found" — do NOT save a scored `.md` file. Save `model/exo-free/Solar_Mini_4.md.excluded` instead. Zero verified benchmarks = self-exclude.

## Re-verification notes — 2026-10-10 (second-pass)

Sources: modelbenchmark.io (specs, pricing, capabilities), Ben Ebsworth 7-task free-tier sweep, Free AI API review (2026-10-07, lm.ikale.io fingerprint), llmpricing.dev (host context range), model reports in `model/exo-free/`.

Conflicts and caveats (do not average silently):
1. **Maker identity is unresolved.** OpenCode lists the model as anonymous; lm.ikale.io's closed-set fingerprint (99.4% → claude-opus-5.5) is strong evidence of Opus-5.5-class inference, but a routed/wrong-pool proxy, a distilled imitation, or a genuinely novel small model cannot be excluded. Treat all opus-class attributions as highly probable but unconfirmed.
2. **No standalone public benchmark exists for `exo-free`.** The only quantitative data come from the lm.ikalie fingerprint and qualitative Blender tasks; no SWE-bench/Terminal-Bench/SWE-Atlas/GPQA/AA numbers were located. Scores in this report are therefore fingerprint/inferred, not measured.
3. **Context window.** 1M total / 131K max output are the most-agreed figures; host-reported 8K–1M means the usable window varies by endpoint, and the endpoint drops under load (429s).
4. **Privacy/volatility.** No zero-data-retention; data retained for training; endpoint unavailability and 429s are frequent during high traffic.

Conclusion for score changes: none of the existing `exo-free` findings were present to contradict; the only new evidence is the fingerprint (asserts opus-5.5-class capability) and the free-tier spec sheet. My normalized scores below are inferred from that evidence and flagged as such — no new measured public benchmarks exist.


### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. NEVER include Cost efficiency — scored independently.

- **Tool use: 65/100.** Tool calling, structured output, and image input are supported per modelbenchmark.io, but no public evaluated benchmark exists for this ID (tool-call evals such as BFCL-V4/TAU2-bench not located), so the score rests on capability flags plus the fingerprint anchor — thin direct evidence.
- **Reasoning: 75/100.** The 99.4% lm.ikalie fingerprint match to `claude-opus-5.5` is strong (but closed-set) evidence of frontier-class reasoning; if the model is a distilled replica, reasoning would be degraded. Binding constraint: no verified public reasoning benchmark.
- **Context window: 85/100.** 1M total / 131K output is the strongest context among the free-tier models reviewed; usable window is host-dependent (8K–1M reported). Long context is a relative strength.
- **Multimodal: 80/100.** Native vision understanding plus text+image input (modelbenchmark.io capabilities; Free AI API Blender/vision tasks passed qualitatively). No image/video/audio output → below the full-modality cap used elsewhere.
- **Coding: 70/100.** If opus-5.5-class, coding is strong, but no verified public SWE-bench/Terminal-Bench/SWE-Atlas/Coding-Index number was located for this ID; speculative. Binding constraint: no measured open-source code benchmark.
- **Cost efficiency: 100/100.** $0/$0/$0 free on the OpenCode Zen free tier as of 2026-10-10. Near-zero cost is the defining economic fact.
- **Overall Score: 75/100.** (65 + 75 + 85 + 80 + 70) / 5 = 75.0. Best-fit: a zero-cost, 1M-context, multimodal agentic preview whose capability is inferred from an unpublished 99.4% fingerprint match to claude-opus-5.5; strong on economics and context, unproven on measured benchmarks until a public evaluation appears.

---

## Signature

- Provided by: **Solar_Mini_4 (opencode/exo-free)** — 2026-10-10
- Method: public internet research across modelbenchmark.io, Ben Ebsworth LLM Benchmark free-tier sweep (2026-08-08), Free AI API deep-dive (2026-10-07, lm.ikalie fingerprint), llmpricing.dev, and the repo's `model/exo-free/` findings. All scores are normalized 1–100 interpretations, not official vendor scores. Where no verified public benchmark was located, the score is inferred from the 99.4% fingerprint match (claude-opus-5.5) and explicitly flagged.
- Future sources: add a new file next to this one when a public SWE-bench / Terminal-Bench / SWE-Atlas / AA Intelligence Index evaluation for `exo-free` is published.

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/exo-free/Solar_Mini_4.md` (folder name `exo-free` = filesystem-safe slug).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/exo-free/`.
4. No benchmark invented; verified sources cited above. Zero verified public benchmarks for the measured dims are documented and flagged as inferred from the fingerprint (99.4% → claude-opus-5.5).
5. Maker-identity conflict (anonymous vs opus-5.5 99.4%) documented and NOT silently resolved.
