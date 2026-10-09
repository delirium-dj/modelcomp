# Qwen3 Max — findings by Space Bunny

- Source: Alibaba / Qwen (`qwen3-max`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Version note (important, time-sensitive):** this report covers the **GA `qwen3-max`** released 2025-09-23. Distinct, separately-listed versions exist and are **not** folded in here: **Qwen3-Max-Preview** (2025-09-05 / 09-23, $1.20/$6.00), **Qwen3 Max Thinking** (2026-02-09, a reasoning-enabled sibling), and the much later **Qwen3.6 / 3.7 / 3.8 Max** generations, which have their own folders. QwenCloud states plainly that **Qwen3-Max "will be retired on October 10, 2026"** — one month after this report's date.

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's **flagship Qwen3 closed-weights model** — over **1 trillion parameters**, GA'd **2025-09-23** after a 2025-09-05 preview, and positioned by Alibaba as rivalling the best OpenAI and Google offerings. Qwen states it received specialized upgrades in **agent programming and tool invocation** relative to the preview, achieving SOTA in its field and better suiting complex agent scenarios. Top use case: enterprise agents, tool invocation, structured/JSON output, RAG and multilingual (100+ languages) general work. **Being retired 2026-10-10.**
- **Provider / access:** Alibaba Cloud / DashScope (`qwen3-max`, snapshot `qwen3-max-2026-01-23`), OpenRouter (`qwen/qwen3-max`), DeepInfra, Vercel AI Gateway (`alibaba/qwen3-max`), Novita, Eden AI, LLM Gateway, NanoGPT, Merge Gateway, Kilo Gateway, Ofox, EmpirioLabs, Abacus, OrcaRouter — 16–18 listed providers. OpenAI-compatible Chat Completions **and** Responses APIs. **Closed weights — not open source.** No OpenCode Zen ID found.
- **Release / knowledge:** Preview 2025-09-05; **GA 2025-09-23**, announced hours before the Apsara Conference in Hangzhou. **Knowledge cutoff: conflicting — CloudPrice lists 2025-06-30, ModelBench lists 2025-04.** Scored against the later (more conservative) reading only where it matters; no reasoning dimension depends on the cutoff.
- **IDs:** `qwen3-max` (Alibaba/QwenCloud), `qwen/qwen3-max` (OpenRouter), `alibaba/qwen3-max` (ModelBench/Vercel)
- **Context window:** **262,144 tokens** — consistent across CloudPrice, pricepertoken, ModelBench, VentureBeat and QwenCloud. Max input 258,048; **max output 65,536** (raised from 32,768 in a 2026-07-28 catalog revision). *Discrepancy flagged:* benchlm.ai's model header lists the context as "1M", which no provider or first-party source supports — **262K is used here.**
- **Modalities:** **Text in → text out only.** Text-only is confirmed by CloudPrice (1 of 5 input and output modalities), ModelBench ("Vision input: No", "Attachments: No") and QwenCloud. Reasoning: the **base `qwen3-max` is the non-thinking variant** (ModelBench: "Reasoning: No"); the reasoning-enabled **Qwen3 Max Thinking** is a separately versioned model. Tool calls / function calling: yes. Structured outputs: yes (QwenCloud); ModelBench lists it "Unknown". Features: prefix completion, context caching (implicit + explicit), batch, web search, web extractor, code interpreter, and `search_strategy:agent` / `agent_max` built-in tools. Rate limits: 1M TPM, 600 RPM.
- **Pricing (as of 2026-10-09, USD per 1M tokens):** Wide spread across 16+ providers. **Alibaba (cheapest mainstream): $0.780 in / $3.900 out**, cache read $0.156, cache write $0.975; batch $0.60/$3.00. **OpenRouter: $0.78/$3.90.** **DeepInfra and Vercel: $1.20/$6.00.** **OrcaRouter is cheapest overall at $0.359 in / $1.434 out** (batch $0.179/$0.717); Merge Gateway and Ofox match at ~$0.36/$1.43. Novita is dearest at $2.11/$8.45. Note Alibaba's *original* tiered preview pricing scaled by prompt length (0–32K: $0.861/$3.441; 32–128K: $1.434/$5.735; 128–252K: $2.151/$8.602); the current GA tariff is flat at the shortest tier.
- **Architecture:** proprietary closed weights. **>1 trillion total parameters**, MoE. **Active-parameter count has never been disclosed by Alibaba** — no total/active split is claimed here.

### Raw benchmarks found

> **Large source disagreement.** Three aggregators publish materially different Artificial Analysis Intelligence Index figures for this same model — **15.6** (benchlm.ai), **31.4** (CloudPrice), **12.6** (pricepertoken). All three are listed below and the lowest is used for scoring. CloudPrice's benchmark values are rounded to one decimal (0.8 = ~80%), so they are read as approximations.

Reasoning / knowledge:

- MMLU-Pro: **83.8%** (pricepertoken, 86th percentile — its strongest knowledge row)
- GPQA Diamond: **76.4%** (benchlm.ai AA-GPQA Diamond; pricepertoken also 76.4%, 66th percentile)
- AIME 2025: **~80%** (CloudPrice, #59); AA Math Index **80.7** (#59); pricepertoken Math 75.0 (75th percentile)
- **HLE: 11.9%** (benchlm.ai AA-HLE); CloudPrice HLE ~10% (#115)
- **CritPt: 0.0%** (benchlm.ai) — the floor
- **AA-Omniscience Index: −43.5**; Omniscience **Accuracy 24.4%**; **Hallucination Rate 89.9%** (benchlm.ai). This is the single most consequential number in this report: on the hallucination probe the model fails roughly 9 out of 10 times, which is a serious reliability caveat that its knowledge-benchmark rows do not surface.
- AA-LCR: **50.0%** (benchlm.ai)
- **AA-IFBench: 44.1%** (benchlm.ai); CloudPrice IFBench ~40% (#174) — weak instruction following
- AA Intelligence Index: **15.6** (benchlm.ai) / **31.4** (#119, CloudPrice) / **12.6**, 54th percentile (pricepertoken)
- MMLU / SuperGPQA / Arena-Hard v2 / LiveBench (20241125): Qwen's own preview table claimed Qwen3-Max-Preview led all of these against Claude Opus 4, Kimi K2 and DeepSeek-V3.1 — vendor-reported, for the *preview*, and not reproducible against current third-party rows.

Agent / tool use:

- **τ²-bench: 74.3%** (benchlm.ai)
- **TAU2: ~70%** (CloudPrice, #108)
- Gert Labs: **43.74** (benchlm.ai)
- **Terminal-Bench Hard: ~20%** (CloudPrice, #126)
- Tau3-Banking: no verified public score found
- **GDPval-AA: no verified public score found** — notable, since this is the benchmark most directly measuring professional agentic work
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Built-in `search_strategy:agent` / `agent_max` tools ship with the model, but no search-agent benchmark score is published
- n8n's independent composite scores **Tool Use 64 (#2)** and **Structured Output 83 (#3)** — from a workflow-automation suite, not a standard benchmark

Coding:

- **LiveCodeBench: ~80%** (CloudPrice, #38 — a strong rank in their field)
- Coding Index: **26.4** (#122, CloudPrice) / **65.1** (pricepertoken) — two sources disagree by more than a factor of two
- **Vibe Code Bench: 3.51%** (benchlm.ai) — catastrophically low, and the clearest single sign that Vibe-style app generation is not this model's strength
- **SciCode: ~40%** (CloudPrice, #113)
- SWE-bench Verified / SWE-bench Pro / SWE-bench Multilingual / DeepSWE: no verified public score found
- Design Arena Website: **1130 Elo** (benchlm.ai)
- n8n composite **Scoring 28 (#17)** — very weak on their scoring sub-suite

Multimodal:

- **Text-only**, confirmed by three independent sources (see Modalities above).
- No multimodal benchmark of any kind exists for this model.

Long context:

- **262,144 tokens** native. **AA-LCR at only 50.0%** is the sole measured retrieval figure and is mediocre. No MRCR / RULER / GraphWalks / LongBench v2 numbers.

Speed / cost efficiency inputs:

- Time to first token: **~1.99 s** (CloudPrice, #407); output speed **~33 tokens/s** (CloudPrice, #257) — slow relative to most contemporaries
- n8n composite **Speed 85 (#15)** — a different suite, and not consistent with the 33 t/s throughput measurement
- n8n composite **Cost 87 (#11)**
- Batch pricing halves the Alibaba tariff to $0.60/$3.00

### Normalized scores (1–100)

- **Tool use: 72/100.** **τ²-bench at 74.3%** and **TAU2 at ~70%** are genuine mid-to-upper agentic-tool numbers, and Alibaba ships first-class agent tooling (`search_strategy:agent_max`, function calling, structured outputs) that n8n's workflow suite rates **Tool Use 64 (#2)**. Held back by **Terminal-Bench Hard at ~20%**, **AA-IFBench at 44.1%**, and the complete absence of GDPval-AA, Tau3, Claw-Eval or MCP-Atlas figures.
- **Reasoning: 64/100.** MMLU-Pro 83.8% and GPQA Diamond 76.4% are respectable knowledge scores, and AIME 2025 ~80% plus an AA Math Index of 80.7 (#59) show real competition-mathemathics strength. Capped by **HLE at 11.9%**, **CritPt at 0.0%**, an **AA Intelligence Index of only 12.6–15.6**, **AA-LCR 50.0%**, and above all by the **AA-Omniscience Hallucination Rate of 89.9%** and Accuracy of 24.4% — this model states falsehoods often, which caps how much its knowledge scores should be trusted in production.
- **Context window: 76/100.** **262,144 tokens** native puts it in the 200K–500K band, comfortably above the 200K baseline. Held to 76 rather than the low 80s because the one measured retrieval benchmark, **AA-LCR at 50.0%**, is mediocre, and benchlm.ai's uncorroborated "1M" context claim is not credited.
- **Multimodal: 15/100.** **Text-only**, triple-confirmed. Floor score by methodology. Qwen's vision line is a separate model family (`qwen3-vl-*`, `qwen2.5-vl-*`) with its own folders.
- **Coding: 62/100.** **LiveCodeBench at ~80% (#38)** is the one genuinely good coding row, and Design Arena Website 1130 Elo is credible. But **Vibe Code Bench at 3.51%** is near-total failure on app generation, **SciCode ~40% (#113)** is weak scientific coding, the Coding Index is reported as both 26.4 (#122) and 65.1 by two aggregators, and there is **no SWE-bench, SWE-bench Pro or DeepSWE number at all** — for a model marketed for coding agents that is a serious evidence gap.
- **Cost efficiency: 90/100.** At **Alibaba's $0.78 in / $3.90 out** the model sits between the ~$0.60/$2.20 (~92) and ~$1.25/$4.25 (~88) reference points, and **OrcaRouter/Merge/Ofox undercut even that at $0.359/$1.434**. Batch halves it again to $0.60/$3.00, and explicit cache reads are $0.12–$0.156. Held at 90 rather than higher because provider pricing for this model ranges from $0.359 to $2.11 on input (a ~6× spread), there is no Free tier, and measured throughput of ~33 tokens/s is slow.
- **Overall Score: 58/100.** Best fit: **enterprise agent and tool-invocation workloads on Alibaba Cloud with batch and caching enabled**, where τ²-bench 74.3%, TAU2 ~70% and LiveCodeBench ~80% are competitive and the $0.60/$3.00 batch tariff is genuinely cheap. Two hard warnings: the model is **retired 2026-10-10**, so this is a migration decision, not an adoption decision; and its **89.9% hallucination rate** and 24.4% omniscience accuracy mean it should not be trusted for factual or long-horizon autonomous work without verification at every step.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked across QwenCloud's official Qwen3-Max model page (features, built-in tools, rate limits, batch and cache pricing tiers, and the **2026-10-10 retirement notice**), the Alibaba Cloud / QwenCloud and Alibaba China provider rows, ModelBench's provider matrix (16–18 providers with per-provider context, max-output and pricing, plus a dated change log showing the 32,768 → 65,536 max-output revision on 2026-07-28), CloudPrice's specification and benchmark API summaries, benchlm.ai's Qwen3 Max model page (13 sourced benchmark rows including the Omniscience and IFBench data), pricepertoken's provider and benchmark tables, VentureBeat's preview launch coverage, SCMP's GA announcement coverage, and n8n's independent workflow-automation composite scores. Kept Qwen3-Max-Preview, Qwen3 Max Thinking and the Qwen3.6/3.7/3.8 Max generations strictly separate from this model. Explicitly flagged the three-way Artificial Analysis Intelligence Index disagreement (12.6 / 15.6 / 31.4), the two-way Coding Index disagreement (26.4 vs 65.1), the conflicting knowledge cutoffs, and benchlm.ai's unsupported "1M" context claim. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: this folder is **time-boxed** — Qwen3-Max retires 2026-10-10. A follow-up file such as `Qwen3_Max_Thinking.md` using the same headings would be the natural successor, and re-scoring after 2026-10-10 is pointless since the GA endpoint goes away.