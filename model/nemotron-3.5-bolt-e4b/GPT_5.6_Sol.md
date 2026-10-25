# NVIDIA Nemotron 3.5 Bolt E4B — findings by GPT-5.6 Sol

- Source: NVIDIA/Nemotron 3.5 Bolt E4B
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's small text reasoning model for low-memory conversational agents, multi-turn tool use, local device assistants, and embedded interfaces.
- **Provider / access:** BF16 weights at `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`; 4GB GGUF checkpoint and NVIDIA Build endpoint also available.
- **Release / knowledge:** Released 2026-10-23; post-training data cutoff May 2026.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`; `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`.
- **Context window:** Up to 65,536 input and 65,536 output tokens.
- **Modalities:** Text input and output; configurable reasoning, conversational mode, structured output, and multi-turn tool calling.
- **Pricing (as of 2026-10-25):** Open weights under OpenMDW-1.1; no stable paid API token price found.
- **Architecture:** Gemma-4-E4B derivative, 8B total / 4B effective parameters; BF16 and approximately 4GB Q4_K_M releases.

### Raw benchmarks found

Agent / tool use:

- BFCL-v3: **68.51**; ToolSandbox: **68.77**; Tau2-Bench: **55.10**; When2Call Multi-Turn: **63.36**; RelyToolBench: **63.16** (NVIDIA BF16 evaluation).

Reasoning / knowledge:

- IFBench: **63.79**; IHEval: **84.79**; MultiChallenge: **53.10**. No exact GPQA or HLE value found.

Coding:

- No exact SWE-bench, LiveCodeBench, or SciCode result was published for this conversational-agent specialist.

Long context:

- RULER 64K: **86.99**; LongMemEval: **72.10**; LongBench v2 at 48K: **50.50**; SysBench: **67.88**.

Cross-source comparison:

- NVIDIA's release blog rounds BF16 values to one decimal, while the model card gives two decimals. The 4GB Q4_K_M checkpoint differs on several rows, including ToolSandbox **74.13** and RULER **85.76**; normalized scores use BF16 because the folder represents the base E4B model, with quantized figures treated as supporting variant evidence.

### Normalized scores (1–100)

- **Tool use: 68/100.** BFCL 68.51 and ToolSandbox 68.77 are solid, while Tau2 55.10 and AgentIF 25.81 cap broad agency.
- **Reasoning: 55/100.** Strong IHEval 84.79 contrasts with MultiChallenge 53.10 and absent GPQA/HLE evidence.
- **Context window: 62/100.** The 64K limit is modest, but RULER 86.99 and LongMemEval 72.10 show good effective retention.
- **Multimodal: 15/100.** The model itself is text-only; voice/device applications require adjacent models.
- **Coding: 40/100.** No exact coding benchmark was published, and the release targets conversational agents rather than software engineering.
- **Cost efficiency: 70/100.** Compact open weights enable local use, but self-hosting has hardware costs and no exact API price was verified.
- **Overall Score: 48/100.** Half-up mean `(68 + 55 + 62 + 15 + 40) / 5 = 48`; best for compact local conversational and tool-using agents.

### Sources

- Official BF16 model card and benchmark table: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16
- Official NVIDIA release and rounded comparisons: https://research.nvidia.com/labs/nemotron/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB/
- Official technical report: https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB-Technical-Report.pdf
- NVIDIA Build endpoint: https://build.nvidia.com/nvidia/nemotron-3.5-bolt-e4b

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: fresh second-pass research using seven exact-name searches, official release/card/report, and BF16-versus-quantized comparison; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
