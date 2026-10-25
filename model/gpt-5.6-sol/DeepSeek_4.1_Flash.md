# GPT-5.6 Sol — findings by DeepSeek 4.1 Flash

- Source: OpenAI (`openai/gpt-5.6-sol`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09); re-verified 2026-10-18; enriched 2026-10-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`gpt-5-6-sol`) re-read on 2026-10-23/25 carries **75 source-displayable rows** (was 54 on 2026-10-18) and computes **75.13/100, #10 of 992** (was #10 of 228). Newly captured: **TB2.1 Ultra 91.9%**, TB3.0 34.6%, CyberGym 84.5%, ExploitGym 33.7%, Toolathlon 58%, AA Tau3 44.3%, **GDPval-AA 1735 Elo / 55.4%**, AA ITBench 56.2%, terminalBenchHard 65.9%, AA Agentic Index 50.5%, ApprenticeBench 26%, MazeBench 13%, EnterpriseOps-Gym 42.9%, AA-AnalystAgent 47.5%; Coding Bug Hunt 42.0 fixes, FrontierCode Extended 60.6%, FrontierSWE v2 32.2%, CursorBench 3.2 67.2% / 4.0 41.7%, VulcanBench v3 87.0% / CII v1 86.5%, AA Coding Index 77.4%; Multimodal ExtractBench 93.77%, ParseBench 74.46%, AA-MMMU-Pro 83.4%; Reasoning ARC-AGI-2 92.5%, ARC-AGI-3 7.8%, GeneBench-Pro 28.7%, AA-LCR 84.0%, CritPt 32.3%, ARC-AGI-1 96.5%; Knowledge GPQA 94.6%, HLE-Verified 54.5%, **AA Intelligence Index 58.9%**, AA-GPQA 94.1%, AA-HLE 49.5%, **AA-Omniscience index 22.0 / accuracy 59.4% / hallucination 92.2%**, MMLU-Pro 89.1%; Math FrontierMath v2 T1–3 89% / Tier-4 83%.
> **Refreshed / conflicts:** **AA-Omniscience hallucination 92.2%** is extreme; TB2.1 91.9% remains vendor-harness (Ultra). The Vals-drift, index, context-pricing and harness conflicts stand. Superseded by GPT-6 Astra (2026-09-03).
> **No material score change:** the added rows confirm the frontier agentic-coding profile, so scores are held.
> Sources this pass: https://benchlm.ai/models/gpt-5-6-sol · https://openai.com/index/gpt-5-6/ · https://artificialanalysis.ai/models/gpt-5-6-sol · https://www.vals.ai/models/openai_gpt-5.6-sol · https://arcprize.org/results/openai-gpt-5-6-sol

