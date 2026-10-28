# Grok 4.6 — findings by GPT-6 Luna

- Source: xAI / SpaceX Super Intelligence (`grok-4.6`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's proprietary reasoning model for coding, long-running agents, knowledge work, and interactive/visual tasks. It is a distinct API model from Grok 4.5 and Grok 4.7.
- **Provider / access:** xAI API model ID `grok-4.6`; also available in Grok Build, Cursor, OpenRouter, Vercel, and Cloudflare. The API model supports function calling, structured outputs, reasoning, and reasoning efforts `low`, `medium`, `high`, and `xhigh` (default `high`). [xAI launch announcement](https://x.ai/news/grok-4-6) · [xAI model/pricing documentation](https://docs.x.ai/developers/models)
- **Release / knowledge:** Released August 12, 2026. I found no exact Grok 4.6 knowledge-cutoff statement in xAI's release or current model/pricing documentation; Grok 4.7's stated cutoff is not assumed to apply to 4.6. [xAI launch announcement](https://x.ai/news/grok-4-6) · [xAI model/pricing documentation](https://docs.x.ai/developers/models)
- **IDs:** API ID `grok-4.6`; no dated snapshot ID was listed in the official model catalog. [xAI model/pricing documentation](https://docs.x.ai/developers/models)
- **Context window:** 500,000 input tokens. xAI applies long-context pricing when a prompt reaches 200,000 tokens. [xAI model/pricing documentation](https://docs.x.ai/developers/models)
- **Modalities:** Text and image input; text output. The API docs list image input support; video and audio input/output are not listed for this model. [xAI model/pricing documentation](https://docs.x.ai/developers/models) · [Artificial Analysis](https://artificialanalysis.ai/models/grok-4-6)
- **Pricing (as of 2026-10-28):** Below 200K prompt tokens: $2/MTok input, $0.50/MTok cached input, and $6/MTok output. At or above 200K: $4/$1/$12 per MTok, respectively; the higher rate applies to all tokens in that request. [xAI model/pricing documentation](https://docs.x.ai/developers/models)
- **Architecture:** Proprietary; parameter count and detailed architecture are not disclosed. xAI says Grok 4.6 had a longer supplemental training run than 4.5, curated model-generated reasoning/engineering data, regenerated SFT trajectories, and agentic RL across coding, knowledge work, kernel optimization, web development, and CAD. [xAI launch announcement](https://x.ai/news/grok-4-6)

### Raw benchmarks found

> xAI's launch table labels its results as Grok 4.6 High. The current API default is `high`, while independent evaluations also use other effort settings and harnesses. Scores from different benchmark versions and efforts are kept separate.

Agent / tool use:

- xAI reports GDPval-AA **1,753 Elo**, APEX-Agents **57.5%**, AA-Briefcase **1,577 Elo**, Harvey LAB (Vals) **15.8%**, and Terminal-Bench 3.0 **26.0%**. The xAI table says third-party comparison figures come from model system cards or benchmark leaderboards. [xAI launch announcement](https://x.ai/news/grok-4-6)
- The October 28 BenchmarkList snapshot reports Tau3-Banking **50.7%** (rank 2/183), GDPval-AA **1,755 Elo**, APEX-Agents-AA **57.5%**, and Terminal-Bench 3.0 **26.5% ± 2.9%**. The small GDPval and Terminal-Bench differences are separate snapshots/evaluations, not averaged. [BenchmarkList](https://benchmarklist.com/models/x-ai-grok-4.6/)
- Terminal-Bench 2.1 is **88.4%** in the Artificial Analysis leaderboard results indexed by BenchmarkList. Do not compare this directly with Terminal-Bench 3.0's 26–26.5%: the benchmark edition and task distribution changed. [BenchmarkList](https://benchmarklist.com/models/x-ai-grok-4.6/) · [Artificial Analysis Terminal-Bench 2.1](https://artificialanalysis.ai/evaluations/terminalbench-v2-1)
- Claw-Eval / ClawProBench: **no exact-model result verified** in the sources checked.

Reasoning / knowledge:

- xAI's launch table reports the Artificial Analysis Intelligence Index at **61** for Grok 4.6 High. This is the launch-time index snapshot; Artificial Analysis now marks Grok 4.6 deprecated and no longer updates most workloads, so its current index field is N/A. [xAI launch announcement](https://x.ai/news/grok-4-6) · [Artificial Analysis](https://artificialanalysis.ai/models/grok-4-6)
- GPQA Diamond: **94.9%** on Artificial Analysis and **94.70% ± 1.13** on Vals AI. Vals also reports MMLU-Pro **89.40% ± 0.30**. [Artificial Analysis GPQA leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond) · [Vals AI](https://www.vals.ai/models/grok_grok-4.6)
- Humanity's Last Exam: **44.1%** on the BenchmarkList/Artificial Analysis snapshot. ARC-AGI-1 is **87.0–87.5%** across the ARC Prize-linked snapshots; ARC-AGI-2 is **67.1%** on the ARC Prize semi-private result. [BenchmarkList](https://benchmarklist.com/models/x-ai-grok-4.6/) · [ARC Prize Grok 4.6 results](https://arcprize.org/results/xai-grok-4-6)
- FrontierMath v2: **65.965%** on Tiers 1–3 and **31.707%** on Tier 4 in the Epoch AI-linked results indexed by BenchmarkList. [BenchmarkList](https://benchmarklist.com/models/x-ai-grok-4.6/) · [Epoch AI Tiers 1–3](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2) · [Epoch AI Tier 4](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- BenchmarkList composite: **66.66/100**, rank **#21/1,002**, with partial coverage of 41/717 tracked benchmarks. This is a third-party aggregate, not the project's normalized score. [BenchLM](https://benchlm.ai/models/grok-4-6)

Coding:

- xAI reports DeepSWE 1.1 **65.9%**, CursorBench 3.2 **69.9%**, FrontierCode 1.1 Extended **61.3%**, and APEX-SWE **56.4%**. [xAI launch announcement](https://x.ai/news/grok-4-6)
- Cursor's current CursorBench 3.2 results indexed by BenchmarkList list **70.8%** at `xhigh`; xAI's launch comparison lists **69.9%** for Grok 4.6 High. Since the effort differs, treat these as separate evaluations. [CursorBench](https://cursor.com/cursorbench) · [BenchmarkList](https://benchmarklist.com/models/x-ai-grok-4.6/)
- In Snorkel's Senior SWE-Bench run, Grok 4.6 at high effort scored **65.3% pass@3** on basic correctness, **38.9%** on the stricter tasteful bar, and **16.8% pass^3** (all three attempts succeed). The Mini-SWE-Agent/Harbor evaluation covered 95 tasks as of August 20, 2026; only output-token costs were counted in the reported $0.14/task. [Snorkel AI](https://snorkel.ai/grok-4-6-senior-swe-bench/)
- Vals AI lists LiveCodeBench **88.22% ± 0.94**, Vibe Code Bench v1.1 **76.24% ± 3.82**, and an unqualified `SWE-bench` result of **95.60% ± 0.92**. The Vals model card does not identify the SWE-bench split in its summary, so that result is not relabeled as Verified or Pro. [Vals AI](https://www.vals.ai/models/grok_grok-4.6)
- Terminal-Bench 4.0 is **17.17% ± 1.34** on Vals and **20.3%** in the BenchmarkList snapshot; this is a same-edition difference across evaluator runs/settings. [Vals AI](https://www.vals.ai/models/grok_grok-4.6) · [BenchmarkList](https://benchmarklist.com/models/x-ai-grok-4.6/)

Multimodal:

- xAI's API catalog confirms image input and text output. BenchmarkList reports Blueprint-Bench 2 **0.692 ± 0.009** (converting apartment images to floorplans), Chartography **21.9%**, and Design Arena **1,343 Elo**; the OpenRouter page snapshot lists **1,287 Elo** for Design Arena. These are vision/design-task results, not image-generation outputs from the `grok-4.6` API; the Design Arena ratings are dated snapshots and are not blended. [xAI model/pricing documentation](https://docs.x.ai/developers/models) · [BenchmarkList](https://benchmarklist.com/models/x-ai-grok-4.6/) · [OpenRouter benchmark page](https://openrouter.ai/x-ai/grok-4.6/benchmarks)
- No exact-model audio/video input or generated-image/video benchmark was verified.

Long context:

- xAI documents a **500K-token** maximum prompt. Artificial Analysis Long Context Reasoning (AA-LCR) appears as **80.3–81.0%** in third-party snapshots. [xAI model/pricing documentation](https://docs.x.ai/developers/models) · [BenchLM](https://benchlm.ai/models/grok-4-6) · [BenchmarkList](https://benchmarklist.com/models/x-ai-grok-4.6/)
- Context Arena reports high-effort average **73.5%**, with **21.0% AUC at 1M** and **56.9% cumulative average at 1M**. The benchmark's 1M-range summary exceeds the documented 500K API prompt limit, so it is not evidence that the API accepts 1M tokens; the lower 1M-range values indicate substantial long-distance retrieval difficulty. [BenchmarkList](https://benchmarklist.com/models/x-ai-grok-4.6/)

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong knowledge-work and agent results (GDPval-AA 1,753–1,755 Elo, APEX-Agents 57.5%, Tau3-Banking 50.7%); Terminal-Bench 3.0 is only 26–26.5%, and editions vary sharply.
- **Reasoning: 90/100.** GPQA Diamond is 94.7–94.9%, MMLU-Pro 89.4%, HLE 44.1%, and ARC-AGI-2 67.1%; xAI's launch-time AA Intelligence Index is 61.
- **Context window: 88/100.** The API supports 500K tokens, in the project's 500K–1M score tier; AA-LCR is around 80%, while Context Arena's 1M-range retrieval summaries are weak and extend past the documented API cap.
- **Multimodal: 68/100.** Image input is supported and vision/design benchmark results exist, but this API model outputs text only and has no verified audio/video input or non-text output.
- **Coding: 89/100.** DeepSWE 1.1 is 65.9%, CursorBench 3.2 is 69.9–70.8% across reported efforts, and Senior SWE-Bench pass@3 is 65.3%; Terminal-Bench 3.0 and 4.0 results are much lower than TB2.1.
- **Cost efficiency: 80/100.** $2/$6 per MTok is materially cheaper than the project's $3/$15 reference; cached input is $0.50. Requests at or above 200K prompt tokens are billed at $4/$12, reducing the long-context advantage.
- **Overall Score: 84/100.** Half-up mean of the five quality dimensions: (87 + 90 + 88 + 68 + 89) / 5 = 84.4. Strong for coding and multi-step professional agents at moderate API rates; validate vision and long-context behavior against your own tasks, and compare only like-for-like benchmark editions and effort settings.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent searches (Yahoo, DuckDuckGo, and Bing), followed by direct checks of xAI's release announcement and model/pricing documentation, Vals AI, Artificial Analysis, BenchmarkList/BenchLM, CursorBench, Snorkel Senior SWE-Bench, OpenRouter, ARC Prize, and Epoch AI. Exact Grok 4.6 data are kept separate from 4.5/4.7; effort settings, benchmark versions, first-party/third-party snapshots, and the 500K API limit are noted. Scores are normalized 1–100 interpretations under `model-comparison.md`, not official xAI scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
