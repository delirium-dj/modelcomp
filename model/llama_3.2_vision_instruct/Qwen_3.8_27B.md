# Llama 3.2 Vision Instruct — findings by Qwen 3.8 27B

- Source: Meta (`opencode/llama_3.2_vision_instruct`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (Llama 3.2-Vision family; 11B and 90B sizes — 90B is the flagship)
- **Short description:** Meta's multimodal instruct models built on Llama 3.1 with a trained vision adapter (cross-attention layers); text + image in / text out, tuned for visual recognition, image reasoning, DocVQA, captioning and visual grounding.
- **Provider / access:** Open weights on Hugging Face (`meta-llama/Llama-3.2-90B-Vision-Instruct`, `meta-llama/Llama-3.2-11B-Vision-Instruct`, gated Llama 3.2 Community License); local via transformers/vLLM/SGLang/llama.cpp. meta.json lists OpenCode Zen ID `opencode/llama_3.2_vision_instruct` — the ID was not present in the Zen docs model list or `zen/v1/models` fetched 2026-09-29.
- **Release / knowledge:** Model release date Sept 25, 2024 (HF model card); data/knowledge cutoff December 2023.
- **IDs:** `opencode/llama_3.2_vision_instruct` (meta.json, not verified on the current Zen list); `meta-llama/Llama-3.2-90B-Vision-Instruct` / `meta-llama/Llama-3.2-11B-Vision-Instruct` (Hugging Face).
- **Context window:** 128K (HF model card, both sizes; matches meta.json).
- **Modalities:** meta.json says text in/out; the vendor model card states Text + Image in / Text out (image+text only in English). No video/audio/PDF input, text output only.
- **Pricing (as of 2026-09-29):** "Standard pricing" per meta.json — no verified API pricing found on the pages fetched this session; open weights free to self-host under the Llama 3.2 Community License.
- **Architecture:** 90B (88.8B) or 11B (10.6B) total params; Llama 3.1 base + separately trained vision adapter; GQA; SFT + RLHF; Llama 3.2 Community License.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for this exact model
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA / AutomationBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (**huggingface.co/meta-llama/Llama-3.2-90B-Vision-Instruct**, vendor card, 90B instruct): **46.7%** 0-shot CoT; GPQA Diamond **46.09** (HF evaleval leaderboard, same page)
- MMLU CoT (vendor card, 90B): **86.0**; MATH CoT: **68.0**; MGSM CoT: **86.9**
- GSM8K (HF evaleval, 90B): **93.1**
- HLE: no verified public score found
- LCR / MRCR: no verified public score found
- CritPt: no verified public score found
- AA Intelligence Index / BenchLM overall: no verified public score found (benchlm.ai 404 for `llama-3.2-vision-instruct`)
- Image understanding (vendor card, 90B instruct): MMMU val CoT **60.3**, MMMU-Pro Standard **45.2**, MathVista testmini **57.3**, ChartQA test CoT relaxed **85.5**, AI2 Diagram **92.3**, DocVQA test ANLS **90.1**, VQAv2 test **78.1**

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for this exact model
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval (MRCR/RULER) numbers published on the fetched pages; 128K window.

### Normalized scores (1–100)

- **Tool use: 30/100.** No verified public agent/tool-use benchmark (TB2.1, Tau, GDPval, Claw, Toolathon) exists for this exact model; a 2024 model predating that benchmark era — provisional floor, not a measured middle.
- **Reasoning: 45/100.** GPQA 46.7% sits below the mid band (60–80 → 55–65) while MMLU 86.0 / MATH 68.0 / GSM8K 93.1 are solid general-knowledge numbers; HLE and AA-Index not found.
- **Context window: 55/100.** 128K total — 100K–200K tier = 50–64.
- **Multimodal: 65/100.** Text + image in / text out; strong vendor image scores (DocVQA 90.1, ChartQA 85.5, AI2 Diagram 92.3) but no video/PDF/audio input and text-only output cap it at the 60–70 image-in band.
- **Coding: 35/100.** No verified public coding benchmark found for this exact model; it is a vision-tuned instruct model, not a coding model — provisional low score.
- **Cost efficiency: 60/100.** No verified API pricing found on fetched pages (meta.json only says "Standard pricing"); open weights free to self-host under the community license — provisional middle score.
- **Overall Score: 46.0/100.** Mean of Tool 30, Reasoning 45, Context 55, Multimodal 65, Coding 35; best fit: local image understanding / VQA / DocVQA workloads, not agentic or coding tasks.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (huggingface.co/meta-llama/Llama-3.2-90B-Vision-Instruct, benchlm.ai 404 check, opencode.ai/zen/v1/models; retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
