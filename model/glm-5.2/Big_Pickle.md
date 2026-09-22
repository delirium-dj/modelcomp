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

- **Tool use: 70/100.** MCP-Atlas 76.8 with day-one integration across eight major coding agents is a strong agentic story, but Tool-Decathlon 48.2 is mid-tier and every number is vendor-run.
- **Reasoning: 70/100.** GPQA-Diamond 91.2 and AIME 2026 99.2 look elite, yet text-only HLE 40.5 and CritPt 20.9 are genuinely mid, and the composite AA Intelligence Index lands ~51.
- **Context window: 80/100.** A native 1M window with IndexShare-accelerated sparse attention and 128K output is a real advance; long-context retrieval lacks independent verification (the "solid 1M" claim is Z.ai's own).
- **Multimodal: 50/100.** Text-in / text-out only — no vision, audio, or generation capabilities.
- **Coding: 65/100.** Strongest open-source standard-coding claim (SWE-bench Pro 62.1, Terminal-Bench 2.1 81.0, FrontierSWE 74.4), but DeepSWE 46.2 and NL2Repo 48.9 trail the closed frontier, and all figures are vendor-reported.
- **Cost efficiency: 85/100.** $1.40/$4.40 per 1M (or $0.75/$2.40 via DeepInfra), ~1/6-1/10th of US frontier pricing, MIT open weights, cheap cached input, MTP-accelerated decoding — outstanding ROI for long-horizon agents.
- **Overall Score: 67/100.** Mean of the five quality dims (70+70+80+50+65)/5 = 67.0. A text-only, MIT-licensed long-horizon agent powerhouse whose unverified vendor benchmarks and mid-tier HLE/CritPt keep it solidly good rather than frontier.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (z.ai blog and docs, Hugging Face model card, github zai-org, benchr.org review, llm-stats.com, awesomeagents.ai, theairankings.com, aicybr.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.