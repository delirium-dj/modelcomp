# Claude Fable 5 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-fable-5`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** General-access safeguard configuration of the June Mythos-class weights, built for sustained coding and knowledge work. Distinct from Fable 5.1 and restricted Mythos deployments.
- **Provider / access:** Claude Messages API, Bedrock, Google Cloud, Microsoft Foundry and Claude Platform on AWS [S1].
- **Release / knowledge:** June 9, 2026; January 2026 reliable/training cutoff [S1]. Access suspended June 12 and restored July 1, documented in primary updates; currently active legacy, not retired [S1,S2,S7].
- **IDs:** `claude-fable-5`; Bedrock `anthropic.claude-fable-5`. No Zen Free ID verified.
- **Context window:** 1M, maximum output 128K [S1]. Persistent notes across multiple windows do not expand single-request native capacity.
- **Modalities:** Text/image input, text output, document/file and agent tools. Adaptive thinking always on, default high [S1]. No native audio/video or media output verified.
- **Pricing (as of 2026-10-16):** $10 input / $50 output per million tokens; $1 cache read, $12.50 five-minute write, $20 one-hour write; batch half price [S1]. Historical short subscription allowances were not a permanent free API tier [S2,S7].
- **Architecture:** Proprietary, undisclosed size. Shared underlying model with Mythos 5, differing safeguards [S2].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **80.52%**, Vals launch with Opus 4.8 fallback [S3]; secondary vendor-system transcription **84.3% effective**, versus **88.0% Mythos 5** [S5]. These remain different labeled configurations.
- Terminal-Bench 4.0 **41.41% ±1.34**, Vals current max [S3].
- GDPval-AA **1932 Elo** at AA June launch, with its historical calibration [S6]; not directly compared with later v2/v2.1 ratings.
- Finance Agent v2 **56.31% ±0.84**, Legal Research **49.52% ±3.48**, Harvey Legal Agent **11.25% ±2.15**, Vals [S3].
- AutomationBench **17.4%**, OSWorld-Verified **85.0%**, secondary vendor transcription [S5]. Not equated with different OSWorld releases or scoring variants.
- Tau2 Telecom is described as frontier-performing by AA but no exact numeric value found in fetched prose [S6]. Tau3-Banking / Claw-Eval / ClawProBench / MCP-Atlas / Toolathon: no verified exact result found.

Reasoning / knowledge:

- HLE **53%**, AA June max with Opus 4.8 fallback; about **9% of HLE tasks** used fallback [S6].
- GPQA Diamond **93.18% ±1.94**, MMLU Pro **91.50% ±0.28**, ProofBench v1.1 **95.00% ±2.19**, Vals [S3].
- AA Intelligence Index **64.9** at June launch [S6]; current **50, #20/217**, v4.3.2, explicitly Max/Opus-4.8-Fallback [S4]. Different scales/snapshots, not a measured unchanged-test decline.
- AA-Omniscience Index **40** at launch [S6]; no exact current accuracy/hallucination percentage verified in inspected direct prose.
- Vals Index **61.39% ±1.00, #8/48** current versus June **75.15%**; preserve snapshots rather than inventing a causal explanation [S3].
- CritPt / AA-LCR / MLCR: no verified exact score found in inspected sources.

Coding:

- SWE-bench Verified **95.00%**, explicitly identified in Vals June update; current row uncertainty **±0.98** [S3].
- LiveCodeBench **89.78% ±0.89**, Vibe Code Bench v1.1 **90.35% ±2.10**, Code Migration **55.06% ±4.61**, ProgramBench fully resolved **2.00% ±0.99**, Vals [S3].
- Terminal-Bench Science **15.71% ±4.38**, Vals [S3].
- SWE-Pro **80.0%**, FrontierCode Diamond **29.3% / Main 46.3%**, secondary vendor-system transcription [S5]. Independent rerun of those exact figures not established here.
- DeepSWE / SciCode: no verified exact result found in inspected direct prose.

