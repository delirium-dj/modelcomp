# Kimi K3.1 Pro — findings by GPT-6 Astra

- Source: Moonshot AI / `kimi-k3.1-pro`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** K3 post-training upgrade for long-horizon coding, visual workflows and agentic work. Highspeed is a serving option, not a separately scored checkpoint here.
- **Provider / access:** Moonshot Chat Completions, `https://api.moonshot.ai/v1/chat/completions`.
- **Release / knowledge:** October 23, 2026 per Vals; knowledge cutoff not verified.
- **IDs:** Moonshot `kimi-k3.1-pro`; no verified Free Zen ID in this research.
- **Context window:** Vendor specifies 1M; maximum completion parameter 1,048,576, default 131,072. These are limits, not a guarantee of simultaneous full-window input and output.
- **Modalities:** Text, image and video input; text output; always-on reasoning, tool calling and strict JSON Schema documented. Generated 3D assets use external tools, not native 3D output.
- **Pricing (as of 2026-11-02):** Vals reports $2 input / $10 output per million tokens; paid API. Cache rates not independently verified here.
- **Architecture:** Vendor describes a 3T-class post-trained K3 model. Weights promised by November 4, so their availability is not established on this report date; license not verified.

### Raw benchmarks found

All measured values below are from Vals' exact-model page, evaluated through Moonshot at temperature 1, top_p 0.95, max effort and 262K max output. Dynamic ranks reflect the fetched page.

Agent / tool use:
- Terminal-Bench 4.0: **63.64% ±1.75**, rank 3/59; not interchangeable with Terminal-Bench 2.1.
- Finance Agent v2.1: **61.49% ±2.10**; EMB v1.1: **70.00% ±2.63**.
- Tau3, GDPval-AA, Claw-Eval, Toolathon and MCP-Atlas: no verified public score found in the consulted sources.

Reasoning / knowledge:
- Vals Index: **62.52% ±1.14**, rank 9/32; Science Index **44.37% ±2.12**.
- ProofBench v1.1: **91.00% ±2.88**; MysteryMechanism **26.13% ±2.96**.
- GPQA, HLE, CritPt and Artificial Analysis Intelligence Index: no verified public score found in the consulted sources.
- Vendor's selected factual-error stress test reports **6.85%** claim-level hallucination versus K3 **23.35%**; this is not a general hallucination rate. The quickstart's benchmark prose contains unresolved placeholders, which are not treated as results.

Coding:
- Vibe Code Bench v1.1: **84.89% ±2.95**, rank 18/123.
- IOI: **81.89% ±9.19**; Terminal-Bench-Science **31.43% ±5.59**.
- SWE-bench, DeepSWE, LiveCodeBench and SciCode: no verified public score found in the consulted sources.

Long context:
- 1M advertised capacity; no verified public long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong independently measured terminal-agent rank; weaker finance/tax performance and missing dedicated tool-call evaluations cap confidence.
- **Reasoning: 87/100.** Strong ProofBench and Vals composite, tempered by MysteryMechanism and missing GPQA/HLE measurements; provisional cross-suite interpretation.
- **Context window: 95/100.** Vendor's 1M window reaches the methodology's upper tier; absent retrieval evidence prevents 100.
- **Multimodal: 85/100.** Documented image/video understanding; no verified native audio or non-text output.
- **Coding: 92/100.** Top-three Terminal-Bench 4.0 result plus strong Vibe and IOI results; missing repository-patch evaluations caps the score.
- **Cost efficiency: 72/100.** $2/$10 paid pricing sits between the methodology's premium and mid-price anchors; Vals reports $6.44 per test.
- **Overall Score: 90/100.** Half-up mean: (90 + 87 + 95 + 85 + 92) / 5 = 89.8; suitable for long-context visual coding agents.

## Signature

- Provided by: **GPT-6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-11-02
- Method: Fresh public web research; scores are normalized interpretations, not vendor scores. No peer findings consulted.
- Reference URLs:
  - [Moonshot official quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)
  - [Vals exact-model evaluation](https://www.vals.ai/models/kimi_kimi-k3.1-pro)
