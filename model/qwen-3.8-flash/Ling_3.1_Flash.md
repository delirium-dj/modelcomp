# Qwen 3.8 Flash — findings by Ling 3.1 Flash

- Source: Alibaba Qwen (`opencode/qwen-3.8-flash`; API `qwen-3.8-flash` on Qwen Cloud; weights `Qwen/Qwen3.8-Flash-Next`, Qwen Community License 1.0; also Venice, Blackbox, Kyma, HF Inference Providers)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's August-2026 cost-efficient multimodal MoE previewing the Qwen4 architecture — 125B total / 6B active (plus 51B n-gram embedding) with Gated DeltaNet + Qwen Sparse Attention hybrid attention — scoring LiveCodeBench v6 91.9%, GPQA Diamond 91.7%, SWE-bench Multilingual 81.0%, SWE-bench Pro 62.5%, Toolathlon 73.5% and MathVision 95.7% (with CI) across a 1M context at $0.14–0.20/$0.47–0.64 per 1M; all benchmark figures are self-reported.
- **Provider / access:** Qwen Cloud (`qwen-3.8-flash`, the production version of the Flash-Next weights with 1M context by default and official built-in tools; thinking mode default, `enable_thinking`/`preserve_thinking`/`reasoning_effort` xhigh-default/medium/low), Venice, Blackbox, Kyma, Hugging Face Inference Providers; weights run locally via Transformers, vLLM, SGLang, TokenSpeed.
- **Release / knowledge:** August 2026 (tech report dated 2026-08); knowledge cutoff not captured.
- **IDs:** `opencode/qwen-3.8-flash` / `qwen-3.8-flash` / `Qwen/Qwen3.8-Flash-Next`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the official API serves a 1M-token window (262K native, YaRN-extensible) and the model takes text, image, video and PDF input.
- **Context window:** 1,000,000 tokens on the official API (262,144 native; YaRN scaling for longer); recommended split: 262,144 reasoning + 131,072 final response; 128K max output per gateway.
- **Modalities:** text, image, video, PDF in; text out.
- **Pricing (as of 2026-10-02):** gateway-dependent — Venice $0.14/$0.49 per 1M (cache $0.01), Blackbox $0.16/$0.47, Kyma $0.2045/$0.641; Qwen Cloud's official per-token price was not captured; 7.6× speedup at 1M-token prefill (vendor).
- **Architecture:** 125B-total/6B-active MoE (512 experts: 10 routed + 1 shared, intermediate 640) + 51B n-gram embedding + 4B MTP layer; 48 layers as 12 × (3 × (Gated DeltaNet → MoE) → 1 × (Qwen Sparse Attention → MoE)); QSA operates at micro-block level; Gated Residual (4 branches); Muon + AdamW optimizers; previews the Qwen4 architecture.

### Raw benchmarks found

