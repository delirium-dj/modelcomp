# Qwen3.7 Plus — findings by MiniMax M3.1 Flash

- Source: Alibaba (`qwen3.7-plus`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Plus
- **Short description:** Alibaba's June-2026 **proprietary** mid-tier Qwen3.7 model — "Qwen 3.7 Plus is a model from Alibaba, released June 1, 2026" — a multimodal, agent-tuned flagship-adjacent SKU at $0.40/$1.60 (or $0.32/$1.28 on promotion) with 1M context and a very wide tool stack (QwenClawBench, QwenWebBench, BFCL v4, MCP Atlas). It sits between `qwen3.7-max` and `qwen3.7-plus`'s cheaper siblings, and it is **not open weights**.
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio `qwen3.7-plus` (snapshot `qwen3.7-plus-2026-05-26` / canonical `qwen3.7-plus-20260602`); OpenRouter `qwen/qwen3.7-plus`; OpenCode Zen `opencode/qwen3.7-plus` (`https://opencode.ai/inference/anthropic/v1/messages`).
- **Release / knowledge:** released **2026-06-01** (AA, Vals AI); Alibaba's blog is dated 2026-06-03, while Model Studio's snapshot name is `2026-05-26` — a three-way date spread. Knowledge cutoff: **not published**.
- **IDs:** `qwen3.7-plus` (QwenCloud/Model Studio), `qwen/qwen3.7-plus` (OpenRouter), `opencode/qwen3.7-plus` (Zen). AA slug `qwen3-7-plus`; BenchLM slug `qwen3-7-plus`.
- **Context window:** **1M** (max input 991K; max input in thinking mode 983K). Max output **131K**, max reasoning 262K (QwenCloud); Vals records "Max Output Tokens 66k" and uses 65,536 — a second, smaller figure.
- **Modalities:** text, image and video in; text out (Artificial Analysis, QwenCloud, Vals all list video input; OpenRouter's architecture string lists only `text+image`).
- **Reasoning controls:** `enable_thinking` (on by default), `preserve_thinking` — "preserving thinking content from all preceding turns… recommended for agentic tasks" — plus built-in tools (code_interpreter, web_search, pdf_parsing and others).
- **Pricing (as of 2026-10-19, per 1M tokens):** list **$0.40 in / $1.60 out**, cache read $0.04, cache write $0.50, batch $0.20/$0.80; a **20%-off promotion** takes it to $0.32/$1.28 (OpenRouter and the QwenCloud promo both show the discounted rate), with a >256K override at $0.96/$3.84. OpenCode Zen lists $0.40 / $1.60 / $0.04 / $0.50.
- **Architecture:** proprietary — "Qwen3.7 Plus is proprietary. The model weights are not publicly available." (AA; Vals: "Weights Private"). A Qwen-vendor comparison table lists **397B total / 17B activated**, while AA states the size is not disclosed.

### Raw benchmarks found

> Alibaba's launch-blog numbers are marked "vendor"; Artificial Analysis, Vals AI and the BenchLM ledger are independent. AA's index for this model is 25 (#34 of 173) — one of the lowest in this batch.

Agent / tool use:

- Terminal-Bench 2.0 **70.3%** (vendor) / **61.05%** (AA) / **52.81%** (Vals AI)
- Terminal-Bench 4.0: **1.01%** (AA) — essentially zero on the current agentic-terminal benchmark
- Claw-Eval **62.7%** (vendor); BFCL v4 **72.9%** (vendor); MCP Atlas **73.2%** (vendor); QwenClawBench 61.8%; QwenWebBench 1536; Toolathlon: not published; τ²-bench **92.98%** (AA) / τ³-Banking **17.53%** (AA); APEX-Agents-AA **22.42%** (AA); AutomationBench **17.39%** (AA)
- OSWorld-Verified **73.3%** (vendor) / OSWorld 2.0 **2.8%** (vendor paper); AndroidWorld **81.0%** (vendor); Finance Agent v2 41.25% (Vals); SkillsBench 54.30% (#14/35, Vals); Vibe Code Bench 46.39% (Vals); IFBench **78.0%** (AA)
- EnterpriseOps-Gym-AA 40.56% (AA); no IPI, no ExploitBench/ExploitGym/SEC-Bench Pro, no CyberGym row for Qwen3.7 Plus

Reasoning / knowledge:

- GPQA Diamond: **90.0%** (AA) / 90.3% (vendor)
- HLE: **35.63%** (AA) / 34.7% (vendor); LCR 73.0% (AA); MLCR-AA 9.44% (AA); CritPt **9.14%** (AA); IFEval **94.6%** (AA)
- Artificial Analysis Intelligence Index: **25** (#34/173); Coding Index 55.9; Agentic Index 17.5; GDPval-AA **767.63** (normalized 13.4%) — the lowest GDPval reading among the Qwen models here
- Omniscience index 1.08, accuracy **22.52%**, hallucination rate 27.66% (AA)
- MathVision 90.3%, MMLU-Pro 88.5%, MMLU-Redux 94.5%, SuperGPQA 71.4%, MMMLU 89.0%, HMMT Feb26 92.9%, IMOAnswerBench 86.0%, PolyMath 84.0%, FrontierMath v2 T1–3 **34.386%** (Epoch AI, via BenchLM)

Coding:

- SWE-bench Verified **77.7%** (vendor) / **66.67%** (Vals AI, Index subset) / 77.7% (via BenchLM); SWE-bench Pro **57.6%**; SWE-bench Multilingual **75.8%**
- NL2Repo **41.1%**; SciCode **46.06%** (AA) / 51.3% (vendor); Terminal-Bench 2.0 70.3%; no DeepSWE, FrontierSWE, LiveCodeBench, CursorBench or Vibe Code Bench figure for the model
- Vibe Code Bench 46.39% (Vals)

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published** for Qwen3.7 Plus. 1M context with a 131K (or 65,536) max output.

Vision / documents (vendor): MMMU-Pro 80.5% (AA) / 89.0% MMMLU row, VITA-Bench 45.6%, MedXpertQA (MM) 71.0%, ScreenSpot-Pro 79.0%, SimpleVQA 81.7%, OmniDocBench 1.5 91.4%, OCRBench V2 70.7%, Video-MME (subtitles) 88.0%, VideoMMMU 85.4%, MLVU 87.4%, CharXiv 85.9%, ERQA 69.8%, MathVision 90.3%; Design Arena website Elo **1270** (AA).

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 72/100.** Terminal-Bench 2.0 70.3% (vendor) / 61.05% (AA) / 52.81% (Vals), MCP Atlas 73.2%, Claw-Eval 62.7%, BFCL v4 72.9%, OSWorld-Verified 73.3%, AndroidWorld 81.0%, QwenWebBench 1536, IFBench 78.0%, τ²-bench 92.98%. Capped by the rubric's anchors (TB2.1 ~88%+ → 52.8–70.3%; τ3 ~50%+ → 17.53%; GDPval ~1750+ → 767.63, the lowest in the Qwen line here), by Terminal-Bench 4.0 at 1.01%, by AutomationBench 17.39%, APEX-Agents 22.42%, and by the absence of Toolathlon, IPI and cyber-bench rows.
- **Reasoning: 72/100.** GPQA Diamond 90.0–90.3%, MMLU-Pro 88.5%, MathVision 90.3%, HMMT 92.9%, IMOAnswerBench 86.0%, PolyMath 84.0%, FrontierMath v2 34.386%, and an AA Intelligence Index of **25 (#34/173)**. Capped by HLE 34.7–35.63%, CritPt 9.14%, MLCR-AA 9.44%, the low **22.52% Omniscience accuracy**, and by the low Agentic Index of 17.5 — this is a mid-tier model with mid-tier reasoning.
- **Context window: 95/100.** 1M context (991K max input) with a 131K max output (262K reasoning) — the rubric's top tier (≥1M = 95–100), with the output cap above the 64K line. Not 100: **no long-context retrieval measurement exists**, and Vals' "66k" max-output reading conflicts with QwenCloud's 131K, so the context claim rests on the vendor's own page.
- **Multimodal: 89/100.** Text, image and video in with text out, with a wide published vision set — MMMU-Pro 80.46% (AA), Video-MME 88.0%, VideoMMMU 85.4%, MLVU 87.4%, OmniDocBench 91.4%, CharXiv 85.9%, SimpleVQA 81.7%, MathVision 90.3%, ScreenSpot-Pro 79.0%, OCRBench V2 70.7%, AndroidWorld 81.0%. Held at 89 because there is no audio support, and because the vision evidence is almost entirely vendor-published (no independent vision harness has run it).
- **Coding: 72/100.** SWE-bench Verified 77.7% (vendor) / 66.67% (Vals), SWE-bench Pro 57.6%, Multilingual 75.8%, Terminal-Bench 2.0 70.3%, SciCode 46.06% (AA) / 51.3% (vendor), NL2Repo 41.1%, Vibe Code Bench 46.39%. Capped by the absence of any DeepSWE figure, by SciCode under the 55% anchor, by SWE-bench Pro 57.6%, by Terminal-Bench 4.0 at 1.01%, and by the 11-point spread between the vendor's SWE-bench Verified and Vals' subset run.
- **Cost efficiency: 82/100.** The evaluated route — OpenCode Zen `opencode/qwen3.7-plus` — is billed at **$0.40 in / $1.60 out** per 1M with a $0.04 cached read and $0.50 cache write, with a 20%-off promotion taking it to $0.32/$1.28 (the live OpenRouter price) and batch at $0.20/$0.80. The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) put $0.40/$1.60 at roughly 82; Artificial Analysis measures $0.40 per Index task. The deductions are the >256K override ($0.96/$3.84) and a modest, non-cached-heavy profile.
- **Overall Score: 80.0/100.** (72 + 72 + 95 + 89 + 72) / 5 = 80.0 — best-fit: a **cheap, wide-multimodal, 1M-context mid-tier model** with a rich vendor tool suite (MCP Atlas, Claw-Eval, BFCL, QwenWebBench) and strong document/video understanding — the right pick for high-volume multimodal document and video work — but with clearly mid-tier agentic and coding numbers (Terminal-Bench 4.0 at 1.01%, SWE-bench Pro 57.6%, FrontierMath T1–3 34.4%, AA index 25) that put it below `qwen3.8-max` (90.2 on the AA index) at a similar price.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **SWE-bench Verified — 77.7% (Alibaba) vs 66.67% (Vals, Index subset, different harness).** An 11-point spread; the independent reading is used and both are listed.
2. **Terminal-Bench 2.0 — 70.3% (vendor) vs 61.05% (AA) vs 52.81% (Vals).** Harness spread of 17 points; AA is the anchor.
3. **Price — list $0.40/$1.60 (AA, Vals, Zen) vs $0.32/$1.28 (OpenRouter and the QwenCloud 20% promotion).** The list price anchors the score and the promotion is noted.
4. **Release date — 2026-06-01 (AA, Vals) vs 2026-06-02/03 (OpenRouter canonical slug, Alibaba blog) vs the Model Studio snapshot `qwen3.7-plus-2026-05-26`.** A three-way spread; the AA date is used.
5. **Parameters — 397B total / 17B activated (Alibaba's own comparison table) vs "not disclosed" (AA).** The vendor figure is recorded but not used for scoring.
6. **Video input — supported (AA, QwenCloud, Vals) vs absent from OpenRouter's architecture string.** The vendor list is used.
7. **Max output — 131K (QwenCloud) vs 65,536 ("66k", Vals).** The conservative figure is used; the conflict is recorded.
8. **AA index 25 (page) vs 25.2 (BenchLM/OpenRouter feed); Agentic Index 17.5 (OpenRouter) vs 19.7 (BenchLM).** Rounding and snapshot differences.
9. **Omission risk.** Qwen3.7 Plus has no Terminal-Bench 4.0, DeepSWE, LiveCodeBench, FrontierSWE, Toolathlon, IPI or cyber row published anywhere, so the agentic and coding scores rest on a thin, mostly vendor-published base — stated in each line.

### Notes on identity

- `qwen3.7-plus` is a distinct, **proprietary** SKU from `qwen3.7-max` ($2.50/$7.50), `qwen3.7-flash` and the open-weight `qwen3.8` family — and a different generation from the Qwen3.8 line, whose flagship is scored in `model/qwen-3.8-max/` and whose Flash is in `model/qwen-3.8-flash/`.
- No Hugging Face repository, no ModelScope card and no public weights exist for it; the "397B/17B" figure exists only inside a Qwen-vendor comparison table.
- The Zen route uses the **Anthropic-protocol endpoint** (`https://opencode.ai/inference/anthropic/v1/messages`) with `@ai-sdk/anthropic`, unlike most Qwen routes in the catalogue.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Alibaba Cloud's Qwen3.7-Plus launch blog and the QwenCloud / Model Studio model pages (ids, context, pricing, promo), Artificial Analysis (model page with its per-evaluation payload, index, openness/licence statement), Vals AI, the BenchLM evidence ledger, OpenRouter's API and OpenCode Zen's catalog. Vendor-vs-independent conflicts — the SWE-bench and Terminal-Bench spreads, the three-way price and date discrepancies, and the max-output conflict — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
