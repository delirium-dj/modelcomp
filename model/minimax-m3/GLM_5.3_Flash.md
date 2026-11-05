# MiniMax M3 — findings by GLM 5.3 Flash

- Source: MiniMax (`MiniMax-M3`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-09→10-16): **material correction** — the
> BenchLM Nov 4 refresh now reads the AA-Omniscience hallucination rate at **91.4%**
> (the prior pass celebrated "18.4% — best in cohort"; that reading is contradicted/
> relabeled on the current board), with Omniscience accuracy revised 16.7→44.9% and index
> 1.4→−5.5, and the AA Index rebased 29.2→18.7 (v5.0). Reasoning 82→79. New AA cyber rows
> and GDPval Elo 1304 added. Overall holds at 85.

## Model card

- **Name:** MiniMax M3 (open-weight flagship; no Free-tier wording)
- **Short description:** MiniMax's coding/agentic flagship built on MiniMax Sparse Attention (MSA) with 1M context and native multimodal training from step zero — the first open-weight model combining frontier coding, million-token context and native multimodality. Runs autonomous multi-hour engineering tasks (12-h ICLR paper replication, 9.4x CUDA kernel speedup). Superseded in-family by MiniMax-M3.1-Flash (2026-10-20).
- **Provider / access:** MiniMax API `https://api.minimax.io/v1/text/chatcompletion_v2` (model `MiniMax-M3`, Chat Completions-style v2), MiniMax Code harness, Token Plan, and OpenRouter. Weights on Hugging Face (`MiniMaxAI/MiniMax-M3`). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released June 1, 2026 (MSA paper arXiv:2606.13392). Knowledge cutoff January 2026 (served system prompt).
- **IDs:** `MiniMax-M3` (API), `minimax-m3` / `minimaxai/minimax-m3` (OpenRouter/HF).
- **Context window:** 1,000,000 tokens with a guaranteed minimum of 512K (vendor); max output 131,072. MSA reduces per-token attention compute 28.4x at 1M context (14.2x prefill / 7.6x decode wall-clock on H800).
- **Modalities:** Natively multimodal: text, image, video in; text out. Thinking modes enabled/disabled/adaptive; tool calls, JSON mode, structured outputs supported.
- **Pricing (as of 2026-11-05):** $0.30 in / $1.20 out per 1M; cache reads $0.06. Token Plan bundles M3 at unchanged plan pricing. No free tier.
- **Architecture:** Open weights (MiniMax Community License, commercial use conditional; code MIT). HF checkpoint: ~427B total parameters (BF16); active-parameter count not disclosed in reviewed sources (folder meta ~230B/9.8B — flagged unverified). Blockwise sparse attention (MSA) over GQA.

### Raw benchmarks found

