# DeepSeek V4.1 Flash 1017 — findings by MiMo 2.6 Flash

- Source: DeepSeek `deepseek-v4.1-flash-1017` (dated snapshot — distinct model, see Identity)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-26)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-26 (Overall 87). Fresh sources this pass: BenchLM model page (last
> updated November 7, 2026) and the Artificial Analysis release page for
> DeepSeek V4.1 Flash 1017 (Intelligence Index v5.0.1, November 2026).
> Changes: Reasoning 80→83 (AA-LCR 84.0%, GPQA-D 90.9%, HLE w/tools 63.9% now
> on record); Multimodal 78→80 (AA-MMMU-Pro 77.0% + ExtractBench 87.11%);
> Overall 87→88. Held: Tool use 91, Context 95, Coding 90, Cost efficiency 93.

## Model card

- **Name:** DeepSeek-V4.1-Flash-1017 — the **October 17, 2026 snapshot** of DeepSeek V4.1 Flash (base released 2026-09-10). Not a new generation: a post-training checkpoint with five extra weeks of reinforcement learning with self-feedback; DeepSeek frames it as a Pareto improvement (higher scores, faster completion, shorter outputs) at unchanged API pricing. **Identity:** `deepseek-flash` on the API/website/app now serves 1017 (silent alias swap — the September model was removed from the API); resellers keep a distinct ID `deepseek-v4.1-flash-1017` (AIHubMix, OmniaKey). Distinct from the base `deepseek-v4.1-flash` slug — scores here are 1017-only wherever the source is unambiguous.
- **Short description:** Frontier-agentic "flash" model tuned for terminal/coding/computer-use agents and long-horizon tasks that must run to completion; 1017 specifically improves end-to-end project development (game creation → 3D modeling) via RL on whole projects, and powers DeepSeek's Search & Fetch server-side tools.
- **Provider / access:** DeepSeek API (`deepseek-flash` alias), website and app; OpenRouter `deepseek/deepseek-v4.1-flash-1017`; 22 providers on AA's 1017 release page (DeepSeek, Baseten, CoreWeave, DeepInfra, DigitalOcean, Fireworks, GMI, Inco, LithosAI, Modal, Modular, Nebius, Novita, Parasail, Scaleway, SiliconFlow, Together AI, …) plus resellers AIHubMix, Hive, Requesty, Fireworks, Databricks. Optimized for DeepSeek Harness ≥0.2.1-rc.1, Tencent CodeBuddy, WorkBuddy, OpenCode.
- **Release / knowledge:** announced 2026-10-17 (DeepSeek API docs `api-docs.deepseek.com/news/news261017`; qz.com "released ... on Saturday"); **conflict:** Vals AI lists the model with release date 2026-10-16; AA groups it under "Released October 2026". Knowledge cutoff not published.
- **IDs:** `deepseek-flash` (DeepSeek API alias), `deepseek-v4.1-flash-1017` (resellers/AIHubMix), `deepseek/deepseek-v4.1-flash-1017` (OpenRouter), `deepseek-ai/DeepSeek-V4.1-Flash-1017` (Hugging Face + ModelScope).
- **Context window:** 1,048,576 tokens (OpenRouter; "1M" on AA/BenchLM); **384K max output** (Requesty, DeepInfra, official spec). KV cache compressed to **890 bytes/token** — 4× smaller than V4 Flash — explicitly optimized for cache-hit-dominated agent workloads.
- **Modalities:** text + image in, text out; native image understanding (DeepInfra); thinking and non-thinking modes, tool calling, JSON output, prompt caching (official model card). AA confirms text + image in / text out.
- **Pricing (as of 2026-11-08):** unchanged from September: **$0.30 in / $1.20 out** per 1M at peak (AA lists $0.29/$1.20 median across providers); **off-peak 50%** ($0.15/$0.60) outside Mon–Fri 01:00–04:00 & 06:00–10:00 UTC; AA reports a **98% cache discount** (cache hits ~$0.006–0.007/M, $0.003/M off-peak) and a **$0.18/M blended** rate (7:2:1). OpenRouter route $0.07/$0.50; Hive $0.12/$0.48. AA's updated v5.0.1 methodology measures **$0.60 per Intelligence Index task** (#11/25) and places 1017 in the **"most attractive quadrant"** of its Intelligence-vs-cost-per-task chart (28-model class).
- **Architecture:** 552B-parameter MoE backbone, **8B active per input token / 16B per output token** (AA: 16B active), Causal Encoder-Decoder (CED). **Conflict:** a launch video cites "522B parameters plus 196B N-gram memory" — not reconcilable with the official 552B figure; official number used. Weights open under **MIT** (Hugging Face, ModelScope, FP8 safetensors).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (Claude Code harness): **42.3%** (DeepSeek-V4.1-Flash-1017 model card via BenchLM, Nov 7 2026 snapshot) — **conflict:** Vals AI's own TB-4.0 run: **31.82%** (±2.62), below GPT-6.1 Sol 55.05; harness sensitivity unreconciled, both reported.
- Terminal-Bench 2.1: **90.6%** (official model card row via BenchLM) — **independent:** Vals AI TB-2.1 leaderboard: **74.5%** (new this pass).
- DeepSWE v1.1 (Mini-SWE-V2): **77.0%** (1017 model card) — highest in the official table.
- AutomationBench v1.0.6: **60.5%**; Agents' Last Exam: **35.4%**; Apex Bench v1.1: 72.1%; NL2Repo-Bench: 68.2%; ProgramBench: 29.1% (all 1017 model card).
- GDPval-AA v2.1: Elo **1746** (AA independent run, 2026-10-19); BenchLM normalizes it to **55.0%**.
- FrontierCode 2.0: **19.3%** (Cognition, via BenchLM Nov 7) — new agentic-SWE datapoint.
- AA ITBench: 46.9%; CWE-Bench-AA: 68.3%; AA Cyber Index: 40.8% (Artificial Analysis via BenchLM).
- Vals AI (own runs): Finance Agent v2 **56.96%**, Tax Agent Bench 44.35%, Harvey's Legal Agent 9.17%, Legal Research Bench 45.19%, EMB 61.80%, Code Migration 44.21%.
- BenchLM category: Agentic **61.7 (#24/130)**; BenchLM overall **65.41/100, #31 of 1016 models** (page last updated 2026-11-07).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **33, #2/26** in its open-weights class on AA's current **v5.0.1** methodology (9 evaluations incl. HLE-Diamond, CritPt v2 Hard, FrontierCode 2.0, Terminal-Bench-Science) — AA 1017 release page, November 2026. **Not comparable** to the earlier v4.3.2 figure of **45** (Max variant, AA on X 2026-10-19) used in the previous pass; both reported.
- Humanity's Last Exam w/o tools: **42.6%** (1017 model card); HLE w/ tools: **63.9%** (base model card via BenchLM — family figure); AA-HLE: 39.2%.
- **AA-LCR: 84.0%** (Artificial Analysis via BenchLM, Nov 7) — new this pass; CritPt: 14.3% (AA, v2 hard-subset scale — differs from the previously reported 24% under the older CritPt run; both noted).
- GPQA-Diamond: **90.9%** (DeepSeek-V4.1-Flash model card via BenchLM — family figure, not 1017-specific).
- AA-Omniscience (v1.1): accuracy **46.4%**, non-hallucination rate **33%** (index −5.3).
- BenchLM reasoning lane: 82.5 (provisional); STEMBench 2.54 (Ulam Oct 28 snapshot); JevBench 1.5: 6.65.

Coding:

- SWE-bench Verified: no verified 1017-specific figure found.
- **AA-SciCode: 51.9%** (Artificial Analysis via BenchLM) — new this pass.
- Terminal-Bench 2.1: 90.6% (official) / 74.5% (Vals independent); Codeforces: 3471.0; ScarfBench 69.0%; OpenHarmony Bench 60.3%; Bug Hunt Bench 39.1 fixes; FrontierCode 2.0 19.3%.
- Vals Index (1017): **56.58%** (±1.27) — below GPT-6.1 Sol 61.15; Code Migration 44.21%.
- BenchLM category: Coding **60.9 (#18/151)**.

Long context:

- 1M window, 384K output, 890 B/token KV cache (official). **No MRCR / RULER retrieval measurement found** (AA runs MLCR-AA for this release but publishes no value in fetched HTML). AA measures ~174M output tokens across its Intelligence Index suite for the release (verbosity #25/26).

Multimodal:

- **AA-MMMU-Pro: 77.0%** (Artificial Analysis via BenchLM, Nov 7) — new this pass (previously "no MMMU-class figure found").
- ExtractBench (LlamaIndex): **87.11%**; ParseBench: **64.38%** (both leaderboards, November 6, 2026 snapshots).
- Official model card (w/tools): Chartography **83.0%**, BabyVision **92.5%**, ZeroBench-main **51.0%**.
- Design Arena Website: 1295 Elo (OpenRouter benchmarks page). No audio/video input; text-only output.

### Normalized scores (1–100)

- **Tool use: 91/100.** DeepSWE v1.1 77.0 tops the official table, TB-4.0 42.3 beats GPT-5.6 Sol and GLM-5.3, AutomationBench 60.5 and Agents' Last Exam 35.4 lead the listed field, and AA's GDPval (Elo 1746 / BenchLM-normalized 55.0) plus ITBench 46.9 and CWE-Bench-AA 68.3 confirm broad agentic competence; capped by Vals' own TB-4.0 run at 31.82 (vs GPT-6.1 Sol 55.05), Vals TB-2.1 at 74.5 vs the official 90.6, FrontierCode 2.0 only 19.3, and BenchLM agentic #24/130.
- **Reasoning: 83/100.** Raised from 80 this pass: AA-LCR 84.0% (independent, new) shows strong long-context reasoning, GPQA-Diamond 90.9% and HLE w/tools 63.9% are now on record (family/model-card rows), HLE no-tools 42.6 and AA Intelligence Index 33 (#2/26 open-weights class on v5.0.1; 45 on the older v4.3.2 scale) round out a frontier-adjacent profile; capped because AA-LCR 84 is still short of the 95%+ frontier band, AA-Omniscience non-hallucination remains 33% (hallucination rate 96.5%), and closed frontier models stay well ahead on the index.
- **Context window: 95/100.** 1,048,576 tokens with 384K output and an 890 B/token KV cache purpose-built for long agent runs clears the ≥1M tier; held at 95 because no ≥512K retrieval measurement (MRCR/RULER) exists to justify 100.
- **Multimodal: 80/100.** Raised from 78 this pass: independent **AA-MMMU-Pro 77.0%** (previously not found) plus ExtractBench 87.11% and ParseBench 64.38% (Nov 6 snapshots) confirm strong general visual/document understanding on top of the official BabyVision 92.5 / Chartography 83.0 / ZeroBench 51.0; capped at 80 by image-only input (no audio/video) and text-only output.
- **Coding: 90/100.** DeepSWE v1.1 77.0 (top of the official table), TB-2.1 90.6 (Vals 74.5), Codeforces 3471, NL2Repo 68.2, ScarfBench 69.0 and BenchLM coding #18/151 keep it top-tier; held at 90 because SWE-bench Verified is still unreported, new AA-SciCode 51.9% sits just below the 55%+ frontier bar, FrontierCode 2.0 is 19.3%, and Vals Code Migration 44.21 is mid-pack vs GPT-6.1 Sol.
- **Cost efficiency: 93/100.** $0.30/$1.20 peak, halved off-peak, 98% cache discount ($0.18 blended), and AA's v5.0.1 run measures $0.60 per Intelligence Index task (#11/25) while placing 1017 in the most cost-attractive quadrant of its Intelligence-vs-cost chart — near the top; not 100 because peak-window billing silently doubles rates, the per-task cost rose vs the earlier $0.26 v4.3.2 measurement, and self-hosting the 552B backbone is expensive (BenchLM: ~$27,962/mo).
- **Overall Score: 88/100.** (91 + 83 + 95 + 80 + 90) / 5 = 87.8 → 88 — best fit: cost-sensitive high-volume agentic coding/terminal workloads where open weights, MIT licensing and cache-hit pricing matter more than frontier no-tools reasoning; not the pick for hallucination-sensitive or depth-demanding writing tasks, or for local "flash" deployment (552B is not laptop-scale).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page updated 2026-11-07, Artificial Analysis 1017 release page with Intelligence Index v5.0.1, AA evaluations, Hugging Face model card, Vals AI, Cognition FrontierCode 2.0, LlamaIndex ExtractBench/ParseBench leaderboards); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek-V4.1-Flash-1017 model card (Hugging Face)](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
  - [BenchLM: DeepSeek V4.1 Flash 1017 (updated 2026-11-07)](https://benchlm.ai/models/deepseek-v4-1-flash-1017)
  - [Artificial Analysis: DeepSeek V4.1 Flash 1017 release](https://artificialanalysis.ai/models/releases/deepseek-v4-1-flash-1017)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
