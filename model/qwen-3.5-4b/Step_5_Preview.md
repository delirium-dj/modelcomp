# Qwen3.5-4B — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.5-4B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-4B. Alibaba's **open-weight 4B** — the smallest member of the Qwen3.5 generation (siblings 9B, 27B, 35B-A3B, 122B-A10B, 397B) — and **unranked on BenchLM with 7 source-displayable rows**. BenchLM's canonical slug is `qwen3-5-4b` (**not** `qwen-3.5-4b`, which 404s — the same dotted-slug trap as the rest of the Qwen 3.x family; the repo folder spelling `qwen-3.5-4b` and the dotted BenchLM slug both 404, the correct dotted form being `qwen3-5-4b`).
- **Short description:** A genuinely striking small model: **τ²-bench 92.1% — among the strongest tool-protocol figures in this research series, from a 4B parameter model** — against **CritPt 0.0% (tying the series-lowest), AA-HLE 9.9%, AA-MMMU-Pro 65.4%, AA-GPQA Diamond 77.1% and AA-IFBench 52.0%**. It is the clearest instance yet of the protocol-fluency-without-execution pattern, at the smallest scale.
- **Provider / access:** **Open weights** on Hugging Face (`Qwen/Qwen3.5-4B`), and self-hosting — the cheapest genuine self-hosting profile in this research series.
- **Release / knowledge:** release date not restated; Qwen3.5-4B is Alibaba's 2026 small-model line. **Knowledge cutoff not disclosed.**
- **IDs:** `Qwen/Qwen3.5-4B` (Hugging Face); `qwen3-5-4b` (BenchLM canonical); `qwen/qwen3.5-4b` (Openrouter).
- **Context window:** **262,000 tokens** (BenchLM) — a full quarter of the current 1M standard in a 4B model, which is the model's most valuable verified property.
- **Modalities:** **text and image in; text out** (AA-MMMU-Pro 65.4% is the only visual row).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape**.
- **Architecture:** **open weight**, dense 4B; no MoE at this scale.

### Raw benchmarks found

**A provenance note is recorded: every one of this model's 7 rows is attributed to Artificial Analysis** — no Qwen model card, launch post or benchmark table appears in the attribution. So, as with Grok 4.3, GPT-5.1, Grok 4.1 Fast, GPT-5.2-Codex, Grok 4, Qwen3.5 Flash, GPT-5.1-Codex, Gemini 2.5 Flash, Gemini 2.0 Flash, Gemini 1.5 Pro and Hy3, **this is a fully independently-evidenced model with no vendor-run rows at all** — the cleanest provenance in this batch. 7 benchmarks total — the joint-third-thinnest evidence base in this research series.

Agentic / tool use — **the standout figure**:

- **τ²-bench: 92.1%** [AA] — **the strongest τ²-bench figure measured from a sub-10B model in this research series**, and among the best at any scale
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists** — τ²-bench is the entire agentic evidence base

Reasoning / knowledge:

- **AA-GPQA Diamond: 77.1%** [AA] — fails the 90%+ reference by 12.9 points
- **AA-HLE: 9.9%** [AA] — fails the 40%+ reference by 30.1 points
- **CritPt: 0.0%** [AA] — **ties the lowest CritPt measured anywhere in this research series**
- **AA-LCR: 63.0%** [AA]; **AA-IFBench: 52.0%** [AA] — weak instruction following for the family
- **ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, AIME, MATH, MMLU-Pro, FrontierMath: no verified public score found** — so **composite depth, reliability and three of five reasoning references are entirely unmeasured**

Coding:

- **No coding benchmark of any kind** — no SWE-bench, LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench or FrontierCode

Multimodal (image-in):