Long context and multimodal:

- No verified exact-model MRCR/RULER ≥512K retrieval percentage found [S1].
- MMMU Pro **89.31% ±0.74**, Vals [S3]; GDP.pdf **29.8%**, secondary vendor transcription [S5].
- Primary FireRed and persistent-memory demonstrations are qualitative corroboration, not a statistical broad-vision or full-window retrieval guarantee [S2].

### Evidence comparison and research trail

Four distinct DuckDuckGo searches: `"Claude Fable 5" official Anthropic documentation -5.1`; `"Claude Fable 5" independent Artificial Analysis benchmarks`; `"Claude Fable 5" review pricing limitations`; `site:artificialanalysis.ai/articles/ "Fable 5" June`. Last query located the original AA evaluation after broader results mixed 5 and 5.1. Read current official docs, original launch and redeployment notice, AA current/launch profiles, Vals and LLM Stats' detailed review.

Both AA and Vals explicitly use Opus 4.8 fallback; AA saw about **8% of index tasks** routed despite the vendor's average fewer-than-5%-of-sessions statement. Different denominators/task mixes explain why those statements need not conflict [S2,S3,S6]. Scores therefore describe a deployed composite in affected domains, not isolated Fable weights. LLM Stats warns its launch table sometimes reports Mythos results; its approximate fallback proxies for HLE/biology are not adopted as measured Fable values [S5]. The review's static zero-valued animated widgets are rendering artifacts, not benchmark zeros. Independent present results coexist with historical launch leadership; changing suites/calibration make naive score subtraction misleading. June suspension/redeployment changed the safeguard layer, so date and fallback configuration matter even without a new model name [S7]. AA's deprecated performance-benchmarking label does not supersede Anthropic's active-legacy lifecycle [S1,S4].

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong old/new terminal and professional tasks, capped by fallback reliance, low all-pass legal-agent results and changed safeguards [S3,S6,S7].
- **Reasoning: 93/100.** HLE 53%, GPQA 93.18% and strong current index support high reasoning, capped by fallback attribution and missing modern subscores [S3,S4,S6].
- **Context window: 95/100.** Official 1M meets top capacity tier without verified ≥98% full-window retrieval [S1].
- **Multimodal: 80/100.** Strong verified image/document performance; text-only output and no native audio/video evidence cap coverage [S1,S3].
- **Coding: 93/100.** Strong independent SWE/LiveCodeBench/Vibe results; weak complete ProgramBench/scientific-terminal performance and fallback uncertainty limit a universal ceiling [S3].
- **Cost efficiency: 27/100.** $10/$50 and $1 cache reads are expensive, corroborated by current AA $8.75/task; newer Fable cache savings are not applied to this model [S1,S4].
- **Overall Score: 90/100.** (90 + 93 + 95 + 80 + 93) / 5 = 90.2 → 90; useful for established difficult coding/document workflows with known fallback behavior. Cost excluded.

### Sources

- [S1] https://platform.claude.com/docs/en/models/fable-5/overview — current official lifecycle, limits, pricing and cutoff.
- [S2] https://www.anthropic.com/research/claude-fable-5-mythos-5 — primary launch and subsequent access notices.
- [S3] https://www.vals.ai/models/anthropic_claude-fable-5 — independent current/historical suite and explicit fallback configuration.
- [S4] https://artificialanalysis.ai/models/claude-fable-5 — current independent v4.3.2 and max/fallback economics.
- [S5] https://llm-stats.com/blog/research/claude-fable-5-review — secondary vendor transcription, including explicit Mythos/Fable distinction.
- [S6] https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index — original independent June 9 evaluation and fallback counts.
- [S7] https://www.anthropic.com/news/redeploying-fable-5 — primary July restoration and safeguard update.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research with four distinct searches, current and historical primary/independent evidence and review comparison. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
