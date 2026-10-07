# Claude Haiku 5.5 — findings by Qwen 3.8 Flash

- Source: Anthropic (curated id `opencode/claude-haiku-5-5`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5 (API model id `claude-haiku-5-5`)
- **Short description:** Anthropic's small/fast tier of the Claude 5.5 family, launched as "the cheapest, fastest, and most capable small model we've ever released". Positioned explicitly as a **high-volume, cost-sensitive companion** to Opus 5.5 / Sonnet 5.5 — summaries, compaction, classification, database queries, live support, browser use, and subagent duty inside a coding stack where a larger model leads. It is the **first Haiku-class model with an adjustable effort setting**, so cost-vs-intelligence is now a dial on this tier too.
- **Provider / access:** Anthropic first-party API plus Amazon Web Services, Google Cloud and Microsoft Azure. Computer use and browser use are supported (beta SDK support added in Python and TypeScript at this launch). Guardrails: cybersecurity safeguards stricter than Haiku 4.5 but looser than Sonnet 5.5's (defensive work allowed, pen-testing blocked); biology safeguards identical to Sonnet 5/5.5 and Opus 5, with Cyber / Life Sciences verification programs for wider scope. Alignment evaluations show "far fewer instances of misaligned behavior" than Haiku 4.5 per the system card.
- **Release / knowledge:** **October 2026** (Artificial Analysis release month for this ID; announced alongside the Sonnet 5.5 price restructuring). Knowledge cutoff not disclosed; the launch page states an **updated tokenizer** (shared with Sonnet 5.5 / Opus 5.5) that consumes slightly more tokens per task than Haiku 4.5.
- **IDs:** `claude-haiku-5-5` (API), BenchLM `claude-haiku-5-5`, Artificial Analysis `claude-haiku-5-5` (measured as "**Max, Default Fallback**" prompt config), curated id `opencode/claude-haiku-5-5`.
- **Context window:** **1,000,000 tokens** (confirmed by both Artificial Analysis and BenchLM). **Unverified:** the curated `meta.json` "128K max output" — I found no max-output figure on the launch page or AA, so it is recorded as curated, not confirmed. Pricing doubles above 100 K prompt length, so the full window is not economically free.
- **Modalities:** text + image in (chart/document/visual-reasoning work is a headline capability — Chartography, Box/AlphaSense document QA deployments), **text out**. Artificial Analysis lists input as "text and image"; the curated note adds **PDF** in, which matches Anthropic's document-block support but is not separately tracked by the aggregators. No audio input and no non-text output on this ID.
- **Pricing (as of 2026-10-07):** from the launch page's own table, per 1M tokens — **prompts ≤100 K: $0.10 in / $0.50 out; prompts >100 K: $0.50 in / $2.50 out; cache reads $0.01 / $0.05; cache writes $0.125 / $0.625.** This matches the curated `meta.json` exactly. Anthropic frames it as ~90 % cheaper than Haiku 4.5 for sub-100 K requests and ~50 % cheaper above that (~75 % lower average run cost). AA confirms $0.10/$0.50 with a **90 % cache discount** and measures **$0.21 per Intelligence-Index task**. Sonnet 5.5's cache reads were halved to $0.10 in the same announcement.
- **Architecture / performance:** dense proprietary model, no parameter count disclosed. Measured **243.4 output tokens/s** (#9 of 18 in AA's comparison set, "notably fast") with **1.34 s-class first-token behaviour** implied by the "fastest model to date" claim; measured **Intelligence Index 43**, AA rank **#2 of 18** in its price/size class (median 13) — and notably verbose: **440M output tokens** to run the Index versus a 100M median.
- **Identity flag:** BenchLM ranks the family with Opus 5.5 at 86.37, Sonnet 5.5 at 83.89 and Haiku 5.5 at **66.32 (#28 of 887)**; this folder is `model/claude-haiku-5.5/`, distinct from `model/claude-haiku-4.5/` (BenchLM 41.55) — the jump between the two Haiku generations is the single largest intra-family gap in the Claude line.

### Raw benchmarks found

Vendor rows from the launch post (system card backing), independent rows from Artificial Analysis via BenchLM `claude-haiku-5-5` (17 of 623 tracks covered, partial coverage → BenchLM marks its own score conservative):

Agentic / tool use:

- GDPval-AA v2.1: **1620** (Haiku 4.5: 735; GPT-6 Luna: 1437; Sonnet 5.5 ref: 1840)
- AA-Briefcase v1.1: **1578** (Haiku 4.5: 614; Sonnet 5.5 ref: 1824)
- OSWorld 2.1 (computer use, offline subset): **72.4 %** (Haiku 4.5: 15.7 %; GPT-6 Luna: 48.9 %; Sonnet 5.5: 83.9 %)
- Terminal-Bench 4.0: **39.2 %** vendor → **32.8 %** measured independently by AA (Haiku 4.5: 0.0 %; Sonnet 5.5: 70.6 %; GPT-6 Luna: 16.4 %)
- AA AutomationBench: **35.4 %**; AA Harvey LAB (legal agentic): **89.9 %**; GDP.pdf: **20.8 %**
- τ²/τ³-bench, Toolathlon, Claw-Eval, BrowseComp: **no verified public score found for this ID**

Reasoning / knowledge:

- Humanity's Last Exam: **45.9 %** no tools / **57.4 %** with tools (Haiku 4.5: 10.2 % / 18.7 %) → AA-HLE **44.4 %** (independent confirmation)
- AA Intelligence Index: **43** (rank #2/18 in class, median 13)
- CritPt: **18.9 %**; AA-LCR (long-context reasoning): **82.7 %**
- AA-Omniscience index: **+10.7** (positive — correct answers exceed hallucinations, rare in this pass)
- GPQA Diamond, MMLU-Pro, AIME: **no aggregator row surfaced for this ID in this pass**

Coding:

- FrontierCode 1.1 (Main): **46.4 %** (GPT-6 Luna: 42.4 %; Sonnet 5.5: 52.1 % at Xhigh)
- AA-SciCode: **55.0 %**
- SWE-bench Verified / Rebench, DeepSWE, LiveCodeBench, AA Coding Index: **no verified public score found for this ID**

Multimodal:

- Chartography (visual reasoning, no tools): **46.4 %** (Haiku 4.5: 6.4 %; GPT-6 Luna: 29.1 %; Sonnet 5.5: 61.6 %)
- MMMU-Pro is listed on the AA evaluation set for this ID but the numeric cell was not published in the page I fetched; no MRCR / AI-Needle retrieval row found
- Vendor-published customer evaluations (not standardized benchmarks, reported by Anthropic): HubSpot **92.8 %** averaged over three runs on its CRM-task suite (best score they have seen); AlphaSense document QA **0.84 vs 0.76** for Haiku 4.5 (n=400 queries, "statistically significant"); Box **+11 points over Haiku 4.5 at about half the latency**; Asana **>30 % latency reduction, up to 2.5× faster inference per agent turn**; Cognition reports Devin Fusion holding **FrontierCode 66.2** with Haiku 5.5 as sidekick

### Normalized scores (1–100)

- **Tool use: 76/100.** GDPval-AA 1620 and AA-Briefcase 1578 clear the methodology's mid reference and reach into the frontier neighbourhood, OSWorld 2.1 at 72.4 % is a genuinely strong computer-use number, and Harvey LAB 89.9 % plus AutomationBench 35.4 % come from an independent harness. What keeps it out of the 90+ tier is agentic *coding* endurance: Terminal-Bench 4.0 at 39.2 % vendor / 32.8 % independent is barely half of Sonnet 5.5's 70.6 % (Anthropic itself says the larger models remain the right choice for complex agentic work), and there is no τ³, Toolathlon or Claw-Eval row for the ID at all.
- **Reasoning: 80/100.** HLE 45.9 % no-tools / 57.4 % with tools is a frontier-band result confirmed independently at 44.4 %, CritPt 18.9 % and AA-LCR 82.7 % are strong, and a **+10.7 Omniscience index** makes this the most knowledge-honest model measured in this pass. Intelligence Index 43 sits above the methodology's mid band (which expects 20–35) but far below its 60+ frontier reference, and no GPQA row exists for the ID, so it lands just below the 90 tier rather than in it.
- **Context window: 96/100.** A verified 1,000,000-token window is the 95–100 tier, with AA-LCR 82.7 % as independent long-context-reasoning support. It is not the clean 100 the methodology reserves for ≥98 % retrieval at 512 K+ because no MRCR or AI-Needle retrieval number is published for this ID, and because the price sheet itself splits at 100 K — the window is available but 5× more expensive to actually use past that point. The curated 128 K max-output claim is noted, not scored.
- **Multimodal: 78/100.** Text + image + document input with text output is the methodology's 75–90 band; Chartography 46.4 % shows the visual path is real and vastly ahead of Haiku 4.5's 6.4 %, but it is still well behind Sonnet 5.5's 61.6 %, and there is no video input, no audio input and no non-text output to move up.
- **Coding: 72/100.** FrontierCode 1.1 at 46.4 % (ahead of GPT-6 Luna's 42.4 %) and SciCode 55.0 % meet the methodology's scientific-coding reference, but the frontier coding band also wants DeepSWE 74 %+ / Coding Index 70 %+, and this ID has **no** SWE-bench Verified/Rebench, DeepSWE or LiveCodeBench row in any source I checked — so the score rests on two harnesses plus strongly favourable customer reports (Cognition's 66.2 FrontierCode is a *configured stack* with a lead model, not this model solo).
- **Cost efficiency: 92/100.** $0.10/$0.50 with a 90 % cache discount is the cheapest serious first-party Claude tier and AA ranks it "well priced" at **$0.21 per Intelligence-Index task**. Two things cap it: prompts over 100 K jump to $0.50/$2.50 (the methodology's ≈92 tier), and AA measures it as **very verbose** — 440M output tokens on the Index run versus a 100M median — so real spend follows token count, and its cost-per-task rank is #46 of 182 rather than top-tier.
- **Overall Score: 80/100.** Mean of the five quality dimensions (76 + 80 + 96 + 78 + 72) / 5 = 402 / 5 = 80.4 → 80; Cost excluded per `RULES.md`. Best fit: exactly what Anthropic sells it for — high-volume, latency-sensitive, 1M-context-adjacent work (summarisation, compaction, classification, extraction over long documents, live support, browser/computer-use steps, subagents under a stronger lead model), where Index-43-class reasoning at 243 tokens/s and $0.10/$0.50 is a better trade than calling a bigger model. Not the choice for autonomous multi-hour agentic coding, where its own launch post concedes Sonnet 5.5 and Opus 5.5 win.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic "Introducing Claude Haiku 5.5" launch page including its benchmark and pricing tables and the Claude Haiku 5.5 System Card link, Artificial Analysis `models/claude-haiku-5-5` (Max, Default Fallback) page, BenchLM `claude-haiku-5-5` score page aggregating AA's independently measured rows); scores are normalized 1–100 interpretations, not official vendor scores. Where a vendor row and an AA row exist for the same harness (Terminal-Bench 4.0, HLE), both are printed and the score uses the lower independent value. Coverage is partial (17 of 623 BenchLM tracks), so each dimension names the missing harnesses rather than inferring values for them.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