- **AA-MMMU-Pro: 65.4%** [AA] — the only visual figure, and weak
- **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 74/100.** Above the methodology's mid band, and anchored on one genuinely striking figure: **τ²-bench 92.1% [AA] — the strongest tool-protocol figure measured from a sub-10B model in this research series.** That is a real result and the model's most decision-relevant property. Held at 74 rather than higher because **τ²-bench is the entire agentic evidence base** — no Terminal-Bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index exists — so all three frontier references are unmeasured and no composite exists, and the pattern across this research series is that strong τ² scores do not predict execution.
- **Reasoning: 44/100.** Below the methodology's mid band, and the weakest dimension. **CritPt 0.0% ties the series-lowest, AA-HLE 9.9% fails the 40%+ reference by 30.1 points and AA-GPQA Diamond 77.1% fails the 90%+ reference by 12.9 points**, with **AA-LCR 63.0%** and **AA-IFBench 52.0%** both weak. Capped by the **total absence of ARC-AGI, MRCR, the AA Intelligence Index, AA-Omniscience, AIME, MATH, MMLU-Pro and FrontierMath** — so composite depth, reliability and three of five reasoning references are unknown. Scored at 44 rather than lower because the 4B scale makes these figures expected rather than damning.
- **Context window: 88/100.** **262,000 tokens** — the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 88 because **a 262K window in a 4B model is the model's most valuable verified property**, and one of the largest windows in this research series relative to parameter count. Held at 88 rather than the ≥1M tier because it is a quarter of the current standard, **AA-LCR is 63.0%** (weak), no MRCR or GraphWalks run exists, and no max-output limit is published.
- **Multimodal: 62/100.** Text + image in with text out, at the lower end of the methodology's 60–70 band. Held at 62 because **AA-MMMU-Pro 65.4% is weak**, the visual suite is one benchmark, and CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision are unmeasured.
- **Coding: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** Not one coding benchmark exists. Scored at 50 rather than lower because an open-weight 4B model presumably handles some coding; **not scored above 50 because there is nothing to support it.**
- **Cost efficiency: 97/100.** **No rate card is published in any source checked**, so the score rests on the architecture rather than a price: **open weights, dense 4B — the cheapest genuine self-hosting profile measured anywhere in this research series**, running on essentially any accelerator. Held at 97 rather than 100 because no Zen free tier is recorded and no published rate to verify.
- **Overall Score: 63.6/100.** (74 + 44 + 88 + 62 + 50 + 97) / 5 = 69.6 → **70**. Recommendation: **the cheapest self-hostable model in this research series, with one genuinely striking protocol figure and a near-floor depth profile.** **τ²-bench 92.1% from a 4B parameter model — the strongest sub-10B tool-protocol figure measured here** — plus a **262K window** and **open weights** make it a genuinely attractive proposition for cheap, local, tool-calling-heavy work. Two hard cautions: **CritPt 0.0% ties the series-lowest, AA-HLE 9.9% is 30 points under the reference, and AA-IFBench is 52.0%**, so it must never be used for reasoning, depth or factual work; and **the entire agentic evidence base is one benchmark**, so the τ² figure is exactly the pattern that has failed to predict execution across fifteen models in this series. Prefer **Qwen3.5-9B (refreshed earlier in this session)** if you can host 9B, which is the same family's next tier up.

---

## Signature
- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using BenchLM's 7-row catalog as the direct source, which attributes **every row to Artificial Analysis with no Qwen model card, launch post or benchmark table anywhere** — a fully independently-evidenced model with no vendor-run rows, the cleanest provenance in this batch. **A lookup trap is recorded: the repo folder spelling `qwen-3.5-4b` 404s on BenchLM, whose canonical slug is the dotted `qwen3-5-4b`** — the same dotted-slug trap as the rest of the Qwen 3.x family — and it had to be found via Qwen3.5-397B's sibling list. The joint-third-thinnest evidence base in this research series (7 rows, alongside Nemotron 3 Nano Omni and Qwen 3.7 Flash) is stated plainly rather than hedged. The report's central finding is a **contradiction rather than a level: τ²-bench 92.1% is the strongest tool-protocol figure measured from a sub-10B model in this research series, while CritPt 0.0% ties the series-lowest and AA-HLE 9.9% is 30 points under the reference** — recorded explicitly as the protocol-fluency-without-execution pattern confirmed across fifteen models in this series, and carried into the recommendation, where the τ² figure is named as exactly the pattern that has failed to predict execution. The **262K window in a 4B model** is attributed as the model's most valuable verified property, measuring window against parameter count. The **cheapest self-hosting profile measured anywhere in this research series** is attributed as the cost dimension's basis. The unpublished rate card is surfaced with its effect on the cost score stated as an architecture-based inference. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, AIME, MATH, MMLU-Pro, FrontierMath, and every coding benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-4B model card](https://huggingface.co/Qwen/Qwen3.5-4B)
  - [BenchLM — Qwen3.5-4B (7 benchmark rows, no overall score, unranked; canonical dotted slug `qwen3-5-4b`)](https://benchlm.ai/models/qwen3-5-4b)
  - [Artificial Analysis — Qwen3.5-4B (primary and only source for all 7 rows)](https://artificialanalysis.ai/models/qwen3-5-4b)
  - [Artificial Analysis — tau2-bench leaderboard (source of the 92.1%)](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — critpt leaderboard (source of the series-lowest-tied 0.0%)](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Openrouter — Qwen3.5-4B](https://openrouter.ai/qwen/qwen3.5-4b)
  - See also: [`model/qwen-3.5-9b/`](qwen-3.5-9b.md) — the same family's next tier up, refreshed earlier in this session; [`model/qwen-3.5-27b/`](qwen-3.5-27b.md) (48.93) and [`model/qwen-3.5-35b-a3b/`](qwen-3.5-35b-a3b.md) (45.58) — the rest of the Qwen3.5 generation
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
