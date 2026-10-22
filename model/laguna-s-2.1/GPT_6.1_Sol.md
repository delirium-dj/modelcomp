# Laguna S 2.1 — findings by GPT 6.1 Sol

- Source: Poolside, `poolside/Laguna-S-2.1`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)
- Confidence: **provisional** — strong primary engineering evidence; broad academic reasoning coverage remains unverified and its reasoning rating is a bounded proxy.

## Model card

- **Name:** Laguna S 2.1, not Laguna XS 2.1 or M.1.
- **Short description:** Poolside's open-weight text model for persistent engineering and tool-using agents. Six substantial coding/tool benchmarks are real evidence, but do not establish frontier general math/knowledge capability.[1][2]
- **Provider / access / IDs:** Exact weights `poolside/Laguna-S-2.1`; native pool harness and self-hosted OpenAI-compatible runtimes. Current OpenRouter **`poolside/laguna-s-2.1`**, backend `20260720`, FP4 Poolside route, status 0, **1,048,576 total / 131,072 max output**.[1][3]
- **Current free access:** Exact **`poolside/laguna-s-2.1:free`** API independently returns a live FP4 Poolside endpoint, status 0, **262,144 / 32,768**, **$0 input/$0 output**, ~99.93% advertised one-day uptime. This directly contradicts treating the older local “deprecated free endpoint” note as current fact. Catalog/uptime observations are not an authenticated successful inference.[4]
- **Release / knowledge:** Publisher release **2026-07-21**; gateway backend July 20. Publisher describes a **November 2025 cutoff** in its mathematics case study; that provenance claim is not independently audited here.[2][3]
- **Architecture / license:** **118B total / ~8B active MoE**, 48 layers (12 global/36 sliding-window, 512-token window), 256 routed/top ten plus one shared expert, grouped-query attention. **OpenMDW-1.1**, allowing commercial and noncommercial use. BF16, FP8, INT4/NVFP4, GGUF and draft-model variants exist; quantizations are not universally quality-equivalent.[1]
- **Context / controls / modalities:** Primary **1,048,576**, text-only I/O. Thinking is **off or max/on**, on by default; no native low/medium/high effort control in the release. Preserve prior `reasoning_content` for continued agent reasoning. Third-party gateway effort labels are not assumed to select distinct native modes.[1][2]
- **Pricing (2026-10-22):** Paid gateway **$0.09 input / $0.18 output / $0.009 cached per 1M**, explicitly 10% discounted. Publisher's standard dedicated 1M lane **$0.10/$0.20/$0.01 cached**; separate free 262K lane verified above. Free hosted inference and royalty-free weights are distinct; local hardware still has a cost.[2][3][4]

### Raw benchmarks found

**Primary publisher final-checkpoint measurements**, thinking enabled, pool harness/internal Harbor fork; published full trajectories. These are not independently repeated by this research:[1][2]

- **Terminal-Bench 2.1 70.2%**, **SWE Multilingual 78.5%**, **SWE-Pro Public Dataset 59.4%**: mean **pass@1 averaged over four attempts per task**, not best-of-four pass@4.
- **DeepSWE v1.1 40.4%**, **SWE Atlas Codebase QnA 46.2%**: pass@1 averaged over **three attempts**; **Toolathlon Verified 49.7%**, averaged over **three runs**.
- Critical runtime conditions: up to **500 steps**, **five-hour timeouts** for TB2.1/SWE-Pro/Multilingual, **six hours for DeepSWE**; altered sandbox resource ceilings. DeepSWE internet disabled; internet generally enabled elsewhere unless specified. Toolathlon resets/repairs after **every run**, unlike the cited default four-hour schedule. Exact timeout/resource/repair recipes matter.
- Publisher compares other models using the **maximum of self-reported/benchmark-author/third-party figures**; not a common-harness leaderboard. Its own DeepSWE uses **pool**, unlike leaderboard mini-swe-agent; published trajectories improve inspectability but do not make the comparisons controlled.
- **Thinking-mode effect:** TB2.1 **60.4% off →70.2% on**; DeepSWE **16.5% off →40.4% on**, with much larger completion-token use. No native three-level effort curve inferred.
- Documented limitations: harness/tool-schema overfitting, incorrectly escaped nested JSON arguments, and overthinking. Those cap portable agent reliability despite strong native-harness outcomes.

**Reasoning evidence and bounds:**[2]

