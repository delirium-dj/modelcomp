# Qwen3.8-Flash-Next — findings by MiniMax M3.1 Flash

- Source: Alibaba (`Qwen/Qwen3.8-Flash-Next` — open-weights checkpoint behind the hosted `qwen3.8-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** The **open-weights checkpoint** of Alibaba's Qwen3.8 Flash family — a 125B-parameter main model with a 51B n-gram embedding module and only **6B parameters active per token**, on the Gated DeltaNet + Qwen Sparse Attention stack with Gated Residual, n-gram embeddings and a Muon-trained recipe. It is "an early preview of the architecture used in **Qwen4**". The **hosted production build** of the same weights (`qwen3.8-flash`) is tracked separately in `model/qwen-3.8-flash/` — the difference is serving configuration, not capability.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-Flash-Next`; ModelScope; GitHub `QwenLM/Qwen3.8-Flash-Next` (repo created 2026-08-24); hosted on Qwen Cloud as `qwen3.8-flash` and on OpenRouter as `qwen/qwen3.8-flash` (canonical `qwen3.8-flash-20260826`, `hugging_face_id: Qwen/Qwen3.8-Flash-Next`).
- **Release / knowledge:** released **2026-08-26** (AA "Qwen3.8-Flash-Next was released on August 26, 2026"). Knowledge cutoff: **not published**.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (HF), `qwen3.8-flash` (Qwen Cloud), `qwen/qwen3.8-flash` (OpenRouter). AA slug `qwen3-8-flash-next`; BenchLM slug `qwen3-8-flash-next`.
- **Context window:** **262,144 natively, extensible to 1,000,000** via static YaRN (factor 4.0) — the open checkpoint. The hosted build serves **1M by default** (max input 991K, max output 131K, max reasoning 262K, TPM 2M, RPM 15K).
- **Modalities:** text + image + video in, text out.
- **Reasoning controls:** thinking on by default; `enable_thinking`, `preserve_thinking` (default on) and `reasoning_effort` **xhigh (default) / medium / low**. The open checkpoint ships **no built-in tools** (only a tool-call parser); the hosted build adds web_search, code_interpreter, web_extractor, i2i/t2i search, pdf_parsing and web_fetch.
- **Pricing (as of 2026-10-19, per 1M tokens):** the weights themselves are free to self-host; the hosted build is **$0.15 in / $0.47 out**, implicit cache read $0.016, explicit cache write $0.20 (OpenCode Zen lists the same).
- **Architecture:** Gated DeltaNet + Qwen Sparse Attention; Gated Residual (4 branches, bottleneck rank 320); n-gram embedding; Muon + AdamW; **125B parameters with 6B activated, plus 51B n-gram embedding and 4B MTP**; 48 layers, hidden 2560, **512 experts (10 routed + 1 shared)**, vocab 248,320, 1-layer MTP. AA lists "180 billion parameters (6 billion active)".
- **Licence:** **Qwen Community License 1.0** — commercial use with restrictions (name-display obligations above 100M MAU or US$20M monthly revenue; MaaS above US$50M per 12 months requires a separate licence).

### Raw benchmarks found

> The HF card's table is marked "vendor" (Claude Code harness, temp 1.0, top_p 0.95, 256K context) and belongs to the **open checkpoint**; Artificial Analysis, the BenchLM ledger and (partially) Vals AI are independent. There is **no AA page for the hosted build** and **no Vals page for either slug**.

Coding:

- DeepSWE v1.1 **58.7%** (vendor) — no independent reproduction
- SWE-bench Pro **62.5%** (vendor) / SWE-bench Multilingual **81.0%** (vendor); SWE-bench Verified: **no verified public score found**
- LiveCodeBench v6 **91.9%** (vendor); NL2Repo-Bench **48.1%** (vendor)
- Terminal-Bench 2.1: **86.14%** (AA) / 82.02% (the hosted-build reading) / 86.6% (which belongs to Qwen3.8 **Max**); Terminal-Bench 4.0 **25.25%** (AA)
- SciCode **50.58%** (AA); FrontierCode: not published; FrontierSWE v2: not published for this model; CursorBench: not published

Agent / tool use:

- Toolathlon-Verified **73.5%** (vendor); Agents' Last Exam pass@1 **24.3%** / score 51.2% (vendor); CoWorkBench **73.9%**; JobBench **55.7%**; Mcp Atlas: not published for this model; τ³-Banking **45.36%** (AA); AutomationBench **55.91%** (AA); GDPval-AA **1627.86** (AA, 56.4% normalized); IFBench **81.3%** (vendor)
- ClawEval-MM 64.4 / 60.4 (vendor); RecreationBench 49.9; Vision2Web 64.0; ERQA 72.3; LVBench 76.6; RealWorldQA 88.5; AndroidWorld 84.5; OSWorld 2.0 19.4 / 52.3 (vendor)

Reasoning / knowledge:

- GPQA Diamond **92.32%** (AA) / 91.7% (vendor); HLE **38.04%** (AA) / 35.9% (vendor); LCR **79.67%** (AA); CritPt **11.14%** (AA); MLCR-AA: not published
- Artificial Analysis Intelligence Index: **40** (raw 39.8) — **#9 of 121 open-weight models**; Coding Index 73.0; 55.2 t/s (#55/78), TTFT 2.09s, **$0.37/task** (#25/43), **240M output tokens (#45/47 — the most verbose in the class)**, 12 providers
- FrontierMath: **no verified public score found** for this model; ARC-AGI: no independent row; Omniscience index **-9.72** (accuracy **24.5%**, hallucination 45.32%)
- MathVision 90.6 / 95.7 (CI, vendor); CharXiv 84.6 / 90.6 (CI, vendor); MMMU-Pro 79.77% (AA)

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published.** 262,144 native (1M via static YaRN on the open weights; 1M by default on the hosted build).

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). **Scoring basis note:** this folder tracks the **open checkpoint**; the capability numbers are the ones Artificial Analysis and the vendor measured on these weights, and the two route-level differences from the hosted build (native 262,144 vs 1M-by-default context, and no built-in tools) are applied to the Context and Tool-use lines.

