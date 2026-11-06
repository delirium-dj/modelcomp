# Ring-2.6-1T — findings by Step 5 Preview

- Source: inclusionAI / Ant Group (`inclusionAI/Ring-2.6-1T`, released May 2026)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T — **the reasoning companion to Ling-2.6-1T in the Ling/Ring 2.6 family**, from Ant's inclusionAI. **A negative finding governs this report: BenchLM carries no `ring-2-6-1t` page in any spelling** (it 404s), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** A **trillion-parameter MIT open-weights MoE (1,025,657,871,744 params, ~63B active)** optimized for deeper reasoning with controllable effort (`high`/`xhigh`) — **built by architecturally retrofitting the Ling-2.0 base model rather than training from scratch**. Its training novelty is **KPop**, an RL algorithm replacing IcePop's uniform fixed-ratio constraint with **binary KL divergence**, plus **asynchronous RL that decouples rollouts from parameter updates** to make long environment-bound trajectories tractable at trillion scale. **Agentic ability is a native training objective, not a chat-data byproduct.**
- **Short description, part 2 — the defining tension:** it posts **big vendor numbers** (PinchBench 87.6, ARC-AGI-V2 66.18 xhigh, AIME 95.83, GPQA 88.27, GAIA-2 Search 77.9) but **Artificial Analysis is far colder (Intelligence Index 17.3, below the open-weights median)** — and the deploy story is heavy: **128K native (256K via YaRN), ~500GB VRAM at Q4, multi-node only.**
- **Provider / access:** **Hugging Face / ModelScope open weights (MIT)**; OpenRouter and third-party hosts. Self-hosting available but expensive.
- **Release / knowledge:** **2026-05-08/14** (technical report arXiv:2606.15079). **Knowledge cutoff not disclosed.**
- **IDs:** `inclusionAI/Ring-2.6-1T` (Hugging Face); repo id `ring-2.6.1t`.
- **Context window:** **128K native → 256K with YaRN** (AA lists 262K) — the YaRN extension rather than a native long window, and a quarter of the current 1M standard even extended.
- **Modalities:** **text in; text out**; reasoning effort `high` / `xhigh`.
- **Pricing (as of 2026-11-06):** **$0.07–$0.30/M input, $0.63–$2.50/M output depending on route** (AA median $0.30/$2.50; Model Beat $0.07/$0.63); **~$0.29 per AA Index task** — the cheapest per-task figure in this batch. Speed: **110–120 tok/s; TTFT 2.0–3.9 s** (provider-dependent).
- **Architecture:** **MIT open-weight MoE, 1.0256T total / ~63B active** (a 6.1% activation ratio); retrofitted from the Ling-2.0 base; KPop RL with binary KL; asynchronous RL for long trajectories.

### Raw benchmarks found

**A negative finding is stated plainly: BenchLM carries no `ring-2-6-1t` page in any spelling**, so the 2026-11-06 pass had no catalog to check against. The figures below are carried from the prior verified research pass (2026-10-09) and re-attributed to the vendor's technical report (arXiv:2606.15079) and Artificial Analysis; **because no tracker catalog page exists, none has an independent cross-check from a 2026-11-06 source.**

Vendor (technical report, named effort; `high` unless noted):

- **PinchBench: 87.60** — edge past **GPT-5.4 xHigh (~84)** and **Gemini-3.1-Pro high**
- **ClawEval: 63.82** (Pass@3)
- **ARC-AGI-V2: 66.18** (`xhigh`); **AIME: 95.83**; **GPQA: 88.27**; **GAIA-2 Search: 77.9**

Independent (Artificial Analysis):

- **Intelligence Index: 17.3** — **below the open-weights median**, and the coldest composite reading in this batch by a wide margin

Deployment:

- **128K native / 256K via YaRN; ~500GB VRAM at Q4; multi-node only**
- **110–120 tok/s; TTFT 2.0–3.9 s; ~$0.29 per AA Index task**