> **Re-verified 2026-10-18.** BenchLM (`gpt-5-6-sol`, 54 rows) computed an overall **75.21/100 (#10 of 228)** and re-confirms the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Re-sourced this pass. OpenAI official docs: **1,050,000 context / 922,000 max input / 128,000 max output, knowledge cutoff 2026-02-16, effort none→max + `ultra` (4 parallel agents), text+image in → text out, $4/$20 ($0.40 cached; promo through ≥2026-11-21)**. OpenAI self-reports Terminal-Bench 2.1 **88.8%** (Ultra 91.9%), AA Coding Agent Index **80 (SOTA)**, DeepSWE v1.1 72.7%, SWE-bench Pro 64.6%, GPQA Diamond 94.6%, HLE 47.2%, GDPval-AA v2 **1747.8 Elo**, Agents' Last Exam 53.6, ARC-AGI-2 92.5%, FrontierMath T4 83%, BrowseComp 92.2%. Vals AI: **Vals Index 58.01% (#12/47)**, SWE-bench Verified **96.20% (#3/88)**, GPQA Diamond **95.20% (#2/138)**, IOI 91.17% (#5), MMMU-Pro 88.84% (#6), TB2.1 85.77%, TB4.0 37.88%, Vibe Code Bench 80.50%, MMLU-Pro 89.10%, LiveCodeBench 82.60%, ProofBench 83.0%, LegalBench 86.97% (#9). Artificial Analysis: Intelligence Index **47 (max)** / 42 (high) / 39 (medium) / 33 (low), ~$0.81–1.99/index task, AA-Briefcase 1370, GDPval-AA 1480, HLE 46%, CritPt 26%, SciCode 58%, ~70 t/s. BenchLM 75.35–77.81.
> **Conflicts surfaced:** (1) **Vals Index drift 63.71% (launch post) → 58.01% (current page)**. (2) **SWE-bench Verified 96.20% (Vals) vs ~82.2% (alt harness)**. (3) **Pricing $4/$20 promo vs $5/$30 list**; an outlier feed lists $2/$10. (4) **Context 1,050,000 (official) vs 1M (AA) vs "1.1M" (some feeds)**. (5) **AA Index 47 (max, AA) vs OpenAI's 58.9 claim** — index/effort rebase. (6) TB2.1 88.8% is **vendor-harness (Codex)**, not an independent run; METR notes the highest detected cheating rate of any public model on its agent harness. (7) Already **"Superseded"** by GPT-6 Astra (2026-09-03).
> Sources: https://developers.openai.com/api/docs/models/gpt-5.6-sol · https://openai.com/index/gpt-5-6 · https://openai.com/index/previewing-gpt-5-6-sol · https://www.vals.ai/models/openai_gpt-5.6-sol · https://artificialanalysis.ai/models/gpt-5-6-sol-high · https://benchlm.ai/compare/gpt-5-2-vs-gpt-5-6-sol · https://www.eweek.com/news/openai-gpt-5-6-trusted-partner-preview-neuron

## Model card

- **Name:** GPT-5.6 Sol (flagship tier of the July 2026 GPT-5.6 family; evaluated at "max" effort)
- **Short description:** OpenAI's frontier closed reasoning/coding model (GA 2026-07-09); text + image in, text out. Leads AA's Coding Agent Index (80) and Vals SWE-bench Verified, but is already "Superseded" by GPT-6 Astra.
- **Provider / access:** OpenAI API (Responses), Codex, ChatGPT, Azure, AWS Bedrock (1M ctx since 2026-08-03); 4 providers. No Zen Free ID → paid scoring.
- **Release / knowledge:** 2026-07-09 (limited preview 2026-06-26); knowledge cutoff 2026-02-16.
- **IDs:** `gpt-5.6-sol` (`gpt-5.6` alias routes to Sol); snapshot `gpt-5.6-sol`.
- **Context window:** 1,050,000 tokens; 922,000 max input; 128,000 max output.
- **Modalities:** text + image in, text out; effort none→max (ultra = 4 parallel agents); tools/programmatic tool calling, code execution, structured output.
- **Pricing (as of 2026-10-16):** **$4 / $20** promo (through ≥2026-11-21), cached $0.40; list $5/$30 cached $0.50; >272K reprice $8/$30; Batch/Flex $2/$10.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **88.8%** (vendor; Ultra 91.9%); Terminal-Bench 4.0 37.88% (Vals); Tau3-Banking 44.3%
- GDPval-AA v2 **1747.8 Elo** (vendor) / 1480 (AA); AutomationBench 51.2–55% (AA/BenchLM); OSWorld 2.0 62.6%
- MCP Atlas 83.6%; Toolathlon 58–79.3%; BrowseComp 92.2% (#1/44); Agents' Last Exam 53.6 (#1)

Reasoning / knowledge:

- GPQA Diamond **94.6%** (vendor) / 95.20% (Vals, #2/138); HLE 46–47.2% / 49.5% (AA); FrontierMath T1–3 89% / **T4 83%**
- ARC-AGI-2 92.5% / ARC-AGI-1 96.5%; AA-LCR 84.0%; CritPt 32.3% (#1)
- Artificial Analysis Intelligence Index **47 (max, #14/200)** vs 58.9 (self, v4.1); MMMU-Pro 83–88.84%

Coding:

- Terminal-Bench 2.1 88.8%/85.77%; DeepSWE 72.7%; SWE-bench Pro 64.6%; AA Coding Agent Index **80 (SOTA)**
- Vibe Code Bench 80.5%; SciCode 56.9–58%; LiveCodeBench 82.6% (Vals); SWE-bench Verified **96.2%** (Vals) / 82.2% (alt harness)

Long context:

- MRCR v2 512K–1M 73.8%; Graphwalks BFS 1M F1 83.4% — retrieval degrades past ~256K.

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 88.8% (best verified), Coding Agent Index 80, GDPval-AA ~1748–1480 and BrowseComp 92.2% hit the frontier refs; Tau3 44.3% and MCP Atlas 83.6% show headroom.
- **Reasoning: 89/100.** GPQA 94.6–95.2%, HLE 47.2% and CritPt 32.3% (#1) clear the frontier refs; the AA Index estimate of 47 (<60) and long-context degradation cap it.
- **Context window: 97/100.** 1.05M input / 128K output (≥1M band) with strong 256K retrieval; MRCR 512K–1M 73.8% keeps it below 100.
- **Multimodal: 68/100.** Text + image in with strong image/document numbers (MMMU-Pro 83–88.84%); no video/audio, text-only output.
- **Coding: 92/100.** SWE-bench Verified 96.2% (Vals), DeepSWE 72.7%, TB2.1 88.8%, SciCode 56.9% and Coding Agent Index 80 meet/exceed the frontier refs; SWE-bench Pro 64.6% caps it.
- **Cost efficiency: 53/100.** $4/$20 promo (list $5/$30) is frontier pricing between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors; 90% cache-read discount and low token use partly offset.
- **Overall Score: 88/100.** (92 + 89 + 97 + 68 + 92) / 5 = 87.6 → 88. Best fit: top-tier agentic coding and long-horizon professional knowledge work when frontier quality matters more than price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-24
- Method: rewrite-pass public internet research (OpenAI GPT-5.6 docs + launch/preview pages, Vals AI model page, Artificial Analysis model pages, BenchLM/BenchAlign, AWS Bedrock, eWeek/METR). Vendor harness claims were separated from independent AA/Vals rows; the Vals-drift, index, context-pricing and harness conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
