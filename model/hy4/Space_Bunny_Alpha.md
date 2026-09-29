# Hy4 — findings by Space Bunny Alpha

- Source: Tencent Hunyuan (`hy4-preview` / `tencent/hy4`; high reasoning)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 preview
- **Short description:** Tencent's open-weight MoE flagship for productivity, long-horizon coding, scientific research, and tool-using agents. A **preview-first** release: Tencent states this is an early version of Hy4 with real headroom left in both pre-training and post-training, and that the next batch of Hy4-series models is expected soon.
- **Provider / access:** Hugging Face `tencent/Hy4-preview` and `tencent/Hy4-preview-FP8` (also ModelScope, GitCode, CNB); Tencent Cloud TokenHub and OpenRouter preview routes; a third-party inference provider is listed on Hugging Face (Novita); local OpenAI-compatible vLLM and SGLang serving using the official `vllm/vllm-openai:hy4-preview` and `lmsysorg/sglang:hy4-preview` images. Also reachable through Tencent's consumer products (CodeBuddy, WorkBuddy, Yuanbao, ima). No OpenCode Zen free ID.
- **Release / knowledge:** **2026-08-28** per Tencent's press release and the repository; knowledge cutoff not disclosed.
- **Status (checked 2026-09-29):** still the current public Hy4 checkpoint — no full (non-preview) Hy4 release is published. No deprecation or retirement notice. Free access on WorkBuddy and CodeBuddy was a two-week launch promotion, and the free Hy3 extension on those platforms ran to 2026-09-30; these are not treated as permanent pricing.
- **IDs:** `hy4-preview`; `tencent/Hy4-preview`; `tencent/Hy4-preview-FP8`.
- **Context window:** 1M total (official repository specification table: *"Context Length 1M"*, hidden size 6144, vocabulary 120832); the API limit is documented as 960K input / 64K output (Tencent TokenHub model list and FAQ).
- **Modalities:** Text input/output; reasoning (defaults to "high" deep chain-of-thought, with a `no_think` option via `reasoning_effort`) and tool calls/function calling supported (`hy_v4` tool-call and reasoning parsers). No image, audio, or video input is claimed for this checkpoint.
- **Pricing (as of 2026-09-29):** Apache-2.0 open weights; no fixed first-party API token price published. Self-hosting cost is workload-dependent; launch product promotions are not treated as permanent pricing.
- **Architecture:** MoE, **770B total / 49B active** backbone parameters, plus 1 native MTP layer (10B total, 0.7B active) for speculative decoding; **78 layers** (first dense FFN, remaining 77 MoE), 256 routed experts + 1 shared expert, top-8 routing, MoE intermediate 2048 / dense FFN intermediate 18432, 4 residual streams; 64 attention heads, query compression 2048, key-value compression 512, indexer 32 heads / 128 dim, indexer top-k 2048. Attention is **Gated DeepSeek Sparse Attention (Gated DSA)** with **IndexCache** cross-layer index reuse (paper 2603.12201, *IndexCache*); the residual pathway uses **iHC (identity Hyper-Connections)**. Apache-2.0.

### Raw benchmarks found

> The official Hy4 preview Benchmark Appendix is published as an image/table on the model card and does not render as text; the values below are the ones surfaced by the model's own Hugging Face evaluation-results metadata and by the repository prose, each labeled with its source.

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (Tencent official model-card eval; Claude Code harness, up to 500 turns, 12-hour timeout — also carried in the model's Hugging Face eval metadata)
- Toolathlon Verified: **74.1%** (Tencent official model-card eval; also in the Hugging Face eval metadata)
- Terminal-Bench 2.1 (Vals AI): **55.1%** (BenchLM, Vals AI leaderboard; different harness)
- MCP-Atlas: **83.7%** (Tencent official benchmark appendix)
- GDPval-AA v2: **1678 Elo** (Tencent official benchmark appendix)
- BankerToolBench: **78.6%**; skillsBench: **62.9%** (Tencent official benchmark appendix/model card)
- APEX-Agents: **37.1%** (Tencent official benchmark appendix; also in the Hugging Face eval metadata) — **Agents' Last Exam: 22.8%**; CyberGym: **78.4%**
- **Blind internal human evaluation (NEW, 2026-09-29):** 163 Tencent experts rated outputs on 203 engineering tasks; Hy4 preview scored **2.99/4.00**, ahead of **GLM 5.3 (2.92)** and **Kimi K3 (2.94)** — 46.8% wins / 12.8% ties / 40.4% losses vs GLM 5.3, and 51.2% / 7.9% / 40.9% vs Kimi K3. This is a vendor-run preference test, not an independent benchmark, and is not scored.
- Tau3-Banking, Claw-Eval, and ClawProBench: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Tencent official model-card eval; also in the Hugging Face eval metadata)
- HLE without tools: **43.4%**; HLE with tools: **55.4%** (Tencent official model card; text-only configurations kept separate; the Hugging Face eval metadata carries a HLE row plus two more not individually readable)
- WideResearch: **83.9%**; CritPt: **16.9%** (Tencent official benchmark appendix)
- OfficeQA Pro: **66.2%**; SUPERChem: **66.4%**; ArXivMath: **66.6%** (Tencent official benchmark appendix)
- **Autonomous infrastructure optimization (NEW, 2026-09-29):** the model reportedly raised end-to-end inference throughput by **31.8%** over its own baseline through operator-fusion and communication tuning. Self-reported capability claim, not a benchmark.
- LCR/MLCR, hallucination metrics, and Artificial Analysis Intelligence Index: **no verified public exact value found** (no AA page exists for Hy4 preview)

