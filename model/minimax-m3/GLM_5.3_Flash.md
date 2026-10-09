# MiniMax M3 — findings by GLM 5.3 Flash

- Source: MiniMax (`MiniMax-M3`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3 (open-weight flagship; no Free-tier wording)
- **Short description:** MiniMax's coding/agentic flagship built on MiniMax Sparse Attention (MSA) with 1M context and native multimodal training from step zero — the first open-weight model combining frontier coding, million-token context and native multimodality. Runs autonomous multi-hour engineering tasks (12-h ICLR paper replication, 9.4x CUDA kernel speedup).
- **Provider / access:** MiniMax API `https://api.minimax.io/v1/text/chatcompletion_v2` (model `MiniMax-M3`, Chat Completions-style v2), MiniMax Code harness, Token Plan, and OpenRouter. Weights on Hugging Face (`MiniMaxAI/MiniMax-M3`). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released June 1, 2026 (technical report "MiniMax M3: Frontier Coding, 1M Context, Native Multimodality"; MSA paper arXiv:2606.13392). Knowledge cutoff January 2026 (served system prompt).
- **IDs:** `MiniMax-M3` (API), `minimax-m3` / `minimaxai/minimax-m3` (OpenRouter/HF).
- **Context window:** 1,000,000 tokens with a guaranteed minimum of 512K (vendor); max output 131,072. MSA reduces per-token attention compute 28.4x at 1M context (14.2x prefill / 7.6x decode wall-clock on H800).
- **Modalities:** Natively multimodal: text, image, video in; text out (interleaved multimodal training, ~100T data). Thinking modes enabled/disabled/adaptive; tool calls, JSON mode, structured outputs supported.
- **Pricing (as of 2026-10-09):** $0.30 in / $1.20 out per 1M; cache reads $0.06 (MiniMax and OpenRouter routes, same price). Token Plan bundles M3 at unchanged plan pricing. No free tier.
- **Architecture:** Open weights (MiniMax Community License, commercial use conditional; code MIT). HF checkpoint: ~427B total parameters (BF16 safetensors); active-parameter count not disclosed in reviewed sources (folder meta carries ~230B/9.8B — flagged as unverified). Blockwise sparse attention (MSA) over GQA with per-group Top-k block selection.

### Raw benchmarks found

> benchlm.ai tables (updated 2026-10-09) citing the MiniMax M3 blog/HF card + AA and Vals rows. Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (MiniMax-reported; AA 65.2%, Vals 53.6%); Terminal-Bench Hard (AA): 42.4%; AA Terminal-Bench 4.0: **2.0%** (very weak on the recalibrated board)
- Tau2-bench: **88.9%** (AA board via benchlm.ai — fills the previously-missing Tau row); AA Tau3 Banking: 15.3%
- Claw-Eval: **74.5%** (MiniMax-reported via benchlm.ai — fills the previously-missing Claw row)
- MCP-Atlas: **74.2%** (MiniMax-reported public set)
- OSWorld-Verified: **70.1%** (MiniMax-reported — new); OSWorld 2.0: **4.6%** (paper)
- BrowseComp: **83.5%** (vendor; above Opus 4.7's 79.3)
- GDPval-AA: **1245 Elo** / 37.3% (AA — fills the previously-missing GDPval row); GDPval rubrics: **74.7%** (HF card)
- BankerToolBench: **76.1%** (HF card); AA Harvey LAB v1.0: **88.4%**; AA AutomationBench: 21.3%; AA EnterpriseOps-Gym: 32.1%; AA Briefcase: **1091**; AA Agentic Index: **30.8%**; ResearchClawBench: 19.8% (benchlm.ai)
- GDP.pdf: 9.8%; AA-AnalystAgent: 10.0% (AA)
- PostTrainBench: **37.1** #3 overall — behind Opus 4.7 (42.4) and GPT-5.5 (39.3) (vendor)
- Long-run cases (vendor demos, not benchmarks): ~12 h autonomous ICLR-paper replication; ~24 h CUDA FP8 GEMM optimization, 9.4x speedup

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA-GPQA Diamond — corroborates the earlier aggregator 92%); Vals: **92.7%**
- HLE: **39.0%** (AA-HLE via benchlm.ai — fills the previously-missing HLE)
- AA-LCR: **83.0%** (AA long-context-reasoning board — fills the previously-missing LCR); MLCR-AA: **17.2%**; CritPt: **3.7%**
- Artificial Analysis Intelligence Index: **29.2** (AA via benchlm.ai — fills the previously-missing Index)
- AA-Omniscience: Index 1.4, accuracy **16.7%**, hallucination rate **18.4%** (benchlm.ai — excellent, lowest hallucination in this cohort)
- AA-IFBench: **82.9%** (AA — new, near Qwen3.8's 82.8)
- MMLU-Pro (Vals): **84.2%** (benchlm.ai)
- MMMU-Pro: **78.1%** (LLM-Stats observation); GeneBench-Pro: **0.9** xhigh
- USAMO 2026: **85.7%** (MiniMax blog — new math row)
- BenchLM composite: **54.34/100, #64 of 889** (updated from the earlier 61.3 #54/230 reading)

Coding:

- SWE-bench Verified: **80.5%** (rank 8/49, LLM-Stats observation; MiniMax-reported)
- SWE-bench Pro: **59.0%** (MiniMax-reported; rank 14/46 — Fable 5 at 80.3, Opus 5 79.2 on the same ladder)
- LiveCodeBench: **82.2%** (Vals AI via benchlm.ai — fills the previously-missing LCB); SWE-bench (Vals): **75.0%**
- AA-SciCode: **47.1%** (AA board — fills the previously-missing SciCode; below the 55%+ frontier mark)
- Terminal-Bench 2.1 (coding harness): **66.0%** (MiniMax-reported)
- VIBE V2: **50.1%** (HF card); SVG-Bench: **63.7%**; KernelBench Hard: **28.8%**; OpenHarmony Bench: **48.4%**; NL2Repo: **42.1%** (HF card/benchlm.ai)
- DeepSWE / SWE-Atlas / Vibe Code Bench (Vals): no verified public score found

Long context:

- 1M window (512K guaranteed floor), MSA native; AA-LCR **83.0%** measured (fills the previously-missing row); no MRCR/RULER retrieval number verified

Multimodal / vision:

- VideoMMMU: **84.6%**; Video-MME (with subtitle): **85.4%**; OmniDocBench 1.5: **91.6%** (MiniMax blog — new measured video/document rows); AA-MMMU-Pro: **78.6%** (AA); OfficeQA Pro: **45.1%**; Design Arena Website: **1263**

### Normalized scores (1–100)

- **Tool use: 80/100.** Now measured across independent boards: Tau2 88.9% (AA), Claw-Eval 74.5%, MCP-Atlas 74.2%, BankerToolBench 76.1%, OSWorld-Verified 70.1%, BrowseComp 83.5%, GDPval-AA 1245 — solid mid-band anchors; TB2.1 66.0% (Vals 53.6%) and the near-zero AA TB4.0 2.0% cap it.
- **Reasoning: 82/100.** GPQA 92.9% (corroborated) clears the 90% reference, HLE 39.0% sits just under the 40% bar, and the filled AA-LCR 83.0% + AA Index 29.2 add independent corroboration; CritPt 3.7% is weak; the 18.4% hallucination rate is the best in this cohort.
- **Context window: 93/100.** 1M window (≥1M tier, 95–100) docked for the 512K guaranteed floor; measured AA-LCR 83.0% is strong but no MRCR/RULER ≥98% verification at depth.
- **Multimodal: 88/100.** Native text+image+video in / text out with now-measured video rows (VideoMMMU 84.6%, Video-MME 85.4%) and OmniDocBench 91.6% document intelligence — top of the 75–90 video band; no audio in, text-only out.
- **Coding: 84/100.** SWE-bench Verified 80.5% (#8/49) and the filled LiveCodeBench 82.2% are genuinely strong; SWE-Pro 59.0% (#14/46), TB2.1 66% and AA-SciCode 47.1% (below the 55%+ mark) hold it below the Kimi-K3/Fable band.
- **Cost efficiency: 90/100.** $0.30/$1.20 per 1M is the same price point M2.7 was scored at (90); cache reads at $0.06 make long-context agent loops cheap. No free tier.
- **Overall Score: 85/100.** Mean of the five quality dims (80 + 82 + 93 + 88 + 84) / 5 = 85.4 → 85. Best fit: budget-friendly open-weights pick for long-context agentic coding and multimodal document/video understanding when frontier APIs are overkill — with the cohort's best hallucination rate.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-09 citing the MiniMax M3 blog/HF card, AA and Vals boards, LLM-Stats observations); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing Tau2 88.9%, Claw-Eval 74.5%, GDPval-AA 1245, HLE 39.0%, AA-LCR 83.0%, AA Index 29.2, LCB 82.2%, SciCode 47.1%, VideoMMMU 84.6%, OmniDocBench 91.6% — Tool 74→80, Reasoning 80→82, Context 92→93, Multimodal 82→88, Overall 82→85.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
