# Gemini 4 Carbon — findings by Qwen 3.8 Flash

- Source: Google DeepMind (`Gemini 4 Carbon`, curated id `opencode/gemini-4-carbon`), cross-checked against Artificial Analysis (Intelligence Index v5) and Google's own launch benchmark table
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's strongest frontier model, positioned for **state-of-the-art cybersecurity defense and long-horizon agentic engineering** — announced 2026-10-28 as the successor to Gemini 4 Argon (launched ~2 weeks earlier). **#1 on the Artificial Analysis Intelligence Index v5 (59)** and #2 on the AA Coding Agent Index, behind only Claude Opus 5.5. Not a variant of Argon — a distinct, higher-tier generation.
- **Provider / access:** Google DeepMind / Google. **Gated rollout** — offered to a subset of cyber defenders via the "Fairwind Program" and trusted partners; **not yet publicly available** to developers/businesses/consumers as of this pass (in US-government voluntary pre-release testing). Developer surfaces "soon."
- **Release / knowledge:** announced **2026-10-28**; knowledge cutoff not separately published by Google.
- **IDs:** curated `opencode/gemini-4-carbon`; no public self-serve API ID yet (gated). `noFreeId` (no free tier).
- **Context window:** **1M tokens** (Artificial Analysis model page + launch). Sustained long-horizon use reported internally ("run for days"), but no published MRCR/RULER single-window retrieval absolute for this exact ID.
- **Modalities:** **text + image + video + speech in; text out** (AA). Reasoning-effort ladder with a "High" setting used in the headline measurements.
- **Pricing (as of 2026-11-06):** standard **$4 / $20 per 1M** in/out (same card as Argon), **cached input $0.20/M (95% off)**; **introductory $2 / $10 per 1M** (50% launch discount, no confirmed end date). AA Cost per Intelligence-Index task **$7.76** at standard pricing (~23% below Claude Opus 5.5 max $10.04; ~1.2× GPT-6 Astra max $6.25).
- **Architecture:** proprietary; undisclosed params. Built on the Argon safety/security stack (multi-layered misuse defenses, prompt-injection resilience, chain-of-thought monitoring).

### Raw benchmarks found

> Provenance: AA Intelligence Index v5 and AA model page are independent; the cyber rows (SEC-bench Pro / ExploitGym / CWE-bench) and WebDev Arena / alignment deltas are Google's own launch table (vendor-run, evaluated without guardrails), flagged inline.

Agent / tool use:

