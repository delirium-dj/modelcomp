# Pareto 26.10 Preview — findings by Big Pickle

- Source: Unbiased AI (`unbiased/pareto-26.10-preview`; OpenCode Zen ID `pareto-26.10-preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased AI's current blended/"composite" release — one request, one answer, with routing across frontier and open-weight models underneath. It is a preview, explicitly labelled by the vendor as preliminary. Top use case is cheap frontier-level agentic coding and science reasoning on a metered API. Note the lineage: `Union Alpha` (tracked separately in this dataset) was the stealth launch of the prior `Pareto 26.9`, so Pareto 26.10 is the first public, non-stealth version of that same blended model.
- **Provider / access:** Unbiased AI (OpenAI-compatible Chat Completions). OpenRouter ID `unbiased/pareto-26.10-preview`, endpoint string `unbiased/pareto-26.10-preview-20260929` (created 2026-10-02). Also on OpenCode Zen as `opencode/pareto-26.10-preview`, where the model string stays `pareto`. Unbiased advertises a public harness so results can be re-run (eval credits free once set up).
- **Release / knowledge:** Released 2026-10-01 as a preview; Unbiased says numbers "may change before final publication" and that the full 26.10 launch is still ahead. Knowledge cutoff not published.
- **IDs:** `opencode/pareto-26.10-preview` (Zen), `unbiased/pareto-26.10-preview` (OpenRouter / Unbiased platform). No Free tier found — `noFreeId` applies; cost scored on paid list price.
- **Context window:** 1,048,576 tokens total (OpenRouter endpoint metadata, verified); Zen meta records ~131,000 max output (131,072). Verified from provider listings; no long-context retrieval benchmark published.
- **Modalities:** Text and image in, text out (OpenRouter `input_modalities: [text, image]`, `output_modalities: [text]`; Benchable confirms text+image in / text out). Reasoning: yes (it is a reasoning model by classification). Tool calls: yes, tools supported. Parameter control: Top P, temperature, tool choice, tools, max tokens. **No audio, video, or PDF input route found.**
- **Pricing (as of 2026-10-05):** $0.80 in / $3.20 out / $0.03 cached read per 1M (OpenRouter per-token list). Vendor-published measured cost per task: $0.004 (GPQA-Diamond), $0.008 (HLE text-only), $0.24 (DeepSWE v1.1), $0.48 (Terminal-Bench 4.0) — Unbiased advertises ~3× cheaper per task than Pareto 26.9. Paid; the vendor states zero data retention, and there is no $0 tier so no training-data consent caveat.
- **Architecture:** Proprietary blended/composite router — no disclosed weights or parameter count. Benchable lists "26.1B (Rumoured)", which is explicitly unconfirmed and contradicted by the blended design; not treated as fact here.

### Raw benchmarks found

All numbers are **vendor-published preliminary results** from Unbiased's changelog (2026-10-01) and model card, mirrored by BenchLM. The vendor states results "may change before final publication", that denominators and cost methodology "require confirmation", and that DeepSWE/ArXivMath comparisons transcribed from other labs "are not independently validated". No third-party evaluation of Pareto 26.10 Preview was found.

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** at $0.48/task (Unbiased preliminary, **internal harness** — the official Harbor TB 4.0 leaderboard does not list Pareto, and its current #1 GPT-6 Astra sits at 58.2%, so treat 50.8% as a non-comparable harness figure)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench, Toolathlon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** at $0.004/task
- HLE (text only): **49.9%** at $0.008/task
- Artificial Analysis Intelligence Index / CritPt / Omniscience: no verified public score found for this release

Coding:

- DeepSWE v1.1: **69.9%** at $0.24/task
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench: no verified public score found for this release
- Prior-version context only (not this model): Pareto 26.8 published SWE-bench Verified 86.0%, SWE-bench-adjacent Terminal-Bench 2.1 86.0%, arXivMath 69.2%, DRACO 58.0%, MMMU-Pro 77.9%

Long context:

- No long-context retrieval reported. 1,048,576 total is a provider metadata figure; no MRCR, RULER or GraphWalks number exists for Pareto 26.10 Preview.

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 4.0 at 50.8% is the only tool/agent measurement, and it lands in the 45–60% band that maps to 50–70 — mid. Capped at the lower-middle of that band because there is no Tau3-Banking, no GDPval-AA, no MCP-Atlas and no Claw number to corroborate it, the harness is the vendor's own, and the official TB 4.0 board does not contain this model.
- **Reasoning: 87/100.** GPQA Diamond 92.4% and HLE text-only 49.9% both clear the frontier thresholds (90%+ and 40%+) that define the 90–100 band — genuinely rare numbers. Held just below it because both come from a single preliminary self-reported run with the vendor itself asking for confirmation of denominators, there is no independent rerun, and the harness behind the routing composite can vary run to run. HLE is text-only, so no tool-augmented reasoning number exists.
- **Context window: 92/100.** 1,048,576 total clears the ≥1M threshold, but the 100 tier explicitly requires ≥98% retrieval measured at 512K+, and no retrieval benchmark was published — so this sits at the bottom of the 1M band rather than in the middle of it.
- **Multimodal: 65/100.** Text + image in, text out is the "+image in = 60–70" band. No MMMU-Pro or any vision number exists for this release (the prior Pareto 26.8 published 77.9%, but that is a different version), and with no audio, video or PDF route it stays well below the 90–100 omni band.
- **Coding: 76/100.** DeepSWE v1.1 at 69.9% is a hard, genuinely agentic result and sits just under the 74%+ frontier marker for this methodology, which is what keeps this out of the 90–100 tier; Terminal-Bench 4.0 50.8% is supportive but from an internal harness. Capped further by having no SWE-bench Verified, SWE-bench Pro, LiveCodeBench or SciCode figure for this version at all.
- **Cost efficiency: 89/100.** $0.80 in / $3.20 out / $0.03 cached per 1M sits between the ~$0.60/$2.20 ≈ 92 and ~$1.25/$4.25 ≈ 88 anchors, and the measured $0.24/task DeepSWE and $0.48/task Terminal-Bench costs are genuinely excellent for frontier-adjacent agentic work — worth roughly a point above the linear interpolation. Unbiased's own claim of ~3× cheaper per task than 26.9 is vendor arithmetic, so it is not banked.
- **Overall Score: 76/100.** Half-up mean of 58 / 87 / 92 / 65 / 76. Best fit: a metered API pick for science reasoning and budget-constrained agentic coding where the per-task bill matters more than multimodal breadth — but treat every published number as provisional until the vendor's promised final publication lands.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-05
- Method: public internet research (Unbiased AI changelog, model card and launch blog; OpenRouter endpoint metadata; Benchable and BenchLM model pages; the official Terminal-Bench 4.0 leaderboard for comparability checking). Every number carries its source and its harness caveat; gaps are stated as gaps. Scores are normalized 1–100 interpretations per `../../model-comparison.md`, not official vendor scores.
- Known caveats: every benchmark here is a self-reported *preliminary* number from a preview release the vendor says may change; Terminal-Bench 4.0 is measured on an internal harness absent from the official board; the 26.1B parameter figure circulating on aggregator sites is explicitly rumoured and not credible for a blended router; and the `union-alpha` entry in this dataset is the stealth name of the prior Pareto 26.9, not of this release.
- Future sources: add a new file next to this one, e.g. `DeepSeek_4.1_Flash.md`, using the same headings.