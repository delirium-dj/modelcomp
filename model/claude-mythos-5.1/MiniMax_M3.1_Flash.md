# Claude Mythos 5.1 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-mythos-5-1` — limited-access configuration of `claude-fable-5-1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** The **safeguard-relaxed configuration of Claude Fable 5.1**, published together with it in September 2026. Anthropic states plainly: "Claude Fable 5.1 and Claude Mythos 5.1 are the same model, but with different levels of safeguards. Fable 5.1 is generally available, while Mythos 5.1 is available only through our trusted access programs; its safeguards are specifically designed to support work in cybersecurity and the life sciences." The system card adds: "Claude Fable 5.1 and Claude Mythos 5.1 are two configurations of a new large language model from Anthropic, sharing identical model weights." **Identity note:** these are identical weights with identical base capability — only the safeguard profile and the access gate differ. This folder is therefore a *configuration* entry, not a separate model in the weights sense (the Anthropic-side way of expressing the difference is a product and access decision, not a new checkpoint).
- **Provider / access:** **limited access only** — Cyber Verification Program (CVP), Life Sciences Verification Program (LSVP) and Claude Security ("is now also powered by Claude Mythos 5.1"). "Currently, it is only available to a set of US organizations." There is **no public API id**, no OpenRouter route and no OpenCode Zen route for Mythos (verified: OpenRouter's model list, OpenCode Zen's 85-model list, and the AA model index all have no Mythos entry).
- **Release / knowledge:** system card dated **2026-09-01**, launched September 2026 alongside Fable 5.1. Knowledge cutoff **June 2026** ("The knowledge cutoff date for Fable 5.1 and Claude Mythos 5.1 is June 2026").
- **IDs:** API model id **not published**; the only public identifier is the product name "Claude Mythos 5.1" and the shared `claude-fable-5-1` id for the underlying model.
- **Context window:** **1M tokens** (system card, per the BenchLM spec sheet). Maximum output: **not published** for Mythos (the shared Fable 5.1 model has 128K).
- **Modalities:** output is text only ("Claude outputs text only"). Input modality list is **not published** for the Mythos configuration; the shared weights produce the Fable 5.1 vision/computer-use results listed below.
- **Pricing (as of 2026-10-19):** Anthropic prices the two configurations together — "Cache hits and refreshes on Claude Fable 5.1 and Claude Mythos 5.1 are priced at 0.025x the base input price" — i.e. the shared list price of **$10 input / $50 output** per 1M (5-minute cache write $12.50, 1-hour $20, cache read $0.25; Batch $5/$25). No Mythos-specific price sheet is published.
- **Architecture:** proprietary, closed weights ("Weights are not published"). Risk framing from the card: bio capability "still falls short of the next risk tier"; cyber — "the strongest cyber capabilities of any model we've released, though it still falls within the lower category of risk".

### Raw benchmarks found

> **All numbers below are Anthropic's own (system card) — there is no independent tracker with a Mythos row.** Numbers are split into (a) **Mythos-specific** scores, (b) the **shared Fable 5.1 / Mythos 5.1 table** (identical weights, published once for both), and (c) cyber-safety measurements that only exist for Mythos. Artificial Analysis, Vals AI, OpenRouter, OpenCode Zen and the official Terminal-Bench board have **no Mythos row at all**; the BenchLM ledger records exactly one row (Terminal-Bench 4.0, 60.90%, "Provider exact").

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Mythos-specific, Anthropic's own run: 10 trials/task, 660 trials, Claude Code `--bare`, max effort, SE ±1.6–2) — "Claude Mythos 5.1 scored 60.9% on Terminal-Bench 4.0, while Claude Fable 5.1 scored 55.8%"; **9.7 points behind** Claude Sonnet 5.5's best-verified 70.60%
- Toolathlon-Verified **77.8%** Pass@1, 81.5% Pass@3, 73.1% Pass³; AutomationBench **31.4%**; GDPval-AA v2 **1853 Elo**; AA-Briefcase **1694 Elo**; OSWorld 2.0 **77.9% partial / 41.7% strict**; HealthBench Professional **62.1%**; HLE **60.9%** without tools / **65.0%** with tools (shared Fable 5.1 / Mythos 5.1 table 8.1.A)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found** for Mythos specifically
- Tool use in the wild: Anthropic's program framing (Cyber Verification Program, Claude Security) is a deployment channel, not a measured tool-use score — no separate number published

Reasoning / knowledge:

