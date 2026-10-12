# Mistral Large 4 — findings by GLM 5.3 Flash

- Source: Mistral (`mistral-large-4`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (public preview, unofficially "ML4", officially *le Chonk*)
- **Short description:** Mistral's largest and most capable open-weight model — a 1.05T-parameter (52B active) natively multimodal MoE targeting coding, agentic workflows, cybersecurity, finance, and visual grounding. Preview API is live; weights drop end of October 2026. BenchLM ranks it #79 of 889 (53.68) with early coverage (18 of 625 rows).
- **Provider / access:** Mistral Studio preview API (`https://console.mistral.ai`, docs ID `mistral-large-4` / `mistral-large-4+1`); Chat Completions (`/v1/chat/completions`) and Conversations/Agents (`/v1/agents`, `/v1/conversations`) APIs with structured outputs, function calling, document QnA, batching, and built-in tools. Served on Mistral's own European datacenters (3,800 NVIDIA Grace Blackwell GPUs).
- **Release / knowledge:** 2026-10-06 release (public preview); knowledge cutoff not stated in preview announcement.
- **IDs:** `mistral/mistral-large-4` (Mistral first-party API); no Free ID on OpenCode Zen verified.
- **Context window:** 1M total per the official Mistral docs model card — **BenchLM now concurs at 1M** (2026-10-10), outweighing AA's earlier 524K hosted-preview listing; AA-LCR 81.3% is the first measured long-context evidence.
- **Modalities:** text + image input (1.6B vision encoder; PDF document QnA supported), text output; reasoning yes (hybrid instruct-and-reasoning MoE); tool calls yes; JSON/structured outputs yes.
- **Pricing (as of 2026-10-11):** $1.36 in / $4.18 out / $0.14 cached per 1M (paid, first-party); launch sale pricing $0.68 in / $2.09 out / $0.07 cached per 1M. AA cache discount 90%, ~$1.13 per Intelligence Index task. Open weights are proprietary-only until the end-of-October weights drop.
- **Architecture:** 1.05T total / 52B active parameters, granular Mixture-of-Experts, 1.6B vision encoder; open-weights license announced but not yet published (weights end of October 2026).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1424** (AA, independent — fills the gap the 2026-10-09 pass marked missing; normalized **46.2%**); AA-Briefcase: **1393 Elo** (AA — corroborates the vendor read)
- AA AutomationBench-AA: **59.9%** (AA — corroborates the vendor's AutomationBench row); Finance Agent v2: **54.7%** (Vals, independent — fills the gap)
- AA Terminal-Bench 4.0: **26.8%** (AA — corroborates the vendor's weak 28.3%); AA GDP.pdf: **18.6%** (AA — weak)
- SWE-Atlas QnA: **59.4%** (Mistral blog); Combined Coding Agent Index: **49.8%** (Mistral blog)
- Cybench (security): **93.0%** (Mistral blog — among the highest open-weight scores)
- GDPval vendor row / Tau3 / Claw-Eval: no additional verified rows

Reasoning / knowledge:

- AA-HLE: **35.0%** (AA, independent — fills the HLE gap; under the 40% bar)
- AA-LCR v1.1: **81.3%** (AA — fills the long-context gap; strong)
- Artificial Analysis Intelligence Index: **38.4** (AA current board — corroborates the 38 / #64 of 226)
- CritPt: **10.6%** (AA — weak); AA-Omniscience: **25.8% accuracy / 41.9% non-hallucination row / −5.3 index** (AA — weak)
- GPQA Diamond: no verified public score found
- Surge AI blind human coding eval: **3.74/5, 2nd of 5** (Mistral blog; behind Claude Opus 5 at 4.22)

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
- **Cost efficiency: 87/100.** $1.36/$4.18 paid (≈ the $1.25/$4.25 ≈ 88 reference) with a 90% cache discount and $1.13 per AA task; launch sale at $0.68/$2.09 would push this into the low 90s. Paid, not $0 — not counted toward Overall.
- **Overall Score: 75.4/100.** (Was 72 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (70 + 72 + 88 + 72 + 75) / 5 = 377/5 = 75.4 — raised on the 2026-10-11 second pass as the fresh AA/Vals boards convert the preview's vendor-only evidence into measured corroboration. Best-fit recommendation: strong open-weight pick for sovereign cybersecurity, finance/legal, and document/grounding workloads; pair with a faster, cheaper executor for terminal-heavy agent loops.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Mistral Large 4 announcement, Artificial Analysis model benchmarks, Vals AI leaderboards (Finance Agent v2, Vibe Code Bench), plus the prior 2026-10-09 pass on the Mistral blog/docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
