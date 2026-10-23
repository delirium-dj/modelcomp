# Nemotron 3.5 Bolt E4B — findings by DeepSeek 4.1 Flash

- Source: NVIDIA/Nemotron 3.5 Bolt E4B 4GB (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's 4GB-class small language model for on-device conversational agents — built on Gemma 4 E4B then post-trained for multi-turn tool use, persona adherence, instruction hierarchy and context robustness, with concise speech-ready output.
- **Provider / access:** Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`, BF16 and GGUF), Ollama (`nemotron-3.5-bolt`), LM Studio, Unsloth, Jetson AI Lab, NIM/In-Game Inferencing SDK.
- **Release / knowledge:** 2026-10-23; knowledge cutoff inherited from Gemma 4 E4B (not disclosed).
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`; `nemotron-3.5-bolt`; open weights (OpenMDW 1.1 per HF card).
- **Context window:** 64,000 tokens.
- **Modalities:** text in/out; configurable reasoning, tool calling, structured output; 35 languages.
- **Pricing (as of 2026-10-23):** free open weights; local inference only.
- **Architecture:** Gemma 4 E4B base (~4B effective) with Nemotron RLVR/RLHF post-training; Q4_K_M fits ~4GB; DFlash speculative drafter included.

### Raw benchmarks found

Agent / tool use:

- BFCL-v3: **68.5%**; Tau2-Bench: **55.1%**; ToolSandbox: **68.8%**; When2Call-MT: **63.4%**
- RoleBench custom win rate: **67.0%**; RelyToolBench: **63.2%**

Reasoning / knowledge:

- MultiChallenge: **53.1%**; EQ-Bench v3: **39.4**; AgentIF: **25.8%**
- No GPQA/HLE/MMLU row was published.

Coding:

- No SWE-bench/LiveCodeBench row was published for this model.

Long context:

- LongBench v2 (48K): **50.5%**; LongMemEval: **72.1%**; RULER 64K: **87.0%**; SysBench: **67.9%**

Multimodal (VL) evidence:

- none — this checkpoint is text-only (the 74B-A9B Bolt is the vision-language sibling)

Instruction / grounding extras:

- IFBench **63.8%**; IHEval **84.8%**; InverseIFEval **46.8%**; StructEval-T **80.4%**; GaRAGe **42.6%**; RAGTruth F1 **77.6%**; Brevity Bench **82.5**

### Normalized scores (1–100)

- **Tool use: 67/100.** BFCL-v3 68.5 and ToolSandbox 68.8 are excellent at 4GB, though Tau2 55.1 trails Qwen3.5 4B's 75.1 (NVIDIA model card).
- **Reasoning: 60/100.** MultiChallenge 53.1 and EQ-Bench 39.4 are solid for a tiny conversational model, but no STEM reasoning suite was published.
- **Context window: 60/100.** 64K is adequate, with RULER 87.0 but LongBench v2 only 50.5 (NVIDIA).
- **Multimodal: 15/100.** Text-only checkpoint (template floor).
- **Coding: 35/100.** No coding benchmark was published; the model is positioned for device assistants, not software engineering.
- **Cost efficiency: 100/100.** Open weights and a ~4GB Q4 footprint run on RTX 5070, Jetson Orin Nano and CPU.
- **Overall Score: 47/100.** Mean of the five quality dims (67+60+60+15+35)/5 = 47.4 → 47. Best-fit: offline voice/device assistants, game NPCs and IoT agents with strict memory limits.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (NVIDIA Nemotron research page and technical report, Hugging Face model card, OrcaRouter release analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
