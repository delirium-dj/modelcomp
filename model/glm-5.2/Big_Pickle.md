# GLM-5.2 — findings by Big Pickle

- Source: Z.ai / Zhipu AI (`glm-5.2`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Z.ai's open-weight flagship built for long-horizon agentic tasks, delivering a claimed "solid" 1M-token lossless context for project-scale engineering — the strongest open-source showing on standard and long-horizon coding benchmarks of its release window.
- **Provider / access:** Z.ai API (`glm-5.2`, OpenAI-compatible; multimodal endpoint carries full features), OpenRouter (`z-ai/glm-5.2`), Fireworks/Together/Novita/FriendliAI/DeepInfra, and self-hosted BF16/FP8/NVFP4 weights on Hugging Face (`zai-org/GLM-5.2`) under **MIT license**. Day-one support in Claude Code, Cline, OpenCode, Roo Code, Goose, Crush, OpenClaw, Kilo Code; core engine of ZCode 3.0.
- **Release / knowledge:** Released 2026-06-13/16 (weights and API mid-June 2026), one day after US Commerce suspended Claude Fable 5 access; replaced by GLM-5.3 at the same price on 2026-08-18.
- **IDs:** `glm-5.2` / `glm-5.2[1m]` / `zai-org/GLM-5.2` (proprietary weights, open under MIT)
- **Context window:** 1,048,576 tokens (1M); max output 131,072 tokens (128K).
- **Modalities:** text input; text output (multilingual).
- **Pricing (as of 2026-09-20):** $1.40 in / $4.40 out per 1M tokens on Z.ai API ($0.26 cached input); DeepInfra lists $0.75/$2.40; ~1/6th of GPT-5.5 cost by VentureBeat estimate. GLM Coding Plan flat-rate tiers (~$10-80/mo).
- **Architecture:** Mixture-of-Experts, ~753B total / ~40B active (744B-A40B per Z.ai); 256 routed experts (top-8) + 1 shared, 78 layers; DeepSeek Sparse Attention plus Z.ai's IndexShare (indexer reused across sparse layers, 2.9× FLOP reduction at 1M); improved MTP speculative-decoding layer (+20% acceptance); GQA; trained on Huawei Ascend 910B (MindSpore). Thinking effort: High / Max (default Max) or disabled.

### Raw benchmarks found

Reasoning / knowledge (all vendor-reported by Z.ai):

- GPQA-Diamond: **91.2** (vs GLM-5.1 86.2).
- HLE: **40.5** text-only / **54.7** with tools (vs GLM-5.1 31.0/52.3).
- CritPt: **20.9** (vs GLM-5.1 4.6).
- AIME 2026: **99.2**; HMMT Nov 2025 94.4; HMMT Feb 2026 92.5; IMOAnswerBench 91.0.
- BridgeBench Reasoning: **42.8** (#1, third-party BridgeMind, reported 300 tok/s).

Coding (vendor-reported unless noted):

- SWE-bench Pro: **62.1** (GLM-5.1 58.4; Claude Opus 4.8 69.2, GPT-5.5 58.6).
- Terminal-Bench 2.1 Terminus-2: **81.0** (best reported harness 82.7 with Claude Code; Opus 4.8 85.0).
- DeepSWE: **46.2** (Opus 4.8 58.0, GPT-5.5 70.0); NL2Repo 48.9; ProgramBench 63.7.
- Long-horizon: FrontierSWE dominance **74.4** (trails Opus 4.8 75.1 by ~1%, #1 open); PostTrainBench **34.3**; SWE-Marathon **13.0** (Opus 4.8 26.0).

Agent / tool use (vendor-reported):

- MCP-Atlas public set: **76.8**; Tool-Decathlon: **48.2**. Native function calling, structured JSON output, MCP integration, context caching supported.

Long context:

- 1M native window with IndexShare/DSA compute reduction; MRCR-style retrieval score: **no verified public score found** (vendor "solid/lossless 1M" claim).

### Normalized scores (1–100)

- **Tool use: 73/100.** MCP-Atlas 76.8 with day-one integration across eight major coding agents is a strong agentic story, and AA τ²-bench 99.1% is elite; AA Agentic Index 39.4, APEX-Agents 33.7 and ResearchClawBench 20.7 temper the ceiling, and TB2.1 Vals 67.8 sits below the vendor's own 81.0 harness.
- **Reasoning: 72/100.** AA-GPQA Diamond 89.5 (Vals 85.6, MMLU-Pro 86.7), AA-HLE 41.1 and AIME 2026 99.2 are strong; but text-only HLE 40.5, CritPt 20.9, and AA Intelligence Index 33.7 (corrected from ~51, see Re-verification) are genuinely mid.
- **Context window: 82/100.** A native 1M window with IndexShare-accelerated sparse attention and 128K output plus an independent AA-LCR 78.3% — a real, now-measured long-context row.
- **Multimodal: 50/100.** Text-in / text-out only — no vision, audio, or generation capabilities (Design Arena row is HTML/web-design, not parametric vision).
- **Coding: 70/100.** Strong open-source standard-coding claim (SWE-bench Verified 82.8% Vals, SWE-bench Pro 62.1%, Terminal-Bench 2.1 81.0/67.8, AA Coding Index 68.8, CursorBench 3.2 55.0%), but DeepSWE 46.2 and NL2Repo 48.9 trail the closed frontier, and core announcement figures remain vendor-run.
- **Cost efficiency: 85/100.** $1.40/$4.40 per 1M (or $0.75/$2.40 via DeepInfra), ~1/6-1/10th of US frontier pricing, MIT open weights, cheap cached input, MTP-accelerated decoding — outstanding ROI for long-horizon agents; note GLM-5.3 replaced it at identical pricing on 2026-08-18.
- **Overall Score: 69/100.** Mean of the five quality dims (73+72+82+50+70)/5 = 69.4 → 69 (raised from 67 on 2026-10-08, see Re-verification). A text-only, MIT-licensed long-horizon agent powerhouse — not frontier, but the most cost-justified open-weights agent stack until GLM-5.3 sample bandwidth arrives.

---

## Re-verification — 2026-10-08 (18 days after original)

Re-run adds independent verification for the previously vendor-only figures (BenchLM profile, updated 2026-10-07, 43/623 covered; AA; Vals; Cursor/OpenHarmony rankings).

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 70 | 73 | +3 |
| Reasoning | 70 | 72 | +2 |
| Context window | 80 | 82 | +2 |
| Multimodal | 50 | 50 | — |
| Coding | 65 | 70 | +5 |
| Cost efficiency | 85 | 85 | — |
| **Overall** | **67** | **69** | **+2** |

New and corrected data:

- **AA Intelligence Index correction:** the original report's "~51" was wrong; the current AA II is **33.7** (BenchLM). This is the single most important correction — it realigns GLM-5.2 solidly mid-pack on composite intelligence (contrast GLM-5.3's 44.8, top-tier ~60+).
- **Coding independently confirmed high:** SWE-bench Verified **82.8%** (Vals), AA Coding Index **68.8%**, AA-SciCode 51.2%, LiveCodeBench (Vals) 69.5%, CursorBench 3.2 **55.0%**, OpenHarmony Bench 58.4%, PostTrainBench v1.1 31.7% — plus the verified vendor rows (SWE-bench Pro 62.1, NL2Repo 48.9, ProgramBench 63.7, TB2.1 81.0).
- **Agentic rows filled:** AA τ²-bench **99.1%** (elite-class double-turn), AA Agentic Index 39.4%, AA ITBench 42.7%, APEX-Agents 33.7%, ResearchClawBench 20.7%, GDPval-AA 1418 (43.7%), MCP Atlas 76.8, Toolathlon 48.2; TB2.1 (Vals) 67.8% shows the harness gap vs Z.ai's own 81.0%.
- **Long context now measured:** AA-LCR **78.3%** — a genuine independent long-context-reasoning figure (above GLM-5.3-Flash's 77.9, below flagship GLM-5.3's 79.7).
- **Knowledge rows confirmed:** GPQA Diamond 91.2 (Z.ai) with AA cross-check 89.5 (Vals 85.6), MMLU-Pro (Vals) 86.7, AA-HLE 41.1, HLE 54.7 w-tools / 40.5 text-only, CritPt 20.9, AA-Omniscience Index 4.4 (accuracy 24.3, hallucination 26.3), math set (AIME26 99.2, HMMT Nov 94.4, HMMT Feb 92.5, IMOAnswerBench 91.0).
- **Positioning:** BenchLM **61.56, #47/887** — clearly below GLM-5.3 (68.71) as expected after the 08-18 replacement; pricing unchanged ($1.40/$4.40; DeepInfra $0.75/$2.40).

Gaps still open after re-run: MRCR-style 1M retrieval row, DeepSWE external reproducibility, τ³/enterprise long-horizon harness scores other than ITBench, first-party FrontierSWE dominance replication.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (z.ai blog and docs, Hugging Face model card, github zai-org, benchr.org review, llm-stats.com, awesomeagents.ai, theairankings.com, aicybr.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.