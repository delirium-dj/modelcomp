# Nemotron 3 Nano Omni 30B A3B — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `nemotron-3-nano-omni` (Nemotron 3 Nano Omni 30B A3B, NVIDIA) — folder: `model/nemotron-3-nano-omni`

## Overall
- **Overall Score: 84/100.** Open NVIDIA omni reasoning model (31B total / ~3B active) with text-image-video-audio understanding, 256K-class context, tool-calling/reasoning support, and free hosted access options, offering strong multimodal value for its size class.

## Scores
- **Tool use: 82/100.** NVIDIA’s model page states support for tool calling, JSON output, and reasoning with chain-of-thought, making it suitable for agentic and structured multimodal workflows (especially in supported runtimes/endpoints).
- **Reasoning: 80/100.** Marketed as an omni reasoning model with thinking/instruct modes and published multimodal benchmark results across grounding, document, video/audio, and OCR tasks; as a nano-class model it is capable but below frontier-depth reasoning models.
- **Context window: 86/100.** NVIDIA states maximum context up to 256K tokens (repo metadata notes 256,000–262,144 depending on source) with 65,536 max output, good for long multimodal/document sessions.
- **Multimodal: 93/100.** Accepts text, image, video, and audio inputs with text output, supporting transcription, video/audio understanding, OCR/document intelligence, GUI-related tasks, and omni Q&A in a single model family.
- **Coding: 78/100.** Useful for code-related assistance (including image/screenshot-informed tasks and tool-using workflows), but it is primarily positioned as an omni understanding/reasoning model rather than a dedicated top-tier coding specialist.
- **Cost efficiency: 90/100.** NVIDIA Build provides access (repo metadata notes $0 on NVIDIA Build/OpenRouter free route) and paid hosted options exist (e.g. DeepInfra per metadata), making it highly accessible for experimentation and cost-sensitive multimodal applications.
- **Overall Score: 84/100.** Excellent multimodal breadth and practical deployment/access options for an open nano-omni model, with expected tradeoffs in frontier reasoning depth and coding specialization.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://build.nvidia.com/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning
  - https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16
  - https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8
