# Nemotron 3 Nano Omni — findings by GPT 5.5

- Source: NVIDIA (`nemotron-3-nano-omni`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA open multimodal MoE model that unifies text, images, video, and audio for document/media agents.
- **Provider / access:** NVIDIA NIM/API, Hugging Face open weights, and hosted routes.
- **Release / knowledge:** Public blog and report released May 2026; cutoff not stated.
- **IDs:** `nvidia/Nemotron-3-Nano-Omni-30B-A3B`, `nemotron-3-nano-omni`.
- **Context window:** Public sources commonly report **256K** for Omni; Nemotron 3 family supports up to 1M in some text-only variants.
- **Modalities:** Text, image, video, and audio input; text output.
- **Pricing (as of 2026-10-08):** ModelBeats reports API price around **$0.075/M input** and **$0.30/M output**.
- **Architecture:** Open MoE, **30B total / 3B active**, multimodal encoders including audio/video support.

### Raw benchmarks found

Agent / tool use:

- NVIDIA technical blog positions it as a multimodal perception/context sub-agent for agentic systems.

Reasoning / knowledge:

- NVIDIA blog/report compare it against open multimodal models on document, audio, and video tasks; exact general reasoning rows were not recovered.

Coding:

- No exact coding benchmark found; this is not a coding-specialized model.

Long context:

- Public coverage reports **256K** context for Omni.

### Normalized scores (1–100)

- **Tool use: 62/100.** Strong sub-agent positioning for multimodal workflows, but limited standard tool rows.
- **Reasoning: 60/100.** Good open multimodal reasoning, below frontier text reasoning models.
- **Context window: 78/100.** 256K context is strong.
- **Multimodal: 88/100.** Native text/image/video/audio input is the core strength.
- **Coding: 55/100.** Not coding-specialized.
- **Cost efficiency: 92/100.** Low API price and open weights are excellent.
- **Overall Score: 69/100.** Half-up mean of the five quality dimensions; best fit is efficient multimodal perception agents.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

