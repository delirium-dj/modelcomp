# Hy4 — findings by Space Bunny Alpha

- Source: Tencent Hunyuan (`hy4-preview` / `tencent/hy4`; high reasoning)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 preview
- **Short description:** Tencent's open-weight MoE flagship for productivity, long-horizon coding, scientific research, and tool-using agents.
- **Provider / access:** Hugging Face `tencent/Hy4-preview`; Tencent Cloud TokenHub / OpenRouter preview routes; local OpenAI-compatible vLLM and SGLang serving. No OpenCode Zen free ID.
- **Release / knowledge:** Tencent's repository and BenchLM list 2026-08-28; knowledge cutoff not disclosed.
- **IDs:** `hy4-preview`; `tencent/hy4`; `tencent/Hy4-preview`; `tencent/Hy4-preview-FP8`.
- **Context window:** 1M total; the API limit is documented as 960K input / 64K output (Tencent TokenHub model list and FAQ, cross-checked against the official repository's 1M specification).
- **Modalities:** Text input/output; reasoning (high default, no-think option) and tool calls/function calling supported. No image, audio, or video input is verified for this checkpoint.
- **Pricing (as of 2026-09-24):** Apache-2.0 open weights; no fixed first-party API token price published. Self-hosting cost is workload-dependent; launch product promotions are not treated as permanent pricing.
- **Architecture:** MoE, 770B total / 49B active backbone parameters, plus 10B MTP (0.7B active); 78 layers, 256 routed experts plus shared expert, top-8 routing; Apache-2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (Tencent official model-card eval; Claude Code harness, up to 500 turns, 12-hour timeout)
- Toolathlon Verified: **74.1%** (Tencent official model-card eval)
- Terminal-Bench 2.1 (Vals AI): **55.1%** (BenchLM, Vals AI leaderboard; different harness)
- MCP-Atlas: **83.7%** (Tencent official benchmark appendix)
- GDPval-AA v2: **1678 Elo** (Tencent official benchmark appendix)
- BankerToolBench: **78.6%**; skillsBench: **62.9%** (Tencent official benchmark appendix/model card)
- APEX-Agents: **37.1%**; Agents' Last Exam: **22.8%**; CyberGym: **78.4%** (Tencent official benchmark appendix)
- Tau3-Banking, Claw-Eval, and ClawProBench: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Tencent official model-card eval)
- HLE without tools: **43.4%**; HLE with tools: **55.4%** (Tencent official model card; text-only configurations kept separate)
- WideResearch: **83.9%**; CritPt: **16.9%** (Tencent official benchmark appendix)
- OfficeQA Pro: **66.2%**; SUPERChem: **66.4%**; ArXivMath: **66.6%** (Tencent official benchmark appendix)
- LCR/MLCR, hallucination metrics, and Artificial Analysis Intelligence Index: **no verified public exact value found**

Coding:

- SWE-bench Pro: **65.7%** (Tencent official model-card eval)
- SWE-bench Multilingual resolved: **82.9%** (Tencent official model-card eval)
- DeepSWE: **64.3%** (Tencent official model-card eval)
- SWE Atlas Codebase QnA: **64.0%** (Tencent official benchmark appendix)
- NL2Repo: **58.9%**; ProgramBench: **17.5%**; SWE-Marathon: **31.9%** (Tencent official benchmark appendix)
- SWE-bench Verified, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- **1M total / 960K input / 64K output** is verified by Tencent's API limits and official repository. No independent MRCR, RULER, or GraphWalks retrieval score was found.

Sources consulted: [Tencent Hy4 preview repository](https://github.com/Tencent-Hunyuan/Hy4-preview), [Hy4 preview Hugging Face model card](https://huggingface.co/tencent/Hy4-preview), and [BenchLM Hy4 preview](https://benchlm.ai/models/hy4-preview), accessed 2026-09-24. Provider-exact, Vals AI, and Tencent appendix values are labeled separately.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 85.4%, Toolathlon 74.1%, MCP-Atlas 83.7%, GDPval 1678, and BankerToolBench 78.6% provide strong open-agent evidence; missing Tau3/Claw values cap the score.
- **Reasoning: 87/100.** GPQA 92.3%, HLE with tools 55.4%, WideResearch 83.9%, and strong science/math proxy results support high reasoning; CritPt 16.9% and missing LCR/AA values limit certainty.
- **Context window: 97/100.** The verified 1M/960K-in/64K-out API window is in the top tier; no public retrieval-at-length score is available.
- **Multimodal: 15/100.** The reviewed official sources describe text input/output only; no image/audio/video capability is claimed.
- **Coding: 87/100.** SWE-bench Pro 65.7%, SWE-Multilingual 82.9%, DeepSWE 64.3%, and SWE Atlas 64.0% support strong coding; ProgramBench 17.5% and missing LiveCodeBench/SWE-Verified values cap confidence.
- **Cost efficiency: 90/100.** Apache-2.0 open weights and local deployment avoid a fixed vendor token price, but 770B-scale infrastructure is costly.
- **Overall Score: 75.0/100.** (89 + 87 + 97 + 15 + 87) / 5 = 75.0. Best fit: self-hosted text coding, research, and agent workloads where open weights and 1M context matter; pair with a multimodal model for vision.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Tencent's official repository/model card and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
