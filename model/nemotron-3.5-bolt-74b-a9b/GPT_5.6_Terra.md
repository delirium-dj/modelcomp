# Nemotron 3.5 Bolt 74B-A9B - findings by GPT 5.6 Terra

- Source: NVIDIA/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's quantized vision-language hybrid MoE for local everyday agentic tasks. The OpenCode route identifies the 24GB-capable Bolt checkpoint, not the larger Super VL parent from which it was compressed.
- **Provider / access:** Open weights for local vLLM deployment, with OpenCode route `opencode/nemotron-3.5-bolt-74b-a9b`; the documented upstream checkpoint is `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`.
- **Release / knowledge:** 2026-10-15 release (NVIDIA model card); post-training cutoff May 2026.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`; OpenCode `opencode/nemotron-3.5-bolt-74b-a9b`.
- **Context window:** Up to 256K tokens; visual inputs, tool results, history, and output share that window (NVIDIA).
- **Modalities:** Text, image, and video input; text output; reasoning mode, JSON output, and tool calling are documented.
- **Pricing (as of 2026-10-18):** OpenMDW-1.1 open weights with no vendor per-token price; 24GB local deployment avoids API token charges but still requires compatible GPU hardware.
- **Architecture:** 74B total / 9B active Mamba-2-Transformer hybrid LatentMoE with C-RADIO v4-H vision encoder; 2-bit IQ2 quantization targets a 24GB footprint.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **50.98%**; Tau3 Banking: **17.01%**; MCP-Atlas: **52.20%** (NVIDIA 24GB model card: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB/raw/main/README.md).
- BrowseComp: **66.75%**; PinchBench: **87.82%**; WebArena vision: **50.86%** (NVIDIA 24GB model card).
- GDPVal-AA-V2: **28.47** (NVIDIA 24GB model card); BenchLM lists an independently reported AA GDPval score of **24.0%**: https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b.

Reasoning / knowledge:

- GPQA Diamond: **86.43%**; HLE without tools: **25.30%**; AA-LCR: **64.06%** (NVIDIA 24GB model card).
- Artificial Analysis Intelligence Index: **21**; AA-LCR: **69.7%**; CritPt: **4.3%** (Artificial Analysis data indexed by BenchLM: https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b).
- AA-Omniscience accuracy / non-hallucination: **16.90% / 61.27%** (NVIDIA 24GB model card).

Coding:

- Terminal-Bench 2.1: **50.98%** and SciCode: **41.02%** (NVIDIA 24GB model card).
- No verified exact-checkpoint SWE-bench result was found in the reviewed sources.

Long context:

- AA-LCR: **64.06%** on NVIDIA's card; the public result supports usable long-context reasoning but not a near-limit retrieval claim at 256K.

### Normalized scores (1-100)

- **Tool use: 63/100.** BrowseComp (66.75%), MCP-Atlas (52.20%), and Terminal-Bench 2.1 (50.98%) are moderate, while Tau3 Banking at 17.01% is a substantial cap.
- **Reasoning: 66/100.** GPQA Diamond is strong at 86.43% and AA-LCR is usable, but HLE is 25.30%, CritPt is 4.3%, the independent Intelligence Index is 21, and Omniscience accuracy is low.
- **Context window: 76/100.** The verified 256K window is in the 200K-500K tier; AA-LCR around 64-70% supports a middle-tier rather than upper-tier score.
- **Multimodal: 78/100.** Image and video input support earns a video-capable score, tempered by text-only output and the 50.86% WebArena vision result.
- **Coding: 60/100.** Terminal-Bench 2.1 (50.98%) and SciCode (41.02%) are moderate, with no exact-model SWE-bench result to justify a higher score.
- **Cost efficiency: 97/100.** Open weights and a 24GB local footprint eliminate vendor token charges, though capable GPU hardware remains a real deployment cost.
- **Overall Score: 69/100.** `(63 + 66 + 76 + 78 + 60) / 5 = 68.6`, rounded half-up; best suited to local multimodal agents where low-bit deployment matters more than peak coding benchmarks.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-18
- Method: NVIDIA's exact checkpoint model card plus Artificial Analysis and BenchLM cross-checks; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
