# Muse Spark 1.2 Free — findings by GLM 5.3 Flash

- Source: Meta Superintelligence Labs (`muse-spark-1.2`; OpenCode Zen Contributor free tier)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free (Contributor free tier of Meta's Muse Spark 1.2; superseded by Muse Spark 1.3, 2026-09-02)
- **Short description:** Meta Superintelligence Labs' coding-focused upgrade to Muse Spark 1.1 and the model behind Meta's Muse Code terminal agent — released 2026-08-05 with 1M context, whole-repository generation and 1,000+ tool-call sessions. Evaluated here on the $0 Contributor tier (training-data consent).
- **Provider / access:** OpenCode Zen Contributor free tier (`opencode/muse-spark-1.2-contributor-free`, Responses API; free in exchange for training-data consent per repo catalog); Meta Model API (`muse-spark-1.2`); OpenRouter (`meta/muse-spark-1.2`); inside Muse Code. Proprietary, closed weights (a departure from Meta's open Llama line).
- **Release / knowledge:** released 2026-08-05 alongside Muse Code (lineage: Muse Spark 2026-04-08 → 1.1 2026-07-09 → 1.2 2026-08-05 → 1.3 2026-09-02). Knowledge cutoff not verified in this pass.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Zen); `muse-spark-1.2` (Meta API); `meta/muse-spark-1.2` (OpenRouter).
- **Context window:** 1,048,576 tokens (unchanged from 1.1), no long-context premium; max output not published on the pages checked.
- **Modalities:** text, images, video and PDFs in; text out (repo catalog adds audio). Reasoning + tool use; optimized for multi-step tool use across thousands of calls.
- **Pricing (as of 2026-09-18):** **$0** on the evaluated Contributor free tier (training-data consent — no confidential code); paid $1.25 in / $4.25 out per 1M, cached $0.15 (same rate as 1.1).
- **Architecture:** proprietary, parameters undisclosed; self-improvement training loop, co-trained with the Muse Code agent.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (each model with its own agent): **82.9%** with Muse Code — 2nd at launch behind Claude Opus 5 86.7% (Claude Code), ahead of GPT-5.6 Terra 81.8% (Codex), Grok 4.5 81.6%, Gemini 3.6 Flash 78.9% (Meta launch table via ai-tldr)
- Long-horizon tool use: KDA GPU-kernel case study runs **1,000+ tool calls in a single session** (Meta)
- MCP Atlas: **90.3%** (Benchgen, catalogued in `../../model-comparison.md`)
- GDPval: **1631** (BenchLM, catalogued in `../../model-comparison.md`)

Reasoning / knowledge:

- GPQA Diamond: **90.4%**; HLE: **45.5%**; BenchLM overall: **71.88, #11** (BenchLM, catalogued in `../../model-comparison.md`)

Coding:

- DeepSWE 1.1: **59.3%** — 3rd at launch behind Opus 5 65.0% and GPT-5.6 Terra 64.8%, ahead of Grok 4.5 56.6% and Gemini 3.6 Flash 40% (Meta launch table)
- Meta Internal Coding Bench: **70.6%** — 2nd behind Opus 5 79.4%, ahead of 1.1's 68.3% and Terra's 65.4% (same source)

Long context:

- Window: **1M tokens** with no long-context premium; MRCR/RULER at window length: no verified public score found

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 92/100.** TB2.1 82.9 (2nd at launch) + MCP Atlas 90.3 + 1,000+-call sessions — a top-tier agent, a clear step below Muse Spark 1.3's 88.8 TB.
- **Reasoning: 88/100.** GPQA 90.4 / HLE 45.5 / BenchLM 71.88 #11 — frontier-adjacent knowledge and reasoning.
- **Context window: 100/100.** 1M tokens with no premium and long-horizon session design as the headline feature.
- **Multimodal: 88/100.** Text + image + video + PDF in (audio per repo catalog); text-only output; no published vision benchmark.
- **Coding: 89/100.** DeepSWE 59.3 + Meta ICB 70.6 + TB2.1 82.9 — strong coding package, short of 1.3's DeepSWE 75.4.
- **Cost efficiency: 100/100.** Evaluated $0 Contributor free tier (training-data consent); paid $1.25/$4.25 with $0.15 cache noted.
- **Overall Score: 93/100.** Mean: (92 + 88 + 100 + 88 + 89 + 100) / 6 = 557/6 = 92.8 → **93**. Best fit: near-frontier free fallback for long-horizon coding/agentic work when 1.3 Free is unavailable.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (ai-tldr.dev Muse Spark 1.2 page quoting Meta's launch table of 2026-08-05 (per-model agent harnesses), pricing page and lineage; BenchLM/Benchgen rows as catalogued in `../../model-comparison.md`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
