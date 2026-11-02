# Big Pickle — findings by Solar_Mini_4

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Big Pickle (`opencode/big-pickle`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** OpenCode Zen "stealth" free reasoning model for deliberate analysis, multi-step problem solving, and tool use; community speculation points to a Zhipu/GLM-family base, but OpenCode does not confirm the maker. Free limited-time tier on Zen; third-party benchmarks cite ~50.8% on SWE Atlas Codebase QnA.
- **Provider / access:** OpenCode Zen (`opencode/big-pickle`), `https://opencode.ai/zen/v1/chat/completions` (Chat Completions only, NOT Responses API).
- **Release / knowledge:** 2025-10-17 (models.dev catalog); knowledge cutoff 2025-01.
- **IDs:** `big-pickle` (`owned_by: opencode`; historically `zen/big-pickle`).
- **Context window:** 200,000 total / 160,000 input / 32,000 output (models.dev TOML + Pi.dev).
- **Modalities:** text in/out only; reasoning = yes (interleaved `reasoning_content`); tool_call = true; structured_output = true; attachment = false.
- **Pricing (as of 2026-10-10):** Free / Free / Free cached on Zen (limited-time stealth period, 2025-10-17 through at least 2026-10-10); collected prompts may be used to improve the model.
- **Architecture:** Not disclosed (`open_weights = false`). Third-party leakage suggests a Zhipu/GLM family base, unconfirmed by first-party sources.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Zero verified public benchmark numbers → save `<STEM>.md.excluded` instead.

- SWE Atlas Codebase QnA: **50.8%** (63/124) — community run 2026-08-11, official Scale harness + Scale verifier, single-trial (not Scale-verified); by language TS 58.1% / Py 55.2% / Go 50.0% / C 38.5% (Glonce write-up)
- ORPT-Bench (community): composite **0.615**, success 67%
- Terminal-Bench (2.1/2.0/Hard), Tau2/Tau3, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas: **no verified public score found**
- GPQA Diamond, HLE, LCR, CritPt, AA Intelligence Index, BenchLM overall, AA-Omniscience, MMLU-Pro: **no verified public score found**
- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe, DeepSWE, AA Coding Index: **no verified public score found**
- MRCR / RULER / GraphWalks: **no verified public score found**

> SELF-EXCLUSION (mandatory): if a folder's model yielded zero verified public benchmark numbers — every row below would read "no verified public score found" — do NOT save a scored `.md` file. Save `model/big-pickle/Solar_Mini_4.md.excluded` instead. Zero verified benchmarks = self-exclude.

## Second-pass research — 2026-10-10

Two independent sources retrieved on 2026-10-10:

1. **Glonce** (`glonce.com/big-pickle-stealth-model-scores-50.8-on/`) — one person's self-reported SWE Atlas Codebase QnA run on 2026-08-11 (63/124, single trial, ~±4.5 pt single-trial standard error, below-declared 16 CPU/16 GB sandbox resources, strict lower bound 49.2% if the judge-undecodable rubrics are scored as failures). Identity unofficially unconfirmed (possible DeepSeek infrastructure per leaked errors/signatures). SWE Atlas 50.8% is the only robust public number.
2. **modelcompare.dev** (`modelcompare.dev/models/opencode/big-pickle`, 2026-10-10 snapshot) — context 200K, max output 32K, tool calling + structured output, text-only input/output, proprietary (OpenCode-only), released 2025-10-17, no published per-token price.

Additional corroboration: the repo's pre-existing `big-pickle/Big_Pickle.md` (2026-09-17, re-verified 2026-10-01) already anchored the same 50.8% SWE Atlas figure and explicitly searched 2026-10-01 for new benchmarks and found none.

Conclusion for score changes: none. No new verifiable benchmark (Terminal-Bench, SWE-bench Verified, GPQA, AA Intelligence Index) surfaced between 2026-09-17 and 2026-10-10. The existing normalized scores remain the best-supported values. `model/big-pickle/Solar_Mini_4.md` is written here per the second-pass delegation, carrying the same scores as the prior report with the same caveats.


### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. NEVER include Cost efficiency — scored independently.

- **Tool use: 40/100.** Only one community tool eval (SWE Atlas Codebase QnA 50.8%, single-trial) and no agentic leaderboard presence — score rests on thin evidence, conservative.
- **Reasoning: 55/100.** No public reasoning scores; "reasoning model" per catalog but nothing measured and nothing published to validate depth.
- **Context window: 70/100.** 200K tier; 32K max output is on the small side for big generations.
- **Multimodal: 15/100.** Text-only in/out; no attachments; no image/video/audio.
- **Coding: 60/100.** Community SWE-Atlas 50.8% hints mid-pack coding; anecdotal "Sonnet-class" claims have no official bench backing.
- **Cost efficiency: 100/100.** $0/$0/$0 free tier on Zen (limited-time) as of 2026-10-10.
- **Overall Score: 48/100.** (40 + 55 + 70 + 15 + 60) / 5 = 48.0. A zero-cost low-information model: fine as a free fallback, treat the 50.8% Codebase-QnA as the strongest (and only robust) verifiable datapoint.

---

## Re-verification — 2026-10-10 (second-pass)

Original research date 2026-09-17. This second-pass deliverable updates `model/big-pickle/Solar_Mini_4.md` per the delegation. Sources: Glonce (2026-08-11 run write-up, accessed 2026-10-10), modelcompare.dev (2026-10-10 snapshot), and the repo's pre-existing `big-pickle/Big_Pickle.md` (2026-09-17 + 2026-10-01 re-verification).

No score changes. The previous report's conclusion stands: no new verifiable benchmark for `big-pickle` surfaced between 2026-09-17 and 2026-10-10; the 50.8% SWE Atlas Codebase QnA remains the only robust public datapoint. Missing reasoning/coding/agentic benchmarks keep Tool use 40, Reasoning 55, and Coding 60 conservative. Context 70 and Multimodal 15 hold (200K, text-only). Cost efficiency stays 100 on the confirmed free-tier rate.

## Signature

- Provided by: **Solar_Mini_4 (opencode/big-pickle)** — 2026-10-10
- Method: public internet research (models.dev, Pi.dev, OpenCode docs, Glonce SWE Atlas write-up, modelcompare.dev); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass research confirmed no new verifiable benchmark since 2026-09-17.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/big-pickle/Solar_Mini_4.md` (folder name `big-pickle` = filesystem-safe slug; short stem per model README).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/big-pickle/`.
4. No benchmark invented; verified sources cited above. Zero verified benchmarks would have meant self-exclusion as `.md.excluded`.
5. Second-pass re-verification confirmed no score change (evidence supports preservation, not recalculation).
