# Hy3 Preview — findings by GPT 6.1 Sol

- Source: Tencent Hy Team, `tencent/Hy3-preview`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** Hy3 Preview (Hy3 preview), the April checkpoint; not July's final Hy3 or Hy4 Preview.
- **Short description:** Tencent's open-weight text MoE for configurable reasoning, software agents and long-context work. Same-family architecture does not make later final-model evaluations transferable.[1]
- **Provider / access / IDs:** Download `tencent/Hy3-preview`; native examples use self-hosted OpenAI-compatible Chat Completions with `hy3-preview`. Current OpenRouter `tencent/hy3-preview` has one **GMICloud BF16** endpoint, backend `20260421`, status 0 and advertised ~99.93% one-day uptime. Catalog observations are not an authenticated inference test.[1][2]
- **Release / knowledge:** Publisher README and license state **2026-04-23** weights release; gateway creation is April 22 and backend April 21. Exact knowledge cutoff unverified.[1][2][3]
- **Context window:** Publisher **256K**, AA **256,000**, gateway **262,144 total / 235,929 max completion** at inspection. Output is route-specific; no universal 64K/128K ceiling is inferred from local older metadata.[1][2][4]
- **Modalities / controls:** **Text in/out only**. Native default **`no_think`**, optional `low`/`high`; recommended temperature **0.9**, top-p **1.0**. AA's reasoning results do not describe the default no-thinking configuration. Tools require the appropriate Hy parser/runtime.[1]
- **Architecture:** **295B backbone / 21B active**, plus **3.8B MTP**; 80 backbone layers, 192 experts with top eight active, BF16. The 3.8B prediction layer is separate rather than silently included/excluded to manufacture another checkpoint.[1]
- **License:** **Tencent Hy Community License Agreement**, not final Hy3's Apache license. The original agreement excludes EU/UK/South Korea, has a 100M-MAU additional-license condition and restrictions on improving other models. Open weights do not mean unrestricted Apache-style reuse.[3]
- **Pricing (2026-10-22):** Verified paid GMICloud gateway **$0.18 input / $0.60 output / $0.06 cached input per 1M**. AA's cheaper $0.063/$0.21 metadata is a different provider/time basis, not the inspected gateway tariff. Self-hosting requires hardware; royalty-free weights are not zero-cost inference.[1][2][4]
- **Free-route conflict:** Kilo's page advertises `tencent/hy3-preview:free` at $0/$0 and says currently free, but attributes pricing to OpenRouter; the actual exact free-route API returns **`endpoints: []`**. This unresolved advertising/catalog conflict is insufficient to award current free-inference cost 100.[5][6]

### Raw benchmarks found

**Primary instruct charts visually inspected** — original assets, correct blue Hy3 Preview bars, not cyan Hy2 values; vendor-reported and harness scope limited where unspecified:[7][8][9][10]

- **SWE-bench Verified 74.4%**, **Terminal-Bench 2.0 54.4%**, **BrowseComp 67.1%**, **WideSearch 70.2%**. TB2.0 is not TB2.1 or TB4.[9]
- **WildClawBench 45.3% text-only**, **ClawEval 55.0% `pass^3`**. The latter is the labeled three-trial reliability metric, not pass@1 or pass@3.[10]
- **GPQA Diamond 87.2%**, **HLE 30.0%**, **IMOAnswerBench 84.3%**, FrontierScience Olympiad **70.0%**. HLE footnote says domestic models use the **text-only subset**, overseas models the full set; do not treat that cross-model chart as a perfectly matched comparison.[7]
- **Tsinghua Qiuzhen math qualifier 88.4%, `avg@3`**; **CHSBO 2025 87.8%, text-only `pass^3`**. Different metrics/attempt regimes are preserved.[7]
- **AA-LCR 66.3% vendor chart**, **LongBench v2 65.4%**, **AdvancedIF 79.5% CIF&CC subsets**, **CL-bench 22.8%**, **CL-bench Life 15.7%**. These are not near-perfect retention or full-suite instruction following.[8]
- README's separate **preview-Base** table (including one-shot LiveCodeBench-v6) measures the pretrained base, not this Instruct model; those numbers are not used as Instruct coding scores.[1]

