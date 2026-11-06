# Mistral Large 4 — findings by GLM 5.3 Flash

- Source: Mistral (`mistral-large-4`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (public preview, unofficially "ML4", officially *le Chonk*)
- **Short description:** Mistral's largest and most capable open-weight model — a 1.05T-parameter (52B active) natively multimodal MoE targeting coding, agentic workflows, cybersecurity, finance, and visual grounding. Preview API went live 2026-10-06; **weights dropped 2026-10-29 under the open-weight announcement** (BenchLM cites mistral.ai/news/mistral-large-4-oss/), with a repricing to $0.70/$2.10 per 1M. BenchLM ranks it #95 of 1015 (52.54).
- **Provider / access:** Mistral Studio preview API (`https://console.mistral.ai`, docs ID `mistral-large-4` / `mistral-large-4+1`); Chat Completions (`/v1/chat/completions`) and Conversations/Agents (`/v1/agents`, `/v1/conversations`) APIs with structured outputs, function calling, document QnA, batching, and built-in tools. Served on Mistral's own European datacenters (3,800 NVIDIA Grace Blackwell GPUs).
- **Release / knowledge:** 2026-10-06 release (public preview); knowledge cutoff not stated in preview announcement.
- **IDs:** `mistral/mistral-large-4` (Mistral first-party API); no Free ID on OpenCode Zen verified.
- **Context window:** 1M total per the official Mistral docs model card — **BenchLM now concurs at 1M** (2026-10-10), outweighing AA's earlier 524K hosted-preview listing; AA-LCR 81.3% is the first measured long-context evidence.
- **Modalities:** text + image input (1.6B vision encoder; PDF document QnA supported), text output; reasoning yes (hybrid instruct-and-reasoning MoE); tool calls yes; JSON/structured outputs yes.
- **Pricing (as of 2026-11-05):** **$0.70 in / $2.10 out / $0.07 cached per 1M** — the 2026-10-29 open-weight announcement repriced the model from the $1.36/$4.18 list (BenchLM price registry, Nov 5; notes model/API/OpenRouter pages still showed the old list price at 14:20 UTC that day). Weights now open (license per the announcement repo).
- **Architecture:** 1.05T total / 52B active parameters, granular Mixture-of-Experts, 1.6B vision encoder; open-weights license announced but not yet published (weights end of October 2026).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1424** (AA, independent; 2026-10-17 refresh reads 1422, normalized 46.1% — minor drift, flagged) — fills the gap the 2026-10-09 pass marked missing; normalized **46.2%**); AA-Briefcase: **1393 Elo** (AA — corroborates the vendor read; Nov 5 refresh reads **1348** — drift)
- AA AutomationBench-AA: **59.9%** (AA — corroborates the vendor's AutomationBench row; Nov 5 re-read **57.8%**); Finance Agent v2: **54.7%** (Vals, independent — fills the gap); **BrowseComp: 84.5%** and **Finch: 73.3%** (NEW, open-weight announcement table — strong)
- AA Terminal-Bench 4.0: **26.8%** (AA — corroborates the vendor's weak 28.3%; Nov 5 re-read **24.7%**); AA GDP.pdf: **18.6%** (AA — weak; Nov 5 re-read **17.6%**)
- NEW AA cyber suite (BenchLM Nov 5): AA Cyber Index **50.9%**, CWE-Bench-AA **58.3%**, DeepsecBench-AA **15.0%**, CyberGym-E2E-AA **79.4%** (AA corroboration of the vendor's 82% CyberGym-E2E claim)
- SWE-Atlas QnA: **59.4%** (Mistral blog); Combined Coding Agent Index: **49.8%** (Mistral blog); **FrontierCode 2.0: 19.7%** (NEW, Cognition — weak)
- SWE-Atlas QnA: **59.4%** (Mistral blog); Combined Coding Agent Index: **49.8%** (Mistral blog)
- Cybench (security): **93.0%** (Mistral blog — among the highest open-weight scores)
- GDPval vendor row / Tau3 / Claw-Eval: no additional verified rows

Reasoning / knowledge:

- AA-HLE: **35.0%** (AA, independent — fills the HLE gap; under the 40% bar)
- AA-LCR v1.1: **81.3%** (AA — fills the long-context gap; strong)
- Artificial Analysis Intelligence Index: **38.4** (AA current board — corroborates the 38 / #64 of 226); Nov 5 refresh reads **26.1%** — an AA Index **version rebase** (v4.3.2→v5.0-class scale), documented per RULES, never averaged across scales
- CritPt: **10.6%** (AA — weak; Nov 5 re-read **10.0%**); AA-Omniscience: **25.8% accuracy / 41.9% non-hallucination row / −5.3 index** (AA — weak); Nov 5 refresh re-reads **26.0% accuracy / 28.2% hallucination / +5.1 index** — the 41.9% row is gone (not relabeled) and the index flipped sign on re-measurement; both cited
- GPQA Diamond: no verified public score found
- STEMBench: **2.50** (ulam.ai); Design Arena Website: **1259** (OpenRouter — both added 2026-10-16)`n- Surge AI blind human coding eval: **3.74/5, 2nd of 5** (Mistral blog; behind Claude Opus 5 at 4.22)

Coding:

- Vibe Code Bench v1.1: **78.40%** (Vals, independent — fills the gap; strong, contrasts with the vendor-only picture)
- AA-SciCode: **54.2%** (AA — fills the SciCode gap)
- DeepSWE v1.1: **61.7%** (Mistral blog / AA); SciCode-Verified: open-weight SOTA claim without a published number
- SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified public score found

Cybersecurity / safety:

- AA Cyber Index: top-5 global rank, leads open-weight non-China models (Mistral blog); CyberGym-E2E: **82%**, highest of any model (Mistral blog); B3 AI Security Benchmark (Lakera): **93.3% attack resistance**; KORA: **1.691/2** (Mistral blog)

Multimodal:

- AA-MMMU-Pro: **76.4%** (AA, independent — first measured vision evidence, solid); Dense 200 (visual grounding): **42%** vs GPT-6-Astra 41% (Mistral blog)

Speed: 116.1 output tokens/s, 1.46s TTFT (AA). Very verbose: 200M output tokens across the Intelligence Index run (median 81M).

### Normalized scores (1–100)

- **Tool use: 70/100.** (Was 65 on the prior pass.) The new AA/Vals rows (GDPval 1424 / 46.2% normalized, Finance Agent 54.7%, AutomationBench 59.9% corroborated, Briefcase 1393) strengthen the agentic case; TB4.0 26.8% and GDP.pdf 18.6% keep it below 75.
- **Reasoning: 72/100.** (Was 68 on the prior pass.) AA-HLE 35.0% and AA-LCR 81.3% fill the two largest gaps positively and the Index 38.4 stands corroborated — CritPt 10.6%, the weak Omniscience index and the missing GPQA cap it below frontier.
- **Context window: 88/100.** (Was 85 on the prior pass.) BenchLM now concurs the docs-stated 1M window (over AA's 524K listing) and AA-LCR 81.3% provides the first measured long-context evidence (strong) — still no ≥98%-retrieval verification for the maximum tier.
- **Multimodal: 72/100.** Measured vision now exists (AA-MMMU-Pro 76.4%) on top of the 1.6B vision encoder, PDF QnA and leading visual grounding (Dense 200 42%); text-only output, no confirmed video/audio.
- **Coding: 75/100.** (Was 72 on the prior pass.) Vals Vibe Code Bench 78.4% is a strong independent addition alongside AA-SciCode 54.2% and DeepSWE 61.7%; TB4.0 26.8% and the missing SWE-bench Verified/LiveCodeBench rows cap it.
- **Cost efficiency: 92/100.** CHANGED from 87 — the 2026-10-29 open-weight announcement repriced the API to $0.70/$2.10 per 1M ($0.07 cached), moving from the ~$1.25/$4.25 ≈ 88 reference to the ~$0.60/$2.20 ≈ 92 band, and the weights themselves are now open. Excluded from Overall.
- **Overall Score: 75.4/100.** (Was 72 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (70 + 72 + 88 + 72 + 75) / 5 = 377/5 = 75.4 — raised on the 2026-10-11 second pass as the fresh AA/Vals boards convert the preview's vendor-only evidence into measured corroboration. Best-fit recommendation: strong open-weight pick for sovereign cybersecurity, finance/legal, and document/grounding workloads; pair with a faster, cheaper executor for terminal-heavy agent loops.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetch (web-search quota exhausted): BenchLM Mistral Large 4 page fetched 2026-11-05 (Nov 5 data, 24 rows) — **lifecycle milestone: the predicted end-of-October weights drop happened 2026-10-29** (open-weight announcement, cited by BenchLM's price registry), repricing the API to $0.70/$2.10; new rows: BrowseComp 84.5%, Finch 73.3%, b3 Agent Security 97.1%, Cyber Misuse Refusal 96.6%, four AA cyber rows, FrontierCode 2.0 19.7%; drift re-reads cited (Briefcase 1348, TB4.0 24.7%, AA Index 26.1 = v5.0-class rebase of 38.4, Omniscience re-measured 26.0/28.2/+5.1); Cost 87→92 (excluded from Overall), quality dims unchanged — Overall 75.4 holds; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
