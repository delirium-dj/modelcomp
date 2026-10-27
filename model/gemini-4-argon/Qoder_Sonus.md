# Gemini 4 Argon — findings by Qoder Sonus

- Source: Google DeepMind / Gemini 4 Argon, high thinking on the current paid API.
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemini 4 Argon.
- **Short description:** Google's proprietary multimodal reasoning model for long-horizon engineering, document-heavy work, and agents. It combines strong independent automation and low-hallucination results with long-decode support, but extended output, secure-code correctness, and retrieval reliability must not be conflated [S1–S6].
- **Provider / access:** Current Google documentation lists the stable `gemini-4-argon` model and an AI Studio entry point [S2]. Native Gemini APIs include Interactions and generateContent; the long-decode workflow reviewed here uses background Interactions, not OpenAI Chat Completions [S4]. API availability is now documented, superseding the September launch's Fairwind-only rollout [S1]. No authenticated inference call was made.
- **Release / knowledge:** Announced **2026-09-30** [S1]; current model page says latest update **October 2026** and stable availability [S2]. Exact general-availability day and knowledge cutoff were not verified. A later model-card indexing date is not assumed to be the original release date.
- **IDs:** Google `gemini-4-argon`, explicitly stable [S2]. No free Zen ID verified; the authoritative Google price table says no API free tier [S3].
- **Context window:** **1,048,576 tokens shared across input, thinking, and output**. Default synchronous output is **65,536**; long decode can use up to the unified limit, subject to the remaining budget [S2, S4]. This is not 1M input plus an additional 1M output. Interactions generates successive 64K hops under one background interaction [S4].
- **Modalities:** Text, images, video, audio, and PDF input; text output. Supports low/medium/high thinking, function calling, structured outputs, code execution, search/Maps grounding, URL context, file search, and preview computer use [S2]. No native image generation, audio generation, or Live API. Agentic video understanding is supported but defaults to static processing. Caching is implicit only; explicit caching is unsupported [S2].
- **Pricing (as of 2026-10-27):** Standard **$2 input / $10 output including thinking / $0.10 cached input per million tokens through November 30, 2026**; scheduled **$4/$20/$0.20 from December 1, 2026** [S3]. Batch/Flex currently **$1/$5/$0.05**; these are separate service modes. Search grounding has **5,000 free monthly requests shared across Gemini 3 and newer**, then **$14 per 1,000 requests**. Paid-tier data is not used to improve Google's products; there is no free model tier [S3]. Cost score uses today's Standard introductory price and flags its expiration.
- **Architecture:** Proprietary; parameter count and active parameter count not publicly verified [S6].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57%**, rounded independent AA high-thinking launch result [S5]. Secondary analyses give **57.1% AA** versus **57.4% in Google's launch table** [S8, S9]. These are separate reported measurements, not interchangeable precision levels of a single run.
- Terminal-Bench 2.1: no verified public score found; TB4.0 is a different benchmark version.
- AutomationBench-AA: **78%**, rounded independent launch result, first at publication [S5]. BenchmarkList later lists **77.5% partial score**, compatible with rounding but explicitly a partial metric [S9].
- Zapier AutomationBench: **51.3% task success**, reported by Google [S1]. This is not the same metric as AA's partial-score implementation; it is not evidence of a 27-point disagreement on one identical test.
- AA-Briefcase v1.1: **1,494 Elo**, independent launch result; **65% rubric pass**, **1,576 analytical quality Elo**, **1,308 presentation quality Elo** [S5]. A later aggregator snapshot lists **1,486 Elo / 64.6% rubric pass** [S9]; retain the original dated result rather than average snapshots.
- GDPval-AA exact Elo / Tau3-Banking / Tau2-Bench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found in directly inspected primary evidence.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53**, high thinking [S5]; current page gives **rank 9/221** under **v4.3.2** [S6]. The launch tie with GPT-6 Astra is a dated index comparison, not proof of equal performance on every task.
- AA-Omniscience: **50% accuracy / 15% hallucination rate / 42 index points**, independent AA launch evaluation [S5]. The 15% is the benchmark's defined rate, not a claim that exactly 15% of all ordinary answers are false. Lower hallucination coexists with abstention and lower accuracy.
- Humanity's Last Exam: **57.1%**, secondary reports attributing the result to AA [S8, S9]; exact tools configuration and full primary row were not retrieved, so this carries lower evidentiary weight than directly verified AA results.
- CritPt: **27.1% high**, aggregator-reported evaluation dated October 18 [S9]; primary result not independently retrieved in this pass.
- AA-LCR: **79.7%**, secondary aggregator result without a clearly resolved revision in its row [S9]. No verified MLCR or GPQA Diamond score found; unrelated or poorly labeled tracker numbers are not substituted.

