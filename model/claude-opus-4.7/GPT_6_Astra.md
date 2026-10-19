# Claude Opus 4.7 — findings by GPT 6 Astra

- Source: Anthropic / `claude-opus-4-7`
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Proprietary reasoning and visual-understanding model optimized for software engineering and sustained agent workflows. It is an active legacy snapshot, not the current Opus flagship and not an alias of Opus 4.8 or 5.5 [S1, S2].
- **Provider / access:** Anthropic Messages API (`claude-opus-4-7`); Bedrock (`anthropic.claude-opus-4-7`), Vertex AI and Microsoft Foundry also documented. These are platform-specific deployments, not evidence that every platform has identical limits [S1].
- **Release / knowledge:** Released April 16, 2026; reliable and training knowledge cutoff January 2026. First-party retirement not sooner than April 16, 2027 [S1].
- **IDs:** `claude-opus-4-7`; no Zen Free ID verified in this investigation. Paid first-party service is scored.
- **Context window:** 1M tokens; synchronous output 128K. Message Batches supports a distinct 300K-output beta; that is not the ordinary synchronous limit [S1].
- **Modalities:** Text and image input, text output; adaptive reasoning, tool use and computer-use workflows. No native audio/video output established. Structured-output/JSON details were not independently rechecked [S1, S2].
- **Pricing (as of 2026-10-19):** $5 input / $25 output / $0.50 cache read per million tokens; five-minute cache write $6.25, one-hour write $10; batch input/output 50% discount [S1]. Tokenizer changes can make the same input use 1.0–1.35 times the tokens of its predecessor [S2].
- **Architecture:** Proprietary; parameter count and dense/MoE architecture not disclosed in the consulted documentation [S4].

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1,753 Elo**, independently measured by Artificial Analysis at adaptive reasoning/max effort using its Stirrup agent harness; April 17 launch-era result, not a current leaderboard rank [S3].
- MCP-Atlas: **77.3%**; OSWorld-Verified: **78.0%**; BrowseComp: **79.3%**. These are Anthropic-reported results transcribed and discussed by Vellum, not independently replicated Vellum measurements [S5].
- Terminal-Bench **2.0: 69.4%** [S5]. Anthropic specifies Terminus-2, thinking disabled, 1× guaranteed/3× ceiling resources, five attempts per task [S2]. Do not relabel this 2.1 or compare it directly with a different harness.
- Tau2-Bench: AA reports a **3.5 percentage-point regression** versus Opus 4.6, but the retrieved article does not expose the absolute score [S3]. Tau3-Banking, Claw-Eval, ClawProBench and Toolathon: no verified public score found in the reviewed material.

Reasoning / knowledge:

- GPQA Diamond: **94.2%**; HLE **46.9% without tools / 54.7% with tools**, vendor results reproduced by Vellum [S5]. Tool/no-tool settings are separate measurements.
- Artificial Analysis Intelligence Index: **57.3**, rounded **57**, in AA's April 17 max-effort evaluation; reported confidence interval ±1 point [S3].
- Current AA page: **41 estimated**, rank **53/217**, on Intelligence Index **v4.3.2** [S4]. This is explicitly an estimate on a changed index, not a verified rerun showing a 16-point capability loss.
- AA-Omniscience: **26 index**, **36% hallucination rate**, **70% attempt rate** in April. Accuracy is described as unchanged, without an absolute value in the retrieved text [S3]. The index is not accuracy, and hallucination rate is not the fraction of all prompts answered incorrectly.
- CritPt, absolute LCR/MLCR scores: no verified public score found in the retrieved text; AA describes LCR and CritPt as equivalent to Opus 4.6 [S3].

Coding:

- SWE-bench Verified: **87.6%**; SWE-bench Pro: **64.3%**, vendor-reported, via Vellum's table [S5]. Anthropic notes memorization screening and says the improvement persists after flagged problems are excluded [S2].
- CursorBench: **70%**, versus predecessor **58%**, partner result quoted in the vendor announcement. The task population is proprietary, so this is supporting evidence rather than a substitute for SWE-bench [S2].
- AA independently reports SciCode improvement of **2.6 percentage points** and TerminalBench Hard improvement of **5.3 percentage points**; absolute figures were not exposed in retrieved prose [S3].
- LiveCodeBench, Vibe Code Bench, DeepSWE: no verified public score found in the reviewed material.

