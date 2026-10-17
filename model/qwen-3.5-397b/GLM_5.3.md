# Qwen 3.5 397B — findings by GLM 5.3

- Source: Alibaba (`qwen-3.5-397b`)
- Date: 2026-10-16 (UTC) — re-research of the 2026-10-08 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba's large open-weight Qwen 3.5 checkpoint (Qwen3.5-397B-A17B: 397B total / 17B active MoE, Apache 2.0), released February 2026 — text+image input with strong math, knowledge and tool-use benchmarks for a non-reasoning model; a reasoning-mode sibling exists.
- **Provider / access:** Alibaba API plus 5 providers (Artificial Analysis); self-host via Hugging Face `Qwen/Qwen3.5-397B-A17B`. Project meta lists Zen ID `opencode/qwen-3.5-397b` (absent from the live Zen models list when re-checked 2026-10-08 — no Free ID).
- **Release / knowledge:** 2026-02-16 (Artificial Analysis); knowledge cutoff not stated.
- **IDs:** `opencode/qwen-3.5-397b` (project meta); Hugging Face `Qwen/Qwen3.5-397B-A17B`.
- **Context window:** 262K (Artificial Analysis; BenchLM lists 128K — AA's 262K is used, the folder meta's 128K is a scaffold placeholder). Max output split not published.
- **Modalities:** text and image in (verified on Artificial Analysis; vendor tables also report video benchmarks); text out; non-reasoning default mode (reasoning variant exists); tool calls yes (τ²/τ³/MCP results); JSON mode not verified.
- **Pricing (as of 2026-10-08):** $0.60 in / $3.60 out per 1M on Alibaba's API (Artificial Analysis); 87.2 tokens/s, TTFT 2.30s; Apache 2.0 weights allow free self-hosting.
- **Architecture:** 397B total / 17B active MoE, open weights, Apache 2.0 (Artificial Analysis).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **83.9%** (Artificial Analysis via BenchLM)
- τ³-bench: **68.4%** (Qwen Qwen3.6-Plus comparison table via BenchLM)
- MCP-Tasks: **74.2%** (Qwen comparison table via BenchLM)
- WideResearch: **74.0%** (Qwen comparison table via BenchLM)
- BrowseComp: **69%** (Qwen3.5-397B-A17B model card via BenchLM — updated this pass from the 62% comparison-table figure) — large vendor/agency disagreement noted; OSWorld-Verified **62.2%** (model card — new row this pass)
- Claw-Eval: **56.8%** (Claw-Eval leaderboard via BenchLM)
- QwenClawBench: **51.8%** (Qwen comparison table via BenchLM)
- Terminal-Bench 2.0: **52.5%** (Qwen comparison table via BenchLM)
- VITA-Bench: **43.7%** / MCP Atlas: **46.1%** / Gert Labs: **46.76%** (via BenchLM)
- DeepPlanning: **37.6%** / Toolathlon: **36.3%** (Qwen comparison table via BenchLM)
- ResearchClawBench: **14.2%** (ResearchClawBench leaderboard via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (Qwen comparison table) / **86.1%** (AA harness) (BenchLM)
- AIME26: **93.3%**; HMMT Feb 2025 **94.8%** / Nov 2025 **92.7%** / Feb 2026 **87.9%** (Qwen comparison table via BenchLM)
- MMLU-Pro: **87.8%**; MMLU-Redux **94.9%**; C-Eval **93%**; SuperGPQA **70.4%** (Qwen comparison table via BenchLM)
- HLE: **28.7%** (Qwen table) / **19.8%** (AA harness) (BenchLM)
- Artificial Analysis Intelligence Index: **21** (estimated, non-reasoning) (AA; BenchLM 21.4)
- CritPt: **0.9%** (AA via BenchLM)
- AA-Omniscience Index: **-37.9** (accuracy 24.5%, hallucination rate 82.7%) (AA via BenchLM)

Coding:

- LiveCodeBench v6: **83.6%** (Qwen comparison table via BenchLM)
- SWE-bench Verified: **76.2%** (Qwen comparison table via BenchLM)
- SWE-bench Pro: **50.9%** (Qwen comparison table via BenchLM)
- New this pass: SWE Multilingual **69.3%** (model card), NL2Repo **32.2%** (Qwen3.6-27B card table — lineage-flagged), IFBench **76.5%** (model card); BenchLM composite **55.34/100, #65/954** (73 rows)

Multimodal:

- MMMU-Pro: **79%** (Qwen multimodal table) / **52.7%** (AA harness) — large vendor/agency disagreement (BenchLM)
- MathVision: **88.6%**; CharXiv: **80.8%**; VideoMMMU: **84.7%**; V*: **95.8%**; ScreenSpot Pro: **65.6%** (Qwen multimodal table via BenchLM — video numbers are vendor-run; AA verifies only image input)
- New this pass (model card via BenchLM — vendor-run): MMMU **85.0%**, RealWorldQA **83.9%**, OmniDocBench 1.5 **90.8%**, Video-MME **87.5% w/ sub / 83.7% w/o**, We-Math **87.9%**, DynaMath **86.3%**, AI2D **93.9%**, CountBench **97.2%**, RefCOCO avg **92.3%**, MLVU M-Avg **86.7%**, CC-OCR **82.0%**, ODINW13 **47.0%**, ERQA **67.5%**, MMLongBench-Doc **61.5%**, SimpleVQA **67.1%**; multilingual extras INCLUDE **85.6%**, PolyMath **73.3%**, MAXIFE **88.2%**; MMAnswerBench **80.9%**

Long context:

- LongBench v2: **63.2%**; AI-Needle: **68.7%** (Qwen comparison table via BenchLM)
- AA-LCR: **64.3%** (AA via BenchLM)
- no MRCR/RULER percentage published at the full window.

Instruction following:

- IFEval: **92.6%** (Qwen table) / AA-IFBench: **51.6%** (AA) (BenchLM)

Multilingual:

- MMLU-ProX: **84.7%**; NOVA-63: **59.1%** (Qwen comparison table via BenchLM)

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench 83.9%, τ³ 68.4%, MCP-Tasks 74.2% and BrowseComp 62% form a strong mid-frontier agentic profile; capped by weak spots — Toolathlon 36.3%, DeepPlanning 37.6%, ResearchClawBench 14.2% and a non-reasoning default mode.
- **Reasoning: 75/100.** GPQA 86–88%, AIME26 93.3% and HMMT ≥88% are near-frontier; capped by HLE 19.8–28.7% (below the 40% ref), CritPt 0.9%, an 82.7% hallucination rate and a non-reasoning serving default.
- **Context window: 72/100.** 262K verified (Artificial Analysis) sits just above the 200K (=70) tier floor; retrieval-style numbers (LongBench v2 63.2%, AI-Needle 68.7%, AA-LCR 64.3%) are moderate, not exceptional.
- **Multimodal: 70/100.** Image input AA-verified but independently measured MMMU-Pro is only 52.7% vs the vendor's 79% — top of the image-in band, not higher; video figures are vendor-run only.
- **Coding: 75/100.** LiveCodeBench v6 83.6% and SWE-bench Verified 76.2% are strong; capped by SWE-bench Pro 50.9% and no Terminal-Bench/DeepSWE coverage.
- **Cost efficiency: 89/100.** $0.60/$3.60 per 1M sits at the ~$0.60/$2.20 class (~92) with an output premium; Apache 2.0 self-hosting offsets for operators who can run 397B.
- **Overall Score: 73/100.** (72 + 75 + 72 + 70 + 75) / 5 = 72.8 → 73. Best-fit recommendation: open-weights workhorse for math-heavy, tool-using, multilingual text work where self-hosting is an option; hallucination-prone on long-tail facts — keep verification in the loop.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-16 (first researched 2026-10-08)
- Method: public internet research (BenchLM 73-row profile re-checked 2026-10-16 — BrowseComp updated 62→69% (model card), OSWorld-Verified 62.2% added, ~25 new vendor-run multimodal/multilingual rows from the HF model card, SWE Multilingual 69.3%; official Qwen comparison tables and Artificial Analysis leaderboards). Vendor-run numbers were discounted where AA-run equivalents disagreed. No score changes — the additions reinforce the existing bands (Multimodal's vendor/AA disagreement stands). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
