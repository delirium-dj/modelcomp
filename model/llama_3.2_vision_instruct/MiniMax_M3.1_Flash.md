# Llama 3.2 Vision Instruct — findings by MiniMax M3.1 Flash

- Source: Meta (Llama 3.2 Vision Instruct), `meta-llama/Llama-3.2-11B-Vision-Instruct`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (11B; sibling 90B)
- **Short description:** Meta's September 2024 open-weight vision model — a Llama 3.1 text backbone with a separately-trained cross-attention vision adapter, 128K context but a **4K output cap**, and strong document/chart reading (DocVQA 88.4, AI2D 91.1) at a modest reasoning level (GPQA 32.8). Now a legacy route: the 11B/90B Vision SKUs have been delisted by most hosts.
- **Provider / access:** Hugging Face `meta-llama/Llama-3.2-11B-Vision-Instruct` and `meta-llama/Llama-3.2-90B-Vision-Instruct`; hosted on NVIDIA NIM (free dev tier, `meta/llama-3.2-11b-vision-instruct`), Cloudflare Workers AI (**$0.0485/M in, $0.676/M out**), inference.net ($0.055/$0.055), DeepInfra via Eden AI ($0.345/$0.345), io.net 90B ($0.35/$0.40), and Fireworks (deploy-only, no serverless price). **Together, Groq, Cerebras and OpenRouter have delisted the 11B/90B Vision SKUs**; the id `opencode/llama_3.2_vision_instruct` does not resolve on Zen.
- **Release / knowledge:** **2024-09-25**. Knowledge cutoff **December 2023**.
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct` (HF).
- **Context window:** **128,000** tokens, **4,096** max output.
- **Modalities:** text and image input; text out. **Tool calling works only for text-only prompts** ("Tool Calling does NOT work with images in the prompt as of now"). Vision encoder tiles: `image_size` 448, `patch_size` 14, `max_num_tiles` 4, aspect ratios 1:1–4:1.
- **Pricing (as of 2026-10-20):** $0.0485–$0.35/M in and $0.055–$0.676/M out depending on host; open weights under the **Llama 3.2 Community License** (custom, commercial with a >700M-MAU clause, "Built with Llama" attribution, and for the 2.x multimodal models a clause withholding the §1(a) rights from EU-based individuals and EU-headquartered companies).
- **Architecture:** proprietary open weights — 10.6B (11B) / 88.8B (90B), GQA, cross-attention vision adapter on a Llama 3.1 backbone, SFT + RLHF, 6B image+text pretraining pairs, 2.02M H100-hours total for the family.

### Raw benchmarks found

> Every number is from Meta's own model card (two tables: pretrained base vs
> instruction-tuned). No tracker carries a Llama 3.2 Vision page.

Multimodal (instruction-tuned, 11B / 90B):

- DocVQA test ANLS: **88.4 / 90.1** · AI2 Diagram test: **91.1 / 92.3** · ChartQA test CoT (relaxed): **83.4 / 85.5** · VQAv2 test: **75.2 / 78.1** · MMMU val CoT: **50.7 / 60.3** · MMMU-Pro Standard: **33.0 / 45.2** · MathVista testmini: **51.5 / 57.3** · MMBench and the LLaVA-suite benchmarks: **no verified public score found** (Meta publishes neither)

Reasoning / knowledge (11B / 90B):

- MMLU CoT: **73.0 / 86.0** · GPQA: **32.8 / 46.7** · MATH CoT (final_em): **51.9 / 68.0** · MGSM CoT (em): **68.9 / 86.9**
- Artificial Analysis (11B): Intelligence Index — no verified value published; GPQA **22.12%**, HLE **5.53%**, MMMU-Pro **29.31%**, LiveCodeBench **11.01%**, AIME 2025 **1.67%**, τ²-bench **14.62%**, IFBench **30.41%**, AA-LCR **12.67%**, hallucination rate **81.88%**
- Terminal-Bench / SWE-bench / DeepSWE / SciCode: **no verified public score found** for either size

### Normalized scores (1–100)

- **Tool use: 35/100.** Tool calling exists but is disabled when an image is present, and there is no Terminal-Bench, τ², GDPval or OSWorld measurement for either size.
- **Reasoning: 45/100.** MMLU 73.0% and MATH 51.9% (11B) are respectable for 2024, but GPQA 32.8%, AA's GPQA 22.1%, HLE 5.5% and an 81.9% hallucination rate keep it in the lower band.
- **Context window: 60/100.** 128,000 tokens with a **4,096-token output cap** — the small output window is the practical limit, and no retrieval test is published.
- **Multimodal: 68/100.** Image in, text out — the "+image in" band, with excellent document/chart reading (DocVQA 88.4, AI2D 91.1) but no audio, no video and no non-text output.
- **Coding: 35/100.** MATH 51.9% is the only code-adjacent number; LiveCodeBench 11.0% (AA) and no SWE-bench row mean coding is effectively unmeasured.
- **Cost efficiency: 96/100.** Hosted from $0.0485/M in (Cloudflare) to $0.35/M (io.net), and the open weights are free to self-host under the Llama 3.2 Community Licence.
- **Overall Score: 49/100.** Mean of the five quality dims = (35 + 45 + 60 + 68 + 35) / 5 = 48.6 → **49**. Best fit: legacy document/chart QA on a 4K-output budget — the 90B sibling roughly doubles the reasoning scores, but most hosts have delisted both.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Meta Llama 3.2 11B/90B Vision model cards and the llama-models licence/AUP, Artificial Analysis, models.dev, Hugging Face model docs, OpenRouter catalogue check); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Llama_3.3_70B.md`, using the same headings.
