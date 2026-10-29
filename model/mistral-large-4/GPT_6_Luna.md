# Mistral Large 4 — findings by GPT-6 Luna

- Source: Mistral AI/Mistral Large 4 (ML4, v26.10)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's trillion-parameter, natively multimodal mixture-of-experts model for general reasoning, coding, agentic workflows, and visual understanding. The release is a public-preview API model; current Mistral Docs describe it as open-weight, while the launch post said weights would follow at the end of October (the exact weights-publication date was not verified).
- **Provider / access:** Mistral AI API / Mistral Studio. Current Mistral docs list Chat Completions, Conversations, batching, agents, function calling, structured outputs, and document Q&A. Mistral's docs identify the model as **Mistral Large 4, v26.10**; provider catalogs expose API ID `mistral-large-4-0` (OpenRouter ID `mistralai/mistral-large-4-0`).
- **Release / knowledge:** Mistral announced the public-preview API on **October 6, 2026**. No training-data cutoff verified.
- **IDs:** Mistral docs: `Mistral Large 4` / version `26.10`; API model ID exposed by provider catalog: `mistral-large-4-0`.
- **Context window:** Mistral Docs and OpenRouter list **1,048,576 tokens (1M)**. Vals AI's exact-model page reports **512K**, a source conflict; the first-party API limit is used for scoring. Vals lists max output 256K; no max-output limit was displayed on the Mistral model page.
- **Modalities:** Text and image input, text output. Mistral describes the model as natively multimodal and highlights image/document understanding; Vals and OpenRouter specify text+image → text. Video/audio input and non-text output were not verified.
- **Pricing (as of 2026-10-29):** Mistral's current model page lists **$1.36 input / $0.14 cached input / $4.18 output per 1M tokens**. The October 6 launch announcement repeats $1.36/$4.18. An independent Mistral Large 4 microsite lists older “launch rates” of $0.68/$2.09, so the current first-party values are used.
- **Architecture:** Open-weight, granular MoE: **1.05T total parameters, 52B active parameters**, plus a **1.6B vision encoder**, per Mistral's official model docs. Mistral says it was trained from scratch on 3,800 NVIDIA Grace Blackwell GPUs.

### Raw benchmarks found

Three independent public web searches were followed by checks of Mistral's exact [release announcement](https://mistral.ai/news/mistral-large-4/), [Mistral Docs model page](https://docs.mistral.ai/models/mistral-large), OpenRouter's exact model record, and Vals AI's [Mistral Large 4 evaluation page](https://www.vals.ai/models/mistralai_mistral-large-4). Provider-posted results and Vals runs are kept distinct; benchmark versions and harnesses are not interchangeable.

Agent / tool use:

- AutomationBench: **59.9%** across 657 business workflows; AA-Briefcase: **1,393 Elo** (Mistral release announcement).
- Cybench: **93%**; CyberGym-E2E: **82%** (provider-reported cybersecurity results in the same announcement; not treated as general tool-use scores).
- No exact-model Tau3-Banking, GDPval-AA, OSWorld, or Claw-Eval result verified.

Reasoning / knowledge:

- No exact-model GPQA Diamond, HLE, or Intelligence Index score verified. Mistral reports strong science/math capabilities and says the model is state-of-the-art among open-weight models on SciCode-Verified, but gives no score in the release text.
- Vals AI reports **17.50% ± 3.22 on HLAB-Vals-1.1** (rank 7/30). This is a separate evaluation, not a substitute for HLE or GPQA.

Coding:

- DeepSWE v1.1: **61.7%**; SWE-Atlas-QnA: **59.4%**; Terminal-Bench 4.0: **28.3%**; Coding Agent Index: **49.8%** (Mistral provider-reported launch results).
- Vals AI lists Vibe Code Bench v1.1: **78.40% ± 3.55**, Terminal-Bench 4.0: **27.78% ± 1.82**, SWE-bench Multimodal: **33.13% ± 2.15**, and Code Migration: **30.56% ± 4.22**. Vals notes some benchmarks may use different providers or parameters; its default provider is Mistral, temperature 1, reasoning effort high.

Vision and long context:

- Dense200 visual grounding: **42%** (Mistral compares this with GPT-6 Astra at 41%). Mistral also describes image/document/chart understanding, but no exact-model MMMU-Pro score was verified.
- Official Mistral API context is 1M; Vals reports 512K. No MRCR/RULER retrieval score found.

### Normalized scores (1–100)

- **Tool use: 84/100.** AutomationBench 59.9% and AA-Briefcase 1,393 Elo are good evidence for agentic and professional-work tasks; no Tau3, OSWorld, or Claw-Eval result was verified, and TB4.0 is a distinct terminal benchmark.
- **Reasoning: 78/100.** Mistral reports scientific/mathematical strengths and Vals HLAB-Vals-1.1 is 17.5% (rank 7/30), but no exact-model GPQA/HLE or comparable general reasoning score supports a frontier rating.
- **Context window: 95/100.** First-party docs specify 1M, which reaches the top context tier; no retrieval-quality score supports 100, and Vals AI's 512K listing conflicts with the official API limit.
- **Multimodal: 67/100.** Verified image input fits the methodology's image-input range; there is no verified audio/video input or non-text output.
- **Coding: 80/100.** DeepSWE v1.1 61.7% and SWE-Atlas-QnA 59.4% are strong; the Coding Agent Index is 49.8% and Terminal-Bench 4.0 28.3%, below the methodology's frontier reference levels. Vals results vary across coding tasks and harnesses.
- **Cost efficiency: 87/100.** Current Mistral API pricing of $1.36/$4.18 per million input/output tokens is close to the methodology's ~$1.25/$4.25 reference; cached input is $0.14. Older third-party launch rates are lower and not used.
- **Overall Score: 81/100.** Half-up mean of the five quality dimensions (84, 78, 95, 67, 80 = 80.8), excluding cost; a promising long-context, agentic, image-capable open-weight model, with limited public general-reasoning scores and mixed coding benchmarks as caveats.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public searches, followed by checks of Mistral's release announcement and exact model docs, OpenRouter's exact ID/pricing record, and Vals AI's independent evaluation page. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
