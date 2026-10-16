# GPT-5.6 Terra — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.6-terra`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-5.6 Terra
- **Short description:** Cost/intelligence-balanced 5.6 tier, roughly corresponding to earlier mini tiers; distinct from Sol/Luna [S1].
- **Provider / access:** OpenAI Responses, Chat Completions and Batch; function calling, search, computer use, MCP, shell, code interpreter, apply_patch and skills [S1].
- **Release / knowledge:** July 9, 2026; February 16, 2026 cutoff [S1–S3].
- **IDs:** `gpt-5.6-terra`, no separately dated snapshot on card; no verified OpenCode Free ID.
- **Context window:** 1,050,000 total/922,000 input/128,000 output [S1].
- **Modalities:** Text/image input, text output and file tools; structured output/streaming; efforts none through max, medium default [S1].
- **Pricing (as of 2026-10-16):** $2 input/$0.20 cache/$12 output per million, cache writes $2.50. Above 272K input, full-request input doubles/output 1.5×. Launch $2.50/$15 is historical [S1,S3].
- **Architecture:** Proprietary; size undisclosed. External image-generation tool is not native media output [S1].

### Raw benchmarks found
Agent / tool use:
- Vendor launch: TB2.1 **87.4%**, GDPval-AA v2 **1593 Elo**, BrowseComp **87.5%**, OSWorld2 **50.2%**, AutomationBench **15.2%**, Toolathlon **53.1%** [S3].
- Vals max/128K default: TB4 **22.73% ±2.31**, Finance Agent v2 **54.44% ±2.07**, SkillsBench **58.90% ±4.47**, SRE **9.54% ±1.82**, legal-agent **0.83% ±0.83** [S2]. Overrides possible; different terminal suites kept separate. Tau3/Tau2/Claw/MCP-Atlas numeric scores not verified.

Reasoning / knowledge:
- Vendor GPQA **92.9%**, FrontierMath v2 **84.9% tiers1–3 /68.3% tier4**, launch AA v4.1 **55**, Agents' Last Exam **50.4%** [S3].
- Vals GPQA **90.91% ±1.91**, MMLU Pro **86.66% ±0.33**, ProofBench v1.1 **74% ±4.41**, current index **53.09% ±1.29, #22/49** [S2]. Current HLE/CritPt/AA index/Omniscience/LCR/MLCR exact values not verified; launch index is not current ranking.

Coding:
- Vendor SWE-Pro **63.4%**, DeepSWE v1.1 **69.6%**, Coding Agent Index v1.1 **77.4** [S3].
- Vals SWE **95.40% ±0.94**, LiveCodeBench **85.93% ±1.02**, Vibe v1.1 **74.59% ±4.20**, Vibe1–100 **14.82% ±3.12**, migration **47.80% ±4.28**, ProgramBench **0.50% ±0.50**, terminal-science **10% ±3.61** [S2]. Editions and raw metrics are not averaged. SciCode exact score not verified.

Long context / multimodal:
- Vendor MRCR v2 8-needle **89.6% at 256K–512K /72.5% at 512K–1M**, GraphWalks BFS 1M **71.2 F1** [S3].
- Vendor MMMU Pro **80.7% no tools /82% tools**; Vals **86.47% ±0.82**, distinct setup [S2,S3].

### Evidence comparison and research trail
Three fresh DuckDuckGo queries: `GPT-5.6 Terra official model`, `GPT-5.6 Terra independent benchmark`, `GPT-5.6 Terra review pricing limitations`; all challenged. Exact primary docs and Vals fetched. Primary July launch directly read earlier this session, with separate Terra column [S3]. Historical launch pricing superseded by current exact card. Vendor performance/dollar comparisons use simulated latency/cost, and cyber results reduced safeguards; neither guarantees production savings or public-request behavior [S3]. Vals **$5.776/index test /35m39s** is suite-specific, not a generic chat cost. Strong conventional SWE coexists with near-zero complete-program/legal work. Million-token capacity does not imply flawless retrieval.

### Normalized scores (1–100)
- **Tool use: 85/100.** Useful professional tools and historical terminal results; low legal/SRE and harder TB4 cap autonomy [S2,S3].
- **Reasoning: 88/100.** Strong GPQA/math/proof evidence; academic/professional mismatch and retrieval losses limit ceiling [S2,S3].
- **Context window: 95/100.** Verified 1.05M, no ≥98% retrieval bonus [S1,S3].
- **Multimodal: 80/100.** Strong image/document work; no native audio/video or non-text output [S1–S3].
- **Coding: 90/100.** Strong SWE/DeepSWE/Vibe, capped by ProgramBench/migration/science tasks [S2,S3].
- **Cost efficiency: 72/100.** Lower current $2/$12 and caching help, but writes/long-context and measured task spend matter [S1,S2].
- **Overall Score: 88/100.** (85 + 88 + 95 + 80 + 90) / 5 = 87.6 → 88. Best fit supervised value-oriented coding/document agents; cost excluded.

### Sources
- [S1] https://developers.openai.com/api/docs/models/gpt-5.6-terra — exact primary API specs/pricing.
- [S2] https://www.vals.ai/models/openai_gpt-5.6-terra — direct independent max suite.
- [S3] https://openai.com/index/gpt-5-6/ — primary July launch, directly inspected in this session; historical Terra column/settings.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three search attempts and primary/independent comparison; current rates and suite-specific results separated. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
