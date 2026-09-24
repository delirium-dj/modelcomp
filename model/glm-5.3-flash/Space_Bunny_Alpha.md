# GLM 5.3 Flash — findings by Space Bunny Alpha

- Source: Z.ai (`glm-5.3-flash`; reasoning)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.ai's open-weight MoE model for low-cost, multimodal, tool-using coding and agent workflows with 1M context.
- **Provider / access:** Z.ai API (`glm-5.3-flash`); Hugging Face `zai-org/GLM-5.3-Flash`; OpenCode Zen route `opencode/glm-5.3-flash`.
- **Release / knowledge:** Artificial Analysis lists August 26, 2026; Hugging Face metadata shows repository creation on 2026-08-25. No reliable knowledge cutoff was shown.
- **IDs:** `glm-5.3-flash`; `zai-org/GLM-5.3-Flash`.
- **Context window:** 1M tokens (Artificial Analysis and BenchLM, accessed 2026-09-24). Exact output limit was not shown.
- **Modalities:** Text and image input; text output; reasoning and tool calls supported. The model card's chat template also exposes image/video/audio tokens, but the evaluated Artificial Analysis page explicitly lists text/image input.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $0.15 per 1M input and $0.50 per 1M output tokens, with an 83% cache discount. BenchLM says no comparable first-party price is published; self-hosting cost varies.
- **Architecture:** Open-weights MoE, approximately 320B total parameters and 18B active; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai model-card eval metadata; BenchLM provider-exact launch source)
- AutomationBench: **48.8%** (BenchLM, provider-exact Z.ai launch post)
- NL2Repo: **56.3%** (BenchLM, provider-exact Z.ai launch post)
- Toolathlon, GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- HLE with tools: **55.3%** (GLM-5.3-Flash model card; 300K context-management strategy, GPT-5.6-luna medium judge)
- Artificial Analysis Intelligence Index: **42/100**, rank **#4/113** (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond: **no verified public exact value found**
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- DeepSWE: **63.4%** (GLM-5.3-Flash Hugging Face model card; DeepSWE v1.1, mini-swe-agent, 400K context)
- SWE-bench (Vals AI): **92.0%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench (Vals AI): **80.5%** (BenchLM, Vals AI leaderboard)
- Terminal-Bench 2.1: **84.3%**
- SWE-bench Verified, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- No independent retrieval-at-length result for this exact model was found. Artificial Analysis and BenchLM verify a 1M-token context-window claim.

Sources consulted: [GLM-5.3-Flash Hugging Face model card](https://huggingface.co/zai-org/GLM-5.3-Flash), [Artificial Analysis GLM 5.3 Flash](https://artificialanalysis.ai/models/glm-5-3-flash), and [BenchLM GLM-5.3-Flash](https://benchlm.ai/models/glm-5-3-flash), accessed 2026-09-24. Benchmark harness and configuration labels are retained.

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 84.3%, AutomationBench 48.8%, NL2Repo 56.3%, and tool-call support provide strong agent evidence; missing Tau, GDPval, and MCP values cap certainty.
- **Reasoning: 86/100.** HLE with tools 55.3% and AA Index 42 support strong reasoning, though exact GPQA/LCR/CritPt values were not found.
- **Context window: 95/100.** The 1M context is verified; no retrieval-at-length result was found.
- **Multimodal: 65/100.** Artificial Analysis verifies text/image input with text output; the evaluated page does not claim video/audio input.
- **Coding: 92/100.** SWE-bench Vals 92.0%, DeepSWE 63.4%, and Terminal-Bench 84.3% provide strong coding evidence; exact SWE-bench Verified and SciCode values are missing.
- **Cost efficiency: 97/100.** The $0.15/$0.50 price and 83% cache discount are exceptionally low for a 1M-context open-weight model, though self-hosting infrastructure costs remain.
- **Overall Score: 85.8/100.** (91 + 86 + 95 + 65 + 92) / 5 = 85.8. Best fit: low-cost multimodal coding agents and long-context workflows where open weights and Z.ai's tool ecosystem are priorities.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of the official Z.ai Hugging Face model card, Artificial Analysis, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