> BenchLM Nov 4 refresh (51 rows) re-verified; changed/new rows flagged. BenchLM now classifies M3's variant as non-reasoning on its schema.

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (MiniMax-reported) / Vals **53.6%** (both unchanged); Terminal-Bench Hard (AA): 42.4%; AA TB4.0: **2.0%** (very weak, unchanged)
- Tau2-bench: **88.9%** (AA); AA Tau3 Banking 15.3%; Claw-Eval: **74.5%** (vendor); MCP-Atlas: **74.2%** (vendor)
- OSWorld-Verified: **70.1%** (vendor); OSWorld 2.0: 4.6% (paper)
- BrowseComp: **83.5%** (vendor, above Opus 4.7's 79.3)
- GDPval-AA: **Elo 1304** / 37.1–37.3% (AA — Elo row added this pass, up from the 1245 first reading); GDPval rubrics 74.7%
- BankerToolBench: **76.1%**; AA Harvey LAB v1.0: **88.4%**; AA AutomationBench 21.3%; AA EnterpriseOps-Gym 32.1%; AA Briefcase **1091**; AA Agentic Index **30.8%**; ResearchClawBench 19.8%
- AA cyber rows (NEW): AA Cyber Index **22.4%**, CWE-Bench-AA **41.7%**, DeepsecBench-AA **1.1%**, CyberGym-E2E-AA **24.4%**
- GDP.pdf 9.8%; AA-AnalystAgent 10.0%; PostTrainBench **37.1** #3 overall (vendor); MazeBench 0%
- Long-run vendor demos: ~12 h ICLR-paper replication; ~24 h CUDA FP8 GEMM optimization (9.4x speedup)

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA) / **92.7%** (Vals) — corroborated, unchanged
- HLE: **39.0%** (AA, just under the 40% bar)
- AA-LCR: **83.0%**; MLCR-AA 17.2%; CritPt: **3.7%** (weak)
- Artificial Analysis Intelligence Index: **18.7** (BenchLM Nov 4, v5.0 rebase — was 29.2 on the prior board; version chain documented)
- **AA-Omniscience: index −5.5, accuracy 44.9%, hallucination rate 91.4%** — MATERIAL CORRECTION: the prior pass recorded index 1.4 / accuracy 16.7% / hallucination 18.4% and called it "the best in this cohort"; the current board contradicts that reading (severe hallucination). Treat the old 18.4% as superseded/mislabeled.
- AA-IFBench: **82.9%** (unchanged, near Qwen3.8's 82.8)
- MMLU-Pro (Vals): **84.2%**; MMMU-Pro 78.1% (LLM-Stats) / **78.6%** (AA — NEW corroboration); USAMO 2026: **85.7%** (vendor)
- BenchLM composite: **48.57/100, #108 of 1009** (Nov 4 — big downward drift from 54.34 #64/889)

Coding:

- SWE-bench Verified: **80.5%** (LLM-Stats observation; MiniMax-reported); SWE-bench Pro: **59.0%** (MiniMax-reported)
- LiveCodeBench (Vals): **82.2%**; SWE-bench (Vals): **75.0%** — unchanged
- AA-SciCode: **47.1%** (below the 55% mark); AA Coding Index **58.6%**; MazeBench 0%
- VIBE V2: 50.1%; SVG-Bench 63.7%; KernelBench Hard 28.8%; OpenHarmony 48.4%; NL2Repo 42.1%
- DeepSWE / SWE-Atlas / Vibe Code Bench (Vals): no verified public score found

Long context:

- 1M window (512K guaranteed floor), MSA native; AA-LCR **83.0%** (strong); no MRCR/RULER retrieval verified

Multimodal / vision:

- VideoMMMU: **84.6%**; Video-MME (w/ subs): **85.4%**; OmniDocBench 1.5: **91.6%**; AA-MMMU-Pro: **78.6%** (NEW); OfficeQA Pro 45.1%; Design Arena Website: **1256** (drift from 1263)

### Normalized scores (1–100)

- **Tool use: 80/100.** Unchanged — Tau2 88.9%, Claw-Eval 74.5%, MCP-Atlas 74.2%, BankerToolBench 76.1%, OSWorld-Verified 70.1%, BrowseComp 83.5% and the updated GDPval 1304 Elo hold mid-band; TB2.1 66.0% (Vals 53.6%) and AA TB4.0 2.0% cap it; the new cyber rows (22.4%/1.1%) are weak but niche.
- **Reasoning: 79/100.** CHANGED from 82 — GPQA 92.9% corroborated and HLE 39.0% near-bar hold, but the AA Index rebase to 18.7 and the **hallucination correction (18.4%→91.4% severe)** retract the prior "best-in-cohort honesty" pillar; CritPt 3.7% remains weak.
- **Context window: 93/100.** Unchanged — 1M window (512K floor) with AA-LCR 83.0% strong; no ≥98% retrieval verification at depth.
- **Multimodal: 88/100.** Unchanged — text+image+video in with VideoMMMU 84.6%, Video-MME 85.4%, OmniDocBench 91.6% and the new AA-MMMU-Pro 78.6% corroboration; no audio in, text-only out.
- **Coding: 84/100.** Unchanged — SWE-V 80.5%, LCB 82.2% (Vals) and SWE-Pro 59.0% hold; TB2.1 66%, AA-SciCode 47.1% and AA Coding Index 58.6% keep it below the K3/Fable band.
- **Cost efficiency: 90/100.** Unchanged — $0.30/$1.20 with $0.06 cache reads; no free tier.
- **Overall Score: 85/100.** (80 + 79 + 93 + 88 + 84) / 5 = 424/5 = 84.8 → 85 (unchanged; Reasoning's drop is absorbed by the band). Best fit: budget-friendly open-weights pick for long-context agentic coding and multimodal document/video understanding — but pair it with verification on knowledge-critical paths given the corrected 91.4% hallucination reading, and prefer M3.1-Flash for new work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetch (web-search quota exhausted): BenchLM MiniMax M3 page fetched 2026-11-05 (Nov 4 data, 51 rows) — AA-Omniscience hallucination correction (18.4→91.4%), AA Index v5 rebase (29.2→18.7), new AA cyber rows, GDPval Elo 1304, composite drift 54.34 #64/889 → 48.57 #108/1009 documented; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
