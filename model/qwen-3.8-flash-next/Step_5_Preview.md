# Qwen 3.8 Flash Next — findings by Step 5 Preview

- Source: Alibaba / Qwen3.8-Flash-Next (`opencode/qwen-3.8-flash-next`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's open-weight Qwen3.8-Flash-Next checkpoint — an early Qwen4-architecture preview (125B main / 6B active + 51B N-gram embedding params, Gated DeltaNet + Qwen Sparse Attention hybrid, Muon-trained) delivering #3 LiveCodeBench 91.9% and 86.1% Terminal-Bench 2.1 at $0.16/$0.47 per 1M.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.8-Flash-Next`, Qwen Community License 1.0 — verify commercial terms); hosted via Vercel ($0.12/$0.40), Qwen Cloud (production-hardened sibling is Qwen3.8-Flash at $0.15/$0.47, 1M context); OpenCode Zen (`opencode/qwen-3.8-flash-next`); Chat Completions API, tool use.
- **Release / knowledge:** released 2026-08-26 (llm-stats, BenchmarkList, BenchmarkList launch post 2026-08-26); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (HF/Vercel); `opencode/qwen-3.8-flash-next` (Zen).
- **Context window:** 262,144 native, extensible to 1M via YaRN (BenchmarkList, folder meta; llmlearner lists 256K).
- **Modalities:** text, image, video in; text out; reasoning mode; tool use (BenchmarkList lists it as a multimodal MoE; LVBench 76.6% confirms long-video understanding).
- **Pricing (as of 2026-10-21):** $0.16/$0.47 per 1M with $0.016 cached input (BenchmarkList); Vercel $0.12/$0.40 (folder meta); open weights free to self-host.
- **Architecture:** 125B main parameters / 6B activated per token MoE + 51B N-gram embedding parameters; hybrid Gated DeltaNet linear attention + Qwen Sparse Attention; 4-branch Gated Residual stream; trained with the Muon optimizer; experimental preview of the Qwen4 architecture.

### Raw benchmarks found

Qwen3.8-Flash-Next model card + Artificial Analysis / leaderboard figures via BenchLM and BenchmarkList:

Agent / tool use:

- Terminal-Bench 2.1: **86.1%** (BenchmarkList, rank 17/193, 92nd percentile; field leader Fable 5.1 91.4%)
- GDPval-AA: **1,743 Elo** (Artificial Analysis via BenchmarkList 2026-09-02, rank 10/356; BenchLM carries an earlier 1,648 read)
- Toolathlon-Verified: **73.5%** (model card via BenchLM; rank 17/43)
- AndroidWorld: **84.5%** (model card via BenchLM; rank 6/22)
- ClawEval-MM: **64.4% Pass@3 / 60.4% avg** (Qwen comparison table via BenchmarkList; rank 5/12)
- JobBench: **55.7%** (model card via BenchLM; rank 17/57)
- AA-Briefcase: **1,580 Elo** (Artificial Analysis via BenchmarkList; rank 12/153)
- Tau3-Banking: **45.4%** (Artificial Analysis via BenchmarkList; rank 11/176)
- CoWorkBench: **73.9%** (model card via BenchLM)
- Agents' Last Exam: **24.3%** pass rate (BenchmarkList rank 24/42) / **51.2%** score (model card via BenchLM) — two metrics, both listed
- OSWorld 2.0: **19.4%** binary / 52.3% partial (BenchmarkList; rank 16/24) — weak on long-horizon computer use
- CorpBench Work 1.3: **62.9** score (BenchmarkList)
- Tau2-Bench / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Artificial Analysis via BenchmarkList; rank 20/469); **91.7%** (model card via BenchLM)
- HLE: **38.0%** (Artificial Analysis via BenchmarkList; 89th percentile); **35.9%** no-tools (model card)
- Artificial Analysis Intelligence Index: **39.8** (87th percentile, rank 59/433)
- AA-LCR (long-context reasoning): **79.7%** (Artificial Analysis via BenchLM; 87th percentile)
- CritPt: **11.1%** (Artificial Analysis via BenchLM) — weak
- AA-Omniscience: Accuracy **24.5%**, Hallucination Rate **45.3%** (Artificial Analysis via BenchLM) — weak knowledge reliability
- AA-IFBench: **81.3%** (model card via BenchLM; rank 7/42)
- RealWorldQA: **88.5%** (rank 1/31) — visual perception (listed under multimodal)

