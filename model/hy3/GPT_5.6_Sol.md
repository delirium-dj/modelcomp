# Hy3 — findings by GPT 5.6 Sol

- Source: Tencent (`tencent/hy3`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's open-weight, text-only Mixture-of-Experts model for configurable reasoning, coding, long-context work, and tool-driven agents.
- **Provider / access:** Open weights are published as [`tencent/Hy3`](https://huggingface.co/tencent/Hy3). Hosted access is available from Vercel AI Gateway and OpenRouter as `tencent/hy3`; Vercel supports Chat Completions, Responses, Messages, and AI SDK interfaces, while OpenRouter documents Chat Completions.
- **Release / knowledge:** Released 2026-07-06; no verified knowledge cutoff was published ([Artificial Analysis](https://artificialanalysis.ai/models/hy3), [Vercel](https://vercel.com/ai-gateway/models/hy3)).
- **IDs:** `tencent/Hy3` for weights and `tencent/hy3` for hosted APIs; no OpenCode Zen Free ID was verified.
- **Context window:** Tencent specifies 256K tokens; Vercel reports 262,144 total and up to 262,144 output tokens ([Tencent model card](https://huggingface.co/tencent/Hy3), [Vercel](https://vercel.com/ai-gateway/models/hy3)).
- **Modalities:** Text input and text output only. The API supports `no_think`, `low`, and `high` reasoning effort; OpenRouter advertises tool choice, tool calls, structured response format, and reasoning controls ([Tencent model card](https://huggingface.co/tencent/Hy3), [OpenRouter](https://openrouter.ai/tencent/hy3)).
- **Pricing (as of 2026-10-17):** Vercel lists $0.13/M input, $0.528/M output, and $0.033/M cached input. Artificial Analysis' cross-provider median is $0.136/M input and $0.555/M output, so the small difference is provider-specific ([Vercel](https://vercel.com/ai-gateway/models/hy3), [Artificial Analysis](https://artificialanalysis.ai/models/hy3)).
- **Architecture:** Apache-2.0 open-weight MoE with 295B total parameters, 21B active parameters, a 3.8B MTP layer, 80 transformer layers, and 192 experts with top-8 routing ([Tencent model card](https://huggingface.co/tencent/Hy3)). Artificial Analysis reports 299B total, a minor accounting discrepancy; Tencent's primary-source figure is used here.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1136 Elo / 28.3% normalized** ([Artificial Analysis results indexed by BenchLM](https://benchlm.ai/models/hy3)).
- Artificial Analysis Agentic Index: **25.6%** ([BenchLM](https://benchlm.ai/models/hy3)).
- SWE-Bench Verified scaffold stability: Tencent reports accuracy variance within **4 percentage points** across CodeBuddy, Cline, and KiloCode, but does not publish the underlying accuracy in text ([Tencent model card](https://huggingface.co/tencent/Hy3)).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **25.3** in the detailed benchmark feed; the current summary rounds this to **25** ([BenchLM](https://benchlm.ai/models/hy3), [Artificial Analysis](https://artificialanalysis.ai/models/hy3)).
- GPQA Diamond: **89.7%**; Humanity's Last Exam: **33.5%**; AA-LCR: **79.0%**; CritPt: **4.9%** ([BenchLM](https://benchlm.ai/models/hy3)).
- Omniscience Accuracy: **32.0%**; Omniscience Hallucination Rate: **74.1%**; resulting Omniscience Index: **-18.5** ([BenchLM](https://benchlm.ai/models/hy3)). This independent benchmark conflicts with Tencent's narrower internal claim that its real-world-scenario hallucination rate fell from **12.5% to 5.4%**, so the independent result controls the normalized score ([Tencent model card](https://huggingface.co/tencent/Hy3)).

Coding:

- AA-SciCode: **48.6%**; Artificial Analysis Coding Index: **58.8%** ([BenchLM](https://benchlm.ai/models/hy3)).
- Tencent's 270-expert blind productivity evaluation gave Hy3 **2.67/4**, versus **2.51/4** for GLM-5.1, with the largest reported gains in frontend development, data/storage, and CI/CD; this is vendor-run rather than independent ([Tencent model card](https://huggingface.co/tencent/Hy3)).
- Design Arena Website: **1183 Elo**, a useful frontend-output proxy but not evidence of image input ([BenchLM](https://benchlm.ai/models/hy3)).

Long context:

- AA-LCR: **79.0%** with a documented 256K model context window ([BenchLM](https://benchlm.ai/models/hy3), [Tencent model card](https://huggingface.co/tencent/Hy3)).

### Normalized scores (1–100)

- **Tool use: 66/100.** GDPval-AA 1136 and Agentic Index 25.6 place Hy3 in the methodology's mid band; documented tool support and cross-scaffold stability help, but no public Terminal-Bench or Tau result supports a higher score.
- **Reasoning: 73/100.** GPQA 89.7%, HLE 33.5%, and LCR 79% are strong, while the 25.3 Intelligence Index, 4.9% CritPt, and negative Omniscience result cap the score well below frontier.
- **Context window: 80/100.** The verified 256K tier maps to 65–84, and AA-LCR 79% supports the upper part of that band without demonstrating frontier retrieval at 512K or 1M.
- **Multimodal: 15/100.** Hy3 is explicitly text-only; website-design output does not establish image, audio, video, or non-text-output capability.
- **Coding: 82/100.** SciCode 48.6% and Coding Index 58.8% are strong, independently measured results, but neither reaches the methodology's frontier references and no exact SWE-bench accuracy is published in text.
- **Cost efficiency: 97/100.** Hosted pricing around $0.13/M input and $0.53/M output is exceptionally low, though not free.
- **Overall Score: 63/100.** The five quality dimensions average 63.2; Hy3 best fits low-cost text-only coding and long-context agent work where multimodal input is unnecessary.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-17
- Method: Fresh public internet research across Tencent's model card, independent Artificial Analysis measurements, BenchLM's exact-model index, and current provider catalogs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
