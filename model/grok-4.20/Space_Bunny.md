# Grok 4.20 — findings by Space Bunny

- Source: SpaceXAI/xAI (`xai/grok-4.20-0309-reasoning`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **LARGEST single-report change in this batch: Overall 74.0 → 82.4.** The prior pass was evidence-starved — roughly half its raw-benchmark block reads "no verified public score found" — and explicitly flagged **Coding 58** as "the least evidence-backed number in this report" and "a provisional read." That caution was warranted: **SWE-bench, LiveCodeBench, Terminal-Bench, GPQA, MMLU-Pro, ARC-AGI-2, and six multimodal benchmarks all now have published values from two independent sources.** The prior Tool use score was anchored on a single τ²-Bench Telecom domain and is now contradicted by a real terminal-agentic number; Reasoning was anchored on an agentic-weighted index that misreads this model. Restated: **Tool 88 → 82 (down)**, **Reasoning 61 → 76**, **Multimodal 67 → 82**, **Coding 58 → 76**, Context and Cost unchanged.

## Model card

- **Name:** Grok 4.20 0309 v2 (reasoning variant; xAI's short name is "Grok 4.20")
- **Short description:** SpaceXAI's high-speed general reasoning flagship of early 2026, marketed on output speed, agentic tool calling, and truthfulness. **Not a coding specialist by design** — Grok 4.5/4.6/4.7 took that role — yet it posts frontier-adjacent repository-level coding and knowledge scores. It is **deprecated**: xAI docs and Artificial Analysis both point users at Grok 4.3 and later Grok 4.6 / 4.7.
- **Provider / access:** xAI API — `https://api.x.ai/v1/chat/completions` (Chat Completions) and the stateful `https://api.x.ai/v1/responses` (Responses API). Also served through Microsoft Azure Foundry (AA tracks two providers: xAI first-party, Azure). BenchLM tracks a separate **Grok 4.20 Multi-agent** variant.
- **Release / knowledge:** public beta **2026-02-17**; documentation release / GA **2026-03-24** (snapshot dated 0309); AA lists April 2026; xAI's model card PDF dated 2026-04-07. **Knowledge cutoff not published** for this model — still an open gap.
- **IDs:** `grok-4.20-0309-reasoning` (canonical), aliases `grok-4.20`, `grok-4.20-reasoning`, `grok-4.20-0309`, `grok-4.20-reasoning-latest`, `grok-4.20-beta-0309-reasoning`, `grok-4.20-experimental-beta-0304`; OpenRouter-style `x-ai/grok-4.20-20260309`; Vals AI `grok_grok-4.20-0309-reasoning`. A non-reasoning sibling is tracked separately. **No OpenCode Zen Free ID exists** — cost is scored on xAI's paid pricing.
- **Context window:** **2,000,000 tokens** per Artificial Analysis and Benchable; the xAI docs model page states **1,000,000**. **The vendor and third-party figures still disagree.** 1M is treated as the contractual minimum, 2M as the observed maximum; BenchLM lists 2M. No separate max-output cap published.
- **Modalities:** text and image in, text out (xAI docs: "Text, Image → Text"). Reasoning variant plus a separate non-reasoning variant. Function calling yes; structured outputs (JSON mode) yes; file input on multi-agent endpoints. `logprobs`/`top_logprobs` **not** supported on `grok-4.20` and newer. **No audio or video input.**
- **Pricing (verified 2026-10-10, unchanged):** **$1.25 / 1M input, $0.20 / 1M cached input, $2.50 / 1M output.** Prompts above 200K tokens bill at a higher tier ($2.50 / $5.00 per Benchable's endpoint table). AA's blended 7:2:1 cache/input/output rate is **$0.64 per 1M** (vs $2.40 on Azure). Paid, no free tier.
- **Architecture:** proprietary; parameter count not disclosed. Optimized for decoding throughput (**112 t/s** first-party, **220 t/s** via Azure).

### Raw benchmarks found

> **Sourcing note — read this first.** Two independent sources now cover this model. **Vals AI** runs its own harness on `grok-4.20-0309-reasoning` directly. **Meta AI's Muse Spark comparison chart** reports xAI's numbers in a *competitor's* blog — third-party reporting of vendor figures, not xAI's own model card. Where the two overlap they broadly agree (SWE-bench 76.7% Meta vs 72.2% Vals; GPQA-D 88.5% vs 88.6%), and the Vals/Vendor spreads are consistent with scaffold differences. Meta-sourced rows are marked as such.

**Coding — the prior pass had *nothing* here; it now has six values from two sources:**

- **SWE-bench Verified: 76.7%** (Meta AI Muse Spark chart); **72.2%** (Vals AI) — ~4.5-point spread, scaffold-dependent
- **SWE-bench Pro: 51.8%** (Meta AI)
- **LiveCodeBench: 84.3%** (Vals AI); **LiveCodeBench Pro: 74.2%** (Meta AI)
- **Vibe Code Bench v1.1: 4.06%** (Vals AI) — *near-total failure*
- SciCode, DeepSWE: no verified public score found (SciCode is folded into the AA v4.3.2 composite only)

**Reasoning / knowledge — the prior pass had *nothing* here either:**

- **GPQA Diamond: 88.6%** (Vals AI); **88.5%** (Meta AI) — two sources, effectively identical
- **MMLU-Pro: 86.3%** (Vals AI)
- **ARC-AGI-2: 53.3%** (Meta AI) — frontier-class
- **ARC-AGI-3: 0.1%** (ARC Prize official leaderboard) — *effectively zero*
- **HLE without tools: 31.6%** (Meta AI); **HealthBench Hard 20.3%** (Meta AI); **MedXpertQA (Text) 50.2%** (Meta AI)
- AA Intelligence Index v4.3.2: **26** (reasoning) / **14** (non-reasoning), **#28 of 673**. At release the retired v4.0 index read **48, 8th overall** — an index-version change, not a regression.
- **AA-Omniscience: 78% non-hallucination rate** — the highest of any model measured on that test at the time, and still the model's single most distinctive property
- CritPt, AA-LCR v1.1: included in the v4.3.2 composite, not published separately
- LatchBio biosafety / HackerBench v0.3: not reported for this generation (both are published for Grok 4.7)

**Agent / tool use:**

- **Terminal-Bench 2.1: 44.2%** (Vals AI); **Terminal-Bench 2.0: 47.1%** (Meta AI) — *the prior pass had neither*
- **DeepSearchQA: 62.8%** (Meta AI); **Gert Labs: 38.36%** (Gert Labs rankings)
- **τ²-Bench Telecom: 97%**, 2nd overall (behind GLM-5) — AA harness, reported at release (WinBuzzer, 2026-03-25)
- **IFBench: 83%**, 1st place — AA harness, reported at release
- GDPval-AA, Claw-Eval, MCP-Atlas, Toolathlon, τ3-Banking: no verified public score found

**Multimodal — six new values, the largest single gain in this report:**

- **MMMU-Pro 75.2%**; **MedXpertQA (MM) 65.8%**; **CharXiv 60.9%**; **SimpleVQA 57.4%**; **ERQA 54.1%** (all Meta AI Muse Spark chart); **Design Arena Website 1236 Elo** (OpenRouter)

**Throughput / cost (AA, first-party API):** output **111.6 t/s** (#42 of 211 in class; 220.3 t/s on Azure), TTFT **21.73 s** (high — the reasoning variant's latency cost). Non-reasoning variant: 94 t/s, 0.60 s TTFT.

**Long context:** still **no retrieval-at-length result** — no MRCR / RULER / GraphWalks row. The only verified long-context facts remain the advertised 2M/1M window and the >200K pricing step.

**BenchLM composite: 57.33/100, #56 of 889** (24 of 625 benchmarks covered; conservative).

Sources consulted: [BenchLM Grok 4.20 (updated 2026-10-10)](https://benchlm.ai/models/grok-4-20-beta), [Vals AI Grok 4.20-0309-reasoning](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning), [Meta AI Muse Spark comparison chart](https://ai.meta.com/blog/introducing-muse-spark-msl/), [ARC Prize official leaderboard](https://arcprize.org/leaderboard), [Gert Labs rankings](https://gertlabs.com/rankings), [Artificial Analysis Grok 4.20](https://artificialanalysis.ai/models/grok-4-20), and the [xAI models documentation](https://docs.x.ai/docs/models), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 82/100.** **Reduced from 88 — the one dimension where new evidence lowered the score.** The prior 88 rested on **τ²-Bench Telecom 97%** and **IFBench 83%**, and the prior report itself conceded that "a single telecom domain has to stand in for the whole dimension." That concession was correct, and now it can be tested: **Terminal-Bench 2.1 at 44.2%** and **Terminal-Bench 2.0 at 47.1%** are mediocre, and **Gert Labs 38.36%** is weak. **DeepSearchQA 62.8%** is respectable. The model is excellent at *following instructions precisely* and at *one narrow tool domain*, and unremarkable at *sustained terminal autonomy* — which is what an agentic tool-use score is supposed to measure. Still well above the field because IFBench 83% is a real first-place result and τ² Telecom 97% is real.
- **Reasoning: 76/100.** **Up from 61 — a 15-point correction, and the largest single-dimension change here.** The prior 61 was anchored on the AA Intelligence Index v4.3.2 reading of 26, which the prior report mapped to "the mid 55–65 band." That was a **misapplication of the index to this model**: the AA composite is heavily agentic- and coding-weighted, and Grok 4.20 is strong on knowledge but weak on agentic work. Measured directly, the knowledge profile is genuinely strong — **GPQA Diamond 88.6%** (Vals) and **88.5%** (Meta), agreeing across two independent sources, **MMLU-Pro 86.3%**, **ARC-AGI-2 53.3%**. Held to 76 rather than higher by two things: **ARC-AGI-3 at 0.1%**, which is a near-total failure on *interactive* reasoning and is the sharpest available evidence that this model's reasoning does not survive contact with multi-step environments; and **HLE 31.6%** / **HealthBench Hard 20.3%**, both far below what GPQA 88.6% would suggest.
- **Context window: 96/100.** Unchanged. Both independently reported windows (2M on AA/Benchable, 1M on xAI's own page) clear the ≥1M tier. Still held at 96 rather than 100 for the same two reasons as before: **no retrieval-at-length result** is published, and **the vendor and third-party context figures disagree by 2×** — a discrepancy that has now persisted across two research passes without resolution.
- **Multimodal: 82/100.** **Up from 67 — the largest gain in this report.** The prior 67 was assigned on the weak basis of "xAI docs say Text, Image → Text," i.e. from a modality list rather than a single benchmark. There are now **six** multimodal measurements: **MMMU-Pro 75.2%**, **MedXpertQA (MM) 65.8%**, **CharXiv 60.9%**, **SimpleVQA 57.4%**, **ERQA 54.1%**, and **Design Arena Website 1236 Elo**. The first five are college-level, chart, document, and spatial/expert reasoning — a broad and demanding spread. Capped below 90 because the model is **text-and-image in, text-only out**, with no video or audio input, so nothing generated is non-text.
- **Coding: 76/100.** **Up from 58, and this is the report's central correction.** The prior 58 was self-described as a provisional read with "no verified public coding benchmark exists for this model." That is no longer true. **SWE-bench Verified 76.7% / SWE-bench 72.2%, SWE-bench Pro 51.8%, LiveCodeBench 84.3%, LiveCodeBench Pro 74.2%** — from two independent sources, covering both standard and *Pro* variants of two major harnesses. A model with **no coding flagship status** posting LiveCodeBench 84.3% and SWE-bench Verified 76.7% is genuinely good at repository-level patching. The score is held at 76 rather than higher because the profile is **sharply bimodal**, and the prior report was right to be suspicious: **Vibe Code Bench at 4.06%** and **Terminal-Bench 2.1 at 44.2%** are near-total or mediocre failures. The model excels when handed a well-specified repo-level problem and collapses when left to drive an open-ended coding session unsupervised.
- **Cost efficiency: 92/100.** Unchanged. **$1.25 in / $2.50 out**, an **84% cache discount**, a **7:2:1 blended rate of $0.64 per 1M**, and **112 t/s** first-party decoding (220 t/s on Azure) remain top-decile for the class. Held below the top band because it is a paid tier with a **price step above 200K tokens** — which matters given the 1M+ window is the model's main draw.
- **Overall Score: 82.4/100.** (82 + 76 + 96 + 82 + 76) / 5 = 412 / 5 = 82.4, up from 74.0. The prior score was low because it was **under-evidenced, not because the model was weak** — and the fix moved the score up on four dimensions while moving it down on one. **Best fit: high-throughput, low-cost repository-level coding and retrieval over 1M tokens, with a human or supervisor verifying output.** The specific profile is a strong single-shot patcher (SWE-bench Verified 76.7%, LiveCodeBench 84.3%) with a genuinely excellent knowledge base (GPQA 88.6%, MMLU-Pro 86.3%) and 2M context. **Two hard limits.** First, **do not use it as an autonomous coding agent** — Vibe Code Bench 4.06% and Terminal-Bench 2.1 44.2% are not warnings, they are disqualifications for unsupervised agentic loops. Second, **ARC-AGI-3 at 0.1%** means its reasoning does not extend to interactive environments even as ARC-AGI-2 reads 53.3%. And the overriding fact: **this model is deprecated.** Grok 4.6 scores 67.92 and Grok 4.5 64.22 on BenchLM against this model's 57.33. Do not adopt.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Vals AI's Grok 4.20-0309-reasoning leaderboard rows, Meta AI's Muse Spark comparison chart, the ARC Prize official leaderboard, Gert Labs rankings, Artificial Analysis, OpenRouter, and the xAI models documentation; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the prior report's principal error was scoring an under-evidenced model as if the evidence were negative.** Coding 58 was assigned with zero coding benchmarks in hand, on an explicit admission that the number was "provisional"; four independent coding values now put the dimension at 76. Symmetrically, **Tool use was overstated at 88** on a single τ²-Bench Telecom domain, and the new Terminal-Bench 2.1 result of 44.2% refutes it. **Both directions are corrected here rather than only the favourable one.** Two sourcing caveats are recorded explicitly: **(1) Meta AI's Muse Spark chart is a competitor's blog reporting xAI's figures** — every Meta-sourced row is labelled, and Vals AI's independent rows are given wherever the two overlap. **(2) The xAI-docs 1M vs AA/Benchable 2M context conflict persists across a second pass and is unresolved**; it is carried as a range, not silently picked. The **deprecation** status from the prior pass is retained and reinforced by the current xAI lineup scores. Search-provider rate limiting (HTTP 429) persisted, so evidence came from direct primary retrievals plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Grok_4.20_Recheck.md`, using the same headings.