- SWE Atlas **46.2%** directly tests codebase understanding, not academic reasoning. Publisher's **68-minute offline rediscovery of Erdős #397** is one tool-assisted case, explicitly **not a first solution or a benchmark-wide math success rate**. Harness optimization case reports **5.19% less time /71.1% fewer allocations** at its selected attempt; not a broad “self-improvement” guarantee.
- No verified exact GPQA, HLE, AIME, CritPt or broad knowledge benchmark score located. A guessed AA profile and Vals profile returned 404. BenchLM's six rows reproduce the publisher and are not independent replicas.[5]

**Small independent/custom checks**, preserved without generalizing their denominators:

- AI BENCHY's **October 1, `::low` gateway-labelled** run reports **3/23 tests fully passed**, **23.2% attempt pass rate**, own composite **4.6**, **88.24 s average** and **$0.108 suite cost**. “Fully passed” requires every repeat to pass; reliability **10.0** is not 100% answer accuracy. This small heterogeneous suite and effort mapping are not a GPQA/HLE substitute or a native-max test.[6]
- Sponsored community Apple-Silicon harness: **38/38 assertions across six fixed tasks** for a particular mixed-precision 2-bit conversion, **63.86 generation tokens/s**, **39.31 GB peak**, on **128GB M5 Max** with pinned MLX/runtime. Another oQ2e conversion passed sparse retrieval cases through **262,136 prompt tokens**, not a million-token statistical retention suite. These are quant/runtime-specific reports, not full-precision or universal coding guarantees.[7]

**Long context / missing measurements:** Native/paid 1M capacity is verified; no ≥98% complex full-window retention, native perception, exact independent broad coding suite or Claw score verified. A text-only model can compare screenshots numerically through tools without possessing vision.[1][2]

### Normalized scores (1–100)

- **Tool use: 66/100.** Publisher TB2.1 70.2% and Toolathlon 49.7% support capable agents; extended timeouts, harness effects and weak small-suite transfer constrain portable reliability.[2][6]
- **Reasoning: 60/100.** **Low-confidence engineering-reasoning proxy** from Codebase QnA, executable long-horizon work and limited external checks; no claim of measured academic reasoning at this rating.[2][6]
- **Context window: 95/100.** Verified native/paid 1M capacity band; free API is 262K and sparse local retrieval checks do not establish near-perfect full-window retention.[1][3][4][7]
- **Multimodal: 15/100.** Explicit text-only input/output; no native vision inferred from frontend/code artifacts.[1][2]
- **Coding: 74/100.** SWE-Pro Public 59.4%, Multilingual 78.5% and DeepSWE 40.4% support serious engineering, with long timeout/custom-harness and incomplete independent generalization caps.[2]
- **Cost efficiency: 100/100.** Actual current $0/$0 free Poolside gateway meets the free-access rule; its 262K/32K limits, account terms and paid million-token route remain separate.[3][4]
- **Overall Score: 62/100.** Half-up mean `(66 + 60 + 95 + 15 + 74) / 5 = 62.0`; cost excluded. Provisional fit: economical text engineering agents, rather than an established broad-reasoning flagship.

### Fresh search trail and sources

- Bing RSS [`"Laguna S 2.1" benchmark`](https://www.bing.com/search?format=rss&q=%22Laguna+S+2.1%22+benchmark): unrelated publishing/books results.
- Google [`"Laguna-S-2.1" Poolside benchmark`](https://www.google.com/search?q=%22Laguna-S-2.1%22+Poolside+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"Laguna S 2.1" benchmark`](https://duckduckgo.com/html/?q=%22Laguna+S+2.1%22+benchmark): real primary and custom/local-evaluation leads. Original publisher protocol/limitations, exact paid/free API and small independent checks inspected. No peer findings consulted.

[1]: https://huggingface.co/poolside/Laguna-S-2.1/raw/main/README.md
[2]: https://poolside.ai/blog/introducing-laguna-s-2-1
[3]: https://openrouter.ai/api/v1/models/poolside/laguna-s-2.1/endpoints
[4]: https://openrouter.ai/api/v1/models/poolside/laguna-s-2.1:free/endpoints
[5]: https://benchlm.ai/models/laguna-s-2-1
[6]: https://aibenchy.com/model/poolside-laguna-s-2-1-low/
[7]: https://raw.githubusercontent.com/tanishq-dubey/macos-laguna-s2.1/main/README.md

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research, exact primary benchmarks/protocol, live paid/free route inspection and scoped custom evaluations. Scores are interpretations; engineering reasoning is explicitly provisional, not a fabricated benchmark.
