# GPT-5.5 Pro — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.5-pro`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** Higher-compute GPT-5.5 variant for difficult scientific reasoning and precise professional answers. Exact Pro measurements are distinguished from the much more extensively evaluated standard GPT-5.5.
- **Provider / access:** OpenAI Responses API, including Batch; Chat Completions unsupported. Background mode recommended because requests may take minutes [S1]. Launch ChatGPT access covered Pro, Business and Enterprise [S2].
- **Release / knowledge:** April 23, 2026 announcement, April 24 API availability update; December 1, 2025 cutoff [S1,S2].
- **IDs:** `gpt-5.5-pro`, pinned `gpt-5.5-pro-2026-04-23`. No verified Zen Free ID.
- **Context window:** Official 1,050,000 total and 128,000 maximum output [S1]. AA lists 922K (approximately total less maximum output); its FAQ rounds to 920K. Prefer primary total-window specification [S3].
- **Modalities:** Text/image input, text output, reasoning; function calling, structured outputs, web/file search, code interpreter, hosted shell and MCP documented. Image generation is a supported external tool, not native image output [S1]. No native audio/video verified.
- **Pricing (as of 2026-10-16):** $30 input/$180 output per million tokens; no cached-input discount; regional processing adds 10%. Tool fees separate [S1]. LLM Stats corroborates base rates [S5].
- **Architecture:** Proprietary, parameters and active-size split undisclosed [S3]. Effort medium/high/xhigh, high default [S1].

### Raw benchmarks found

Agent / tool use:

- BrowseComp **90.1%**, official Pro xhigh research environment [S2].
- GDPval **82.3% wins or ties**, official Pro; standard 5.5 scores 84.9% in the same table. Not GDPval-AA Elo [S2].
- Investment-banking modeling **88.6%**, internal vendor tasks [S2], not an independently reproduced general agent score.
- Terminal-Bench 2.1/2.0/4.0, Tau3/Tau2, Claw-Eval/ClawProBench, MCP-Atlas and Toolathlon: no verified exact-Pro public score found. Official TB2.0 82.7%, Tau2 98% and MCP 75.3% belong to standard 5.5 and are excluded [S2].

Reasoning / knowledge:

- HLE **43.1% without tools**, **57.2% with tools**, official xhigh [S2].
- FrontierMath legacy tiers 1–3 **52.4%**, tier 4 **39.6%**; GeneBench **33.2%**, official Pro [S2].
- BenchLM lists CritPt **30.6%**, ARC-AGI-1 **95.00%**, ARC-AGI-2 **84.2%**, and FrontierMath v2 **87.719% tiers 1–3 / 78.049% tier 4**; these are secondary-attributed values, not directly reverified evaluator rows [S4]. Direct Epoch page confirms June 12 v2 corrected 42% of problems, so its results cannot be treated as improvements on an unchanged legacy suite [S6].
- BenchLM aggregate **73.43/100, #13/950**, coverage **9/638**, explicitly partial/conservative [S4]; not this repository's Overall.
- AA current exact-Pro Intelligence Index, task cost, speed and token-use summaries are **N/A** [S3]. No inferred rank from chart UI counts.
- GPQA, AA-LCR/MLCR and Omniscience accuracy/hallucination: no verified exact-Pro number found.

Coding:

- SWE-bench Verified/Pro, LiveCodeBench, SciCode, Vibe, DeepSWE and Coding Index: no verified exact-Pro public score found in inspected sources. Official coding rows are blank for Pro [S2]. Code-executing scientific evaluations support a provisional coding assessment, not a measured repository-fixing success rate [S2,S6].

Long context and multimodal:

- Official million-token capacity; no exact-Pro MRCR/RULER/Graphwalks retrieval score verified. Official standard-5.5 MRCR 74% at 512K–1M is not transferred [S1,S2].
- Image input documented; official MMMU Pro rows are blank for Pro, so standard-5.5 visual scores are not borrowed [S1,S2].

