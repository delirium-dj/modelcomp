# Solar Open 2 — findings by GPT 6.1 Sol

- Source: Upstage, `upstage/Solar-Open2-250B`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)
- Confidence: **provisional** — substantial primary benchmark evidence, without independently reproduced exact-model results or a verified hosted monetary tariff.

## Model card

- **Name:** Solar Open 2 (250B-A15B), not Solar Open 100B or Solar Pro 4.
- **Short description:** Upstage's open-weight, text-only model for Korean/English/Japanese agents, coding and office work. Its document-producing agents use external toolchains; illustrated PDFs and spreadsheets do not establish native visual input.[1][2]
- **Provider / access / IDs:** Exact weights `upstage/Solar-Open2-250B`; publisher's self-hosted vLLM example serves `solar-open2-250b` through OpenAI-compatible Chat Completions and Anthropic-compatible Messages. No exact current entry was found in the live models.dev, Zen or OpenRouter catalogs inspected. Upstage's current native model index lists other Solar products, not this exact Open 2 API tariff.[1][3][4][5][6]
- **Release / knowledge:** Publisher announcement **2026-07-22**; inspected technical report **v2, July 24**, titled July 22. Exact knowledge cutoff unverified.[2][7]
- **Architecture:** **250,287,794,944 total parameters / ~15B active**, 48 layers, 320 routed experts plus one shared, top eight routed per token. Hybrid stack repeats one softmax layer then three linear layers; NoPE. Only ~2.3% of parameters are transferred from Solar Open 1, not a renamed identical checkpoint.[1][7]
- **Context window:** Report specifies **1,048,576 tokens**; card calls it 1M. Recommended high-reasoning block cap **131,072**, with `max_tokens` up to 256K covering reasoning and final answer; this is a runtime recommendation, not an unlimited output guarantee.[1][7]
- **Modalities / controls:** **Text in/out**. `reasoning_effort: high` or `none`; temperature/top-p **1.0/1.0**. Publisher explicitly recommends **preserving prior reasoning in multi-turn history**, unlike models that require it stripped. Tool/reasoning parsers and template configuration are part of the serving recipe.[1]
- **License:** **Upstage Solar License**, not plain Apache 2.0. Commercial use, fine-tuning and distillation are permitted with conditions; distributed derivative AI models require a Solar-prefixed name, “Built with Solar” attribution and license notice.[8]
- **Hardware / pricing:** Publisher says **four H200s BF16 minimum**, eight recommended; quantized deployment can use **two H200s**, with context/runtime-dependent requirements. No verified per-token hosted price. The launch Playground trial explicitly ended **July 31**, so it is not scored as current free inference. No running endpoint or hardware benchmark was tested by this research.[1][2]

### Raw benchmarks found

**Provenance:** All headline numbers below are **Upstage-reported internal-harness measurements**, including comparisons. Technical report §5 says identical per-benchmark settings across its comparison group. An AA-named benchmark is not automatically an independent AA run; GDPval-AA v2 is described as measured **June 30, 2026**.[1][7]

Agent / tool use:

- **SWE-bench Verified 70.4%**, **Terminal Bench Hard 28.3%**, **APEX-Agents 16.6%**, **MCP-Atlas 58.2%**, **Tau3 banking 19.6%**, **GDPval-AA v2 1128 Elo**. Hard is not silently relabelled Terminal-Bench 2.0/2.1/4.0; banking is not overall Tau3.[1][7]
- **Ko-GDPval 86.8**, publisher's in-house rubric benchmark: **170 Korean tasks across 58 occupations / 11 industry domains**. This is a composite deliverable-quality score, not 86.8% binary task completion or a GDPval Elo. Its “Quality” subdimension is **79.2**.[7]
- No verified exact independent Claw, MCP, terminal, or business-agent reproduction found in the inspected sources. Secondary BenchLM's rows cite the same publisher card and are not a second independent experiment.[9]

Reasoning / knowledge:

