# Flint 40B — Research findings

- **Source**: Recursive (RecursiveSI) — official announcement and Hugging Face model card `RecursiveSI/flint`; OpenCode Zen catalogue entry `flint-40b-free`; independent coverage by ai-tldr.dev and MarkTechPost
- **Researched by**: MiniMax M3.1 Flash — 2026-11-03 (UTC)

## Model card

- **Name**: Flint (Zen id **`flint-40b-free`**, canonical id `recursive/flint`, weights `RecursiveSI/flint`)
- **Short description**: the first released model of **Recursive (Recursive Superintelligence, Inc.)** — a 39.8B-total / ~2.5B-active Apache-2.0 mixture-of-experts **coding model** engineered for fast, fully local agentic coding (125–150+ tokens/s on a MacBook or an RTX Spark). Built in under four months with Recursive's "Eureka Machine" automated-research system.
- **Provider / access**: Hugging Face (BF16 checkpoint + NVFP4 quantisations for llama.cpp, Ollama, LM Studio, Jan), Recursive's own `rec` engine (Apple Silicon), vLLM / SGLang / Docker Model Runner, plus an **SGLang serving kit for one B300 or H200 per replica**. Served free on **OpenCode Zen** as `flint-40b-free` ($0/$0) — OpenCode's console docs state the free lane is "free on OpenCode for a limited time" while the team collects feedback.
- **Release date**: **2026-10-21** (Zen `release_date`, ai-tldr and MarkTechPost agree; one Recursive-page metadata entry shows 2026-10-18).
- **Architecture**: decoder-only MoE — 49 layers (2 dense + 47 MoE), 256 routed experts with 6 active per token plus an always-on shared expert, hidden size not published; 35 layers use a **513-token sliding window**, only 14 use full attention; RoPE on the sliding-window layers, no positional encoding on the full-attention ones; vocabulary 150,144; MTP not mentioned. NVFP4 quantisation includes a 4-bit `lm_head` with an offline distillation stage (16-bit teacher) that nearly halved the training steps; the quantised model lands **within 0.7 points** of BF16.
- **Context window**: **262,144 tokens** (documented on the model card and in the Zen `limit`; shared between prompt and output), max output **65,536**. The announcement additionally says Flint "supports context windows of up to **512k** tokens" while recommending staying within 256k.
- **Modalities**: text in → text out.
- **Capabilities** (Zen metadata): tools supported, reasoning with effort levels `low`/`medium`/`high`/`xhigh`/`max`, structured output, temperature / top_p / top_k. Knowledge cutoff **June 2026**.
- **Sampling used for all evaluations**: temperature 1.0, top-p 0.95, top-k 20; agentic evaluations used timeouts of up to 5 hours and average pass@1 over ≥5 attempts; Terminal-Bench 2.1 with Terminus 2 (XML) and internet access; SWE-bench Pro v2 / Verified with mini-swe-agent **without** internet access.

## Raw benchmarks found

### Vendor-published results (official model card via ai-tldr transcription, confirmed by the Recursive announcement)

| Benchmark | Flint BF16 | Flint NVFP4 | Qwen 3.5 | Qwen 3.6 | Laguna XS 2.1 | Qwen 3.8 | Muse Glimmer | Gemma 4 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Terminal-Bench 2.1** | **54.9** | 53.7 | 38.7 | 44.9 | 24.7 | 73 | 51.7 | 43.4 |
| **SWE-bench Pro v2** | **89.7** | 88.5 | 68.6 | 73.8 | 38.6 | 94.9 | 86 | 61.7 |
| **SWE-bench Verified** | **74.2** | 74.1 | 69.2 | 73.4 | 70.9 | 75.6 | 76 | 66.6 |
| **LiveCodeBench v6** | **80.3** | 80.8 | 74.6 | 80.4 | 49.5 | 90.3 | 63.5 | 80 |
| **IFBench** | **89.2** | 88.1 | 70.2 | 67.9 | 34.4 | 79.5 | 77 | 76 |
| **IFEval** | **95.1** | 94.6 | 91.9 | 89.6 | 73.7 | 94.6 | 94.7 | 94.6 |