Coding:

- LiveCodeBench v6: **91.9%** (model card; rank 3/50, 96th percentile)
- Terminal-Bench 2.1: **86.1%** (listed above)
- SWE Multilingual: **81.0%** (model card; rank 8/49)
- AA Coding Index: **73.0%** (Artificial Analysis via BenchLM — frontier ref 70%+)
- SWE-bench Pro: **62.5%** (model card; rank 20/58)
- DeepSWE 1.1: **58.7%** (xAI comparison table via BenchmarkList; rank 36/58)
- SciCode: **50.6%** (Artificial Analysis via BenchLM; 82nd percentile)
- NL2Repo: **48.1%** (model card; rank 16/35)
- Vision2Web: **64.0%** (model card; rank 4/9 — visual website development)
- SWE-bench Verified / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR **79.7%** long-context reasoning (Artificial Analysis, via BenchLM; 87th percentile of 414); native 262,144 window with YaRN extension to 1M; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): MathVision 90.6% (95.7% w/ Python), RealWorldQA 88.5% (#1/31), ERQA 72.3% (#3/20), CharXiv-R 84.6% (90.6% w/ Python), LVBench 76.6% (long video, #12/49), AA-MMMU-Pro 79.8%, ExtractBench 89.88% (LlamaIndex).

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 86.1% is near the frontier reference (88%+), GDPval-AA 1,743 Elo is a top-10-of-356 result, and Toolathlon 73.5% / AndroidWorld 84.5% / ClawEval-MM 64.4% round out broad tool ability; capped by Tau3-Banking 45.4% (mid), Agents' Last Exam 24.3% and OSWorld 2.0 at 19.4% binary.
- **Reasoning: 85/100.** GPQA Diamond 92.3% (top-20 of 469) and HLE 38.0% (89th percentile) are strong, and the AA Intelligence Index 39.8 (87th percentile) is above the mid band; capped by CritPt 11.1%, Omniscience accuracy 24.5% with a 45.3% hallucination rate, and LCR 79.7% below the 95%+ frontier long-context reference.
- **Context window: 78/100.** 262,144 native lands in the 200K–500K tier (65–84, above the 200K=70 floor); the YaRN 1M extension is static-factor and degrades shorter inputs, so no ≥1M credit.
- **Multimodal: 88/100.** Text, image and video input (video-in tier 75–90) with text out; MathVision 90.6%, RealWorldQA 88.5% (#1), LVBench 76.6% long-video and CharXiv-R 84.6% are excellent for the class; no audio input or non-text output.
- **Coding: 87/100.** LiveCodeBench 91.9% (#3 of 50) and Terminal-Bench 2.1 86.1% are frontier-adjacent, AA Coding Index 73.0% clears the 70%+ frontier ref, and Vision2Web 64.0% leads small-model visual coding; capped by SWE-bench Pro 62.5%, DeepSWE 58.7%, SciCode 50.6% and NL2Repo 48.1% on the harder agentic harnesses.
- **Cost efficiency: 94/100.** $0.16/$0.47 with $0.016 cached input sits in the ~$0.10/$0.20 ≈ 97–99 reference band's neighborhood; open weights (free self-host under the Qwen Community License) hold the floor at $0 — a top value-per-token profile.
- **Overall Score: 84/100.** Mean of (84 + 85 + 78 + 88 + 87) / 5 = 84.4 → 84. Best fit: the strongest cheap open-weight coding/agent checkpoint of the Qwen3.8 family — near-frontier terminal and competitive-coding scores at ~1/10th frontier token prices.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (BenchmarkList with Artificial Analysis/leaderboard ranks, Qwen model-card figures + Artificial Analysis via BenchLM, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
