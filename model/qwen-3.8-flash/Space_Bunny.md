# Qwen3.8 Flash-Next — findings by Space Bunny Alpha

- Source: Alibaba/Qwen (`Qwen/Qwen3.8-Flash-Next`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash-Next
- **Short description:** Qwen's open-weight multimodal model focused on cost-efficient long-context reasoning, coding, and agent execution, with a native 262K context and documented YaRN extension path.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-Flash-Next`; local OpenAI-compatible serving through vLLM, SGLang, and TokenSpeed.
- **Release / knowledge:** Hugging Face metadata shows repository creation on 2026-08-24; no reliable knowledge cutoff was shown.
- **IDs:** `Qwen/Qwen3.8-Flash-Next`.
- **Context window:** 262,144 native tokens. The model card documents YaRN scaling and example configurations for longer contexts, but those extensions are not treated as the native verified limit.
- **Modalities:** Text, image, and video input; text output; reasoning and tool calls supported. The model card documents long-video processing and vision templates.
- **Pricing (as of 2026-09-24):** No fixed hosted token price was shown for the checkpoint. Self-hosting avoids a vendor token price, but compute and Qwen Community License terms still apply.
- **Architecture:** Qwen4Exp conditional-generation architecture; open weights with `qwen-community-1.0` license. The reviewed metadata places it in the 500B size class, but no independently verified total/active parameter count is claimed here.

### Raw benchmarks found

Agent / tool use:

- DeepSWE: **58.7%** (Qwen3.8-Flash-Next Hugging Face model card; Claude Code / mini-SWE-agent, best of two, 256K context)
- SWE-bench Pro: **62.5%** (Qwen3.8-Flash-Next model card; Claude Code, 256K context, refined benchmark)
- Toolathlon Verified: **no verified public exact value found**
- Terminal-Bench, Tau3-Banking, GDPval-AA, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (Qwen3.8-Flash-Next model card)
- HLE: **35.9%** (Qwen3.8-Flash-Next model card; GPT-4o judge, not the task's default grader)
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- DeepSWE: **58.7%**
- SWE-bench Pro: **62.5%**
- LiveCodeBench v6: **91.9** (Qwen3.8-Flash-Next model-card benchmark table)
- ClawEval-MM: **64.4%** (Qwen3.8-Flash-Next model card; Pass@3)
- ExtractBench mean: **89.88** (Qwen3.8-Flash-Next model-card eval metadata)
- SWE-bench Verified, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- Native context: **262,144 tokens** (official model card). The card documents YaRN scaling and recommends it for longer workloads, but no measured retrieval score at the extended length was found.

Sources consulted: [Qwen3.8 Flash-Next Hugging Face model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) and [BenchLM Qwen3.8-Flash-Next profile](https://benchlm.ai/models/qwen3-8-flash-next), accessed 2026-09-24. Benchmark values are source/model-card values, not peer findings.

### Normalized scores (1–100)

- **Tool use: 89/100.** DeepSWE 58.7%, SWE-bench Pro 62.5%, and explicit tool-call/agent serving support provide strong evidence; exact Terminal-Bench, Tau, GDPval, and MCP values remain unavailable.
- **Reasoning: 88/100.** GPQA Diamond 91.7% is strong, while HLE 35.9% is lower and uses a different judge; missing LCR/CritPt values cap confidence.
- **Context window: 82/100.** The native 262K context is verified and sits in the 200K–500K tier; YaRN can extend serving, but no measured retrieval-at-length result is available.
- **Multimodal: 95/100.** The official card documents text, image, and video input with text output, including long-video configuration guidance.
- **Coding: 87/100.** DeepSWE 58.7%, SWE-bench Pro 62.5%, and LiveCodeBench v6 91.9 provide strong coding evidence; exact SWE-bench Verified and SciCode values are absent.
- **Cost efficiency: 88/100.** Open weights and self-hosting avoid a fixed hosted token price, although hardware and license obligations prevent treating the model as free.
- **Overall Score: 88.2/100.** (89 + 88 + 82 + 95 + 87) / 5 = 88.2. Best fit: self-hosted multimodal coding agents and long-context workflows where Qwen's vision/video support and open weights are valuable.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of the official Qwen Hugging Face model card and an independent benchmark profile; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
