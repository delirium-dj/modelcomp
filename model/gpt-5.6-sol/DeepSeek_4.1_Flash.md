# GPT-5.6 Sol — findings by DeepSeek 4.1 Flash

- Source: OpenAI (`openai/gpt-5.6-sol`)
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; enriched 2026-10-24; re-researched 2026-11-05
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-05** (second pass, user-requested). Fresh sources this pass: BenchLM (`gpt-5-6-sol`, **79 rows**, **74.88/100, #13 of 1015** — was 75 rows, 75.13, #10 of 992), OpenAI GPT-5.6 pages + system card, Artificial Analysis, Vals AI, ARC Prize, LlamaIndex snapshots.
> **Newly captured rows:** **LifeVal 80.0%**; **FrontierCode 2.0 27.6%** (Cognition); PostTrainBench v1.1 36.2%; τ²-bench 85.1%; **Gray Swan IPI 27.0%** (a notable prompt-injection weak spot); AA-IFBench 72.7%; HealthBench Pro 60.5 / Hard 33.1; MMMU-Pro w/ Python 84.6%; LABBench2 82.1.
> **Refreshed:** AA-SciCode 57.1% (was 56.9); ParseBench 74.40%.
> **Re-verified unchanged:** TB2.1 91.9% (Ultra, vendor) / 85.8% (Vals); GDPval-AA 1735 Elo / 55.4%; AA Index 58.9 (self) / ~47 (AA run); AA-Omniscience 22.0 / 59.4% / **92.2% hallu**; SWE-bench (Vals) 96.2%; DeepSWE 72.7%; Frontiermath T1–3 89 / T4 83.
> **No score change:** the frontier agentic-coding profile is unchanged; scores held at 88.
> Sources this pass: https://benchlm.ai/models/gpt-5-6-sol · https://openai.com/index/gpt-5-6/ · https://artificialanalysis.ai/models/gpt-5-6-sol · https://www.vals.ai/models/openai_gpt-5.6-sol

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`gpt-5-6-sol`) re-read on 2026-10-23/25 carried **75 source-displayable rows** (was 54 on 2026-10-18) and computed **75.13/100, #10 of 992** (was #10 of 228). Newly captured then: TB2.1 Ultra 91.9%, TB3.0 34.6%, CyberGym 84.5%, ExploitGym 33.7%, Toolathlon 58%, AA Tau3 44.3%, GDPval-AA 1735 Elo / 55.4%, AA ITBench 56.2%, terminalBenchHard 65.9%, AA Agentic Index 50.5%, ApprenticeBench 26%, MazeBench 13%, EnterpriseOps-Gym 42.9%, AA-AnalystAgent 47.5%; Bug Hunt 42.0 fixes, FrontierCode Extended 60.6%, FrontierSWE v2 32.2%, CursorBench 3.2 67.2% / 4.0 41.7%, VulcanBench v3 87.0% / CII v1 86.5%, AA Coding Index 77.4%; ExtractBench 93.77%, ParseBench 74.46%, AA-MMMU-Pro 83.4%; ARC-AGI-2 92.5%, ARC-AGI-3 7.8%, GeneBench-Pro 28.7%, AA-LCR 84.0%, CritPt 32.3%, ARC-AGI-1 96.5%; GPQA 94.6%, HLE-Verified 54.5%, AA Intelligence Index 58.9%, AA-GPQA 94.1%, AA-HLE 49.5%, AA-Omniscience 22.0 / 59.4% / 92.2%, MMLU-Pro 89.1%; FrontierMath v2 T1–3 89% / Tier-4 83%. AA-Omniscience hallucination 92.2% is extreme; TB2.1 91.9% remains vendor-harness (Ultra). Superseded by GPT-6 Astra (2026-09-03).