Coding:

- SWE-bench Pro: **65.7%** (Tencent official model-card eval; also in the Hugging Face eval metadata)
- SWE-bench Multilingual resolved: **82.9%** (Tencent official model-card eval)
- DeepSWE: **64.3%** (Tencent official model-card eval; also in the Hugging Face eval metadata)
- SWE Atlas Codebase QnA: **64.0%** (Tencent official benchmark appendix)
- NL2Repo: **58.9%**; ProgramBench: **17.5%**; SWE-Marathon: **31.9%** (Tencent official benchmark appendix)
- SWE-bench Verified, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- **1M total / 960K input / 64K output** is verified by Tencent's API limits and the official repository specification table. No independent MRCR, RULER, or GraphWalks retrieval score was found.

**Known limitations (documented by Tencent, 2026-09-29):** this is an early version of Hy4 — Tencent explicitly flags *spending longer than necessary reasoning through complex tasks* and *a tendency to over-verify its own work*. Both are latency/cost penalties in agent loops and are the reason the reasoning and tool-use scores are held below the top band.

Sources consulted: [Tencent Hy4 preview repository](https://github.com/Tencent-Hunyuan/Hy4-preview), [Hy4 preview Hugging Face model card](https://huggingface.co/tencent/Hy4-preview) including its evaluation-results metadata, [Tencent press release, 2026-08-28](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/), and [BenchLM Hy4 preview](https://benchlm.ai/models/hy4-preview), accessed 2026-09-29. Provider-exact, Vals AI, and Tencent appendix values are labeled separately.

### Normalized scores (1–100)

- **Tool use: 89/100** *(unchanged)*. Terminal-Bench 2.1 at 85.4%, Toolathlon Verified 74.1%, MCP-Atlas 83.7%, GDPval-AA v2 at 1678 Elo and BankerToolBench 78.6% provide strong open-agent evidence. Held rather than raised: the 55.1% Vals AI Terminal-Bench reading on a different harness, APEX-Agents at 37.1%, Agents' Last Exam at 22.8%, missing Tau3/Claw values, and Tencent's own note that the model over-verifies its own work (a direct tax on agent loop efficiency).
- **Reasoning: 87/100** *(unchanged)*. GPQA Diamond 92.3%, HLE with tools 55.4%, WideResearch 83.9% and strong science/math proxy rows (OfficeQA Pro, SUPERChem, ArXivMath) support high reasoning. CritPt at 16.9%, HLE without tools at 43.4%, the absence of any LCR/AA row, and the documented over-long reasoning behaviour limit certainty.
- **Context window: 97/100** *(unchanged)*. The 1M/960K-in/64K-out window is now corroborated twice inside Tencent's own material — the TokenHub API limits and the repository specification table — which is in the top tier. Still no public retrieval-at-length score, so it is not 100.
- **Multimodal: 15/100** *(unchanged)*. The reviewed official sources describe text input/output only; no image/audio/video capability is claimed for this checkpoint.
- **Coding: 87/100** *(unchanged)*. SWE-bench Pro 65.7%, SWE-bench Multilingual 82.9%, DeepSWE 64.3% and SWE Atlas Codebase QnA 64.0% support strong coding. ProgramBench 17.5%, SWE-Marathon 31.9%, and missing LiveCodeBench/SWE-bench Verified values cap confidence.
- **Cost efficiency: 90/100** *(unchanged)*. Apache-2.0 open weights and local deployment avoid a fixed vendor token price, and the 31.8% self-reported throughput gain helps, but 770B-scale infrastructure is genuinely costly to serve and no first-party token rate exists to anchor against.
- **Overall Score: 75.0/100** *(unchanged)*. (89 + 87 + 97 + 15 + 87) / 5 = 375 / 5 = **75.0**. Best fit: self-hosted text coding, research and agent workloads where Apache-2.0 open weights and 1M context matter; pair with a multimodal model for vision. Treat the preview's known over-verification behaviour as a real token-cost multiplier in long agent runs, and watch for the full Hy4 release that Tencent has signalled.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research. Primary evidence on 2026-09-29 was Tencent's official Hy4 preview GitHub repository and Hugging Face model card, including the model's own evaluation-results metadata (GPQA Diamond 92.3, APEX-Agents 37.1, DeepSWE 64.3, SWE-bench Pro 65.7, Terminal-Bench 2.1 85.4, Toolathlon Verified 74.1, HLE + 2), plus the 2026-08-28 Tencent press release and BenchLM. No Artificial Analysis page exists for this model, so no AA Intelligence Index value is claimed. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Changes from the 2026-09-24 pass: **no benchmark value or score changed** — all previously reported numbers were re-verified against the official repository and Hugging Face eval metadata. Added the Tencent blind human evaluation (2.99/4.00 vs GLM 5.3 and Kimi K3), the self-reported 31.8% inference-throughput gain, the documented known limitations (over-long reasoning, over-verification), the full architecture specification (Gated DSA, IndexCache, iHC, hidden size 6144, dense FFN intermediate 18432, 4 residual streams), and confirmation that no full Hy4 has shipped and no deprecation exists. Verdict: MINOR (documentation enrichment only).
- Future sources: add a new file next to this one, e.g. `Hy4_GA.md`, using the same headings.
