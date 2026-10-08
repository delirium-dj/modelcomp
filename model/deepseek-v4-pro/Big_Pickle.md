# DeepSeek V4 Pro — findings by Big Pickle

- Source: DeepSeek (`DeepSeek-V4-Pro`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (a.k.a. DeepSeek-V4-Pro, official 0813 refresh)
- **Short description:** DeepSeek's flagship 1.6T-total/49B-active open-weights MoE for advanced reasoning, software engineering and long-running agents, with hybrid thinking/non-thinking modes and a 1M-token default window.
- **Provider / access:** DeepSeek official API (`deepseek-v4-pro`), DeepInfra, Lightning AI, and OpenCode Zen (`opencode/deepseek-v4-pro`); weights on Hugging Face under MIT. Chat Completions-compatible.
- **Release / knowledge:** Preview released 2026-04-24; official refresh (0813) August 2026. 33T pre-training tokens. Knowledge cutoff not documented.
- **IDs:** `deepseek-v4-pro` / `opencode/deepseek-v4-pro` (paid on Zen; MIT open weights make self-hosting/licensing trivially free).
- **Context window:** 1,000,000 tokens total, up to 384,000 max output (official API); verified via DeepSeek card/configs — this supersedes any 128K folder-stub notes.
- **Modalities:** Text in/out only; thinking/non-thinking modes (reasoning_effort selectable), persistent reasoning across tool calls, tool calling, JSON/function workflows.
- **Pricing (as of 2026-09-23):** DeepSeek official list ~$1.74 in / $3.48 out per 1M (cache hit $0.145/$0.044); launch promo was $0.435/$0.87. DeepInfra ~$1.04–$2.08 in / $2.08–$3.90 out by tier. Zen "standard pricing", exact rate not verified.
- **Architecture:** 1.6T total / 49B active MoE, hybrid Compressed Sparse Attention (CSA) + Heavily Compressed Attention (HCA) — 27% of V3.2 FLOPs and 10% of KV cache at 1M context; FP4 experts + FP8 base. MIT license, 865 GB on disk.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **67.9%** (official, reasoning_effort=max; vs Claude Opus 4.6 65.4%)
- Terminal-Bench 2.1: **87.9%** (official Aug 13, 2026 agent leaderboard — Pro 0813; preview was 72.1)
- GDPval-AA: **1554** (leads open-weights per DeepInfra overview, ahead of GLM-5.1 1535 and MiniMax-M2.7 1514)
- Toolathon (multi-tool): **74.1%** (official 0813; preview 55.9)
- Cybergym: **83.3%**; DSBench-FullStack **71.1%**; DSBench-Hard **67.2%** (official 0813 agent benchmark release)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (official, reasoning_effort=max)
- HLE (no tools): **37.7%** (official; vs Gemini-3.1-Pro High 44.4, Claude Opus 4.6 40.0)
- MMLU-Pro: **87.5%**; MMLU 5-shot **90.1%**
- HMMT 2026: **95.2%**; IMOAnswerBench **89.8%**; SimpleQA-Verified **57.9%**
- Artificial Analysis Intelligence Index: **52** (#2 among open-weights reasoning models per DeepInfra overview; leading open-weight = Kimi K2.6 at 54 in that snapshot)
- AA-Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **80.6%** (vs Claude Opus 4.6 80.8%, Gemini 3.1 Pro 80.6%)
- SWE-Bench Pro: **55.4%** (official)
- LiveCodeBench: **93.5%** (pass@1, Pro-Max)
- Codeforces rating: **3206** (#1, ahead of GPT-5.4 xHigh 3168)
- DeepSWE (SWE Bug Fix): **62.7%** (official 0813; preview 12.8)

Long context:

- MRCR 1M: **83.5** (retrieval accuracy across full 1M window; Claude Opus 4.6 leads at 92.9)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 87.9% (0813), Toolathlon-Verified 74.1%, MCP Atlas 73.6%, τ²-bench 96.2% and CyberGym 83.3% are near-frontier; AutomationBench 31.8%, APEX-Agents 24.3% and AA Agentic Index 49.6% are the honest hard-cuts.
- **Reasoning: 88/100.** GPQA 90.1% is frontier-tier, AA Index 53.2 leads open weights, ARC-AGI-1 90.0%/ARC-AGI-2 61.3% verified and MMLU-Pro 87.5%; HLE no-tools 37.7% (HLE-with-tools 60.0%) trails the 40%+ frontier ref, capping the score.
- **Context window: 90/100.** 1M native window with verified MRCR-1M 83.5 retrieval and CorpusQA-1M 62.0%; AA-LCR 80.3%; under the ≥98% threshold at 512K that would earn 100.
- **Multimodal: 15/100.** Text in/out only — no image/audio/video input or output.
- **Coding: 86/100.** SWE-bench Verified 80.6% (Vals 96.4), LiveCodeBench 93.5% and Codeforces 3206 are elite; AA Coding Index 68.8, SWE-bench Pro 55.4%, Vibe Code Bench 49.9% and DeepSWE 62.7% temper the 90s claim.
- **Cost efficiency: 82/100.** Open weights (MIT) are free to self-host, and the ~$1.74/$3.48 list is mid-price with strong cache prices; below the $0.875 promo or V4-Flash's $0.14/$0.28.
- **Overall Score: 73/100.** (88 + 88 + 90 + 15 + 86) / 5 = 73.4 → 73 (lowered from 74 on 2026-10-08, see Re-verification). Best-fit: frontier-adjacent open-weights reasoning/coding agent for hard SWE and agentic pipelines; text-only, so pair with an omni model for multimodal input.

---

## Re-verification — 2026-10-08 (15 days after original)

Re-run adds 25+ primary rows (BenchLM profile 64.02, #38/887, 60/623, updated 2026-10-07) — several hard-cut corners surface that lower the Overall by one point.

| Dimension | 2026-09-23 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 90 | 88 | −2 |
| Reasoning | 88 | 88 | — |
| Context window | 90 | 90 | — |
| Multimodal | 15 | 15 | — |
| Coding | 86 | 86 | — |
| Cost efficiency | 82 | 82 | — |
| **Overall** | **74** | **73** | **−1** |

New and corrected data:

- **Tool-use corners now published (the original "capped, unpublished" items):** AutomationBench **31.8%**, APEX-Agents-AA **24.3%**, AA Agentic Index 49.6%, AA EnterpriseOps-Gym 49.6%, ALE 25.7%; alongside strong confirmed rows TB2.1 87.9%, Toolathlon-Verified 74.1% (vs raw Toolathlon 51.8%), MCP Atlas **73.6%**, τ²-bench **96.2%**, BrowseComp **83.4%**, CyberGym 83.3%, GDPval-AA 54.5%. Tool 90 → 88.
- **Coding stack expanded:** AA Coding Index **68.8** (not previously listed), AA-SciCode 51.0%, NL2Repo 61.5%, SWE Multilingual 76.2%, Vibe Code Bench **49.9%** (a real IDE-workflow weak spot), OpenHarmony 59.0%; SWE-bench (Vals) **96.4%** is the standout. LCB 93.5 / Codeforces 3206 / SWE-V 80.6 / DeepSWE 62.7 / DSBench 71.1-67.2 all re-confirmed.
- **Reasoning/knowledge growth:** AA Intelligence Index now **53.2** (AA page; the "52 (DeepInfra snapshot)" figure is superseded), AA-GPQA 92.8, AA-HLE 41.0, ARC-AGI-1 **90.0%** / ARC-AGI-2 **61.3%** (ARC verified), HLE rows split as HLE-with-tools **60.0%** and no-tools **37.7%**, MMLU-Pro 87.5, Chinese-SimpleQA 84.4, AA-IFBench 76.5, HMMT 95.2, IMOAnswerBench 89.8, Apex 38.3 / Apex-Shortlist 90.2.
- **Long-context deepened:** MRCR-1M 83.5 confirmed and now paired with **CorpusQA-1M 62.0%** and AA-LCR 80.3%.
- **Hallucination flag:** AA-Omniscience Index **0.8** with **94.1%** hallucination rate — worst-in-class hall on that eval despite high GPQA; surfaces honest limits for factual pipelines.
- **GDPval note:** AA-normalized 54.5% (the 1554/1306 absolute figure varies by eval build).
- **Lineage:** V4.1 Flash (67.88, #31) exists; V4 Pro 0813 pricing/model card unchanged.

Gaps still open after re-run: Claw-Eval row, τ³/SWE-Marathon, FrontierMath-v2, official MRCR-512K intermediate, DP-exact POC evaluation.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-08 (re-verified; original research 2026-09-23)
- Method: public internet research (DeepSeek official releases + technical report + agent update, DeepInfra/Lightning overviews, BenchLM, AA, Vals, ARC Prize, OpenHarmony); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.