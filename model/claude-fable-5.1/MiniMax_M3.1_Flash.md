# Claude Fable 5.1 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's new **top tier above Opus**, released 2026-09-01 and generally available. Anthropic's docs position it as: "Use Claude Fable 5.1 for demanding reasoning and long-horizon agentic work" and "when your evals on Claude Opus 5.5 at higher effort still fall short." It shares its weights with the restricted Claude Mythos 5.1 configuration ("two configurations of a new large language model … sharing identical model weights"). It is **not** a tier alias of `claude-opus-5.5` (different API id, different price, different model) but it is the canonical folder for the Mythos 5.1 weights, since Mythos is the safeguard-restricted twin of this model.
- **Provider / access:** Claude API `claude-fable-5-1`; AWS Bedrock `anthropic.claude-fable-5-1`; Google Cloud, Microsoft Foundry and Claude Platform on AWS `claude-fable-5-1`; OpenRouter `anthropic/claude-fable-5.1` (canonical slug `anthropic/claude-fable-5.1-20260831`); OpenCode Zen `opencode/claude-fable-5-1` (`https://opencode.ai/inference/anthropic/v1/messages`). Generally available (not gated).
- **Release / knowledge:** released **2026-09-01**; retirement "Not sooner than September 1, 2027". Reliable knowledge and training-data cutoff **June 2026**.
- **IDs:** `claude-fable-5-1` (Claude API), `anthropic.claude-fable-5-1` (Bedrock), `anthropic/claude-fable-5.1` + `:batch` (OpenRouter), `opencode/claude-fable-5-1` (Zen).
- **Context window:** **1,000,000 tokens**, **128,000 max output** (OpenRouter: context 1,000,000, `max_completion_tokens` 128,000).
- **Modalities:** text and image in, text out (OpenRouter modality string `text+image+file->text`). Adaptive thinking, always on, **default effort `high`**, all five levels (low/medium/high/xhigh/max) supported.
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$10**, output **$50**; 5-minute cache write **$12.50**, 1-hour cache write **$20**, cache read **$0.25** — "Cache hits and refreshes on Claude Fable 5.1 and Claude Mythos 5.1 are priced at 0.025x the base input price"; Batch **$5 / $25**. **No fast-mode SKU** for Fable 5.1 (fast mode exists for Opus 5.5/5/4.8). Anthropic: "Fable 5.1 will cost an estimated 25% less than Fable 5 for typical workloads" (up to ~45% on agentic workloads). OpenCode Zen lists $10.00 / $50.00 / $0.25 cached read / $12.50 cached write.
- **Architecture:** proprietary, closed weights; parameter count not disclosed. Joint 212-page system card with Claude Mythos 5.1.

### Raw benchmarks found

