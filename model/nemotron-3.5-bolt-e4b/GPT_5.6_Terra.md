# NVIDIA Nemotron 3.5 Bolt E4B - findings by GPT 5.6 Terra

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's post-trained Gemma-4-E4B-derived small model for low-latency local assistants, multi-turn tool use, and instruction following. The released BF16 checkpoint includes configurable thinking and native tool-call parsing.
- **Provider / access:** NVIDIA Hugging Face checkpoint `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`; self-host through vLLM using an OpenAI-compatible Chat Completions API.
- **Release / knowledge:** Released on Hugging Face 2026-10-23; the model card lists post-training data freshness through May 2026.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`; the vLLM examples use served model name `nemotron-bolt`.
- **Context window:** 64K input / 64K output maximum, according to NVIDIA's official model card.
- **Modalities:** Text input and text output. The card's vLLM recipe explicitly disables image, video, and audio input.
- **Pricing (as of 2026-10-26):** No hosted API price found. NVIDIA publishes weights under OpenMDW-1.1, with a 4GB quantized variant for local deployment.
- **Architecture:** Gemma-4-E4B-derived model; 8B total / 4B effective parameters, BF16 checkpoint, with a companion DFlash speculative decoder.

### Raw benchmarks found

Agent / tool use:

- [BFCL-v3](https://github.com/ShishirPatil/gorilla/tree/main/berkeley-function-call-leaderboard): **68.51** (NVIDIA's consistent NeMo Gym harness).
- [When2Call Multi-Turn](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16): **63.36** (NVIDIA's benchmark table).
- [ToolSandbox](https://github.com/apple-aiml-research/ToolSandbox): **68.77** (NVIDIA's consistent NeMo Gym harness).
- [Tau2-Bench](https://taubench.com/leaderboard/?benchmark=core): **55.10** (NVIDIA's benchmark table).
- [IHEval](https://github.com/ytyz1307zzh/IHEval): **84.79** (NVIDIA's benchmark table).
- [AgentIF](https://agentif.github.io/): **25.81** (NVIDIA's benchmark table).

Reasoning / knowledge:

- [MultiChallenge](https://labs.scale.com/leaderboard/multichallenge?tab=small): **53.10** (NVIDIA's consistent NeMo Gym harness).
- [RAGTruth](https://github.com/ParticleMedia/RAGTruth): **77.59** (NVIDIA's benchmark table).
- GPQA Diamond and HLE: no verified public score found.

Coding:

- SWE-bench Verified, LiveCodeBench, and DeepSWE: no verified public score found for this exact checkpoint.

Long context:

- [RULER at 64K](https://github.com/NVIDIA/RULER): **86.99** (NVIDIA's benchmark table).
- [LongMemEval](https://github.com/xiaowu0162/LongMemEval): **72.10** (NVIDIA's benchmark table).
- [LongBench v2 at 48K](https://longbench2.github.io/): **50.50** (NVIDIA's benchmark table).

NVIDIA's official Hugging Face card is the primary source for the exact release, specs, and raw table. The searched Build NVIDIA and Artificial Analysis URLs did not provide a retrievable exact-model page, so no third-party score is substituted. The vendor table explicitly identifies a consistent NeMo Gym harness and warns that values can differ from vendor self-reports; those results are retained but not treated as independent confirmation.

### Normalized scores (1-100)

- **Tool use: 74/100.** BFCL-v3 68.51, ToolSandbox 68.77, and IHEval 84.79 show solid structured-tool handling, while Tau2-Bench 55.10 and AgentIF 25.81 prevent a frontier-agent interpretation.
- **Reasoning: 68/100.** MultiChallenge 53.10 is moderate and RAGTruth 77.59 is stronger, but no exact GPQA or HLE result supports a higher general-reasoning score.
- **Context window: 80/100.** The confirmed 64K context is useful rather than frontier-scale; RULER 86.99 and LongMemEval 72.10 show credible retrieval at the documented limit.
- **Multimodal: 15/100.** The official input and output specification is text-only, and NVIDIA's serving command disables every non-text modality.
- **Coding: 60/100.** NVIDIA positions the model for agentic applications, but no exact coding benchmark was found, so its score is deliberately capped.
- **Cost efficiency: 88/100.** Open weights and a 4GB quantized release support inexpensive local use, though no official hosted price is available.
- **Overall Score: 59/100.** Half-up mean of Tool 74 + Reasoning 68 + Context 80 + Multimodal 15 + Coding 60 = 297/5 = 59.4. Best fit: compact local text assistants and structured tool workflows, not multimodal or coding-critical deployment.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-26
- Method: fresh public research across NVIDIA's official Hugging Face model card, GitHub search results, and independent benchmark-project pages; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
