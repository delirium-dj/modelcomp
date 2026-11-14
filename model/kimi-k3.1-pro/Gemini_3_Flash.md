# Kimi K3.1 Pro — findings by Gemini 3 Flash

- Source: Moonshot AI/Kimi-K3.1-Pro
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's most capable 3T-class open-weight model, natively multimodal and optimized for agentic workflows, complex financial research, and long-horizon coding tasks.
- **Provider / access:** Kimi API (`kimi-k3.1-pro`), Kimi Work, and Kimi Code. Full weights available on Hugging Face.
- **Release / knowledge:** 2026-10-23 release; weights released 2026-11-04. Knowledge cutoff unknown.
- **IDs:** `kimi-k3.1-pro`
- **Context window:** 1,048,576 tokens (1M). Verified by Moonshot AI documentation and 1M-token long-horizon coding tests.
- **Modalities:** Text and Image input; Text output. Native reasoning (Chain-of-Thought) with configurable effort levels (Low, High, Max).
- **Pricing (as of 2026-10-23):** $2.00 per 1M input / $10.00 per 1M output tokens. Highspeed variant available.
- **Architecture:** Mixture-of-Experts (MoE) with 2.8T total / 104B active parameters.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 4.0: **65.7%** (Moonshot blog / ahead of GPT-6 Astra)
- OfficeQA Pro v2: **64.4** (Moonshot blog / state-of-the-art in fiscal analysis)
- APEX-Agents: **69.4** (Artificial Analysis / Mercor)
- Automation Bench-AA: **73.3** (Artificial Analysis)
- GDPval-AA v2.1: **1846 Elo** (Artificial Analysis)
- AA-Briefcase v1.1: **1678 Elo** (Artificial Analysis)

Reasoning / knowledge:
- GPQA-Diamond: **94.2** (Hugging Face / Moonshot blog)
- Artificial Analysis Intelligence Index v5.0.1: **46** (Top-tier for open-weight models)
- Kimi Hallu Bench Hard (w/ tools): **8.3%** claim-level hallucination rate (Moonshot internal stress test)
- HLE-Full (w/ tools): **70.0** (Moonshot blog)

Coding:
- DeepSWE v1.1: **75.5** (Moonshot blog / Hugging Face)
- Kimi Code Bench 3.0 Long-horizon: **61.2%** (Moonshot internal benchmark)
- SWE Marathon v1.1: **51.7** (Moonshot blog)

Multimodal:
- BenchCAD (w/ tools): **92.7%** (Voxel IoU / approaching proprietary frontier)
- MMMU-Pro (w/ python): **90.0** (Hugging Face / Moonshot blog)
- GDP.pdf (w/ python): **85.7** (Moonshot blog)

Long context:
- Retrieval: Verified high-fidelity performance across 1M context; utilized for full-project builds and walking dynamics simulations.

### Normalized scores (1–100)

- **Tool use: 92/100.** Exceptional performance on Terminal-Bench 4.0 and OfficeQA Pro v2; establishes it as the strongest open-weight agentic model.
- **Reasoning: 90/100.** Strong GPQA-Diamond (94.2) and high AA Intelligence Index score for its class, combined with very low hallucination rates.
- **Context window: 95/100.** 1M token window with verified performance in complex engineering and simulation tasks.
- **Multimodal: 88/100.** Robust image input support with top-tier BenchCAD (92.7%) and MMMU-Pro (90.0) results; text-only output caps the score.
- **Coding: 94/100.** Leads open-weight models in DeepSWE (75.5) and demonstrates sophisticated long-horizon engineering capabilities.
- **Cost efficiency: 95/100.** Open-weight availability provides maximum value; API pricing ($2/$10) is very competitive for 3T-class intelligence.
- **Overall Score: 91.8/100.** Recommended as the premier open-weight model for long-horizon agentic coding, financial research, and complex 3D modeling.

---

## Signature

- Provided by: **Gemini 3 Flash (google/gemini-3-flash-preview)** — 2026-11-14
- Method: Public internet research via Moonshot AI official announcements, Hugging Face model cards, and Artificial Analysis audits.
- Reference URLs:
  - [Introducing Kimi K3.1 Pro (Moonshot Blog)](https://www.kimi.com/en/blog/kimi-k3-1-pro)
  - [Hugging Face — moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)
  - [Artificial Analysis — Kimi K3.1 Pro model page](https://artificialanalysis.ai/models/kimi-k3-1-pro)
  - [Kimi K3.1 Pro Quickstart & API Guide](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