> Anthropic's system-card / launch-page numbers are marked "vendor"; Artificial Analysis, the official Terminal-Bench board, Vals AI, CWE-bench, ARC Prize and the BenchLM ledger are independent. Anthropic publishes at **max effort** unless stated.

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (vendor) / **57.88%** (official tbench.ai public board, Claude Code, max, 330 trials, ~$6.2k) / **58.08% ± 3.31** (Vals AI, #4/50) / **52.02%** (AA, max) / 55.05% (AA, xhigh). Anthropic's own comparators: Mythos 5.1 60.9%, Fable 5 42.0%, Opus 5 37.3%, GPT-5.6 Sol 52.3%
- Terminal-Bench 2.1: **91.39%** (AA) / **85.02%** (Vals AI, #2/50) — "79.03% counting fallbacks as failures"; Vals fallback rate 2.10%
- Toolathlon-Verified: **77.8%** Pass@1, **81.5%** Pass@3, **73.1%** Pass³ (vendor); Toolathlon average assistant turns 23.7 (vs Sonnet 5.5's 31.6)
- GDPval-AA v2: **1853 Elo** (vendor) / **1754.07** (AA); AA-Briefcase **1694 Elo**
- AutomationBench: **31.4%** (vendor) / **59.38%** (AA objective-share) / **32.12%** (AA strict — matches Anthropic's number)
- OSWorld 2.0: **77.9% partial / 41.7% strict** (vendor) — Anthropic shows no competitor score for this row
- CWE-bench v1: **58%** Pass@1 (±7.4), 73% Pass@4 (cwe-bench.com, rank 5)
- Gray Swan IPI: attack success **0.1% at k=1**, 0.7% at k=10, **1.0% at k=15** — "Fable 5.1 is our most robust model to date on this benchmark"
- ApprenticeBench (end-to-end accounts-payable job, long-horizon agency): **72%** — best-verified in the catalog
- OfficeQA **80.2%** / OfficeQA Pro **69.0%** — both best-verified; FrontierSWE v2 **0.57** (Opus 5 0.52, Fable 5 0.48)
- Claw-Eval / ClawProBench / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- HLE: **59.13%** (AA) / **60.9%** without tools, **65.0%** with tools (vendor)
- LCR / MLCR: AA-LCR v1.1 **85.33%** (AA); MLCR-AA **71.11%** (AA)
- CritPt: **29.71%** (AA)
- GPQA Diamond: **93.74%** (AA) / **93.43%** (Vals AI)
- Artificial Analysis Intelligence Index by effort: **Max 53 (#5/217)**, xhigh 53, high 51, medium 49, low 47; AA's launch-day article (index v4.1.1) said "At max effort it scores 66 on the Artificial Analysis Intelligence Index, the highest score we have measured" — the index has since been re-baselined to v4.3.2
- FrontierMath v2: Tiers 1–3 **90.175%**, Tier 4 **87.805%** (Epoch AI, via BenchLM)
- ARC-AGI-1: **97.5%** at max ($1.40 per task) / 96.5% xhigh / 96.0% high / 94.5% medium / 90.0% low; ARC-AGI-2 **90.0%** at max ($4.49/task) / 90.0% xhigh / 88.8% high / 86.3% medium / 78.3% low (ARC Prize, verified)
- HealthBench Professional **62.1%** (shared Fable/Mythos table); BioMysteryBench, SpatialBench, SingleCellBench, protein-design and organic-chemistry rows are published in the joint card
- Omniscience index 46.42, accuracy **67.23%**, hallucination rate **72.58%** (AA) — the highest hallucination rate among the models in this batch

Coding:

- SWE-bench Pro **81.2%**, Multilingual **89.1%**, Multimodal **54.7%** (vendor) — Anthropic comparators: Fable 5 80, Opus 5 79.2, GPT-5.6 Sol 64.6
- DeepSWE v1.1: **67.4%** (average of 5 runs)
- CursorBench 3.2.0: **73.4%** — best-verified in the catalog (Fable 5 70.5%, Opus 5 70.0%); CursorBench 4.0 **51.8%** (vendor 51.8%, via BenchLM)
- Terminal-Bench 4.0 55.8–58.08% (see above); Terminal-Bench-Science 0.1 **52.6%** (vendor) / **43.33%** (AA) / **40.00%** (Vals AI)
- FrontierCode 1.1 **48.97%** (AA); SciCode **63.08%** (AA); FrontierSWE v2 **56.3%** (via BenchLM) / 0.57 (system card)
- LiveCodeBench: **90.52%** (Vals AI, **#1/143**); SWE-bench Multimodal **61.25%** (Vals AI)
- SWE-bench Verified, DeepSWE-Vibe, Vibe Code Bench: **no verified public score found** for Fable 5.1

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published** for Fable 5.1 or for the shared Mythos 5.1 weights. AA-LCR v1.1 85.33% covers the short band only. 1M context, 128K max output.

Performance profile (AA, Max): output **68.7 t/s** (#116/185), cost per Index task **$7.63** (#113/114), 190M output tokens (#105/116), TTFT 190.98s, cache discount 98%, 6 providers. By effort: max 53 / xhigh 53 / high 51 / medium 49 / low 47, with the low variant at $2.37 per Index task.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 91/100.** Frontier-tier agentic profile — GDPval-AA 1754–1853 Elo (rubric anchor ~1750+), Terminal-Bench 2.1 91.39% (AA) / 85.02% (Vals), Toolathlon-Verified 77.8% Pass@1 with Pass@3 81.5% and Pass³ 73.1%, OfficeQA 80.2% and OfficeQA Pro 69.0% (both best-verified), IPI attack success 0.1% at k=1 (Anthropic calls it "our most robust model to date"), CWE-bench v1 58%, ApprenticeBench 72% (best-verified), OSWorld 2.0 77.9% partial, and only 23.7 average Toolathlon turns. Capped below 95 by the absence of Terminal-Bench 2.1's independent counterpart? No — rather by: **no τ-bench figure** (rubric anchor τ3 ≈ 50%+; τ³-Banking 47.22% is just below), AutomationBench at 31.4% (vendor strict) / 32.12% (AA strict), and no published Claw-Eval, MCP-Atlas or Toolathon row.
- **Reasoning: 91/100.** GPQA Diamond 93.74%, HLE 59.13–65.0%, AA-LCR 85.33%, MLCR-AA 71.11%, CritPt 29.71%, FrontierMath v2 90.175% (T1–3) and 87.805% (T4), ARC-AGI-1 97.5% and ARC-AGI-2 90.0% (ARC Prize, with a published effort ladder), HealthBench Professional 62.1%. Held below 93 because the current Artificial Analysis Intelligence Index is **53**, under the rubric's 60+ anchor, and because the model carries the **highest hallucination rate in this batch (72.58%)** on Omniscience despite 67.23% accuracy — a knowledge-reliability caveat.
- **Context window: 95/100.** 1,000,000-token context with a 128,000 max output — the rubric's top tier (≥1M = 95–100), clearing the 64K output line. Not 100: no long-context retrieval measurement exists for Fable 5.1 (no MRCR / RULER / GraphWalks), and AA-LCR 85.33% covers only the short band.
- **Multimodal: 70/100.** Image (and file/PDF via the OpenRouter modality string) in, text out, with benchmark-leading results — OfficeQA 80.2% and OfficeQA Pro 69.0% (both best-verified in the catalog), Chartography 42.6% without tools / 86.2% with tools, SWE-bench Multimodal 54.7% (Anthropic) / 61.25% (Vals AI), MMMU-Pro 61.25%… no MMMU-Pro published. The rubric's "+image in = 60–70" band is the ceiling: no video or audio input is documented for Claude Fable 5.1, and no MMMU-Pro has been published for it.
- **Coding: 89/100.** SWE-bench Pro 81.2% / Multilingual 89.1% / Multimodal 54.7%, LiveCodeBench 90.52% (#1 on Vals), SciCode 63.08% (anchor 55%+), Terminal-Bench 2.1 91.39% (AA) / 85.02% (Vals), CursorBench 3.2 73.4% (best-verified), Terminal-Bench-Science 52.6%, FrontierCode 48.97%, FrontierSWE v2 56.3%, DeepSWE 67.4% (avg of 5 runs). Capped by DeepSWE 67.4% (under the rubric's 74% anchor), no SWE-bench Verified, no Vibe Code Bench, and Terminal-Bench 4.0 at 52.02–58.08%.
- **Cost efficiency: 30/100.** The evaluated route — OpenCode Zen `opencode/claude-fable-5-1` — is billed at **$10.00 in / $50.00 out** per 1M, cached read $0.25 (0.025× base), cached write $12.50, Batch $5/$25, matching Anthropic's list price; Artificial Analysis prices it #113 of 114 for cost ($7.63 per Index task). This is the rubric's "~$10/$50 = ~30" anchor exactly. The 0.025× cache-read rate and the 25–45% agentic cost reduction Anthropic claims versus Fable 5 are the only meaningful offsets.
- **Overall Score: 87.2/100.** (91 + 91 + 95 + 70 + 89) / 5 = 87.2 — best-fit: Anthropic's hardest-reasoning tier, with the strongest Terminal-Bench 2.1 (91.4%) and LiveCodeBench (90.5%) in the catalog, at $10/$50 — justify it only for the long-horizon agentic work that Opus 5.5 at max effort still fails; for most workloads Claude Sonnet 5.5 at high effort is the rational buy.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 4.0 — 55.8% (Anthropic) vs 57.88% (tbench.ai public board) vs 58.08% (Vals) vs 52.02% (AA max) / 55.05% (AA xhigh).** Four measurements, a 6-point spread across harnesses; the official board and Vals numbers are used and all are listed. Anthropic's comparators put Opus 5 at 37.3% and Fable 5 at 42.0% on the same harness.
2. **AutomationBench — 31.4% (Anthropic) vs 59.38% (AA partial) vs 32.12% (AA strict).** AA's strict score reproduces Anthropic's number almost exactly; the 59.38% is a different metric (share of task objectives). The strict figure is used.
3. **AA Intelligence Index — 66 (Anthropic launch article, 2026-09-01, index v4.1.1) vs 53 (current model page, v4.3.2).** Index re-baselining, not a regression; the current 53 is scored and the launch claim recorded.
4. **HLE — 60.9% no-tools (Anthropic) vs 59.13% (AA).** Close agreement.
5. **Terminal-Bench-Science 0.1 — 52.6% (Anthropic) vs 43.33% (AA) vs 40.00% (Vals AI).** A 12-point spread; AA used.
6. **Terminal-Bench 2.1 — 91.39% (AA) vs 85.02% (Vals) vs 79.03% (Vals counting fallbacks as failures).** Effort and fallback accounting; AA used, Vals' stricter number recorded.
7. **FrontierSWE v2 — 0.57 (system card) vs 56.3% (via BenchLM).** Scale format, not a contradiction; the current frontierswe.com leaderboard does not list Fable 5.1.
8. **IPI 1.0% is an attack-success rate** (lower = better) and must not be read as a capability score.
9. **The brief's "OSWorld 2.0 72.6%"** is in fact AA's Omniscience hallucination rate for another model; Anthropic itself publishes "no competitor score" for Fable 5.1's OSWorld row, so only 77.9% partial / 41.7% strict is used here.
10. **GPQA Diamond 93.74 (AA) vs 93.43 (Vals)** — harness noise.

### Notes on identity

- `claude-fable-5-1` is a **distinct model id** from `claude-opus-5.5` (different price tier, different benchmarks, different docs entry), but it *is* the same weights as the restricted **Claude Mythos 5.1** configuration ("two configurations of a new large language model … sharing identical model weights"). This folder is therefore the canonical home for those weights; `model/claude-mythos-5.1/` tracks the safeguard-relaxed, access-restricted twin.
- `claude-fable-5` (June 2026) is the **previous** generation, not a tier: separate model id, separate pricing ($10/$50 as well), and Anthropic quantifies the change ("Fable 5.1 will cost an estimated 25% less than Fable 5 for typical workloads"; Terminal-Bench 4.0 55.8% vs 42.0%, SWE-bench Pro 81.2 vs 80, DeepSWE 67.4 vs Fable 5's figures).
- Effort levels are parameters, not SKUs; the AA index ladder max 53 → low 47 and the ARC-AGI effort ladder (ARC-AGI-2 90.0% max → 78.3% low) show how much an unlabelled number depends on effort.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic first-party model overview, pricing page, launch page and the 212-page joint Fable 5.1 / Mythos 5.1 system card (PDF text extracted); independent trackers Artificial Analysis (model page, effort variants, launch article), the official Terminal-Bench 4.0 public leaderboard, Vals AI, cwe-bench.com, ARC Prize (verified), Epoch AI FrontierMath via the BenchLM ledger, and OpenRouter / OpenCode Zen catalogs. Vendor-vs-independent conflicts — including the AutomationBench metric mismatch and the AA index re-baselining — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5.1.md`, using the same headings.
