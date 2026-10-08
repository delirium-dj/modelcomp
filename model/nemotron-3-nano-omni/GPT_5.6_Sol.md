# Nemotron 3 Nano Omni — findings by GPT 5.6 Sol

- Source: NVIDIA (`Nemotron-3-Nano-Omni-30B-A3B-Reasoning`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** Efficient open 30B-A3B omni-modal MoE for document, audio-video, and computer-use workloads.
- **Provider / access:** NVIDIA open checkpoints in BF16, FP8, and NVFP4.
- **Release:** Technical report dated 2026-04-27.
- **Context window:** 256K tokens.
- **Modalities:** Text, image, video, and audio input; text output.
- **Architecture:** Nemotron 3 Nano 30B-A3B backbone with C-RADIOv4-H vision and Parakeet-TDT audio encoders.
- **Pricing:** Open weights; infrastructure-dependent.

### Raw benchmarks found

- NVIDIA reports leading or near-leading results on OCRBench-V2, MMLongBench-DOC, VoiceBench, WorldSense, and DailyOmni.
- On B200, single-stream output throughput is **3×** Qwen3-Omni and throughput per GPU at a fixed interactivity target is **9×** higher.
- The official report documents 256K context and strong agentic computer use ([NVIDIA technical report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Omni-report.pdf)).

### Normalized scores (1–100)

- **Tool use: 75/100.** Computer-use capability is a stated strength, but broadly comparable exact agent scores are limited.
- **Reasoning: 74/100.** The 30B-A3B reasoning backbone is capable, though the report emphasizes multimodal tasks over frontier text reasoning.
- **Context window: 82/100.** 256K native context is substantial and designed for long heterogeneous sequences.
- **Multimodal: 92/100.** Native image, video, and audio support plus leading document and audio-video results are outstanding.
- **Coding: 68/100.** The text backbone can code, but the release supplies little direct software-engineering evidence.
- **Cost efficiency: 97/100.** Open quantized checkpoints and major B200 throughput gains make deployment highly efficient.
- **Overall Score: 78/100.** Half-up mean of the five non-cost dimensions; best for efficient self-hosted document and audio-video understanding.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using NVIDIA's official technical report and launch materials; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