### Evidence comparison and research trail

Three distinct fresh search queries: `"GPT-5.5 Pro" OpenAI benchmarks`, `"GPT-5.5 Pro" Artificial Analysis independent`, `"GPT-5.5 Pro" pricing limitations review`. DuckDuckGo returned challenges, not results. Follow-up Google review search returned an interstitial; Bing pricing/review search returned largely irrelevant general GPT links; DuckDuckGo alternate/lite attempts also challenged. These failed searches supplied no evidence. Direct vendor, AA, BenchLM, LLM Stats, Epoch and ARC pages were then inspected. Both guessed Vals model URLs returned 404; that does not establish absence from Vals under every route.

Primary docs verify a live API despite AA's generic “No publicly available API” chart label and missing provider metrics [S1,S3]. LLM Stats labels a rounded 1.1M as input, whereas primary docs specify 1.05M context; primary wording controls [S1,S5]. BenchLM reproduces several vendor values and is not an independent rerun of them. Epoch/ARC direct pages did not expose model-specific rows in fetched text, so their secondary-attributed figures retain that qualification. Pro is not uniformly superior: its GDPval is lower than standard 5.5 and HLE-with-tools lower than 5.4 Pro's 58.7% in the vendor table [S2]. Missing Pro coding/vision/terminal coverage materially lowers confidence versus models with independently rerun suites.

### Normalized scores (1–100)

- **Tool use: 88/100.** Exact-Pro BrowseComp 90.1% and GDPval 82.3% support strong research/professional tools; missing terminal/general-workflow reruns cap confidence [S1,S2].
- **Reasoning: 93/100.** HLE 43.1% unaided/57.2% tool-assisted and difficult math/biology evidence support high reasoning, capped by limited current independent coverage [S2–S4].
- **Context window: 95/100.** Official 1.05M meets the top capacity tier, without verified ≥98% retrieval at 512K+ [S1].
- **Multimodal: 70/100.** Verified image understanding plus tool-assisted media workflows; native output stays text and exact-Pro visual benchmark scores are missing [S1,S2].
- **Coding: 80/100.** Provisional inference from code-enabled mathematical/scientific reasoning and developer tools, capped by absent exact-Pro software-engineering benchmarks; not a transferred standard-5.5 score [S1,S2,S6].
- **Cost efficiency: 10/100.** $30/$180 with no cache discount is exceptionally expensive; no measured task-cost advantage offsets it [S1,S3].
- **Overall Score: 85/100.** (88 + 93 + 95 + 70 + 80) / 5 = 85.2 → 85. Best fit: difficult scientific/professional research where answer quality justifies latency and price. Coding assessment is lower-confidence; cost excluded.

### Sources

- [S1] https://developers.openai.com/api/docs/models/gpt-5.5-pro — primary exact-route specifications, rates, effort and tools.
- [S2] https://openai.com/index/introducing-gpt-5-5/ — primary launch, separate Pro benchmark column, xhigh research-environment caveat.
- [S3] https://artificialanalysis.ai/models/gpt-5-5-pro — independent profile with missing current performance metrics and context discrepancy.
- [S4] https://benchlm.ai/models/gpt-5-5-pro — secondary benchmark aggregation with source links and partial-coverage warning, updated October 15.
- [S5] https://llm-stats.com/models/gpt-5.5-pro — secondary pricing/spec corroboration, no readable benchmark values.
- [S6] https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2 — primary evaluator methodology, code tool and dataset-revision explanation; no exact-Pro row exposed.
- Additional verification: https://arcprize.org/leaderboard — fetched evaluator page; model rows unavailable in extracted text.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three distinct initial searches plus alternate-engine attempts; direct primary/independent-source comparison. Scores are normalized interpretations, not official vendor scores; provisional coding and secondary-only figures explicitly labelled.
- Future sources: add an independently signed file next to this one using the same headings.
