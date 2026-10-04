# Seed 2.0 Pro — findings by Claude Opus 5

- Source: ByteDance / Seed (`seed-2.0-pro`, also marketed as Doubao Seed 2.0 Pro)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro — the **Pro (flagship)** tier of ByteDance's Seed 2.0 series, also listed under ByteDance's consumer brand as **Doubao Seed 2.0 Pro**. Proprietary, hosted-only. No free tier verified.
- **Short description:** Released **2026-02-14**. ByteDance positions it as its **"flagship general-purpose agent model focused on long-chain reasoning and robustness in complex workflows"**, with comprehensive multimodal understanding across text, image and video, enhanced instruction-following and strong coding. ByteDance published an official model card PDF. **The evidence base is very thin: a single public benchmark figure could be verified**, and the model is **not tracked at all by the benchmark aggregator that covers most peers in this dataset** (its page returns 404). Two further hard facts shape any adoption decision: a **January 2024 knowledge cutoff** — the oldest of any model in this research pass by roughly two years — and **measured throughput of 2.1 characters/second with a p95 time-to-first-token of 14.45 seconds**, which is among the slowest recorded here.
- **Provider / access:** **One tracked provider — DeepInfra.** ByteDance's own documentation lives at `seed.bytedance.com`. A separate pricing tracker lists the Doubao-branded variant across three providers at slightly different rates. Reasoning: long-chain reasoning is the stated design focus.
- **Release / knowledge:** Released **2026-02-14**. **Knowledge cutoff January 2024** — a two-year-plus gap that makes retrieval or search grounding effectively mandatory for anything current.
- **IDs:** `seed-2.0-pro`; Doubao-branded listings also exist. **No free-tier ID verified.**
- **Context window:** **256,000 input tokens (262K per one provider listing) with 131,100 max output tokens.** The output ceiling is genuinely notable — **131K exceeds the 128K frontier norm** and is roughly double the 64–65K that the Gemini Flash line offers. **No retrieval or long-context benchmark of any kind exists** — no MRCR, RULER, GraphWalks, LCR or needle result.
- **Modalities:** **Input: text, image and video. Output: text only.** Video input is documented in the provider listing rather than inferred, which is stronger evidence than several peers in this dataset have. No audio input and no non-text output.
- **Pricing (as of 2026-10-03):** **$0.50 / 1M input, $0.10 / 1M cached input, $3.00 / 1M output** via DeepInfra — a blended **$0.62 / 1M at a 20:1 in:out mix**, or **$3.50 for a 1M-in / 1M-out workload**. A separate tracker lists the Doubao-branded variant at **$0.45 / $2.24** across three providers, and a third computes an aggregate of $0.78; all are recorded. Pricing is cheap in absolute terms.
- **Architecture:** Proprietary, closed weights. **Parameter count, active parameters and topology are not disclosed** in the sources reached; ByteDance's model card PDF may contain more detail but was not retrieved.

### Raw benchmarks found

> **Only one public benchmark figure could be verified for this model**, and it comes from a third-party aggregator rather than ByteDance directly. The benchmark tracker that covers essentially every peer in this part of the dataset **does not track Seed 2.0 Pro at all**. One composite-rating site assigns it an **overall score of 39.5**, another computes an average of 76.5% "across 1 benchmarks" — which is simply the single figure restated.

Agent / tool use:

- Terminal-Bench (any version): **no verified public score found**
- Tau2-bench / Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / Toolathlon / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld / AutomationBench: **no verified public score found**
- **Nothing measured.** ByteDance's "flagship general-purpose agent model" framing is vendor positioning with no published agentic evidence behind it in any source reached.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR / MRCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** — this model does not appear in Artificial Analysis's index in the sources reached.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- **Nothing measured.** The "long-chain reasoning" design focus is likewise unaccompanied by any published reasoning benchmark.

Coding:

- **SWE-bench Verified: 76.5%** (third-party aggregator; the single verified figure for this model). For context in this dataset: Claude Opus 4.8 88.6%, Qwen3.8-Max 85.6% (Vals-measured), Claude Sonnet 5 85.2%, Qwen3.7-Plus 77.7%, GPT-5.1 76.3%. So 76.5% is **mid-field and respectable** — comparable to GPT-5.1 and Gemini 3 Pro's generation.
- SWE-bench Pro / Multilingual: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **no verified public score found**
- AA Coding Index: **no verified public score found**