Coding:

- DeepSWE v1.1: **77.9%**, directly stated in Google's release announcement [S1]; vendor-reported, not an independent rerun by this reporter.
- SciCode: **61.8%**, secondary aggregator result [S9]; useful supporting evidence, not treated as a separately reproduced experiment.
- FrontierSWE v2: **55.0%**, reported by both secondary summaries [S8, S9]. The aggregator labels its effort as max, whereas the public API exposes only low/medium/high [S2]; that setting ambiguity remains unresolved, and the row is not a primary scoring anchor.
- SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified public score found. DeepSWE and FrontierSWE are not relabeled as SWE-bench.
- Vibe Code Bench v1.1: **91.9%**, marked self-reported by the aggregator [S9]; not independently verified against the original evaluation, so not used to assert field leadership.
- Endor Labs Agent Security League, **Cursor + Gemini 4 Argon**, run **2026-10-16**: **78.8% FuncPass / 29.0% SecPass** [S7]. It ties another Cursor entry at 29.0%; cross-agent comparisons cannot isolate the model from Cursor's harness.
- CWE-bench v1: **68%**, Google-reported defensive vulnerability-repair result [S1]. Different security task and metric from Endor's SecPass; these should not be averaged.

Long context and multimodal:

- No directly verified MRCR/RULER retrieval percentage found for this exact model.
- GraphWalks at **256K–1M: 84.2%**, a secondary transcription of Google's graphic [S8]. The official image loaded in the browser, but the browser could not capture a visible chart, so the number remains secondary-only and does not justify perfect-retrieval credit.
- LVBench: **91.7%**, long-video understanding, directly stated by Google [S1]. This supports video capability but is vendor evidence, not a fresh independent evaluation.

### Evidence reconciliation and limitations

1. **Availability and price changed after launch.** AA and NeuralTrust describe restricted access and an unknown discount end date [S5, S8]. Current Google docs explicitly list availability, stable ID, and prices through November 30 [S2, S3]. The newer primary docs govern deployment facts; the older texts remain dated benchmark evidence.
2. **1M generation has implementation constraints.** Marketing says output expands from 64K to 1M [S1]. API documentation resolves this into a shared window plus 64K continuation hops, enabled with background execution [S4]. Long reasoning reduces remaining answer space, increases cost, and does not establish retrieval accuracy.
3. **Independent and vendor scorecards do not show a universal winner.** Google's 77.9% DeepSWE and 51.3% AutomationBench are strengths [S1]; AA's terminal score and Endor's 29.0% secure-code result expose different limits [S5, S7]. High defensive-CWE performance does not imply safe code generation in every setting.
4. **Roundings, revisions, and harnesses stay separate.** AA's current index is v4.3.2 [S6]; secondary pages mix older ranks and benchmark variants [S8, S9]. In particular, an aggregator's OSWorld row labels the same figure both binary and partial, so it is omitted. Secondary websites reprinting AA are not new independent runs.
5. **Current cost is a snapshot.** AA's launch article reports **$1.99 per index task** and about **62K output tokens per task** [S5]; the live page shows **$1.62**, still at introductory token prices [S6]. No controlled explanation for that task-cost difference was verified. Neither value is a permanent tariff or a guaranteed user workload cost.
6. **Coverage limitations.** The DeepMind model-card landing page exposed only a heading; no hidden model-card claims were inferred. The Endor article body was unavailable, but its exact Argon score pair was verified on Endor's accessible leaderboard [S7]. Primary HTML statements, official API docs, and independent AA text carry more weight than image-only/secondary rows.