(All values are %; Recursive's own chart mixes its measurements with developer-reported competitor numbers, and Flint leads the 33–35B sparse-MoE group on five of the six benchmarks.)

### Throughput (vendor, Recursive)

- **>125 tok/s** on an M4 Pro MacBook Pro and **>150 tok/s** on a 64 GB NVIDIA RTX Spark at short contexts — "up to twice as fast as comparable models" and "more than five times faster than dense models with 25–40 billion parameters that achieve similar coding benchmark scores".
- Speed chart measures average tok/s across a 128k-token session (Muse measured at 124k), prefill excluded.

### Independent coverage

- **MarkTechPost (2026-10-21)**: "Recursive Flint is a 40B MoE local coding model with 2.5B active parameters, scoring **74.2 % on SWE-bench Verified**" — corroborates the card.
- **ai-tldr.dev (2026-10-21)**: independent transcription of the model card (architecture, 39.8B/2.5B, 262,144 context, June-2026 knowledge cutoff, the six benchmark values, NVFP4 ≤0.7 pt of BF16, 125+/150+ tok/s) plus the caveat that **some competitor scores were measured by Recursive while the rest are developer-reported**.
- **OpenCode console docs**: "Flint 40B Free is free on OpenCode for a limited time. The team is using this time to collect feedback and improve the model."

### Explicitly not found

No GPQA / HLE / AIME / MMLU / FrontierMath row, no Artificial Analysis, BenchLM or OpenCharts record, no multimodal benchmark (text-only model), and no independent reproduction of the Terminal-Bench / SWE-bench numbers outside Recursive's own harness.

## Normalized scores (1–100)

- **Tool use: 68/100.** Strong agentic-coding tool use in a real harness: SWE-bench Pro v2 **89.7 %** and SWE-bench Verified **74.2 %** (mini-swe-agent, no internet), Terminal-Bench 2.1 **54.9 %** (Terminus 2, up to 5-hour timeouts, ≥5 attempts) plus IFBench 89.2 / IFEval 95.1 for instruction-following inside agent loops. The Terminal-Bench figure is mid-band, not frontier, and the vendor's own caveat applies: Flint "may need more guidance than the larger closed-source coding models you are used to".
- **Reasoning: 55/100.** LiveCodeBench v6 **80.3 %** and the 5-hour agentic timeouts show real algorithmic and long-horizon reasoning, but there is **no** GPQA/HLE/AIME/FrontierMath measurement anywhere, and the model is trained as a coding specialist — reasoning is scored on inference, not on a measured knowledge/reasoning index.
- **Context window: 72/100.** 262,144 documented (Zen `limit.context` 262,144, output 65,536) with the vendor additionally claiming support "up to 512k" while recommending ≤256k. A solid 200K–500K window; the 512K figure is an extension claim without a published retrieval measurement, so it is not scored as native.
- **Multimodal: 12/100.** Text in → text out only (Zen `modalities`, model card, vendor text). No image or video capability is documented or measured.
- **Coding: 82/100.** The strongest part of the model: SWE-bench Pro v2 89.7 % (ahead of Qwen 3.6's 73.8 and Muse Glimmer's 86), SWE-bench Verified 74.2 %, LiveCodeBench v6 80.3 %, IFEval 95.1 %, with NVFP4 quantisation within 0.7 points of BF16 — repo-level performance in the same band as the best 30B-class models, though still behind Qwen 3.8 (TB 2.1 73, SWE-bench Pro v2 94.9, LCB 90.3).
- **Cost efficiency: 99/100.** **$0 / $0** on OpenCode Zen (`flint-40b-free`) and Apache-2.0 weights that are free to self-host; the only caveat is that the Zen free lane is explicitly temporary, so a durable cost basis means paying for your own hardware (M4-class laptop or one H200/B300) instead of per-token fees.
- **Overall Score: 57.8/100.** (68 + 55 + 72 + 12 + 82) / 5 = 289 / 5 = **57.8**.

**Best fit**: private, offline coding agents on a Mac or an RTX Spark (bug fixing, feature work, test writing) where data must not leave the device; cheap high-volume repo-level SWE work on a self-hosted 2.5B-active MoE; fine-tuning bases for specialised local coding agents.
**Worst fit**: multimodal tasks, general chat/knowledge work, terminal-heavy frontier agentic work (TB 2.1 54.9 %), and tasks where the model would need to work without explicit guidance.

## Agreement notes

- **Context: 262K vs 512K**: the model card and the Zen catalogue both document 262,144 (with 65,536 max output), while the announcement says Flint "supports context windows of up to 512k tokens" and recommends ≤256k. The documented, enforced limit is 262,144, so the 512K figure is treated as an untested extension, not the model card's configuration.
- **"Best MoE under 50B" is a bounded claim**: Flint leads the 33–35B sparse group (Qwen 3.5 / Qwen 3.6 / Laguna XS 2.1) on five of six benchmarks, but dense and larger models (Qwen 3.8, Muse Glimmer, Gemma 4) still beat it on several, and Terminal-Bench 2.1 54.9 vs Qwen 3.8's 73 shows the agentic gap.
- **Benchmark provenance**: the six headline numbers come from Recursive's own harness with self-declared settings (mini-swe-agent, Terminus 2, 5-hour timeouts, ≥5 attempts); no third-party runner has reproduced them. The competitor column mixes Recursive-measured and developer-reported values, so cross-model deltas of a few points are not meaningful.
- **BF16 vs NVFP4**: the quantised checkpoint is within 0.7 points across all six benchmarks (sometimes better: LiveCodeBench 80.8 vs 80.3), which is why the free Zen lane and local llama.cpp/Ollama builds are realistic deployments rather than a degraded experience.
- **Free lane is temporary**: OpenCode's own documentation frames `flint-40b-free` as a feedback-collecting promotion, so the model should be treated as free-to-run *weights* rather than a permanent $0 API.
- **Identity**: the folder's `opencode/flint` id is not a Zen id — the real Zen id is `flint-40b-free` (canonical `recursive/flint`). The folder `meta.json` says "262,144 total; 65,536 max output" and "Free on OpenCode Zen ($0/$0); Apache 2.0" — both confirmed by the live Zen entry — but its "Text in/out only" and "always-on reasoning" descriptors are only partly right: reasoning is supported with five effort levels and is not necessarily always-on.

---

**Provided by**: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-11-03

**Method**: Recursive's official announcement was read for the positioning, throughput claims, context guidance and evaluation protocol; the published model card (transcribed by ai-tldr.dev, which was used as the structured benchmark source) supplied the architecture and the six benchmark values; the live OpenCode Zen catalogue entry supplied the served limits, capability flags, knowledge cutoff and price; MarkTechPost and OpenCode's console documentation were used as independent/primary corroboration of the headline score and of the temporary nature of the free lane. Vendor self-reported numbers are labelled as such.

**Reference URLs**:
- https://recursive.com/updates/introducing-recursive-flint — official announcement (architecture, quantisation, throughput, evaluation protocol, 512k claim)
- https://huggingface.co/RecursiveSI/flint — official model card (benchmark table, BF16/NVFP4, config)
- https://ai-tldr.dev/models/recursive-flint/ — independent transcription of the card (39.8B/2.5B, 49 layers, 513-token sliding window, 262,144 context, June-2026 cutoff, benchmark values)
- https://www.marktechpost.com/2026/10/21/recursive-flint-local-coding-model/ — independent press coverage (74.2 % SWE-bench Verified)
- https://opencode.ai/v2/docs/console/models/ — OpenCode console docs (Flint 40B Free is free for a limited time)
- https://opencode.ai/zen/v1/models — OpenCode Zen catalogue entry for `flint-40b-free` ($0/$0, context 262,144, output 65,536, reasoning efforts, knowledge 2026-06)
- https://docs.recursive.com/getting-started — setup docs and the `rec` inference engine

**Future sources to check**: third-party reproductions of Terminal-Bench 2.1 / SWE-bench Verified for `RecursiveSI/flint` (e.g. Artificial Analysis or BenchLM rows), the paid Zen tier if the free lane is retired, any Recursive successor release, and long-context retrieval measurements near the claimed 512k extension.
