# HY4 (Hy4 Preview) — findings by DeepSeek 4.1 Flash

- Source: Tencent/Hy4 preview (`tencent/Hy4-preview`, served as `hy4-preview`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY4 — as tracked in this repo the HY4 generation exists publicly only as **Hy4 Preview** (released 2026-08-28); no separately named stable "HY4" checkpoint had shipped as of 2026-09-18, so this report scores the preview.
- **Short description:** Tencent Hy Team's next-generation open flagship: a 770B-A49B MoE with Gated DeepSeek Sparse Attention + IndexCache, identity Hyper-Connections and a 1,048,576-token window under Apache 2.0. It is the largest generation-over-generation jump in the HY line and lands at the open-source frontier on agentic coding, at the cost of slow, over-verifying reasoning.
- **Provider / access:** Tencent Cloud TokenHub, OpenRouter, WorkBuddy, CodeBuddy, Yuanbao, ima; self-host via `vllm/vllm-openai:hy4-preview` or `lmsysorg/sglang:hy4-preview` (FP8/BF16 weights on Hugging Face, ModelScope, GitCode, CNB). **No OpenCode Zen Free ID.**
- **Release / knowledge:** Preview released **2026-08-28**, last updated 2026-08-31 (roughly two-month cadence since the February 2026 infrastructure rebuild). Knowledge cutoff not published.
- **IDs:** `tencent/Hy4-preview` (instruct + `-FP8`), `hy4-preview` (served name), tool/reasoning parser tag `hy_v4`. No Zen Free ID observed.
- **Context window:** **1,048,576 tokens (1M)** per the official model card and Traictory/RankLLMs. Max output not published.
- **Modalities:** **Text in / text out only** — the release notes state visual input is absent from this preview. Hybrid thinking (defaults to `high`, `no_think` available); tool calls with auto-tool-choice; structured output; multilingual. No audio/video/PDF input, no non-text output.
- **Pricing (as of 2026-09-18):** launch announcement **$0.834 / 1M in, $2.501 / 1M out, $0.042 / 1M cache-hit** (≈95% cache discount); Chinese coverage quotes ¥6 per 1M input on Tencent Cloud (≈$0.83, consistent). Paid only; open weights mean self-hosting has no per-token API cost, but full FP8/BF16 serving needs distributed multi-node GPUs.
- **Architecture:** MoE, **770B total / 49B active per token** (~6.4% activation), 78 backbone layers (first dense FFN, remaining 77 MoE), 256 routed experts + 1 shared expert with top-8 routing, hidden 6144, Gated DSA attention (64 heads, query compression 2048, KV compression 512, indexer 32 heads × 128, indexer top-k 2048), 4 residual streams, FFN intermediate 18432, vocab 120832 — plus **1 native MTP layer (10B total / 0.7B active)** for speculative decoding. **Apache 2.0.**

### Raw benchmarks found

> Tencent publishes its benchmark appendix as an image (`assets/benchmark.jpg`), so the numbers below are the vendor's own figures **as re-published and compiled by third parties** (Traictory catalogue, Winzheng, ToolWorthy, RankLLMs, BenchLM). Every value is marked self-reported unless an independent source is named; independent leaderboards had not reproduced them all as of 2026-09-18.

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (Tencent self-reported; ahead of DeepSeek V4 Pro and tying Claude Opus 5 per Winzheng, 2026-08-30)
- Toolathlon-Verified: **74.1%** (Tencent self-reported — reported to surpass Qwen 3.8 Max and GPT-5.6 Sol)
- MCP Atlas (public set): **83.7%** (Tencent self-reported; RankLLMs' independent agent pillar prints 45.2 for its Toolathlon-style aggregate)
- APEX-Agents pass@1: **37.1%**; Agents' Last Exam (ALE-CLI): **22.8%**; AutomationBench v1.0.6: **32.1%**; GDPval-AA v2 Elo (max 3000 scale): **55.9%** of scale (all Tencent self-reported)
- OSWorld (independent, RankLLMs): **49.0%**; BrowseComp (independent, RankLLMs): **45.2%** vs Tencent's own WideSearch **83.9%**
- CyberGym: **78.4%**; BankerToolBench: **78.6%** (Tencent self-reported)
- Claw-Eval / ClawProBench: **no verified public score found**
- Tau3-Banking / Tau2: **no verified public score found**
- Vendor-acknowledged weakness: the model "can spend longer than necessary reasoning through complex tasks, and it may over-verify its own work" — extra latency, tokens and tool calls in agent loops (official README "Known Limitations")

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Tencent self-reported; RankLLMs' independent GPQA proxy scores only **58.5%** — a ~34-point divergence worth treating as harness sensitivity, not a typo)
- HLE: **43.4%** no tools (text-only) / **55.4%** with tools (Tencent self-reported)
- CritPt (official): **16.9%**; MathArena Apex 2025: **74.2%**; HorizonMath pass@4: **8.8%**; ArXivMath: **66.6%**
- LCR / MLCR: **no verified public score found** — only the 1M context length is verified, not retrieval at depth
- Artificial Analysis Intelligence Index: **no verified public score found** (the AA model page returned 404 at research time)
- BenchLM overall: **60.9 / 100, rank 56 of 230** (strongest eligible category Coding at #24); RankLLMs composite **55.2 / 100, rank #14**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Domain reasoning: BioMysteryBench **71.3%**, SuperChem **66.4%**, Job Bench **61.7%**, OfficeQA Pro **66.2%**, DRACO **77.2%**, $OneMillion-Bench (with tools) **65.4%**, Workspace Bench **60.2%** (all Tencent self-reported)

Coding:

- Terminal-Bench 2.1: **85.4%** (Tencent self-reported)
- DeepSWE: **64.3** (Tencent self-reported; up from Hy3's 28.0 — the single biggest jump in the release)
- SWE-bench Verified: **77.0%** (RankLLMs independent leaderboard)
- SWE-Bench Pro (public set): **65.7%**; SWE-bench Multilingual: **82.9%**; SWE-Marathon: **31.9%**; NL2Repo: **58.9%** (Tencent self-reported)
- SWE Atlas Refactoring: **53.3** (RankLLMs)
- LiveCodeBench / SciCode / Coding Index / Vibe Code Bench: **no verified public score found**
- SkillsBench (text-only, 79-task subset): **62.9%**; Program Bench: **17.5%**; PostTrainBench V1.1: **35.6%** (Tencent self-reported)

Long context:

- **No MRCR / RULER / GraphWalks / AA-LCR value was published** for Hy4 Preview. The 1,048,576-token window is verified structurally (official model card + Gated DSA design), but retrieval accuracy at depth is unmeasured in public sources — the 95 (rather than 100) context score reflects exactly that gap.
- Efficiency note: Tencent states Hy4 Preview was used to optimise its own training/inference stack, claiming **+31.8% end-to-end inference throughput** over baseline (internal measurement, not third-party reproduced).

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`; Overall = arithmetic mean of the six. Vendor self-reported values are discounted where no independent leaderboard confirms them.

- **Tool use: 87/100.** TB 2.1 85.4% and Toolathlon-Verified 74.1% plus MCP Atlas 83.7% reach the frontier reference (TB2.1 ~88%+, GDPval ~1750+) and sit far above the mid band; capped at 87 rather than 90+ because every headline number is Tencent self-reported (independent RankLLMs puts the agent pillar at 45.2, OSWorld 49.0, BrowseComp 45.2), no Claw-Eval or Tau3 exists, and the vendor itself flags over-verification inflating tool-call volume.
- **Reasoning: 87/100.** GPQA Diamond 92.3% clears the 90%+ frontier reference and HLE 43.4% / 55.4% with tools clears the 40%+ reference, with MathArena Apex 74.2% backing it up; held below 90 by the 34-point gap to RankLLMs' independent GPQA proxy (58.5%), HorizonMath pass@4 of only 8.8%, no AA Intelligence Index and no MRCR/LCR reasoning evidence.
- **Context window: 95/100.** 1,048,576 tokens sits in the ≥1M tier (95–100) and the window is confirmed by the official card and the Gated DSA design; it takes the tier floor of 95 rather than 100 because no ≥512K retrieval benchmark (the 98% recall requirement) has been published.
- **Multimodal: 15/100.** Text-only: the preview explicitly ships without visual input, and there is no audio/video/PDF input or non-text output — the text-only band (10–20).
- **Coding: 84/100.** TB 2.1 85.4% meets the frontier terminal reference, DeepSWE 64.3 is a 36-point jump over Hy3, and SWE-bench Pro 65.7% / Multilingual 82.9% / SWE-bench Verified 77.0% are strong; capped by DeepSWE still under the 74% frontier ref, SWE-bench Verified under Claude Opus 4.8-class ~81%, and no SciCode, LiveCodeBench or Coding Index result.
- **Cost efficiency: 90/100.** $0.834 in / $2.501 out is slightly above the ~$0.60/$2.20 ≈ 92 anchor and well below $1.25/$4.25 ≈ 88, so ~90 is the right band, helped by a $0.042 cache-hit rate (≈95% discount) and by Apache 2.0 self-hosting at no per-token cost; capped by the paid-only API and by the multi-node GPU footprint needed to self-host 770B at usable speed.
- **Overall Score: 74/100.** (87 + 87 + 95 + 15 + 84 + 90) / 6 = 76.3 → **76**. Best fit: self-hosted or TokenHub-routed long-horizon coding/agent work that genuinely needs a 1M-token window and permissive licensing, and can absorb preview-grade latency and over-verification; not a fit for image/audio input or cost-sensitive high-volume text.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-18
- Method: Public internet research from zero — `Tencent-Hunyuan/Hy4-preview` GitHub model card, Tencent launch coverage (Winzheng 2026-08-30), ToolWorthy release review, Traictory model catalogue, RankLLMs leaderboard and BenchLM model record. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.md`, using the same headings.