# Kimi K3 — findings by Glyph Cluster

- Source: Moonshot AI (`moonshotai/kimi-k3`, Kimi K3 / Kimi K3 Max)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (also surfaced as Kimi K3 Max on some providers/benchmarks)
- **Short description:** Moonshot AI's open-weight, native multimodal agentic MoE model in the Kimi K3 generation, designed for long-horizon coding, agentic knowledge work, reasoning, and 1M-token context tasks.
- **Provider / access:** Moonshot AI / Kimi platform; hosted via providers and OpenRouter as `moonshotai/kimi-k3`. Open-weight checkpoints available on Hugging Face (`moonshotai/Kimi-K3`).
- **Release / knowledge:** Released July 2026 (Artificial Analysis: 2026-07-16). Knowledge cutoff not explicitly stated in verified public sources reviewed.
- **IDs:** `moonshotai/kimi-k3`, `kimi-k3` (platform/provider aliases vary). Hugging Face: `moonshotai/Kimi-K3`.
- **Context window:** 1,048,576 tokens (1M) per Moonshot AI model card / Hugging Face / Artificial Analysis.
- **Modalities:** Text and image input; text output. Reasoning supported. Tool/function calling supported per OpenRouter/provider capabilities.
- **Pricing (as of 2026-11-10):** Paid hosted pricing varies by provider. Artificial Analysis lists ~$3.00 / 1M input and ~$15.00 / 1M output tokens (cache discount ~90% noted on AA). OpenRouter provider pricing varies widely by host; self-hosting possible via open weights.
- **Architecture:** Mixture-of-Experts (MoE), 2.8T total / 104B activated parameters; 93 layers (69 KDA + 24 Gated MLA), 896 experts (16 selected/token + 2 shared), MoonViT-V2 vision encoder (401M params), MXFP4 weights / MXFP8 activations (QAT). License: Kimi K3 License (commercial use with restrictions per license).

### Raw benchmarks found

> Sources: Moonshot AI Hugging Face model card and Artificial Analysis. AA page notes intelligence index aggregate not publicly available as a single displayed value in the fetched snapshot, but provides specs/performance/pricing context.

Agent / tool use:

- GDPval-AA v2 (Elo): **1686** (HF model card).
- AA-Briefcase (Elo): **1548** (HF model card).
- Toolathlon-Verified: **76.5** (HF model card).
- MCPMark-Verified: **94.5** (HF model card).
- MCP-Atlas: **84.2** (HF model card).
- AutomationBench: **30.8** (HF model card).
- JobBench: **54.3** (HF model card).
- Agents' Last Exam: **28.3** (HF model card).
- APEX-Agents: **41.0** (HF model card).
- OfficeQA Pro: **63.3** (HF model card).
- OSWorld-Verified: **84.8** (HF model card).
- OSWorld 2.0: **58.3** (HF model card).
- BrowseComp: **91.2** (HF model card).
- τ³-Banking: **33.4** (HF model card).
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **93.5** (HF model card).
- CritPt: **23.4** (HF model card).
- AA-LCR: **74.7** (HF model card).
- HLE-Full: **43.5 / 56.0** (reported as two values in HF table; exact protocol split not fully specified in fetched text).
- DeepSearchQA (F1): **95.0** (HF model card).
- ResearchRubrics: **76.2** (HF model card).
- AA-Omniscience Accuracy / Hallucination Rate: no verified public standalone score found.

Coding:

- DeepSWE: **67.5** (HF model card).
- ProgramBench: **77.8** (HF model card).
- Terminal-Bench 2.1: **88.3** (HF model card).
- FrontierSWE: **81.2** (HF model card).
- SWE-Marathon: **42.0** (HF model card).
- PostTrainBench: **36.6** (HF model card).
- MLS-Bench-Lite: **48.3** (HF model card).
- SciCode: **58.7** (HF model card).
- Kimi Code Bench 2.0: **72.9** (HF model card).
- SWE-bench Verified / LiveCodeBench: no verified public score found.

Long context:

- 1M-token context window specified (HF/AA). No verified MRCR/RULER/GraphWalks retrieval benchmark score found for this exact model on fetched pages.

Multimodal:

- WorldVQA ForceAnswer: **51.0** (HF model card).
- OmniDocBench: **91.1** (HF model card).
- PerceptionBench: **58.5** (HF model card).
- Video-MME (w. sub): **90.0** (HF model card).
- MMVU: **82.1** (HF model card).
- BabyVision w/ python: **85.7** (HF model card).
- MMMU-Pro: **81.6 / 83.4** (HF model card).
- CharXiv (RQ): **84.8 / 91.3** (HF model card).
- MathVision: **94.3 / 97.8** (HF model card).
- ZeroBench (pass@5): **23.0 / 41.0** (HF model card).

### Normalized scores (1–100)

> Derived from Moonshot AI HF model card and Artificial Analysis specs. Scores are normalized interpretations, not official vendor scores. Cost excluded from Overall.

- **Tool use: 90/100.** Strong agentic/tool results across multiple benchmarks (Toolathlon 76.5, MCPMark 94.5, MCP-Atlas 84.2, GDPval-AA Elo 1686, AA-Briefcase Elo 1548, OSWorld 84.8, BrowseComp 91.2). Capped by weaker results on some agentic suites (APEX-Agents 41.0, AutomationBench 30.8, τ³-Banking 33.4).
- **Reasoning: 90/100.** Solid reasoning/knowledge evidence (GPQA 93.5, HLE-Full 43.5/56.0, AA-LCR 74.7, strong DeepSearchQA 95.0). Capped by modest CritPt (23.4) and mixed performance on harder expert reasoning tasks.
- **Context window: 95/100.** Vendor-specified 1M-token context window and long-horizon positioning. Capped by lack of verified public long-context retrieval benchmark results.
- **Multimodal: 84/100.** Broad native multimodal understanding with strong results on vision/document/video benchmarks (OmniDocBench 91.1, Video-MME 90.0, MMVU 82.1, MMMU-Pro 81.6/83.4, MathVision up to 97.8). Capped by text-only output and no verified audio input/generation details beyond listed input modalities context.
- **Coding: 92/100.** Very strong coding/engineering results (Terminal-Bench 2.1 88.3, FrontierSWE 81.2, ProgramBench 77.8, DeepSWE 67.5, SciCode 58.7). Capped by weaker SWE-Marathon/PostTrainBench/MLS-Bench-Lite relative to top frontier coding specialists.
- **Cost efficiency: 45/100.** Hosted pricing around $3/$15 per 1M tokens (AA baseline) is expensive for open-weight peers, though self-hosting/open weights can improve value for some deployments.
- **Overall Score: 90/100.** Mean of non-cost dimensions (90 + 90 + 95 + 84 + 92) / 5 = 90.2, rounded to 90. Best fit for multimodal agentic coding and long-context knowledge work where strong open-weight performance is needed and higher serving cost is acceptable.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research (Moonshot AI Hugging Face model card, Artificial Analysis, OpenRouter model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI — Kimi K3 (Hugging Face model card)](https://huggingface.co/moonshotai/Kimi-K3)
  - [Artificial Analysis — Kimi K3 (Max)](https://artificialanalysis.ai/models/kimi-k3)
  - [OpenRouter — moonshotai/kimi-k3](https://openrouter.ai/moonshotai/kimi-k3)
  - [Kimi K3 License](https://huggingface.co/moonshotai/Kimi-K3/blob/main/LICENSE)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
