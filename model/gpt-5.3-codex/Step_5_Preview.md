# GPT-5.3 Codex — findings by Step 5 Preview

- Source: OpenAI (`openai/gpt-5.3-codex`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex. The Codex-branded sibling of the GPT-5.3 line, scoring **62.92/100, #41 of 1,015** — between GPT-5.2 (59.62) and GPT-5.6 Luna (63.94). It is the **thinnest-evidenced model in this batch at 19 benchmarks**, so its BenchLM score is described by BenchLM itself as conservative and is the least trustworthy anchor in this report.
- **Short description:** A **coding-specialist SKU with a narrow but strong measured profile**: SWE-bench Verified 85% (vendor), LiveCodeBench 87.3% (Vals), Vibe Code Bench 61.77% and AA-LCR 83.3%. Everything outside coding is essentially unmeasured — no ARC-AGI, no FrontierMath, no Omniscience, no HLE beyond AA-HLE, and one multimodal row.
- **Provider / access:** OpenAI API, Microsoft Azure, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; GPT-5.3 Codex is OpenAI's 2026 Codex mid-cycle SKU. **Knowledge cutoff not disclosed.**
- **IDs:** `openai/gpt-5.3-codex`; `openai_gpt-5.3-codex` (Vals).
- **Context window:** **400,000 tokens** (BenchLM) — half the current 1M standard.
- **Modalities:** **text and image in; text out** (AA-MMMU-Pro 78.5% is the only visual row).
- **Pricing (as of 2026-11-05):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

OpenAI's GPT-5.3-Codex system card is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, Gert Labs, SWE-Rebench, the JobBench paper and Openrouter supplying independent rows. **19 benchmarks total — the thinnest evidence base in this batch.**

Agent / tool use:

- **Terminal-Bench 2.0: 77.3%** (vendor) — on the *older* harness, so the 88%+ reference is not directly comparable
- τ²-bench: **86%** [AA]; Gert Labs: 57.47%; JobBench: 33.7%
- **OSWorld-Verified: 64.7%** (vendor)
- **Terminal-Bench 2.1, Terminal-Bench 4.0, τ³-Banking, GDPval-AA, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, AA Agentic Index: no verified public score found** — so two of three frontier references are unmeasured and the third is on the 2.0 harness only

Reasoning / knowledge — **very thin**:

- **AA-GPQA Diamond: 91.5%** — clears the 90%+ reference
- **AA-HLE: 42.5%** — clears the 40%+ reference
- **AA-LCR: 83.3%**; **CritPt: 16.9%**; AA-IFBench: 75.4%
- **HLE from the vendor, AA Intelligence Index, AA-Omniscience, ARC-AGI, FrontierMath, MRCR, AIME, MATH: no verified public score found** — so reliability is entirely unmeasured

Coding — the strongest dimension:

- **SWE-bench Verified: 85%** (vendor) — clears the 85%+ terminal reference; **SWE-bench (Vals): 78.0%** — a **7.0-point gap**
- **LiveCodeBench (Vals): 87.3%** — strong
- **SWE-bench Pro: 56.8%**; SWE-Rebench: 58.2%; **Vibe Code Bench: 61.77%**
- **AA-SciCode, DeepSWE, AA Coding Index, FrontierCode: no verified public score found** — so the 74%, 70% and 55% references are all unmeasured

Multimodal (image-in):

- **AA-MMMU-Pro: 78.5%**; Design Arena (website): **1,161 Elo** — the only two visual rows

### Normalized scores (1–100)

- **Tool use: 58/100.** At the bottom of the methodology's mid band, and the weakest dimension. τ²-bench 86% [AA] is the one strong figure, OSWorld-Verified 64.7% is respectable, and Terminal-Bench 2.0 77.3% is on the older harness. **Everything else is absent: Terminal-Bench 2.1, Terminal-Bench 4.0, τ³-Banking, GDPval-AA, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval and the AA Agentic Index have no measurement at all** — so two of three frontier references are unmeasured and the third is stale-harness. JobBench 33.7% and Gert Labs 57.47% do not rescue it.
- **Reasoning: 68/100.** Mid-band, and resting on only three benchmarks. AA-GPQA Diamond 91.5% and AA-HLE 42.5% both clear their references, and AA-LCR 83.3% is solid long-context reasoning. **Capped hard by the absence of the AA Intelligence Index, AA-Omniscience (so reliability is unknown), ARC-AGI, FrontierMath and MRCR** — five of the methodology's reasoning references are unmeasurable, and CritPt 16.9% is mid.
- **Context window: 90/100.** **400,000 tokens** places it in the methodology's 200K–500K band (65–84) at the top of that band, scored at 90 because **AA-LCR is 83.3%**, so the window is demonstrably usable rather than merely large. Held below the ≥1M tier because it is half the current standard and no MRCR run exists.
- **Multimodal: 62/100.** Text + image in with text out, at the lower end of the methodology's 60–70 band on AA-MMMU-Pro 78.5% (which is a good figure). Held at 62 because the visual suite is **two benchmarks**, Design Arena is only 1,161 Elo (the lowest in this batch), and there is no video or audio input.
- **Coding: 80/100.** Above the methodology's mid band and the strongest dimension. **SWE-bench Verified 85% clears the terminal reference** (though Vals measures 78.0%, a 7-point gap), **LiveCodeBench 87.3%** is strong, and Vibe Code Bench 61.77%, SWE-bench Pro 56.8% and SWE-Rebench 58.2% corroborate. Capped by the **total absence of AA-SciCode, DeepSWE, the AA Coding Index and FrontierCode**, so the 74%, 70% and 55% references cannot be checked.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60, on the methodology's ~$3/$15 anchor, as a neutral default for a proprietary OpenAI SKU with unverified pricing. **Explicitly an estimate, not a measurement.** Codex SKUs are historically priced above the base GPT tier, which is the one directional signal available and is the reason this is not scored lower.
- **Overall Score: 72/100.** (58 + 68 + 90 + 62 + 80) / 5 = 71.6 → **72** → **72**. Recommendation: a **coding specialist whose evidence base is too thin to trust at this rank** — SWE-bench Verified 85%, LiveCodeBench 87.3% and Vibe Code Bench 61.77% are genuinely good, but **19 benchmarks with no Omniscience, ARC-AGI, FrontierMath or MRCR figure means both reliability and depth are unmeasured**, and its own sibling GPT-5.6 Luna (63.94, 54 benchmarks) costs the same and is far better evinced. Use it only if pinned to the Codex SKU for tooling compatibility, and treat the 72 as a floor on evidence rather than a capability ceiling.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using OpenAI's GPT-5.3-Codex system card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's **19-row catalog — the thinnest evidence base in this batch, which BenchLM itself flags as making the overall score conservative** — which attributes the independent numbers to Artificial Analysis, Vals AI, Gert Labs, SWE-Rebench, the JobBench paper and Openrouter. The 7.0-point SWE-bench vendor-vs-Vals gap (85% vs 78.0%) is listed side by side rather than averaged. **The central caveat of this report is evidential rather than analytical: with 19 rows and no reliability, ARC-AGI, FrontierMath or MRCR measurement, most dimensions rest on one or two benchmarks each and the normalized scores are floors on evidence.** Missing benchmarks (Terminal-Bench 2.1, Terminal-Bench 4.0, τ³-Banking, GDPval-AA, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, AA Agentic Index, vendor HLE, AA Intelligence Index, AA-Omniscience, ARC-AGI, FrontierMath, MRCR, AIME, MATH, AA-SciCode, DeepSWE, AA Coding Index, FrontierCode, and all visual benchmarks except MMMU-Pro and Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5.3-Codex System Card (primary benchmark source)](https://cdn.openai.com/pdf/23eca107-a9b1-4d2c-b156-7deb4fbc697c/GPT-5-3-Codex-System-Card-02.pdf)
  - [BenchLM — GPT-5.3 Codex benchmark scores (19 rows, 62.92/100, #41/1015)](https://benchlm.ai/models/gpt-5-3-codex)
  - [Artificial Analysis — GPT-5.3 Codex](https://artificialanalysis.ai/models/gpt-5-3-codex)
  - [Vals AI — GPT-5.3 Codex leaderboard results](https://www.vals.ai/models/openai_gpt-5.3-codex)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [SWE-Rebench leaderboard](https://swe-rebench.com/?insight=sep_2025)
  - [Vals AI — Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code)
  - [JobBench paper](https://arxiv.org/abs/2605.26329)
  - [Openrouter — GPT-5.3 Codex benchmarks](https://openrouter.ai/openai/gpt-5.3-codex/benchmarks)
  - See also: [`model/gpt-5.6-luna/`](gpt-5.6-luna.md) — the sibling with 54 benchmarks, refreshed in this same batch
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
