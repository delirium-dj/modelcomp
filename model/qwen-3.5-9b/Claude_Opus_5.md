# Qwen 3.5 9B — findings by Claude Opus 5

- Source: Alibaba (Qwen) — `Qwen/Qwen3.5-9B`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** The flagship of Alibaba's **small dense** Qwen3.5 line — a 9B **native vision-language** model under Apache 2.0 with a 262K context and the family's unified hybrid thinking/non-thinking mode. Its distinction is per-parameter intelligence: independent analysis by Artificial Analysis "rated it **the most intelligent model under 10B parameters at launch — roughly double the score of the next-closest sub-10B models** — and the most intelligent multimodal model under 15B, leading peers on MMMU-Pro (~69%)" ([LLM Releases](https://www.llm-releases.com/models/qwen3-5-9b)). Distinct checkpoint; `qwen-3.5`, `qwen-3.5-plus` and `qwen-3.5-397b` are separate folders.
- **Provider / access:** **Open weights on Hugging Face** (`Qwen/Qwen3.5-9B`), servable via Transformers, vLLM, **SGLang** (which requires the main branch for Qwen3.5), and KTransformers. Hosted by third-party routers. **No OpenCode Zen ID** — Zen's Qwen line is 3.5 Plus upward; this repo records `opencode/qwen-3.5-9b`.
- **Release / knowledge:** **2026-03-02**, when "Alibaba releases the small Qwen3.5 family (0.8B–9B)" ([LLM Releases lifecycle record](https://www.llm-releases.com/models/qwen3-5-9b)) — i.e. roughly two weeks after the 397B flagship. **Date conflict worth flagging:** Benchgen states "September 2025", which cannot be right given Alibaba's own Qwen3.5 launch was 2026-02-16; I use 2026-03-02. Knowledge cutoff: no verified public date found.
- **IDs:** `Qwen/Qwen3.5-9B` (Hugging Face). **No free hosted tier** — the Apache-2.0 weights are the free path.
- **Context window:** **262,144 tokens (262K) native** ([LLM Releases](https://www.llm-releases.com/models/qwen3-5-9b)); this repo's metadata notes hosts serve anywhere from 128K to 262K, so the effective window is provider-dependent. Max output: no verified public figure found.
- **Modalities:** **Text + image in → text out** — native vision, not an adapter. LLM Releases records modalities as Text / Vision / Code. No audio, no video, no generated media. Reasoning: **unified hybrid thinking / non-thinking mode**, inherited from the Qwen3.5 family; this repo's metadata notes thinking is **on by default**. Tool calls: yes (this repo's metadata characterises it as suited to "short tool-calling tasks"), but unmeasured.
- **Pricing (as of 2026-10-08):** **$0 licence cost — Apache 2.0, downloadable weights.** Hosted rates per this repo's curated metadata: **~$0.10 / MTok input, ~$0.15 / MTok output**, reported as curated. The practical headline is hardware: **native BF16, but ~6 GB in 4-bit — "within reach of consumer laptops."**
- **Architecture:** **Dense, 9B parameters** — not MoE. BF16 native weights. **Apache 2.0.** One disclosed operating cost that is unusual enough to record: LLM Releases notes "**High intelligence comes with heavy reasoning token usage (~260M output tokens to run the Intelligence Index)**", i.e. its strong scores are bought with a large thinking-token budget.

### Raw benchmarks found

> **Coverage is thin and the authoritative trackers are mostly empty.** BenchLM has no entry for this checkpoint (its Alibaba list carries the 397B, 27B, 35B-A3B, 122B-A10B, Plus and Flash variants but not the 9B). LLM Releases carries a full specification record but states "**No benchmark scores recorded yet**". Benchgen has a page but it is marked **Draft** with only two metrics and the note "This model isn't on any benchmark leaderboard yet". What exists is reported below with its provenance.

Agent / tool use:

- **Nothing.** No Terminal-Bench, no τ²/τ³-bench, no OSWorld, no MCP-Atlas, no GDPval, no Toolathlon, no BrowseComp. Tool calling is listed as a capability and is entirely unmeasured.

Reasoning / knowledge:

- **MMLU-Pro: 82.5%** ([Benchgen evaluation](https://benchgen.com/models/alibaba/qwen3-5-9b)) — strong for 9B dense
- **IFBench: 64.5%** (Benchgen evaluation) — against Benchgen's own figure of 76.5% for Qwen3.5 27B
- **Artificial Analysis (relayed, no numeric value published in my sources): most intelligent model under 10B parameters at launch, "roughly double the score of the next-closest sub-10B models"** — recorded as a sourced relative claim, not a score
- Third-party report that it "outscored OpenAI's gpt-oss-120b on GPQA Diamond, MMLU-Pro" ([XDA](https://www.xda-developers.com/qwen-3-5-9b-tops-ai-benchmarks-not-how-pick-model/)) — **no GPQA value given**, so not credited as a figure
- **GPQA Diamond, HLE, AIME, CritPt, AA-LCR, AA-Omniscience: no verified public score found** — in particular there is **no hallucination measurement**
- One aggregator reports an "83% success rate across benchmarks" and a 10th-percentile speed ranking ([benchable.ai](https://benchable.ai/models/qwen/qwen3.5-9b-20260310)) — a composite of undisclosed construction, recorded but not scored

Coding:

- **Nothing.** No SWE-bench Verified or Pro, no LiveCodeBench, no HumanEval, no Aider Polyglot, no SciCode. "Code" appears as a listed capability only.

Multimodal:

- **MMMU-Pro: ~69%** (Artificial Analysis, relayed by LLM Releases) — the basis for its rating as the most intelligent multimodal model under 15B parameters
- No MathVision, CharXiv, OmniDocBench, OCR, video or GUI-grounding number found. This repo's metadata credits it with "strong math and OCR for its size"; **no OCR benchmark exists** to support that.

Long context:

- **No MRCR, RULER, LongBench, AA-LCR or needle-retrieval number at any depth.** The 262K native window is unvalidated by public measurement, and hosts may serve as little as half of it.

### Normalized scores (1–100)

- **Tool use: 42/100.** Scored on complete absence of evidence: **not one agentic or tool-calling benchmark exists** for this checkpoint. Tool calling is a listed capability and this repo's metadata limits the recommendation to "short tool-calling tasks", which is consistent with a 9B model but is a judgement, not a measurement.
- **Reasoning: 66/100.** **MMLU-Pro 82.5% from a 9B dense model is genuinely strong** — within 5 points of models 30× its size in this dataset — and Artificial Analysis independently rating it the most intelligent sub-10B model at launch, at roughly double the next-closest, is meaningful third-party corroboration even without a published number. Capped because the evidence base is **two metrics**: IFBench 64.5% is mid-band and 12 points behind the 27B sibling, and there is no GPQA value, no HLE, no CritPt and no hallucination measurement at all.
- **Context window: 72/100.** 262,144 tokens native on 9B dense weights is a strong specification and unusual at this size. Held at 72 because **nothing validates it** — no retrieval curve, no long-context reasoning score — and because the effective window is provider-dependent, with hosts serving as little as 128K.
- **Multimodal: 72/100.** **Native vision on a 9B model with MMMU-Pro ~69%**, and an independent rating as the most intelligent multimodal model under 15B, is a real achievement at this scale. Capped by text-only output, no audio or video, and the fact that **one vision figure is the entire evidence base** — the claimed OCR strength has no benchmark behind it.
- **Coding: 48/100.** **Zero coding benchmarks.** "Code" is listed as a capability and nothing measures it. Scored just below the midpoint because a model with MMLU-Pro 82.5% certainly writes usable code, with no evidence to calibrate how well.
- **Cost efficiency: 93/100.** Excellent on both licence and hardware: **Apache 2.0** downloadable weights, hosted rates around **$0.10 / $0.15 per MTok**, and — the decisive fact — **~6 GB in 4-bit, which puts a native vision-language reasoner with a 262K context on a consumer laptop**. For local, private, zero-marginal-cost multimodal work this is close to the frontier. Docked for one disclosed and genuinely material cost: **"heavy reasoning token usage (~260M output tokens to run the Intelligence Index)"** means its strong scores are paid for in output tokens, which matters on any metered route.
- **Overall Score: 60/100.** Mean of the five non-cost dims (42 + 66 + 72 + 72 + 48) / 5 = 60.0. Best fit: **cheap local multimodal reasoning on consumer hardware** — image and document understanding, math, broad-knowledge Q&A, short tool calls — at ~6 GB in 4-bit with no data leaving the machine. The score is held down by how little has been measured: two reasoning metrics, one vision figure, and nothing at all on coding, agency, long context or hallucination. Its per-parameter intelligence is externally validated; almost everything else about it is not.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — **LLM Releases'** sourced specification and lifecycle record (Apache-2.0 downloadable weights, dense 9B, 262K context, native vision with Text/Vision/Code modalities, unified hybrid thinking/non-thinking mode, BF16 native and ~6 GB at 4-bit, the 2026-03-02 release of the small 0.8B–9B Qwen3.5 family, the relayed Artificial Analysis ratings for most-intelligent-sub-10B and most-intelligent-multimodal-under-15B with MMMU-Pro ~69%, the ~260M-output-token reasoning cost, and its explicit statement that no benchmark scores are recorded); **Benchgen** for the MMLU-Pro 82.5% and IFBench 64.5% figures and the 27B comparison, with its Draft status, two-metric coverage and "not on any benchmark leaderboard" note reported; the `Qwen/Qwen3.5-9B` Hugging Face page for serving-framework requirements; and XDA and benchable.ai for context, with their unquantified claims explicitly **not** converted into scores. **BenchLM was checked and has no entry** for this checkpoint, so the absence of GPQA, HLE, CritPt and any hallucination measurement is reported rather than proxied. Benchgen's "September 2025" release date and "Text only" modality are both reported as **contradicted** — by Alibaba's own 2026-02-16 Qwen3.5 launch and by LLM Releases' native-vision record respectively — and are not used. The repo's `meta.json` supplied hosted pricing and the "strong OCR" characterisation; the former is labelled curated and the latter flagged as unsupported by any benchmark. No data was imported from `qwen-3.5`, `qwen-3.5-plus` or `qwen-3.5-397b`, which have their own folders. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
