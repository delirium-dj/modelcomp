# Qwen3.8 Flash — findings by MiniMax M3.1 Flash

- Source: Alibaba (`qwen3.8-flash` — hosted build of `Qwen/Qwen3.8-Flash-Next`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash
- **Short description:** Alibaba's August-2026 Flash member of the Qwen3.8 family — a **125B-parameter main model plus a 51B N-gram embedding module, with only 6B parameters activated per token**, and a genuinely novel architecture (GDN + QSA hybrid attention, Gated Residual, N-gram Embedding, Muon optimizer). The hosted `qwen3.8-flash` is the *production* build of the open-weights `Qwen/Qwen3.8-Flash-Next` checkpoint: "Qwen3.8-Flash is the official version based on Qwen3.8-Flash-Next with more production features, e.g., 1M context length by default, official built-in tools." It is a **different artifact from the 2.4T-A95B flagship** scored in `model/qwen-3.8/`.
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio `qwen3.8-flash`; OpenRouter `qwen/qwen3.8-flash` (canonical `qwen3.8-flash-20260826`, `hugging_face_id: Qwen/Qwen3.8-Flash-Next`); open weights `Qwen/Qwen3.8-Flash-Next` on Hugging Face and ModelScope; OpenCode Zen `opencode/qwen3.8-flash` (`https://opencode.ai/inference/anthropic/v1/messages`).
- **Release / knowledge:** weights published **2026-08-26** (AA: "Qwen3.8-Flash-Next was released on August 26, 2026"; Alibaba Cloud blog 2026-08-27). Knowledge cutoff: **no verified public value found**.
- **IDs:** `qwen3.8-flash` (QwenCloud/Model Studio), `qwen/qwen3.8-flash` (OpenRouter), `Qwen/Qwen3.8-Flash-Next` (HF), `opencode/qwen3.8-flash` (Zen). The AA slug is **`qwen3-8-flash-next`** (`qwen3-8-flash` 404s), and BenchLM's canonical slug is `qwen3-8-flash-next`.
- **Context window:** **262,144 natively** (open weights), **1,048,576 when hosted** — "1M context length by default" for the hosted build; max output 131K, max reasoning 262K, max input 991K, TPM 2M.
- **Modalities:** input text, image and video; output text. **No audio** in or out. Reasoning: `enable_thinking` (on by default), `preserve_thinking`, `reasoning_effort` xhigh / medium / low, plus built-in tools (code_interpreter, web_search, pdf_parsing and others).
- **Architecture:** MoE with GDN (Gated DeltaNet) + QSA (gated sliding-window attention) hybrid, Gated Residual, N-gram Embedding, Muon optimizer, 48 layers, hidden 2560, **512 experts (10 routed + 1 shared)**, 1-layer MTP, vision encoder. Vendor sizing: "a 125B-parameter main model, supplemented by an additional 51B N-gram embeddings, with 6B parameters activated per token"; AA lists "180 billion parameters (6 billion active)".
- **Pricing (as of 2026-10-19, per 1M tokens):** **$0.15 in / $0.47 out**, cache read $0.016, cache write $0.20 — the vendor words it as "1 RMB (0.16 USD) for input and 3 RMB (0.47 USD) for output". OpenCode Zen lists $0.15 / $0.47 / $0.016 / $0.20.
- **Licence:** Qwen Community License 1.0 (`qwen-community-1.0`) — open weights with commercial-use conditions.

### Raw benchmarks found

> The vendor's benchmark table is published for the **Flash-Next weights**; Artificial Analysis, Vals AI and the BenchLM ledger are independent. There is no separately published hosted-version table.

Agent / tool use:

- Terminal-Bench 2.1: **86.14%** (AA, on the Next weights) / 82.02% (the hosted-build figure) — the vendor table lists 86.6 for Qwen3.8 **Max**, not for Flash
- Terminal-Bench 4.0: **25.25%** (AA) — no row on the official board
- Toolathlon-Verified **73.5%** (vendor); Agents' Last Exam **51.2%** (Pass@1 24.3%); JobBench **55.7%**; CoWorkBench **73.9%**; Recreati*onBench 49.9%; ClawEval-MM 64.4/60.4; Vision2Web 64.0%
- GDPval-AA **1627.86** (AA) / 56.4% normalized; τ³-Banking **45.36%** (AA); AutomationBench **55.91%** (AA); APEX-Agents 22.42% (AA); IFBench **81.3%** (vendor)
- No Claw-Eval row, no MCP-Atlas row and no τ²-bench figure for the Flash build (AA's τ² is null)

Reasoning / knowledge:

- GPQA Diamond: **92.32%** (AA) / 91.7% (vendor)
- HLE: **38.04%** (AA) / 35.9% (vendor); LCR **79.67%** (AA); CritPt **11.14%** (AA); MLCR-AA not published
- Artificial Analysis Intelligence Index: **40** (#9 of 121 open-weight models), Coding Index 73.0; AA per-eval Omniscience index **-9.72**, accuracy **24.5%**, hallucination rate 45.32%
- MathVision **90.6% / 95.7%** (with CI), ERQA 72.3%, RealWorldQA 88.5%, CharXiv(RQ) 84.6/90.6%, MMLU-Pro not published
- FrontierMath: **no verified public score found** for the Flash build (the 74.737% figure in the catalog belongs to Qwen3.8 Max)

Coding:

- SWE-bench Pro **62.5%** (vendor) / SWE-bench Multilingual **81.0%** (vendor); DeepSWE v1.1 **58.7%** (vendor)
- LiveCodeBench v6 **91.9%** (vendor); Terminal-Bench 2.1 86.14% (AA); SciCode **50.58%** (AA); FrontierCode: null (AA)
- NL2Repo-Bench **48.1%** (vendor); TB 4.0 25.25% (AA); no Vibe Code Bench, CursorBench, FrontierSWE or ProgramBench row for this build
- Independent trackers: **no Vals AI page exists** for `qwen3.8-flash` or `qwen3.8-flash-next` (both 404); BenchLM `qwen3-8-flash-next` 62.86/100 (#44/956, 37/644 covered); no SWE-bench.com, LiveCodeBench, ARC Prize, Epoch AI or LMArena row retrieved

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published** for this model. 262,144 native / 1M hosted.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 79/100.** Terminal-Bench 2.1 **86.14%** (AA, near the rubric's ~88% anchor), Toolathlon-Verified 73.5%, CoWorkBench 73.9%, IFBench 81.3%, JobBench 55.7%, ClawEval-MM 64.4%, GDPval-AA 1627.86, AutomationBench 55.91%. Capped by τ³-Banking 45.36% (under the ~50% anchor), by Terminal-Bench 4.0 at 25.25%, by APEX-Agents 22.42%, and by the absence of any Claw-Eval, MCP-Atlas or τ² figure for this build.
- **Reasoning: 78/100.** GPQA Diamond 92.32%, MathVision 90.6–95.7%, ERQA 72.3%, RealWorldQA 88.5%, CharXiv 84.6/90.6%, and an AA Intelligence Index of **40 (#9 of 121 open-weight models)** with a Coding Index of 73.0. Capped by HLE 38.04%, CritPt 11.14%, the **negative Omniscience index (-9.72) with only 24.5% accuracy**, and the absence of any FrontierMath or MMLU-Pro figure for this build.
- **Context window: 93/100.** 262,144 tokens natively, extensible to 1,048,576 in hosted serving, with a 131K max output (262K reasoning) — the hosted configuration sits in the rubric's top tier (≥1M = 95–100) and the open weights in the 200K–500K band (65–84). **No long-context retrieval measurement exists** for this model, and AA measures it at 256k. 93 reflects a capable 1M window with the native/hosted split and the measurement gap stated.
- **Multimodal: 90/100.** Text, image and video in with text out — the rubric's "+video/PDF = 75–90" band, lifted by strong measured vision: MMMU-Pro **79.77%** (AA), MathVision 90.6/95.7%, CharXiv 84.6/90.6%, RealWorldQA 88.5%, ERQA 72.3%, plus AndroidWorld 84.5%. Held at 90 because there is no audio support and the vision evidence is largely vendor-published (no independent vision harness has run it).
- **Coding: 80/100.** SWE-bench Pro 62.5% / Multilingual 81.0%, LiveCodeBench v6 91.9%, Terminal-Bench 2.1 86.14%, DeepSWE 58.7%, NL2Repo 48.1%, SciCode 50.58%. Capped by DeepSWE 58.7% (under the 74% anchor), SciCode 50.58% (under 55%), Terminal-Bench 4.0 25.25%, and the absence of FrontierCode, Vibe Code Bench, CursorBench and FrontierSWE rows.
- **Cost efficiency: 90/100.** The evaluated route — OpenCode Zen `opencode/qwen3.8-flash` — is billed at **$0.15 in / $0.47 out** per 1M with a $0.016 cached read and $0.20 cache write: below the rubric's "~$0.60/$2.20 ≈ 92" anchor and among the cheapest capable models in the dataset, with AA measuring $0.37 per Index task (#25 of 43 open-weight models). The deductions are the 240M output tokens on the index (the most verbose tier) and the 54.5 t/s throughput, which make the per-task cost less exceptional than the sticker price suggests.
- **Overall Score: 84.0/100.** (79 + 78 + 93 + 90 + 80) / 5 = 84.0 — best-fit: a **very cheap, very light, genuinely multimodal** open-weight model (6B active parameters, 125B + 51B n-gram, 1M hosted context, video in, $0.15/$0.47) with the #9 open-weight intelligence index and strong vision — a strong default for high-volume multimodal work and edge deployment, with the caveats of Terminal-Bench 4.0 at 25%, DeepSWE at 58.7% and a 24.5% knowledge-accuracy profile.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Parameter count — 125B main + 51B n-gram (vendor card) vs "180 billion parameters (6 billion active)" (AA / HF model size).** The same model counted differently; the vendor breakdown is used and both totals are recorded.
2. **Input price — $0.16 (1 RMB, vendor) vs $0.15 (QwenCloud, AA, OpenRouter, Zen).** The $0.15 list price is used.
3. **Context — 256K/262K (open weights, AA, BenchLM) vs 1M (hosted).** The native figure governs; the hosted extension is a serving capability. This is the same distinction that separates `model/qwen-3.8/` (the 2.4T flagship) from this folder.
4. **Terminal-Bench 2.1 — 86.14% (AA, Next weights) vs 82.02% (hosted-build reading) vs 86.6% (which belongs to Qwen3.8 Max).** The Max figure is not this model; the AA figure is used with the confusion flagged.
5. **No independent tracker has run this model.** Vals AI has no page for either slug, swebench.com and livecodebench.github.io have no retrievable rows, and the AA per-eval values exist only for the ten index evaluations. The evidence base is therefore vendor + AA, and the report says so.
6. **BenchLM slugs differ from the folder** (`qwen3-8-flash-next` versus `qwen-3.8-flash`), and its overall 62.86/100 is a different scale from AA's index 40 — not directly comparable, so only AA's number is used in the rubric.
7. **No knowledge cutoff is published** by Alibaba for this build, and the Qwen3.8-Flash-Next HF card is the only primary document for the hosted build's extra features.

### Notes on identity

- `qwen3.8-flash` is a **distinct artifact** from the Qwen3.8 flagship family scored in `model/qwen-3.8/`: different weights (Flash-Next, 125B + 51B n-gram, 6B active, versus the 2.4T/95B-A95B base), different price ($0.15/$0.47 versus $2/$6), different context (262K native versus 262K native for the base too, but 1M hosted) and different scores.
- Siblings in the same family, all distinct: `qwen3.8-max` / `qwen3.8-max-0902` / `qwen3.8-max-prime` (hosted, proprietary), `qwen3.8-omni-flash` (2026-09-21, $0.15/$0.47), `qwen3.8-27b` (dense 28B, $0.24/$2.20), `qwen3.8-2.4t-a95b` (the open base).
- The hosted build adds "1M context length by default, official built-in tools" on top of the open checkpoint — so the hosted id and the HF repo are the same model family with different serving defaults, and the AA/BenchLM numbers are measured on the open weights.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Alibaba Cloud's Qwen3.8-Flash launch blog, the QwenCloud and Model Studio model pages, the `Qwen/Qwen3.8-Flash-Next` Hugging Face model card (architecture, parameters, licence, context), ModelScope, Artificial Analysis (the `qwen3-8-flash-next` page with its per-evaluation payload), the BenchLM evidence ledger, OpenRouter's API, and OpenCode Zen's catalog, with negative verification at Vals AI, swebench.com, LiveCodeBench, ARC Prize, Epoch AI and LMArena. Vendor-vs-independent conflicts — including the parameter-count and price discrepancies and the Max/Flash row confusion — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Flash.md`, using the same headings.
