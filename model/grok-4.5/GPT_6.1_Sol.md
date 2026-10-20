# Grok 4.5 — findings by GPT 6.1 Sol

- Source: xAI / SpaceXAI and Cursor / `grok-4.5`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** Proprietary general-purpose reasoning model co-trained by xAI and Cursor, emphasizing token-efficient coding, engineering and knowledge-work agents. It is distinct from Composer 2.5, Grok Build 0.1 and later Grok releases [S1,S3,S4].
- **Provider / access:** Vendor API example calls `https://api.x.ai/v1/responses` with `grok-4.5`; the model card also documents standard chat/completion access, Cursor and Grok Build. OpenRouter `x-ai/grok-4.5` offers actual provider endpoints; current Zen catalog lists `grok-4.5` [S1,S4,S8,S10].
- **Release / knowledge:** Cursor launch **2026-07-08**, official PDF model card **2026-07-14**, xAI launch/ARC result **2026-07-16** [S1,S3,S4,S7]. These are separate dated distribution records. PDF §1.2 specifies a **January 2026 pretraining cutoff** [S4]. AA now marks this evaluation deprecated/superseded, while vendor docs/provider APIs still list it; evaluator deprecation alone does not establish endpoint shutdown [S2,S6,S8].
- **IDs:** `grok-4.5`, aliases `grok-4.5-latest` and `grok-build-latest`, OpenRouter `x-ai/grok-4.5` with snapshot `x-ai/grok-4.5-20260708` [S2,S8]. No free Zen API ID verified. Launch-era free Grok Build/Cursor offers are dated product promotions, not a verified current $0 general API.
- **Context window:** Vendor **500,000** total tokens; OpenRouter **450,000** maximum completion [S2,S8]. Vals advertises/requests up to **500,000** output [S5], so its evaluation setting is not a promise that the gateway supports the same output cap. Input and output share context; do not add the limits.
- **Modalities:** Text/image in and text out on vendor model page/PDF; OpenRouter/Vals additionally expose file input [S2,S4,S5,S8]. Function calls, structured outputs, reasoning efforts low/medium/high/xhigh (default high) are documented. No native video/audio or non-text generation attributed to this model; Grok Imagine/Voice are separate products. Vendor says Batch API unsupported [S2].
- **Pricing (as of 2026-10-20):** Standard prompts **under 200K**: **$2 input / $6 output / $0.30 cached input per 1M**. At **200K or more prompt tokens**: **$4/$12/$0.60**, applied to **all** tokens in that request [S2,S8]. OpenRouter also lists more expensive priority tiers and search charges, separate from standard text-token pricing [S8]. Cursor's July fast-variant **$4/$18** is a separately described offer and must not be confused with API long-context **$4/$12** [S3].
- **Architecture:** Proprietary MoE, trained jointly with Cursor including workflow data and large-scale RL; total/active parameter counts not disclosed in inspected primary sources [S1,S3,S4]. No open-weights licence claimed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%**, official model card §2.9 and launch, **Grok Build** harness at **high** reasoning [S1,S4]. Harness-specific result, not a universal endpoint accuracy.
- Vals SkillsBench: **66.03% ±4.60**, rank **2/35**; Terminal-Bench 4.0 **8.59% ±1.34**, rank **40/51**; SRE Bench **0.76% ±0.54** [S5]. Strong skill-guided tasks coexist with weak harder autonomous terminal/operations work.
- GDPval-AA: **1539 Elo**, official model card §3.1, attributed to AA's harness [S4]. BenchLM's later AA-attributed **1430 Elo** is a different dated record [S9], not averaged into the card result or assumed a controlled model regression.
- Banking tool benchmark: **32.6%**, official card §3.2 labels it “τ-bench / TAU banking knowledge” and describes final database-state correctness [S4]. Its reference is the original Tau-bench work; this is not automatically a verified Tau3-Banking score.
- DeepSearch QA **85.3%**, official card §5.2; FalseClaimBench **84.0%**, internal vendor self-report-honesty benchmark, §2.11 [S4]. Neither is an independent generic agent index.
- Terminal-Bench 2.1 **67.8%** appears secondarily on BenchLM with Vals attribution [S9]; the current rendered Vals profile exposes TB4 rather than that old row, so 67.8 is explicitly a secondary historical attribution.
- Claw-Eval / ClawProBench / MCP-Atlas: no verified public score found in inspected material.

Reasoning / knowledge:

- GPQA Diamond: independent Vals **92.93% ±1.29**, rank **13/138**; MMLU Pro **89.22% ±0.31**, rank **14/138** [S5].
- Artificial Analysis Intelligence Index: **39**, independently measured **v4.3.2**, high reasoning; BenchLM reports **38.8**, compatible with rounding. AA measures **62.8 output tokens/s**, **12.03s TTFT**, about **$0.88/task** and **77M** evaluation output tokens [S6,S9]. Index values are not percentages or ranks.
- ARC Prize directly verified high-effort scores: ARC-AGI-1 **85.7%**, ARC-AGI-2 **52.6%**, ARC-AGI-3 **0.3%**. Medium gives **87.2/52.6/0.3%**; low **79.2/33.1/0.3%** [S7]. More reasoning effort is not monotonically better, and success on static puzzles does not establish strong interactive adaptation.
- Vals ProofBench v1.1 **31.00% ±4.65**, ProgramBench **0.00%**, Time Horizon KSP **6.33%** [S5]; these are actual harder-task results, not absent evidence assigned zero.
- HLE **42.7%**, AA-GPQA **93.1%**, CritPt **15.4%**, Omniscience accuracy **51.6%** / hallucination rate **54.1%** are secondary BenchLM attributions [S9]. Not independently extracted from AA's rendered detailed table here.
- Official internal single-turn hallucination **0.98%**, PDF §5.1 [S4], uses a different dataset/grader than AA Omniscience. It is not evidence that the AA-attributed rate is false, nor a valid replacement for it.

Coding:

- SWE-bench Verified: independent Vals **86.60% ±1.52**, rank **13/88** [S5].
- SWE-bench Pro: **64.7%**, official launch/PDF §2.4, high reasoning, fixed agent scaffold with reward-hacking controls [S1,S4].
- SWE-bench Multilingual: **78.0%**, official Cursor chart and PDF §2.5; Cursor internal run [S3,S4].
- DeepSWE **v1.0 62.0%**, AA/provider harness evaluation; **v1.1 53.0%**, Datacurve mini-swe-agent evaluation, separately documented in PDF §§2.1–2.2 [S1,S4]. Benchmark/harness changes explain why they must remain separate.
- SWE-Marathon: **29.0% task resolution**, full task set, official PDF §2.6 [S4].
- ProgramBench: **57.2% tests passed**, official PDF §2.7, which explicitly says full-resolution rates remain extremely low. Vals **0.00%** on ProgramBench is therefore not equivalent to zero behavioral tests passed [S4,S5].
- SWE-Atlas-QnA: **84.0%**, official PDF §2.10; repository-question-answering rather than patch generation [S4].
- LiveCodeBench: Vals **87.35% ±0.96**, rank **15/143**; Vibe Code Bench v1.1 **69.00% ±4.48**, rank **44/115**; Code Migration **36.60% ±4.14** [S5].
- SciCode **55.0%** and CursorBench **66.7** appear on BenchLM [S9]. Cursor explicitly warns that an earlier Cursor codebase snapshot accidentally entered Grok 4.5 training, creating a CursorBench advantage of unclear size [S3]. CursorBench is excluded from normalization, and the secondary SciCode value is not claimed a directly read evaluator result.

Long context:

- **500K** capacity corroborated by vendor, Vals and AA [S2,S5,S6].
- AA-LCR **79.3%** is a secondary attribution [S9]. No verified full-500K MRCR/RULER retrieval rate or **98% retrieval at 512K+** found. Long-context pricing doubles at the documented 200K prompt threshold [S2].

Multimodal:

- Vals MMMU Pro **61.79% ±1.17**, rank **83/93** [S5]. BenchLM's AA-attributed **80.4%** differs substantially [S9]; precise harness/subset/media-handling causes were not verified, so the discrepancy is preserved rather than averaged or resolved in favor of the higher value.
- Vendor PDF confirms image understanding; no model-specific video/audio output result assigned [S4]. File/API support alone does not establish frontier document-vision quality.

### Search trail and evidence comparison

