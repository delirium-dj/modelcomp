# GPT-5.6 Sol — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.6-sol`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** GPT-5.6 flagship for coding, scientific reasoning and professional tool workflows. This assessment emphasizes the single-agent model at max effort; Ultra is a separate multi-agent configuration, not an interchangeable benchmark setting [S1,S2].
- **Provider / access:** OpenAI Responses and Chat Completions APIs, Batch; ChatGPT/Codex access varies by subscription [S1,S2]. AA's deprecated label describes its benchmarking policy, not verified provider shutdown [S3].
- **Release / knowledge:** General availability July 9, 2026 following limited preview; February 16, 2026 cutoff [S1,S2].
- **IDs:** `gpt-5.6-sol`; official `gpt-5.6` alias routes to Sol [S1]. No verified Zen Free ID. Terra/Luna and Sol Pro are not silently merged here.
- **Context window:** Official 1,050,000 total, maximum input 922,000, maximum output 128,000 [S1]. Vals rounds to 1M/128K [S4].
- **Modalities:** Text/image input, text output; file/document reasoning supported in Vals, no native video there. Reasoning, streaming, structured outputs and function calling; Responses tools include search, shell, code interpreter, apply_patch, skills, computer use and MCP. Image generation is an external tool, not native output [S1,S4].
- **Pricing (as of 2026-10-16):** Promotional $4 input/$0.40 cached input/$20 output per million through at least November 21, 2026. Cache writes 1.25× input ($5 at this base tier). Prompts above 272K input incur 2× input and 1.5× output for the full request ($8/$30 at current base rates); tool fees separate [S1]. Launch $5/$30 remains in some secondary profiles [S2,S6].
- **Architecture:** Proprietary; undisclosed parameter count [S3]. Effort none/low/medium/high/xhigh/max, medium default. Ultra coordinates four agents by default; it is not another scalar effort accepted in the model card [S1,S2].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench **2.1: 88.8% single-agent / 91.9% Ultra**, vendor launch; historical Vals single-model **85.77%**. Current Vals **TB4.0 37.88%**, not comparable to TB2.1 [S2,S4].
- GDPval-AA **v2 1747.8 Elo**, Toolathlon **58%**, AutomationBench **18.1%**, OSWorld **2.0 62.6%**, vendor table [S2]. BrowseComp **90.4% single-agent / 92.2% Ultra** [S2].
- Vals Finance Agent v2 **53.76% ±0.85**, SRE **30.53% ±2.85**, CUA **8.33%**, Harvey legal-agent **2.50% ±0.83**, SkillsBench **54.10% ±4.73** at profile default max effort, with per-benchmark overrides possible [S4]. Low complete-workflow scores limit broad autonomy claims.
- Agents' Last Exam **52.7% table / 53.6 prose** within the same vendor article; exact configuration difference unresolved, neither averaged nor silently substituted [S2].
- Tau3-Banking, Claw-Eval/ClawProBench and MCP-Atlas: no directly verified exact-model score found. BenchLM lists Tau2 85.1% as AA-attributed secondary evidence, not a directly reverified current row [S5].

Reasoning / knowledge:

- GPQA Diamond **94.6% vendor / 95.20% ±1.07 Vals**; Vals MMLU Pro **89.10% ±0.31** and current ProofBench v1.1 **83.00% ±3.77** [S2,S4].
- FrontierMath **v2 tiers 1–3 89% / tier 4 83%**, vendor; GeneBench Pro **28.7%** [S2].
- ARC Prize directly verified max: ARC-AGI-1 **96.5%**, ARC-AGI-2 **92.5%**, ARC-AGI-3 **7.8%**; medium **92.5% / 67.1% / 1.1%**. ARC-AGI-3 prose separates **13.33% public / 7.78% semi-private**, showing why split and effort labels matter [S7].
- AA current Intelligence Index **v4.3.2 47, #27/217**, versus vendor historical **v4.1 58.9** [S2,S3]. Vals current index **58.01% ±1.02, #12/48**, versus historical July **63.71%** [S4]. Different suites/snapshots, not evidence of a fixed-test capability collapse.
- BenchLM **75.35/100, #10/950**, partial **70/638** coverage [S5]. Secondary AA-attributed HLE **49.5%**, LCR **84.0%**, CritPt **32.3%**, Omniscience Index **22.0**, accuracy **59.4%**, hallucination **92.2%** are not directly exposed in current AA text and retain secondary-only status [S5]. Hallucination rate uses incorrect / all non-correct responses, not all answers; it cannot be read as 92.2% of all outputs being wrong [S8]. No exact MLCR score verified.

Coding:

- SWE-bench Pro **64.6%**, DeepSWE **v1.1 72.7%**, historical AA Coding Agent Index **v1.1 80**, vendor table [S2].
- Vals SWE-bench **96.20% ±0.86**, LiveCodeBench **82.60% ±1.09**, Vibe **v1.1 80.50% ±3.72**, Vibe **1–100 20.01% ±3.63**, migration **52.92% ±4.35**, ProgramBench **1.50% ±0.86**, terminal-science **20.00% ±4.82** [S4]. Different Vibe editions are separate tasks, not conflicting reruns.
- BenchLM AA-SciCode **57.1%**, Coding Index **77.4%**, secondary-attributed snapshot, not substituted for vendor Coding Agent Index 80 [S5].

