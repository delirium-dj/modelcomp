# Kimi K3.1 Pro — findings by Ernie 5.5 Flash

- Source: Moonshot AI/Kimi K3.1 Pro (`kimi-k3.1-pro`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's open-weight multimodal Kimi model (released 2026-10-23) with a 1M-token context, always-on reasoning, and a stated focus on coding, 3D creation and financial research.
- **Provider / access:** Moonshot AI API (`kimi-k3.1-pro`), OpenRouter (`moonshotai/kimi-k3.1-pro`), DeepInfra, Novita, OpenCode Go, plus ~30 gateway routes. Open weights are published by moonshotai.
- **Release / knowledge:** 2026-10-23 (models.dev); knowledge cutoff not published.
- **IDs:** `kimi-k3.1-pro`, `moonshotai/kimi-k3.1-pro`, `moonshotai/Kimi-K3.1-Pro` (Hugging Face), `opencode-go/kimi-k3.1-pro`.
- **Context window:** 1,048,576 tokens total; max output 1,048,576 (declared on the Moonshot/OpenRouter routes — treat the 1M output as a gateway-declared cap, verify before relying on it).
- **Modalities:** text, image and video in; text out; always-on reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $2.00 / $10.00 per 1M input/output; cache read $0.20.
- **Architecture:** open-weights MoE (moonshotai does not publish a single headline parameter count in the API docs; the Hugging Face repo carries the config).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **65.70%** (within 1 point of Opus 5.5's 66.4% at 20% of the price)
- BrowseComp: **92.1%** (best verified row in this dataset); OSWorld 2.0: **79.6%**
- Agents' Last Exam: **43.2%** (v1.1 CLI subset **44.2%**); APEX-Agents: **69.4%**
- Terminal-Bench-Science 0.1: **38.1%** (weak); ExploitGym: **20.7%**; HANDBOOK.md: **44.6%**

Reasoning / knowledge:

- Humanity's Last Exam with tools: **70.0%** — the best verified HLE-with-tools figure in this dataset
- BioMysteryBench (v11): **80.6%**
- Financial Research (internal): **70.4%**; Financial Modeling (internal): **57.6%**; Frontier Finance: **58.6%**
- Kimi Hallucination Benchmark Hard (with tools): **8.3%**
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- DeepSWE: **75.5%**; Kimi Code Bench v2: **77.1%**; Kimi Code Bench 3.0 long-horizon (internal): **61.2%**
- sweMarathon: **51.7%**; ProgramBench binary: **31.5%**; PostTrainBench v1.2: **36.5%**; Bug Hunt Bench: **36.0 fixes**
- FrontierCode 2.0: **19.6%** (weak); SWE-bench Verified / SWE-bench Pro: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published for K3.1 Pro
- Long-context quality is therefore unverified despite the window size

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 4.0 65.7% and OSWorld 2.0 79.6% are near-frontier for the price, BrowseComp 92.1% is the best verified web-research score here; Terminal-Bench-Science 38.1% and ExploitGym 20.7% cap it.
- **Reasoning: 85/100.** HLE 70.0% with tools is the best verified figure in this dataset and BioMysteryBench 80.6% is strong; no GPQA/ARC publication and a thin financial-reasoning record keep it out of the 90s.
- **Context window: 100/100.** 1,048,576 tokens declared (with a 1M max-output claim on gateway routes).
- **Multimodal: 80/100.** Text, image and video in; the model is explicitly positioned for 3D creation, but no public video- or image-understanding benchmark rows were published.
- **Coding: 82/100.** DeepSWE 75.5% and Kimi Code Bench v2 77.1% are good, but FrontierCode 2.0 19.6% and ProgramBench binary 31.5% are weak, and no SWE-bench row exists.
- **Cost efficiency: 85/100.** $2/$10 per 1M for an open-weight model with near-frontier agentic scores is strong value; self-hosting is cheaper still.
- **Overall Score: 86.4/100.** Best fit for cost-sensitive agentic work, web research and financial analysis; verify long-context and SWE-bench behaviour yourself before trusting them.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Moonshot AI model card / Kimi technical report, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K3.1 Pro — Moonshot AI / Hugging Face](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)
  - [Kimi K3.1 Pro benchmarks & sources — BenchLM](https://benchlm.ai/models/kimi-k3-1-pro)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Kimi_K3.1_Pro_v2.md`, using the same headings.