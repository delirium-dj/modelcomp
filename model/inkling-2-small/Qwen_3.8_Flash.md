# Fledge Alpha — findings by Qwen 3.8 Flash

- Source: OpenCode Zen stealth listing (`opencode/fledge-alpha-free`; no lab attribution) — cross-checked against the OpenCode Zen changelog, community stealth-model trackers (stealthmodels.com via sulat.com), and user reports (X/r/linkedin/youtube coverage of the Oct-2026 drop)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha (Zen route `fledge-alpha-free`)
- **Short description:** OpenCode Zen's **unidentified-vendor free stealth preview** — a mystery model that appeared in the Zen API pool on **2026-10-01** at $0/$0 with a 1M context and image input, and was **silently retired by 2026-10-08** (a ~7-day window). It shipped with **no lab name, no model card, no published benchmarks, and no successor** — a classic "mystery-meat" stealth tier that vanished without notice. Community trackers logged only an output speed (~61 tok/s). Scores below are **documentation-grade, not measured**: they record the *absence of evidence*, not a capability judgement.
- **Provider / access:** OpenCode Zen (`opencode/fledge-alpha-free`); free during the 2026-10-01 → 2026-10-08 preview; **no longer served** (retired, `noFreeId: true`, was never listed in the Zen free-model notes).
- **Release / knowledge:** listed 2026-10-01; retired on/before 2026-10-08. Vendor, architecture, parameter count and knowledge cutoff all undisclosed.
- **IDs:** `opencode/fledge-alpha-free`. **No upstream vendor ID was ever published.** (Community speculation linked the stealth route to the Thinking Machines *Inkling* project, but that is unconfirmed rumor — per the exact-ID rule it is **not** treated as an identity match; `model/inkling/` is a separate registry line.)
- **Context window:** **1,048,576 (1M) total / 131,072 max output** (Zen listing spec; entirely unverified — no retrieval/needle evidence published for the route).
- **Modalities:** **Text + image in; text out** (per the Zen listing). No audio/video, no image generation. Vision quality never benchmarked.
- **Pricing (as of retirement):** **$0 / $0** (free preview). No paid tier ever published; the route no longer resolves, so no live price exists. Cost excluded from Overall.
- **Architecture:** proprietary/unknown — undisclosed vendor, undisclosed parameters.

### Raw benchmarks found

> **There are none.** No Artificial Analysis page, no BenchLM page, and no vendor model card were ever published for this route. The only externally logged metric is an approximate **output throughput of ~61 tok/s** (stealthmodels.com third-party review, surfaced via the Sulat model page, 2026-09-30). GPQA / HLE / MMLU-Pro / SWE-bench / Terminal-Bench / τ² / MRCR / MMMU / GDPval / AA Intelligence Index: **no verified public score found for this ID** — none can exist, because the listing carries no attribution and was retired in under a week.

- Speed: ~**61 tok/s** output (third-party, single anecdotal measurement)
- Quality / agent / coding / reasoning / long-context retrieval: **no published numbers of any kind**
- Qualitative community signal only (user threads describing it as an average-to-mid tier behind contemporaries such as Exo Free; anecdotal, non-quantitative)

### Normalized scores (1–100)

> **Documentation-grade, evidence-void bands.** Per methodology, capability is credited only on evidence; with zero benchmarks and a retired, unattributed endpoint, every quality band sits at a low, explicitly-unmeasured floor. These numbers mean "cannot be scored higher for lack of data," **not** "measured weak."