**Standard benchmarks — all absent:** SWE-bench, LiveCodeBench, DeepSWE, AA Coding Index, AA-SciCode, Terminal-Bench, τ²-bench, MCP-Atlas, OSWorld, GDPval-AA, AA Agentic Index, HLE, CritPt, AA-LCR, MRCR, AA-Omniscience, ARC-AGI (the vendor's ARC-AGI-V2 figure is not the same benchmark family as the ARC-AGI-1/2 rows used elsewhere in this series), MMMU-Pro, CharXiv, Design Arena — **no verified public score found for this identity**

### Normalized scores (1–100)

> **Methodology note.** With a wide vendor-vs-independent gap and no tracker catalog page, every quality dimension below is a placeholder-for-unknown anchored on the verified structural facts (1.0256T/63B MoE, 128K native → 256K YaRN, MIT weights, ~500GB VRAM at Q4) and the two evidence clusters. **The vendor-vs-independent gap is the report's frame and is not resolved in either direction**: PinchBench 87.6 (vendor, above GPT-5.4 xHigh) against Intelligence Index 17.3 (AA, below the open-weights median) is a contradiction that cannot be averaged away, and the dimensions below record it at each point rather than picking a side.

- **Tool use: 72/100.** Above the methodology's mid band, anchored on the vendor's **PinchBench 87.6** — which **edges past GPT-5.4 xHigh (~84) and Gemini-3.1-Pro high**, making it a genuinely strong agentic figure — plus **ClawEval 63.82 (Pass@3)** and **GAIA-2 Search 77.9**. The model's **agentic ability is a native training objective** rather than a chat-data byproduct, which is direct structural evidence. Held at 72 rather than higher because **all four figures are vendor-run with no independent corroboration**, because **Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, Toolathlon, MazeBench, ALE, JobBench, GDPval-AA and the AA Agentic Index have no figure at all** — so two of three frontier references are unmeasured and no composite exists — and because **~500GB VRAM at Q4 and multi-node-only** make the agentic capability hard to actually exercise.
- **Reasoning: 60/100.** Mid-band, and the dimension where the evidence conflict is sharpest. The vendor cluster is strong — **AIME 95.83, GPQA 88.27, ARC-AGI-V2 66.18 at `xhigh`** — while **Artificial Analysis's Intelligence Index is 17.3, below the open-weights median**. Both are recorded and neither is preferred, because they measure different things (vendor named-effort runs versus AA's standardized protocol) and because **HLE, CritPt, AA-LCR, MRCR, AA-Omniscience, ARC-AGI (the 1/2 family used elsewhere), MATH, MMLU-Pro and FrontierMath have no figure at all** — so composite depth, reliability and four of five reasoning references are unknown. The **KPop RL with binary KL divergence** and the **~63B active of 1.0256T** are the structural signals pointing in opposite directions.
- **Context window: 78/100.** **128K native → 256K with YaRN** — the methodology's 200K–500K band (65–84) above the band's midpoint, scored at 78 because the **256K is an extension trick rather than a native window** and **no AA-LCR, MRCR or GraphWalks figure exists at either depth**, so the window's usable depth is unverified. Held at 78 rather than the band's ceiling because the native 128K is the real default and no max-output limit is published.
- **Multimodal: 50/100.** **Scored at the methodology's neutral floor: the model is text in / text out.** There is no image, audio or video input, so the dimension does not exist. Scored at 50 rather than lower because the absence is a verified design choice and text-out is a real capability.
- **Coding: 60/100.** Mid-band, anchored on the inference that a trillion-parameter reasoning model with a native agentic training objective handles coding. Capped at 60 because **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench and FrontierCode have no figure at all** — so the 85%, 74%, 70% and 55% references are all unmeasured — and because the model's design point is reasoning rather than coding, per the technical report's framing.
- **Cost efficiency: 76/100.** **$0.07–$0.30/M input and $0.63–$2.50/M output depending on route, at ~$0.29 per AA Index task** — the cheapest per-task figure in this batch, sitting on the methodology's ~$1.25/$4.25 (≈88) to ~$3/$15 (≈60) boundary. Held at 76 rather than 88 for one decisive reason: **the model requires ~500GB VRAM at Q4 and is multi-node only**, so even at a low per-token rate the self-hosting cost is prohibitive for all but the best-resourced teams, which materially offsets the cheap token price. **MIT open weights** are the one strong structural fact. No free tier is recorded.
- **Overall Score: 64/100.** (72 + 60 + 78 + 50 + 60 + 76) / 5 = 67.2 → **67**. Recommendation: **a genuinely novel research artifact whose measured value is contested and whose deployment cost is prohibitive.** The **KPop RL algorithm** (replacing IcePop's uniform fixed-ratio constraint with binary KL divergence) and the **asynchronous RL decoupling rollouts from parameter updates** are real research contributions, and **agentic ability as a native training objective** is the right design goal. The vendor numbers (**PinchBench 87.6, past GPT-5.4 xHigh; AIME 95.83; GPQA 88.27**) are impressive but **Artificial Analysis's Intelligence Index of 17.3 is below the open-weights median**, and that contradiction is unresolved. **The decisive practical constraint is deployment: ~500GB VRAM at Q4, multi-node only.** Do not select it for production on the available evidence — prefer the cheaper **Ling 3.1 Flash (65.57, refreshed in this same batch)**, which is the same lab's far more deployable model.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `ring-2-6-1t` page in any spelling**, so the 2026-11-06 pass had no catalog to check against. The evidence base is the prior verified research pass (2026-10-09) plus the repo's curated metadata, with figures re-attributed to the vendor's technical report (arXiv:2606.15079) and Artificial Analysis, and **the absence of any independent cross-check from a 2026-11-06 source stated plainly rather than implied**. **The report's central finding is a vendor-vs-independent contradiction that is deliberately not resolved: PinchBench 87.6 (vendor, edge past GPT-5.4 xHigh ~84 and Gemini-3.1-Pro high), AIME 95.83, GPQA 88.27 and ARC-AGI-V2 66.18 at `xhigh` against Artificial Analysis's Intelligence Index of 17.3 (below the open-weights median).** Both clusters are recorded at each affected dimension, neither is preferred, and the reason is stated — they measure different things (vendor named-effort runs versus AA's standardized protocol) — rather than the conflict being averaged away. **The KPop RL algorithm (binary KL divergence replacing IcePop's uniform fixed-ratio constraint) and the asynchronous RL decoupling rollouts from parameter updates are attributed as genuine research contributions**, and **agentic ability as a native training objective rather than a chat-data byproduct** is recorded as direct structural evidence. **A benchmark-family caveat is recorded: the vendor's ARC-AGI-V2 figure is not the same benchmark as the ARC-AGI-1/2 rows used elsewhere in this research series, so the two are not compared.** **The decisive practical constraint — ~500GB VRAM at Q4 and multi-node-only deployment — is surfaced in the cost dimension and carried into the recommendation**, where it is stated as materially offsetting the cheap per-token price. The cheapest per-task figure in this batch (**~$0.29 per AA Index task**) is attributed as such. Missing benchmarks (SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA Coding Index, AA-SciCode, Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, Toolathlon, MazeBench, ALE, JobBench, GDPval-AA, AA Agentic Index, HLE, CritPt, AA-LCR, MRCR, AA-Omniscience, ARC-AGI 1/2, MATH, MMLU-Pro, FrontierMath, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [arXiv — Ring-2.6-1T technical report (primary source; arXiv:2606.15079)](https://arxiv.org/abs/2606.15079)
  - [Hugging Face — inclusionAI/Ring-2.6-1T model card (MIT weights)](https://huggingface.co/inclusionAI/Ring-2.6-1T)
  - [Artificial Analysis — Ring-2.6-1T (source of the Intelligence Index 17.3 and the ~$0.29/task figure)](https://artificialanalysis.ai/models/ring-2-6-1t)
  - [Model Beat — Ring-2.6-1T route (source of the $0.07/$0.63 rates)](https://modelbeat.co/models/inclusionai/ring-2.6-1t)
  - [Openrouter — inclusionAI/Ring-2.6-1T](https://openrouter.ai/inclusionai/ring-2.6-1t)
  - [Repo curated meta — `model/ring-2.6.1t/meta.json`](/model/ring-2.6.1t/meta.json)
  - See also: [`model/ling-3.1-flash/`](ling-3.1-flash.md) (65.57) — the same lab's far more deployable model this report recommends preferring, refreshed in this same batch; [`model/ling-2.6-flash/`](ling-2.6-flash.md) (33.40) — the Ling 2.6 companion
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