**Artificial Analysis independent reasoning record** — UUID `8ca48626-ff5e-48b3-8401-38081376d706`, exact `hy3-preview`:[4]

- Intelligence Index **22.7362, estimated**, not complete measured current-index coverage.
- **Tau2 92.6901%**, **GPQA 86.6667%**, **HLE 27.7572%**, **AA-LCR 64.6667%**, **CritPt 4.5714%**, **IFBench 63.1293%**.
- Omniscience index **−35.05**; accuracy **27.9333%**, hallucination rate **87.3959%**. The negative index is not percent accuracy.
- TB2.1/TB4, GDPval, banking, SciCode, LCB and MMMU-Pro are null in this selected record. No independent exact terminal/coding numbers are invented; current-index gaps remain gaps. Latency and throughput are also absent.
- AA marks Preview deprecated toward final `hy3`; this does not retire the downloadable weights or prove the listed gateway unavailable.

**Coverage limits:** The guessed exact Vals profile returned 404. No verified exact independent SWE/LiveCodeBench, MCP-Atlas, full-window ≥98% retention, or native perception score was found. Primary agent/code results make a scored report defensible, but confidence is lower where independent replication is absent.

### Normalized scores (1–100)

- **Tool use: 62/100.** Independent Tau2 92.69% plus primary TB2.0 54.4%, search and Claw results show usable agent capability; narrow protocols and missing independent harder-agent coverage cap general reliability.[4][9][10]
- **Reasoning: 76/100.** Independent GPQA 86.67% and HLE 27.76% support solid reasoning, tempered by CritPt 4.57%, weak knowledge reliability, and subset/attempt limitations in vendor charts.[4][7]
- **Context window: 76/100.** Verified 256K/262K capacity band with independent LCR 64.67%; no perfect retention or larger external-memory equivalence claimed.[1][2][4]
- **Multimodal: 15/100.** Actual model and route are text-only; the publisher's general multimodal compression-tool description does not add vision/audio to these weights.[1][2]
- **Coding: 72/100.** Primary SWE Verified 74.4% and TB2.0 54.4% support practical coding, with incomplete independent coding evidence and no transfer of base/final-model figures.[1][9]
- **Cost efficiency: 95/100.** Current $0.18/$0.60 paid route is inexpensive with caching; unverified functioning free access, deployment costs and license scope prevent a free/unrestricted score.[2][3][5][6]
- **Overall Score: 60/100.** Half-up mean `(62 + 76 + 76 + 15 + 72) / 5 = 60.2`; cost excluded. Best fit: inexpensive configurable text agents where this exact preview remains useful.

### Fresh search trail and sources

- Bing RSS [`"HY3 Preview" benchmark`](https://www.bing.com/search?format=rss&q=%22HY3+Preview%22+benchmark): unrelated LinkedIn results.
- Google [`"HY3-Preview" Tencent benchmark`](https://www.google.com/search?q=%22HY3-Preview%22+Tencent+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"HY3 Preview" benchmark`](https://duckduckgo.com/html/?q=%22HY3+Preview%22+benchmark): genuine Tencent GitHub, evaluator and free-listing leads. Original card/license and four benchmark images inspected directly; no peer findings consulted.

[1]: https://huggingface.co/tencent/Hy3-preview/raw/main/README.md
[2]: https://openrouter.ai/api/v1/models/tencent/hy3-preview/endpoints
[3]: https://huggingface.co/tencent/Hy3-preview/raw/main/LICENSE
[4]: https://artificialanalysis.ai/models/hy3-preview
[5]: https://kilo.ai/models/tencent-hy3-preview-free
[6]: https://openrouter.ai/api/v1/models/tencent/hy3-preview:free/endpoints
[7]: https://huggingface.co/tencent/Hy3-preview/resolve/main/assets/bench_stem.jpg
[8]: https://huggingface.co/tencent/Hy3-preview/resolve/main/assets/bench_context.jpg
[9]: https://huggingface.co/tencent/Hy3-preview/resolve/main/assets/bench_agent_overview_v3.jpg
[10]: https://huggingface.co/tencent/Hy3-preview/resolve/main/assets/bench_claw_agent.png

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research, original benchmark-image inspection, exact AA reasoning record, and live gateway/free-listing comparison. Normalized ratings are interpretations, not official benchmark percentages.