Long context and multimodal:

- MRCR **v2 8-needle 256K–512K 91.5% / 512K–1M 73.8%**; GraphWalks BFS **256K 90.7 F1 / 1M 77.1 F1**, vendor [S2]. Capacity is not perfect full-window retrieval.
- MMMU Pro **83% no tools / 84.6% tools**, gdp.pdf **30.7%**, vendor; Vals MMMU Pro **88.84% ±0.76** under its setup [S2,S4]. No native audio/video generation inferred.

### Evidence comparison and research trail

Three distinct fresh searches: `"GPT-5.6 Sol" official OpenAI`, `"GPT-5.6 Sol" independent benchmark`, `"GPT-5.6 Sol" pricing review limitations`. DuckDuckGo challenged all three; alternate Bing `GPT-5.6 Sol review benchmark pricing` returned largely general GPT links. These search attempts yielded no benchmark evidence. Directly inspected exact-model vendor docs, original launch, AA, Vals, BenchLM, LLM Stats and ARC evaluator pages; attempted Devin review URL returned 404 and was not treated as read.

The vendor prose highlights Ultra's 92.2% BrowseComp while its table gives the single-agent 90.4%; BenchLM similarly surfaces Ultra's 91.9% TB2.1 on the base model page. Primary column labels control [S2,S5]. Vendor simulations estimate latency at fast API speeds but cost at regular pricing, so performance-per-dollar marketing is not a measured current standard-endpoint guarantee [S2]. Cyber results use reduced safeguards and do not imply every public request reproduces them. Current Vals CyberBench v1.1 76.31% differs from its historical 88.14%, and ProofBench v1.1 83% from historical 77%; suite versions/snapshots are retained separately [S4]. BenchLM also labels 89% FrontierMath as both legacy and v2; primary v2 attribution controls [S2,S5].

LLM Stats still lists launch $5/$30 and $0.50 cache while current vendor, Vals and AA agree on $4/$20/$0.40 [S1,S3,S4,S6]. Its p95 5.82-second latency and roughly 22 characters/s floor are not comparable to AA max-effort TTFT **100.24 seconds** and **95 tokens/s**: effort, workload, units and percentiles differ [S3,S6]. AA reports **$1.99/index task**, **90M total output tokens** and only continued default-10K speed benchmarking for this deprecated entry; Vals reports **$14.24/index test, 37m23s** on another suite [S3,S4]. No cross-suite task-cost ratio is inferred. Strong SWE/GPQA coexist with low ProgramBench/legal-agent/CUA scores, materially limiting universal autonomous-work claims.

### Normalized scores (1–100)

- **Tool use: 92/100.** Single-agent terminal, GDPval and browsing are strong with independent Vals corroboration; low legal-agent/CUA and modern terminal difficulty cap the score [S2,S4].
- **Reasoning: 92/100.** GPQA around 95%, verified ARC2 92.5% and difficult math support frontier reasoning; ARC3 7.8%, current index standing and calibration uncertainty limit ceiling credit [S2–S5,S7,S8].
- **Context window: 95/100.** Official 1.05M earns top capacity tier; MRCR 73.8% at 512K–1M does not qualify for perfect-retrieval credit [S1,S2].
- **Multimodal: 80/100.** Strong image/document reasoning and MMMU evidence, but output stays text and native audio/video unsupported or unverified [S1,S2,S4].
- **Coding: 92/100.** Strong independent SWE/Vibe/migration evidence and vendor DeepSWE; low ProgramBench and harder terminal/science results limit universal superiority [S2,S4].
- **Cost efficiency: 60/100.** Current $4/$20 is premium despite cache discounts and improved efficiency; $1.99 AA task cost, long-context premiums and temporary promotion cap value [S1,S3].
- **Overall Score: 90/100.** (92 + 92 + 95 + 80 + 92) / 5 = 90.2 → 90. Best fit: difficult supervised coding and professional document/tool workflows at calibrated effort; cost excluded.

### Sources

- [S1] https://developers.openai.com/api/docs/models/gpt-5.6-sol — exact primary API specifications, alias, tools, promotional/cache/long-context pricing.
- [S2] https://openai.com/index/gpt-5-6/ — primary launch; separate single/Ultra columns, historical indices, footnotes and benchmark tables.
- [S3] https://artificialanalysis.ai/models/gpt-5-6-sol — independent current max-effort profile, index, task economics and benchmarking-lifecycle notice.
- [S4] https://www.vals.ai/models/openai_gpt-5.6-sol — independent current max-effort suite plus dated July launch snapshot.
- [S5] https://benchlm.ai/models/gpt-5-6-sol — secondary aggregation, partial coverage, source links and attribution/configuration pitfalls.
- [S6] https://llm-stats.com/models/gpt-5.6-sol — secondary profile with stale launch pricing and differently defined latency/throughput.
- [S7] https://arcprize.org/results/openai-gpt-5-6-sol — direct independent verified scores, effort variants and public/semi-private distinction.
- [S8] https://artificialanalysis.ai/evaluations/omniscience — direct evaluator metric definitions; exact-model numeric row not exposed.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three distinct search attempts and alternate-engine retry; direct primary/independent-source inspection with explicit single-agent/Ultra, snapshot, metric and rate comparisons. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