- **Tool use: 30/100.** No agentic benchmark (τ², Toolathlon, MCP, GDPval, Terminal-Bench) exists for the route. Floor reflects total absence of evidence, not a measured result.
- **Reasoning: 30/100.** No GPQA/HLE/MMLU/AA-Index row was ever published. Unscorable; floor only.
- **Context window: 55/100.** The listing states a nominal **1M / 131K** window (which alone would band high), but it is entirely retrieval-unverified (no MRCR/RULER/needle) and the endpoint is now dead — a paper spec that can no longer be tested. Mid-band with a heavy unverified/defunct discount.
- **Multimodal: 35/100.** **Text + image in, text out** is confirmed by the Zen listing, so it clears the text-only floor, but vision quality was never benchmarked and the modality claim is a spec line, not a measurement. Entered deep in the +image band.
- **Coding: 25/100.** No LiveCodeBench / SWE / SciCode / DeepSWE / Terminal-Bench row of any kind exists for this ID. Floor only.
- **Cost efficiency: 100/100 (non-scoring).** $0/$0 during the preview was maximal value — but the route no longer exists, so the free cost is historical and unreplicable. Cost excluded from Overall per `RULES.md`.
- **Overall Score: 35/100.** Half-up mean of the five quality dims (30 + 30 + 55 + 35 + 25)/5 = 175/5 = 35.0 → **35**. **Best (only) fit: a historical curiosity / registry completeness entry** — an unattributed mystery endpoint documented because it was queued, not because it is usable or evaluated. It should **not** be routed against; there is no evidence base and no live endpoint. Its Overall is a floor artifact of the evidence void, and would move in *either* direction if (improbably) a model card or AA row later surfaced.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04
- Method: fresh public internet research (OpenCode Zen changelog for the 2026-10-01 → 10-08 preview window; stealth-model community trackers — Mikel Echevarría on X, stealthmodels.com/Sulat 61 tok/s note, LinkedIn/r/YouTube coverage of the drop) + curated `meta.json` (honest: 1M ctx, text+image, $0/$0, retired, no successor, no benchmarks). **This is a first-pass written for a model with a total evidence void:** every quality band is an explicit unmeasured floor, not a measurement. The Thinking-Machines/Inkling speculation is recorded but **rejected as an identity match** (exact-ID rule). Scores are documentation-grade and the model is flagged **`legacy` — retired with no successor.**
- Lifecycle flag: **`legacy`** — the `fledge-alpha-free` Zen route was retired by 2026-10-08; requests no longer resolve; no successor or paid tier was ever published.
- Revisit trigger: only if OpenCode (or the anonymous vendor) republishes the route with attribution, a model card, or an Artificial Analysis / BenchLM row — at which point re-score all five quality dims from real data. Until then this file intentionally stays at the evidence floor.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `Qwen_3.8_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Qwen_3.8_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Fledge Alpha — findings by Qwen 3.8 Flash (self-excluded: no verified benchmark)

- Source: OpenCode Zen (`opencode/fledge-alpha-free`) — stealth/anonymous listing, **Lab: Unknown**
- Archived date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **EXCLUSION NOTE (RULES.md / `tasks/research.md` Rule 9 — SELF-EXCLUSION):**
> Independent fresh web research returned **zero verified public benchmark numbers** for this exact model/ID. The authoritative OpenCode data page (updated 2026-10-04) lists Lab **Unknown** and every capability field — context window, max output, modalities, reasoning, tool calling, open weights, release date, pricing — as **`-` (undisclosed)**. With no GPQA / SWE-bench / Terminal-Bench / BFCL / AA-Index / HLE measurement for this ID, any normalized score would be invention, which drags the cohort mean for every reader (`pnpm sync` auto-quarantines evidence-free files). Saved as `.md.excluded`, **not** a scored report. Scores inside are intentionally absent.

### Model card (verified facts only)

- **Name:** Fledge Alpha (free stealth variant `opencode/fledge-alpha-free`)
- **Short description:** An anonymous ("stealth") model dropped onto OpenCode Zen with no attributed lab. Community speculation (r/LocalLLaMA) floats DeepSeek V4.1 Pro / an unrevealed flagship, but **no identity has been confirmed** — unlike `Ox Alpha`, which was later revealed as Z.ai GLM-5.3-Flash, Fledge Alpha remains unrevealed.
- **Provider / access:** OpenCode Zen `opencode/fledge-alpha-free`. (Mastra's router table renders a default `1.0M` context and blank pricing; the first-party OpenCode data page reports context/pricing as unknown, so the metadata is treated as **unconfirmed**.)
- **Release / knowledge:** Not disclosed.
- **IDs:** `opencode/fledge-alpha-free`
- **Context window:** Undisclosed (`-` on the canonical data page; unverified `1M` only in a third-party router default).
- **Modalities:** Undisclosed.
- **Pricing:** Listed as free preview on Zen (`—` in/out); not confirmed.
- **Architecture:** Unknown.
- **Usage telemetry (the only measured signal found):** ~**543B** OpenCode tokens over the past 2 months; **0.1%** share of all tokens; **#13** by tokens last week; **147K** unique users. High *adoption*, but adoption is not a quality benchmark and cannot populate the five dims.

## Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1 / Tau3 / GDPval-AA / BFCL-V4: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond / HLE / MMLU-Pro / AA Intelligence Index / Omniscience: **no verified public score found**

Coding:
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:
- MRCR / RULER / GraphWalks: **no verified public score found** (context window itself undisclosed)

Multimodal:
- Image / audio / video / PDF: **no verified public score found** (modalities undisclosed)

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

### Re-verification addendum — 2026‑10‑08 (UTC)

Deeper research per `RULES.md` L17‑21. **Trigger has not fired.** The OpenCode Zen listing is still an **anonymous ID with no lab, no specs and no benchmark table** (community summary: "Fledge Alpha is the new free stealth model in OpenCode. **No lab, no specs, no benchmarks on the data page**. It went from 1 user to 1,818…"), and the routing hypothesis has strengthened rather than resolved: "New fledge alpha model is a **router** … Deepseek 4.1, kimi (k3?) and unknown". Two IDs exist — `fledge-alpha` and the free tier `opencode/fledge-alpha-free` (models.dev / Mastra confirm **1.0M context**, text+image in, reasoning low·high·max, **131,072 max output**, **no price published**). Third‑party probe pages (e.g. stealthmodels.com) publish **specs only, no attributable GPQA/SWE/Terminal‑Bench rows**. Because a router's output cannot be attributed to a single model, **no capability dimension is verifiable** and `Overall` is not computable — the self‑exclusion stands. Retire this only on an identity reveal (the Ox Alpha → GLM‑5.3‑Flash pattern) with published numbers.
