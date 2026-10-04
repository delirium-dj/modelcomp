# Qwen3.5 Plus — findings by Claude Opus 5

- Source: Alibaba Cloud / Qwen Team (`qwen3.5-plus`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Plus. **Proprietary and hosted-only.** Variant/alias flag: the Qwen3.5 series is large and this is only its mid tier — siblings include **Qwen3.5 Flash**, **Qwen3.5-27B**, **Qwen3.5-35B-A3B**, **Qwen3.5-122B-A10B** and **Qwen3.5 397B** (the last with a separate Reasoning variant). **Doubly superseded**: Qwen3.6-Plus and Qwen3.7-Plus both followed, scoring 55.21 and 56.55 on a composite tracker against this model's 49.44.
- **Short description:** An earlier-generation Qwen mid-tier model. **The defining fact about this entry is the evidence base: only 4 of 645 tracked benchmark slots are populated — the thinnest coverage of any model in this research pass — and not one of them is a vendor-published figure.** All four come from independent sources, and all four are low. This does not meet the threshold for self-exclusion under `RULES.md` (which requires *zero* verified benchmarks), but every score below rests on materially less evidence than peers in this dataset, and that is stated rather than smoothed over.
- **Provider / access:** Alibaba Cloud DashScope and third-party aggregators. Reasoning: explicit reasoning mode.
- **Release / knowledge:** Released in the Qwen3.5 cycle, before Qwen3.6-Plus. **No verified public release date or knowledge cutoff found.**
- **IDs:** `qwen3.5-plus`. **No free-tier ID verified.**
- **Context window:** **1,000,000 tokens.** Max output: no verified public figure found. **No retrieval or long-context benchmark of any kind exists for this model** — no MRCR, no RULER, no GraphWalks, no LCR, no needle test.
- **Modalities:** **Text input and text output are certain** from the benchmark set. **Vision is plausible but entirely unverified**: later models in the same Plus tier (Qwen3.6-Plus and Qwen3.7-Plus) both document image and video input, so inheritance is likely — but **no specification sheet for Qwen3.5 Plus was retrievable and no multimodal benchmark exists for it**. Anyone requiring image input must verify against the live API first.
- **Pricing (as of 2026-10-03):** **No rate card was verified.** For tier context only, the confirmed rate for its successor **Qwen3.7-Plus is $0.32 / 1M input, $0.08 cached, $1.28 / 1M output**, and the Qwen Plus line is consistently positioned as Alibaba's value workhorse. **Re-verify the live rate before budgeting.**
- **Architecture:** Proprietary; **parameter count, active parameters and topology are not disclosed.**

### Raw benchmarks found

> **Only 4 of 645 tracked benchmark slots are populated — the thinnest coverage in this research pass — and all four are independent.** There are **no vendor-published benchmark figures for this model at all**. A composite tracker places it at **49.44/100, #97 of 783**, flagged explicitly as conservative on partial coverage.

Agent / tool use:

- **JobBench: 18.5%** (independent JobBench paper) — low; for comparison Claude Opus 4.6 scores 36.7% and Qwen3.8-Max 53.4% on the same benchmark.
- Terminal-Bench (any version): **no verified public score found**
- Tau2-bench / Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / Toolathlon / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld / AutomationBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR / MRCR: **no verified public score found**
- **CritPt: no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** — this model does not appear in Artificial Analysis's index in the sources reached.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- **FrontierMath v2 (Epoch AI, independent): Tiers 1–3 21.0%, Tier 4 2.1%** — **the Tier 4 figure of 2.083% is among the lowest recorded in this entire research pass**, against Claude Opus 4.6 at 22.9%, Kimi K2.6 at 14.6% and Qwen3.6-Plus at 8.3%.

Coding:

- **Vibe Code Bench: 15.74%** (Vals AI, independent) — **the lowest Vibe Code Bench figure recorded in this research pass**, against Claude Opus 4.6 at 57.57%, Gemini 3.5 Flash at 48.68%, Kimi K2.6 at 37.89%, Qwen3.6-Plus at 25.56% and even GPT-5.1 at 24.61%.
- SWE-bench Verified / Pro / Multilingual: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- DeepSWE: **no verified public score found**
- AA Coding Index: **no verified public score found**

Multimodal:

- **No multimodal benchmark of any kind found** — no MMMU, MMMU-Pro, CharXiv, document, OCR, video or audio result.

### Normalized scores (1–100)

- **Tool use: 60/100.** The only measurement that exists is **JobBench at 18.5%**, which is low in absolute terms and roughly half what Claude Opus 4.6 achieves on the same independent benchmark. **Every one of the methodology's six tool-use references is unreported** — no Terminal-Bench at any version, no Tau3-Banking, no GDPval-AA, no Claw-Eval, no OSWorld or AutomationBench, no MCP-Atlas or Toolathlon — which triggers the explicit missing-evidence penalty in its strongest form. 60 reflects a single weak datapoint and no basis for inferring more; it is not a claim that the model is mid-tier, it is a statement that nothing supports a higher placement.
- **Reasoning: 58/100.** The only measurement is **Epoch AI's FrontierMath v2 — 21.0% on Tiers 1–3 and 2.1% on Tier 4** — and the Tier 4 figure is among the lowest in this entire dataset, roughly a tenth of Claude Opus 4.6's 22.9%. **GPQA Diamond, HLE, MRCR/LCR, CritPt, the Artificial Analysis Intelligence Index and every hallucination measurement are all absent**, so not one of the methodology's five named reasoning references can be checked. The methodology's mid band for reasoning (Index 20–35 → 55–65) is the only defensible placement given one weak independent datapoint, and 58 sits in its lower half because the datapoint that does exist is poor.
- **Context window: 95/100.** The methodology tiers this dimension by **size**, and a **1,000,000-token window** places it in the ≥1M tier (95–100). It is scored at the tier floor, and the reason is worth stating plainly: **there is no retrieval or long-context evidence of any kind for this model** — no MRCR, RULER, GraphWalks, LCR or needle result — so the ≥98%-at-512K condition for a 100 is wholly unverified, and **max output tokens are undocumented**. This is the one dimension where a thin-evidence model scores well, and it does so on a specification claim rather than on demonstrated capability. A reader should treat it as unvalidated capacity.
- **Multimodal: 60/100.** **Text in and text out are the only confirmed modalities.** Image input is **plausible but entirely unverified**: the two later models in the same Qwen Plus tier both document image and video input, so inheritance is likely — but no specification sheet for this model was retrievable and **no multimodal benchmark of any kind exists for it**. This is scored at the **floor of the methodology's "+image in" band (60–70)** to reflect a capability that probably exists on tier lineage and is completely undemonstrated. It is not scored as text-only, because that would misrepresent the family; it is not scored higher, because nothing substantiates it. **Verify against the live API before relying on vision.**
- **Coding: 58/100.** The only measurement is **Vibe Code Bench at 15.74% from Vals AI — the lowest figure on that benchmark recorded anywhere in this research pass**, below even GPT-5.1 (24.61%) and Qwen3.6-Plus (25.56%), and roughly a quarter of Claude Opus 4.6's 57.57%. **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, SciCode, DeepSWE and the AA Coding Index are all absent**, so every one of the methodology's coding references is unchecked. 58 reflects one independently measured and genuinely poor result with nothing to offset it.
- **Cost efficiency: 78/100.** **This score carries an explicit caveat: no rate card was verified for this model.** It rests on documented tier positioning — the Qwen Plus line is Alibaba's value workhorse, and the confirmed rate for its direct successor Qwen3.7-Plus is **$0.32 / $1.28 with $0.08 cached input**, roughly an order of magnitude below the $3/$15 anchor. On that basis the tier is genuinely cheap. Four deductions: the price is **unconfirmed for this model**; it is **proprietary and hosted-only** with no self-hosting escape; **no free tier is documented**; and most decisively, **both successors in the same tier score materially higher at a confirmed low price** (Qwen3.6-Plus 55.21 and Qwen3.7-Plus 56.55 against this model's 49.44), so there is no economic argument for choosing the older model.
- **Overall Score: 66.2/100.** Mean of the five non-cost dimensions (60 + 58 + 95 + 60 + 58) / 5 = 66.2 — and the honest headline is that **this score is a floor derived from four independent datapoints, not a capability assessment.** What is actually known: four independent measurements exist, all low — JobBench 18.5%, Vibe Code Bench 15.74% (the worst in this dataset), FrontierMath v2 Tier 4 2.1% (among the worst) — with **zero vendor-published benchmarks and zero coverage of reasoning, agentic, long-context or multimodal capability**. The composite tracker's own placement of **#97 of 783** is consistent with that picture. Practical guidance: **do not select this model for any new workload.** Its own successors in the same tier, at a confirmed $0.32/$1.28, score 6–7 composite points higher and have 59–63 published benchmarks each — Qwen3.7-Plus in particular has τ²-bench at 93%, SWE-bench Verified at 77.7%, LiveCodeBench at 89.6% and sixteen multimodal results. If this model is already in production, the migration target is obvious and cheap. If it is under evaluation, run your own benchmarks first, because almost nothing public exists to evaluate.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-03
- Method: fresh public internet research only — BenchLM's model page (last updated 2026-10-02) for the complete benchmark table, which contains **only 4 of 645 tracked slots**, all independently sourced: the JobBench paper, Vals AI's Vibe Code Bench v1.1 and Epoch AI's FrontierMath v2 leaderboard (two tiers) — plus the 49.44/100 composite at **#97 of 783** with its explicit partial-coverage caveat, the proprietary source type, reasoning type, 1M context window, and the Alibaba family ranking table that establishes both the Qwen3.5 sibling set and the Qwen3.6-Plus / Qwen3.7-Plus succession with their composite scores; and the Qwen3.7-Plus and Qwen3.6-Plus research conducted earlier in this same session, which established the Qwen Plus tier's confirmed $0.32 / $0.08 cached / $1.28 rate card and its documented image and video input — both used here only as tier context, explicitly labelled as inheritance rather than verified fact for this model. **There are no vendor-published benchmark figures for Qwen3.5 Plus in any source reached**, and that absence is reported as a finding rather than filled by inference. This model does **not** meet the `RULES.md` threshold for self-exclusion, which requires zero verified public benchmarks; four exist, so a scored report is the correct output — but the thinness of the evidence base is stated in the summary, in the model card and in every individual dimension rather than being smoothed over, and no score is presented as a capability measurement where only an absence-of-evidence floor is defensible. The Cost efficiency score is flagged as resting on tier positioning rather than a confirmed rate card, and the modality list is flagged as text-confirmed with vision probable-by-lineage and explicitly unverified. No peer `model/` findings files were read. Unavailable figures (release date, knowledge cutoff, max output tokens, parameter count, confirmed pricing, documented modalities, Terminal-Bench at any version, Tau2-bench, Tau3-Banking, GDPval-AA, Claw-Eval, MCP-Atlas, Toolathlon, OSWorld, AutomationBench, GPQA Diamond, HLE, MRCR/RULER/GraphWalks, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, hallucination rate, SWE-bench Verified/Pro/Multilingual, LiveCodeBench, SciCode, DeepSWE, AA Coding Index, and every multimodal benchmark) are recorded as "no verified public score found" rather than estimated. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
