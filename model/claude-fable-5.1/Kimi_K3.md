# Claude Fable 5.1 — findings by Kimi K3

- Source: Anthropic / Claude Fable 5.1 (`claude-fable-5-1`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; Artificial Analysis confirms core figures — Index 53 #5/216, $10/$50, 1M window — and flags real-world cost: 190M output tokens per Index run, $7.63/task, 244 s TTFT; "highest-ever Index 66" launch claim does not hold on AA's current page)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's top generally-available model (released **September 1, 2026** — re-verified by AA); the GA max-effort configuration of the same weights shipped invitation-only as Claude Mythos 5.1, with extra biology/cyber safeguards. Anthropic's best for long-horizon agentic science and knowledge work.
- **Provider / access:** Claude API `claude-fable-5-1` via **6 API providers** (AA count, this pass); also served on OpenCode Zen as `claude-fable-5-1` (paid ID in the 2026-10-13 Zen listing).
- **Release / knowledge:** Released 2026-09-01 (AA + felloai ✓); knowledge cutoff June 2026; retirement no sooner than 2027-09-01 (felloai.com).
- **IDs:** `anthropic/claude-fable-5-1` (no Free-tier ID on Zen — the listing carries it paid).
- **Context window:** **1M tokens** (AA — re-verified); 128K max output (first-pass Anthropic launch spec).
- **Modalities:** text + image in → text out (AA specs — first pass's document/PDF-grounding emphasis narrows to image+text API inputs); adaptive thinking always on (effort low→max); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** $10/M input, $50/M output, **98% cache discount** (improved from first-pass −75% read — AA current); blended (7:2:1) ≈ **$7.17/M** (AA).
- **Architecture:** proprietary (Anthropic); identical weights to Claude Mythos 5.1; params undisclosed.
- **Performance (AA, this pass — new):** 69.6 output tok/s (#112/185), **TTFT 243.75 s** (thinking-included — extreme), **190M output tokens per Intelligence Index run** (very verbose; median 85M).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%**; Terminal-Bench-Science 0.1: **52.6%** (vs predecessor's 24.7%); TB 2.1 (Vals): **85.0%** (benchlm.ai / Anthropic launch via felloai.com, first-pass snapshot)
- Tau3-Banking (AA): **47.2%**; GDPval-AA: **1735 Elo** (61.7% normalized; vendor table claims v2 1853); OSWorld 2.0 (strict): **41.7%**; AutomationBench: **31.4%**; AA Agentic Index: **58.0%**; ApprenticeBench: **72%**; Toolathlon-Verified: **77.8%** (Pass@3 81.5%); AA Briefcase: **1678**; AA-AnalystAgent: **57.5%** (benchlm.ai, first-pass snapshot)
- Claw-Eval / ClawProBench: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: 93.7% (AA); 93.4% (Vals); HLE: 65.0% w/ tools / 60.9% no tools / AA-HLE 59.1%; AA-LCR: 85.3%; MLCR-AA: 71.1%; CritPt: 29.7%; ARC-AGI-1: 97.5% / 2: 90.0%; MMLU-Pro (Vals): 92.4%; AA-Omniscience: 67.2% / 72.6% (benchlm.ai, first-pass snapshot)
- **Artificial Analysis Intelligence Index: 53 (#5/216)** (artificialanalysis.ai 2026-10-13) — first-pass benchlm aggregate 53.4 is consistent; **the "66 at max effort, highest ever measured" launch claim (felloai) does not appear on AA's current page — treat as launch-window/hard-set drift; the live figure 53 governs here** (conflict flagged).
- BenchLM overall 83/100, #3 of 507 (benchlm.ai, first-pass snapshot)

Coding:

- SWE-bench Pro: 81.2%; SWE Multilingual: 89.1%; SWE Multimodal: 54.7%; LiveCodeBench (Vals): 90.5%; AA-SciCode: 63.1%; AA Coding Index: 81.6; DeepSWE: 67.4%; FrontierSWE v2: 56.3%; CursorBench 3.2: 73.4% / 4.0: 51.8%; ProgramBench: 87.6% (benchlm.ai, first-pass snapshot)
- SWE-bench Verified: no verified public score found (unchanged)

Long context:

- AA-LCR 85.3% at the 1M window (benchlm.ai, first-pass snapshot); no separate MRCR/RULER public score found.

Multimodal:

- Design Arena Website: 1320 Elo; GDP.pdf 26.2%; no MMMU/CharXiv public row found (benchlm.ai, first-pass snapshot — unchanged).

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Score changes vs first pass shown inline.)

- **Tool use: 91/100.** Unchanged — TB-Science 52.6%, TB 4.0 55.8%, GDPval-AA 1735, Agentic Index 58%, ApprenticeBench 72%; capped by OSWorld strict 41.7%.
- **Reasoning: 89/100.** −1 — with the "66 at max effort, highest ever" claim unverifiable on AA's current page (live figure: 53, #5/216), the top-of-field justification softens slightly; HLE 65% w/ tools, MLCR 71.1%, LCR 85.3% remain elite; capped by CritPt 29.7%.
- **Context window: 90/100.** Unchanged — 1M window re-confirmed by AA; LCR 85.3%.
- **Multimodal: 74/100.** Unchanged — AA confirms image+text input only on the API; thin public vision rows (Design Arena 1320); text-only output.
- **Coding: 88/100.** Unchanged — SWE-bench Pro 81.2%, LCB 90.5%, Coding Index 81.6, CursorBench 73.4%; capped by SWE Multimodal 54.7%, DeepSWE 67.4%.
- **Cost efficiency: 35/100.** −3 — AA now measures **$7.63 per Index task with 190M output tokens** (vs first-pass $3.76 completed figure) and TTFT ~244 s; 98% cache discount helps cached reads but the run-cost profile worsened.
- **Overall Score: 86/100.** Half-up mean of the five quality dims (91+89+90+74+88)/5 = 86.4 → 86 (was 87). Best fit: the strongest GA Claude for long-horizon agentic science/research/document work — accept flagship pricing and very slow time-to-first-token.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (artificialanalysis.ai model page 2026-10-13 — Index 53 #5/216, release 2026-09-01, $10/$50 with 98% cache discount, $7.63/task and 190M-token verbosity, 69.6 t/s, TTFT 243.75s, 6 providers; OpenCode Zen `/zen/v1/models` 2026-10-13 — `claude-fable-5-1` present as paid ID). Conflict flagged: launch-claim "Index 66 at max effort" vs live AA 53. First-pass benchlm.ai/felloai rows retained as that snapshot. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