All scores are vendor self-reported (Qwen's HF model card / Qwen Cloud docs; llmboard grades them Evidence C), with harnesses as noted:

Coding:

- LiveCodeBench v6: **91.9%** (vs Qwen3.7-Plus 89.6%, DeepSeek-V4-Flash 90.6%, Opus 4.6 max 88.8%)
- SWE-bench Multilingual: **81.0%** (mini-SWE-agent; vs Qwen3.7-Plus 75.8%, Opus 4.6 max 77.5%)
- SWE-bench Pro: **62.5%** (Claude Code harness, refined benchmark; vs Qwen3.7-Plus 55.8%, DeepSeek-V4-Flash 56.0%, Opus 4.6 max 53.4%)
- DeepSWE 1.1: **58.7%** (best across Claude Code and mini-SWE-agent harnesses; best on mini-SWE-agent; vs DeepSeek-V4-Flash 54.4%)
- NL2Repo-Bench: **48.1%** (vs DeepSeek-V4-Flash 54.2%, Opus 4.6 max 47.6%)
- ExtractBench (independent, llamaindex, FP8 vLLM, one-shot structured output): mean **89.88** (short 94.82, medium 87.81)

Agent / tool use:

- Toolathlon Verified (pass@1): **73.5%** (vs Qwen3.7-Plus 50.6%, DeepSeek-V4-Flash 70.3%)
- CoWorkBench (long-horizon office work, in-house): **73.9%** (vs Qwen3.7-Plus 65.1%, DeepSeek-V4-Flash 45.1%, Opus 4.6 max 68.2%)
- JobBench (professional tasks): **55.7%** (vs Opus 4.6 max 36.6%)
- Agents' Last Exam: pass@1 **24.3%**, score **51.2** (vs Qwen3.7-Plus 13.2%/33.6, DeepSeek-V4-Flash 25.2%/—)
- ClawEval-MM (multimodal tool use): pass@3 **64.4%** / average **60.4** (vs Opus 4.6 max 52.5%/54.7)
- AndroidWorld (mobile use): **84.5%** (vs Qwen3.7-Plus 81.0%, Opus 4.6 max 62.0%)
- OSWorld 2.0: binary **19.4%** / partial **52.3%** (vs Qwen3.7-Plus 2.8%/21.5%)
- MCP Atlas, τ³, BrowseComp: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (vs Qwen3.7-Plus 90.3%, DeepSeek-V4-Flash 90.8%, Opus 4.6 max 91.3%)
- HLE (judged by GPT-4o): **35.9%** (vs Qwen3.7-Plus 34.7%, DeepSeek-V4-Flash 33.8%, Opus 4.6 max 40.0%)
- IFBench: **81.3%** (vs Opus 4.6 max 62.5%)
- FrontierMath, AIME, AA Intelligence Index: no verified public score found

Multimodal:

- MathVision: **90.6%** without CI / **95.7%** with CI; CharXiv (RQ): **84.6%** / **90.6%**
- RealWorldQA: **88.5%** (vs Opus 4.6 max 73.9%); LVBench (long video): **76.6%** (vs Opus 4.6 max 63.0%)
- ERQA (embodied): **72.3%**; Vision2Web (visual web dev): **64.0%**; RecreationBench (in-house): **49.9%**

### Normalized scores (1–100)

- **Tool use: 79/100.** Toolathlon Verified 73.5%, CoWorkBench 73.9% (vs Opus 4.6 max's 68.2%) and JobBench 55.7% (vs Opus 4.6's 36.6%) lead, with Agents' Last Exam (score 51.2, pass@1 24.3%), ClawEval-MM 64.4/60.4 and AndroidWorld 84.5% supporting; the independent AA reads — Terminal-Bench 2.1 **86.1%** (clears the 85% frontier bar) and an Agentic Index ranked 2nd–5th — support, while OSWorld 2.0 at 19.4% binary (52.3% partial), Terminal-Bench 4.0 at 25.3% (AA) and the uncaptured MCP Atlas/τ³/BrowseComp cap the score.
- **Reasoning: 78/100.** GPQA Diamond 91.7% reaches the 90%+ frontier band (above Opus 4.6 max's 91.3%), with IFBench 81.3% and MathVision 95.7% (with CI) supporting; HLE 35.9% (below Opus 4.6's 40.0%) and the absence of an AA Intelligence Index, FrontierMath or AIME figure cap the score.
- **Context window: 92/100.** 1M-token context on the official API (262K native, YaRN-extensible, with a 7.6× speedup at 1M-token prefill); no ≥98%-at-depth retrieval figure captured, so 95+ is not justified.
- **Multimodal: 88/100.** Native text/image/video/PDF input with text output — the video/PDF band (75–90), pushed to the top by MathVision 95.7% (with CI), CharXiv 90.6% (with CI), RealWorldQA 88.5%, LVBench 76.6% and AndroidWorld 84.5%.
- **Coding: 80/100.** LiveCodeBench v6 91.9%, SWE-bench Multilingual 81.0% (vs Opus 4.6 max's 77.5%) and SWE-bench Pro 62.5% (vs 53.4%) lead, with the independent Terminal-Bench 2.1 read of 86.1% (AA), DeepSWE 1.1 58.7%, NL2Repo-Bench 48.1%, the AA Coding Index of 73 and the independent ExtractBench mean of 89.88 supporting; SciCode 50.6% (AA, under the 55% reference) caps the score.
- **Cost efficiency: 93/100.** Gateway rates of $0.14–0.20/$0.47–0.64 per 1M (Venice blended ~$0.23/M at 3:1, with $0.01/M cache reads) sit between the ~$0.10/$0.20≈97–99 and ~$1.25/$4.25≈88 anchors; Qwen Community License weights are free to self-host, and the official Qwen Cloud per-token price was not captured.
- **Overall Score: 83/100.** (79+78+92+88+80)/5 = 83.4 → 83 — a strong, cheap, multimodal August-2026 MoE (LiveCodeBench 91.9%, TB 2.1 86.1% independent, GPQA 91.7%, SWE-bench Multilingual 81.0%, Toolathlon 73.5%, MathVision 95.7% at $0.14–0.20/$0.47–0.64), with self-reported benchmarks (Evidence C), a weak OSWorld 2.0 binary score (19.4%) and unpublished MCP Atlas/τ³ figures as the caveats.

---

## Update 2026-10-08 (6-day re-research)

**Score revisions: Tool use 76→79, Coding 78→80, Overall 82→83** — Artificial Analysis' independent runs (the first non-vendor agentic evidence) fill the missing composite and confirm the coding strength. Reasoning 78 / Context 92 / Multimodal 88 / Cost 93 unchanged:

- **AA Intelligence Index: 40 (v4.3.2)** (AA's own page, #6 of 117 open-weight models of similar size, median 18; 240M output tokens per Index — very verbose vs the 140M median; "amongst the leading models in intelligence and reasonably priced"). Version conflict flagged: eesel AI (2026-08-30) cites **56** (#5 of 111 in its class) and LYTH (2026-09-09) cites **42** ("explicitly flagged as an estimate by AA", rank 3 of 112 among open models >150B) — the current read is 40; the 56 is an older index version.
- **Independent AA benchmark reads** (AI Atlas, observed 2026-09-15/16): Terminal-Bench 2.1 **86.1%** — clears the 85% frontier bar and corroborates the vendor's coding-agentic positioning; Terminal-Bench 4.0 **25.3%** (weak); GPQA Diamond **92.3%** (above the vendor's 91.7%); HLE **38.0%** (above the vendor's 35.9%); SciCode **50.6%** (under the 55% reference); MMMU-Pro **79.8%**.
- AA component reads (apxml): Agentic Index **0.54–0.56** (rank 2–5), Coding Index **0.73** (rank 31), LiveBench Agentic Coding **0.62** (rank 8–10), WebDev Arena **1631–1637** (rank 9–15), LiveBench Reasoning 0.87 (rank 20–25), LiveBench Coding 0.73 (rank 38–46), LiveBench Mathematics 0.86 (rank 38–45), LiveBench Data Analysis 0.74 (rank 27–33), LiveBench Global 0.76 (rank 20–27), Agent Arena 0.81 (rank 30), GPQA 0.917 (rank 18).
- HF model card methodology footnotes captured: DeepSWE 1.1 and SWE-bench Pro evaluated with Claude Code + mini-SWE-agent harnesses (temp 1.0, top_p 0.95, 256K context — highest across harnesses; best on mini-SWE-agent); SWE-bench Multilingual via mini-SWE-agent; NL2Repo via Claude Code with repo-download bash commands disabled to prevent reward hacking; HLE judged by GPT-4o; MathVision ground-truth annotations corrected after manual verification.
- Score impact: Tool use 76→79 (the independent TB 2.1 86.1% clears the 85% bar and the Agentic Index ranks 2nd–5th; OSWorld 2.0 binary 19.4% and TB 4.0 25.3% cap); Coding 78→80 (TB 2.1 86.1% independent, AA Coding Index 73 and LiveBench Agentic Coding rank 8–10 join LiveCodeBench 91.9% as anchors; DeepSWE 58.7% and SciCode 50.6% cap); Overall 82→83 ((79+78+92+88+80)/5 = 83.4).

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 79 / Reasoning 78 / Context 92 / Multimodal 88 / Coding 80 / Cost 93 / Overall 83.** New rows and conflict resolutions:

- **Official specs (Qwen Cloud + Alibaba Model Studio, read 2026-10-10):** 1M context; max input **991,808** tokens (983,616 in thinking mode), max output **131,072**, max thinking chain **262,144**; default reasoning level `xhigh` (low/medium/xhigh available); fully compatible with **both OpenAI and Anthropic API protocols** (drop-in for Claude Code, Codex, OpenCode); Alibaba Token Plan subscription available; `supports_image_detail_original` confirmed.
- **Pricing:** official input price cut **$0.16→$0.15/M** (−6%, UseRightAI); output $0.47/M; cache hit **$0.016/M (≈10%)**; official CNY rates: Beijing/Frankfurt/Tokyo CNY 0.8/2.7 per 1M (Singapore 1.094/3.427); reseller floor Ofox **$0.11/$0.39** (llmboard lists 15+ providers at $0.15/$0.47). Cache economics: OpenRouter observed a **91.1% cache-hit rate** in live traffic, dragging the effective input price to **~$0.028/M** (eesel); at ≤32K prompts Qwen3.8-Flash is 4× the price of Qwen3.7-Flash, but 33%/44% cheaper in the 256K–1M tier.
- **AA Intelligence Index version conflict resolved:** current v4.3.2 read is **40** (#6 of 117 open-weight models of similar size; 240M output tokens vs the 140M median — "very verbose"). The widely-cited **56** (eesel AI, Reddit r/opencode, 2026-08-30; #5 of 111, ~$0.10/task, 77 t/s, 200M tokens vs a 110M median) is an **older index version**, as are the 42 (LYTH/gradually.ai, 2026-09-08/09 estimates) and 39.9 (ai-atlas, obs. 2026-09-16, −13.5 vs Fable 5.1) reads. AA lists the native context as 256K — matching the 262,144-token native spec; OpenRouter briefly flipped its listing to 256K on 2026-09-11 and corrected back to 1M on 2026-09-12.
- **Independent rows:** KingBench (MindStudio, 8 fixed tasks): **56/80 (70%)** vs GLM 5.3 Flash's **63/80 (78.75%)** — the two tied with perfect 10s on the math and agentic-pipeline tasks, but Flash-Next trailed on 3D rendering/front-end fidelity (folding-table animation 2/10 vs 7/10), an independent data point for the vision-polish caveat; llmboard grades SWE-bench Multilingual **#8 of 48 (85th percentile)** and SWE-bench Pro **#16 of 61 (75th percentile)** — both Evidence C (vendor-reported), LLMBoard composite 80.0; **no SWE-bench Verified score is published** (only Pro).
- **Lineup context (Respan, 2026-09-24):** AA per-effort ladder for the 27B sibling (xhigh 34 at $1.01/task — the default beats every lower effort at lower cost), Qwen3.8-Max **45 at $5.41/task** (190M output tokens vs an 88M median), and AA's Opus 5.5 at 58; the Flash-Next base model took best-in-class on 8 of 14 base benchmarks (MMLU-Pro, SuperGPQA, BBH, GSM8K, EvalPlus, SWEBench-Pretrain, MGSM, MMMLU); Unsloth GGUFs run the 125B MoE on 75GB RAM by offloading the 51B n-gram table to system RAM.
- **Score impact:** none — the AA 40 read, official $0.15 price cut, KingBench row and llmboard percentiles all land inside the existing bands; the AA-index version conflict (40 vs 56) is resolved in favor of the current v4.3.2 read.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (Qwen3.8-Flash-Next HF model card + tech report, Qwen Cloud + Alibaba Model Studio docs, Artificial Analysis, eesel AI, MindStudio KingBench, llmboard, Respan, The New Stack, UseRightAI); scores are normalized 1–100 interpretations of self-reported vendor benchmarks, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3_8_Flash.md`, using the same headings.
