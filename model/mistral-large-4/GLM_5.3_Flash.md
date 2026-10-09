# Mistral Large 4 — findings by GLM 5.3 Flash

- Source: Mistral (`mistral-large-4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (public preview, unofficially "ML4", officially *le Chonk*)
- **Short description:** Mistral's largest and most capable open-weight model — a 1.05T-parameter (52B active) natively multimodal MoE targeting coding, agentic workflows, cybersecurity, finance, and visual grounding. Preview API is live; weights drop end of October 2026.
- **Provider / access:** Mistral Studio preview API (`https://console.mistral.ai`, docs ID `mistral-large-4` / `mistral-large-4+1`); Chat Completions (`/v1/chat/completions`) and Conversations/Agents (`/v1/agents`, `/v1/conversations`) APIs with structured outputs, function calling, document QnA, batching, and built-in tools. Served on Mistral's own European datacenters (3,800 NVIDIA Grace Blackwell GPUs).
- **Release / knowledge:** 2026-10-06 release (public preview); knowledge cutoff not stated in preview announcement.
- **IDs:** `mistral/mistral-large-4` (Mistral first-party API); no Free ID on OpenCode Zen verified as of 2026-10-09.
- **Context window:** 1M total per the official Mistral docs model card (`i: 1M`); Artificial Analysis lists 524K for the hosted preview — verified against both sources, discrepancy noted (hosted preview may ship a reduced window vs. the docs-stated 1M).
- **Modalities:** text + image input (1.6B vision encoder; PDF document QnA supported), text output; reasoning yes (hybrid instruct-and-reasoning MoE); tool calls yes; JSON/structured outputs yes.
- **Pricing (as of 2026-10-09):** $1.36 in / $4.18 out / $0.14 cached per 1M (paid, first-party); launch sale pricing $0.68 in / $2.09 out / $0.07 cached per 1M. AA cache discount 90%, ~$1.13 per Intelligence Index task. Open weights are proprietary-only until the end-of-October weights drop.
- **Architecture:** 1.05T total / 52B active parameters, granular Mixture-of-Experts, 1.6B vision encoder; open-weights license announced but not yet published (weights end of October 2026).

### Raw benchmarks found

Agent / tool use:

- AutomationBench (657 business workflows): **59.9%** (Mistral blog, ahead of Kimi K3, MiMo-V2.6-Pro, DeepSeek V4 Pro)
- Terminal-Bench 4.0: **28.3%** (Mistral blog / AA Terminal-Bench 4.0)
- SWE-Atlas QnA: **59.4%** (Mistral blog)
- Combined Coding Agent Index: **49.8%** (Mistral blog, ahead of DeepSeek V4 Pro 0813 and Qwen3.8 Max)
- AA-Briefcase v1.1: **1,393 Elo** (Mistral blog, ahead of DeepSeek V4 Pro)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38 / #64 of 226** (AA model page; above the price-tier median of 26)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Cybench: **93%** (Mistral blog — 40 security-competition challenges, among the highest open-weight scores)
- AA-Omniscience Accuracy / Hallucination Rate: no verified public score found
- Surge AI blind human coding eval: **3.74/5, 2nd of 5** (Mistral blog; behind Claude Opus 5 at 4.22, ahead of Kimi K3 3.59, GLM-5.3 3.60)

Coding:

- DeepSWE v1.1: **61.7%** (Mistral blog / AA)
- SciCode-Verified: **state of the art among open-weight models** (Mistral blog; exact number not published — no verified numeric score found)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found

Cybersecurity / safety:

- Artificial Analysis Cyber Index: top-5 global rank, leads open-weight non-China models (Mistral blog)
- CyberGym-E2E reproduce-and-patch test: **82%, highest of any model** (Mistral blog)
- B3 AI Security Benchmark (Lakera): **93.3% attack resistance** (Mistral blog, no higher score among competitors)
- KORA Benchmark: **1.691** of max 2 (Mistral blog, highest measured among OSS)

Multimodal:

- Dense 200 (visual grounding): **42%** vs GPT-6-Astra 41% (Mistral blog)
- ChartQA Pro / GDP.pdf: charted on the Mistral blog but exact values not extractable — no verified numeric score found
- Long context: no long-context retrieval reported (AA-LCR "not publicly available" at time of check)

Speed: 116.1 output tokens/s, 1.46s TTFT (AA, Mistral first-party API). Very verbose: 200M output tokens across the Intelligence Index run (median 81M).

### Normalized scores (1–100)

- **Tool use: 65/100.** AutomationBench 59.9% and AA-Briefcase 1,393 Elo lead strong agentic peers (Kimi K3, DeepSeek V4 Pro), and Coding Agent Index 49.8% is competitive — but Terminal-Bench 4.0 28.3% is weak for a frontier agent model, capping the score.
- **Reasoning: 68/100.** AA Intelligence Index 38 sits just above the 20–35 mid-band mapped to 55–65, backed by vendor-reported strong STEM/CAD human-eval wins over GLM-5.3; the missing public GPQA/HLE/LCR numbers and preview-stage RL ("no signs of saturation") cap it below frontier.
- **Context window: 85/100.** Official docs card states 1M total (top tier), but AA measures 524K on the hosted preview and no long-context retrieval benchmark (MRCR/RULER/LCR) is publicly reported, so the 1M claim cannot be confirmed at ≥98% retrieval — scored in the 500K–1M band.
- **Multimodal: 72/100.** Text + image input with a 1.6B vision encoder, PDF QnA, and leading visual grounding (Dense 200 42% > GPT-6-Astra) place it above the plain image-in band (60–70); text-only output and no confirmed video/audio input cap it below the 75–90 PDF/video band.
- **Coding: 72/100.** DeepSWE v1.1 61.7%, SWE-Atlas-QnA 59.4%, Coding Agent Index 49.8%, and open-weight SOTA SciCode-Verified with a 3.74/5 Surge AI human-eval rank are strong, but all sit below the 90–100 frontier refs (DeepSWE 74%+, Coding Index 70%+), and TB4 28.3% drags terminal/agentic coding down.
- **Cost efficiency: 87/100.** $1.36/$4.18 paid (≈ the $1.25/$4.25 ≈ 88 reference) with a 90% cache discount and $1.13 per AA task; launch sale at $0.68/$2.09 would push this into the low 90s. Paid, not $0 — not counted toward Overall.
- **Overall Score: 72/100.** Mean of the five quality dims (65 + 68 + 85 + 72 + 72) / 5 = 72.4 → 72. Best-fit recommendation: strong open-weight pick for sovereign cybersecurity, finance/legal, and document/grounding workloads; pair with a faster, cheaper executor for terminal-heavy agent loops.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (Mistral official blog and docs, Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
