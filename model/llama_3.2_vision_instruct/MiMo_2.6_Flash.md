# Llama 3.2 Vision Instruct — findings by Mimo v2.6 Flash

- Source: Meta/`llama_3.2_vision_instruct` (Llama 3.2-Vision-Instruct, 11B and 90B)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (Llama-3.2-11B-Vision-Instruct / Llama-3.2-90B-Vision-Instruct)
- **Short description:** Meta's 2024 multimodal vision instruction-tuned pair (11B and 90B) for image reasoning, captioning and visual Q&A; open weights under the Llama 3.2 community license. Not a reasoning/agentic model — a two-year-old general VLM, and **not** a variant of the Llama 3.2 text-only 1B/3B or of any Llama 4 entry.
- **Provider / access:** OpenCode Zen `opencode/llama_3.2_vision_instruct` (folder `meta.json`); also Cloudflare Workers AI (`meta/llama-3.2-11b-vision-instruct`), NVIDIA NIM/build.nvidia.com, Azure AI Foundry, AWS/Bedrock, Together etc. OpenAI-compatible Chat Completions.
- **Release / knowledge:** 2024-09-25 (Meta); knowledge cutoff **December 2023**.
- **IDs:** `opencode/llama_3.2_vision_instruct` (Zen); `meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct` (Hugging Face). **Size served on Zen is not stated in `meta.json`** — benchmarks below are given for both, scored on the 90B flagship with the 11B deltas noted.
- **Context window:** 128,000 tokens (Meta model card / Cloudflare / Azure); Azure **serverless** endpoints cap at 8K. Max output not specified by Meta (host-dependent).
- **Modalities:** text + image in; text out; no audio/video/PDF input. No reasoning/thinking mode (2024-era non-reasoning model). Tool calls: **not benchmarked and not advertised for the Vision variants** — Meta's function-calling documentation targets the text Llama 3.1/3.2 models; no verified public tool-use score for the vision checkpoints. JSON mode: host-dependent.
- **Pricing (as of 2026-09-25):** Cloudflare Workers AI 11B Vision Instruct **$0.049 in / $0.68 out** per 1M (Wide Area Intelligence mirrors $0.053 / $0.74); Zen `meta.json` records "Standard pricing" with no Free-tier flag; open weights are free to self-host under the Llama 3.2 license.
- **Architecture:** dense 11B (10.6B) and 90B (88.8B) with GQA; 6B (image, text) training pairs; proprietary Llama 3.2 Vision architecture, open weights (Llama 3.2 Community License).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1 / 2.0: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found (N/A — no public run)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA: **46.7%** (90B) / **32.8%** (11B) (Meta model card, 0-shot accuracy)
- MMLU (CoT): **86.0%** (90B) / **73.0%** (11B) (Meta model card)
- MATH (CoT): **68.0%** (90B) / **51.9%** (11B); MGSM: **86.9%** (90B) / **68.9%** (11B) (Meta)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found (the Meta card reports no coding benchmark for this family)

Multimodal (the family's actual strength — measured):

- MMMU (val, CoT): **60.3%** (90B) / **50.7%** (11B); MMMU-Pro Standard: 45.2% / 33.0%; MMMU-Pro Vision: 33.8% / 23.7% (Meta)
- DocVQA (test): **90.1%** ANLS (90B) / 88.4% (11B); ChartQA: 85.5% / 83.4%; AI2D: 92.3% / 91.1%; VQAv2: 78.1% / 75.2%; MathVista: 57.3% / 51.5% (Meta)

Long context:

- 128,000-token window (Meta / Cloudflare / Azure); MRCR / RULER / GraphWalks: no long-context retrieval reported (Azure serverless limited to 8K)

### Normalized scores (1–100)

- **Tool use: 40/100.** Provisional and evidence-poor: zero measured tool-use benchmarks (no TB, Tau, GDPval, Toolathon, Claw-Eval) and function calling is not advertised for the Vision checkpoints, so the score reflects an unbenchmarked 2024 VLM rather than a measured failure. Missing Claw-Eval is logged as N/A per methodology with the standard slight penalty.
- **Reasoning: 52/100.** GPQA 46.7% (90B) sits below the mid-band reference (GPQA 60–80 → 55–65), while MMLU 86.0 and MATH 68.0 are solid for their generation; no HLE, LCR, CritPt or Intelligence Index exists for this model. Capped by GPQA falling short of the mid band and a December 2023 knowledge cutoff.
- **Context window: 55/100.** 128K lands in the 100K–200K tier (50–64) per the tier mapping, with the Azure serverless 8K cap noted as a hosting caveat and no retrieval-accuracy test published.
- **Multimodal: 65/100.** Text + image in / text out sits in the +image-in band (60–70); MMMU 60.3, DocVQA 90.1, AI2D 92.3 are genuinely strong. Not above 70 because there is no video/PDF/audio input and no non-text output.
- **Coding: 48/100.** Provisional: the Meta card publishes no coding benchmark at all for this family (no SWE-bench, LiveCodeBench, SciCode, DeepSWE, Coding Index), so this is a below-mid proxy score from MMLU/MATH and the model's general-VLM positioning, not a measured coding result. Would be re-scored upward if any SWE/LCB run appears.
- **Cost efficiency: 94/100.** $0.049 in (Cloudflare) with $0.68–0.74 out sits between the ~$0.10/$0.20 → 97–99 and ~$0.60/$2.20 → 92 anchors; open weights make self-hosting free, and no Zen Free-tier flag is recorded.
- **Overall Score: 52/100.** (40 + 52 + 55 + 65 + 48) / 5 = 52.0 → 52 — best-fit as a cheap open-weights image-understanding/description model (DocVQA/AI2D/ChartQA); do not pick it for agentic tool work, coding, long-context or frontier reasoning.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: fresh public internet research (Meta Llama 3.2 Vision model card on GitHub/Hugging Face, NVIDIA NIM reference cards, Cloudflare Workers AI docs, Azure AI Foundry catalog, third-party pricing trackers); scores are normalized 1–100 interpretations, not official vendor scores. Coding and tool-use dims are explicitly provisional (no measured public data).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