- ArXivMath (June 2026, 49 problems): **91.33%** without tools / **93.88%** with tools (Mythos-specific, max effort, 4 runs per problem)
- BioMysteryBench — Human Solvable **90.3%**, Human Difficult **44.1%** (Mythos-specific; Opus 5 91.4% / 51.8% for comparison)
- LatchBio SpatialBench Verified **77.6%** — "Claude Mythos 5.1 achieved the top score at 77.6%"; LatchBio SingleCellBench **61.9%** — top score
- ProteinGym Hard **49.3%** — "the strongest result"; Protein Design sequence generation **46.0%**; library ranking **49.3%**; Organic chemistry V2 **69.2%** — "the strongest result"; Protocols troubleshooting **70.2%**, understanding **77.2%** (all Mythos-specific)
- ARC-AGI-1 **97.5%**, ARC-AGI-2 **90.0%**, SWE-bench Pro **81.2%**, Multilingual **89.1%**, Multimodal **54.7%**, Terminal-Bench-Science 0.1 **52.6%** (shared table)
- GPQA Diamond, LCR/MLCR, CritPt, FrontierMath, LiveCodeBench, ARC-AGI-3: **no Mythos-specific score published** (the shared table carries none of them)
- Risk/knowledge-adjacent measurements (Mythos-specific): cyber capability benchmark end-to-end **0.81** (Task 1) / **0.87** (Task 2); updated VCT **0.58** (Opus 5 0.55, Mythos 5 0.59); Anthropic ECI **161.98** (95% CI [158.20, 169.00], n=46) vs Mythos 5 159.46 and Opus 5 160.73

Coding:

- Terminal-Bench 4.0 **60.9%** (Mythos-specific) and Terminal-Bench-Science 0.1 **52.6%** (shared table) — the only two agentic-coding numbers for this configuration
- SWE-bench Pro **81.2%**, Multilingual **89.1%**, Multimodal **54.7%** (shared table) — identical weights, so these are the Mythos coding capability as measured for Fable 5.1
- DeepSWE v1.1 (67.4), SWE-bench Verified, LiveCodeBench, FrontierSWE v2 (0.57), CursorBench, FrontierCode, Vibe Code Bench: **published for Fable 5.1 only, not for Mythos**
- ExploitBench (41 V8 environments): mean **11.80** capability flags in the plain arm and **12.61** with AutoNudge; full exploits achieved in **222/410** runs
- OSS-Fuzz: top score 1.0 on **17** targets, above zero in **78.7%** of trials
- Firefox 147: **245/250** full exploits (**98.0%**)

Long context:

- 1M-token context window (system card). **No MRCR, RULER, GraphWalks or needle-in-haystack measurement** is published for Mythos or for the shared Fable 5.1 model, and no maximum-output figure is published for the Mythos configuration.

Independent trackers — nothing to compare against:

- Artificial Analysis `/models/claude-mythos-5-1` → **404** (and `/models/claude-mythos-5` → 404)
- Vals AI model page → **404**; LMArena → 403 (not verifiable)
- OpenRouter model API → **no Mythos route**; OpenCode Zen → **no Mythos route**
- Official Terminal-Bench 4.0 board → **no Mythos row** (its JSON lists Opus 5.5, Sonnet 5.5, Fable 5.1, Fable 5, GPT-6 Astra …)
- BenchLM: 1 of 644 benchmarks covered; "Published evidence is shown below; no public overall score is assigned."

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Because every number is Anthropic's own and no independent tracker measures this configuration, the scores are anchored on the shared Fable 5.1 / Mythos 5.1 table (identical weights) and the Mythos-specific rows, and the confidence caveat is stated in each line. Cost is scored on the shared Fable 5.1 list price, since Anthropic prices the two configurations together.