- **MMLU-Pro 86.2%**, **GPQA Diamond 86.3%**, **HLE without tools 28.8%**, **HMMT February 2026 93.9%**, **AIME 2026 95.7%**.[1][7]
- Blog gives higher-precision versions **GPQA 86.26**, HMMT **93.94**, LCB **92.42**; these are not additional replications.[2]
- **IFBench 80.0%**, **Multi-Challenge 61.0%**; Korean suite average **85.4** over the listed heterogeneous metrics, including in-house tasks. KMMLU-Pro **78.4%**, CLIcK **90.7%**, HAE-RAE v1.1 **73.8%**. Korean-only domain work does not make this general model finance-first.[1][7]
- No exact independent HLE, GPQA, CritPt, Omniscience or Intelligence Index measurement verified. Guessed AA profile returned 404; this bounded URL result is not a capability zero.

Coding:

- **LiveCodeBench v6 92.4%**, **SWE Verified 70.4%**, **ArtifactsBench 55.9%** in the publisher's internal setup. The gap between short contest coding and harder terminal/repository execution is retained.[1][7]
- No verified exact SciCode, SWE-Pro, Vibe Code Bench, or third-party coding reproduction found; no Solar Pro/Open 1 results substituted.

Long context / modality:

- **AA-LCR 62.3%**, publisher-run. Configured 1M capacity is distinct from demonstrated retrieval quality; no ≥98% retention at full window verified.[1][7]
- No native image/audio/video accuracy verified; public card is text generation. Document parsing/rendering in a sandbox is tool use rather than native multimodality.

### Normalized scores (1–100)

- **Tool use: 58/100.** MCP 58.2%, banking 19.6% and terminal Hard 28.3% support practical but incomplete agent reliability; in-house Korean rubric success is not global binary completion.[1][7]
- **Reasoning: 78/100.** Primary GPQA ~86%, HLE 28.8% and strong competition math support capable reasoning; confidence is capped by vendor-only reproduction and missing harder/knowledge-reliability measures.[1][7]
- **Context window: 95/100.** Verified million-token configuration earns the capacity band, with LCR 62.3% explicitly limiting retention claims.[1][7]
- **Multimodal: 15/100.** Text-only model; external document workflows do not add native perception.[1]
- **Coding: 76/100.** Strong vendor LCB-v6 92.4% and SWE 70.4%, tempered by terminal Hard 28.3%, weaker artifacts and lack of independent exact replication.[1][7]
- **Cost efficiency: 70/100.** **Low-confidence resource-efficiency proxy**, not a verified dollar tariff: 15B active and hybrid attention reduce compute/cache relative to a fully active 250B model, but deployment still requires multiple H200-class GPUs. No free-inference claim is made.[1][2]
- **Overall Score: 64/100.** Half-up mean `(58 + 78 + 95 + 15 + 76) / 5 = 64.4`; cost excluded. Provisional fit: self-hosted multilingual text agents and Korean office workflows with hardware available.

### Fresh search trail and sources

- Bing RSS [`"Solar Open 2" benchmark`](https://www.bing.com/search?format=rss&q=%22Solar+Open+2%22+benchmark): unrelated Instagram results.
- Google [`"Solar Open 2" Upstage benchmark`](https://www.google.com/search?q=%22Solar+Open+2%22+Upstage+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"Solar Open 2" benchmark`](https://duckduckgo.com/html/?q=%22Solar+Open+2%22+benchmark): genuine publisher/technical-report leads. Exact `Solar-Open2-250B` card, license, report §5 and current catalogs inspected; a guessed shorter HF name returned 401. No peer findings consulted.

[1]: https://huggingface.co/upstage/Solar-Open2-250B/raw/main/README.md
[2]: https://www.upstage.ai/blog/en/solar-open-2
[3]: https://models.dev/api.json
[4]: https://opencode.ai/zen/v1/models
[5]: https://openrouter.ai/api/v1/models
[6]: https://console.upstage.ai/docs/models
[7]: https://arxiv.org/html/2607.20062v2#S5
[8]: https://huggingface.co/upstage/Solar-Open2-250B/raw/main/LICENSE
[9]: https://benchlm.ai/models/solar-open-2

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research; exact publisher card, license and technical-report methodology plus catalog cross-checks. Scores are normalized interpretations; resource-cost proxy and vendor-only evidence are explicitly provisional.
