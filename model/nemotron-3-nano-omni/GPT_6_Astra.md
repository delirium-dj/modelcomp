# Nemotron 3 Nano Omni — findings by GPT 6 Astra

- Source: NVIDIA / Nemotron 3 Nano Omni
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Nemotron 3 Nano Omni (including hosted Free tier)
- **Short description:** General multimodal perception and reasoning model for documents, video and GUI agents; not a speech-only model.
- **Provider / access:** NVIDIA weights and hosted inference; OpenRouter Chat Completions.
- **Release / knowledge:** April 28, 2026; knowledge cutoff not verified.
- **IDs:** `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`; OpenRouter `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free`. No verified Zen Free ID.
- **Context window:** Publisher card: 256K. OpenRouter: 256,000, maximum completion 65,536. Marketing mentions 300K, but this report uses the documented endpoint limit.
- **Modalities:** Text, image, audio and video input; text output, reasoning and tools. Publisher supports JSON output; OpenRouter does not enforce response_format.
- **Architecture:** Mamba2–Transformer MoE, 31B total / approximately 3B active; NVIDIA Open Model Agreement. [Publisher specifications](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)
- **Pricing (as of 2026-10-08):** Hosted Free route: $0 input / output; rate limited. Self-hosting has infrastructure costs. [Host specifications and prices](https://openrouter.ai/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning/providers). Free pricing does not establish confidential processing; review the chosen provider's retention/training policy and routing settings. [Privacy documentation](https://openrouter.ai/docs/guides/privacy/data-collection)

### Raw benchmarks found

Publisher measurements, no independent rank claimed:

- Agent/tool use: TauBench v2 Telecom **42.7%**. Reasoning: GPQA Diamond **72.2%**, MMLU-Pro **77.3%**, AIME25 **82.1%**, AA-LCR **41.0%**. Coding: LiveCodeBench v5 **63.2%**, SciCode **32.0%**. Text harness: maximum output 131,072, temperature/top-p 1; GPQA four runs, AIME eight, coding and Tau one. These research settings exceed the hosted completion cap. [Technical report, §4.4, Table 10](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Omni-report.pdf)
- Multimodal/GUI: OSWorld **47.4%**, MMLongBench-Doc **57.5%**, Video-MME **72.2%**, WorldSense **55.4%**. [Publisher evaluation card](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)
- Terminal-Bench 2.1, Tau3, GDPval-AA, Claw, Toolathon, MCP-Atlas, SWE Atlas, HLE, CritPt, MLCR, primary Intelligence Index, Omniscience, SWE-bench/Pro, Vibe Code Bench and DeepSWE: no verified public score found.
- Long context: document and AA-LCR evidence above; no full-window MRCR/RULER retrieval verified. Results from the separate text-only Nano backbone are not substituted.

### Normalized scores (1–100)

- **Tool use: 57/100.** Measured telecom and GUI capability; no broad modern agent benchmark corroboration.
- **Reasoning: 63/100.** Science and long-document scores fit the middle tier; frontier breadth is unverified.
- **Context window: 77/100.** Documented capacity fits the 200K–500K tier, without full-window retrieval validation.
- **Multimodal: 91/100.** Broad measured audio/video/image understanding; text-only output limits the ceiling.
- **Coding: 62/100.** Moderate competitive and scientific coding; repository repair remains unverified.
- **Cost efficiency: 100/100.** Applies to the verified free hosted route, not self-hosting or service availability.
- **Overall Score: 70/100.** Half-up mean: 350 / 5 = 70. Best suited to perception and document subtasks.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh primary-source web research; normalized scores are interpretations, not official vendor scores.
- Future sources: add separate signed files using the same headings.

