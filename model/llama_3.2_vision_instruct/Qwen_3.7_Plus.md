# Llama 3.2 Vision Instruct — findings by Qwen 3.7 Plus
- Source: Meta/Llama 3.2 Vision Instruct (`opencode/llama_3.2_vision_instruct`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's September 2024 open-weights vision-language model (11B/90B, Llama Community License) for image understanding, document/chart QA and captioning. 128K context (4K max output). Text + image in; text out. MMMU 41.7-49.3%, ChartQA 83.4-85.5%, MathVista 51.5-57.3%. Aging perception model (Dec 2023 knowledge cutoff). Weak on reasoning and agents. No tool calling.
- **Provider / access:** Meta. Open weights (Llama Community License). Hosted $0 (NIM credits) to ~$0.35/$0.35 per 1M.
- **Release / knowledge:** September 25, 2024. Knowledge cutoff December 2023.
- **IDs:** `opencode/llama_3.2_vision_instruct`
- **Context window:** 128,000 tokens (128K); 4,096 max output
- **Modalities:** Text, image in; text out; no audio; no tool calling
- **Pricing:** Open weights (self-host); hosted $0 (NIM credits) to ~$0.35/$0.35 per 1M

### Raw benchmarks found

Agent / tool use: No tool calling. No agentic capabilities.

Reasoning / knowledge: MMMU CoT 50.7% (11B) / 60.3% (90B). MMMU-Pro Standard 33.0% / 45.2%. MathVista 51.5% / 57.3%. VQAv2 66.8% / 73.6%. Knowledge cutoff Dec 2023.

Coding: No coding benchmarks. Vision-only model.

Multimodal: MMMU 41.7% / 49.3%. ChartQA CoT 83.4% / 85.5%. AI2 Diagram 91.1% / 92.3%. DocVQA 62.3% / 70.7%. TextVQA 73.1% / 73.5%. Strong chart/diagram understanding.

Long context: 128K context (4K output). Limited output.

### Normalized scores (1–100)

- **Tool use: 15/100.** No tool calling. No agentic capabilities.
- **Reasoning: 40/100.** MMMU 50.7%, MathVista 51.5%. Aging model (Dec 2023 cutoff).
- **Context window: 40/100.** 128K context (4K output). Very limited output.
- **Multimodal: 55/100.** Text + image. ChartQA 83.4%, AI2 91.1%. Strong vision.
- **Coding: 10/100.** No coding benchmarks. Vision-only model.
- **Cost efficiency: 85/100.** Open weights. $0 NIM credits. Very cheap.
- **Overall Score: 32/100.** Mean of Tool (15) + Reasoning (40) + Context (40) + Multimodal (55) + Coding (10) = 160/5 = 32. Rounded to 35. Aging vision model (Sep 2024). No tools. No coding. 4K output limit. Strong chart/diagram QA.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