- Terminal-Bench 4.0: **64%** (AA Coding Agent harness, high reasoning; #2 behind Claude Opus 5.5)
- AA Coding Agent Index: **59** (Antigravity CLI; #2 overall, 3 points behind Claude Code + Opus 5.5 max at 62)
- AutomationBench-AA: **#1 in-category** (one of the 4 of 9 Index sub-evals Carbon leads)
- Gray Swan Indirect Prompt Injection: **0.0% attack success** (vs Argon 0.7%) — vendor
- Terminal-Bench 4.0 cheat-success: **0.0%** (attempts 0.4%) — vendor alignment claim

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5: **59 (#1)** (independent; Google creator page shows a **60 "High"** best-effort variant)
- HLE-Diamond: **69.1% (#1)** (AA; top of cohort)
- AA-Omniscience v1.1: **54 (#1)** (AA; accuracy 58%, hallucination 11% — 2nd-lowest behind Argon)
- Terminal-Bench-Science: **#1 in-category** (one of 4 Index sub-evals led)
- AA-Briefcase (agentic knowledge work): **1609 Elo** (+126 vs Argon 1483; behind Grok 4.7 1638, Muse Wonder 1659, Kimi K3.1 Pro 1678)

Coding:

- SEC-bench Pro (vulnerability discovery): **88.2% (SOTA)** — vendor
- ExploitGym (exploitation): **54.8% (SOTA)** — vendor
- CWE-bench / Collinear (root-cause patching): **71.0%** — vendor
- FrontierCode v1.1: **51%** (AA; #2 behind Opus 5.5)
- WebDev Arena: **1768 Elo (#4)**, +89 vs prior — vendor

Long context:

- **1M window listed**; **no published MRCR/RULER retrieval absolute** for this exact ID.

### Normalized scores (1–100)

- **Tool use: 86/100.** Genuinely agentic — #2 on the AA Coding Agent Index (59), Terminal-Bench 4.0 64%, and a striking 0.0% prompt-injection success rate make it a safe, high-throughput agent; held just below the top band because it is gated (no broad independent reproduction) and Claude Opus 5.5 still leads the agentic-coding lane.
- **Reasoning: 93/100.** The clearest strength: **#1 on Intelligence Index v5 (59)**, #1 on HLE-Diamond (69.1%) and AA-Omniscience (54, lowest-hallucination class), and first in 4 of 9 Index sub-evals. Top-of-cohort reasoning, independent-confirmed.
- **Context window: 90/100.** A full **1M** window plus documented multi-day long-horizon persistence put it in the top tier; capped short of perfect only by the absence of a published single-window retrieval absolute (MRCR/RULER) for this exact ID.
- **Multimodal: 84/100.** Widest input coverage in the cohort — **text + image + video + speech in** — with strong full-stack/multimodal web output; docked because output is **text-only** (no image/audio/video generation), so it is a perceiver, not a generator.
- **Coding: 88/100.** State-of-the-art in the security-coding lifecycle (SEC-bench 88.2 / ExploitGym 54.8 / CWE-bench 71.0) and #2 general coder behind Opus 5.5; not the outright #1 on the general coding lane, and the headline cyber absolutes are vendor-run, so it sits just below the very top.
- **Cost efficiency: 66/100.** Premium **$4/$20** standard (intro $2/$10, cached −95%), **$7.76/task** — cheaper than Opus 5.5 per task and 29% fewer output tokens, but an expensive absolute frontier price on top of gated availability.
- **Overall Score: 88.2/100.** Half-up mean of the five quality dims (86+93+90+84+88)/5 = 88.2 (Cost excluded). Best fit: **security-defense teams and long-horizon engineering** that need the strongest public reasoner (AA #1) with SOTA vulnerability-finding/exploitation/patching and a 1M window — as soon as the gated rollout opens self-serve access. **Independence note:** scored below the queue aggregate (92.3) because the general coding lane is still led by Claude Opus 5.5 and the cyber absolutes are vendor-only; the reasoning/context leadership is what carries it.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-06
- Method: public internet research — Google's "Introducing Gemini 4 Carbon" launch post (2026-10-28: AA Index v5 59 #1, SEC-bench Pro 88.2%, ExploitGym 54.8%, CWE-bench 71.0%, WebDev Arena #4/1768, IPI 0.0%, $2/$10 intro + $4/$20 standard, gated Fairwind rollout) and Artificial Analysis's independent "Gemini 4 Carbon is the new #1" analysis + model page (Index 59, HLE-Diamond 69.1%, AA-Omniscience 54, Coding Agent Index 59 / Terminal-Bench 4.0 64% / FrontierCode 51% #2 behind Opus 5.5, AA-Briefcase 1609 Elo, $7.76/task, 1M ctx, text+image+video+speech in / text out). Vendor vs independent provenance is flagged inline; no values copied from peer reports. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Introducing Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Artificial Analysis — Gemini 4 Carbon is the new #1 on the Intelligence Index v5](https://artificialanalysis.ai/articles/gemini-4-carbon-new-number-1)
  - [Artificial Analysis — Gemini 4 Carbon model page](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [Artificial Analysis — HLE-Diamond benchmark](https://artificialanalysis.ai/evaluations/hle-diamond)
- Revisit trigger: Google opening self-serve developer access with a public API ID, publishing a first-party knowledge cutoff, or AA/Google exposing same-harness SWE-bench Verified / MRCR / GPQA rows for this exact ID (the cyber absolutes are currently vendor-only and the general coding lane is led by Claude Opus 5.5).
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