### Normalized scores (1–100)

- **Tool use: 94/100.** Independent AutomationBench-AA 78%, Briefcase 1,494, and TB4.0 near 57% support strong agents [S5]; weaker presentation and incomplete end-to-end success prevent maximal credit.
- **Reasoning: 92/100.** Current AA index 53 and low-hallucination behavior support high-end reasoning [S5, S6]; 50% factual accuracy, secondary-only HLE/CritPt detail, and abstention trade-offs cap confidence.
- **Context window: 95/100.** Official shared 1,048,576-token capacity earns the top capacity tier [S2, S4]; no verified 98%+ retrieval at 512K+ supports a 100 score, and long decode is not extra context.
- **Multimodal: 95/100.** Verified audio/video/image/PDF input plus vendor LVBench 91.7% support broad multimodal understanding [S1, S2]; text-only output and lack of native generation cap the score.
- **Coding: 92/100.** Independent TB4.0 and Endor functional performance support strong coding, reinforced by vendor DeepSWE 77.9% [S1, S5, S7]; 29.0% secure correctness and mixed longer-horizon results constrain the rating.
- **Cost efficiency: 78/100.** Current $2/$10 Standard pricing and strong cache discount offer good high-end value [S3]; extended reasoning, search charges, and scheduled doubling on December 1 limit durability.
- **Overall Score: 94/100.** Half-up rounding of (94 + 92 + 95 + 95 + 92) / 5 = 93.6; cost excluded. Best for multimodal document/video work and controlled agents with careful long-decode budgets and security testing.

### Sources and search audit

All sources accessed 2026-10-27. Five successful fresh searches: `Gemini 4 Argon Google official model card benchmark pricing context`; `Gemini 4 Argon independent benchmarks Artificial Analysis Endor Labs`; `site:ai.google.dev "gemini-4-argon" "1,048,576"`; `"Gemini 4 Argon" "GPQA" "MRCR" benchmarks`; `"Gemini 4 Argon" "Humanity" "SciCode" benchmarks`.

- [S1 — Google release announcement, September 30](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
- [S2 — Current official model ID, modalities, and unified limits](https://ai.google.dev/gemini-api/docs/models/gemini-4-argon)
- [S3 — Current official price schedule and data-use policy](https://ai.google.dev/gemini-api/docs/pricing)
- [S4 — Official long-decode Interactions workflow](https://ai.google.dev/gemini-api/docs/long-decode)
- [S5 — Artificial Analysis independent launch evaluation](https://artificialanalysis.ai/articles/gemini-4-argon-google-top-three-labs)
- [S6 — Artificial Analysis current high-thinking model page](https://artificialanalysis.ai/models/gemini-4-argon)
- [S7 — Endor Labs Agent Security League and methodology](https://www.endorlabs.com/research/ai-code-security-benchmark)
- [S8 — NeuralTrust comparison; secondary transcription with stale deployment facts](https://neuraltrust.ai/blog/gemini-4-argon)
- [S9 — BenchmarkList aggregation; provenance and metric-label limitations noted](https://benchmarklist.com/models/google-gemini-4-argon/)

---

## Signature

- Provided by: **Qoder Sonus** — 2026-10-27
- Method: Sequential public-web research under the assigned Qoder_Sonus reporter label; five successful searches, current official docs, two independent benchmark organizations, secondary-source cross-checks, and explicit uncertainty for inaccessible charts. No peer findings were used. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a separately signed findings file alongside this one using the same headings.