Long context and vision:

- Official capacity is 1M tokens [S1]; no verified numerical MRCR/RULER result at 512K+ was recovered. Capacity is not proof of lossless retrieval.
- CharXiv reasoning **82.1% without tools / 91.0% with tools**, vendor-reported via Vellum [S5]. Images up to **2,576 pixels** on the long edge, approximately **3.75 MP**, are supported [S2].
- XBOW visual acuity **98.5%**, a partner-specific test quoted by Anthropic, not general multimodal accuracy [S2].

### Source comparison and conflicting findings

1. **Launch leadership versus current standing:** AA's dated 57.3 result and current estimated 41 use different index versions/evidence status. Preserve both with dates; neither supports calling Opus 4.7 the present universal leader. Likewise Vellum's launch-day “best-in-class” language is historical [S3–S5].
2. **Lifecycle disagreement:** AA labels the model “deprecated”; the authoritative model reference calls it **active (legacy)** with availability retained. Use Anthropic for API lifecycle [S1, S4].
3. **Better agents does not mean every agent test improved:** strong GDPval-AA and MCP-Atlas coexist with BrowseComp declining from 83.7% to 79.3% and AA's Tau2 regression. These narrower regressions cap the tool score [S3, S5].
4. **Token costs are workload-dependent:** the vendor warns of larger token counts, while AA measured about 35% fewer output tokens and roughly 11% lower total evaluation cost ($4,406 versus $4,970, excluding cache discounts). Input tokenizer inflation and reduced completion length can both be true [S2, S3].
5. **Evidence independence:** Vellum independently interprets the vendor table but does not replicate it. AA supplies genuinely independent measurements; launch testimonials are vendor-selected and carry less weight.

### Normalized scores (1–100)

- **Tool use: 91/100.** Independent GDPval-AA 1,753 and strong MCP/GUI results justify a frontier score; BrowseComp and Tau2 regressions plus missing newer harness results cap it [S3, S5].
- **Reasoning: 92/100.** GPQA 94.2%, tool-free HLE 46.9% and independent launch Index 57 support strong reasoning; current estimated index and missing absolute long-context results prevent a higher score [S3–S5].
- **Context window: 95/100.** Official 1M context reaches the methodology's top capacity tier, but no verified ≥98% retrieval at 512K+ warrants 100 [S1].
- **Multimodal: 70/100.** Strong high-resolution image understanding reaches the image-input tier ceiling; no native audio/video output or independently verified broader modality coverage is credited [S1, S2, S5].
- **Coding: 92/100.** SWE-bench Verified 87.6%, Pro 64.3%, partner results and independent AA coding gains support advanced engineering; weaker terminal performance and harness differences cap generalization [S2, S3, S5].
- **Cost efficiency: 48/100.** Paid $5/$25 is expensive under the repository's inverse-price anchors; caching and AA's efficiency gains help but do not make it a free or low-price model [S1, S3].
- **Overall Score: 88/100.** Half-up mean of (91 + 92 + 95 + 70 + 92) / 5 = 88; best suited to demanding coding and tool workflows with image input. Cost excluded.

### Research trail and sources

Three successful independent search queries were run on DuckDuckGo: `Claude Opus 4.7 model review`; `Claude Opus 4.7 Artificial Analysis benchmark`; `site:anthropic.com "Opus 4.7" context GPQA`. An additional Google query returned a JavaScript gate and Bing returned generic results; neither was treated as substantive evidence. Pages below were opened directly on 2026-10-19.

- [S1 — Anthropic model reference](https://platform.claude.com/docs/en/models/opus-4-7/overview)
- [S2 — Anthropic announcement and evaluation caveats](https://www.anthropic.com/news/claude-opus-4-7)
- [S3 — Artificial Analysis independent launch evaluation](https://artificialanalysis.ai/articles/opus-4-7-everything-you-need-to-know)
- [S4 — Artificial Analysis current model page](https://artificialanalysis.ai/models/claude-opus-4-7)
- [S5 — Vellum benchmark analysis](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)

---

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra)** — 2026-10-19
- Method: Fresh public searches, official documentation and independently published evaluation cross-checks; no peer findings consulted. Scores are normalized interpretations, not vendor scores or benchmarks run by this reporter.
