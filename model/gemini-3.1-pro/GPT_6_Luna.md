# Gemini 3.1 Pro — findings by GPT-6 Luna

- Source: Google DeepMind/Gemini 3.1 Pro
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's proprietary natively multimodal reasoning model for complex coding, planning and long-context work. The currently documented Gemini API route is the Pro Preview ID; Google's model card uses the shorter Gemini 3.1 Pro name.
- **Provider / access:** Google Gemini Developer API / Google AI Studio, using `models.generateContent`.
- **Release / knowledge:** Model card published 2026-02-19. No exact knowledge-cutoff date was stated in the sources reviewed.
- **IDs:** Gemini API `gemini-3.1-pro-preview` (and `gemini-3.1-pro-preview-customtools`). No Free-tier Gemini API price or OpenCode Zen Free ID verified.
- **Context window:** Up to 1M input tokens; output up to 64K. Google's long-context evaluation reports separate 128K and 1M performance.
- **Modalities:** Text, image, audio and video input; text output. Tool calling, structured outputs and JSON mode are supported.
- **Pricing (as of 2026-10-28):** Standard API $2/M input and $12/M output for prompts up to 200K; $4/M input and $18/M output above 200K. Cached-input rates also increase above 200K. No Free tier listed.
- **Architecture:** Proprietary and based on Gemini 3 Pro; parameter count not disclosed in the reviewed model card.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **90.8% Retail / 99.3% Telecom**; MCP Atlas: **69.2%**; BrowseComp: **85.9%** (Google model card).
- Terminal-Bench 2.0: **68.5%** with the Terminus-2 harness (Google model card).
- Berkeley Function Calling Leaderboard v3: **71.2%** (LayerLens independent run; its article reports 14,549 total test cases across its evaluation suite).
- GDPval-AA: **1317 Elo** (Google model card).

Reasoning / knowledge:

- GPQA Diamond: **94.3%**; Humanity's Last Exam: **44.4%**; ARC-AGI-2 (ARC Prize Verified): **77.1%** (Google model card).
- Artificial Analysis reports Gemini 3.1 Pro Preview leading six of ten evaluations in its February 2026 Intelligence Index snapshot, including GPQA-Diamond, HLE, CritPt and Terminal-Bench Hard.

Coding:

- SWE-bench Verified: **80.6%** (single attempt); SWE-bench Pro Public: **54.2%**; LiveCodeBench Pro: **2887 Elo**; SciCode: **59%** (Google model card).
- LayerLens reports **61.0% LiveCodeBench** and **48.7% SWE Bench Lite** in its separate 14,549-case evaluation.

Long context:

- MRCR v2 8-needle: **84.9% at 128K** and **26.3% at 1M** (Google model card). The 1M nominal window therefore does not mean equally reliable retrieval at maximum length.

### Normalized scores (1–100)

- **Tool use: 86/100.** τ² Retail/Telecom, MCP Atlas, BrowseComp and Terminal-Bench 2.0 show capable agent use; GDPval-AA 1317 and the independent BFCL 71.2% keep the score below top-tier tool performance.
- **Reasoning: 93/100.** GPQA 94.3%, HLE 44.4% and verified ARC-AGI-2 77.1% support a very high reasoning score; results are still evaluation-specific.
- **Context window: 82/100.** Although the advertised limit is 1M, MRCR retrieval falls from 84.9% at 128K to 26.3% at 1M, materially capping practical long-context reliability.
- **Multimodal: 95/100.** Official specifications support image, audio and video input in addition to text; output is text-only.
- **Coding: 90/100.** SWE-bench Verified 80.6%, SWE-bench Pro 54.2%, SciCode 59%, and LiveCodeBench Pro 2887 Elo support strong coding, while the lower independent SWE Bench Lite result shows task/harness sensitivity.
- **Cost efficiency: 65/100.** $2/$12 applies only to prompts up to 200K; long prompts cost $4/$18 per million and the API lists no free tier.
- **Overall Score: 89/100.** (86 + 93 + 82 + 95 + 90) / 5 = 89.2, rounded half-up; a strong reasoning/coding choice when work stays below the 1M retrieval-quality drop-off.

---

## Evidence comparison and source notes

- Google's card reports ARC-AGI-2 at 77.1% on the ARC Prize Verified track; LayerLens reports 92.3% on an ARC AGI 2 entry. The LayerLens article does not establish that it used the same verified subset/protocol, so these are not treated as directly comparable or averaged.
- Google's SWE-bench Verified result is 80.6% single-attempt; LayerLens reports 48.7% on SWE Bench Lite. Different benchmark variants and harnesses explain why the latter is not a replacement for the official figure. LayerLens also reports LiveCodeBench at 61.0%, whereas Google's LiveCodeBench Pro result is Elo 2887; these are different metrics.
- The large MRCR drop from 84.9% at 128K to 26.3% at 1M is the most important practical caveat against interpreting the full advertised context as uniformly reliable.

## Sources

- Google DeepMind, [Gemini 3.1 Pro model card](https://deepmind.google/models/model-cards/gemini-3-1-pro/) — official model description, modalities, 1M context and primary evaluations.
- Google, [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing) — exact Preview IDs and prompt-length price thresholds.
- Artificial Analysis, [Gemini 3.1 Pro Preview: The new leader in AI](https://artificialanalysis.ai/articles/gemini-3-1-pro-preview-new-leader-in-ai) — independent February 2026 benchmark and cost analysis.
- LayerLens, [Gemini 3.1 Pro benchmark review](https://layerlens.ai/blog/gemini-3-1-pro-benchmark-review) — separate independent benchmark suite and methodology notes.
- Bing searches performed 2026-10-28: [official model card / API / release](https://www.bing.com/search?q=%22Gemini+3.1+Pro%22+official+model+card+benchmarks+release+API), [Artificial Analysis benchmark](https://www.bing.com/search?q=%22Gemini+3.1+Pro%22+Artificial+Analysis+benchmark), [independent evaluation / review](https://www.bing.com/search?q=%22Gemini+3.1+Pro%22+independent+benchmark+evaluation+review).

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-28
- Method: Three successful Bing searches followed by direct review of Google model/API documentation, Artificial Analysis and LayerLens. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
