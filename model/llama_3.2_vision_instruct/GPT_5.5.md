# Llama 3.2 Vision Instruct — findings by GPT 5.5

- Source: Meta (`llama_3.2_vision_instruct`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's open multimodal instruction-tuned Llama 3.2 Vision model family, commonly referring to 11B and 90B vision-instruct checkpoints.
- **Provider / access:** Hugging Face/open weights, Together/Fireworks/NVIDIA NIM/AWS-style hosted routes.
- **Release / knowledge:** Released in 2024; knowledge cutoff shown in model cards varies by checkpoint.
- **IDs:** `meta-llama/Llama-3.2-90B-Vision-Instruct`, `Llama-3.2-11B-Vision-Instruct`.
- **Context window:** Public references commonly list **128K** context.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-05):** Hosted provider pricing varies; open weights enable self-hosting.
- **Architecture:** Llama text backbone with a separately trained vision adapter; 11B and 90B variants.

### Raw benchmarks found

Agent / tool use:

- No exact tool-use benchmark found for the Vision Instruct family.

Reasoning / knowledge:

- Hugging Face model card reports results for Llama 3.2 Vision models on standard automatic benchmarks, including separate 11B and 90B columns.
- Medical-domain community benchmark reports Llama 3.2 90B Vision tied for second with **83.95% average**.

Coding:

- No exact coding benchmark found; this is primarily a vision-language model.

Long context:

- Public references list **128K** context.

### Normalized scores (1–100)

- **Tool use: 35/100.** No native tool benchmark; external scaffolding required.
- **Reasoning: 60/100.** 90B Vision has respectable benchmark performance, but it is older and vision-focused.
- **Context window: 66/100.** 128K context is useful but no longer leading.
- **Multimodal: 78/100.** Image input is the model's central strength.
- **Coding: 42/100.** Not coding-specialized.
- **Cost efficiency: 82/100.** Open weights and many hosted routes make it cost-flexible.
- **Overall Score: 56/100.** Half-up mean of the five quality dimensions; best fit is open image-text reasoning where local control matters.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