Multimodal:

- **No multimodal benchmark of any kind found** — no MMMU, MMMU-Pro, CharXiv, document, OCR, video or audio result, despite documented text/image/video input.

Operational (measured, provider telemetry over a trailing 7-day window):

- **p95 time to first token: 14.45 seconds**; **p95 sustained output throughput: 2.1 characters/second.** Both are among the worst figures recorded in this research pass — for comparison, MiMo-V2.6-Flash at 51 tokens/second was explicitly labelled "notably slow" by Artificial Analysis, and this is slower still on the character measure. A separate tracker lists 50 tps, which cannot be reconciled with 2.1 char/s; both are recorded.

### Normalized scores (1–100)

- **Tool use: 55/100.** **Nothing is measured.** Every one of the methodology's six tool-use references is unreported — no Terminal-Bench at any version, no Tau3-Banking, no GDPval-AA, no Claw-Eval, no OSWorld or AutomationBench, no MCP-Atlas or Toolathlon — which triggers the explicit missing-evidence penalty in its strongest form. ByteDance's own framing calls this a "flagship general-purpose agent model" and cites "robustness in complex workflows", but no published figure supports that for any agentic task. 55 sits at the bottom of the methodology's mid band and reflects an absence of evidence, not a measurement. Two operational facts make a higher placement indefensible regardless: a **14.45-second p95 time-to-first-token** is punishing for multi-step agent loops where latency compounds per turn, and **one tracked provider** means no routing redundancy.
- **Reasoning: 55/100.** **Nothing is measured.** GPQA Diamond, HLE, MRCR/LCR, CritPt, the Artificial Analysis Intelligence Index and every hallucination measurement are all absent, so not one of the methodology's five named reasoning references can be checked, and the model is absent from Artificial Analysis's index entirely. The "long-chain reasoning" design focus is vendor positioning without published support. One hard fact argues actively downward rather than merely leaving a gap: a **January 2024 knowledge cutoff** is roughly two years older than any other model in this research pass, which means substantial factual staleness on anything post-2023 and makes search grounding mandatory rather than optional.
- **Context window: 74/100.** **256,000 input tokens** places it in the methodology's 200K–500K tier (65–84), modestly above the 200K = 70 anchor. One genuine strength lifts it within the band: **a 131,100-token maximum output exceeds the 128K frontier norm** and is roughly double what the Gemini Flash line permits, which matters for long single-shot generation. Three things cap it: **no retrieval or long-context benchmark of any kind exists**, so recall across the window is entirely unverified; the window is a quarter of the 1M that most peers at this standing now offer; and the slow throughput means filling 256K of context and generating 131K of output would take a very long wall-clock time in practice.
- **Multimodal: 76/100.** **Input is documented as text, image and video** — and unlike several peers in this dataset where video capability had to be inferred from a stray benchmark row, this is stated in the provider's own modality listing, which places it in the methodology's "+video/PDF in = 75–90" band on documented capability. It is scored at the **band floor** because **not a single multimodal benchmark exists for it** — no MMMU, MMMU-Pro, CharXiv, document, OCR or video result — so the breadth is specified and entirely unquantified. There is also no audio input and no non-text output, which caps this band regardless.
- **Coding: 72/100.** **SWE-bench Verified at 76.5% is the only verified benchmark for this model, and it is respectable** — mid-field in this dataset, comparable to GPT-5.1 (76.3%) and Gemini 3 Pro's generation, roughly 12 points behind Claude Opus 4.8. That single figure is what the score rests on. Four deductions: **SWE-bench Pro, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench and the AA Coding Index are all absent**, so every one of the methodology's coding references other than the one measured is unchecked; there is **no agentic-coding evidence at all** (no Terminal-Bench at any version), which is the dimension most models are now differentiated on; the figure comes from a **third-party aggregator rather than ByteDance or an independent lab**, so its harness is unknown; and the **January 2024 knowledge cutoff** means library and framework knowledge is two years stale, which bites hardest in coding.
- **Cost efficiency: 80/100.** **$0.50 input / $3.00 output with $0.10 cached input is well below the $3/$15 anchor that maps to ~60**, and the blended figure of **$0.62 / 1M at 20:1** is genuinely cheap — the Doubao-branded listing at $0.45 / $2.24 is cheaper still. Cached input at a 20% multiplier is reasonable. Four deductions keep it below the mid-80s. **Throughput is the problem: a measured 2.1 characters/second with a 14.45-second p95 time-to-first-token** means wall-clock cost per completed task is far worse than the per-token rate implies — cheap tokens delivered slowly are not cheap work. **Only one tracked provider** creates concentration risk and removes price competition. **No free tier** is verified. And the pricing itself is **inconsistent across trackers** ($0.50/$3.00, $0.45/$2.24 and an aggregate of $0.78), so it must be re-verified against ByteDance's live rates before budgeting.
- **Overall Score: 66.4/100.** Mean of the five non-cost dimensions (55 + 55 + 74 + 76 + 72) / 5 = 66.4 — and the honest headline is that **this is a thin-evidence floor, not a capability assessment.** What is actually verified: one coding benchmark (SWE-bench Verified 76.5%, respectable), documented text/image/video input, a 256K window with an unusually generous 131K output ceiling, cheap tokens, and two serious operational liabilities — **a January 2024 knowledge cutoff** and **2.1 char/s throughput at 14.45s p95 TTFT**. What is not verified: anything about agentic capability, anything about reasoning, anything about multimodal quality, and anything about long-context retrieval. The aggregator that tracks essentially every peer here does not track this model at all. Practical guidance: it may suit **cost-sensitive batch coding or multimodal ingestion where latency does not matter and content is not time-sensitive** — the cheap rate card, video input and 131K output ceiling are real. Do not choose it for **interactive or agentic work** (14.45s TTFT, 2.1 char/s, zero agentic benchmarks), for **anything requiring current knowledge** (two-year-stale cutoff without mandatory grounding), or for **any workload where you need to predict behaviour from published evidence** — there essentially is none. Run your own benchmarks before committing, and plan for the single-provider concentration risk.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-03
- Method: fresh public internet research only — LLM Stats' model page (snapshot dated 2026-10-04) for the 2026-02-14 release date, the ByteDance attribution, the proprietary licence, ByteDance's own positioning as a flagship general-purpose agent model for long-chain reasoning, the documented **text / image / video input with text-only output**, the **256,000-token input and 131,100-token output** limits, the **$0.50 / $0.10 cached / $3.00** DeepInfra rate card with the $0.62 blended figure, the **January 2024 knowledge cutoff**, the measured **14.45-second p95 time-to-first-token and 2.1 character/second p95 throughput** from provider telemetry over a trailing 7-day window, the single-tracked-provider status, and the locations of ByteDance's provider documentation and official model card PDF; and a DuckDuckGo result set whose snippets supplied the only verified benchmark figure (**SWE-bench Verified 76.5%**, from airank.dev, which states it is averaging "across 1 benchmarks"), the alternative Doubao-branded pricing of $0.45 / $2.24 across three providers, a third aggregate pricing figure of $0.78, a composite overall rating of 39.5 with a conflicting 50 tps speed figure, the 262K context figure from a further provider listing, and the $3.50 cost for a 1M-in / 1M-out workload. An attempt to retrieve this model from the benchmark aggregator used for most peers in this research pass **returned 404 — it is not tracked there**, and that absence is reported as a finding. ByteDance's model card PDF was identified but not retrieved, so architecture details remain undisclosed here rather than being inferred. Conflicting figures (pricing across three trackers; 2.1 char/s against 50 tps) are all recorded rather than reconciled. No peer `model/` findings files were read. Unavailable figures (parameter count, architecture, Terminal-Bench at any version, Tau2-bench, Tau3-Banking, GDPval-AA, Claw-Eval, MCP-Atlas, Toolathlon, OSWorld, AutomationBench, GPQA Diamond, HLE, MRCR/RULER/GraphWalks, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, hallucination rate, SWE-bench Pro and Multilingual, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench, AA Coding Index, and every multimodal benchmark) are recorded as "no verified public score found" rather than estimated. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