> **Re-verified 2026-10-18.** BenchLM (`gpt-5-6-sol`, 54 rows) computed an overall **75.21/100 (#10 of 228)**. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). OpenAI official docs: 1,050,000 context / 922,000 max input / 128,000 max output, knowledge cutoff 2026-02-16, effort none→max + `ultra` (4 parallel agents), text+image in → text out, $4/$20 ($0.40 cached; promo through ≥2026-11-21). OpenAI self-reports TB2.1 88.8% (Ultra 91.9%), AA Coding Agent Index 80 (SOTA), DeepSWE 72.7%, SWE-bench Pro 64.6%, GPQA 94.6%, HLE 47.2%, GDPval-AA v2 1747.8 Elo, Agents' Last Exam 53.6, ARC-AGI-2 92.5%, FrontierMath T4 83%, BrowseComp 92.2%. Vals: Vals Index 58.01% (#12/47), SWE-bench Verified 96.20% (#3/88), GPQA 95.20% (#2/138), IOI 91.17%, MMMU-Pro 88.84%, TB4.0 37.88%, Vibe Code 80.50%, LiveCodeBench 82.60%, ProofBench 83.0%, LegalBench 86.97%. AA: Index 47 (max), ~$0.81–1.99/task, AA-Briefcase 1370, GDPval-AA 1480. Conflicts surfaced: Vals Index drift; SWE Verified 96.2 vs ~82.2 alt harness; pricing promo vs list; context 1.05M vs 1M vs 1.1M; AA Index 47 vs self 58.9; TB2.1 vendor harness + METR cheating note; superseded by GPT-6 Astra.

## Model card

- **Name:** GPT-5.6 Sol (flagship tier of the July 2026 GPT-5.6 family; evaluated at "max" effort)
- **Short description:** OpenAI's frontier closed reasoning/coding model (GA 2026-07-09); text + image in, text out. Leads AA's Coding Agent Index (80) and Vals SWE-bench Verified, but is already "Superseded" by GPT-6 Astra.
- **Provider / access:** OpenAI API (Responses), Codex, ChatGPT, Azure, AWS Bedrock (1M ctx since 2026-08-03); 4 providers. No Zen Free ID → paid scoring.
- **Release / knowledge:** 2026-07-09 (limited preview 2026-06-26); knowledge cutoff 2026-02-16.
- **IDs:** `gpt-5.6-sol` (`gpt-5.6` alias routes to Sol).
- **Context window:** 1,050,000 tokens; 922,000 max input; 128,000 max output.
- **Modalities:** text + image in, text out; effort none→max (ultra = 4 parallel agents); tools/programmatic tool calling, code execution, structured output.
- **Pricing (as of 2026-11-05):** **$4 / $20** promo (through ≥2026-11-21), cached $0.40; list $5/$30 cached $0.50; >272K reprice $8/$30; Batch/Flex $2/$10.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **91.9%** (vendor, Ultra) / 85.8% (Vals); Terminal-Bench 4.0 37.88% (Vals); TB3.0 34.6%
- GDPval-AA v2 **1735 Elo / 55.4%**; AutomationBench 51.2–55%; OSWorld 2.0 62.6%; LifeVal **80.0%**
- MCP Atlas 83.6%; Toolathlon 58–79.3%; BrowseComp 92.2% (#1/44); Agents' Last Exam 53.6 (#1); τ²-bench 85.1%; τ³-Banking 44.3%; CyberGym 84.5%; ExploitGym 33.7%

Reasoning / knowledge:

- GPQA Diamond **94.6%** (vendor) / 95.20% (Vals, #2/138); HLE 46–47.2% / 49.5% (AA); FrontierMath T1–3 **89%** / **T4 83%**
- ARC-AGI-2 92.5% / ARC-AGI-1 96.5% / ARC-AGI-3 7.8%; AA-LCR 84.0%; CritPt 32.3% (#1)
- AA Intelligence Index **58.9 (self, v4.1) / 47 (AA, max)**; MMMU-Pro 83–88.84% (w/ Python 84.6%); AA-Omniscience 22.0 / 59.4% / **92.2% hallu**; AA-IFBench 72.7%; Gray Swan IPI **27.0%**

Coding:

- Terminal-Bench 2.1 91.9%/85.8%; DeepSWE 72.7%; SWE-bench Pro 64.6%; AA Coding Agent Index **80 (SOTA)**
- Vibe Code Bench 80.5%; SciCode 56.9–57.1%; LiveCodeBench 82.6% (Vals); SWE-bench Verified **96.2%** (Vals) / 82.2% (alt harness)
- FrontierCode 1.1 Extended 60.6% / **FrontierCode 2.0 27.6%**; FrontierSWE v2 32.2%; CursorBench 3.2 67.2% / 4.0 41.7%; VulcanBench v3 87.0%; Bug Hunt 42.0 fixes

Long context / multimodal:

- MRCR v2 512K–1M 73.8% (degrades past ~256K); Graphwalks BFS 1M F1 83.4%; ExtractBench 93.77%; ParseBench 74.40%

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 88.8–91.9%, Coding Agent Index 80, GDPval-AA 1735–1748 and BrowseComp 92.2% hit the frontier refs; Tau3 44.3% and MCP Atlas 83.6% show headroom.
- **Reasoning: 89/100.** GPQA 94.6–95.2%, HLE 47.2% and CritPt 32.3% (#1) clear the frontier refs; the AA Index estimate of 47, a 92.2% Omniscience hallucination rate and long-context degradation cap it.
- **Context window: 97/100.** 1.05M input / 128K output (≥1M band) with strong 256K retrieval; MRCR 512K–1M 73.8% keeps it below 100.
- **Multimodal: 68/100.** Text + image in with strong image/document numbers (MMMU-Pro 83–88.84%, ExtractBench 93.77%); no video/audio, text-only output.
- **Coding: 92/100.** SWE-bench Verified 96.2% (Vals), DeepSWE 72.7%, TB2.1 88.8%+ and Coding Agent Index 80 meet/exceed the frontier refs; SWE-bench Pro 64.6% and FrontierCode 2.0 27.6% cap it.
- **Cost efficiency: 53/100.** $4/$20 promo (list $5/$30) sits between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors; cache discount and low token use partly offset.
- **Overall Score: 88/100.** (92 + 89 + 97 + 68 + 92) / 5 = 87.6 → 88. Best fit: top-tier agentic coding and long-horizon professional knowledge work when frontier quality matters more than price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-05
- Method: re-research pass (user-requested second pass) over public internet research (OpenAI GPT-5.6 docs/system card, BenchLM re-read 2026-11-05, Artificial Analysis, Vals AI, ARC Prize, LlamaIndex). New LifeVal/FrontierCode 2.0/PostTrainBench/τ²/Gray-Swan rows captured; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5.6](https://openai.com/index/gpt-5-6/)
  - [BenchLM — GPT-5.6 Sol benchmark scores](https://benchlm.ai/models/gpt-5-6-sol)
  - [Artificial Analysis — GPT-5.6 Sol](https://artificialanalysis.ai/models/gpt-5-6-sol)
  - [Vals AI — GPT-5.6 Sol](https://www.vals.ai/models/openai_gpt-5.6-sol)
  - [ARC Prize — GPT-5.6 Sol results](https://arcprize.org/results/openai-gpt-5-6-sol)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
