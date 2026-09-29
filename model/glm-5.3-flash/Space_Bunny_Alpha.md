# GLM 5.3 Flash — findings by Space Bunny Alpha

- Source: Z.ai (`glm-5.3-flash`; reasoning)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.ai's open-weight MoE model for low-cost, multimodal, tool-using coding and agent workflows with 1M context. **Not deprecated** as of 2026-09-29 — it is the third-strongest open-weights model on the Artificial Analysis Intelligence Index and sits on the intelligence-vs-cost-per-task Pareto frontier.
- **Provider / access:** Z.ai API (`glm-5.3-flash`), listed by Artificial Analysis as reachable through **20 API providers**; Hugging Face `zai-org/GLM-5.3-Flash`; OpenCode Zen route `opencode/glm-5.3-flash`.
- **Release / knowledge:** Released 2026-08-26 (Artificial Analysis, confirmed 2026-09-29; previously listed as August 26, 2026). Hugging Face metadata shows repository creation on 2026-08-25. No reliable knowledge cutoff was shown.
- **IDs:** `glm-5.3-flash`; `zai-org/GLM-5.3-Flash`.
- **Context window:** 1M tokens (Artificial Analysis and BenchLM). Exact output limit was not shown.
- **Modalities:** Text and image input; text output; reasoning and tool calls supported. The model card's chat template also exposes image/video/audio tokens, but the evaluated Artificial Analysis page explicitly lists text/image input only.
- **Pricing (as of 2026-09-29):** Artificial Analysis confirms **$0.15 per 1M input and $0.50 per 1M output**, with an **83% cache discount** and a blended $0.10 per 1M; it costs **$0.25 per Intelligence Index task**, which is 18% of GPT-5.6 Terra (max) at the same 42 score. BenchLM says no comparable first-party price is published; self-hosting cost varies.
- **Speed:** **48.0 output tokens/s** (rank #48/116; class median 81.8 — Artificial Analysis calls it "notably slow") and **TTFT 3.30 s** (class median 2.01 s). It generated 180M output tokens across the index, "very verbose" vs. a 140M median.
- **Architecture:** Open-weights MoE, 320B total parameters and 18B active (Artificial Analysis, confirmed 2026-09-29); MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai model-card eval metadata; BenchLM provider-exact launch source)
- Terminal-Bench 4.0 (the harness now inside the AA Intelligence Index): **33%** (Artificial Analysis, accessed 2026-09-29). **Newly recorded** — a much harder replacement harness, and the large 84.3% → 33% gap is a harness-difficulty effect rather than a regression.
- AutomationBench-AA: **60%** (Artificial Analysis v4.3.2 row, accessed 2026-09-29) — up from the **48.8%** AutomationBench figure previously recorded from the Z.ai launch post; the two are different benchmark versions.
- AA-Briefcase v1.1: **1449** Elo; GDPval-AA v2.1: **1655** Elo (Artificial Analysis).
- NL2Repo: **56.3%** (BenchLM, provider-exact Z.ai launch post)
- Toolathlon, GDPval-AA (v1 leaderboard), Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- HLE with tools: **55.3%** (GLM-5.3-Flash model card; 300K context-management strategy, GPT-5.6-luna medium judge). Artificial Analysis HLE row: **40%** (different configuration).
- Artificial Analysis Intelligence Index v4.3.2: **42/100**, rank **#4/116** open-weights models of similar size (accessed 2026-09-29). **Unchanged from the 42 / #4 recorded on 2026-09-24**; only the denominator moved (113 → 114 → 116), consistent with the session-wide finding that the v4.3.2 re-base does not move legacy per-model values.
- SciCode: **52%**; CritPt: **15%**; GDP.pdf: **15%**; AA-LCR v1.1: **80%**; AA-Omniscience Index: **7** (Artificial Analysis, v4.3.2 rows).
- GPQA Diamond, LCR/MLCR (non-AA), and hallucination-rate metrics: **no verified public exact value found**

Coding:

- DeepSWE: **63.4%** (GLM-5.3-Flash Hugging Face model card; DeepSWE v1.1, mini-swe-agent, 400K context)
- SWE-bench (Vals AI): **92.0%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench (Vals AI): **80.5%** (BenchLM, Vals AI leaderboard)
- Terminal-Bench 2.1: **84.3%**; Terminal-Bench 4.0: **33%**; SciCode: **52%**
- SWE-bench Verified, Vibe Code Bench: **no verified public exact value found**

Long context:

- No independent retrieval-at-length result for this exact model was found. Artificial Analysis and BenchLM verify a 1M-token context-window claim; AA-LCR v1.1 at 80% is the closest long-context reasoning measurement.

Sources consulted: [GLM-5.3-Flash Hugging Face model card](https://huggingface.co/zai-org/GLM-5.3-Flash), [Artificial Analysis GLM 5.3 Flash](https://artificialanalysis.ai/models/glm-5-3-flash), the [Artificial Analysis Intelligence Index v4.3 announcement](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-3), and [BenchLM GLM-5.3-Flash](https://benchlm.ai/models/glm-5-3-flash), accessed 2026-09-29. Benchmark harness and configuration labels are retained.

### Normalized scores (1–100)

- **Tool use: 91/100.** Unchanged. Terminal-Bench 2.1 84.3%, AutomationBench-AA 60%, GDPval-AA v2.1 1655 Elo and AA-Briefcase 1449 Elo provide strong agent evidence; the new Terminal-Bench 4.0 row at 33% and the absence of Tau, GDPval v1 and MCP values cap certainty.
- **Reasoning: 86/100.** Unchanged. HLE with tools 55.3%, AA Index 42, CritPt 15% and AA-LCR v1.1 80% support strong reasoning; no exact GPQA value was found.
- **Context window: 95/100.** Unchanged. The 1M context is verified; no retrieval-at-length result was found.
- **Multimodal: 65/100.** Unchanged. Artificial Analysis verifies text/image input with text output; the evaluated page does not claim video/audio input.
- **Coding: 92/100.** Unchanged. SWE-bench Vals 92.0%, DeepSWE 63.4%, Terminal-Bench 2.1 84.3% and SciCode 52% provide strong coding evidence; exact SWE-bench Verified values are missing.
- **Cost efficiency: 97/100.** Unchanged. The $0.15/$0.50 price, 83% cache discount and $0.25 per index task are exceptionally low for a 1M-context open-weight model, though self-hosting infrastructure costs remain.
- **Overall Score: 85.8/100.** (91 + 86 + 95 + 65 + 92) / 5 = 429 / 5 = 85.8. Unchanged from 2026-09-24 — every dimension held. Best fit: low-cost multimodal coding agents and long-context workflows where open weights and Z.ai's tool ecosystem are priorities. The one new caveat is latency: 48 tokens/s and 3.30 s TTFT make it the slow end of its class, so it is a cost/quality pick rather than a latency pick.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of the official Z.ai Hugging Face model card, Artificial Analysis (model page and Intelligence Index v4.3.2 component rows), and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GLM_5_3_Flash_Recheck.md`, using the same headings.