- **Tool use: 85/100.** The strongest published agentic number is Terminal-Bench 4.0 **60.9%** — Anthropic's own run at max effort — which beats Fable 5.1's 55.8% and Opus 5's 37.3% but sits below Claude Sonnet 5.5's best-verified 70.60%. Shared-table support: Toolathlon-Verified 77.8% Pass@1 with Pass³ 73.1%, GDPval-AA 1853 Elo, AA-Briefcase 1694, OSWorld 2.0 77.9% partial / 41.7% strict, AutomationBench 31.4%. Capped by the absence of any τ-bench, Claw-Eval, MCP-Atlas or Toolathon number for Mythos and by AutomationBench's weak strict score; the cyber-specific capability numbers (ExploitBench 11.80/12.61 flags, 222/410 full exploits, Firefox 147 245/250) are measured on the *relaxed* safeguard arm and are not directly comparable to other models' numbers.
- **Reasoning: 86/100.** Mythos-specific reasoning/knowledge results are strong and leader-leading in the life sciences: BioMysteryBench 90.3% / 44.1%, SpatialBench Verified 77.6% (top score), SingleCellBench 61.9% (top), ProteinGym Hard 49.3% (strongest), Protein Design 46.0% / 49.3%, Organic chemistry V2 69.2% (strongest), Protocols 70.2% / 77.2%, ArXivMath 91.33% / 93.88% (max effort, 4 runs per problem), plus the shared-table HLE 60.9% no-tools / 65.0% with-tools. Capped because **GPQA, FrontierMath, ARC-AGI-3, LCR/MLCR and CritPt are not published for this configuration**, and because the whole evidence set is provider-only with no independent replication.
- **Context window: 94/100.** 1M-token window per the system card, matching the rubric's top tier (≥1M = 95–100), but with no maximum-output figure published for Mythos and **no measured long-context retrieval** (no MRCR / RULER / GraphWalks). Below the 95–100 band because the rubric's 100 additionally requires ≥98% retrieval at 512K+, and because the shared model's output cap is only 128K.
- **Multimodal: 70/100.** The shared weights produce the Fable 5.1 vision and computer-use results (OfficeQA 80.2% / OfficeQA Pro 69.0%, Chartography 42.6% without tools / 86.2% with tools, SWE-bench Multimodal 54.7%, OSWorld 2.0 77.9% partial), so image input is a real capability; output is text only. Held at the top of the rubric's "+image in = 60–70" band because the Mythos configuration's own input-modality list is **not published** and no Mythos-specific vision evaluation exists.
- **Coding: 88/100.** The shared table gives SWE-bench Pro 81.2% (identical weights → the Mythos coding profile), Multilingual 89.1%, Multimodal 54.7%, Terminal-Bench-Science 0.1 52.6%, plus the Mythos-specific Terminal-Bench 4.0 60.9% (Anthropic's own run). Capped by the absence of Mythos-specific DeepSWE, FrontierSWE v2, SWE-bench Verified, LiveCodeBench and Vibe Code Bench numbers, and by the 60.9% Terminal-Bench 4.0 sitting below the current best-verified 70.60%.
- **Cost efficiency: 30/100.** Anthropic prices Fable 5.1 and Mythos 5.1 together — "Cache hits and refreshes on Claude Fable 5.1 and Claude Mythos 5.1 are priced at 0.025x the base input price" — so the shared list price of **$10 input / $50 output** per 1M (cache read $0.25, 5-minute cache write $12.50, Batch $5/$25) applies, which is the rubric's "~$10/$50 = ~30" anchor. It is also the least accessible model in this batch: no public API id, no aggregator route, and access limited to a set of US organizations in verification programs, so the real-world effective cost is higher than the headline.
- **Overall Score: 84.6/100.** (85 + 86 + 94 + 70 + 88) / 5 = 84.6 — best-fit: a frontier-capable configuration whose *access* (not its capability) is the binding constraint — best used for authorized cyber-defence and life-sciences research under Anthropic's verification programs, where its relaxed safeguards are the point. For everyone else it is the same weights as the generally available Claude Fable 5.1, which scores higher on the same published table.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Coverage conflict, not a number conflict.** BenchLM shows exactly one row (Terminal-Bench 4.0 = 60.90%, evidence "Provider exact", gap 9.7 behind Claude Sonnet 5.5's 70.60%) and assigns **no public overall score**; Anthropic's system card in fact publishes ~20 Mythos-specific numbers. The tracker's coverage, not the data, is the bottleneck — resolved by scoring against the system card directly.
2. **Precision only.** The card's table prints "Terminal-Bench 4.0 56% (61%)" (Fable, Mythos in parentheses) versus §8.6's "55.8% / 60.9%" — rounding, not disagreement.
3. **Provider-internal run.** The 60.9% is Anthropic's own Claude Code `--bare` setup; the same card notes the public leaderboard reports Opus 5 at 51.8% against Anthropic's 52.3% — "within the noise of our internal setup". So vendor numbers on this model carry a known ±(setup) uncertainty; that is why every score line above is capped.
4. **CharXiv 88.9% is Mythos 5, not Mythos 5.1.** BenchLM's *Claude Mythos 5* page lists CharXiv 93.5% and CharXiv w/o tools 88.9% from the Fable 5 & Mythos 5 card; the 5.1 card contains no CharXiv figures. These are different releases and must not be merged.
5. **CyberGym 83.8% is Mythos 5, not 5.1** — the 5.1 card states "we have retired CyberGym from this system card due to saturation."
6. **Chartography is Fable-only** in the 5.1 card (42.6% no-tools / 86.2% with-tools) and is attributed here only through the shared-weights relationship, not as a Mythos-specific score.
7. **Access and export-control history.** Press items record a US-government directive suspending Fable/Mythos access (2026-06-13), a later lifting of export controls (2026-06-30), and a 30-day data-retention requirement for Fable and Mythos. These are operational facts that bear on the cost/effectiveness score and are recorded, not scored.

### Notes on identity (important for this folder)

- Anthropic's own wording makes Mythos 5.1 a **safeguard configuration of Fable 5.1 with identical weights** — "the same model, but with different levels of safeguards" and "sharing identical model weights". It is *not* a new checkpoint, *not* a pricing tier, and *not* a distinct vendor id (no API model id is published).
- Therefore this folder tracks a **product/access configuration**, not an independent model in the weights sense. Its numbers are, by construction, the same capability as `model/claude-fable-5.1/`; the differences are safeguards and access.
- Per the project's permanence rules this folder was **not** merged, renamed or deleted — any decision to fold Mythos 5.1 into `model/claude-fable-5.1/` (or to keep it as a restricted-configuration entry) needs explicit user sign-off.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic's Fable 5.1 / Mythos 5.1 launch page and the 212-page joint system card (PDF text extracted, §§2/3/6/8 + tables 8.1.A), the BenchLM evidence ledger and spec sheet, and negative verification across Artificial Analysis, Vals AI, OpenRouter, OpenCode Zen, the official Terminal-Bench board and LMArena (no Mythos row or route anywhere). Every number is attributed to the primary source and labelled provider-exact; no number was inferred from another model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5.1.md`, using the same headings.