At least three fresh engine queries: [Bing `"Grok 4.5" official benchmark`](https://www.bing.com/search?q=%22Grok+4.5%22+official+benchmark&setlang=en&cc=us) returned broad Grok links without exact benchmark evidence; [Google `"grok-4.5" model card xAI`](https://www.google.com/search?q=%22grok-4.5%22+model+card+xAI&hl=en) returned an interstitial; [Brave `"Grok 4.5" independent review benchmarks`](https://search.brave.com/search?q=%22Grok+4.5%22+independent+review+benchmarks) returned 429. Direct primary investigation located and read the **23-page official PDF**, vendor pricing/model page, co-developer chart, independent Vals/AA and ARC Prize, and exact provider metadata.

The most consequential distinctions are **Grok Build vs other harness TB scores**, **DeepSWE 1.0 vs 1.1**, **ProgramBench tests-passed vs full resolution**, **AA vs Vals MMMU**, **vendor internal vs evaluator hallucination definitions**, and **$2/$6 standard vs doubled long-context pricing**. Cursor is a co-developer, not an independent reviewer; identical figures across its chart, the xAI launch, the PDF and BenchLM are not four independent replications. July 8 Cursor availability and July 16 vendor launch are both documented rather than forced into one inferred date. AA's deprecated flag is reported alongside currently listed serving routes.

### Normalized scores (1–100)

- **Tool use: 83/100.** Primary TB2.1 83.3%, banking 32.6% and independent SkillsBench 66.03% support capable tools; independent TB4 8.59% and weak SRE/time-horizon results cap broad autonomy [S4,S5].
- **Reasoning: 88/100.** Independent GPQA 92.93%, MMLU Pro 89.22%, ARC-AGI-2 52.6% and AA index 39 support strong reasoning; ARC-AGI-3 0.3% and mixed hard-task results constrain generalization [S5–S7].
- **Context window: 90/100.** Verified 500K total and substantial output allowance fit the 500K–1M tier; no high-accuracy full-window retrieval result justifies a higher tier [S2,S5,S8].
- **Multimodal: 70/100.** Native image input and file-capable interfaces support the image-input band; conflicting visual scores, no verified native audio/video and text-only output cap breadth [S2,S4,S5,S8].
- **Coding: 89/100.** Independent SWE Verified 86.6%/LCB 87.35%, official SWE-Pro 64.7% and Atlas 84% show strong coding; DeepSWE v1.1 53%, workflow variance and contaminated CursorBench prevent a maximum [S3–S5].
- **Cost efficiency: 84/100.** $2/$6 base pricing, AA $0.88/task and concise trajectories provide reasonable paid value; doubled ≥200K pricing, latency and unverified current free promotions cap efficiency [S1,S2,S5,S6].
- **Overall Score: 84/100.** Half-up mean `(83 + 88 + 90 + 70 + 89) / 5 = 84`; cost excluded. Best fit: text/image software-engineering agents where token efficiency matters, with benchmark harnesses, long-context charges and visual reliability checked for the workload.

### Sources

- [S1] https://x.ai/news/grok-4-5 — vendor July 16 launch, benchmarks, efficiency claims, API and historical promotions.
- [S2] https://docs.x.ai/developers/models/grok-4.5 and https://docs.x.ai/developers/models — exact current ID, aliases, modalities, 500K limit and tiered all-token pricing.
- [S3] https://cursor.com/en-US/blog/grok-4-5 and https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/blog/evals-blog-light-2.png — co-developer July 8 release, directly viewed benchmark chart and explicit CursorBench contamination disclosure.
- [S4] https://cursor.com/resources/grok-4-5-model-card.pdf — official July 14 PDF, all 23 pages read; page/section references above identify exact measured results and metric definitions. Linked from https://cursor.com/blog/grok-4-5-model-card.
- [S5] https://www.vals.ai/models/grok_grok-4.5 — independent detailed results, uncertainty and high-effort settings (temperature 0.7, top-p 0.95).
- [S6] https://artificialanalysis.ai/models/grok-4-5 — independent v4.3.2 index, runtime/cost metrics and deprecated evaluation status.
- [S7] https://arcprize.org/results/xai-grok-4-5 — direct independently verified effort-specific ARC results.
- [S8] https://openrouter.ai/api/v1/models/x-ai/grok-4.5/endpoints — live snapshot, advertised 450K output and standard/long-context/priority prices.
- [S9] https://benchlm.ai/models/grok-4-5 — secondary source discovery, updated 2026-10-19; unreplicated submetrics explicitly labelled.
- [S10] https://opencode.ai/zen/v1/models — directly fetched current catalog listing `grok-4.5`.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20
- Method: Independent sequential public-web research, at least three search-engine queries, full primary PDF and co-developer/vendor docs, benchmark-image inspection, multiple independent evaluation websites and live provider comparison. No peer findings read. Scores are normalized editorial interpretations rather than official benchmark values.
