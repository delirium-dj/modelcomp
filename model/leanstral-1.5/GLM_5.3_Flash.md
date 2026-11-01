# Leanstral 1.5 — findings by GLM 5.3 Flash

- Source: Mistral AI (`mistralai/Leanstral-1.5-119B-A6B`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5 (API id `labs-leanstral-1-5`, deprecated on Mistral's API 2026-09-29/retired 2026-09-30; Apache-2.0 weights remain on Hugging Face)
- **Short description:** Mistral's open Lean 4 formal proof-engineering model: a generalist code agent (no specialized prover scaffold) that edits files, runs the Lean compiler, reads feedback and iterates — saturating miniF2F, reaching PutnamBench/FATE state-of-the-art among no-NL-guidance systems, and uncovering 5 previously-unknown bugs across 57 real repositories.
- **Provider / access:** Open weights (Hugging Face, Apache 2.0); Mistral Labs hosted endpoint was free at launch and is now retired; OpenCode Zen `opencode/leanstral-1.5`.
- **Release / knowledge:** Released 2026-07-02; deprecated on Mistral's API 2026-09-29. Knowledge cutoff not published.
- **IDs:** `mistralai/Leanstral-1.5-119B-A6B` (HF); `labs-leanstral-1-5` (Mistral API, retired); `opencode/leanstral-1.5` (Zen).
- **Context window:** 262,144 tokens (256K); 128K max output (Mistral docs). Test-time scaling runs used compaction (auto-compact every 200K tokens), not native long context.
- **Modalities:** Text in; text out (per the curated Zen meta). The Hugging Face card states text+image input as part of the Mistral Small 4 family — no vision benchmarks were published either way, so image capability is unverified.
- **Pricing (as of 2026-11-01):** Free Apache-2.0 open weights ($0 self-host); hosted lane retired; efficiency benchmark ~$1.68/problem on PutnamBench, $216 total for FLTEval pass@8.
- **Architecture:** MoE, 119B total / 6.5B active, 128 experts with 4 active per token; built on the Mistral Small 4 family; trained via mid-training + SFT + RL with CISPO.

### Raw benchmarks found

(vendor launch post + technical report, arXiv 2608.leanstral; formal-math specialization — no general MMLU/GPQA/SWE rows exist)

Formal mathematics:

- miniF2F: **saturated — 100%** (244/244 valid at pass@4 with 2M-token trajectories; test set 242/244, both stragglers fell with extra passes; fixed-budget pass@1 82.8%, pass@4 95.1%)
- PutnamBench: **587/672 problems** (pass@8, 4M-token trajectories) — top fully-open system, ahead of Seed-Prover 1.5 (581) at ~1/140th of its cost; only closed Aleph Prover (637–668) and Goedel-Architect with NL guidance (597) rank higher
- FATE (abstract algebra): **FATE-M 100%** (pass@2), **FATE-H 87%**, **FATE-X 34%** — state-of-the-art among systems without natural-language proof guidance (pass@8)
- ArXivLean (recent arXiv papers): **17.1%** (7/41) — matching GPT-5.5 xhigh and exceeding Gemini 3.1 Pro Preview and Claude Opus 4.7 high (14.6%) at under $1.5 vs $4.21 per problem
- ProofNet: **53.2% pass@8** (99/186, strict lower bound; 60.8% after targeted rescue trajectories)

Proof engineering / real-world code verification:

- FLTEval (real FLT-repository PRs, 169 tasks): **pass@1 28.9%, pass@4 38.9%, pass@8 43.2%** — beating Claude Opus 4.6's pass@1 39.6% at less than 1/7th the cost ($216 vs $1,650)
- Bug discovery: **5 previously-unknown bugs** uncovered across 57 open-source repositories in an automated verification pipeline
- Test-time scaling: monotonic from 44 problems (50k budget) → 244 (200k) → 493 (1M) → 587 (4M) on PutnamBench

General benchmarks (tool use, knowledge, general coding):

- No verified public score found — the vendor published only formal-mathematics and proof-engineering results

### Normalized scores (1–100)

- **Tool use: 66/100.** Elite inside its designed loop (agentic proof engineering with compiler feedback, compaction-based long trajectories, real-repo bug discovery) but entirely unproven on general agentic suites (no TB/OSWorld-class rows).
- **Reasoning: 72/100.** Formal-math reasoning is state-of-the-art-tier for open systems (miniF2F 100%, FATE-H 87%, ArXivLean at GPT-5.5-xhigh level); general reasoning is unmeasured, so the score rests on the specialized evidence.
- **Context window: 62/100.** 256K window with 128K output; the impressive multi-million-token scaling relies on compaction rather than native context, and no retrieval benchmark exists.
- **Multimodal: 45/100.** Image input claimed by the family card but with zero published vision results; scored near the text-only floor with the unverified claim noted.
- **Coding: 60/100.** In-domain Lean 4 coding is exceptional (FLTEval pass@8 43.2% > Opus 4.6 pass@1 at 1/7th cost; real bug discovery); general SWE-bench-class coding is unpublished, and the score cannot assume transfer.
- **Cost efficiency: 92/100.** Apache-2.0 weights are free to self-host (the hosted lane is retired); measured cost-per-result is exceptional (~$1.68/PutnamBench problem vs $54–240 for rivals).
- **Overall Score: 61/100.** Mean of the five quality dims (66+72+62+45+60)/5 = 61.0 → 61. Best fit: automated theorem proving, autoformalization and formal code verification in Lean 4 — not a general-purpose model.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (Mistral launch post, Leanstral technical report on alphaXiv, Mistral docs lifecycle, preserved evaluation artifacts); scores are normalized 1–100 interpretations, not official vendor scores. General-benchmark absence is reported as a negative finding, never backfilled.
- Reference URLs:
  - [Mistral AI — "Leanstral 1.5: Proof Abundance for All" (launch, benchmarks, bug discoveries)](https://mistral.ai/news/leanstral-1-5/)
  - [alphaXiv — Leanstral technical report (PutnamBench/FATE/FLTEval tables, test-time scaling)](https://www.alphaxiv.org/abs/2608.leanstral)
  - [Mistral Docs — Leanstral 1.5 (specs, deprecation 2026-09-29)](https://docs.mistral.ai/models/leanstral-1-5)
  - [Hugging Face — mistralai/Leanstral-1.5-119B-A6B (architecture, license)](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)
  - [Preserved evaluation artifacts — miniF2F/ProofNet trajectories (HF dataset)](https://huggingface.co/datasets/yidannwang/Leanstral-1-5-results)
  - [The Decoder — independent launch coverage](https://the-decoder.com/mistrals-open-source-leanstral-1-5-aces-formal-math-benchmarks-and-catches-real-bugs-in-code/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
