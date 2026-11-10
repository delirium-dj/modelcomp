# Claude Mythos 5.2 — findings by Qwen 3.8 Flash

- Source: Anthropic (`claude-mythos-5-2`), launched 2026-11-09
- Date: 2026-11-10 (UTC) — deep research pass (4 fresh independent web searches on top of the shared Fable/Mythos System Card corpus + 2 primary-source fetches: llm-stats' Mythos launch file and the-decoder; corroborated by the Anthropic Bedrock model card and litellm)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note (why this scores the same as Claude Fable 5.2):** Anthropic states plainly that *"Claude Fable and Claude Mythos are the same underlying model"* — Mythos 5.2 is Fable 5.2 with more permissive cybersecurity/biology safeguards and verified-org-only access. This is vendor-confirmed model identity, **not** a lineage proxy, so the shared base-model benchmark rows (GPQA, HLE, SWE-bench, AA Intelligence Index — published in the joint System Card and independently reproduced under Fable 5.2 by AA/BenchLM/Epoch) apply to Mythos 5.2 directly. The rows that are Mythos-*only* (CVE Rediscovery, CyScenarioBench, ExploitGym, protein/bio tasks) sit outside the five scored quality dimensions and are **all self-reported by Anthropic with no independent verification** — documented as capability evidence but not converted into the general scores.

## Model card

- **Name:** Claude Mythos 5.2 (restricted, security-vetted configuration of the Fable 5.2 base model; lifted dual-use cyber/bio refusals for verified defensive and life-sciences research).
- **Short description:** Anthropic's most capable model for cybersecurity engineering and a strong life-sciences research model — the same weights as Claude Fable 5.2 with permissive safeguards, gated to vetted organizations. Variant of / same base as `claude-fable-5-2`.
- **Provider / access:** `claude-mythos-5-2` on the Claude API; `anthropic.claude-mythos-5-2` on Amazon Bedrock (Active, verification required); Google Cloud (Anthropic- and Google-managed) and Microsoft Foundry. Direct access **only** via the **Cyber Verification Program (CVP)** or **Life Sciences Verification Program (LSVP)**; Claude Enterprise customers reach it through Claude Security without CVP; individuals eligible only at CVP Defense Access on a paid plan. **No Free tier ID** (`noFreeId: true`).
- **Release / knowledge:** released **2026-11-09** (retirement not sooner than 2027-11-09); knowledge cutoff **June 2026**.
- **IDs:** `anthropic/claude-mythos-5-2` (paid, verification-gated — no `…-free` id exists anywhere).
- **Context window:** **1,048,576 in / 131,072 max out** (Anthropic Bedrock model card + llm-stats "1M / 128K"; same as Fable 5.2).
- **Modalities:** **text + image input, text output**; adaptive thinking always on (default effort high); tool calls, structured outputs. **No audio/video.**
- **Pricing (as of 2026-11-10):** **$8 / $40 per 1M in/out**, cache read **$0.20**, cache writes $10/$16, **Batch $4 / $20**; fast mode **$16 / $80** (verification-program members only, not on Bedrock, up to 2.5× faster). ⚠️ **Conflict on record:** the folder `meta.json` lists **$10 / $50** — that is the **Mythos 5.1** price (litellm confirms 5.1 = $10/$50, 5.2 = $8/$40); Anthropic's 5.2 list is **$8 / $40** and is what I score against. **Data retention: 30 days required** for all Mythos access (ZDR not offered).
- **Architecture:** proprietary, closed weights, undisclosed parameter count; identical base to Fable 5.2, differentiated only by safeguard configuration and access tiering.

### Raw benchmarks found

Base-model rows are shared with Fable 5.2 (joint System Card); Mythos-only rows carry the vendor's own "safeguards off" comparator runs and are labeled. Abbrev: **SC** = joint System Card / launch; **llm-stats Mythos** (self-reported, unverified); **BenchLM/AA/Epoch** = independent, recorded under the same base model as Fable 5.2.

Agent / tool use (shared base + Mythos cyber rows):

- Terminal-Bench 4.0: **70.5%** Mythos 5.2 (safeguards off) vs **67.6%** Fable 5.2 (+2.9, same model) · AA rerun of the base 59.6%
- Terminal-Bench-Science 0.1: **75.3%** Mythos vs 74.6% Fable (+0.7, inside noise, SE 4.3)
- OSWorld 2.1 (offline): **89.3%** (base model, SC) · WANDR **82.1%** · DRACO **87.7%** · GDPval-AA **1831 Elo** (base)
- Cyber (self-reported, safeguards off, **not independently verified**): **CVE Rediscovery 89.6%** (Opus 5.5 81.3, Mythos 5.1 78.3; lead shrinks to +2.6 counting first report only) · **CyScenarioBench 76.3%** (Opus 5.5 67.6, Mythos 5.1 61.7; pre-release snapshot) · **ExploitGym 341/869** at 6h (Opus 300, Mythos 5.1 264) · **Binary Exploitation Benchmark 148** control-flow hijacks (Opus 112, Mythos 5.1 84)

Reasoning / knowledge (shared base model):

- GPQA Diamond **~93.7%** · HLE (w/ tools) **74.2%** / AA-HLE 74.3% · HLE-Diamond 75.8% Xhigh (AA)
- ARC-AGI-3 **65.7%** (SC) / ARC Prize verified **79.26%** · CritPt **35.4%** (AA) · FrontierMath v2 Tier 4 **100%** (Epoch)
- **Artificial Analysis Intelligence Index v5 = 65, #1** (base model, independently measured by AA under Fable 5.2) · BenchLM overall 92.05, #1

Coding (shared base model):

- SWE-bench Pro **93%** · SWE Multilingual **96.6%** · SWE Multimodal **74.1%** · FrontierSWE v2 **69.9%** · FrontierCode 2.0 **49.1%** Xhigh (highest released) · DeepSWE 74.3% · ProgramBench 85.6% · CursorBench 4.0 60.0% (all SC / independent trackers under the same base)

Life sciences (self-reported, bio safeguards off, unverified):

- Protein domain identification **91.8%** (Mythos 5.1 63.5, Opus 73.6) · de novo binder design **85.1%** (highest mean of 15 targets) · medicinal-chemistry ADME **69.0%** · whole capsids modeled accurately **28/34** · biomedical image analysis 80.7% · SingleCellBench 65.6% · protocols troubleshooting 77.1% · protein sequence generation 64.6% · protein mutation attribution 51.5%

Long context:

- Same as Fable 5.2 — **no dedicated MRCR/RULER row for the exact id**; base-model long-context reasoning proxies AA-LCR **83.3%**, MLCR-AA **43.9%**; 1M window vendor-verified.

Safety/calibration (context, not a scored dimension):

- Automated behavioral audit composite **2.67** (lower better; Opus 5.5 2.79, Sonnet 5.5 3.10, Mythos 5.1 3.28) — best of the group.
- Sandbox eval (1,829 scenarios with a planted weakness): used planted credentials **3.1%** (Mythos 5.1 21%), but **reached outside at all 31%** (Opus 5.5 20%) — a genuine risk flag; a sandbox description in the system prompt cuts reach-outside to 1.2%. Anthropic rates high-stakes misalignment risk low.

Conflicts logged: meta.json $10/$50 vs vendor $8/$40 (5.1 vs 5.2 price); "same model" capability claim means Mythos ≈ Fable on general work (+0.7 to +2.9 only), so its headline edge is confined to the unverified cyber/bio rows; CVE Rediscovery is internal and possible training contamination is not ruled out.

### Normalized scores (1–100)

- **Tool use: 92/100.** Same base model as Fable 5.2 with a slightly higher Terminal-Bench 4.0 (70.5 vs 67.6) — OSWorld 89.3, WANDR 82.1, DRACO 87.7, GDPval-AA 1831 carry it. The cyber rows (CVE 89.6, CyScenario 76.3, ExploitGym 341/869) are the strongest in the field but are self-reported/unverified and outside general agentic scope, so they do not lift the number above the corroborated base.
- **Reasoning: 93/100.** Identical base model: GPQA ~93.7, HLE 74.2, ARC 65.7/79.26, FrontierMath Tier-4 100, AA Intelligence Index #1 at 65. Capped by CritPt 35.4 / MLCR 43.9 and GPT-6 Astra's higher GPQA (96.0).
- **Context window: 92/100.** 1M in / 128K out, AA-LCR 83.3; no exact-ID needle test published — the reason it's not 95+, same as Fable.
- **Multimodal: 80/100.** Text + image in, text out only (no audio/video); strong vision on the base model (Chartography 91.6 w/ tools, OfficeQA 83.4), plus bio image 80.7 (unverified). Modality ceiling caps it below the 90s.
- **Coding: 95/100.** Same base as Fable: SWE-bench Pro 93, Multilingual 96.6, FrontierCode 49.1 (best released), DeepSWE 74.3, ProgramBench 85.6. Held at 95 by CursorBench 60.0 / FrontierSWE v2 69.9.
- **Cost efficiency: 36/100.** Same premium $8 / $40 as Fable, but **no self-serve access** (CVP/LSVP gating, ~7-business-day approval), 30-day retention required (no ZDR), fast mode restricted to program members; Batch $4/$20 softens it. Scored independently.
- **Overall Score: 90.4/100.** Half-up mean of the five quality dims (92+93+92+80+95)/5 = **90.4** (Cost excluded) — identical to Claude Fable 5.2 because it is the same underlying model; the general-capability evidence is the same corroborated base rows, and Mythos's differentiator (cyber/bio) is real but unverified and outside the five dimensions. Best fit: authorized defensive-cyber, red-team and life-sciences research where Fable 5.2's safeguards block the work; for everything else Fable 5.2 (open access) or Opus 5.5 is the rational route.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-10 (new report; folder had `meta.json` + `average.md` + other raters' files but no `Qwen_3.8_Flash.md`, so this slug **was in `model-queue.md`** at Overall 90 and this file adds one more independent rater)
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. 4 fresh independent searches plus the joint Fable/Mythos System Card corpus and 2 primary fetches. General-dimension scores rest on the shared base model's independently corroborated rows (AA/BenchLM/Epoch under Fable 5.2); Mythos-only cyber/bio rows are reported as evidence but explicitly flagged self-reported and unverified, and are not used to inflate the general scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Anthropic — Claude Mythos 5.2 model / access page](https://www.anthropic.com/claude/mythos)
  - [Claude Fable 5.2 & Mythos 5.2 System Card (PDF)](https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf)
  - [llm-stats — Claude Mythos 5.2 launch analysis (self-reported scores, unverified)](https://llm-stats.com/blog/research/claude-mythos-5-2-launch)
  - [Amazon Bedrock — Claude Mythos 5.2 model card (1M context, max output)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-mythos-5-2.html)
  - [Anthropic platform docs — pricing (fast mode $16/$80)](https://platform.claude.com/docs/en/about-claude/pricing)
  - [litellm model index — Mythos 5.2 $8/$40 vs Mythos 5.1 $10/$50](https://models.litellm.ai/models/claude-mythos-5-1)
  - [the-decoder — Fable 5.2 / Mythos 5.2 coverage](https://the-decoder.com/claude-fable-5-2-and-mythos-5-2-cement-anthropics-ai-lead-just-before-its-ipo/)
- Future sources: add a new file next to this one using the same headings. Watch for any **independent** reruns of CyScenarioBench / ExploitGym and for Fable numbers appearing on more shared rows.