- **Tool use: 79/100.** Terminal-Bench 2.1 **86.14%** (near the rubric's ~88% anchor), Toolathlon-Verified 73.5%, CoWorkBench 73.9%, JobBench 55.7%, IFBench 81.3%, τ³-Banking 45.36%, AutomationBench 55.91%, GDPval-AA 1627.86, ClawEval-MM 64.4. Capped by τ³-Banking 45.36% (under the ~50% anchor) and GDPval 1627.86 (under the ~1750 anchor), by Terminal-Bench 4.0 at 25.25%, by Agents' Last Exam at 24.3% pass@1, and by the fact that **the open checkpoint ships no built-in tools** (the hosted build's web_search / code_interpreter / pdf_parsing are not part of the weights).
- **Reasoning: 78/100.** GPQA Diamond 92.32%, MathVision 90.6–95.7%, CharXiv 84.6–90.6%, and an AA Intelligence Index of **40 (#9 of 121 open-weight models)** with a Coding Index of 73.0. Capped by HLE 35.9–38.04%, CritPt 11.14%, the **negative Omniscience index (-9.72 with 24.5% accuracy)**, and the absence of any FrontierMath or ARC-AGI measurement for this model.
- **Context window: 90/100.** **262,144 natively** on the open checkpoint, extensible to 1,000,000 via **static YaRN (factor 4.0)** — so the honest reading is the 200K–500K band (65–84) with a documented extension path, not a native 1M. The hosted build serves 1M by default (scored in `model/qwen-3.8-flash/` at 93). 90 reflects the extension capability plus the absence of any long-context retrieval measurement.
- **Multimodal: 90/100.** Text, image and video in with text out — the rubric's "+video/PDF = 75–90" band, lifted by measured numbers: MMMU-Pro 79.77%, RealWorldQA 88.5%, MathVision 90.6–95.7%, CharXiv 84.6–90.6%, LVBench 76.6%, Vision2Web 64.0%, AndroidWorld 84.5%, ClawEval-MM 64.4, ERQA 72.3%. Held at 90 because there is no audio support and the vision evidence is largely vendor-published with no independent vision harness.
- **Coding: 80/100.** Terminal-Bench 2.1 86.14% (above the 85% anchor), LiveCodeBench v6 91.9% (vendor), SWE-bench Multilingual 81.0% / Pro 62.5%, DeepSWE 58.7%, SciCode 50.58%, NL2Repo 48.1%. Capped by DeepSWE 58.7% (under the 74% anchor), Terminal-Bench 4.0 at 25.25%, SciCode 50.58% (under 55%), the absence of any SWE-bench Verified, FrontierCode, FrontierSWE or CursorBench row, and the 240M-token verbosity that makes agentic coding expensive in practice.
- **Cost efficiency: 90/100.** The evaluated route — the hosted build of these weights on OpenCode Zen at **$0.15 in / $0.47 out** per 1M with a $0.016 implicit cache read, plus **free self-hosting** of the Apache-style Community-Licence weights — is one of the cheapest capable models in the dataset, comfortably inside the rubric's "~$0.60/$2.20 ≈ 92" band and far below the $1.25/$4.25 tier. The deductions are the 240M output tokens on the index (the most verbose tier, #45/47) and the 54.5 t/s throughput, which make the per-task cost less exceptional than the sticker price.
- **Overall Score: 83.4/100.** (79 + 78 + 90 + 90 + 80) / 5 = 83.4 — best-fit: **the best-value open-weight multimodal model available** — 6B active per token, text+image+video, 262K native (1M hosted), $0.15/$0.47, AA index 40 (#9 open-weight) — with the honest caveats of a 25% Terminal-Bench 4.0, a 58.7% DeepSWE, a 24.5% knowledge accuracy and heavy verbosity; the hosted build of the same weights (scored separately at 84.0) is the better entry for 1M-context and built-in-tool work.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Same weights, two folders.** The open checkpoint and the hosted `qwen3.8-flash` share an AA payload (Terminal-Bench 2.1 86.14%, TB 4.0 25.25%, GDPval 1627.86, AutomationBench 55.91%, Omniscience -9.72). The distinction is serving configuration — native 262K vs 1M-by-default, built-in tools, $0.15/$0.47 vs free self-host — and the scores reflect that.
2. **Terminal-Bench 2.1 — 86.14% (AA) vs 82.02% (the hosted-build reading) vs 86.6% (which is Qwen3.8 Max, not this model).** The Max figure is explicitly excluded.
3. **Context — 262,144 native (HF, OpenRouter provider, AA 256k) vs 1M (hosted) vs 1,010,000 via static YaRN.** The open checkpoint's native figure governs here.
4. **Parameter counting — 125B main + 51B n-gram + 4B MTP (card) vs "180 billion parameters (6 billion active)" (AA).** Same model, different accounting; both are recorded.
5. **AA index — 40 (site) vs 39.8 (BenchLM).** Rounding.
6. **AA speed — 55.2 t/s (BenchLM's AA mirror) vs 54.5 t/s (the AA page reading)**; TTFT 2.09s; $0.37/task.
7. **No Vals AI page exists for either slug**, and **no AA page exists for the hosted build** — so the independent coverage of this family is thinner than for most models here, and no independent vision or long-context harness has run it.
8. **DeepSWE 58.7% is vendor-only** — no leaderboard row for this model, and the sibling 27B's DeepSWE claim is likewise unverified.
9. **Verbosity as a hidden cost:** 240M output tokens on the index (#45/47) — the most verbose in the open-weight class, which is why the index is 40 while the per-task cost is still $0.37.

### Notes on identity

- `qwen-3.8-flash-next` (this folder) is the **open-weights checkpoint**; `qwen-3.8-flash` (scored separately) is the **hosted production build of the same weights** — "Qwen3.8-Flash is the official version based on Qwen3.8-Flash-Next with more production features, e.g., 1M context length by default, official built-in tools." Two entries, one model, different serving defaults.
- It is a **different artifact** from `qwen3.8-2.4t-a95b` (the 2.4T/95B flagship, scored at 70.2) and from `qwen3.8-27b` (the dense 27B, scored at 80.8), despite sharing the GDN + gated-attention family design.
- GitHub positions it as "an early preview of the architecture used in **Qwen4**" and claims it "substantially reduces both training and inference cost — training takes only about 1/9 as much" versus Qwen3.7-Plus.
- The licence (Qwen Community License 1.0) is *not* Apache 2.0 — unlike the 27B and Thinking Machines' Inkling pair — so "open weights" is accurate but "open source" is not.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — the `Qwen/Qwen3.8-Flash-Next` Hugging Face model card (architecture, licence, context, the full vendor benchmark table), the `QwenLM/Qwen3.8-Flash-Next` GitHub repo, QwenCloud and Model Studio model pages (hosted ids, limits, built-in tools, pricing), Artificial Analysis (the `qwen3-8-flash-next` page and per-evaluation payload, plus the absence of a hosted-build page), the BenchLM evidence ledger, OpenRouter's API and model page, and OpenCode Zen's catalog, with negative verification at Vals AI, swebench.com, ARC Prize, Epoch AI, LMArena and the official LiveCodeBench board. Vendor-vs-independent conflicts — the parameter accounting, the Terminal-Bench attribution trap and the two context figures — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Flash_Next.md`, using the same headings.
