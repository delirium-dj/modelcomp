# Muse Glimmer 30B — findings by Qwen 3.8 Flash

- Source: Meta Superintelligence Labs / Muse Glimmer 30B (`meta/muse-glimmer-30b`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's Apache-2.0 **30B dense multimodal agent model distilled from Muse Spark**, purpose-built for always-on local agent workflows on a single consumer GPU — strong well-scoped tool/SWE scores for its size class, but it collapses on Artificial Analysis's open-ended agentic suites and has a catastrophic unaided-factuality profile.
- **Provider / access:** open weights `meta-models/Muse-Glimmer-30B` (HF, BF16 + official GGUF quants); hosted on OpenRouter `$0.30 / $1.10`, Fireworks/Together/Vercel `$0.35 / $1.50`, NVIDIA NIM `$0`. No OpenCode Zen Free ID (`noFreeId`).
- **Release / knowledge:** 2026-08-10/11 (Meta AI Research launch post; HF 2026-08-10); knowledge cutoff not disclosed.
- **IDs:** `meta/muse-glimmer-30b`.
- **Context window:** **131,072 tokens (128K default per Meta docs)** — matches curated `meta.json`; gated local+global GQA for KV-cache efficiency (Raschka architecture note).
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes. No audio/video input or non-text output.
- **Pricing (as of 2026-10-02):** self-host free (Apache-2.0); cheapest hosted $0.30/$1.10 (OpenRouter), NVIDIA NIM $0. Cost excluded from Overall.
- **Architecture:** 30B dense (not MoE), multimodal, distilled from Muse Spark; vision encoder for screenshot/document grounding.

### Raw benchmarks found

> Verified against BenchLM `muse-glimmer-30b` (overall **42.27/100, #123 of 783**, 36 of 645 rows — partial coverage → conservative), citing the Meta AI Research launch post (vendor-run) and Artificial Analysis (independent) — fetched 2026-10-02. The vendor-vs-AA gap is the defining story of this model.

Agent / tool use:

- Meta launch: MCP Atlas **75.5%**, DeepSearchQA **74.6%**, OSWorld-Verified **65.9%**, skillsBench **44.3%**, Terminal-Bench 2.1 **51.7%**
- Artificial Analysis (indep.): AA Agentic Index **10.5%**, AutomationBench **6.8%**, GDPval-AA **774 (13.7% normalized)**, τ³-Banking **23.5%**, TB 4.0 **0.5%**, Briefcase Elo 474, GDP.pdf 10.0% → open-ended agent work is near-floor

Reasoning / knowledge:

- AA-GPQA Diamond **83.5%**; AA-LCR **83.3%**; AIME26 (vendor) **94.7%**; IFBench (vendor) **77%**
- AA-HLE **22.0%**; AA Intelligence Index **17.5**; CritPt **2.6%**; MLCR-AA **20.0%**
- AA-Omniscience Index **-32.8%** (Accuracy 27.0% / Hallucination **81.9%**) — worst-in-class unaided recall

Coding:

- SWE-bench Verified (vendor) **76.0%**; SWE-bench Pro **51.2%**; Terminal-Bench 2.1 **51.7%**
- AA-SciCode **44.9%** / vendor SciCode **43.6%**; AA Coding Index **49.0%**

Multimodal / long context:

- CharXiv **78.8%**, ScreenSpot Pro **75.4%**, OmniDocBench 1.5 **75.8%**, MMMU-Pro **74.0%** (AA 74.3%) — genuinely strong image/document grounding for 30B
- 131K window; AA-LCR 83.3 (strong long-context reasoning) but MLCR-AA 20.0% shows raw multi-needle retrieval is much weaker; no ≥98%-at-length row.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Judged against absolute bands, not size-relative credit.

- **Tool use: 62/100.** The vendor suite is strong for the size class (MCP Atlas 75.5%, DeepSearchQA 74.6%, OSWorld-Verified 65.9%), but AA's independent open-ended runs — Agentic Index 10.5%, AutomationBench 6.8%, GDPval 13.7%, τ³ 23.5% — are close to floor; mid band, dragged by the harness gap.
- **Reasoning: 62/100.** GPQA 83.5% and AA-LCR 83.3% are solid, but HLE 22.0%, Index 17.5, CritPt 2.6% are low-mid and the **-32.8 Omniscience / 81.9% hallucination** is a severe penalty — good at grounding-in-context, bad at standalone hard reasoning.
- **Context window: 62/100.** 131K lands in the 100K–200K tier (50–64); AA-LCR 83.3 is a strong long-context-reasoning support so it sits at the top of the tier, but MLCR 20.0% shows retrieval-at-length is weak and there is no ≥98% row.
- **Multimodal: 70/100.** Text + image in / text out is the +image band, and this is its best dimension: CharXiv 78.8, ScreenSpot Pro 75.4, OmniDocBench 75.8, MMMU-Pro 74.0 are four corroborating visual/document rows at the top of the 60–70 band; no video/audio or non-text output to lift further.
- **Coding: 72/100.** SWE-bench Verified 76.0% (vendor) and SWE-Pro 51.2% are strong-for-size repo signals, but AA Coding Index 49.0 and SciCode ~44 cap it in the mid band; excellent as a local coding agent, not frontier.
- **Cost efficiency: 98/100.** Apache-2.0 self-host free, NVIDIA NIM $0, hosted from $0.30/$1.10 — top-decile value. Cost is excluded from Overall.
- **Overall Score: 66/100.** Mean of Tool 62, Reasoning 62, Context 62, Multimodal 70, Coding 72 = 328/5 = 65.6 → 66. Best fit: run it locally, free, as an always-on single-GPU agent that excels at well-scoped tool calls, GUI/document grounding and repo coding within 128K — but it is not a reasoning or knowledge authority (HLE 22%, Omniscience -32.8%), its open-ended agentic scores crater under independent AA harnesses, and BenchLM's own 42.27 conservative aggregate reflects that gap. This is a below-cohort placement (folder mean 75.3): the cohort rewarded the strong vendor coding/MCP/OSWorld numbers; I discount them for the vendor-vs-AA divergence and the factuality floor, and score the whole model honestly rather than its size-class-relative peak.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM `muse-glimmer-30b` rows citing the Meta AI Research launch post + Artificial Analysis independent leaderboards — fetched 2026-10-02; HF `meta-models/Muse-Glimmer-30B` card; Raschka architecture note; Meta/OpenRouter pricing); scores are normalized 1–100 interpretations, not official vendor scores. Explicitly flagged the vendor(Meta)-vs-independent(AA) gap on agentic/reasoning and the -32.8 Omniscience factuality floor; curated meta (131K, text+image, Apache-2.0 pricing) matched verified data.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
